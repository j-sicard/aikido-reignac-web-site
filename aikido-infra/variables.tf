variable "environment" {
  description = "Environnement de déploiement (dev ou prod)"
  type        = string

  validation {
    condition     = contains(["dev", "prod"], var.environment)
    error_message = "La valeur doit être 'dev' ou 'prod'."
  }
}

variable "aws_region" {
  description = "Région AWS cible"
  type        = string
  default     = "eu-west-3"
}

variable "domain_name" {
  description = "Nom de domaine principal (prod uniquement)"
  type        = string
  default     = ""
}

variable "acm_certificate_arn" {
  description = "ARN du certificat ACM us-east-1 (prod uniquement)"
  type        = string
  default     = ""
}

variable "route53_zone_id" {
  description = "ID de la hosted zone Route 53 (prod uniquement)"
  type        = string
  default     = ""
}
