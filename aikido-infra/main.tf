terraform {
  required_version = ">= 1.6"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Backend S3 — décommenter et adapter pour stocker le state à distance
  # backend "s3" {
  #   bucket         = "aikido-terraform-state"
  #   key            = "aikido/${var.environment}/terraform.tfstate"
  #   region         = "eu-west-3"
  #   dynamodb_table = "aikido-terraform-locks"
  #   encrypt        = true
  # }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "aikido-regnacais"
      Environment = var.environment
      ManagedBy   = "terraform"
    }
  }
}

locals {
  is_prod     = var.environment == "prod"
  bucket_name = "aikido-regnacais-${var.environment}"

  # Domaines CloudFront — vides en dev, apex + www en prod
  aliases = local.is_prod ? [var.domain_name, "www.${var.domain_name}"] : []
}

# ─── S3 Bucket ───────────────────────────────────────────────────────────────

resource "aws_s3_bucket" "site" {
  bucket        = local.bucket_name
  force_destroy = !local.is_prod

  tags = {
    Name = local.bucket_name
  }
}

resource "aws_s3_bucket_public_access_block" "site" {
  bucket = aws_s3_bucket.site.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_versioning" "site" {
  bucket = aws_s3_bucket.site.id

  versioning_configuration {
    status = local.is_prod ? "Enabled" : "Disabled"
  }
}

# ─── CloudFront Origin Access Control ────────────────────────────────────────

resource "aws_cloudfront_origin_access_control" "site" {
  name                              = "aikido-oac-${var.environment}"
  description                       = "OAC for ${local.bucket_name}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# ─── CloudFront Distribution ─────────────────────────────────────────────────

resource "aws_cloudfront_distribution" "site" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  price_class         = "PriceClass_100"

  # Aliases uniquement en prod (apex + www)
  aliases = local.aliases

  origin {
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id                = "s3-${local.bucket_name}"
    origin_access_control_id = aws_cloudfront_origin_access_control.site.id
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "s3-${local.bucket_name}"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    # Dev : cache désactivé — Prod : cache optimisé
    cache_policy_id = local.is_prod ? "658327ea-f89d-4fab-a63d-7e88639e58f6" : "4135ea2d-6df8-44a3-9df3-4b5a84be39ad"
  }

  # SPA fallback — React Router
  custom_error_response {
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 0
  }

  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 0
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # Dev : certificat CloudFront par défaut
  # Prod : certificat ACM aikido-regnacais.fr + *.aikido-regnacais.fr
  viewer_certificate {
    cloudfront_default_certificate = local.is_prod ? false : true
    acm_certificate_arn            = local.is_prod ? var.acm_certificate_arn : null
    ssl_support_method             = local.is_prod ? "sni-only" : null
    minimum_protocol_version       = local.is_prod ? "TLSv1.2_2021" : null
  }

  tags = {
    Name = "aikido-distribution-${var.environment}"
  }
}

# ─── Bucket Policy — accès CloudFront uniquement ─────────────────────────────

resource "aws_s3_bucket_policy" "site" {
  bucket = aws_s3_bucket.site.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontServicePrincipal"
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.site.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.site.arn
          }
        }
      }
    ]
  })
}

# ─── Route 53 — uniquement en prod ───────────────────────────────────────────

# Enregistrement apex : aikido-regnacais.fr → CloudFront
resource "aws_route53_record" "apex" {
  count   = local.is_prod ? 1 : 0
  zone_id = var.route53_zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

# Enregistrement www : www.aikido-regnacais.fr → CloudFront
resource "aws_route53_record" "www" {
  count   = local.is_prod ? 1 : 0
  zone_id = var.route53_zone_id
  name    = "www.${var.domain_name}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}
