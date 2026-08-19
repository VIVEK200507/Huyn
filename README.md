# Hayu Cafe — Website

Astro + Tailwind v4 + GSAP. Static output — deploys to GitHub Pages.

## Run locally
```
npm install
npm run dev
```

## Build
```
npm run build
```
Output goes to `/dist`.

## Before you deploy — edit these
1. **astro.config.mjs** — set `site` to your real domain.
2. **src/pages/index.astro** and **Footer.astro** — replace the `TODO` hours / address / phone / Instagram placeholders.
3. **src/components/Logo.astro** — swap the text "HAYU" mark for a real logo image whenever you have one.
4. **src/content/menu/** — one markdown file per dish/drink. Edit price/name/description here — no code changes needed. Add a new file to add a new item.
5. **src/content/events/** and **src/content/blog/** — same idea, one file per entry, currently all placeholders.
6. **src/components/GalleryGrid.astro** — swap the color-block placeholders for real photos in `/public`.
7. Add a `CNAME` file to `/public` containing your domain (e.g. `hayucafe.com`) if using a custom domain with GitHub Pages, and point your domain's DNS at GitHub Pages per GitHub's docs.

## Deploy to GitHub Pages
Push this repo to GitHub, then either:
- Use GitHub's built-in Pages workflow (Settings → Pages → Build and deployment → GitHub Actions → pick the Astro starter workflow), or
- Add your own `.github/workflows/deploy.yml` that runs `npm run build` and publishes `/dist`.
