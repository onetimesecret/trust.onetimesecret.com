# Remaining decisions

Decisions and verifications that block publication and need Delano. One item
per line. Everything else in ERRATA.md is unblocked drafting work.

## Legal position (blocks the most downstream text)

- [ ] Decision CP-1: Pick one controller/processor position for Organization member data — the live Privacy Statement (line 55) says the Organization owner/admin is the GDPR controller with Onetime Secret as processor (matching the DPA's model), but the ToS review (IC-1) removed that same claim as "factually incorrect — Onetime Secret remains the controller." One position must hold across ToS, PP, and DPA before publication. (ERRATA.md header finding 1)

## Substantive scope judgments

- [ ] Decision DPA-3: The Privacy Statement's no-sell/no-share commitment carries the qualifier "not for their commercial purposes" — decide whether that qualifier is intentional scope-narrowing; if not, remove it. (onetime-dpa-review-tasks.md DPA-3)
- [ ] Decision INACT-1: Inactive-account removal — attempt email notice to the registered address before removing, or keep "removal may occur automatically and without separate notice"? Notice-attempt is the stronger user-rights posture; no-notice is simpler but more exposed. (Privacy review-tasks TODO-12; drafted text ready either way)
- [ ] Decision INACT-2: Confirm five years as the inactivity window (regulation and our own policy may change across it; draft says "may," not "will," so the number is the only open variable). (Privacy review-tasks TODO-12)
- [ ] Decision TODO-23: Approve (or edit) the drafted "Network-level access controls" clause stating that single-tenant deployments may offer IP-range filtering depending on the hosting provider — a contractual availability statement, held for individual review. (ToS review-tasks TODO-23)

## Code verification (needs the application repo, outside site-policy)

- [ ] Verify TODO-20a: Confirm in the application code that Incoming Secrets protects configured recipient email addresses as claimed (address handled as a hashed value; only a display name rendered in the form) before any mechanism language goes into the ToS; TODO-20's "best effort" wording already covers the liability core without it. (ToS review-tasks TODO-20a)
- [ ] Verify TODO-23a: Confirm that on the multi-tenant Service, CIDR/IP filtering is enforced at the application layer (vs network or edge) before that implementation detail is drafted into the ToS. (ToS review-tasks TODO-23a)

## Facts only you have

- [ ] Facts TLS-1: For the edge-TLS-termination exception (Cloudflare on regional entry domains; Approximated on paid-tier Custom Domains), state which regions/surfaces can drop the exception and roughly when — the per-surface restructure of PP/DPA text can proceed without this, but any elimination claim can't. (ERRATA.md item 5)
