// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Static output only — no SSR, no server runtime. The site is a pure render
// of src/content/trust.yaml and src/content/policy-constants.yaml (see
// Astro Handoff Spec §1). The policy documents (/terms, /privacy, /dpa,
// /toms) are MDX that interpolates policy-constants — the same data the
// trust pages read.
export default defineConfig({
  site: 'https://trust.onetimesecret.com',
  output: 'static',
  integrations: [sitemap(), mdx()],
});
