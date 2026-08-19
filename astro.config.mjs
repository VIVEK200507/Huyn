// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// ─────────────────────────────────────────────────────────────
// GITHUB PAGES SETUP — edit before you deploy:
//
// If served at  https://<username>.github.io/<repo-name>/
//   site: 'https://<username>.github.io',
//   base: '/<repo-name>',
//
// If the repo IS your user/org page (repo named <username>.github.io):
//   site: 'https://<username>.github.io',
//   base: '/',
//
// Since you own a custom domain and will point it at GitHub Pages
// (CNAME file in /public + DNS on your domain), use:
//   site: 'https://yourdomain.com',
//   base: '/',
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://huyn.com',
  base: '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
