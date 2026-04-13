<div align="center">

# Aïkido Arts Martiaux Reignacais

### Site vitrine full stack — React · AWS · Terraform · CI/CD

[![CI Dev](https://github.com/j-sicard/aikido-reignac-web-site/actions/workflows/deploy-dev.yml/badge.svg?branch=dev)](https://github.com/j-sicard/aikido-reignac-web-site/actions/workflows/deploy-dev.yml)
[![CI Prod](https://github.com/j-sicard/aikido-reignac-web-site/actions/workflows/deploy-prod.yml/badge.svg?branch=master)](https://github.com/j-sicard/aikido-reignac-web-site/actions/workflows/deploy-prod.yml)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Terraform](https://img.shields.io/badge/Terraform-1.6+-7B42BC?style=flat-square&logo=terraform)](https://terraform.io)
[![AWS](https://img.shields.io/badge/AWS-S3_·_CloudFront_·_Route53-FF9900?style=flat-square&logo=amazonaws)](https://aws.amazon.com)

**[🌐 Voir le site](https://aikido-regnacais.fr)** · **[📁 Frontend](./aikido)** · **[☁️ Infrastructure](./aikido-infra)**

</div>

---

## Ce projet en 30 secondes

Site vitrine pour un club d'Aïkido local, conçu comme un projet **full stack de bout en bout** : du composant React jusqu'au déploiement cloud automatisé.

Ce que ce projet démontre concrètement :

- Développement d'une **SPA React** avec routing, SEO dynamique et tests unitaires
- **Infrastructure as Code** complète sur AWS avec Terraform (S3, CloudFront, Route 53, ACM)
- Pipeline **CI/CD GitHub Actions** avec séparation dev/prod, gate d'approbation manuelle en production et rapport de couverture de tests
- Authentification AWS sans clé via **OIDC** (bonne pratique sécurité)

---

## Stack technique

| Couche | Technologies |
|---|---|
| Frontend | React 19, Vite 8, Tailwind CSS 4, React Router 7 |
| Tests | Vitest, Testing Library, coverage V8 |
| Infrastructure | Terraform 1.6+, AWS S3, CloudFront, Route 53, ACM |
| CI/CD | GitHub Actions, OIDC AWS, multi-environnements |

---

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                   GitHub Actions                    │
│  push dev → CI dev    push master → CI prod (gate)  │
└──────────────┬──────────────────────┬───────────────┘
               │                      │
        ┌──────▼──────┐        ┌──────▼──────┐
        │  S3  (dev)  │        │  S3  (prod) │
        └──────┬──────┘        └──────┬──────┘
               │                      │
        ┌──────▼──────┐        ┌──────▼──────┐
        │  CloudFront │        │  CloudFront │
        │    (dev)    │        │    (prod)   │
        └─────────────┘        └──────┬──────┘
                                      │
                               ┌──────▼──────┐
                               │  Route 53   │
                               │ aikido-     │
                               │ regnacais.fr│
                               └─────────────┘
```

---

## Structure du repo

```
aikido-reignac-web-site/
├── aikido/              # Application React → README dédié
├── aikido-infra/        # Infrastructure Terraform → README dédié
└── .github/workflows/   # Pipelines CI/CD (dev + prod)
```

---

## Workflow de développement

```
feature → dev (CI auto) → PR → master (CI + approbation manuelle → prod)
```

---

## Auteur

**Julien Sicard** — Développeur web full stack junior

[![LinkedIn](https://img.shields.io/badge/LinkedIn-srdjulien-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/srdjulien)
[![GitHub](https://img.shields.io/badge/GitHub-j--sicard-181717?style=flat-square&logo=github)](https://github.com/j-sicard)
