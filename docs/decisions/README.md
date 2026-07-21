# Decision records

Architecture Decision Records for the policy documents and this repository,
in the [Nygard/MADR](https://adr.github.io/) tradition: numbered, dated, and
immutable. A decision is never edited in substance after acceptance — it is
amended with a dated addendum or superseded by a new ADR that links back.

| ADR | Title | Status |
| :-- | :---- | :----- |
| [ADR-001](./ADR-001-retention-source-of-truth.md) | Retention period source of truth | Accepted (amended 2026-07-05) |
| [ADR-002](./ADR-002-transfer-mechanisms.md) | Transfer mechanisms (no-SCC posture) | Accepted (amended 2026-07-20) |
| [ADR-003](./ADR-003-row-level-draft-lifecycle.md) | Draft lifecycle for row-level trust.yaml data | Accepted (implementation pending) |
| [ADR-004](./ADR-004-dpa-disclosure-posture.md) | DPA disclosure posture | Accepted |
| [ADR-005](./ADR-005-trust-site-editorial-posture.md) | Trust-site editorial posture | Accepted |

Review records (consistency reviews, benchmark verifications, watchlists)
live in [`reviews/`](../reviews/), not here — a review is evidence, not a
decision. The active open-items tracker is
[`REMAINING_DECISIONS.md`](../../REMAINING_DECISIONS.md) at the repository
root; when the 2026 revision ships, its "Decisions of record" section
graduates into ADRs here.
