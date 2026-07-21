# ADR-005: Trust-site editorial posture

**Status:** Accepted
**Date:** 2026-07-20

## Context

The trust centre launched from a working document (`docs/trust-site.md`,
retired with this ADR) that mixed standing editorial rules with a
pre-launch checklist. The checklist rotted — half its items were done,
one hid a live defect (a download link to an artifact that was never
added) — while the rules it carried are settled posture that governs
every future content edit. Per the records process this repository
already runs for policy content, settled posture becomes a numbered,
immutable ADR; open tasks go to issues, open decisions to
`REMAINING_DECISIONS.md`.

## Decision

Seven principles govern what the trust site says and how it earns trust:

1. **Self-authored report, no badges.** The site is a self-authored,
   versioned security report for procurement and vendor-security
   reviewers: prose and dated documents only. No compliance badges,
   anywhere — a badge borrows a third party's authority; this site's
   authority is its verifiable history.
2. **The repository is the changelog.** The repo is public on purpose.
   Commit history is the change record, and diffs on the subprocessor
   list are the trust signal. `trust.yaml` is published verbatim at
   `/trust.yaml` so tooling can diff a file instead of scraping HTML.
3. **The rendered DPA governs.** The canonical contractual subprocessor
   list is DPA Schedule A, generated from the `subprocessors:` block of
   `trust.yaml`. There is one copy of the data; the trust site's
   Subprocessors page is a second render, never a second source.
4. **The passphrase claim.** A user passphrase is an access-control
   gate verified before decryption, not a key-derivation input. Never
   reintroduce "we cannot decrypt passphrase-protected secrets" — that
   was true only of a legacy scheme. Rationale:
   [`docs/research/passphrase-crypto-rationale.md`](../research/passphrase-crypto-rationale.md).
5. **No analytics.** No third-party analytics and no first-party
   behavioral analytics — the Privacy Statement commits to both.
6. **All assets from our own domains.** Fonts are self-hosted via
   Fontsource; no Google Fonts or any other third-party asset host, per
   the same Privacy Statement commitment.
7. **Static and account-less.** No SSR, no accounts, no gated portal;
   document-access requests are email.

## Consequences

- `docs/trust-site.md` is deleted. Its open tasks move to GitHub
  issues; its one open decision (Assurance-page framing sign-off) moves
  to `REMAINING_DECISIONS.md` as SITE-1.
- A content edit that would violate a principle — a badge, an analytics
  snippet, a third-party font, a stronger passphrase claim — requires
  superseding this ADR first.
- Mechanics (build, schemas, interpolation, deployment phases) stay in
  [`docs/how-this-site-works.md`](../how-this-site-works.md); this ADR
  governs what the site says, not how it is built.
