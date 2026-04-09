<div align="center">

# 合気道 — Aïkido Arts Martiaux Reignacais

**Site vitrine du club d'Aïkido de Reignac (Gironde, 33)**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Terraform](https://img.shields.io/badge/Terraform-1.6+-7B42BC?style=flat-square&logo=terraform&logoColor=white)](https://terraform.io)
[![AWS](https://img.shields.io/badge/AWS-S3_+_CloudFront-FF9900?style=flat-square&logo=amazonaws&logoColor=white)](https://aws.amazon.com)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)](https://github.com/j-sicard/aikido-web-site/actions)
[![License](https://img.shields.io/badge/Licence-Propriétaire-red?style=flat-square)](./LICENSE)
[![Deploy](https://img.shields.io/badge/Deploy-CloudFront_HTTPS-success?style=flat-square&logo=amazonaws)](https://d1ges4chvr5pnl.cloudfront.net)

[🌐 Voir le site](https://d1ges4chvr5pnl.cloudfront.net) · [📬 Contact](mailto:aikidoreignac@gmail.com)

</div>

---

## 📸 Aperçu

> _Screenshot à venir — [voir le site en ligne](https://d1ges4chvr5pnl.cloudfront.net)_

![Aperçu du site](https://placehold.co/1200x600/f5f0e8/1a1a1a?text=Aïkido+Arts+Martiaux+Reignacais)

---

## 📋 Description

Site vitrine moderne pour le club d'**Aïkido Arts Martiaux Reignacais**, développé avec React et déployé sur AWS via CDK.

Il présente :
- Les horaires et informations du club
- L'esprit et la philosophie de l'Aïkido
- La pratique (Taijutsu & Bukiwaza)
- Un formulaire de contact intégré (Formspree)
- Les pages légales conformes RGPD

---

## 🛠 Technologies

| Catégorie | Technologie | Version |
|---|---|---|
| Framework UI | React | 19 |
| Build tool | Vite | 8 |
| Style | Tailwind CSS | 4 |
| Routing | React Router DOM | 7 |
| Icônes | Lucide React | latest |
| Formulaire | Formspree | — |
| Infra cloud | Terraform | 1.6+ |
| Hébergement | AWS S3 + CloudFront | — |
| CI/CD | GitHub Actions | — |

---

## 📁 Structure du projet

```
aikido-web-site/
│
├── aikido/                          # Application React (front-end)
│   ├── public/
│   │   ├── sitemap.xml              # Sitemap SEO
│   │   ├── robots.txt               # Directives crawlers
│   │   └── favicon.svg
│   │
│   ├── src/
│   │   ├── assets/                  # Images et médias
│   │   ├── components/
│   │   │   ├── Layout.jsx           # Layout global (nav + footer)
│   │   │   └── SEO.jsx              # Meta tags dynamiques par page
│   │   └── pages/
│   │       ├── Home.jsx             # Page d'accueil
│   │       ├── Esprit.jsx           # L'esprit de l'Aïkido
│   │       ├── Pratique.jsx         # Taijutsu & Bukiwaza
│   │       ├── Contact.jsx          # Formulaire + carte
│   │       ├── MentionsLegales.jsx  # Mentions légales
│   │       └── PolitiqueConfidentialite.jsx
│   │
│   ├── deploy.ps1                   # Script de déploiement PowerShell
│   ├── index.html                   # HTML racine + SEO + JSON-LD
│   └── package.json
│
└── aikido-infra/                    # Infrastructure AWS (Terraform)
    ├── main.tf                      # S3 + CloudFront + OAC + bucket policy
    ├── variables.tf                 # Variables (environment, region)
    ├── outputs.tf                   # Outputs (bucket, distribution, URL)
    └── terraform.tfvars.example     # Template de configuration
```

---

## 🚀 Installation & développement local

### Prérequis

- [Node.js](https://nodejs.org) 18+
- [AWS CLI](https://aws.amazon.com/cli/) configuré (`aws configure`)
- PowerShell (Windows) ou adaptation du script pour bash/zsh

### 1. Cloner le dépôt

```bash
git clone https://github.com/j-sicard/aikido-web-site.git
cd aikido-web-site
```

### 2. Installer les dépendances

```bash
# Application front-end
cd aikido
npm install

# Infrastructure CDK
cd ../aikido-infra
npm install
```

### 3. Lancer le serveur de développement

```bash
cd aikido
npm run dev
```

> Le site est accessible sur **http://localhost:5173**

---

## ☁️ Déploiement

### Architecture cloud

```
Visiteur ──► CloudFront (HTTPS) ──► S3 Bucket (privé, OAC)
```

- **S3** : bucket privé, accessible uniquement via CloudFront (Origin Access Control)
- **CloudFront** : HTTPS, redirection HTTP→HTTPS, SPA fallback (403/404 → `index.html`)
- **Multi-environnements** : workspaces Terraform `dev` et `prod` indépendants

| Ressource | Dev | Prod |
|---|---|---|
| Bucket S3 | `aikido-regnacais-dev` | `aikido-regnacais-prod` |
| Cache CloudFront | Désactivé | Optimisé |
| Versioning S3 | Désactivé | Activé |
| Suppression bucket | `force_destroy = true` | Protégé |

### Infrastructure Terraform

```bash
cd aikido-infra

# Copier et adapter la config
cp terraform.tfvars.example terraform.tfvars

# Initialiser
terraform init

# Sélectionner l'environnement
terraform workspace select dev   # ou prod

# Planifier
terraform plan -var="environment=dev"

# Appliquer
terraform apply -var="environment=dev"
```

### CI/CD — GitHub Actions

Le déploiement est entièrement automatisé via GitHub Actions.

| Branche | Workflow | Environnement | Gate |
|---|---|---|---|
| `dev` | `deploy-dev.yml` | dev | Automatique |
| `master` | `deploy-prod.yml` | prod | **Approbation manuelle requise** |

**Flux dev :**
```
push dev → Build → Terraform apply → S3 sync → CloudFront invalidation
```

**Flux prod :**
```
push master → Build → Terraform plan → [Review] → Terraform apply → S3 sync → CloudFront invalidation
```

### Secrets GitHub à configurer

Dans **Settings → Secrets and variables → Actions** :

| Secret | Description |
|---|---|
| `AWS_ROLE_ARN_DEV` | ARN du rôle IAM pour l'environnement dev |
| `AWS_ROLE_ARN_PROD` | ARN du rôle IAM pour l'environnement prod |

> L'authentification utilise **OIDC** (pas de clés AWS stockées). Configurer les rôles IAM avec trust policy GitHub Actions.

### Environnements GitHub à configurer

Dans **Settings → Environments** :
- `dev` — déploiement automatique
- `prod` — ajouter des **Required reviewers** pour le gate manuel

---

## 🔍 SEO & Accessibilité

- **Meta tags dynamiques** par page via le composant `SEO.jsx`
- **Données structurées JSON-LD** (`SportsClub`) : adresse, horaires, téléphone
- **Open Graph** pour le partage sur réseaux sociaux (Facebook, LinkedIn)
- **`sitemap.xml`** soumis aux moteurs de recherche
- **`robots.txt`** avec directives crawlers et lien sitemap
- `lang="fr"` sur le document HTML
- Images avec attributs `alt` descriptifs

---

## 🗺 Roadmap

- [ ] Nom de domaine personnalisé + certificat SSL ACM
- [ ] Galerie photos du club
- [ ] Section actualités / événements
- [ ] Formulaire de pré-inscription en ligne
- [ ] Backend Terraform state sur S3 + DynamoDB lock
- [ ] Tests Lighthouse automatisés dans la CI

---

## 👤 Auteur

**Julien Sicard** — Développeur web

[![LinkedIn](https://img.shields.io/badge/LinkedIn-srdjulien-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/srdjulien)
[![GitHub](https://img.shields.io/badge/GitHub-j--sicard-181717?style=flat-square&logo=github)](https://github.com/j-sicard)
[![Email](https://img.shields.io/badge/Email-srdjulien%40gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:srdjulien@gmail.com)

---

## 📄 Licence

Ce projet est à usage personnel et associatif.  
Le code source est librement consultable.  
Le contenu (textes, photos du club) appartient à l'**Aïkido Arts Martiaux Reignacais**.  
Toute reproduction sans autorisation est interdite.
