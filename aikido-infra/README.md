<div align="center">

# Infrastructure — Aïkido Arts Martiaux Reignacais

**Terraform · AWS S3 · CloudFront · Route 53 · ACM · GitHub Actions OIDC**

[![Terraform](https://img.shields.io/badge/Terraform-1.6+-7B42BC?style=flat-square&logo=terraform)](https://terraform.io)
[![AWS](https://img.shields.io/badge/AWS-eu--west--3-FF9900?style=flat-square&logo=amazonaws)](https://aws.amazon.com)

</div>

---

## Objectif

Héberger un site statique React de façon sécurisée, performante et reproductible sur AWS, avec deux environnements isolés gérés en Infrastructure as Code.

---

## Architecture cloud

```
Visiteur
   │
   ▼
Route 53 (DNS)
aikido-regnacais.fr / www.aikido-regnacais.fr
   │
   ▼
CloudFront (CDN + HTTPS)
├── Certificat ACM (TLS 1.2+)
├── Cache optimisé (prod) / désactivé (dev)
└── SPA fallback 403/404 → index.html
   │
   ▼
S3 Bucket (privé)
└── Accès exclusif via OAC (Origin Access Control)
```

---

## Services AWS utilisés

| Service | Rôle |
|---|---|
| S3 | Stockage des fichiers statiques du build React |
| CloudFront | CDN mondial, HTTPS, compression gzip, cache |
| ACM | Certificat SSL/TLS pour `aikido-regnacais.fr` et `*.aikido-regnacais.fr` |
| Route 53 | DNS — records A alias vers CloudFront (apex + www) |
| IAM OIDC | Authentification GitHub Actions sans clé AWS |
| S3 (state) | Stockage du Terraform state (`aikido-terraform-state`) |

---

## Environnements

| | Dev | Prod |
|---|---|---|
| Bucket | `aikido-regnacais-dev` | `aikido-regnacais-prod` |
| Domaine | `*.cloudfront.net` | `aikido-regnacais.fr` |
| Cache CloudFront | Désactivé | Optimisé |
| Versioning S3 | Non | Oui |
| Suppression bucket | Automatique | Protégée |
| Certificat | CloudFront défaut | ACM custom |
| Records Route 53 | Non | Oui (apex + www) |

---

## Structure

```
aikido-infra/
├── main.tf          # S3, CloudFront, OAC, Route 53, bucket policy
├── variables.tf     # Variables avec validation
├── outputs.tf       # bucket_name, distribution_id, site_url
└── env/
    ├── dev.tfvars   # Config environnement dev
    └── prod.tfvars  # Config environnement prod
```

---

## CI/CD — GitHub Actions

Le déploiement est entièrement automatisé. L'authentification AWS utilise **OIDC** — aucune clé AWS stockée dans GitHub.

**Pipeline dev** (push sur `dev`) :
```
Tests (32) → Build → Terraform apply → S3 sync → Invalidation cache
```

**Pipeline prod** (merge PR dev → master) :
```
Tests (32) → Build → Terraform plan → [Approbation manuelle] → Terraform apply → S3 sync → Invalidation cache
```

---

## Utilisation locale

```bash
# Initialiser (dev)
terraform init -backend-config="key=aikido/dev/terraform.tfstate"
terraform plan -var-file="env/dev.tfvars"
terraform apply -var-file="env/dev.tfvars"

# Initialiser (prod)
terraform init -reconfigure -backend-config="key=aikido/prod/terraform.tfstate"
terraform plan -var-file="env/prod.tfvars"
```

> Le Terraform state est stocké dans S3 (`aikido-terraform-state`, région `eu-west-3`).
