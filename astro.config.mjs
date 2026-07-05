// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output only — no SSR, no server runtime. The site is a pure render
// of src/content/trust.yaml (see Astro Handoff Spec §1).
export default defineConfig({
  site: 'https://trust.onetimesecret.com',
  output: 'static',
  integrations: [sitemap()],
});
