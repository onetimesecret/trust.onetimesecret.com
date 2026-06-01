---
title: Privacy Statement
---

Effective date: **TBD on release**

Onetime Secret provides a service for securely sharing sensitive information. Managing private data carries significant responsibility, and this policy describes how we handle the information entrusted to our service.

This Privacy Statement applies to our standard hosted service, including the Basic, Identity Plus, and Team Plus tiers. Customers on our Global Elite tier — which provides dedicated, single-tenant deployments — may receive a separate agreement that supplements this Privacy Statement.

This Privacy Statement does not apply to self-hosted deployments of our open-source software. If you operate your own instance, no data processing relationship with us arises in connection with that deployment.

We may also offer services under related or partner brands (for example, marked "Powered by Onetime Secret" or "by Onetime Secret"). Those services may operate under their own published policies tailored to the features they provide.

This Privacy Statement and the [Terms of Service](https://onetimesecret.com/terms) are companion documents. Defined terms (such as **Secret Content**, **Account Data**, **Custom Domain**, and **Homepage Secret**) are defined in [Section A of the Terms of Service](https://onetimesecret.com/terms#a-definitions); operational details about retention, backups, and security measures are governed by [Section B.6 of the Terms of Service](https://onetimesecret.com/terms#6-data-retention-and-security) and summarized here.

## The short version

We collect information only with your consent. We collect the minimum amount of personal information necessary to operate the service. We do not sell it. We use it only for the purposes described here.

The short version doesn't tell you everything, so please read on for the full picture.

## What information we collect, and why

### Information from website browsers

If you're browsing the website without an account, we collect the same kind of information most websites collect: browser type, language preference, regional environment selection, color mode preference, request timestamps, and your IP address. We use common technologies including cookies, HTML5 `localStorage` and `sessionStorage`, and server logs.

We use this information to operate the website, to monitor and protect its security, and to understand in aggregate how the service is used. Server request log retention is governed by [Section B.6 of the Terms of Service](https://onetimesecret.com/terms#6-data-retention-and-security): in summary, up to 30 days, and sooner depending on traffic volume.

### Information from users with accounts

When you create an account we ask for a valid email address. The available sign-in methods (passphrase, magic link, SSO, passkey, third-party identity providers, multi-factor authentication, and recovery codes) are described in [Section B.4 of the Terms of Service](https://onetimesecret.com/terms#4-authentication-methods). Available methods may change over time and may vary by region and plan tier.

The information we hold about your account ("**Account Data**", as defined in [Section A.7 of the Terms of Service](https://onetimesecret.com/terms#a-definitions)) may include:

- A username, display name, and email address
- Authentication credentials, which depending on the methods you use may include a passphrase hash (we never store passphrases in plaintext), public WebAuthn / passkey credentials, recovery codes, or identity claims received from a third-party provider
- Multi-factor authentication factors you have configured
- Billing contact and tax information for paid plans
- Custom Domains, Verified Email Addresses, and similar configuration you set up
- Usage metadata necessary to operate the service (account creation date, plan tier, last login timestamp, and similar)

We use Account Data to identify you, to provide the services you have requested, and to communicate with you on the basis you have agreed to. We limit our use of Account Data to the purposes described in this Privacy Statement.

### Information from Organization accounts

If you create an Organization account — a workspace shared by multiple users — additional information is processed at the Organization level:

- The Organization's name, billing contact, and tax details
- A list of members and their roles within the Organization
- Custom Domains, Verified Email Addresses, SSO configuration, and other settings configured for the Organization
- An audit log of administrative actions taken within the Organization

The Organization's owner or designated administrator is responsible for the personal data of Organization members in the sense given to a "controller" under the GDPR. We process Organization member data on behalf of the Organization. The Organization-side rules and responsibilities are set out in [Section B.3 of the Terms of Service](https://onetimesecret.com/terms#3-organization-accounts).

### Information from Single Sign-On

If your Organization enables SSO, you authenticate via your Organization's identity provider (Google Workspace, Okta, Microsoft Entra ID, or any SAML 2.0 / OIDC provider your Organization configures). We receive a limited set of identity claims — typically your email address, a stable identifier, your display name, and any group memberships your Organization has chosen to share. We do not receive or store your credentials.

We log SSO authentication events for security and audit purposes. Retention applies as described in [Section B.6 of the Terms of Service](https://onetimesecret.com/terms#6-data-retention-and-security) — in summary, up to 30 days. Retention is based on our legitimate interest in security monitoring and audit, and is limited to what is necessary for those purposes.

If your Organization disables your account at the identity provider, your active sessions are terminated and your access is revoked. Account Data within the Organization is then handled in accordance with the Organization's instructions and the cancellation rules in [Section J of the Terms of Service](https://onetimesecret.com/terms#j-cancellation-and-termination).

### Secret Content

**Secret Content** (defined in [Section A.8 of the Terms of Service](https://onetimesecret.com/terms#a-definitions)) is the information you place inside a secret. It is held separately from Account Data and is encrypted in transit and at rest. We do not access, read, scan, categorize, or analyze Secret Content. The lifecycle of Secret Content (purge on first viewing, expiry, or manual deletion via the Receipt Link, with up to 30 days of persistence in encrypted backups) is governed by [Section B.6 of the Terms of Service](https://onetimesecret.com/terms#6-data-retention-and-security).

If you store sensitive personal information inside a secret, you remain responsible for that decision and for compliance with applicable law. We cannot retrieve, restore, or assist with access to a secret once it has been viewed, expired, or deleted.

### Homepage Secrets and Incoming Secrets

If you have enabled **Homepage Secrets** or **Incoming Secrets** on a Custom Domain (see [Section E.3 of the Terms of Service](https://onetimesecret.com/terms#3-homepage-secrets)), visitors who submit secrets through your Custom Domain are treated, for privacy purposes, in the same way as any other visitor. We do not require these visitors to have an account. Their IP address and request metadata are subject to the same retention period as other server request logs.

If your configuration requires a visitor to identify themselves before submitting a secret (for example, by providing an email address), the information they provide is associated with the resulting secret and forms part of your Account Data. If you have configured Incoming Secrets with designated recipients, recipient email addresses are stored in hashed form to prevent enumeration.

### Verified Email Addresses

If you configure a Verified Email Address so we can send transactional notifications from an address on your own domain, we record the verification status and the configuration values you set. We do not host your email or read its contents. The DNS records you must publish (and your responsibility for maintaining them) are described in [Section E.2 of the Terms of Service](https://onetimesecret.com/terms#2-verified-email-domains).

### What we do not collect

We do not intentionally collect sensitive personal information — social security numbers, genetic data, health information, religious information — in your Account Data. We recognize that you might place such information inside a secret. If you do, that information is handled as Secret Content as described above; we do not access it.

We do not intentionally collect information stored inside a secret. Information in a secret belongs to you, and you are responsible for it and for ensuring that your content complies with our [Terms of Service](https://onetimesecret.com/terms). Onetime Secret personnel do not access secrets except where strictly required for security or business continuity.

If you are a child under the age of 13, you may not have an account on Onetime Secret. We do not knowingly collect information from children under 13. If we learn that an account belongs to a user under 13, we will close that account.

## How we share the information we collect

We do not share, sell, rent, or trade your Account Data with third parties for their commercial purposes. We do not disclose Account Data outside Onetime Secret except in the situations listed in this section, in the section below on Compelled Disclosure, or with your permission.

We do not share Secret Content with anyone. By design, we don't have meaningful access to it ourselves.

We may share aggregated, non-personally-identifying information about how the service is used. We do not sell any such information.

We do not host advertising on Onetime Secret.

### Subprocessors

We share Account Data, and in some cases encrypted Secret Content, with a small set of subprocessors that help us run the service. They are contractually bound to handle the data in line with this Privacy Statement.

| Subprocessor | Purpose | Location |
| --- | --- | --- |
| Cloudflare, Inc. | DDoS protection on our regional service domains (e.g. `eu.onetimesecret.com`, `ca.onetimesecret.com`), which are the entry points for free usage | Global edge network |
| Stripe, Inc. | Payment processing for paid plans | United States (EU-US Data Privacy Framework certified) |
| Approximated, Inc. | SSL termination for customer Custom Domains on our multi-tenant paid tiers (Identity Plus and Team Plus) | Global edge network |
| Transactional email providers | Delivery of account, notification, and security emails | EU |
| Regional hosting providers | Application and data hosting within each region | See "Where your data is processed", below |

Cloudflare provides DDoS protection on the regional service domains (the entry points for free usage). Customer Custom Domains on Identity Plus and Team Plus are served via Approximated and are not routed through Cloudflare by us. The customer's own ability to place their Custom Domain behind an edge network of their choice is described in [Section E.1 of the Terms of Service](https://onetimesecret.com/terms#1-custom-domains).

Hosting providers vary by region (see "Where your data is processed" below for the per-region hosting provider). We maintain a current, detailed list of subprocessors — including legal entity, address, location, purpose, and categories of data processed in our Data Processing Agreement — at [onetimesecret.com/dpa](https://onetimesecret.com/dpa). We update that list when subprocessors change, and we provide advance notice of changes in line with our standard subprocessor notice period of 30 days.

### Sharing in connection with a corporate transaction

We may share Account Data if we are involved in a merger, sale, or acquisition. If any such change of ownership happens, we will ensure that it is on terms that preserve the confidentiality of Account Data, and we will notify you on the website or by email before any transfer.

## Cookies and tracking

### Cookies

We use cookies (and similar technologies, such as HTML5 `localStorage` and `sessionStorage`) to keep you logged in, to remember your preferences, and to operate the service. The cookies we set are essential for the operation of the website or are used for performance and functionality. We do not use cookies to track you across other websites.

### No third-party tracking

We do not use third-party analytics, product-tracking, or session-replay services such as Google Analytics, Mixpanel, Segment, Amplitude, Heap, Hotjar, FullStory, PostHog, or Plausible or any other similar service. We do not embed third-party tracking pixels, advertising tags, or social-media tracking. We do not build profiles of individual users or perform behavioral analysis. 

### Operational logging

We retain server request logs and error monitoring data for up to 30 days for the purposes of security monitoring, technical diagnostics, and service improvement. Error monitoring is performed using a self-hosted instance of Sentry within the European Union, with client-side and server-side data scrubbing applied. We do not intentionally collect personal data through error reports, although some may be incidentally captured.

## How we secure your information

The technical and organizational security measures applied to the Service are:

- TLS 1.3 in transit, with strong cipher suites
- AES-256-CBC encryption of Secret Content, with key material that is never stored alongside the encrypted data in the database tier
- Argon2id for credential hashing, applied to both account passphrases and secret passphrases
- LUKS full-disk encryption on production storage
- GPG 4096-bit asymmetric encryption of backups, with decryption keys held offline
- Multi-factor authentication for administrative access
- Strict Content Security Policy, HTTP Strict Transport Security (HSTS), and inclusion in browser HSTS preload lists across all domains

These are summarized here for transparency. The operational rules that bind these measures (including IP and log retention, backup retention and access, Secret Content lifecycle, and any Global Elite-specific cryptographic measures) are governed by [Section B.6 of the Terms of Service](https://onetimesecret.com/terms#6-data-retention-and-security).

No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.

## Where your data is processed

We operate the service in multiple regional environments. As of the effective date above, those are:

| Region | Domain | Hosting provider |
| --- | --- | --- |
| EU | `eu.onetimesecret.com` | Hetzner (Nuremberg, Germany) |
| CA | `ca.onetimesecret.com` | DigitalOcean (Toronto, Canada) |
| NZ | `nz.onetimesecret.com` | Catalyst Cloud (Porirua, NZ) |
| UK | `uk.onetimesecret.com` | Upcloud (London, UK) |
| US | `us.onetimesecret.com` | Hetzner (Oregon, USA) |

We add further regions from time to time. The authoritative subprocessor list at [onetimesecret.com/dpa](https://onetimesecret.com/dpa) records each provider's legal entity, address, and processing scope.

When you create an account, you choose the regional environment in which your account lives. Account Data and Secret Content created in a given jurisdiction remain in that region's infrastructure throughout their lifecycle, including encrypted backups. We do not transfer Account Data or Secret Content between regions.

There are two narrow exceptions, both inherent to operating the service:

- **Payment processing:** Stripe processes billing data in the United States under the EU-US Data Privacy Framework and equivalent transfer mechanisms for other regions. This applies only to billing data — Account Data outside the billing context, and Secret Content, are not transferred to Stripe.
- **Edge networks:** Cloudflare (for our regional domains) and Approximated (for Custom Domains on Identity Plus and Team Plus) operate global edge networks that terminate SSL connections close to the visitor. The encrypted application traffic is then forwarded into the appropriate regional environment for processing.

Other than the two exceptions described above, we do not transfer personal data outside the jurisdiction in which it was collected.

## Your rights and how to raise concerns

We provide the same baseline of privacy protection to all our users. Some regions also give residents specific statutory rights, summarized here. Where there is any conflict, the law of your jurisdiction prevails.

### Europe (EU and EEA) and the United Kingdom

If you are in the EU, EEA, or UK, you have rights under the GDPR or UK GDPR, including the right to access, rectify, or erase your personal data; the right to restrict or object to processing; and the right to data portability. You also have the right to lodge a complaint with your local supervisory authority — the Information Commissioner's Office (ICO) for UK residents, or the supervisory authority in your country of residence for EU/EEA residents.

### California

If you are a California resident, you have rights under the California Consumer Privacy Act, as amended by the California Privacy Rights Act (collectively, the "**CCPA**"), including the right to know what personal information we collect about you, the right to delete personal information we hold about you, the right to correct inaccurate information, and the right to opt out of the sale or sharing of personal information. We do not sell or share personal information as those terms are defined in the CCPA. You may exercise these rights by emailing [privacy@onetimesecret.com](mailto:privacy@onetimesecret.com); we will not discriminate against you for exercising them.

### Canada

We are based in British Columbia, Canada, and we operate in accordance with the federal Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy laws including British Columbia's Personal Information Protection Act (PIPA), Alberta's PIPA, and Quebec's Law 25. If you are a resident of Canada, you have rights to access and correct your personal information held by us, and you may lodge a complaint with the Office of the Privacy Commissioner of Canada or the equivalent provincial commissioner.

### Other regions

If you are in a region not listed above, you may still have privacy rights under applicable local law. We will honor those rights to the extent they apply to our processing of your personal data.

### Raising a concern

If you have a concern about the way we handle your personal data, please email [privacy@onetimesecret.com](mailto:privacy@onetimesecret.com) with the subject line "Privacy Concerns." We aim to respond within 30 days of receiving your request. In complex cases, we may extend this period by up to an additional 30 days, and we will notify you of the extension and the reasons for it.

## How we respond to compelled disclosure

We may disclose personal data in response to a valid subpoena, court order, warrant, or similar government order issued by a court or authority with jurisdiction over the data in question, or where we believe in good faith that disclosure is reasonably necessary to protect our property or rights, or those of third parties or the public. For data held in the European Union, we apply GDPR Article 48: a third-country court order or administrative decision is not, on its own, a sufficient legal basis for disclosure unless supported by an international agreement such as a mutual legal assistance treaty.

When permitted, we will make a reasonable effort to notify users of any disclosure of their information, unless we are prohibited by law or court order from doing so, or in rare exigent circumstances.

By design, our ability to respond to such requests with respect to Secret Content is limited:

- We cannot disclose the contents of a secret that has already been purged.
- We cannot decrypt Secret Content where the secret was protected with a user-supplied passphrase, or where the secret was encrypted client-side with a key we never receive (such as in flows where we act as a proxy for re-encrypted ciphertext).
- We can disclose Account Data, including account email addresses, the current or previous existence of a secret key (not the contents), its creation timestamp, its expiry, and similar metadata, when properly compelled to do so.

## How you can access and control your information

If you are an Onetime Secret user, you may access, update, or delete your account information from your account dashboard or by contacting [support@onetimesecret.com](mailto:support@onetimesecret.com).

If you are a member of an Organization, your account is administered by the Organization owner or administrator. The Organization owner can disable your account, request its deletion, or export Organization data on your behalf.

## Data retention and deletion

The cancellation and deletion windows for Account Data, including the active record and encrypted backup retention period, are governed by [Section J.3 of the Terms of Service](https://onetimesecret.com/terms#3-upon-cancellation). In summary: up to 30 days to delete the active account record after cancellation, plus up to a further 30 days for encrypted backup copies.

We retain billing records for as long as required by applicable tax and accounting law (typically six to ten years), regardless of account deletion. Billing records are limited to invoice metadata and are held by Stripe and in our accounting records.

If you would like to cancel your account or delete your personal information, you may do so from your account dashboard or by emailing [support@onetimesecret.com](mailto:support@onetimesecret.com). We retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.

## How we communicate with you

We do not send marketing emails. We may include brief product information in non-security-related transactional emails such as read notifications. These communications are not marketing emails and do not require separate consent.

We do not embed tracking pixels or track-and-redirect links in any of our emails — transactional or service. The only delivery signals we receive are those returned by the SMTP layer (such as hard bounces and delivery failures).

If you have configured a Verified Email Address for your account or Organization, we may send transactional emails on your behalf from that domain. You remain responsible for ensuring the underlying DNS records you have published are accurate.

## Changes to our Privacy Statement

We may update this Privacy Statement from time to time. We will provide notice of material changes through the Website at least 30 days before the change takes effect, by posting a notice on our home page or by sending an email to the address associated with your account.

Minor changes that do not affect your rights or our obligations — such as typo corrections, formatting changes, clarifying language, or the addition of a new regional environment that does not change how existing users' data is processed — do not trigger advance notice and do not change the effective date above.

## Translations

We make this Privacy Statement available in multiple languages. Our translation policy and language-of-record rule are the same as those described in [Section P.4 of the Terms of Service](https://onetimesecret.com/terms#4-translations): we use a combination of professional and machine-assisted translation, translations may contain errors, and in case of any conflict between language versions, the English version of this Privacy Statement controls. If you encounter a translation that is unclear, inaccurate, or otherwise wrong, please tell us at [privacy@onetimesecret.com](mailto:privacy@onetimesecret.com).

## Source of truth

This Privacy Statement is published in our public [site-policy repository](https://github.com/onetimesecret/site-policy). In the event of any discrepancy between the version of this Privacy Statement displayed on the Website and the version in the public repository at the same effective date, the version in the public repository is the authoritative version.

## License

This Privacy Statement is licensed under the [Creative Commons Zero license](https://creativecommons.org/publicdomain/zero/1.0/). For details, see our [site-policy repository](https://github.com/onetimesecret/site-policy).

## Contacting Onetime Secret

Questions regarding this Privacy Statement or our information practices should be directed to [privacy@onetimesecret.com](mailto:privacy@onetimesecret.com).
