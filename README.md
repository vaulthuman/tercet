# Tercet Law — website

Astro static site. Black-and-white VH house style.
Deployed via Cloudflare Pages (build: `npm run build`, output: `dist`).

## Editing content
All copy, prices, plans, and practice areas live in **`src/data/site.js`**.
Change a value there → commit → push → Cloudflare rebuilds live in ~1 min.
No visual editor, no layout file to touch for routine updates.

## Fonts
- Headings/display: **Fraunces** (Google Fonts) — refined high-contrast serif.
- Cursive subline: **Pinyon Script** (Google Fonts).
- Body: **Inter** (Google Fonts).
Swap in `src/pages/index.astro` (the Google Fonts link) + `src/styles/global.css`.
To use exact licensed fonts (e.g. Ball Pen / Ogg), drop the files in `public/fonts/` and add @font-face.

## Local dev (optional)
`npm install && npm run dev` → http://localhost:4321
