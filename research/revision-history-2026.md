# Revision history of the 2026 policy documents (internal research record)

Compiled 2026-07-01 from git diffs at phase boundaries, commit messages, the
review-task trackers, and the working revision files. This is the internal
phase-by-phase account of how the 2026 document set was produced; the
reader-facing derivatives are `../CHANGELOG.md` (full history) and
`../WHATS-CHANGED.md` (abridged notice). The open items this record
originally tracked have since been resolved or moved to
`../REMAINING_DECISIONS.md`; only the durable history is kept here.

## Version anchors

| Anchor | Commit | Date | Notes |
| :--- | :--- | :--- | :--- |
| Fork point (github → flyio → ots) | f6d1336 | 2024-05-31 | tag archive/2024-05-31-pristine |
| Fork tailoring complete | fedfdb3 (PR #6) | 2024-06-15 | first ToS/PP/trademark docs; PP effective 2024-06-15 |
| Published baseline (main) | eedf485 (PR #7) | 2024-10-22 | ToS + PP effective **2024-10-22**; = *.main.md files |
| Draft 2 | 8294787 | 2026-05-31 | ToS/PP rewrites; trademark policy deleted |
| DPA added + review pass | 8245ada | 2026-05-31→06-14 | DPA from 2026-02-18 HTML; IC/TODO fixes applied |
| Second wave | 696812f | 2026-06-14→16 | ToS TODO-14..22, 24; DPA/PP sync |
| TOMs document | 62b362c | 2026-06-18→07-01 | new standalone Art. 32 TOMs doc |

## Phase inventory

### Phase 0 — Fork tailoring (2024-06-14/15, PRs #2/#5/#6)

Provenance: docs created by renaming fly.io's tailored copies of GitHub's site
policies, then rebranded. All GitHub template files deleted. CC0 license on
policy text retained throughout.

**Privacy Statement** (effective 2024-06-15):

- Data location changed US → EU: data "stored and processed in the European
  Union", with explicit promise it would not move to the US "without explicit
  consent and without changes to this Privacy Statement".
- Google Analytics removed entirely: "We do not use Google Analytics or
  similar third party tracking services."
- Reframed around "secrets" as the unit of user content: "Information in your
  secret belongs to you"; employee access only for security/maintenance or
  support with owner consent.
- Retained from template: no sale/rent/trade of personal data, no advertising,
  under-13 prohibition, compelled-disclosure transparency, 30-day notice of
  material changes.

**Terms of Service** (effective date left at inherited "March 27, 2018"):

- Mostly rebrand of fly.io/GitHub A–P structure. Deviations: allowed **more
  than one** free account per person/entity (template said one);
  "Excessive Bandwidth Use" → "Excessive Use".
- Inherited US federal / California law, San Francisco venue.

**Trademark Policy**: pure rebrand of GitHub's; only addition was
username/subdomain identification in violation reports.

### Phase 1 — 2024-10-22 policy updates (PR #7 = published baseline)

**Terms of Service** (effective 2024-10-22):

- Regional data centers introduced: eu./us.onetimesecret.com; signup region
  selection "determines where your data will be stored and processed".
- Cloudflare disclosed: all traffic through Cloudflare by default; Global
  Elite may bypass.
- New "Data Retention and Security" section: IP addresses retained max 30
  days; secrets unrecoverable once accessed/expired; encrypted backups max
  14 days rolling, accessed only for disaster recovery/integrity testing.
- Free-account rule REVERSED: no more than one free personal account;
  individual logins only, paid orgs may request shared logins per custom
  domain.
- New Feedback section (D.7) and Payment Processing section (I.6: Stripe
  named; only payment token stored, card data at Stripe under PCI).
- Trademark list enumerated in G.2.
- Changes-to-terms notice WEAKENED: 30-day advance notice for material
  changes replaced with "substantial changes" notice, no fixed period.
- **Governing law changed: California/San Francisco → British Columbia,
  Canada / Vancouver venue.**
- DMCA formal takedown links replaced with support email contact.

**Privacy Statement** (effective 2024-10-22):

- Data residency restated as user-selected EU or US region; the June-era
  "never to the US without consent" promise REMOVED (superseded by region
  selection).
- Cloudflare added as named vendor + security-section disclosure.
- Collection list expanded: preferred data center, color mode; dropped
  referring-site language.
- Third-party tracking softened from absolute to qualified (embedded content
  may set its own cookies).

### Phase 2 — Draft 2 (2026-05-31, eedf485 → 8294787)

**Terms of Service** — near-total rewrite; rebrand "onetimesecret.com" →
"Onetime Secret":

- Scope: hosted service across named tiers (Basic, Identity Plus, Team Plus);
  Global Elite may sign separate supplementing agreement; partner brands
  ("Powered by Onetime Secret", SecretaryLinks) noted.
- A. Definitions: 8 new defined terms — Account Data, Secret/Secret Content,
  Receipt Link, Custom Domain, Verified Email Domain, Homepage Secret,
  Organization, SSO. Definitions declared canonical for ToS + PP. Regions
  expanded to eu/ca/nz/uk/us.
- New B.3 Organizations (authority to bind entity; owner/admin/member roles),
  B.4 Authentication Methods, B.5 SSO. One human per login; org membership
  replaces shared logins.
- B.6 Data Retention and Security declared canonical over PP summary; backup
  retention 14 → **30 days**; itemized crypto added (later removed in review
  pass); backups stay in-region.
- New D.4 Treatment of Secret Content: no plaintext access to
  passphrase-protected secrets; automatic purge; "we do not access, read,
  scan, categorize, or analyze Secret Content." Old license-grant-to-other-
  users and moral-rights sections removed; license to OTS narrowed to
  hosting/serving necessity.
- Old E. Applications replaced by E. Custom Domains, Verified Email Domains,
  Homepage Secrets (DNS responsibility, phishing suspension, transactional
  email from customer domains, visitor-submitted secrets).
- **Refunds introduced**: flat "No refunds, no exceptions" replaced —
  multi-tenant refundable within 30 days of most recent billing date;
  single-tenant per separate agreement or 90 days default (later cut to 30).
- J.2 Organization Cancellation; post-cancellation deletion 90 → 30 days
  (+30 in backups); copy-request window 90 → 30 days; secret lifecycle
  independent of account cancellation.
- K.4 Support Languages (English authoritative); O. minor-changes carve-out
  (no notice for typos/formatting/new region); P. Translations + Source of
  Truth (public site-policy repo authoritative over website copy).
- Trademark policy doc deleted as unused; ToS G.2 trademark list gained
  OnetimeSecret.dev / SecretaryLinks.

**Privacy Statement** — full restructure of the October 2024 statement:

- Scope: standard hosted tiers; Global Elite may receive supplemental
  agreement; partner-brand coverage. Formal companion to ToS — defined terms
  and retention/backup/security rules anchor to specific ToS sections.
- "User Personal Information" replaced with itemized **Account Data**
  inventory: email, passphrase hash (never plaintext), WebAuthn/passkey
  credentials, recovery codes, MFA factors, billing/tax, domain config,
  usage metadata.
- New data-category sections: Organization accounts (member lists, roles,
  admin audit log), SSO (identity claims, no credential storage, SSO event
  logs ≤30 days), Homepage Secrets, Verified Email Domains, Secret Content
  (encrypted in transit/at rest, never accessed/read/scanned/analyzed;
  lifecycle per ToS). Server logs ≤30 days.
- **Named subprocessor table** (new; 2024 had vague vendor categories):
  Cloudflare (DDoS, regional domains only), Stripe (US, EU-US DPF),
  Approximated (SSL termination for Custom Domains), transactional email
  (EU), regional hosting. 30-day advance notice of subprocessor changes.
- Security: "industry standards" boilerplate → concrete measures (TLS 1.3,
  AES-256-CBC w/ key material separated from DB tier, Argon2id replacing old
  bcrypt claim, LUKS, GPG 4096-bit backups w/ offline keys, admin MFA).
- **Data residency** (new): five named regional environments (EU/CA/NZ/UK/US)
  with per-region providers; data in-region for whole lifecycle incl.
  backups; exceptions: Stripe billing, edge-network TLS termination.
- Per-jurisdiction rights sections (new): GDPR/UK GDPR, CCPA/CPRA (explicit
  no-sell/share in CCPA terms), Canada (PIPEDA, BC/AB PIPA, Quebec Law 25;
  company identified as BC-based).
- Compelled disclosure rewritten around technical limits: purged secrets
  cannot be produced; only metadata disclosable.
- Retention: "indefinite until you delete" → defined windows (30 days after
  cancellation + ≤30 in encrypted backups; billing records 6–10 years per
  tax law).
- **Email tracking pixels removed** (2024 disclosed pixel tags; now commits
  to no pixels or track-and-redirect links in any email).
- Translations (English controls) + Source of truth (public repo
  authoritative); privacy contact support@ → privacy@onetimesecret.com.

### Phase 3 — Review pass (2026-05-31 → 06-14, 8294787 → 8245ada)

**Terms of Service** (IC-1..4, TODO-1..12 applied):

- Org limits: one free org per entity → up to five orgs per account owner,
  more by request (TODO-1).
- Owner vs admin split: owners hold billing + SSO config; admins get audit
  logs/member management but not billing/SSO (TODO-2).
- **GDPR controller claim removed** (IC-1): "Organization is controller for
  member data" replaced with administrative-control description + pointer to
  DPA.
- MFA restated as "where available on your plan"; availability tied to
  region + org config + plan tier (TODO-3/4).
- **Itemized crypto pulled from ToS** in favor of PP; Global Elite crypto
  detail promise softened to "available on request" (IC-4). Backups
  "same regional jurisdiction" (was "infrastructure").
- C.4: new "Permitted API integration" + "Prohibited resale of
  domain-specific features" (TODO-5).
- C.5 scraping: AI training + search engines expressly PERMITTED on
  docs/dev/blog; regional app subdomains expressly PROHIBITED (TODO-6).
- C.7 Excessive Use extended to paid plans: no fixed ceilings, but atypical
  usage triggers upgrade/API-plan conversation (TODO-7).
- **D.4 Secret Content access exceptions added** (TODO-8): (a) owner consent,
  (b) org-owner direction, (c) debugging/troubleshooting under
  confidentiality with audit logging, (d) secrets addressed to OTS. The
  "passphrase-protected secrets inaccessible in plaintext" bullet REMOVED
  (matches the AAD/codebase-audit finding — see
  `passphrase-crypto-rationale.md`).
- E restructured to "Custom Domains and Domain-Specific Features"; introduces
  Custom Branding, Incoming Secrets, Sign-in Settings; "Verified Email
  Domain" → "Verified Email Address" (TODO-9).
- I.2 billing mechanics corrected to Stripe reality: interval changes
  immediate with proration (was: billed full year at next monthly date)
  (TODO-11).
- I.3 plan names broadened (Identity Lite, Team Lite, successors);
  single-tenant default refund window 90 → 30 days (TODO-12).
- G.2 marks restated as common-law ™; "One-Time Secret" added,
  SecretaryLinks removed (TODO-10).

### Phase 4 — Second wave (2026-06-14 → 16, 8245ada → 696812f)

**Terms of Service** (TODO-14..22, 24 applied):

- A.15 Recipient defined: retrieval via link; no account needed; for
  non-authenticated recipients, link possession grants access (TODO-19).
- "Surfaces of the Service" framing: public surface vs workspace vs session
  pages (TODO-22).
- Organization = exactly one customer/legal entity; may be administered by a
  third party (contractor); each org has its own subscription (TODO-15/16).
- C.4 resale terms: "Serving your own customers" (contractors/agencies/MSPs
  OK, one org+subscription per customer) vs "Prohibited resale" (reselling,
  sublicensing, service-bureau, white-labeling, pooling customers into one
  org) (TODO-15).
- **No guarantee of receipt or delivery** (D.4 + L): no guarantee recipient
  can access, contents fully received (reveals at most once), or reaches
  intended target; link holder = Recipient; points to passphrase/sign-in/org
  protections (TODO-14).
- "Unlimited" = soft limits; not a billing cap; ordinary increases free on
  request (TODO-18, C.7).
- Homepage/Incoming Secrets: org owner responsible for content + AUP
  compliance; best-effort avoidance of recipient-email exposure, liability
  disclaimed (TODO-20).
- Verified Email Address deliverability = customer responsibility; default
  limited to Custom Domain local part (TODO-21).
- I.3 single-tenant automatic provisioning language (dedicated environment,
  VPS options, region choice) alongside manual Global Elite (TODO-24).
- I.7 Coupons and Promotions: non-profit/charity/B Corp/edu discounts;
  eligibility monitored (TODO-17).

### Phase 5a — Privacy Statement review pass + DPA sync (8294787 → 2d765dc)

Review pass (BLK-1..5, IC-1..2, TODO-1..11 — all resolved):

- **Passphrase encryption claim corrected (TODO-8, critical).** Removed
  "we cannot decrypt Secret Content protected with a user-supplied
  passphrase" — codebase audit found it true only for legacy v1; in v2 the
  passphrase is an access-control gate, not part of key derivation. Replaced
  with accurate framing: keys not stored alongside data; DB tier has no
  decryption capability; passphrase controls authorization, not
  cryptographic ability. Also removed a nonexistent "client-side encryption
  proxy" clause. (Full rationale: `passphrase-crypto-rationale.md`.)
- No-third-country-transfers statement added (TODO-3); draft-2 SCC/Art. 46
  boilerplate dropped as inapplicable.
- Compelled disclosure jurisdiction-scoped (TODO-5): authority must have
  jurisdiction over the data; for EU-held data GDPR Art. 48 applies —
  third-country orders alone insufficient without MLAT. (Carries a
  "recommend legal review" note — tracked in `../REMAINING_DECISIONS.md`.)
- Edge networks clarified (TODO-2, IC-1): Cloudflare/Approximated TLS
  termination may occur outside destination region; Approximated = Identity
  Plus AND Team Plus; Global Elite exempt (TLS terminates in-region on
  dedicated infra).
- Hosting table completed (BLK-4/5): Hetzner (Nuremberg), DigitalOcean
  (Toronto), Catalyst Cloud (Porirua), UpCloud (London), Hetzner (Oregon).
- Subprocessor list placement decided (TODO-7): summary table in PP,
  canonical contractual list in DPA (links → /dpa).
- CSP/HSTS/preload bullet added (TODO-10).
- Marketing position hardened (TODO-9, IC-2): "We do not send marketing
  emails"; product info in transactional email ≠ marketing.
- Self-hosted carve-out (DPA-1): no processing relationship with OTS.
- Incoming Secrets covered (TODO-6), incl. recipient addresses stored hashed
  to prevent enumeration.
- Response time standardized: 30 days, extendable once by 30 with notice.

DPA sync (2026-06-14, mirror items):

- DPA-2: ephemeral-data limits on GDPR rights — Art. 15 access impossible
  for purged secrets; Art. 16/17 exercised via Receipt Link deletion/expiry.
- DPA-4: open-source transparency note in security section.
- DPA-10: post-termination confidentiality survives, without extending the
  30+30 deletion windows.

### Phase 5b — DPA lineage (2026-02-18 custom-install HTML → public markdown)

Origin: used directly with Global Elite custom-install customers; pandoc
conversion (format-only), then adapted for public multi-tenant publication.
Changes vs the 2026-02-18 custom-customer version:

- **Scope broadened** from Global Elite only to all service tiers, per-tier
  architecture in Schedule A (XD-6). Self-hosted carve-out new (DPA-1).
- Proton-template leftover fixed (XD-5): "Services" definition described
  "email, calendar, drive"; now secure secret-sharing platform.
- **Data transfer clause rewritten (XD-2/XD-3):** old §12.2 flatly banned
  transfers outside EU/EEA/CH (contradicting US/CA/NZ regions). New: data
  stays in collection region; sole exception Stripe billing (EU-US/UK
  Extension/Swiss-US DPFs), SCCs (2021) retained only as fallback.
- **Encryption disclosure corrected against code (DPA-11):** Schedule C
  changed from AES-256-CBC + SHA-256 derivation (w/ optional passphrase
  input) to XChaCha20-Poly1305 + BLAKE2b via Familia encrypted fields, AAD
  binding, passphrase = access gate not key input.
- Hashing corrected (XD-1): "BCrypt cost 12, transitioning to Argon2id" →
  Argon2id current.
- New audit provisions (DPA-8/9): documentation/certifications/questionnaires
  may satisfy audits, on-site as backstop; requester bears audit costs.
- New Liability cross-reference to ToS L/M/N (DPA-6); new Acceptance clause —
  auto-incorporated on ToS acceptance (DPA-7).
- Subprocessor corrections (XD-4): Catalyst Cloud added; DigitalOcean
  Toronto; Hetzner locations fixed. Entity-details table converted from HTML,
  trimmed to eight current entities (Hetzner, Proton, Lettermint, Stripe,
  Northflank, UpCloud, Cloudflare, Approximated).
- **Signature model change:** "IN WITNESS WHEREOF" blocks removed from DPA +
  UK Addendum; replaced with deemed acceptance per GDPR Art. 28(9) —
  effective on ToS acceptance, no signature. New authority warranty.
  Countersigned copy available on request (per new FAQ).
- **Global Elite stripping (GE-1..9):** onboarding-questionnaire definition,
  questionnaire retention carve-out, subprocessor-substitution sentence,
  Altcha forms row, and all of Schedule B (onboarding process incl. live
  form URL) removed. The tier itself, dedicated environments, and geo-located
  AWS S3 Frankfurt backups retained.
- New FAQ section (DPA-5): freely shareable, auto-accepted via ToS.
- Schedule A intro recast: "alternatives Global Elite customers may select
  during onboarding" → "alternatives the Processor may engage" (GE-4 wording,
  applied in b013643).
- Approximated row: "DNS multicast" → "Global edge network"; tiers +Team Plus.

### Phase 6 — TOMs document (2026-06-18 → 07-01, new)

New standalone `onetime-toms.md` — Art. 32 GDPR technical & organizational
measures, publicly shareable (no confidentiality restriction), supplements DPA
§4 + Schedule C and is declared the canonical *description* of measures (DPA
governs binding obligations). Not applicable to self-hosted deployments.
Structure and notable content:

- Shared-responsibility model: every measure marked Subprocessor / Processor /
  Shared. Physical controls = IaaS providers (Hetzner ISO 27001:2022, UpCloud
  ISO 27001/SOC 2 Type II/CISPE).
- Encryption specifics: XChaCha20-Poly1305 (AES-256-GCM alternative), BLAKE2b
  key derivation from system secret + context string, per-op nonce; key not
  stored, DB server cannot decrypt; AAD binding of object class+identifier;
  Argon2id for credentials and passphrases; LUKS full-disk; GPG 4096-bit
  backups with offsite keys.
- Tenant separation: Identity Plus multi-tenant compartmentalization; Global
  Elite logically dedicated stacks + DB instances.
- Availability: local encrypted backups 7 days; Global Elite geo backups in
  AWS S3 Frankfurt, 30-day expiry.
- Incident response: 72-hour breach notification (DPA §8); annual crypto
  review; Art. 30(2) records on request.
- Secure development: tiered CI (static analysis, i18n validation, unit +
  integration matrix over PostgreSQL/SQLite, container e2e), independent
  automated code review, API contract diffing; Renovate 2-week cooldown
  against supply-chain risk, Dependabot security updates bypass cooldown;
  open-source app + CI config = independently verifiable controls.
- Privacy by default: ephemeral Secret Content purged on first access/expiry;
  no tracking/analytics/profiling; Account Data minimal; deletion after
  30-day operational + 30-day backup retention.
- Order control + subprocessor compliance: documented instructions only;
  30 days' advance notice of new subprocessors with objection right.
