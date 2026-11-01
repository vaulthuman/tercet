# Tercet Law — website

Astro static site for Tercet Law, PLLC (Austin, Texas). Same frame as the Vault Human family sites.
Deployed via Cloudflare Pages (build: `npm run build`, output: `dist`). `main` is live; other branches get preview deployments.

## Editing content
- **`src/data/site.js`** holds the settings and shared content: the responsible attorney (`RESPONSIBLE_ATTORNEY`, the one place to change it), firm details, the booking call to action, plans and prices (the only place prices are written), the three steps, the "Why Tercet" lines, the StoryBrand message (`story`), the services, the checklist, the header navigation (`nav`), the client portal link (`clientPortal`) and the Texas FAQ.
- **`src/layouts/Base.astro`** is the shared frame: head tags, Google Ads tag and lead listener, structured data, header, footer, booking modal.
- **`src/pages/`** holds one file per page: home, services, pricing, process, FAQ, about, start (booking), checklist (free Texas checklist; its PDF is `public/tercet-texas-estate-planning-checklist.pdf`, regenerate it when the list changes), login (client portal) and the legal pages. `llms.txt` is built from `site.js` by `src/pages/llms.txt.js`.
- **`src/styles/`**: `family.css` (shared family frame), `tokens.css` (Tercet colour), `tercet.css` (Tercet page components).
- Photos live in `public/images/`; photographer, source page and licence for each are in `public/images/CREDITS.md`. Each photo appears once on the site.
- Retired URLs are redirected in `public/_redirects`.

## Local dev (optional)
`npm install && npm run dev` → http://localhost:4321
