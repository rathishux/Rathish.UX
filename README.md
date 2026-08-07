# Rathish Gandhi — Portfolio

A newspaper/editorial-styled personal portfolio site — masthead header, featured
work, an interactive "draft a brief" widget, and a scripted FAQ chat widget.
Built with React + TypeScript + Vite + Tailwind CSS, deployed to GitHub Pages.

## Running locally

```
npm install
npm run dev
```

## Building

```
npm run build   # type-checks and builds to dist/
npm run preview # preview the production build locally
```

## Content

All copy lives in one file: **`src/content/site-data.ts`** — name, bio,
work history, skills, education, and the FAQ chat widget's Q&A. Sourced
from Rathish's resume; edit that file to update anything on the site
without touching components.

`public/resume.docx` is the downloadable résumé linked from the header
and Contact page — replace it directly to update.

## Structure

- `src/pages/` — top-level routes (Home, Work, Work detail, About, Contact)
- `src/components/layout/` — masthead header (with live clock) and footer
- `src/components/home/` — homepage sections (hero, featured work, domains,
  timeline, the "draft your own brief" generator, contact CTA)
- `src/components/chat/faq-widget.tsx` — the floating "Ask Ratz" chat
  widget. It's a scripted, keyword-matched FAQ (no API key, no backend) —
  see `faq` in `site-data.ts` to add or edit answers.
- `src/components/ui/` — shadcn-style UI primitives (button, card, badge)

## Deployment

Deploys automatically to GitHub Pages via `.github/workflows/deploy.yml`
on every push to `main`. **One manual step required once:** in this
repo's Settings → Pages, set "Source" to **GitHub Actions**. After that,
the site is live at `https://rathishux.github.io/Rathish.UX/`.

The Vite `base` in `vite.config.ts` is set to `/Rathish.UX/` to match
this repo's name as a GitHub Pages *project* site. If this repo is ever
renamed to `rathishux.github.io` (a root user site), change `base` to
`/` and update the `pathSegmentsToKeep` value in `public/404.html` to `0`.

## Not included (by request)

No personal photos, no awards/achievements section, no blog/articles
section, and no exact "mad libs" clone — the "draft your own brief"
widget on the home page is a different, portfolio-relevant take on that
idea. No real testimonials are included since none were supplied;
add a testimonials section to `src/pages/home-page.tsx` if you get some.
