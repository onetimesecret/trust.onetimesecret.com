# What's changed in our policies

Effective date: **TBD on release**

We've updated our Terms of Service and Privacy Statement, and published two
new documents: a Data Processing Agreement (DPA) and a description of our
Technical and Organizational Measures (TOMs). This is a plain-language summary
of what changed since the October 22, 2024 versions. It's a courtesy summary,
not part of the agreements so any in the case of any discrepancies the 
agreements supersede. For the full history, see the [changelog](./CHANGELOG.md).

## The short version

- **Organizations are now part of the Terms.** Teams get owner, administrator,
  and member roles; each Organization represents one customer with its own
  subscription.
- **We introduced refunds.** The old "no refunds, no exceptions" policy is
  gone. We actually have given refunds to anyone who's asked so this change
  reflects that. Paid plans are refundable within 30 days of your most recent
  billing date.
- **Faster deletion, longer backups.** Account data is deleted within 30 days
  of cancellation (was 90); encrypted backups are kept up to 30 days (was 14)
  and stay in your region.
- **We published a DPA and TOMs.** The data-processing terms we previously
  provided to dedicated-deployment customers now apply to every plan,
  automatically. No signature or sales conversation required (unless your 
  compliance process wants one). 
- **More regions.** The service now runs in five regional environments. As of 
  June 2026, that includes EU, Canada, Aotearoa New Zealand, US, and UK. And
  we'll be adding more regions in the future. As always, each environment is
  self-contained and your data never leaves its region.

## Terms of Service

- **Organizations.** New terms for team accounts: roles and responsibilities,
  one Organization per customer, up to five Organizations per account owner,
  and one human per login (Organization membership replaces shared logins).
- **Sign-in options.** The Terms now describe the available authentication
  methods -- passphrase, magic link, social sign-in, passkeys, SSO, and MFA 
  -- and how availability varies by plan and region.
- **How we treat your secrets.** Secrets are purged on first access or
  expiration, and we do not read, scan, or analyze Secret Content. The Terms
  now spell out the narrow exceptions (your consent, your Organization
  owner's direction, debugging under confidentiality with audit logging, and
  secrets sent to us directly).
- **Delivery isn't guaranteed.** A secret reveals at most once, and anyone
  holding the link can be the one who reveals it. The Terms say this plainly
  now, and point to the protections that can narrow it: passphrases, sign-in
  requirements, and Organization membership.
- **Custom domains and related features.** New terms for custom domains,
  custom branding, verified email addresses, homepage and incoming secrets,
  and SSO configuration, including what's your responsibility and what's ours.
  For example, some of your responsibilities include managing your DNS 
  records, deliverability ??, adding members to your organization, and 
  the content of secrets your organization creates.
- **Using the Service for your customers.** Contractors, agencies, and
  managed-service providers may use the Service on behalf of their customers, 
  with one Organization and subscription per customer. 

_Reselling, white-labeling,  and pooling customers into one Organization are prohibited._

- **Refunds and billing.** 30-day refund window on paid plans; plan and
  interval changes take effect immediately with proration; new discount terms
  for non-profits and educational institutions.
- **Housekeeping.** English is the authoritative language; the public

_site-policy repository is the authoritative copy of these documents; minor_ [rename: trust-centre]

  editorial changes no longer reset the effective date.

## Privacy Statement

- **Exactly what we collect.** A concrete inventory of account data (email,
  passphrase hash, passkeys, MFA factors, billing details, usage metadata)
  replaces the old catch-all "User Personal Information."
- **Where your data lives.** 
 
_Five regional environments with named hosting providers._ (The 5 will change)

  Your data — including backups — stays in its jurisdiction for its
  whole lifecycle. The two exceptions are named: Stripe for billing, and

_edge-network TLS termination._ (We can eliminate this, not in every region immediately, be specific)
  
- **Who we share with.** 

_A named subprocessor list with 30 days' advance notice before we add anyone._ ("anyone" is an odd word choice. They are services not people. also we need to have a better way to handle changes. t's not realistic for our multi-tenant service to wait 30 days before integrating a new service. Research existing trust centers.)

- **How we protect it.** Specific security measures instead of "industry
  standards": TLS 1.3, authenticated encryption with keys kept separate from
  the database, Argon2id hashing, encrypted backups. We also corrected how we
  describe passphrases: a passphrase gates access to a secret; it is not part
  of the encryption key.
- **Your rights, by jurisdiction.** Dedicated sections for GDPR/UK GDPR,
  California, and Canada — including what a self-destructing secret means for
  access and erasure requests (once it's viewed or expired, there's nothing
  left to produce).
- **Law enforcement requests.** Purged secrets cannot be produced, only
  metadata and requests must come from an authority with jurisdiction over
  the data.
- **Email.** No marketing email, and no tracking pixels or click-tracking
  links in anything we send. Privacy questions now go to
  privacy@onetimesecret.com, answered within 30 days.

## Data Processing Agreement — new

Previously, our DPA was provided directly to dedicated-deployment custom
install customers.
It now covers every plan and is accepted automatically as part of the Terms, 
no signature needed (a countersigned copy is available if your compliance
process wants one). It commits to region-locked processing, code-accurate
encryption disclosures, 72-hour breach notification, subprocessor change
notice with an objection right, and documentation-based audits. Share it
freely with your legal and compliance teams. Self-hosted installations of 
our open-source software are out of scope (we're not responsible for those).

## Technical and Organizational Measures — new

A standalone, publicly shareable description of our security measures under
GDPR Article 32: encryption, tenant separation, backups, incident response,
secure development, and privacy by default; each clearly marked as ours, our
infrastructure provider's, or shared. Because the application and its CI
configuration are open source, these controls can be independently verified
rather than taken on faith. 

_We run our application from the public OCI images as a regular operating procedure (any except is temporary when we need to patch a vulnerability quickly)._
