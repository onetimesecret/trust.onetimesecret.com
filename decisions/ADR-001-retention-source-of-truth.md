# ADR-001: Retention Period Source of Truth

**Status:** Accepted  
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
