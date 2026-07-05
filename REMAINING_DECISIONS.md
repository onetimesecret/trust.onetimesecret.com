# Remaining decisions and open items

Single consolidated tracker for the 2026 site-policy revision. Supersedes the
former `ERRATA.md`, `ERRATA-3.md`, `FINALIZATION-july1.md`, and
`FINALIZATION-july2.md` working files (removed 2026-07-05; their full
append-only detail remains in git history). Business-arrangements research that
lived in `ERRATA-1.md` moved to `research/business-arrangements-rationale.md`.

Two parts: **Part 1 — Open items** (still actionable) and **Part 2 — Decisions
of record** (resolved and applied; kept for institutional memory).

---

## Part 1 — Open items

### DOCS-1 (cross-repo, non-blocking here)

The principles-page changes were drafted against a working copy `principles.md`
that was deleted in commit `e3aed13` and never ported to the live docs repo
(`docs.onetimesecret.com`,
`src/content/docs/en/principles/{privacy-first,communication,data-minimization}.md`).
Recover the drafted text with `git show e3aed13^:principles.md` and port:

- Heading "Our No-Email Philosophy" → "Our Minimal-Email Philosophy".
- The three-category email taxonomy (carried forward below so this file is
  self-sufficient once the ERRATA files are gone).
- The no-tracking-in-email commitment (no tracking pixels, no click-tracking).
- The "preferences live in browser storage, not cookies" clarification for
  `data-minimization.md`.

Email taxonomy to port (source text, formerly ERRATA-3):

- **Transactional** — secret links, account, and billing notices. Inherent to
  the service; no opt-out.
- **Service and security notices** — security advisories, breach
  notifications, policy-change notices, deprecations. Sent when needed,
  including when legally required; not marketing.
- **Product news** — feature announcements and similar. Strictly opt-in,
  one-click unsubscribe, rare.

PP wording ("We never send unsolicited marketing email, and no email we send
contains tracking pixels or click-tracking links" plus the three categories)
is already applied in this repo; DOCS-1 is only the port of the matching
principles-page copy to the docs repo.

### PP-1 (non-blocking, tidy when convenient)

PP "Information from website browsers" lists "regional environment selection"
among collected data, but code verification found no client-side persistence
for region, and the Cookies section folds localStorage into "cookies (and
similar technologies)". Adjacent to, not contradicted by, the code — tighten
when convenient.

### TC-1 (future)

The CC0 license pointers in ToS G.3 and the PP License section deliberately
point at the GitHub repository for now; swap in the real trust-centre URL when
one exists. (The authoritative-source references were already reworded to
"trust centre"; only the live URL swap remains.)

### Counsel review before publication (from the 2026-07-02 finalization pass)

These are deviations from market-standard drafting that are defensible but
warrant a lawyer's sign-off. None block internal review; all block final
publication.

- **Subprocessor objection is a no-questions-asked exit.** DPA §6.2 omits the
  market-standard "reasonable data-protection grounds" gate: any objection to
  a new subprocessor, for any reason, triggers the sole remedy (terminate the
  affected Services without penalty inside the 30-day window). Defensible
  because the remedy is self-executing, but §6.2 is silent on whether "without
  penalty" implies a pro-rata refund of an unused prepaid period. Confirm the
  intended money outcome and that the deviation is acceptable.
- **Refund-terms precision.** The 30-day refund window (paid multi-tenant
  plans, from the most recent billing date; single-tenant defaults to the same
  "unless a separate agreement says otherwise") needs: (1) explicit scoping to
  the most recent charge only, so an annual subscriber on day 29 can't read it
  as a full-year refund; (2) a check against the I.2 proration rules for a
  double-dip path (upgrade → prorated credit → refund); (3) confirmation that
  Global Elite agreements actually carve out provisioning/setup costs, or that
  the ToS default does; (4) alignment of the three exit paths (refund window,
  subprocessor objection, ordinary cancellation) to consistent money outcomes;
  (5) no conflict with mandatory EU/UK 14-day cooling-off rights under BC
  governing law; and coupon/nonprofit-price interaction.
- **TOMs resilience note (optional).** TOMs §3 Availability currently states
  local encrypted backups (7 days) plus geo-located encrypted backups (Global
  Elite) in AWS S3 Frankfurt with 30-day expiry. Consider stating the backup
  posture against the 3-2-1-1-0 rule if we want the resilience story to read
  as an explicit standard rather than an ad-hoc description.
- **PP Article 48 compelled-disclosure scoping.** The PP's compelled-disclosure
  section applies GDPR Art. 48 to EU-held data (a third-country order alone is
  not a sufficient legal basis without an MLAT or similar international
  agreement). The 2026-06 PP review pass attached a "recommend legal review"
  note to this language that was never logged here. The same review recommended
  sign-off on the DPA FAQ section and the source-code-transparency clause;
  fold all three into the counsel pass.

---

## Part 2 — Decisions of record (resolved and applied)

These were decided during the 2026 revision and are already applied to the
policy documents. Kept here as the durable decision ledger; the full
review-note history is in git.

- **CP-1 — controller/processor position.** Our customers (the legal entity
  behind an Organization) are the controller; we are the processor. The DPA was
  already correct (Company = Controller). PP swept to match; ToS defers to the
  DPA via B.3 "Member data". The "Organization" overload was the source of the
  confusion: GDPR/DPA language uses controller/processor; the subscription/
  billing entity is the Organization data-model record (1:1 with subscription).

- **DPA-3 — no-sell/no-share qualifier.** Removed the "for their commercial
  purposes" qualifier from the PP. We do not sell, rent, or trade Account Data
  — absolute. Sharing is scoped only by the enumerated situations (subprocessors
  for stated reasons, corporate transactions, Compelled Disclosure, or with
  permission).

- **INACT-1 / INACT-2 — inactive accounts.** Best-efforts email notice at least
  30 days before removal (courtesy, not a precondition), with a 30-day
  post-notice export window; inactivity = no successful sign-in for five years
  (60 months); signing in resets the period. Applied to the PP "Data retention
  and deletion" section.

- **TODO-23 / 23a — network-level access controls.** Multi-tenant CIDR/IP
  filtering is enforced at the application layer (code-verified); single-tenant
  deployments may offer IP-range filtering depending on the hosting provider;
  whichever is available is clearly labelled. Applied to ToS B.6.

- **TLS-1 — edge-TLS-termination exception.** Do not make any elimination
  claim; the exception is a fact of the current architecture. Cloudflare on
  regional entry domains only (e.g. `eu.onetimesecret.com`) and for protection
  of the service; Custom Domains are off Cloudflare and on Approximated; Global
  Elite excluded. DPA §12.2 and Schedule A aligned to the two transfer
  exceptions (Stripe billing; transient edge-network TLS termination).

- **HASH-1 — credential hashing.** Legacy bcrypt hashes remain for accounts
  with no successful sign-in since April 2026; upgrade to Argon2id happens on
  the next successful authentication. Qualified sentence applied to DPA
  Schedule C §1.2, PP security section, and TOMs §2. (Crypto claims verified
  against Familia v2.3.3.)

- **TODO-20a / 20b — Incoming Secrets.** Code-verified that configured
  recipient email addresses are protected (handled as a hashed value; only a
  display name rendered in the form). Mechanism sentence applied to ToS E.2.

- **DEF-1 — Verified Email Address.** ToS A.11 defines it as a domain while E.2
  treats it as an address at that domain. Looseness accepted; left as is.

- **BA-1 — "promote domain to organization".** Do not add the
  promote-domain-to-organization capability claim to anything published in this
  revision (feature not code-verified; future planning). The
  business-arrangements page remains the sole home of several commitments
  (sponsored arrangements, payer decoupling, consolidated invoicing,
  alias/boundary domains, spin-out path) — retain or re-home those whenever the
  page moves toward publication. Page + rationale now live under `research/`.

- **AWS EU-residency.** DPA entity-details note corrected to "SES and S3; data
  located in EU regions only (Frankfurt, Ireland)".

- **Item 1 — organization/subscription framing.** ToS C.4 rewritten
  arrangement-first (one Organization = one customer, each carries its own
  subscription; agencies/resellers/sponsors supported; self-hosting endorsed
  under the MIT license); the org-per-owner cap reframed as an ops guardrail
  raised on request. Rationale preserved in
  `research/business-arrangements-rationale.md`.

- **Items 2–16 (2026-07-01 batch pass).** Subprocessor change-notice rewritten
  to notice-with-30-day-objection; email taxonomy applied to the PP;
  single-tenant "may offer / where offered" framing; privacy contact delta
  (support@ → privacy@, 45 → 30 days); debugging exception narrowed; plain-
  language rewrites (soft limits, deliverability, Secret Content exception);
  hardcoded region counts removed; "trust centre" rename; public-OCI-image
  operating note in TOMs; one-human-per-login rationale; official-domain list
  and "Your Responsibilities" (ToS C.9). All reviewer-verified against the
  files with an anchor check.

- **Metadata / framing.** Both live docs read "Effective date: TBD on release";
  the 2024-06→2024-10 deltas stay in the full CHANGELOG, not the "what's
  changed in 2026" notice. DPA URL canonicalized to `onetimesecret.com/dpa`
  across ToS, PP, and TOMs (the earlier `/info/dpa` mismatch is resolved).

- **FINALIZATION-july1 items.** Cookies vs localStorage split into separate PP
  paragraphs; "what "dedicated" means" left out by decision.

- **B.2 domain-verification responsibility (rationale of record).** The ToS
  B.2 bullet making it the user's responsibility to verify they are on an
  official Onetime Secret domain is a deliberate responsibility-allocation
  clause, not boilerplate. Three layers: (1) threat model — a secret-sharing
  service is a prime phishing target, and the MIT-licensed app makes visually
  identical imposter instances trivial to stand up, so verification shifts to
  the person at the address bar, the only party positioned to do it; (2)
  liability boundary — protects against claims arising from secrets disclosed
  to an imposter site, pairing with the no-guarantee-of-delivery disclaimer;
  (3) product tie-in — Custom Domains (E.1) give recipients a domain they
  already trust, narrowing the phishing surface. Placement in B.2 is loose
  (it is not an account-formation rule); accepted, with the C.9
  official-domains list as the companion control.

- **CHANGELOG / WHATS-CHANGED drafting calls (2026-07-01).** Both derivative
  docs excluded everything unapplied or undecided at drafting time; the Secret
  Content access exceptions are stated plainly rather than softened (a
  "what's changed" notice that hides a narrowed privacy promise would be worse
  than the change itself); effective-date placeholders match the live docs.
  WHATS-CHANGED presents the DPA and TOMs as new publications — the private
  2026-02-18 DPA lineage appears only as "previously provided to
  dedicated-deployment customers". Source research preserved in
  `research/revision-history-2026.md`.
