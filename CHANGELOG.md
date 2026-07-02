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
  hold billing and SSO configuration, administrators manage members, domain
  configuration, and audit logs.
- Each Organization represents one customer (one legal entity) and carries
  its own subscription. One account owner may hold many Organizations — for
  example, an Organization per customer they serve. The five-Organization
  limit applies only to free Organizations, is a housekeeping measure rather
  than a business restriction, and is raised on request; there is no cap on
  paid Organizations.
- One human per login. Organization membership replaces the previous shared
  and additional-login arrangements. Per-person logins are what make the
  privacy and security controls work: secret delivery, access controls, and
  audit trails all assume that a login identifies one person.
- Documented the available authentication methods (passphrase, magic link,
  social sign-in, passkeys, SSO, MFA) and how availability varies by region,
  plan, and Organization configuration, including new Single Sign-On terms.

**Secrets and delivery**
- Added defined terms used across all policy documents: Secret and Secret
  Content, Receipt Link, Account Data, Custom Domain, Verified Email Address,
  Homepage Secrets, Incoming Secrets, Organization, Recipient, and others.
- New "Treatment of Secret Content" section: secrets are automatically purged
  on first access or expiration, and we do not access, read, scan,
  categorize, or analyze Secret Content, with four specific exceptions: the
  owner's express prior consent; the direction of an Organization owner
  acting on behalf of its members; when you ask us to help debug a problem —
  in which case we access only what is needed to help you, the access is
  covered by our duty of confidentiality, and it is logged; and secrets
  addressed to Onetime Secret itself.
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
- Service usage limits rewritten around the business arrangements the
  Service supports, all on one structure: one Organization represents one
  customer, and each Organization carries its own subscription.
- Expressly supported: integrating the Service into your own applications
  via the API (you are responsible for meeting the data-residency and
  privacy regulations that apply to you and your customers — each regional
  environment keeps data in its own jurisdiction), and serving your own
  customers as a contractor, agency, or managed-service provider. You may
  own and administer an Organization for each of your customers, and a given
  subscription may be paid by you or directly by your customer — no separate
  agreement needed.
- Running your own instance is noted as an option: the application is open
  source under the MIT license, and self-hosted installations sit outside
  these Terms entirely.
- The one boundary: one customer per subscription. Serving multiple distinct
  customers through a single Organization or subscription is not permitted,
  and reselling, sublicensing, or white-labeling the hosted Service requires
  a separate written agreement.
- New "Your responsibilities" subsection in Acceptable Use collects the
  duties that are yours alone: verifying you are on an official domain (the
  Terms now list the official Onetime Secret domains — OnetimeSecret.com/.dev,
  Onetime.co/.dev, otshosted.com/.dev, metalbaum.com/.dev,
  OnetimeSecretary.com/.dev, and the related brand SecretaryLinks.com,
  together with their subdomains including the regional environments); keeping your Custom Domain's DNS records correct,
  including the records that determine whether email sent from your verified
  addresses is delivered; managing Organization membership, including
  promptly removing access when someone leaves; and the content of your
  Organization's Secrets, including through Homepage and Incoming Secrets.
- Scraping: search engines and AI training services may crawl our
  documentation, developer sites, and blog; scraping the regional application
  domains is prohibited.
- "Unlimited" features clarified: a soft limit may apply to prevent abuse
  and protect shared resources, but a soft limit is not a billing cap — if
  you reach one through normal use, you can ask us to raise it at no
  additional charge, and soft limits may also increase over time as part of
  normal service improvements.
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
- Single-tenant deployment options described: Global Elite remains a manual,
  high-touch, single-tenant deployment tailored to the customer. The Terms
  also reserve room for a capability we may offer in the future —
  automatically provisioned single-tenant deployments with configurable
  resources and a choice of hosting region. This is a carve-out for a
  possible future offering, not something offered today; where offered, the
  available options will be described where the offering is presented.

**Legal and meta**
- Regional environments expanded beyond the original EU and US: as of this
  revision, EU, CA, NZ, UK, and US, with further regions added over time.
- Backup retention extended from 14 to 30 days; backups remain in the same
  regional jurisdiction.
- New network-level access controls disclosure: on the multi-tenant Service,
  IP/CIDR access filtering is enforced at the application layer; single-tenant
  deployments may offer network-level IP-range filtering depending on the
  hosting provider. Whichever is available is clearly labelled where offered.
- Support is provided in English; the English version of any policy or
  communication is authoritative.
- The policy text now has a single authoritative source: our public trust
  centre, a git-backed repository where every change is dated and the full
  history is reviewable. Where the copy displayed on the website and the
  trust centre version differ at the same effective date, the trust centre
  version controls.
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
- Controller/processor roles stated for Organization member data: the
  customer — the legal entity on whose behalf the Organization is created —
  is the controller, and we process member data on the customer's behalf as
  processor, with the roles defined in the DPA.
- Named subprocessor table replacing vague vendor categories, with a
  notice-with-objection process for changes: when we plan to engage a new
  subprocessor service, we email all account holders; if you object, you can
  cancel the affected service without penalty during the 30-day notice
  period (cancellation is the remedy — we may still proceed with the change
  generally). In an emergency, we may engage a replacement first and notify
  promptly afterward, with the same objection right running from that
  notice. The dated, git-backed public list supplements these email notices
  rather than replacing them; the canonical contractual list lives in the
  DPA.
- Security section rewritten from "industry standards" boilerplate to
  concrete measures: TLS 1.3, authenticated encryption with key material
  separated from the database tier, Argon2id credential hashing, full-disk
  encryption, encrypted offsite backups, strict CSP and HSTS with preload.
- Corrected the passphrase claim: a passphrase is an access-control gate
  verified before decryption, not part of key derivation — replacing an
  earlier "we cannot decrypt passphrase-protected secrets" statement that was
  only true of a legacy scheme.
- New data-residency section: each regional environment is listed with its
  named hosting provider (the list is dated as of the effective date, and
  further regions are added from time to time); account data and Secret
  Content stay in-region for their whole lifecycle including backups, with
  two named exceptions (Stripe billing, edge-network TLS termination). Added
  an explicit no-third-country-transfers statement.
- Compelled disclosure rewritten around technical reality: purged secrets
  cannot be produced, only metadata; requests must come from an authority
  with jurisdiction over the data (GDPR Article 48 for EU-held data).
- Per-jurisdiction rights sections added: GDPR/UK GDPR (including what
  ephemeral secrets mean for access and erasure requests), CCPA/CPRA, and
  Canada (PIPEDA, BC/Alberta PIPA, Quebec Law 25).
- Retention changed from indefinite-until-deletion to defined windows:
  account data deleted within 30 days of cancellation plus up to 30 days in
  encrypted backups; billing records kept as tax law requires.
- New inactive-accounts policy: an account with no successful sign-in for
  five years may be removed. We attempt email notice at least 30 days before
  removal (a reasonable-efforts courtesy, not a precondition), an export of
  Account Data can be requested for 30 days after notice, and signing in
  resets the period.
- Email commitments hardened and made specific: we never send unsolicited
  marketing email, and no email we send contains tracking pixels or
  click-tracking links (the only delivery signals we receive come from the
  SMTP layer, such as hard bounces). Email now falls into three defined
  categories: transactional (secret links, account and billing notices — no
  opt-out), service and security notices (security advisories, breach,
  policy-change, and deprecation notices — sent when needed, including when
  legally required; not marketing), and product news (strictly opt-in, rare,
  with one-click unsubscribe).
- Privacy contact changed from support@onetimesecret.com to
  privacy@onetimesecret.com, and the response commitment tightened from 45
  days to 30 days, extendable once by 30 days with notice.
- The service's open-source code is noted as an independent way to verify our
  data-handling claims.

### Data Processing Agreement — new

First public version. Based on the agreement previously provided directly to
dedicated-deployment (Global Elite) customers, adapted for publication:

- Applies to all service tiers, with per-tier architecture described in
  Schedule A. One DPA can cover every tier because the multi-tenant regional
  environments and custom installs run the same way, with the same security
  and privacy controls. Self-hosted deployments of the open-source software
  are out of scope — no processing relationship arises.
- Accepted automatically as part of the Terms of Service (GDPR Article 28(9)
  deemed acceptance); signature blocks removed, with a countersigned copy
  available on request. The document may be shared freely with compliance,
  legal, and audit teams.
- Data transfers: personal data stays in the region where it was collected,
  with two limited exceptions: Stripe billing data under the EU-US, UK
  Extension, and Swiss-US Data Privacy Frameworks (Standard Contractual
  Clauses retained as a fallback), and transient edge-network TLS
  termination on the multi-tenant tiers (Cloudflare for regional service
  domains, Approximated for Custom Domains), with traffic re-encrypted into
  the regional environment; single-tenant deployments use neither edge
  network.
- Security disclosures aligned with the actual implementation:
  XChaCha20-Poly1305 authenticated encryption with BLAKE2b key derivation,
  ciphertext bound to its record, Argon2id hashing; a user passphrase is an
  access-control gate, not a key input.
- Audit provisions: documentation, certifications, or questionnaire responses
  may satisfy audit requests, with on-site audit as backstop; the requesting
  party bears audit costs.
- 72-hour breach notification, and a corrected subprocessor schedule.
- Subprocessor changes on a notice-with-objection model: email notice to all
  account holders of any new or replacement subprocessor, then a 30-day
  objection window during which an objecting customer may terminate the
  affected services without penalty (termination is the remedy; the
  engagement need not be suspended or reversed). An emergency carve-out
  allows engaging a replacement first — to preserve security, availability,
  or continuity — with prompt notice after, the objection window running
  from that notice. The public, dated, version-historied subprocessor list
  supplements this notice; it does not replace it.
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
- The production service runs from the same public OCI images we publish,
  as regular operating procedure; any exception is temporary, made only when
  a vulnerability must be patched faster than the public release cycle
  allows.
- Publicly shareable with no confidentiality restriction; the open-source
  application and CI configuration make the controls independently
  verifiable, and running from the published images extends that
  verifiability to the deployed artifact itself.

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
