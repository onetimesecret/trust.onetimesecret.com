// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { rm, rmdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import {
  sections,
  builtSections,
  prunedSections,
  nonSectionRoutes,
  sitemapHrefs,
} from './src/lib/sitemap';

// Spotnote: optional, dev-only UI feedback for coding agents.
//
// Click an element on the dev server, write what should change, and the agent
// gets its exact file, line and column. The plugin stamps
// data-spotnote="file:line:col" on elements in .astro files and injects a
// picker (launcher in the bottom-left corner). It does nothing in
// `astro build`, so the static output is unchanged.
// https://github.com/harukikuri/spotnote
//
// It is a devDependency, loaded only when installed: a --prod install, or
// removing the package, leaves this config working.
//
// MCP server (optional, once per machine) so a local agent picks up notes as
// you write them and can reply on them:
//
//   claude mcp add --scope user spotnote -- npx -y spotnote-mcp
//   codex mcp add spotnote -- npx -y spotnote-mcp
//
// Then ask the agent: "Watch my Spotnote notes." The server listens on
// 127.0.0.1:4848 only and saves notes in ~/.spotnote/. If the port is taken,
// set SPOTNOTE_PORT to the same free port for the agent and for `pnpm dev`.
// Without it, Enter copies the note as a prompt to paste instead.
//
// Off below Astro 7.3. Earlier 7.x releases ship @astrojs/compiler-rs 0.3,
// which reports element offsets in UTF-8 bytes; spotnote 0.5.0 reads them as
// string indices, so every non-ASCII character (the "—" and "·" in
// TrustLayout's <title>, for one) shifts the stamps into the middle of the
// markup and the page fails to compile. compiler-rs 0.4 (Astro 7.3+) reports
// UTF-16 offsets. Updating astro switches spotnote on with no other change.
const [astroMajor, astroMinor] = createRequire(import.meta.url)(
  'astro/package.json',
)
  .version.split('.')
  .map(Number);
const spotnote =
  astroMajor > 7 || (astroMajor === 7 && astroMinor >= 3)
    ? await import('spotnote').then(
        (m) => m.default,
        () => null,
      )
    : null;

// Static output only — no SSR, no server runtime. The site is a pure render
// of src/content/trust.yaml and src/content/policy-constants.yaml (see
// Astro Handoff Spec §1). The policy documents (/terms, /privacy, /dpa,
// /toms) are MDX that interpolates policy-constants — the same data the
// trust pages read. Which *sections* are live is likewise decided at build
// time, from src/lib/sitemap.ts.

// Build-time page toggles, enforced against what the build actually emitted.
//
// At astro:build:done we get `assets`: a Map from each route's canonical path
// (e.g. "/how-it-works", "/" for the root) to the real files it wrote to disk
// (e.g. dist/how-it-works/index.html). We use it to do three things, in order:
//
//   1. Reconcile — every emitted route must be claimed by a section or by
//      nonSectionRoutes, and every published/unlisted section must have
//      emitted a page. Any mismatch throws and fails the build. This is the
//      safety net: on a trust site, an unfinished page reaching production, or
//      a nav link that 404s, must be a red build, never a silent surprise.
//   2. Prune drafts — delete the exact files the build wrote for each draft
//      section (looked up in `assets`, not guessed from the URL, so it stays
//      correct regardless of build.format), so the deployed URL returns a real
//      404: no HTML, no "coming soon". Deletion is not forced — if a file we
//      expected to remove isn't there, that throws too.
//   3. Tidy — remove the now-empty section directory (never the output root).
//
// `unlisted` sections are intentionally left in place (reachable by direct
// URL); only the nav, overview index, and XML sitemap omit them.
function reconcileAndPrune() {
  return {
    name: 'trust:reconcile-and-prune',
    hooks: {
      /** @param {{ assets: Map<string, URL[]>, dir: URL, logger: any }} options */
      'astro:build:done': async ({ assets, dir, logger }) => {
        const emitted = new Set(assets.keys());
        const claimed = new Set([
          ...sections.map((s) => s.href),
          ...nonSectionRoutes,
        ]);

        // 1a. No orphans: a real file on disk that no section (and no
        // allowlisted endpoint) claims could be an unfinished page leaking to
        // the trust site, or a registry href typo that left a draft live.
        for (const route of emitted) {
          if (!claimed.has(route)) {
            throw new Error(
              `[trust:reconcile] built route ${route} is claimed by neither a ` +
                `section nor nonSectionRoutes in src/lib/sitemap.ts. Register ` +
                `it or allowlist it — refusing to ship an unaccounted-for page.`,
            );
          }
        }

        // 1b. No dead links: every section meant to be live must have emitted
        // a page, or the nav/index would point at a URL that 404s.
        for (const section of builtSections) {
          if (!emitted.has(section.href)) {
            // Point at the likely source file. The root is index.astro, not
            // the "src/pages/.astro" a naive join of href would produce.
            const pageSrc =
              section.href === '/'
                ? 'src/pages/index.astro'
                : `src/pages${section.href}.astro`;
            throw new Error(
              `[trust:reconcile] section "${section.key}" is ${section.status} ` +
                `but emitted no page (${section.href}). Create ${pageSrc}, ` +
                `or mark the section draft.`,
            );
          }
        }

        // 2 + 3. Prune each draft section by its real emitted files.
        const outputRoot = resolve(fileURLToPath(dir));
        for (const section of prunedSections) {
          if (section.href === '/') continue; // never prune the site root
          const files = assets.get(section.href);
          if (!files) {
            // A draft with no page yet (planned but unwritten) — nothing built,
            // nothing to leak, nothing to prune.
            logger.info(
              `draft section "${section.key}" (${section.href}) has no page — nothing to prune`,
            );
            continue;
          }
          for (const fileUrl of files) {
            const file = fileURLToPath(fileUrl);
            await rm(file, { force: false }); // throws if already gone — good
            const parent = dirname(file);
            if (resolve(parent) !== outputRoot) {
              await rmdir(parent).catch((err) => {
                // Leave the directory if something else lives in it.
                if (err.code !== 'ENOTEMPTY' && err.code !== 'ENOENT') throw err;
              });
            }
          }
          logger.info(`pruned draft section → real 404: ${section.href}`);
        }
      },
    },
  };
}

// The XML sitemap advertises published sections only. `page` arrives as a full
// URL (with trailing slash under the default build format); normalize to the
// registry's href form before checking.
const sitemapFilter = (/** @type {string} */ page) => {
  const path = new URL(page).pathname.replace(/(.)\/$/, '$1');
  return sitemapHrefs.has(path);
};

export default defineConfig({
  site: 'https://trust.onetimesecret.com',
  output: 'static',
  integrations: [sitemap({ filter: sitemapFilter }), mdx(), reconcileAndPrune()],
  vite: {
    plugins: [spotnote?.()],
  },
  env: {
    schema: {
      // Build phase, consumed via src/lib/site-env.ts. Deliberately a free
      // string with a `preview` default rather than an enum: an enum would
      // fail the build on a typo, but the fail-safe we want is "anything
      // other than the exact value `production` keeps the non-production
      // banners on". Static build, so this resolves once at build time.
      SITE_PHASE: envField.string({
        context: 'server',
        access: 'public',
        default: 'preview',
      }),
    },
  },
});
