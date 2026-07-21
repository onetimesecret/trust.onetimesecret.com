# How this site works

This repo is an Astro-powered generator for Onetime Secret's trust centre
and policy documents. Think Jekyll for trust-center docs. The four legal
documents (Terms of Service, Privacy Statement, DPA, TOMs) and the trust
site pages are all built from the same source files, so a shared fact
exists exactly once and cannot drift between documents.

## The one rule

**Never hand-edit a shared fact in document prose.** Retention periods,
notice windows, backup locations, tier lists, and the subprocessor list
live in two YAML files. The prose interpolates them at build time. Edit
the YAML; every consumer changes together.

## Source files

| File                                     | Holds                                                                                                                                                        | Consumed by                                                                                     |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `src/content/policy-constants.yaml`      | Retention periods, refund/export/notice windows, backup locations, tier lists, bcrypt cutoff, canonical URLs                                                 | All four MDX documents                                                                          |
| `src/content/trust.yaml`                 | Subprocessor list (role-based: one role per DPA Schedule A table row, plus entity details), internal tools and AI models (transparency disclosure — no Company Personal Data), the subprocessor changelog, trust-site content (flow, FAQs, documents index, audit mappings) | DPA Schedule A tables _and_ the trust-site pages — the same data, rendered twice; also served verbatim at `/trust.yaml` |
| `src/content/document-manifest.yaml`     | Per-document signoff record: status, reviewed commit, date                                                                                                   | Footer of every rendered policy document                                                        |
| `src/pages/{terms,privacy,dpa,toms}.mdx` | The document prose — human-owned, legally reviewed text                                                                                                      | Rendered at `/terms`, `/privacy`, `/dpa`, `/toms`                                               |

Each YAML file is validated by a strict Zod schema at build time
(`src/lib/policy-constants.ts`, `src/lib/trust-config.ts`,
`src/lib/manifest.ts`). An unknown key, missing field, or malformed value
fails the build loudly. There is no runtime: output is fully static.

## How interpolation works

The MDX documents import the validated constants and interpolate them
inline, preserving the legal drafting convention:

```mdx
import { constants, spelledDays, multiTenantTiers } from "../lib/policy-constants";

1.17) "_Backup Retention Period_" means {spelledDays(constants.retention.backup_days)}, ...
```

renders as: _"Backup Retention Period" means thirty (30) days, ..._

Helpers: `spelledDays(30)` → "thirty (30) days", `spelledYears(5)` →
"five (5) years", `multiTenantTiers` → "Basic, Identity Plus, Team Plus,
and any successor or variant tiers".

Only shared facts are interpolated (~40 sites across the four documents).
Everything else — statutory figures like the 72-hour breach notice,
section references, one-off numbers — stays literal prose. Reviewability
is a first-class feature: the MDX must remain readable by lawyers as a
plain document.

## Content rules

What the site may say — no badges, no analytics, the passphrase claim,
"the rendered DPA governs" — is recorded in
[ADR-005](./decisions/ADR-005-trust-site-editorial-posture.md). Read it
before editing content; violating a principle means superseding the ADR
first.

## Trust-site pages

The non-MDX pages (`src/pages/*.astro` — home, Subprocessors, AI,
Documents, FAQ, Assurance, How it works, Your audit) render their
structured facts — subprocessors, internal tools, AI models, changelog,
documents index — from `trust.yaml`. Their page copy (headings,
callouts, editorial framing) is hand-written per page, like the MDX
prose: the generator guarantees fact consistency, not wording.
`src/pages/trust.yaml.ts` serves the validated source file verbatim at
`/trust.yaml` so reviewers can diff data instead of scraping HTML.

## Schedule A is generated

`src/components/ScheduleA.astro` renders the DPA's six Schedule A tables
(five category tables plus Subprocessor Entity Details) from the
`subprocessors:` block of `trust.yaml`. The trust site's `/subprocessors`
page derives its summaries from the same entries. To add, remove, or
change a subprocessor: edit `trust.yaml`, and remember the change-notice
process it supplements (DPA §6 email notice; record the event in
`subprocessorChangelog`).

## Signoff and versioning

The DPA is a governing document; "what did we agree to" must be
answerable per version. `document-manifest.yaml` records, per document,
the signoff status (`pending-counsel` → `counsel-approved` →
`signed-off`), the reviewed commit hash, and the date — displayed in the
rendered footer. The manifest is hand-maintained: after each signoff,
write the commit and date, and tag a rendered snapshot (frozen HTML or
PDF) per effective date. The MDX at a commit is the source; the tagged
snapshot is the archival artifact.

## Common tasks

- **Change a retention period or window**: edit `policy-constants.yaml`,
  run `pnpm build`. Done — DPA, ToS, PP, TOMs, and the trust site all
  update.
- **Change document prose**: edit the `.mdx` file directly. Do not inline
  a number that exists as a constant.
- **Change a subprocessor**: edit `trust.yaml` (roles for the Schedule A
  rows, entity for the details table), add a `subprocessorChangelog`
  entry, follow the DPA §6 notice process.
- **Record a signoff**: update `document-manifest.yaml`, tag the commit.
- **Verify the wiring**: follow
  [how-to-trust-but-verify-the-content.md](./how-to-trust-but-verify-the-content.md)
  — spot-check and mutation-test that facts flow from YAML into the
  rendered pages.

```bash
pnpm build                # generate everything into dist/; fails on any schema violation
pnpm check                # astro type check
pnpm check:placeholders   # no ALL-CAPS placeholder phrases in trust.yaml
pnpm dev                  # local preview
```

## Deployment phases and CI

`src/lib/site-env.ts` reads `SITE_PHASE`. The non-production banners are
fail-safe: any build that doesn't declare production keeps them, so the
publish job must run `SITE_PHASE=production pnpm build` — there is
nothing to remove or edit, only the variable to set. CI
(`.github/workflows/trust-site.yml`) runs the build, the type check, and
`pnpm check:placeholders` (`scripts/check-trust-placeholders.mjs`),
which fails on ALL-CAPS placeholder phrases in `trust.yaml` because that
file ships verbatim the moment it merges.

## History

Decision record: `docs/decisions/ADR-001-retention-source-of-truth.md`
(2026-07-05 addendum). Before this architecture, the four documents were
flat markdown at the repo root and consistency was audited manually
against a line-number ledger (`decisions/retention-state.yaml`, now
retired) — a 2026-07-05 five-agent review found four contradictions that
this design makes structurally impossible.
