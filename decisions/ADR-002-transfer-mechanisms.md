# ADR-002: Regional localization in lieu of Standard Contractual Clauses

**Status:** Accepted
**Date:** 2026-07-18

## Context

The 2026-07-18 peer benchmark (`research/2026/20260718-peer-benchmark-legal-docs.md` §2.1)
verified that every benchmarked peer DPA — GitHub, Tailscale, PostHog —
incorporates the 2021 EU Standard Contractual Clauses with explicit module
selection, the UK IDTA/Addendum, and Swiss FADP adaptations. Our DPA
incorporates none of these, which reads as a gap when benchmarked, and the
reasoning behind the difference was not written down anywhere.

Peers need those mechanisms because their architectures move personal data
across borders as a matter of course. Ours is designed not to.

## Decision

We do not incorporate the EU SCCs, the UK IDTA/Addendum, or Swiss FADP
adaptations into the DPA, because the service is architected so that
restricted transfers do not occur in ordinary operation: production data is
processed and stored exclusively within the region where it is collected
(DPA §12.1), in segregated regional environments.

The complete inventory of flows that leave a collection region, each with its
mechanism or enumerated basis:

| Flow | Data | Basis / mechanism |
|---|---|---|
| **Stripe, Inc. (US)** — paying customers only | Billing data (payment and invoicing) only; never Secret Content or production application data | EU-US DPF, UK Extension, Swiss-US DPF (DPA §12.2(a)), with an SCC-fallback cooperation clause if the DPF is invalidated |
| **Proton AG (Switzerland)** | Company email and internal company documents, including customer-support correspondence; never production data or backups of any kind | Swiss adequacy — EU Art. 45 adequacy decision and UK adequacy regulations (DPA §12.2(d); Schedule A) |
| **Cloudflare / Approximated edge TLS** — multi-tenant tiers only | Transient decrypted transit at the edge, re-encrypted into the destination region; single-tenant excluded | Enumerated exception, DPA §12.2(b); TLS-1 decision of record |
| **Global Elite geo-located backups** — AWS S3 EU (Frankfurt, Ireland) | Encrypted backups; storage provider holds no decryption keys; standing exception for non-EU deployments | Enumerated exception, DPA §12.2(c) |
| **Centralized error monitoring** — self-hosted Sentry, EU (catch.onetimesecret.com) | Scrubbed error/diagnostic telemetry from all regions, including non-EU; incidental personal data possible despite client- and server-side scrubbing; Operational Retention Period only | Flow is *into* the EU, so no restricted transfer arises under EU law; UK→EU covered by the UK adequacy regulations; enumerated exception, DPA §12.2(e) (added 2026-07-18 after the flow was confirmed) |

No other personal-data flow leaves its collection region. Incorporating SCC
modules would presume an exporter–importer transfer relationship the
architecture is designed not to create; the honest posture is to enumerate the
five real flows and their mechanisms, which DPA §12.2 now does in full.

**Remote administration (not a flow):** support and operational tooling is
deployed per region; the only cross-region element is Processor staff
terminals connecting over an authenticated, encrypted VPN into a region to
administer production. This is not a Chapter V transfer — EDPB Guidelines
05/2021 require disclosure to a *different* controller or processor, and
same-entity staff access is instead an Art. 32 security matter (TOMs §1.2:
MFA, encrypted connections, per-region tooling locality). On the conservative
reading it would still be covered by Canada's EU adequacy decision (PIPEDA,
commercial organizations) and the UK adequacy regulations. No §12.2 exception
is needed; data-at-rest and processing never leave the region.

## Consequences

- DPA §12.2 enumerates all five exceptions. The Proton correspondence flow was
  added as §12.2(d) with this ADR — previously it appeared in Schedule A
  (global email subprocessor) but was absent from §12.2's exception list,
  which is exactly the kind of ambiguity this ADR exists to remove.
- The benchmark report's transfer-mapping question is the load-bearing check:
  any unmapped cross-region path must either be regionalized or added to
  §12.2 with a named mechanism. First application, same day: the operator
  confirmed non-EU regions ship error telemetry to the EU Sentry instance
  (scrubbed, leakage possible) — this contradicted §12.1's absolute residency
  promise while being disclosed in §5.3, and was resolved by enumerating it
  as §12.2(e). Second application, same day: support-tooling access confirmed
  per-region with VPN-only remote administration — resolved as not-a-transfer
  (see "Remote administration" above), no DPA change needed, locality stated
  in TOMs §1.2. **The transfer map is complete.**
  (Internal note: the Sentry flow also engages Quebec Law 25 s. 17's
  before-transfer assessment duty for Quebec residents' data — an internal
  PIA, pairs with the Law 25 person-in-charge item.)
- **Conditional incorporation clause — considered, not adopted (2026-07-20).**
  All three benchmarked peers include a belt-and-suspenders clause ("to the
  extent a restricted transfer occurs, the 2021 SCCs are incorporated…"). We
  do not add one: a conditional clause would presume the exporter–importer
  relationship the architecture is designed not to create, and every real
  flow above already carries a named mechanism or enumerated basis.
- Any new subprocessor or feature that moves personal data across regions
  reopens this decision.

## References

- DPA §12 (Data Transfer), `src/pages/dpa.mdx`
- Schedule A / subprocessor register, `src/content/trust.yaml`
- Peer benchmark, `research/2026/20260718-peer-benchmark-legal-docs.md` §2.1
- TLS-1 decision of record, `REMAINING_DECISIONS.md` Part 2
