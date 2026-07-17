// Build-time site phase, read once here so every layout agrees on it. Kept as
// an environment variable rather than a code flag on purpose: the repo never
// changes to go to production — the same commit builds either way, and only
// the publish pipeline (which sets SITE_PHASE=production) can produce a build
// without the non-production notices. See the schema in astro.config.mjs.
//
// FAIL-SAFE by construction: the preview banners render unless the build
// explicitly declares production. Only the exact value `production` hides
// them — unset, misspelled, or unexpected values all fall through to preview.
// On a trust site, the wrong failure mode is a placeholder page that looks
// real; a production build that still shows the banner is merely embarrassing
// and instantly diagnosable.
//
//   pnpm build                        → preview (banners shown)
//   SITE_PHASE=production pnpm build  → production (banners hidden)

import { SITE_PHASE } from 'astro:env/server';

export const isProductionBuild = SITE_PHASE === 'production';

// What the layouts actually consume: render preview affordances (banner,
// "· preview" brand flag) on every non-production build.
export const showPreviewNotices = !isProductionBuild;
