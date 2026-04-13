<div align="center">

# Frontend — Aïkido Arts Martiaux Reignacais

**SPA React · Vite · Tailwind CSS · Vitest**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Tests](https://img.shields.io/badge/Tests-32_passed-22c55e?style=flat-square&logo=vitest)](./src/test)

</div>

---

## Fonctionnalités

- Navigation multi-pages avec React Router (SPA, pas de rechargement)
- SEO dynamique par page : meta description, Open Graph, JSON-LD `SportsClub`
- Formulaire de contact via Formspree (honeypot anti-bot inclus)
- Carrousel d'images interactif (page Pratique)
- Design responsive mobile-first
- Pages légales conformes RGPD (Mentions légales, Politique de confidentialité)
- `sitemap.xml` et `robots.txt` inclus dans le build

---

## Stack

| Outil | Rôle |
|---|---|
| React 19 | UI et gestion d'état local |
| Vite 8 | Build tool et dev server |
| Tailwind CSS 4 | Styling utility-first |
| React Router 7 | Routing côté client |
| Lucide React | Icônes SVG |
| Formspree | Backend formulaire de contact |
| Vitest + Testing Library | Tests unitaires et couverture |

---

## Structure

```
aikido/
├── public/
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── assets/              # Images
│   ├── components/
│   │   ├── Layout.jsx       # Nav + Footer communs
│   │   └── SEO.jsx          # Meta tags dynamiques
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Esprit.jsx
│   │   ├── Pratique.jsx
│   │   ├── Contact.jsx
│   │   ├── MentionsLegales.jsx
│   │   └── PolitiqueConfidentialite.jsx
│   └── test/                # 32 tests unitaires
├── index.html               # JSON-LD + Open Graph
└── vite.config.js           # Config Vite + Vitest
```

---

## Installation & lancement

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Build production → dist/
npm run test       # 32 tests unitaires
npm run test:coverage  # Rapport de couverture
```

---

## SEO & Performance

- `lang="fr"` sur le document HTML
- Titre et meta description uniques par page via `SEO.jsx`
- Données structurées JSON-LD (`SportsClub`) : adresse, horaires, téléphone
- Open Graph pour le partage réseaux sociaux
- Assets hashés par Vite pour le cache navigateur
- Compression gzip activée sur CloudFront
