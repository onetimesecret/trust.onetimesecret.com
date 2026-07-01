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
- **Status:** DONE — Code verified: Argon2id is default for new credentials, BCrypt cost 12 retained for legacy verification. Updated Schedule C §1.2.

### XD-2: Data Residency Contradiction Within DPA
- **Locations:** DPA §12.1; DPA §12.2; Privacy Statement "Where your data is processed"
- **Issue:** §12.1 permits "EU, UK, or other designated regions." §12.2 says no transfer outside EU/EEA/Switzerland. Privacy statement lists US (Hetzner Oregon), CA (DigitalOcean Toronto), NZ (Catalyst Cloud). §12.2 as written prohibits the service's own US/CA/NZ regions.
- **Action:** Rewrite §12.2 to reflect the actual multi-region architecture, or scope the DPA to EU/UK only and handle other regions separately.
- **Priority:** High
- **Status:** DONE — Rewrote §12.2: data stays in collection region; sole exception is Stripe billing data, covered by EU-US DPF.

### XD-3: SCCs — Relied Upon but Notes Say Not Applicable
- **Locations:** DPA §12.2; Privacy Statement notes
- **Issue:** DPA references EU Standard Contractual Clauses (2021) as a fallback. Privacy-statement notes explicitly state "We do not perform third country transfers. So the SCCs are not necessary or applicable."
- **Action:** Decide whether third-country transfers occur (they do, at minimum via Stripe). Align DPA and privacy statement accordingly.
- **Priority:** High
- **Status:** DONE — Resolved with XD-2. Regions are isolated; only Stripe billing data crosses borders. SCCs retained as fallback if DPF is invalidated.

### XD-4: Subprocessor Lists Diverge
- **Locations:** DPA Schedule A; Privacy Statement "Subprocessors" table
- **Issue:** Privacy statement lists Catalyst Cloud (NZ) — DPA omits it. DPA lists Lettermint, AWS SES, Proton Mail, UpCloud, NorthFlank, Altcha — privacy statement doesn't name them individually. Both notes files flag "decide one source of truth vs intentional duplication."
- **Action:** Decide: single canonical list in DPA (privacy statement refers to it), or maintain both with an explicit policy for keeping them in sync.
- **Priority:** High
- **Status:** DONE — Added Catalyst Cloud (NZ) to Schedule A hosting table and entity details. Corrected DigitalOcean location to include CA (Toronto). Privacy statement already defers to DPA as canonical list.

### XD-5: DPA §1.13 — Wrong Service Description
- **Location:** DPA §1.13
- **Issue:** Defines Services as "email, calendar, drive and other services." This is a Proton-template leftover from the pandoc HTML conversion. OTS provides none of those.
- **Action:** Replace with accurate service description.
- **Priority:** High
- **Status:** DONE — Replaced with "secure secret-sharing and sensitive information management platform."

### XD-6: DPA Scope vs Schedule A Scope
- **Locations:** DPA introduction; DPA Schedule A
- **Issue:** DPA intro scopes the agreement to "Global Elite tier services." Schedule A explicitly covers Identity Plus (Approximated listed as Identity Plus; CloudFlare proxy for "All" tiers). Either the intro should be broadened or Schedule A scoped down.
- **Action:** Decide whether DPA applies to all tiers or Global Elite only. Update intro and schedules to match.
- **Priority:** High
- **Status:** DONE — Broadened intro to "all service tiers." Schedule A already documents tier-specific architecture.

---

## DPA-Specific TODOs

### DPA-1: Self-Hosted Carve-Out
- **Source:** dpa-notes
- **Issue:** No doc clarifies whether the privacy statement or DPA applies to self-hosted deployments. Currently ambiguous.
- **Action:** Add carve-out language in either privacy statement or terms stating self-hosted does not constitute a data processing relationship.
- **Priority:** Medium
- **Status:** DONE — Added to both DPA intro and privacy statement applicability section.

### DPA-2: Data Subject Rights and Ephemeral Data in Privacy Statement
- **Source:** dpa-notes
- **Issue:** DPA §7.3 acknowledges the tension between GDPR Articles 15-17 and auto-purging secrets. The privacy statement's "Your rights" section lists rights but doesn't address what happens when a data subject requests access to a secret that no longer exists.
- **Action:** Add acknowledgement to privacy statement "Your rights" section, mirroring the DPA §7.3 language.
- **Priority:** Medium
- **Status:** IN PROGRESS — Being mirrored into the privacy statement by the sibling privacy-side pass; DPA §7.3 (source) is unchanged by this DPA pass.

### DPA-3: No-Sell/No-Share Qualifier
- **Source:** dpa-notes
- **Issue:** Privacy statement says "not for their commercial purposes" — qualifier may narrow the commitment unintentionally.
- **Action:** Decide whether "for their commercial purposes" qualifier is intentional. If not, remove it.
- **Priority:** Medium
- **Status:** NEEDS-DECISION — Whether the "for their commercial purposes" qualifier is intentional is a substantive scope judgment, not a mechanical edit. Remains open; not actioned by this DPA pass (privacy-statement text).

### DPA-4: Open Source as Transparency Measure
- **Source:** dpa-notes
- **Issue:** Neither doc mentions the open-source service codebase as a security/transparency measure. "Source of truth" references the site-policy repo only.
- **Action:** Consider adding a transparency note in the security section or source-of-truth section referencing the auditable codebase.
- **Priority:** Low
- **Status:** DONE — Added "Source code transparency" bullet to DPA Schedule C §6 (Organizational Measures); factual basis corroborated by DPA intro line 13 (open-source software). Drafted clause applied per instruction; recommend sign-off. Privacy-statement mirror handled by the sibling privacy-side pass.

### DPA-5: FAQ Section for DPA
- **Source:** dpa-notes
- **Issue:** No FAQ addressing common questions ("can I share this with my compliance team," "how do I get a signed copy," "is the DPA auto-accepted").
- **Action:** Draft FAQ section or standalone FAQ page.
- **Priority:** Low
- **Status:** DONE — Added "Frequently Asked Questions" section after Section 15 (before Schedule A) with three Q&A entries (DPA-5a share with compliance team, DPA-5b signed/countersigned copy mirroring resolved DPA-7 with no countersigning fee, DPA-5c auto-acceptance mirroring §13 Acceptance clause). Drafted clauses applied per instruction; recommend sign-off.

### DPA-6: Liability/Indemnification Cross-Reference
- **Source:** dpa-notes
- **Issue:** DPA has no liability provisions. ToS has them (Sections L, M, N). DPA does not cross-reference.
- **Action:** Add cross-reference from DPA to ToS liability sections, or add DPA-specific liability provisions.
- **Priority:** Medium
- **Status:** DONE — Added *Liability* clause in §13 cross-referencing ToS §§L, M, N.

### DPA-7: DPA Acceptance Mechanism
- **Source:** dpa-notes
- **Issue:** DPA has signature blocks but no description of acceptance workflow. Unclear whether auto-accepted via ToS or requires countersigning.
- **Action:** Clarify acceptance mechanism. If auto-accepted, state so and remove or repurpose signature blocks.
- **Priority:** Medium
- **Status:** DONE — Added *Acceptance* clause in §13: auto-accepted via ToS, countersigned copy available on request. Signature blocks retained for optional use.

### DPA-8: Audit Cost Allocation
- **Source:** dpa-notes
- **Issue:** DPA §11 is silent on who bears the cost of an audit.
- **Action:** Add cost allocation language (e.g., "the requesting party bears the costs").
- **Priority:** Medium
- **Status:** DONE — Added to §11: requesting party bears audit costs; Processor bears its own costs for documentation-based responses.

### DPA-9: Documentation as Audit Alternative
- **Source:** dpa-notes
- **Issue:** DPA requires on-site audit access only. No provision for satisfying requests with existing certifications, third-party audit reports, or documentation.
- **Action:** Add alternative satisfaction mechanism to reduce operational burden.
- **Priority:** Medium
- **Status:** DONE — Added to §11: Processor may satisfy audit requests with documentation, certifications, or questionnaire responses; on-site audit available if documentation is insufficient.

### DPA-10: Post-Termination Confidentiality in Privacy Statement
- **Source:** dpa-notes
- **Issue:** DPA commits to processor obligations surviving until all data is deleted, with confidentiality continuing indefinitely (§14). Privacy statement doesn't echo this.
- **Action:** Decide whether privacy statement should reference the indefinite confidentiality commitment or leave it in the DPA only.
- **Priority:** Low
- **Status:** IN PROGRESS — Being mirrored into the privacy statement by the sibling privacy-side pass; DPA §14 (source) is unchanged by this DPA pass.

### DPA-11: Schedule C Key Derivation — Verify Against Codebase
- **Source:** dpa-notes, privacy-statement-notes
- **Issue:** Schedule C §1.1 documents SHA-256 key derivation from system secret + object ID + optional passphrase. Privacy statement claims "We cannot decrypt Secret Content where the secret was protected with a user-supplied passphrase." Notes question whether Familia v2.9.1 actually uses AAD fields as described.
- **Action:** Verify against onetimesecret and Familia v2.9.1 codebase. Update whichever doc is inaccurate.
- **Priority:** High — requires code verification
- **Status:** DONE — Code verified against Familia v2.3.3. Updated Schedule C §1.1: algorithm is XChaCha20-Poly1305 (not AES-256-CBC), key derivation is BLAKE2b (not SHA-256), passphrase is access control only (not part of key derivation). Privacy statement claim "cannot decrypt passphrase-protected secrets" is misleading for server-side encryption and needs separate update.

---

## Global Elite Stripping

Boundary review of every Global-Elite-related passage in onetime-dpa-2026-05-31.md. Removals strip Global-Elite-only onboarding/questionnaire/substitution plumbing; the Global Elite tier itself is retained as a documented premium tier. Review the keep/remove boundary below.

| ID | Section | Passage | Bucket | Action taken |
| :--- | :--- | :--- | :--- | :--- |
| GE-1 | §1.10 Definitions | "*Global Elite*" tier definition | keep | Unchanged. Defines the premium tier referenced by retained Schedule A/C rows. |
| GE-2 | §1.11 Definitions | "*Onboarding Questionnaire*" definition | remove | DONE — Removed §1.11; renumbered former §1.12–§1.20 down to §1.11–§1.19. No body text references definitions by number, so no dangling refs. |
| GE-3 | §10 Deletion/return | "unless otherwise specified in the Onboarding Questionnaire or" carve-out | remove | DONE — Removed the orphaned cross-ref fragment only; retention rule and "required by applicable law" exception retained. |
| GE-4 | Schedule A intro | "...alternatives that Global Elite customers may select during onboarding" | done | APPLIED in b013643 (2026-06-14) — recast to "alternatives that the Processor may engage". |
| GE-5 | Schedule A GE block | Sentence 1 (dedicated-environment architecture) / sentence 2 (subprocessor substitution via OQ) | remove | DONE — Kept sentence 1 (mirrors Identity Plus description). Removed sentence 2 (OQ substitution plumbing). |
| GE-6 | Schedule A Backup & Storage | AWS (S3) Global Elite geo-located backups row | keep | Unchanged. Documents a real premium-tier subprocessor; coupled to retained Schedule C §3. (Trailing comma in Categories cell is a cosmetic typo, left as-is.) |
| GE-7 | Schedule A Forms & Data Processing | Altcha row ("Onboarding questionnaire") | remove | DONE — Removed the Altcha row and its sole-row "Forms & Data Processing" heading; Altcha not in entity-details table, so no second orphan. |
| GE-8 | Schedule B (entire) | Processing Implementation and Customization, incl. live Altcha form URL and 5-year retention | remove | DONE — Removed Schedule B in full, leaving a single horizontal rule between Schedule A and Schedule C. No surviving section cross-references Schedule B. |
| GE-9 | Schedule C §3 | Geo-located AWS S3 (Frankfurt) backups, 30-day expiry | keep | Unchanged. Organizational security control consistent with GE-6 and regional isolation policy. |

Orphan verification after edits: zero matches for "Onboarding Questionnaire", "Altcha", "eu.altcha.org", and "Schedule B" in the DPA. Single rule confirmed between Schedule A and Schedule C.

---
