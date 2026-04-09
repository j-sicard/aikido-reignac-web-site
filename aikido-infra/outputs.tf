output "bucket_name" {
  description = "Nom du bucket S3"
  value       = aws_s3_bucket.site.id
}

output "distribution_id" {
  description = "ID de la distribution CloudFront"
  value       = aws_cloudfront_distribution.site.id
}

output "site_url" {
  description = "URL du site"
  value = var.environment == "prod" ? "https://${var.domain_name}" : "https://${aws_cloudfront_distribution.site.domain_name}"
}

output "cloudfront_domain" {
  description = "Domaine CloudFront brut (utile pour debug)"
  value       = aws_cloudfront_distribution.site.domain_name
}
