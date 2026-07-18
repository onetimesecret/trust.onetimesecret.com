# ADR-001: Retention Period Source of Truth

**Status:** Accepted (amended 2026-07-05 — see Addendum)  
**Date:** 2026-07-02

## Context

Four documents govern backup and retention: DPA, TOMs, Privacy Statement, and Terms of Service. Each mentions retention periods; inconsistent phrasing risks contradictions.

## Decision

**Source of truth hierarchy:**

1. **DPA §1.17-1.19** — authoritative definitions of all retention periods
2. **TOMs** — technical implementation (the "how")
3. **ToS B.6** — user-facing summary, references DPA
4. **Privacy Statement** — user-facing summary, references ToS and/or DPA

**Defined periods (DPA):**

| Term | Duration | DPA Section |
|------|----------|-------------|
| Backup Retention Period | 30 days | §1.17 |
| Operational Retention Period | 30 days | §1.18 |
| Subprocessor Notice Period | 30 days | §1.19 |

**Implementation detail (TOMs only):**

- Local encrypted backups: 7 days (subset of the 30-day maximum)
- Geo-located backups (Global Elite): 30 days

The 7-day local tier is an operational detail within the 30-day contractual ceiling, not a separate policy.

## Consequences

- DPA definitions are canonical; other documents reference them.
- TOMs may specify shorter operational windows that fall within DPA limits.
- Downstream documents use "up to 30 days" or cite DPA directly.

## Verification

See `retention-state.yaml` for the current state across all documents with line numbers. Use this to check consistency after edits.

## Addendum — 2026-07-05: structural consistency supersedes the audited ledger

The four documents are now generated: they live as MDX sources
(`src/pages/{terms,privacy,dpa,toms}.mdx`) that interpolate every shared
retention period, window, location, and tier list from
`src/content/policy-constants.yaml` at build time. The DPA's Schedule A
tables render from `src/content/trust.yaml` (the same data the trust
site's Subprocessors page reads).

Consequences:

- **`retention-state.yaml` is retired.** It was a line-number ledger for
  auditing prose that could drift; the values can no longer drift because
  each exists once, in `policy-constants.yaml`.
- The DPA prose remains the *contractual* source of truth (the hierarchy
  above stands); `policy-constants.yaml` is the *authoring* source that
  keeps the governing texts in agreement.
- Signoff is recorded per document in `src/content/document-manifest.yaml`
  (name, reviewed commit, date), displayed in the rendered footer. Rendered
  snapshots are tagged per effective date.
