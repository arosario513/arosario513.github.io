# arosario513.github.io

Personal portfolio site for COMP-3600 (Computer Graphics) coursework.

Built with Next.js 16, Bootstrap 5, Bun, and Turborepo. Deployed to GitHub Pages via GitHub Actions.

## Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Styling**: Bootstrap 5 + Bootstrap Icons
- **Package manager**: Bun
- **Monorepo**: Turborepo

## Development

```bash
bun install       # install dependencies
bun run dev       # start dev server
bun run build     # production build
```

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via `.github/workflows/deploy.yml`.
