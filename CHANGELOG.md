# Changelog

Substantive changes to the Onetime Secret policy documents — the Terms of
Service, Privacy Statement, Data Processing Agreement (DPA), and Technical and
Organizational Measures (TOMs) — organized by effective date, newest first.
Entries describe how the policies evolved for readers who don't want to read
diffs; wording polish, formatting, and typo fixes are omitted. The complete
history is in this repository's git log.

These documents began in May 2024 as a fork of [fly.io's site-policy
repository](https://github.com/superfly/site-policy), itself a fork of
[GitHub's](https://github.com/github/site-policy). Like the originals, the
policy text is dedicated to the public domain under CC0-1.0.

## Unreleased — 2026 policy revision (effective date set on release)

### Terms of Service

**Accounts and Organizations**
- Introduced Organizations: owner, administrator, and member roles; owners
  hold billing and SSO configuration, administrators manage members, domain configuration, and audit
  logs. 

_Each Organization represents exactly one customer (one legal entity) and carries its own subscription; an account owner may create up to five._ (we need to figure this out clearly once and for all, because the current wording is still ambiguous. it should be possible for one person to have multiple organizations and also for a single legal entity to have multiple subscriptions. e.g. an IT contractor that creates an org for each of their customders and acts as the owner on their behalf; should that be one subscription or one subscription per custom of theirs? which approach encourages faster growth vs value capture?)
  
- One human per login. Organization membership replaces the previous shared
  and additional-login arrangements. 

_This is an important change for privacy and security controls, for secret delivery for example._

- Documented the available authentication methods (passphrase, magic link,
  social sign-in, passkeys, SSO, MFA) and how availability varies by region,
  plan, and Organization configuration, including new Single Sign-On terms.

**Secrets and delivery**
- Added defined terms used across all policy documents: Secret and Secret
  Content, Receipt Link, Account Data, Custom Domain, Verified Email Address,
  Homepage Secrets, Incoming Secrets, Organization, Recipient, and others.
- New "Treatment of Secret Content" section: secrets are automatically purged
  on first access or expiration, and we do not read, scan, categorize, or
  analyze Secret Content, with several specific excemptions (owner consent,
  Organization owner direction, 

_debugging under confidentiality with audit  logging,_ (I understand the intent but the wording is weird and sounds troubling)_

and secrets addressed to us).

- New delivery disclaimer: we do not guarantee that a recipient can access a
  secret, that its contents are fully received (a secret reveals at most
  once), or that it reaches the intended person. Anyone holding the link is
  treated as a Recipient. The Terms now point to stronger protections
  (passphrase, sign-in requirement, Organization membership).

**Features**
- The old "Applications" section was replaced with terms for Custom Domains
  and domain-specific features: custom branding, Verified Email Addresses,
  Homepage Secrets, Incoming Secrets, SSO, and sign-in settings — including
  who is responsible for DNS, deliverability, and content received through
  these features.

**Usage, API, and resale**
- Expressly permitted: building the Service into your own applications via
  the API, and contractors, agencies, and managed-service providers using the
  Service on behalf of their customers 

_(one Organization and subscription per customer)._

_- Expressly prohibited: reselling, sublicensing, white-labeling, or pooling multiple customers into one Organization to avoid per-customer billing._

- Scraping: search engines and AI training services may crawl our
  documentation, developer sites, and blog; scraping the regional application
  domains is prohibited.
- "Unlimited" features clarified: anti-abuse soft limits may apply; a soft
  limit is not a billing cap, and ordinary-course(?? I am not familiar with the term) increases are free on
  request.
- Excessive-use terms now cover paid plans: no fixed ceilings, but usage far
  outside typical patterns starts a conversation about a better-fitting plan.

**Billing, refunds, and cancellation**
- Refunds introduced, replacing the previous "no refunds, no exceptions"
  policy: paid multi-tenant plans are refundable within 30 days of the most
  recent billing date; dedicated single-tenant plans default to the same
  window unless a separate agreement says otherwise.
- Billing mechanics corrected to match how billing actually works: plan and
  interval changes take effect immediately with proration.
- New coupons and promotions terms (discounts for non-profits, charities,
  B Corps, and educational institutions).
- Cancellation: data deletion tightened from 90 days to 30 days after
  cancellation (plus up to 30 more in encrypted backups); Organization
  cancellation disables member access; a secret's lifecycle is independent of
  account cancellation.

_- Single-tenant deployments may be provisioned automatically, with configurable resources and choice of hosting region, alongside the existing Global Elite tier._ I don't understand the phrasing. Alongside Global Elite tier? "May be provisioned"? Are we trying to say, we may offer this as a service?

**Legal and meta**
- Regional environments expanded from EU/US to EU, CA, NZ, UK, and US.
- Backup retention extended from 14 to 30 days; backups remain in the same
  regional jurisdiction.
- Support is provided in English; the English version of any policy or
  communication is authoritative.

_- The public site-policy repository is now the authoritative source of the policy text over the copy displayed on the website._ (rename to trust center)

- Minor changes (typos, formatting, plan-feature updates, new regional
  environments that don't change data processing) no longer trigger advance
  notice or a new effective date.

### Privacy Statement

- Replaced the generic "User Personal Information" concept with an itemized
  Account Data inventory: email, passphrase hash (never plaintext),
  passkey/WebAuthn credentials, recovery codes, MFA factors, billing and tax
  information, domain configuration, and usage metadata.
- New sections covering data we didn't previously describe: Organization
  accounts, SSO (identity claims received, no credential storage), Homepage
  and Incoming Secrets, Verified Email Addresses, and Secret Content itself.
- Named subprocessor table with a 30-day advance-notice commitment, replacing
  vague vendor categories. The canonical contractual list lives in the DPA.
- Security section rewritten from "industry standards" boilerplate to
  concrete measures: TLS 1.3, authenticated encryption with key material
  separated from the database tier, Argon2id credential hashing, full-disk
  encryption, encrypted offsite backups, strict CSP and HSTS with preload.
- Corrected the passphrase claim: a passphrase is an access-control gate
  verified before decryption, not part of key derivation — replacing an
  earlier "we cannot decrypt passphrase-protected secrets" statement that was
  only true of a legacy scheme.
- New data-residency section: five regional environments with named hosting
  providers; account data and Secret Content stay in-region for their whole
  lifecycle including backups, with two named exceptions (Stripe billing,
  edge-network TLS termination). Added an explicit no-third-country-transfers
  statement.
- Compelled disclosure rewritten around technical reality: purged secrets
  cannot be produced, only metadata; requests must come from an authority
  with jurisdiction over the data (GDPR Article 48 for EU-held data).
- Per-jurisdiction rights sections added: GDPR/UK GDPR (including what
  ephemeral secrets mean for access and erasure requests), CCPA/CPRA, and
  Canada (PIPEDA, BC/Alberta PIPA, Quebec Law 25).
- Retention changed from indefinite-until-deletion to defined windows:
  account data deleted within 30 days of cancellation plus up to 30 days in
  encrypted backups; billing records kept as tax law requires.

_- Email commitments hardened: no marketing email, and no tracking pixels or  track-and-redirect links in any email we send._ (need to be more specific about no marketign emails; we don't want to exclude sending new feature announcements, security advisories, or other service-related notices. IMPORTANT NOTE: must coincide with our Company Principles in our docs site. I think we actually say "no email" like at all, so I think we could adjust that a little bit)

- Response time for privacy requests: 30 days, extendable once by 30 days
  with notice. Privacy contact is now privacy@onetimesecret.com.?? (what was the email address in october 2024?)
- The service's open-source code is noted as an independent way to verify our
  data-handling claims.

### Data Processing Agreement — new

First public version. Based on the agreement previously provided directly to
dedicated-deployment (Global Elite) customers, adapted for publication:

_We can do this b/c we run our multi-tenant regional environments and custom installs in the same way, with the same security and privacy controls._

- Applies to all service tiers, with per-tier architecture described in
  Schedule A. Self-hosted deployments of the open-source software are out of
  scope — no processing relationship arises.
- Accepted automatically as part of the Terms of Service (GDPR Article 28(9)
  deemed acceptance); signature blocks removed, with a countersigned copy
  available on request. The document may be shared freely with compliance,
  legal, and audit teams.
- Data transfers: personal data stays in the region where it was collected;
  the sole exception is Stripe billing data under the EU-US, UK Extension,
  and Swiss-US Data Privacy Frameworks, with Standard Contractual Clauses
  retained as a fallback.
- Security disclosures aligned with the actual implementation:
  XChaCha20-Poly1305 authenticated encryption with BLAKE2b key derivation,
  ciphertext bound to its record, Argon2id hashing; a user passphrase is an
  access-control gate, not a key input.
- Audit provisions: documentation, certifications, or questionnaire responses
  may satisfy audit requests, with on-site audit as backstop; the requesting
  party bears audit costs.
- 72-hour breach notification, 30-day advance notice of subprocessor changes
  with objection right, and a corrected subprocessor schedule.
- Includes a UK Addendum and an FAQ.

### Technical and Organizational Measures — new

New standalone document describing the security measures implemented under
GDPR Article 32, supplementing the DPA and serving as the canonical
description of those measures (the DPA governs the binding obligations):

- Shared-responsibility model: every measure is marked as implemented by us,
  by the infrastructure provider (under its ISO 27001 / SOC 2 regime), or
  shared.
- Covers encryption and pseudonymization, tenant separation, transfer and
  input controls, availability and backups, incident response, secure
  development (CI gates, dependency-update cooldowns against supply-chain
  risk), privacy by default, order control, and subprocessor compliance.
- Publicly shareable with no confidentiality restriction; the open-source
  application and CI configuration make the controls independently
  verifiable.

## 2024-10-22 — Terms of Service and Privacy Statement

### Terms of Service

- Regional data centers introduced (eu. and us.onetimesecret.com); the region
  you select at signup determines where your data is stored and processed.
- New Data Retention and Security section: IP addresses retained at most 30
  days; secrets are unrecoverable once viewed or expired; encrypted backups
  kept at most 14 days and accessed only for disaster recovery or integrity
  testing.
- Account rules tightened: no more than one free personal account; individual
  logins only, with shared logins available to paid organization accounts on
  request.
- Cloudflare disclosed: traffic passes through Cloudflare by default for DDoS
  protection; Global Elite customers may bypass it.
- Stripe named as payment processor; we store only a payment token, never
  complete card details.
- Governing law changed from California (San Francisco venue) to British
  Columbia, Canada (Vancouver venue).
- Change-notification policy revised: notice of substantial changes by email
  or prominent posting, without the previous fixed 30-day advance period.
- Protected marks enumerated; new Feedback section.

### Privacy Statement

- Data residency restated as user-selected EU or US region, replacing the
  June 2024 EU-only commitment.
- Cloudflare added as a named vendor with a security-section disclosure.
- Collection list updated: preferred data-center location and color mode
  added.
- Third-party tracking statement qualified: still no analytics or tracking
  services, but embedded third-party content may set its own cookies.

## 2024-06-15 — first Onetime Secret versions

The Terms of Service, Privacy Statement, and Trademark Policy were created by
tailoring the fly.io/GitHub templates to Onetime Secret:

- Privacy Statement: data storage and processing committed to the European
  Union; Google Analytics and similar tracking services removed entirely;
  reframed around secrets as the unit of user content ("Information in your
  secret belongs to you"), with employee access only for security,
  maintenance, or consented support.
- Terms of Service: rebranded from the fly.io template, retaining its
  structure and commitments (users own their content, private content treated
  as confidential, 13+ age minimum) under the inherited US/California
  governing law.
- Trademark Policy: rebranded from GitHub's, with violation reports keyed to
  usernames and subdomains.
