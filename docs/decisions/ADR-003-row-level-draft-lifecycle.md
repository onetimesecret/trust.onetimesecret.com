# ADR-003: Draft lifecycle for row-level trust.yaml data

**Status:** Accepted (implementation pending)
**Date:** 2026-07-20

## Context

Sections have a lifecycle (`SectionStatus` in `src/lib/sitemap.ts`:
draft → unlisted → published): draft pages render locally but are pruned
from every deploy; unlisted pages are emitted but unlinked. Data has no
equivalent. Everything in `src/content/trust.yaml` ships on deploy, because
`/trust.yaml` (`src/pages/trust.yaml.ts`) serves the file **verbatim** —
deliberately, so procurement tooling can diff a file rather than scrape
HTML, and because the comments carry the disclosure rationale.

The gap is live: the `aiModels` ALL-CAPS placeholders and `TODO(counsel)`
comments committed 2026-07-20 would be served publicly at `/trust.yaml` on
deploy, even though the `/ai` page that renders them is draft-pruned. The
next tranche of register work — per-subprocessor DPA status (in place,
vendor-standard vs negotiated, verified date) — needs to accrete over weeks
of counsel verification without surfacing early.

An in-file marker (`dpa: { status: draft }`) cannot work here: the raw
route would ship it anyway, and redacting-and-reserializing the YAML for
production would (a) strip the comments, (b) make the served artifact
diverge from the repo file the site promises is reviewable, and (c) turn
the redaction filter itself into a leak-critical trust surface.

## Decision

Draft row-level data lives in a **sidecar file**,
`src/content/trust-drafts.yaml`, keyed by entry name. `trust.yaml` remains
the published artifact: served verbatim, never filtered.

The `SectionStatus` tiers map across a file boundary plus a render gate:

| Tier | Where the data lives | Served at `/trust.yaml` | Rendered on pages |
| :-- | :-- | :-- | :-- |
| draft | `trust-drafts.yaml` | no — by construction | dev server only |
| unlisted | `trust.yaml`, field `status: unlisted` | yes | no |
| published | `trust.yaml`, field `status: published` | yes | yes |

Mechanics:

- The loader (`src/lib/trust.ts`) deep-merges the sidecar over the base
  config **only under `import.meta.env.DEV`**. No build — preview or
  production — ever contains draft data; only the local dev server shows
  it. Exclusion is fail-safe by construction, not by a filter that must be
  trusted.
- The merged result re-parses through `TrustConfigSchema`, so drafts
  cannot bypass validation.
- A reconcile-style guard fails the build if the sidecar references an
  entry name absent from `trust.yaml` (ports the sitemap integration's
  no-orphans check to data).
- Publishing is moving the block from `trust-drafts.yaml` into
  `trust.yaml` in a dated commit; the public diff record starts at
  publication. Within `trust.yaml`, the remaining gate
  (unlisted → published) is a per-field `status` value that rendering
  components check.

## Consequences

- Draft data is absent from every deploy by construction; there is no
  redaction code to audit.
- `/trust.yaml` stays verbatim, comments included; the served file is the
  repo file.
- The public git history shows register claims only from the moment we
  stand behind them; drafts never flap through it.
- **Surfacing, not secrecy.** `trust-drafts.yaml` is readable in the
  repository. Nothing enters it that could not be read aloud; NDA-sensitive
  detail (e.g. the terms of a negotiated DPA) stays out of the repo
  entirely.
- Migration: the `aiModels` placeholders and `TODO(counsel)` comments move
  from `trust.yaml` into the sidecar, making the current `trust.yaml`
  clean to serve independent of the DPA work.
- First consumer: a `dpa` sub-object on subprocessor rows
  (`form: vendor-standard | negotiated | not-required`, public `source`
  link where one exists, `verified` date, `status`). Tracked as DPA-1 in
  `REMAINING_DECISIONS.md`.
