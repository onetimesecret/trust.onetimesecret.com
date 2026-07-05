# How this site works

This repo is an Astro-powered generator for Onetime Secret's trust centre
and policy documents — think Jekyll for trust-center docs. The four legal
documents (Terms of Service, Privacy Statement, DPA, TOMs) and the trust
site pages are all built from the same source files, so a shared fact
exists exactly once and cannot drift between documents.

## The one rule

**Never hand-edit a shared fact in document prose.** Retention periods,
notice windows, backup locations, tier lists, and the subprocessor list
live in two YAML files. The prose interpolates them at build time. Edit
the YAML; every consumer changes together.

## Source files

| File | Holds | Consumed by |
|------|-------|-------------|
| `src/content/policy-constants.yaml` | Retention periods, refund/export/notice windows, backup locations, tier lists, bcrypt cutoff, canonical URLs | All four MDX documents |
| `src/content/trust.yaml` | Subprocessor list (role-based: one role per DPA Schedule A table row, plus entity details), trust-site content (flow, FAQs, documents index, audit mappings) | DPA Schedule A tables *and* the trust site's Subprocessors page — the same data, rendered twice |
| `src/content/document-manifest.yaml` | Per-document signoff record: status, reviewed commit, date | Footer of every rendered policy document |
| `src/pages/{terms,privacy,dpa,toms}.mdx` | The document prose — human-owned, legally reviewed text | Rendered at `/terms`, `/privacy`, `/dpa`, `/toms` |

Each YAML file is validated by a strict Zod schema at build time
(`src/lib/policy-constants.ts`, `src/lib/trust-config.ts`,
`src/lib/manifest.ts`). An unknown key, missing field, or malformed value
fails the build loudly. There is no runtime: output is fully static.

## How interpolation works

The MDX documents import the validated constants and interpolate them
inline, preserving the legal drafting convention:

```mdx
import { constants, spelledDays, multiTenantTiers } from '../lib/policy-constants';

1.17) "*Backup Retention Period*" means {spelledDays(constants.retention.backup_days)}, ...
```

renders as: *"Backup Retention Period" means thirty (30) days, ...*

Helpers: `spelledDays(30)` → "thirty (30) days", `spelledYears(5)` →
"five (5) years", `multiTenantTiers` → "Basic, Identity Plus, Team Plus,
and any successor or variant tiers".

Only shared facts are interpolated (~40 sites across the four documents).
Everything else — statutory figures like the 72-hour breach notice,
section references, one-off numbers — stays literal prose. Reviewability
is a first-class feature: the MDX must remain readable by lawyers as a
plain document.

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

```bash
pnpm build    # generate everything into dist/; fails on any schema violation
pnpm check    # astro type check
pnpm dev      # local preview
```

## History

Decision record: `decisions/ADR-001-retention-source-of-truth.md`
(2026-07-05 addendum). Before this architecture, the four documents were
flat markdown at the repo root and consistency was audited manually
against a line-number ledger (`decisions/retention-state.yaml`, now
retired) — a 2026-07-05 five-agent review found four contradictions that
this design makes structurally impossible.
