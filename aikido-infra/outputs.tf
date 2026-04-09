output "bucket_name" {
  description = "Nom du bucket S3"
  value       = aws_s3_bucket.site.id
}

output "distribution_id" {
  description = "ID de la distribution CloudFront"
  value       = aws_cloudfront_distribution.site.id
}

output "site_url" {
  description = "URL HTTPS du site"
  value       = "https://${aws_cloudfront_distribution.site.domain_name}"
}
