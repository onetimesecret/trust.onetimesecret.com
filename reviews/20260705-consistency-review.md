# Cross-document consistency review — 2026-07-05

Five parallel review passes across the four primary documents (`onetime-dpa.md`,
`onetime-terms-of-service.md`, `onetime-privacy-statement.md`,
`onetime-toms.md`), one per dimension: definitions/terminology, security and
crypto claims, subprocessors/transfers, retention/lifecycle/money terms, and
cross-references/metadata.

## What is consistent

- Every internal anchor and cross-document section reference resolves and is
  on-topic (ToS↔DPA↔PP citations, DPA §13 liability pointer to ToS L/M/N,
  slugified anchors).
- Retention numbers match everywhere: local backups 7 days, 30-day caps, the
  30+30 post-termination structure (ToS J.3, DPA §10, PP, TOMs §5).
- The two transfer exceptions (Stripe; transient edge TLS) are stated
  near-verbatim across DPA §12.2, Schedule A, PP, and TOMs §1.3.
- Subprocessor change-notice terms (30-day objection, no-penalty termination,
  emergency variant) align across DPA §6, TOMs §7, PP.
- Secret Content crypto (XChaCha20-Poly1305/AES-256-GCM, key separation,
  passphrase-as-gate semantics), TLS 1.3, LUKS, admin MFA: consistent.
- Effective-date placeholders uniform ("TBD on release" in all four).
- DPA URL is `onetimesecret.com/dpa` everywhere; privacy@/support@/legal@
  split is clean; email taxonomy home (PP) uncontradicted.
- Controller/processor position correct in all four docs (customer =
  controller, we = processor); no role inversions.

## Blockers

1. **Geo-backups vs regional isolation.** ToS B.6 ("same regional
   jurisdiction") and PP ("remain in that region's infrastructure throughout
   their lifecycle, including encrypted backups"; only two exceptions)
   contradict DPA Schedule C §3 and TOMs §3, which place geo-located backups
   in AWS S3 Frankfurt. Cross-region for any non-EU Global Elite deployment
   and not one of the §12.2 exceptions. Schedule C also lacks the Global
   Elite scoping TOMs carries, and says "Frankfurt" where Schedule A says
   "Frankfurt, Ireland".
2. **Hetzner US.** PP region table: US region on "Hetzner (Oregon, USA)";
   DPA Schedule A lists Hetzner Data Location as "EU (Germany, Finland)"
   only. No Schedule A entry authorizes US hosting.
3. **Secret Content access exceptions diverge.** ToS D.4 enumerates four
   exceptions; PP says "except where strictly required for security or
   business continuity" (matches none of the four) while stating the claim
   unqualified elsewhere; DPA §3.2 is unqualified. Must reconcile to one
   list.
4. **DPA §10 export cutoff vs ToS J.3.** DPA §10 bars export requests "made
   after the account has been deleted"; ToS J.3 grants export on request
   within 30 days of cancellation, and the active record may be deleted
   inside that window. DPA §10's own retention paragraph (Operational
   Retention Period "to facilitate any requested data exports") supports the
   ToS position.
5. **(Borderline) Member-data delegation is dangling.** ToS B.3 and the PP
   delegate Organization-member controller/processor allocation to the DPA,
   but the DPA never mentions Organization or Member; §1.2 ("customers or
   employees") does not cover contractor members.

## Minor

- DPA calls the companion docs "Privacy Policy" (intro, §10) and "Terms and
  Conditions" (§10); actual titles are Privacy Statement / Terms of Service.
- TOMs is orphaned: it claims canonicality and sync with Schedule C, but DPA
  Schedule C, ToS B.6, and PP never cite it. ToS B.6 and TOMs both claim
  canonicality (arguably distinct scopes; clarify).
- Tier naming drift: DPA Schedule A intro and TOMs §1.3 present "Identity
  Plus" as the multi-tenant tier; ToS/PP define multi-tenant as Basic,
  Identity Plus, Team Plus (+ Lite variants).
- Account Data definition forked: ToS A.7 adds "or SSO claims" over DPA
  §1.16; TOMs §5 quotes the DPA version.
- Inactive-account policy (5-year, 30-day notice, 30-day export) exists only
  in the PP with no ToS anchor.
- "Without penalty" (DPA §6.2) has no stated proration/refund path for
  prepaid annual terms — confirmed real gap; already counsel item #1 in
  REMAINING_DECISIONS; leave for counsel.
- PP subprocessor table gaps: BunnyCDN absent (and in tension with the PP
  "your browser does not contact other companies' servers" claim); Proton
  Mail (Switzerland, support email) absent; Cloudflare row understates role
  (omits DNS + TLS termination; "free usage" though all multi-tenant tiers
  traverse it); Stripe "US/EU" in Schedule A vs "United States" elsewhere.
- Multi-tenant CIDR/IP filtering appears only in ToS B.6; absent from TOMs
  and DPA Schedule C.
- DPA undefined terms: §15 "Privacy Laws" (defined term is "Data Protection
  Laws"); §7.2 "Applicable Laws" (defined nowhere).
- `decisions/retention-state.yaml` line references are stale (values
  correct); Schedule B's 5-year configuration-documentation retention is
  missing from its exceptions block.

## Nits

Hashing detail asymmetry (bcrypt/April 2026 only in Schedule C; its "last
used before April 2026" differs from the decided "no successful sign-in since
April 2026"); backup keys "offsite" (DPA/TOMs) vs "offline" (PP); CSP/HSTS
claimed only in PP; "sub-processor" spelling in DPA §12.4 and TOMs §7;
"Single-tenant" hyphenation drift; Purge vs delete for Receipt Links (ToS
A.9); Organization re-glossed differently in PP; DPA "Company" never mapped
to ToS "Organization/User"; ToS C.9 domain list includes brands unexplained
by A.3; frontmatter only on ToS/PP; forward-looking "April 2026" date in a
TBD-dated document.

## Accepted / not reported

DEF-1 (Verified Email Address domain-vs-address looseness) — accepted as-is.
CC0 pointers at the GitHub repo — deliberate until the trust centre is live
(TC-1).
