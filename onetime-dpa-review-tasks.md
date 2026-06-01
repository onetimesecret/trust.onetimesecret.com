# DPA & Cross-Document Review Tasks

Generated: 2026-06-01
Source: onetime-dpa-notes.txt, onetime-privacy-statement-notes.txt, cross-document review

---

## Cross-Document Contradictions

### XD-1: Hashing — BCrypt vs Argon2id
- **Locations:** DPA Schedule C §1.2; Privacy Statement line 137
- **Issue:** DPA says "BCrypt with cost factor 12" and frames Argon2id as a transition. Privacy statement states Argon2id as current. One is wrong.
- **Action:** Determine current production state. Update whichever doc is stale.
- **Priority:** High

### XD-2: Data Residency Contradiction Within DPA
- **Locations:** DPA §12.1; DPA §12.2; Privacy Statement "Where your data is processed"
- **Issue:** §12.1 permits "EU, UK, or other designated regions." §12.2 says no transfer outside EU/EEA/Switzerland. Privacy statement lists US (Hetzner Oregon), CA (DigitalOcean Toronto), NZ (Catalyst Cloud). §12.2 as written prohibits the service's own US/CA/NZ regions.
- **Action:** Rewrite §12.2 to reflect the actual multi-region architecture, or scope the DPA to EU/UK only and handle other regions separately.
- **Priority:** High

### XD-3: SCCs — Relied Upon but Notes Say Not Applicable
- **Locations:** DPA §12.2; Privacy Statement notes
- **Issue:** DPA references EU Standard Contractual Clauses (2021) as a fallback. Privacy-statement notes explicitly state "We do not perform third country transfers. So the SCCs are not necessary or applicable."
- **Action:** Decide whether third-country transfers occur (they do, at minimum via Stripe). Align DPA and privacy statement accordingly.
- **Priority:** High

### XD-4: Subprocessor Lists Diverge
- **Locations:** DPA Schedule A; Privacy Statement "Subprocessors" table
- **Issue:** Privacy statement lists Catalyst Cloud (NZ) — DPA omits it. DPA lists Lettermint, AWS SES, Proton Mail, UpCloud, NorthFlank, Altcha — privacy statement doesn't name them individually. Both notes files flag "decide one source of truth vs intentional duplication."
- **Action:** Decide: single canonical list in DPA (privacy statement refers to it), or maintain both with an explicit policy for keeping them in sync.
- **Priority:** High

### XD-5: DPA §1.13 — Wrong Service Description
- **Location:** DPA §1.13
- **Issue:** Defines Services as "email, calendar, drive and other services." This is a Proton-template leftover from the pandoc HTML conversion. OTS provides none of those.
- **Action:** Replace with accurate service description.
- **Priority:** High

### XD-6: DPA Scope vs Schedule A Scope
- **Locations:** DPA introduction; DPA Schedule A
- **Issue:** DPA intro scopes the agreement to "Global Elite tier services." Schedule A explicitly covers Identity Plus (Approximated listed as Identity Plus; CloudFlare proxy for "All" tiers). Either the intro should be broadened or Schedule A scoped down.
- **Action:** Decide whether DPA applies to all tiers or Global Elite only. Update intro and schedules to match.
- **Priority:** High

---

## DPA-Specific TODOs

### DPA-1: Self-Hosted Carve-Out
- **Source:** dpa-notes
- **Issue:** No doc clarifies whether the privacy statement or DPA applies to self-hosted deployments. Currently ambiguous.
- **Action:** Add carve-out language in either privacy statement or terms stating self-hosted does not constitute a data processing relationship.
- **Priority:** Medium

### DPA-2: Data Subject Rights and Ephemeral Data in Privacy Statement
- **Source:** dpa-notes
- **Issue:** DPA §7.3 acknowledges the tension between GDPR Articles 15-17 and auto-purging secrets. The privacy statement's "Your rights" section lists rights but doesn't address what happens when a data subject requests access to a secret that no longer exists.
- **Action:** Add acknowledgement to privacy statement "Your rights" section, mirroring the DPA §7.3 language.
- **Priority:** Medium

### DPA-3: No-Sell/No-Share Qualifier
- **Source:** dpa-notes
- **Issue:** Privacy statement says "not for their commercial purposes" — qualifier may narrow the commitment unintentionally.
- **Action:** Decide whether "for their commercial purposes" qualifier is intentional. If not, remove it.
- **Priority:** Medium

### DPA-4: Open Source as Transparency Measure
- **Source:** dpa-notes
- **Issue:** Neither doc mentions the open-source service codebase as a security/transparency measure. "Source of truth" references the site-policy repo only.
- **Action:** Consider adding a transparency note in the security section or source-of-truth section referencing the auditable codebase.
- **Priority:** Low

### DPA-5: FAQ Section for DPA
- **Source:** dpa-notes
- **Issue:** No FAQ addressing common questions ("can I share this with my compliance team," "how do I get a signed copy," "is the DPA auto-accepted").
- **Action:** Draft FAQ section or standalone FAQ page.
- **Priority:** Low

### DPA-6: Liability/Indemnification Cross-Reference
- **Source:** dpa-notes
- **Issue:** DPA has no liability provisions. ToS has them (Sections L, M, N). DPA does not cross-reference.
- **Action:** Add cross-reference from DPA to ToS liability sections, or add DPA-specific liability provisions.
- **Priority:** Medium

### DPA-7: DPA Acceptance Mechanism
- **Source:** dpa-notes
- **Issue:** DPA has signature blocks but no description of acceptance workflow. Unclear whether auto-accepted via ToS or requires countersigning.
- **Action:** Clarify acceptance mechanism. If auto-accepted, state so and remove or repurpose signature blocks.
- **Priority:** Medium

### DPA-8: Audit Cost Allocation
- **Source:** dpa-notes
- **Issue:** DPA §11 is silent on who bears the cost of an audit.
- **Action:** Add cost allocation language (e.g., "the requesting party bears the costs").
- **Priority:** Medium

### DPA-9: Documentation as Audit Alternative
- **Source:** dpa-notes
- **Issue:** DPA requires on-site audit access only. No provision for satisfying requests with existing certifications, third-party audit reports, or documentation.
- **Action:** Add alternative satisfaction mechanism to reduce operational burden.
- **Priority:** Medium

### DPA-10: Post-Termination Confidentiality in Privacy Statement
- **Source:** dpa-notes
- **Issue:** DPA commits to processor obligations surviving until all data is deleted, with confidentiality continuing indefinitely (§14). Privacy statement doesn't echo this.
- **Action:** Decide whether privacy statement should reference the indefinite confidentiality commitment or leave it in the DPA only.
- **Priority:** Low

### DPA-11: Schedule C Key Derivation — Verify Against Codebase
- **Source:** dpa-notes, privacy-statement-notes
- **Issue:** Schedule C §1.1 documents SHA-256 key derivation from system secret + object ID + optional passphrase. Privacy statement claims "We cannot decrypt Secret Content where the secret was protected with a user-supplied passphrase." Notes question whether Familia v2.9.1 actually uses AAD fields as described.
- **Action:** Verify against onetimesecret and Familia v2.9.1 codebase. Update whichever doc is inaccurate.
- **Priority:** High — requires code verification

---
