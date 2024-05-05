# ITS Linktree

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
[![Deploy Next.js site to Pages](https://github.com/info-telecom-strasbourg/linktree/actions/workflows/nextjs.yml/badge.svg)](https://github.com/info-telecom-strasbourg/linktree/actions/workflows/nextjs.yml)

A simple Linktree-like page for ITS.

Generated using https://github.com/abhijhacodes/linkhub template.

## Development

Clone the repository and install the dependencies:
```bash
npm i
```

Run the development server:
```bash
npm run dev
```

The cards are defined in `data/linkDetails.ts` and the icons in `data/icons.tsx`. The association is made by `components/LinkCard.tsx` using Font-Awesome icons and custom ones in SVG.

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions. The deployment configuration is in `.github/workflows/nextjs.yml`.
