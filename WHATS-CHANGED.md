# What's changed in our policies

Effective date: **TBD on release**

We've updated our Terms of Service and Privacy Statement, and published two
new documents: a Data Processing Agreement (DPA) and a description of our
Technical and Organizational Measures (TOMs). This is a plain-language summary
of what changed since the October 22, 2024 versions. It's a courtesy summary,
not part of the agreements; if they disagree, the agreements control. For the
full history, see the [changelog](./CHANGELOG.md).

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
- **More regions.** The service now runs in multiple regional environments —
  as of June 2026: EU, Canada, Aotearoa New Zealand, US, and UK — and we add
  more over time. As always, each environment is self-contained and your data
  never leaves its region.

## Terms of Service

- **Organizations.** New terms for team accounts: roles and responsibilities,
  one Organization per customer, up to five free Organizations per account
  owner (no cap on paid ones), and one human per login — Organization
  membership replaces shared logins, because secret delivery, access controls,
  and audit trails all assume a login identifies one person.
- **Sign-in options.** The Terms now describe the available authentication
  methods -- passphrase, magic link, social sign-in, passkeys, SSO, and MFA
  -- and how availability varies by plan and region.
- **How we treat your secrets.** Secrets are purged on first access or
  expiration, and we do not read, scan, or analyze Secret Content. The Terms
  now spell out the narrow exceptions (your consent, your Organization
  owner's direction, debugging help you've asked for — limited to what's
  needed, confidential, and logged — and secrets sent to us directly).
- **Delivery isn't guaranteed.** A secret reveals at most once, and anyone
  holding the link can be the one who reveals it. The Terms say this plainly
  now, and point to the protections that can narrow it: passphrases, sign-in
  requirements, and Organization membership.
- **Custom domains and related features.** New terms for custom domains,
  custom branding, verified email addresses, homepage and incoming secrets,
  and SSO configuration, including what's your responsibility and what's ours.
  Some responsibilities are yours alone: keeping your custom domain's DNS
  records correct (including the records that determine whether email sent
  from your verified addresses is delivered), managing your Organization's
  membership, and the content of secrets your Organization creates.
- **Using the Service for your customers.** The Terms now describe the
  business arrangements we support, all on the same structure: one
  Organization represents one customer, and each Organization carries its own
  subscription. Contractors, agencies, and managed-service providers are
  expressly supported — you can own and administer your customers'
  Organizations, and either you or the customer can pay. If none of the hosted
  arrangements fit, self-hosting under the MIT license is always available.
  The boundary is one customer per subscription: reselling or white-labeling
  the hosted Service needs a separate agreement with us.
- **Refunds and billing.** 30-day refund window on paid plans; plan and
  interval changes take effect immediately with proration; new discount terms
  for non-profits and educational institutions.
- **Housekeeping.** English is the authoritative language; our public trust
  centre — the site-policy repository — is the authoritative copy of these
  documents; minor editorial changes no longer reset the effective date.

## Privacy Statement

- **Exactly what we collect.** A concrete inventory of account data (email,
  passphrase hash, passkeys, MFA factors, billing details, usage metadata)
  replaces the old catch-all "User Personal Information."
- **Where your data lives.** The regional environments are listed with their
  named hosting providers. Your data — including backups — stays in its
  jurisdiction for its whole lifecycle. The two exceptions are named: Stripe
  for billing, and edge-network TLS termination — Cloudflare on our regional
  domains, and Approximated for custom domains on the multi-tenant paid tiers
  — which may terminate connections at an edge location outside your region
  before traffic is re-encrypted into it. Single-tenant deployments such as
  Global Elite don't use these third-party edge networks.
- **Who we share with.** A named list of the subprocessor services that help
  us run the service, published as a dated list with full version history in
  our public trust centre. When we plan to engage a new
  subprocessor service, we email all account holders; if you object, you can
  cancel the affected service without penalty during the 30-day notice
  period. In an emergency — for example, replacing a provider to keep the
  service secure or available — we may act first and notify you promptly
  afterward, with the same objection right running from that notice. The
  public list supplements those emails; it doesn't replace them.
- **How we protect it.** Specific security measures instead of "industry
  standards": TLS 1.3, authenticated encryption with keys kept separate from
  the database, Argon2id hashing, encrypted backups. We also corrected how we
  describe passphrases: a passphrase gates access to a secret; it is not part
  of the encryption key.
- **Organization member data.** If you use the service as a member of an
  Organization, the customer — the legal entity behind the Organization — is
  the controller of your personal data, and we process it on the customer's
  behalf. The roles are defined in the DPA.
- **Inactive accounts.** If you don't sign in for five years, we may remove
  your account and its data. We'll attempt to email you at least 30 days
  before that happens, and for 30 days after the notice you can request an
  export of your account data. Signing in resets the clock.
- **Your rights, by jurisdiction.** Dedicated sections for GDPR/UK GDPR,
  California, and Canada — including what a self-destructing secret means for
  access and erasure requests (once it's viewed or expired, there's nothing
  left to produce).
- **Law enforcement requests.** Purged secrets cannot be produced — only
  metadata — and requests must come from an authority with jurisdiction over
  the data.
- **Email.** Our email now falls into three categories: transactional (secret
  links, account and billing notices — no opt-out), service and security
  notices (sent when needed, including when legally required — not
  marketing), and product news (strictly opt-in, rare, with one-click
  unsubscribe). We never send unsolicited marketing email, and nothing we
  send contains tracking pixels or click-tracking links. Privacy questions
  now go to privacy@onetimesecret.com, answered within 30 days.

## Data Processing Agreement — new

Previously, our DPA was provided directly to dedicated-deployment custom
install customers. It now covers every plan and is accepted automatically as
part of the Terms, no signature needed (a countersigned copy is available if
your compliance process wants one). It commits to region-locked processing,
code-accurate encryption disclosures, 72-hour breach notification,
subprocessor change notice with an objection right, and documentation-based
audits. Share it freely with your legal and compliance teams. Self-hosted
installations of our open-source software are out of scope (we're not
responsible for those).

## Technical and Organizational Measures — new

A standalone, publicly shareable description of our security measures under
GDPR Article 32: encryption, tenant separation, backups, incident response,
secure development, and privacy by default; each clearly marked as ours, our
infrastructure provider's, or shared. Because the application and its CI
configuration are open source, these controls can be independently verified
rather than taken on faith. As regular operating procedure, the production
service runs from the same public OCI images we publish — any exception is
temporary, made only when a vulnerability must be patched faster than the
public release cycle allows — which extends that verifiability to the
deployed artifact itself.
