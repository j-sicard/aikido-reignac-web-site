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
