# Production Trust Center Terms, Disclaimers & Self-Referential Clauses — Research Corpus

Access date: 2026-07-20

## Pattern summary

- **Platform split matters.** Most large-company "trust centers" are hosted on SafeBase (now "SafeBase by Drata"), Vanta, or Conveyor. SafeBase and Conveyor pages are mostly server-rendered and quotable (OpenAI, GitLab, Datadog, Zoom, Twilio, Vercel, PostHog, Atlassian, Figma[partial], MongoDB[partial]); Vanta-hosted pages (Anthropic, Snowflake, Deltek) are pure client-side JS shells that returned empty bodies — their real text is gated behind the rendered app.
- **The visitor-facing "trust center terms of use" itself is rarely a standalone public document.** None of the SafeBase/Conveyor/Vanta portals expose a distinct "Trust Center Terms of Use" page at a stable URL; the clickwrap NDA text only appears inside the authenticated app after a visitor clicks "Get access," so it isn't crawlable. What *is* public and quotable is the surrounding disclaimer language in each vendor's general Website Terms of Use, which frequently name-checks the Trust Center explicitly (Secureframe, Palo Alto Networks).
- **The strongest, cleanest "does not modify your agreement" precedence language comes from indie/mid-market SaaS**, not the giants — Lev.com's Trust Center has an explicit, well-drafted precedence disclaimer; ZenGRC's DPA (linked from its Trust Center subprocessor page) has a classic conflict-of-terms clause.
- **"Informational purposes only" / accuracy disclaimers cluster in general Website Terms of Use**, not on the trust/security page itself (Palo Alto Networks, Secureframe, Buttondown, Fathom Analytics all carry this in their site-wide ToU rather than a security-specific page).
- **Small, plain-language SaaS (37signals/Basecamp, Fathom, Plausible, Bear Blog, Buttondown) skip legalese almost entirely** — their "trust" content is a plain prose security/data page, and their update-without-notice and feedback-channel language is folded into one short paragraph rather than a formal clause.
- **Feedback/error-reporting channels are near-universal** but take the form of a security@ or trust@ mailbox / vulnerability-disclosure link rather than an "if you notice an inaccuracy" clause.
- **"Good faith" wording appears almost exclusively in bug-bounty/responsible-disclosure safe-harbor text**, not in accuracy disclaimers.

---

## OpenAI — trust.openai.com (SafeBase by Drata)

Source: https://trust.openai.com/ — page `og:updated_time` 2026-07-20T23:40:45Z (this is a live, continuously-updated app; treat as "as viewed" rather than a fixed doc date)

> Welcome to our Trust Portal for OpenAI's API platform. Here, you can access our comprehensive compliance documentation, find answers to frequently asked questions related to security and privacy, and explore our robust security practices. We believe in maintaining transparency and building trust with our customers, and this portal is designed to provide you with the information and assurance you need to feel confident in our ability to protect your data.

> OpenAI invites security researchers, ethical hackers, and technology enthusiasts to report security issues via our Bug Bounty Program. The program offers safe harbor for good faith security testing and cash rewards for vulnerabilities based on their severity and impact. Refer to our blog to read more about the program and visit Bugcrowd to participate.

Footer feedback/report channel:
> If you think you may have discovered a vulnerability, please send us a note. [Report issue → bugcrowd.com/openai]

Footer platform attribution (appears on every SafeBase-hosted trust center, verbatim across all SafeBase customers observed):
> Built on SafeBase by Drata

No separate visitor-facing "Trust Portal Terms of Use" document was reachable at a stable URL — access to non-public documents requires clicking "Get access," which triggers an in-app (not separately crawlable) request/NDA flow. OpenAI's general site Terms of Use (https://openai.com/policies/row-terms-of-use/) and Usage Policies are separate documents that do not appear to reference the Trust Portal specifically.

---

## Anthropic — trust.anthropic.com (Vanta) — GAP, see "Not found" section

Source: https://trust.anthropic.com/ — meta description only (page is a client-rendered JS shell; body did not render in fetch)

Meta description (the only text recoverable without executing JS):
> Anthropic is an AI safety and research company with a mission of ensuring the world safely makes the transition through transformative AI. We believe deeply in transparency and the need for secure practices in this rapidly evolving industry.

Related, separately-hosted static page (not the trust center itself but Anthropic's own "Transparency Hub," which is server-rendered): https://www.anthropic.com/transparency/voluntary-commitments — dated 2026-01-29 per search index — contains:
> We make these attestation and compliance artifacts available on our Trust Center. Regular Threat Modeling: We perform regular reviews and updates to our threat models to account for tactics, techniques, and procedures used by sophisticated threat actors.

(This line was captured from the search snippet; the full Transparency Hub page was not fetched in this pass and should be pulled directly if exact wording is needed.)

---

## Salesforce — trust.salesforce.com

Source: https://trust.salesforce.com/ — no visible "last updated" date; footer copyright "©Copyright 2026 Salesforce, Inc."

> Trust is our #1 value. Customers trust our technology and infrastructure to perform, to be available, and to be secure.

Full footer legal block (verbatim):
> Legal | Terms of Service | Privacy Information | Contact | Cookie Preferences | Your Privacy Choices
> ©Copyright 2026 Salesforce, Inc. All rights reserved. Various trademarks held by their respective owners. Salesforce, Inc. Salesforce Tower, 415 Mission Street, 3rd Floor, San Francisco, CA 94105

Salesforce's Trust site is architecturally different from the others: it's a live status/availability dashboard ("Status," "Security," "Compliance," "Availability" sub-sites at status.salesforce.com, security.salesforce.com, compliance.salesforce.com, availability.salesforce.com) rather than a document library. It links out to Salesforce's general corporate Terms of Service (https://www.salesforce.com/company/legal/sfdc-website-terms-of-service/, last published 2025-04-08) rather than carrying its own trust-specific terms of use. Separately, Salesforce publishes a dedicated "Trust and Compliance Documentation" index at https://www.salesforce.com/company/legal/trust-and-compliance-documentation/.

---

## Atlassian — customertrust.atlassian.com (Conveyor)

Source: https://customertrust.atlassian.com/ — "Our Trust Center is regularly updated to reflect the latest audit results, and subprocessor disclosures." Most recent announcement dated Jul 7, 2026, 12:55 UTC (per page).

> Everything you need to complete your security review is here. Browse documents, certifications, and compliance details with confidence. Our Trust Center is regularly updated to reflect the latest audit results, and subprocessor disclosures.

Sample dated announcement showing the update-log pattern Conveyor trust centers use instead of a single "last updated" stamp:
> Nov 20, 2025, 13:55 UTC — Status of Upcoming SOC 2 Report and Timeline. Atlassian is currently in the process of issuing our updated FY26 SOC 2 Type 2 reports... We encourage you to subscribe to updates to this Trust Portal in order to be notified once the new SOC 2 reports are posted.

Footer platform attribution:
> Powered by Conveyor, the first end-to-end customer trust platform.

Note: Atlassian's separate general Trust Center marketing page (https://www.atlassian.com/trust) and its Technical and Organisational Security Measures page (https://www.atlassian.com/legal/security-measures) are distinct documents from the Conveyor-hosted customertrust.atlassian.com portal.

---

## GitLab — trust.gitlab.com (SafeBase) + GitLab Handbook (fully public, static)

Source: https://trust.gitlab.com/ — page `og:updated_time` 2026-07-07T22:08:46Z

> At GitLab, we're committed to Information Security. It is GitLab's mission to make it so that everyone can contribute, and it's our Security Division's mission to enable everyone to innovate and succeed on a safe, secure, and trusted DevSecOps platform. To learn more, visit the security section of our handbook.

Report-issue / feedback channel:
> If you think you may have discovered a vulnerability, please send us a note. [Report issue → hackerone.com/gitlab?type=team]

GitLab's own blog post announcing the Trust Center (source: https://about.gitlab.com/blog/gitlab-trust-center-welcome-to-self-service-customer-assurance/, published January 9, 2024) is the single best **explicit transparency-stance statement** found in this research — GitLab is a "handbook-first company" and states its philosophy directly:

> At GitLab, we believe transparency is a critical component of building trust. As a handbook-first company, we publicize a wealth of information, including all of our controlled documents (policies, standards, etc.), many of our internal processes, and much more!
>
> To fully support our transparent culture and to enable our customers to be as self-sufficient as possible, we have made our knowledge base publicly available through the GitLab Trust Center so all customers can self-serve answers to their questions at any time.

> For documents that require an NDA, prospects and customers can sign the NDA directly in SafeBase to receive access to documents in minutes rather than days.

The GitLab Handbook's own "Trust Center Guide" and "Transparency by Default" pages (https://handbook.gitlab.com/handbook/security/security-assurance/field-security/trust_center_guide/ and https://handbook.gitlab.com/handbook/security/transparency-by-default/) exist and are fully public static wiki pages, but both exceeded this session's page-size fetch limit (~110K characters of handbook navigation chrome around a relatively short body) and could not be captured verbatim in this pass. They are worth a direct, offset-limited fetch if GitLab's internal transparency policy wording specifically is needed.

---

## Datadog — trust.datadoghq.com (SafeBase)

Source: https://trust.datadoghq.com/ — page `og:updated_time` 2026-06-08T15:44:04Z

> Welcome to Datadog's Trust Center. Our commitment to data privacy and security is embedded in every part of our business. Use this Trust Center to learn about our security posture and request access to our security documentation.

Datadog's Trust Center Updates feed shows how these portals fold in incident disclosures that reference the *legal* Terms of Service by name and date-stamped URL — a useful pattern for "precedence"/legal-linkage:

> Datadog has identified a campaign where trial accounts were abused to send spam and phishing emails in breach of our [Terms of Service](https://www.datadoghq.com/legal/terms/2024-10-25/). The accounts responsible have been terminated, and we have implemented controls to block monitor notifications from being sent to recipients outside the sending organization.

Datadog's general Website Terms of Use (https://www.datadoghq.com/legal/terms/) — not trust-center specific, but has a classic no-waiver clause of the type these disclaimers borrow from:
> Datadog may assign, transfer or sublicense all or any of Datadog's rights or obligations under these Terms without restriction. The failure of Datadog to exercise or enforce any condition, term or provision of these Terms will not operate as a waiver of such condition, term or provision.

---

## Snowflake — trust.snowflake.com (Vanta) — GAP, see "Not found" section

Source: https://trust.snowflake.com/ — meta description only (JS shell, body did not render)

> Snowflake's Compliance Center is an online portal where customers can self-request and download Snowflake's security compliance certifications, reports, and attestations. For any required support, please reach out to your Snowflake Account Team or go to https://www.snowflake.com/en/contact/

---

## Zoom — trust.zoom.com (SafeBase)

Source: https://trust.zoom.com/ — page `og:updated_time` 2026-07-13T19:18:13Z

> Welcome to the Zoom Communications' Trust Center. Our commitment to data privacy and security is embedded in every part of our business. Use this Trust Center to learn about our security posture and request access to our security documentation.
>
> At Zoom, we prioritize the security and privacy of our users. Our commitment to safeguarding your data is reflected in our comprehensive security measures and protocols. Explore our resources to learn more about how Zoom works tirelessly to maintain a secure and trustworthy environment for all your communication needs.

Zoom's separate general Terms of Use hub (https://www.zoom.com/en/trust/terms/, published/updated 2023-08-11) frames itself with a change-management sentence typical of "we may update without republishing everything" style:
> Find the latest Zoom Terms of Service that are applicable to any services, updates, enhancements, new features, and/or the addition of new [features/functionality].

Zoom's EULA/reseller terms include a feedback/abuse-reporting line:
> If You become aware of any violation of this Agreement in connection with use of the Services by any person, please contact Zoom at trust@zoom.us.

---

## Slack — slack.com/security-practices (Salesforce company)

Source: https://slack.com/security-practices — **Publish Date: June 17, 2025** (explicit date stamp on page)

Opening paragraph — direct transparency mission statement plus an explicit "send us questions" feedback channel:
> We take the security of your data very seriously at Slack. As transparency is one of the principles on which our company is built, we aim to be as clear and open as we can about the way we handle security. If you have additional questions regarding security, we are happy to answer them. Please write to feedback@slack.com and we will respond as quickly as we can. This Security Practices Page describes the administrative, technical and physical controls applicable to (a) Slack including but not limited to the Slack platform, Slack workflows, and apps running on Slack infrastructure, and (b) GovSlack. This documentation does not apply to services that may be associated or integrated with GovSlack.

Slack ties incident/status disclosure explicitly to a named external status page (a "precedence"-adjacent pointer to the authoritative real-time source):
> Slack notifies impacted customers without undue delay of any unauthorized disclosure of their respective Customer Data by Slack or its agents of which Slack becomes aware to the extent permitted by law. Slack publishes system status information on the Salesforce Trust website (status.salesforce.com) and/or the Slack System Status page (slack-status.com).

Document downloads gated behind the audit/certifications section:
> Customers may download a copy of available applicable external audit reports here [→ slack.com/trust/security].

---

## Stripe — docs.stripe.com/security

Source: https://docs.stripe.com/security — no explicit "last updated" date on page; content is docs-site style (continuously maintained)

Stripe's security page is notable for embedding an **authentication-gate disclaimer** directly relevant to accuracy/reliance:
> You must authenticate user support requests by sending them from the Dashboard after login, or by verifying account access before we offer a support response. By requiring authentication, we minimize the risk of providing any information to non-authorized people.

Bug bounty "good faith"/acknowledgment-of-terms clickthrough pattern:
> We maintain a vulnerability disclosure and reward ("bug bounty") program that compensates independent security researchers who help us keep our users safe. By submitting a security bug or vulnerability to Stripe through HackerOne, you acknowledge that you've read and agreed to the program terms and conditions. Refer to our policy on HackerOne for more information about how to participate in our bug bounty program.

No separate "Stripe Trust Center" hosted portal was found — Stripe's model is a single long-form docs page (docs.stripe.com/security) plus a Privacy Center (stripe.com/legal/privacy-center) rather than a SafeBase/Vanta/Conveyor-style gated document library.

---

## Cloudflare — Trust Hub (cloudflare.com/trust-hub)

Source: https://www.cloudflare.com/trust-hub/trust-and-safety/ — footer copyright "© 2026 Cloudflare, Inc."

> Transparency is an essential part of earning and maintaining the trust of our customers. Learn about our response to requests from law enforcement, and our approach to abuse.

Cloudflare's Trust Hub is structured as a marketing/policy hub (Privacy & data protection, Responsible AI, Compliance resources, Technologies, Trust & Safety) rather than a document-request portal, and it carries its own dedicated, separately-versioned legal document:
> Cloudflare Website and Online Services Terms of Use — "THESE TERMS DO NOT APPLY TO YOUR ACCESS AND USE OF THE CLOUDFLARE PRODUCTS AND SERVICES THAT ARE PROVIDED UNDER THE SELF-SERVE SUBSCRIPTION AGREEMENT, THE ENTERPRISE SUBSCRIPTION AGREEMENT, OR OTHER WRITTEN AGREEMENT SIGNED BETWEEN YOU AND CLOUDFLARE (IF APPLICABLE)." (source: https://www.cloudflare.com/policies/terms/, per search index)

This is a textbook **precedence clause** — the general website Terms of Use explicitly yield to any signed commercial agreement. Every Trust Hub subpage footer carries the same three-link legal block:
> Privacy Policy | Terms of Use | Report Security Issues

---

## Twilio — security.twilio.com (SafeBase)

Source: https://security.twilio.com/ — page `og:updated_time` 2026-05-17T14:33:07Z

> Welcome to Twilio's Trust Center, a reflection of our unwavering commitment to secure communications and the embodiment of the Twilio Magic. Our values define us, guiding how we work together to meet challenges and innovate. As we strive to unlock the imagination of builders and stand as the customer layer for the internet, this repository of information and documentation offers a transparent view into our security endeavors.

Incident-response disclosure entries on the same portal show Twilio's pattern for "no action needed"/accuracy-of-scope disclaimers issued directly through the trust center:
> Twilio Sendgrid is aware of 3rd party claims made on BreachForums. However, there is no evidence to suggest that Twilio or Twilio SendGrid was breached. After reviewing a sampling of this data, we believe that none of this data originated from SendGrid.

> **Your Datadog account is not at risk**. [sic — this line is quoted from Datadog's own portal, included above for comparison of house style]

Footer support/feedback line:
> If you need help using this Trust Center, please contact us. [Contact support → help.twilio.com/submit]

---

## HashiCorp — hashicorp.com/en/trust/security (an IBM company)

Source: https://www.hashicorp.com/en/trust/security — static marketing/docs page, no single "last updated" date but individual sub-sections reference specific dated events (e.g., PGP key revoked April 24, 2023)

> Security is at the core of everything we build. We're committed to safeguarding your data and infrastructure by investing in the necessary tools, training, and support.

> We know our users place a high level of trust in HashiCorp and the products we make to manage mission critical infrastructure. The security of customer data, of our products, and our services are a top priority.

Explicit "contact us with questions" feedback channel embedded directly under the compliance section:
> If you have any additional questions around our security program, please email customertrust@hashicorp.com

Separate references to a dedicated Acceptable Use Policy and abuse-reporting page:
> The Acceptable Use Policy can be found at https://www.hashicorp.com/trust/security/aup. ... Information regarding how to report abuse is available at https://www.hashicorp.com/abuse.

Secure-communications / PGP disclosure section (an unusually concrete "here is exactly how to verify what we tell you" mechanism):
> HashiCorp's current PGP public key can be fetched from Keybase or from most keyservers with the key ID 72D7468F and fingerprint C874 011F 0AB4 0511 0D02 1055 3436 5D94 72D7 468F.

---

## Notion — notion.com/security (site) + trust.notion.com (Wolfia-powered portal, gap)

Source: https://www.notion.com/security — no explicit page-level "last updated" date; footer copyright "© 2026 Notion Labs, Inc."

The **single best "we keep this current, but the contract governs" self-referential statement found for a major vendor's marketing security page**, under the "Agreements" heading:
> At Notion we strive to keep all of our agreements up to date with the latest regulations and industry standards. Our Master Subscription Agreement and Data Processing Addendum describe in detail Notion's data privacy processes, standards, safeguards and our compliance with data protection legislation. To ensure that our terms track with the GDPR, CCPA and other global privacy standards we continually have our terms assessed by leading privacy experts in multiple jurisdictions.

Compliance-documentation gate, pointing to the separate hosted Trust Center for anything beyond the marketing page:
> Notion has been attested by independent third-party auditors. If you'd like a copy of the compliance reports, please visit our Trust Center. [→ trust.notion.com]

Notion's actual hosted Trust Center (https://trustcenter.notion.com/, described elsewhere as "Powered by Wolfia" / also indexed as Conveyor-style) returned only an empty JS shell in this fetch — same limitation as the Vanta portals. Its meta description:
> See Notion's SOC 2 Type II, ISO 27001 & ISO 27017 compliance, security documentation, subprocessors, and answers to frequently asked security questions with Wolfia.

---

## Figma — compliance.figma.com (Conveyor) — GAP, see "Not found" section

Source: https://compliance.figma.com/ — meta description only (JS shell, body did not render)

> See how Figma manages their security and compliance program with Conveyor. Access and download any security certification. Here you will find certifications, audit...

Figma's general security marketing page (figma.com/security/) and legal Privacy & Trust Center index (figma.com/legal/privacy-trust-center/) exist as separate, presumably server-rendered pages but were not fetched in this pass.

---

## MongoDB — trust.mongodb.com (Conveyor) — GAP, see "Not found" section

MongoDB renamed/relaunched this portal as the "MongoDB Trust Portal" in a company blog post (source: https://www.mongodb.com/company/blog/introducing-the-mongodb-trust-portal-security-compliance-documentation, published 2025-11-10):
> MongoDB has launched a new Customer Trust Portal, which gives customers faster, easier access to critical security and compliance documentation...

The live portal itself (trust.mongodb.com) was not directly fetched in this pass (search index shows it as "MongoDB | Trust Portal — Powered by Conveyor," same architecture as Figma/Notion/Atlassian, so it is very likely a JS shell requiring the same handling).

---

## PagerDuty — pagerduty.com/security

Source: https://www.pagerduty.com/security/ — `article:modified_time` 2025-06-25T17:07:56Z

> PagerDuty is committed to maintaining the security and privacy of our customers' data. We implement industry-leading security practices and continuously monitor our systems to protect against threats.

Feedback/contact channel (plain, no formal clause):
> If you have any additional concerns, please feel free to reach out to support@pagerduty.com with any questions.

Breach-notification commitment (a concrete SLA-flavored trust statement rather than a vague disclaimer):
> PagerDuty will notify affected customers of any security incident which involves customer data without undue delay, and per legal and contractual requirements.

Document-request gate (distributes SOC 2/ISO reports via a separate assurance portal rather than embedding them):
> Request a copy of PagerDuty's SOC 2 Type 2 Reports [→ assurance.pagerduty.com] ... Request a copy of PagerDuty's ISO 27001 certificate [→ assurance.pagerduty.com]

Footer legal block includes a dedicated Website Terms of Use distinct from the security page: https://www.pagerduty.com/website-terms-of-use/ (not fetched in this pass).

---

## Vercel — security.vercel.com (SafeBase)

Source: https://security.vercel.com/ — page `og:updated_time` 2026-06-09T21:43:42Z

> Welcome to Vercel's Trust Center. Here you can find information about our security and compliance program and request access to security documentation.

Live incident disclosure on the same trust center (dated entry, shows the pattern of folding incident/legal notices directly into the portal feed):
> We've identified a security incident that involved unauthorized access to certain internal Vercel systems. We are actively investigating and have engaged incident response experts to help investigate and remediate... Information about the incident, including any steps customers should take can be found at our Security Bulletin. [→ vercel.com/kb/bulletin/vercel-april-2026-security-incident]

Footer feedback/report channels (two separate mailtos, one for general support and one specifically for responsible disclosure — a clean model to copy):
> If you need help using this Trust Center, please contact us. [Contact support → mailto:se@vercel.com, subject line pre-filled: "SafeBase Support Request for Vercel"]
> If you think you may have discovered a vulnerability, please send us a note. [Report issue → mailto:responsible-disclosure@vercel.com, subject line pre-filled: "SafeBase Responsible Disclosure Report for Vercel"]

---

## PostHog — trust.posthog.com (SafeBase) + posthog.com/handbook (fully public, plain-language)

This is the **best mid-size, plain-English example found** — PostHog runs both a formal SafeBase trust center and a public engineering-handbook page that explains the same thing in first-person, informal prose.

Source (formal portal): https://trust.posthog.com/ — page `og:updated_time` 2026-06-17T20:57:20Z
> Welcome to the PostHog Trust Portal! Here, you can find our compliance documents, answers to common security and privacy questions, and details about our security practices. We value transparency and aim to build trust with our customers. This portal gives you the information you need to feel confident in how we protect your data.

Source (handbook, plain language): https://posthog.com/handbook/company/security — no formal "last updated" stamp; page links directly to GitHub source for version history
> **Visit our Trust Center.** Utilize our Trust Center powered by SafeBase to self-serve reports, policies, and certifications. PostHog is certified as SOC 2 Type II compliant, following an external audit. Our latest security report is publicly available (covering controls as of May 31st, 2025). Our reporting period runs from 01 June - 31 May each year.

Reporting channel — explicit, with a swag-reward "good faith" note in place of the usual safe-harbor legalese:
> Security vulnerabilities and other security related findings can be reported via our vulnerability disclosure program or by emailing security-reports@posthog.com. Valid findings will be rewarded with PostHog swag.

Customer-impersonation/access-for-support disclosure — an unusually candid, plain-language self-referential policy about *how the company itself uses the trust it's asking for*:
> To provide a great customer experience, PostHog employees may occasionally need to access customer data or log in as a user (i.e. impersonate them). We allow this access when it's necessary to deliver our service... When a customer raises a support ticket, we take this as consent to be able to impersonate their account and investigate based on the contents of the ticket.

---

## Palo Alto Networks — dedicated Trust Center + site-wide Terms of Use (best "informational purposes only" + "right to update without notice" pairing found)

Trust Center source: https://www.paloaltonetworks.com/legal-notices/trust-center — no page-level date; copyright "Copyright © 2026 Palo Alto Networks. All Rights Reserved"

> At Palo Alto Networks, we are committed to earning and maintaining our customers' trust through transparency and accountability.

The Trust Center is structured as five sub-pages (Privacy, Security, AI, Regulations, Certifications) plus a "Request a Security Report" intake form — no embedded document library, unlike the SafeBase-style vendors.

Site-wide Terms of Use (this is the document that actually carries the disclaimer language relevant to trust-center content; it explicitly links back to "Trust Center" as a footer item): source https://www.paloaltonetworks.com/legal-notices/terms-of-use, meta description dated (implicitly current, no explicit "last updated" line visible, footer copyright 2026)

**"Informational purposes only" / no-endorsement clause:**
> We may change the programs or products mentioned at any time without notice. Any mention of third-party products or services is for informational purposes only and does not constitute an endorsement or recommendation.

**Accuracy disclaimer:**
> Although Palo Alto Networks has attempted to provide accurate information on the Site, we assume no responsibility for the accuracy of any such information, nor do we endorse or assume responsibility for any user conduct or content submitted on our Site. Nothing in these Terms requires us to monitor the Site or to modify or remove any materials or information.

**Right to update without notice (general "About Our Terms" clause):**
> We reserve the right to change these Terms at any time, without notice, at our sole discretion. Please check this page periodically for any updates.

**AS-IS warranty disclaimer:**
> UNLESS OTHERWISE SPECIFIED, ALL PRODUCTS, SERVICES, FEATURES AND OTHER SITE CONTENT ON THIS SITE ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY, NONINFRINGEMENT OR FITNESS FOR ANY PARTICULAR PURPOSE.

**Precedence clause for additional/product-specific terms:**
> In order to access certain services or features on our Site, you may be required to create an account or profile. In those situations, and when using or accessing Palo Alto Networks products as part of the Site, additional terms or requirements may apply and those additional terms will become part of your agreement with us. In the event of any conflict between such additional terms and these Terms, the additional terms will control.

---

## SafeBase / Drata — the trust-center platform vendor's own Terms of Service

Note: safebase.io/terms-of-service now redirects to drata.com/terms (SafeBase was acquired by Drata; "SafeBase by Drata" is the current branding seen on every hosted trust portal footer). This is the **platform vendor's own SaaS contract**, not a visitor-facing trust-center-terms document, but it is highly relevant because it (a) defines "Drata's Trust Center" as a term, and (b) contains the disclaimer language that underlies every SafeBase-hosted portal's implicit legal posture.

Source: https://drata.com/terms — "We have updated Drata's Terms of Service - Subscription Services Agreement ('Agreement') effective as of June 2, 2026."

Definition clause:
> "Drata's Trust Center" means the trust center and policies at https://trust.drata.com/.

**Non-Drata/third-party content disclaimer** (directly analogous to what a trust-center visitor-terms clause would say about the accuracy of linked/third-party material):
> If Customer decides to enable, access or use Non-Drata Services, Customer's access and use of such Non-Drata Services shall be governed solely by the terms and conditions of such Non-Drata Services. Drata does not endorse, is not responsible or liable for, and makes no representations as to any aspect of such Non-Drata Services, including, without limitation, their content or the manner in which they handle, protect, manage or process data...

**AI-output / recommendations-only disclaimer** (useful template for "reports/answers on this page are informational, not advice"):
> Without limiting Section 11.3, outputs generated by the AI features are generated based on Customer Data and are intended only to assist Customer. AI outputs do not constitute legal or compliance advice. Customer is responsible for reviewing and validating all AI outputs before relying on them.

> CUSTOMER ACKNOWLEDGES AND AGREES THAT THE SERVICES AND THE REPORTS PROVIDED BY DRATA TO CUSTOMER ARE INTENDED AS RECOMMENDATIONS ONLY AND DO NOT CONSTITUTE ANY WARRANTY OR GUARANTY THAT CUSTOMER, BY FOLLOWING SUCH RECOMMENDATIONS, WILL BE FULLY COMPLIANT WITH ANY APPLICABLE STANDARDS CONTEMPLATED BY THE SERVICES.

**Right-to-amend-with-notice clause (Drata's own contract, 30-day notice — contrast with the "without notice" website-ToU pattern above):**
> Drata may amend this Agreement from time to time, in which case the new Agreement will supersede prior versions. Drata will notify the Customer not less than thirty (30) days prior to the effective date of any such amendment and Customer's continued use of the Services following the effective date of any such amendment may be relied upon by Drata as Customer's consent to any such amendment.

**Precedence clause (Order Form controls over the master Agreement):**
> The terms of the Order Form or Statement of Work shall control in the event of any inconsistency or conflict with the terms of this Agreement. Non-English translations of this Agreement are provided for convenience only. In the event of any ambiguity or conflict between translations, the English version shall control.

---

## Conveyor & Vanta — platform documentation on the NDA/clickwrap gate pattern (descriptive, not a single verbatim clause)

These aren't vendor trust-center pages themselves but the platform vendors' own documentation of how the clickwrap NDA gate works across every Conveyor- and Vanta-hosted trust center — useful as a structural reference since the actual clickwrap text is not independently crawlable (it renders only inside the authenticated in-app flow).

Conveyor, source: https://docs.conveyor.com/docs/visitors-guide (updated "20 days ago" per page, no absolute date given)
> Some companies require a Non-Disclosure Agreement before you can access certain documents. If this applies, you'll be prompted to review and sign the NDA as part of the access flow. The NDA will be either presented inline and you can sign electronically or you'll be prompted to the company's Docusign NDA to complete your esignature.

> **Can I share Trust Center documents with my colleagues?** This depends on the NDA and the company's sharing policy. Check the terms of the NDA you signed, and when in doubt, ask the company whether you can share specific documents internally.

> **Is the Trust Center Agent's answer official?** The Agent generates answers from the company's published content and cites its sources. While it's a helpful starting point, the cited source documents are the authoritative reference. If accuracy is critical — for example, for a formal assessment — verify against the source document.

(This last line is effectively a plain-language "does not modify any agreement / verify against source" disclaimer, applied to an AI answer-agent rather than the page itself — a pattern worth adapting.)

Conveyor, source: https://docs.conveyor.com/docs/trust-center-ndas (updated "8 months ago" per page)
> **Do customers have to sign again if we update the NDA?** If you make material changes, it's best practice to require a new signature. Conveyor does not automatically reissue NDAs when you edit them, so you'll need to manage this manually.

Vanta, source: https://help.vanta.com/en/articles/11345468-trust-center-ndas-clickwrap (dated February 27, 2026 on the article)
> A click-wrap agreement is a digital contract where you agree to terms and conditions by clicking a button, usually labeled "I agree" or "Accept," before you can use a website, service, or software... As long as the terms are clearly presented and you have a chance to read them before clicking, they are usually legally binding.

---

## Secureframe — Website Terms of Use (best explicit "our Trust Center pages are run by third parties, we don't vouch for them" clause found)

Source: https://secureframe.com/websiteterms — **"These terms were last updated on 5/1/2023 and are effective immediately."** (explicit date stamp on page)

This is the single most directly on-point clause found for the (a) "the trust center itself" and (c) "does not modify any agreement" categories, because Secureframe is itself a trust-center platform vendor disclaiming responsibility for the *content* of the trust centers it hosts for its own customers:

> Although we have attempted to provide accurate information on our Site, we assume no responsibility for the accuracy of the information. **Any Sites designated as "powered by Secureframe," such as our Trust Center pages, are operated and controlled solely by third parties and not Secureframe. Secureframe has no control over the information or content contained on such Sites, does not check the veracity or accuracy of such content, and disclaims all responsibility and liability therefore.**

Informational-purposes-only / no-endorsement clause:
> We may change the programs or products mentioned at any time without notice. Mention of non-Secureframe products or services is for informational purposes only and constitutes neither an endorsement nor a recommendation.

AS-IS / no-guarantee-of-results clause:
> THIS SITE IS PROVIDED "AS IS" WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED... SECUREFRAME DOES NOT GUARANTEE AND DOES NOT PROMISE ANY SPECIFIC RESULTS FROM USE OF THE SITE OR ANY RELATED SERVICES OR CONTENT.

Right-to-update-without-notice + governing law/venue boilerplate:
> **About Our Terms** — We reserve the right to change these Terms from time to time at our sole discretion. Please check this page periodically for any updates. These Terms are governed by the laws of the State of California, U.S.A., excluding any conflict of laws rules or principles.

---

## ZenGRC — Data Processing Addendum (linked from ZenGRC's own Trust Center subprocessor page)

Source: https://www.zengrc.com/about-us/zengrc-trust-center/dpa/ — **"Last Updated: July 10, 2024"**

Classic precedence/conflict-of-terms clause, opening paragraph:
> By executing an Order Form that references this Addendum, the parties agree to be bound by its terms. This Addendum incorporates the terms of the Agreement, and any terms not defined in this Addendum will have the meaning set forth in the Agreement. **In the event of a conflict between the terms and conditions of this Addendum and the Agreement, the terms and conditions of this Addendum will supersede and control.**

Direct reference to the live Trust Center subprocessor page as the authoritative, continuously-updated source (rather than freezing the subprocessor list inside the static legal document):
> Customer agrees that (a) ZenGRC may engage Affiliates and Sub-processors as listed at https://www.zengrc.com/about-us/zengrc-trust-center/subprocessors/ ("Sub-Processor Page") **which may be updated from time to time**...

Similar precedence clauses were found (via search snippets only — **not independently verified by full-page fetch in this pass**, flagged as lower-confidence sourcing) at:
- Harness.io DPA (https://www.harness.io/legal/dpa, dated 2025-11-04 per search index): *"In the event of a conflict between any terms in this Data Processing [Addendum]... To receive such notice(s), Customer must subscribe to the Trust Center."*
- L2L DPA (https://www.l2l.com/dpa): *"In the event of a conflict between this DPA and the Agreement, the terms and... A current list of subprocessors is provided in on the L2L Trust Center."*
- Lilt DPA (https://lilt.com/legal/dpa): *"In the event of a conflict between the terms and conditions of this DPA and the Agreement, the terms and conditions of this DPA will supersede and control."*

---

## Lev — Trust Center (small/indie B2B SaaS — commercial real estate deal platform; found via generic search, not on the original target list, but the single best "precedence + accuracy caveat" clause found in this entire research pass)

Source: https://www.lev.com/docs/learn/trust — **"Updated December 2025"** (explicit date stamp, appears twice on page)

This is exactly the clause pattern the brief asked for, written in plain founder-voice language rather than legalese:

> **A note on this documentation:** The information in this Trust Center reflects our current security practices and compliance status as of the date of last update. **While we strive to keep this documentation accurate and up-to-date, your agreements with Lev—including our Terms and Conditions and any executed contracts—are the definitive source of truth regarding our obligations and your rights.** If you have questions about specific commitments, contact trust@lev.com.

The page opens with a signed, first-person note from the CTO rather than a legal boilerplate block — a striking example of a small company personalizing the trust-center genre:

> When you hand over your deal data, your lender contacts, your financial projections... you're trusting us with the lifeblood of your business. I get it. That's not something I take for granted... Look, I know a Trust Center can only tell you so much. If you've got questions about our infrastructure, our controls, how we handle edge cases, ask us. **I mean that.** I make time for these conversations because they matter. Shoot me an email, get on a call with our team, whatever works.
> — Alberto Sheinfeld, Chief Technology Officer [mailto:as@lev.com]

---

## Basecamp / 37signals — Policies index + Terms of Service

Source (policies index): https://37signals.com/policies — no page-specific date; references a companion "policy updates mailing list"

**Right-to-update + notification-channel clause** (the cleanest version of this pattern found across the whole research set — short, plain, and specific about the mechanism):
> We may update these policies as needed to comply with relevant regulations and reflect any new practices. **If we make significant changes, we will refresh the date at the top of the page and notify users who have signed up to our policy updates mailing list.**

Source (Terms of Service): https://37signals.com/policies/terms — **"Last updated: September 2, 2025"**

Same clause, restated at the top of the ToS itself:
> We may update these Terms of Service at any time. If we make significant changes, we will refresh the date at the top of this page and notify users who have signed up to our policy updates mailing list.

"As is"/no-SLA clause, plus an explicit pointer to a separate security-incident reporting page:
> Your use of the Services is at your sole risk. We provide these Services on an "as is" and "as available" basis. We do not offer service-level agreements, but do take uptime of our applications seriously... Please refer to our Security Overview for full details and our Security Response page for how to report a security incident or threat.

Notable "Until the End of the Internet" longevity commitment (linked from the Modifications section) — a self-referential durability pledge that functions like an anti-"right to discontinue without notice" clause:
> We intend to support our Services Until the End of the Internet as far as it is possible and reasonable to do so. That means when it comes to security, privacy, and customer support, we will continue to maintain any legacy Services... We reserve the right at any time to modify or discontinue, temporarily or permanently, any part of our Services with or without notice.

Data-access-for-support consent language (comparable in spirit to PostHog's impersonation policy above):
> **To help you with support requests you make.** We'll ask for express consent before accessing your account. ... **On the rare occasions when an error occurs that stops an automated process partway through**... In rare cases, we have to look at a minimum amount of personal data to fix the issue.

---

## Fathom Analytics — Terms and Conditions

Source: https://usefathom.com/legal/terms — **"Last updated: December 21, 2021"**

Right-to-change-without-notice + no-commitment-to-update clause:
> **Changes** — We reserve the right in our sole discretion to revise and update these Terms from time to time... The information and material on this Website, and the Website, may be changed, withdrawn, or terminated at any time in our sole discretion without notice. We will not be liable if, for any reason, all or any part of the Website is restricted to users or unavailable at any time or for any period.

AS-IS / no-representation-of-accuracy clause (standard boilerplate, but notable for a single-founder-style indie SaaS company using full enterprise-grade disclaimer language):
> NEITHER THE COMPANY NOR ITS PARENT, SUBSIDIARIES, AFFILIATES, OR THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS, LICENSORS, LICENSEES, SUPPLIERS, OR SUCCESSORS MAKE ANY WARRANTY, REPRESENTATION, OR ENDORSEMENT WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, SUITABILITY, ACCURACY, CURRENCY, OR AVAILABILITY OF THE WEBSITE OR ITS CONTENTS.

---

## Plausible Analytics — Security Practices + Compliance pages

Source (security): https://plausible.io/security — **"Last updated: March 2026 — Clarifications only. No material changes to data handling."** (this closing changelog note is an unusually good, minimal template for "we revise this page, here's the nature of the revision")

Opening trust statement:
> Plausible Analytics is a privacy-first web analytics startup that's built to enable you to comply with GDPR, CCPA and other privacy regulations that impact your business. You entrust us with your site data and we take that trust to heart. We're committed to being transparent, securing your data, eliminating system vulnerabilities and ensuring continuity of access.

Availability disclaimer (a soft SLA-avoidance clause):
> We aim to provide continuous availability but do not guarantee uninterrupted service. You can view current and historical uptime on our status page.

Feedback/vulnerability channel:
> If you discover a vulnerability, please report it responsibly. Details are available in our vulnerability disclosure program... If you have any questions about our security practices, please contact us.

Source (compliance index page, for vendor-review audiences specifically): https://plausible.io/compliance — `article:published_time` 2026-06-12T06:52:09-05:00

> Plausible is typically straightforward to approve in vendor reviews. Not because of optimized paperwork, but because the product does not collect personal data, does not use cookies and does not send data outside the EU. A simpler product means a simpler review.

> The documents above answer most questions in standard vendor security reviews. **If anything is not covered, contact us and we will respond within one business day.**

This "respond within one business day" line is one of the few *quantified* feedback-channel commitments found in this entire research pass (most vendors say "we will respond" with no timeframe).

---

## Buttondown — Terms of Service

Source: https://buttondown.com/legal/terms — no explicit date stamp on the page itself

**Accuracy-of-materials clause** (very close in spirit and structure to a "for informational purposes only" disclaimer, applied to the whole site including any trust/security content):
> The materials appearing on Buttondown, LLC's website could include technical, typographical, or photographic errors. **Buttondown, LLC does not warrant that any of the materials on its website are accurate, complete or current. Buttondown, LLC may make changes to the materials contained on its website at any time without notice. However Buttondown, LLC does not make any commitment to update the materials.**

Right-to-modify-terms-without-notice clause:
> **Modifications** — Buttondown, LLC may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.

No-representation disclaimer (short form):
> The materials on Buttondown, LLC's website are provided on an 'as is' basis. Buttondown, LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

---

## Bear Blog — Privacy Policy (single-developer indie blogging platform)

Source: https://docs.bearblog.dev/privacy-policy/ — **"21 Aug, 2022"** (explicit date under the title)

The shortest, plainest example of a "we may update this, here's how we'll tell you" clause found in the whole research set:
> **Changes** — We may periodically update this policy. We will notify you about significant changes in the way we treat personal information by sending a notice to your email or by placing a prominent notice on our site.

Feedback/questions channel — literally a link to the sole developer's personal contact page, no formal "security@" mailbox:
> **Questions** — Any questions about this Privacy Policy should be addressed to Herman. [→ herman.bearblog.dev/contact/]

Disclosure-under-compulsion clause (short form of the pattern seen in enterprise DPAs above):
> Bear may disclose personally identifiable information under special circumstances, such as to comply with subpoenas or when your actions violate the Terms of Service.

---

## Not found / gaps

- **Anthropic (trust.anthropic.com)** — Vanta-hosted; page is a pure client-rendered JS shell. Only the meta description was recoverable via plain HTTP fetch. To get verbatim body text, the page needs to be rendered with JS execution (headless browser) rather than a raw fetch.
- **Snowflake (trust.snowflake.com)** — same Vanta JS-shell limitation as Anthropic; only meta description recovered.
- **Figma (compliance.figma.com)** — Conveyor-hosted; same JS-shell limitation; only meta description recovered. Figma's separate marketing security page (figma.com/security/) and legal index (figma.com/legal/privacy-trust-center/) were not fetched and may be server-rendered and worth a follow-up pass.
- **MongoDB (trust.mongodb.com)** — Conveyor-hosted ("MongoDB Trust Portal"); not directly fetched in this pass. Company blog post about its launch (Nov 2025) was captured instead of the live portal text.
- **Notion's actual hosted portal (trustcenter.notion.com)** — JS shell, only meta description recovered. Notion's separate static marketing security page (notion.com/security) was fully captured and is quoted above as a substitute.
- **Deltek Trust Center FAQ (trust.deltek.com/faq)** — Vanta-hosted; direct fetch returned only a JS shell. However, a Kagi search snippet surfaced what appears to be an excellent, on-point quote that could not be verified against the live page in this pass: *"It is strictly a protective agreement governing how shared materials are handled and does not modify commercial terms, pricing, or..."* (truncated in the snippet). **Flagging this as unverified/incomplete — worth a targeted re-fetch or a Google cache / Wayback Machine lookup if this exact language is needed.**
- **GitLab Handbook's "Trust Center Guide" and "Transparency by Default" pages** — confirmed public and static, but both fetches exceeded the session's per-call size limit (~110K characters, mostly handbook sidebar navigation around a comparatively short body). A follow-up fetch with a tool that supports byte-range/offset slicing (rather than a single full-page GET) should retrieve these cleanly.
- **"By accessing this trust center you agree..." (exact phrase search)** — returned zero results across the whole research pass. This specific phrasing does not appear to be in current use by any indexed trust center; the functional equivalent (a clickwrap NDA gate) exists everywhere but is rendered only inside the authenticated SafeBase/Conveyor/Vanta app flow, not as static crawlable text.
- **SafeBase's own standard hosted Trust Center Terms of Use template** — could not be located as a standalone, citable legal document distinct from (a) Drata's general SaaS Terms of Service (quoted above) and (b) the in-app clickwrap NDA (not crawlable). If a client specifically needs SafeBase's boilerplate visitor clickwrap text, the only way to get it verbatim is to actually click "Get access" on a live SafeBase portal and capture the modal — not achievable via search/fetch tooling.
- **Zendesk Trust Center (zendesk.com/trust-center)** — identified as a strong lead (appeared in "in the event of a conflict" search results) but the fetch exceeded the session's output size limit and was not captured. Worth a follow-up.
- **PagerDuty's dedicated Website Terms of Use** (pagerduty.com/website-terms-of-use/) — linked from the footer of the security page but not independently fetched; PagerDuty's security page itself (quoted above) does not carry strong informational-purposes/precedence language of its own.
- **Harness, L2L, and Lilt DPA precedence clauses** — quoted above from Kagi search snippets only; none of the three pages were independently fetched and verified in full in this pass. Treat as directionally correct but re-verify exact wording before quoting in a legal-facing document.
