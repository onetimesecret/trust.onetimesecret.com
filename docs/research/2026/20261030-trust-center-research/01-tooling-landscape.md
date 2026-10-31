# Trust Center Tooling Landscape

Access date: 2026-07-20

## Pattern summary

The market has consolidated hard: SafeBase (the category leader) was acquired by Drata for $250M in Feb 2025, and Vanta acquired Trustpage back in Jan 2023 to build its Trust Center — so two of the "GRC platform" giants now own dedicated trust-center products alongside their compliance-automation cores. Nearly every commercial tool follows the same shape: a public layer (badges, FAQs, policy summaries) plus a gated layer behind a click-through NDA or "request access" workflow, a subprocessor list with a "subscribe for updates" button, and a changelog-style "Trust Center Updates" feed. Legal language is thin and boilerplate-standard SaaS: "AS IS," disclaims all warranties, caps liability, reserves unilateral right to modify. Only Drata (for SafeBase) and Vanta publish a *distinct, visitor-facing* "Trust Center Terms of Use" separate from their core SaaS ToS — most others (Conveyor, Whistic, TrustCloud) fold visitor terms into their general ToS. Pricing is almost never posted publicly by vendors themselves; nearly all figures below come from third-party review/pricing-aggregator sites, not vendor pages — flagged accordingly. Watermarking-by-default and time-boxed access (30-365 day expiry) are common but not universal. Most important finding for this audience: Delve, a well-funded AI-compliance automation platform, is in the middle of a live, credible fraud scandal (TechCrunch, March 2026) over trust pages showing controls that were never implemented — directly relevant to any "accuracy of what we publish" question. Open-source options are real but immature: Probo and Comp AI are full GRC platforms with trust-center modules baked in; a couple of tiny, single-purpose "just the trust page" repos exist (Kodus, sbomify) but have single-digit-to-low-double-digit GitHub stars and should be treated as early-stage.

## SafeBase (acquired by Drata)

**What it is:** The trust-center category leader; standalone SaaS product for hosting a public/gated security & compliance portal. Acquired by Drata in a $250M deal announced Feb 11, 2025; as of mid-2026 it is being sold and rebranded as "SafeBase by Drata" / folded into Drata's "Agentic Trust Management Platform," while continuing to also power many customers' pages independently of Drata's own compliance-automation product.

**Acquisition status/date (verbatim):**

> "SAN DIEGO, Feb. 11, 2025 /PRNewswire/ -- Drata, the leading Trust Management platform, today announced it has entered into a definitive agreement to acquire SafeBase, the leading Trust Center solution for the enterprise."
— PRNewswire, https://www.prnewswire.com/news-releases/drata-to-acquire-safebase-accelerating-trust-management-within-enterprise-governance-risk-and-compliance-302373195.html (Feb 11, 2025) [via search snippet, not independently fetched]

TechCrunch confirms deal size: "Security compliance firm Drata acquires SafeBase for $250M" (TechCrunch, Kyle Wiggers, Feb 12, 2025, https://techcrunch.com/2025/02/12/security-compliance-firm-drata-acquires-safebase-for-250m/) [via search snippet].

Drata's own help-center FAQ on the acquisition (fetched directly, dated Feb 18, 2025, https://help.drata.com/en/articles/10524109-safebase-acquisition):

> "Drata and SafeBase are coming together to build a seamless ecosystem that integrates trust, governance, risk, and compliance. With this acquisition, we are uniting to create a best-in-class Trust Management Platform. There will be no disruption to your service—rather, in the coming months, you'll have the opportunity to explore the Trust Center and AI Questionnaire Assistance (AIQA) products by SafeBase to determine if a migration or upgrade is right for you."

> "What if I don't want to use SafeBase for my Trust Center? Not a problem, if you don't want to use SafeBase for your Trust Center, you can continue to use Drata's Trust Center with no disruption to your service at this time... Will Drata's Trust Center be Discontinued? There are no immediate plans to sunset Drata's Trust Center."

So as of this writing there are **two parallel products**: legacy "Drata Trust Center" (Essential/Pro) and "SafeBase Trust Center" — see separate Drata entry below.

**Pricing (not public from vendor; third-party estimates only):**
- Reddit r/cybersecurity (user reports, not vendor-confirmed): "The prices start at thousands of dollars per year... They have a free plan... free offering for up to 25 domains." (https://www.reddit.com/r/cybersecurity/comments/1kx2yqf/affordable_trust_center_portal/, Jul 2025)
- cyberbase.ai (third-party blog, May 2026): "Trust Center Pro (the SafeBase product, now branded under Drata) runs roughly $8,000 to $15,000 per year for the standalone trust center." (https://www.cyberbase.ai/blog/what-is-a-trust-center-2026) [snippet only]
- A second Reddit thread (Sept 2025): "SafeBase was built specifically to serve those large customers … it's possible to buy Safebase without Drata license (but it's no cheap)."

**Features (from live example trust centers, directly fetched — trust.safe.com and trust.gitlab.com, both "Powered by SafeBase"):**
- Standard left-nav taxonomy: Overview, Compliance (badges: ISO 27001, SOC 2 Type 2, GDPR, PCI DSS, CSA STAR, TISAX, VPAT, etc.), Documents (All/Public/Private/Bulk download toggle), Policies, AI (AI Risk Management / Prompt Guardrails section is now standard), Network/Access/Endpoint/Corporate Security subsections, Risk Profile, Reports, Data Privacy, **Legal** (Subprocessors, Cyber Insurance, DPA), ESG/Sustainability, Security Grades (SecurityScorecard, Qualys SSL Labs badges pulled in live), Knowledge Base FAQ, and a **"Trust Center Updates"** feed with a **"Subscribe"** button and per-update "Copy link" permalinks.
- "Get access" gating button front and center; a "Start your security review" CTA.
- Document-level access control: public vs. private, with "Get access" / "View & download sensitive information" / "Ask for information" as three separate visitor actions on GitLab's instance.
- Every instance footer reads: "Built on [SafeBase by Drata logo]" linking to drata.com/trust-center with UTM tracking.

**Default/template legal language — Drata Trust Center Terms of Use (this is the document that gates SafeBase/Drata-powered visitor access):**

Fetched directly, https://drata.com/trust-center-terms-of-use, **"Date Last Updated: August 12, 2025."**

> "PLEASE READ THESE TERMS OF USE CAREFULLY, AS IT CONTAINS IMPORTANT INFORMATION REGARDING YOUR RIGHTS, REMEDIES, AND OBLIGATIONS. Drata Inc., including its affiliates and subsidiaries (collectively, "Drata," "Company," "we," "us," "our") provides its trust center services (described below) to the entity or person accessing the trust center services ("you") through its applications and related services (collectively, the "Service"), subject to this Trust Center Terms of Use... By accessing, browsing, or otherwise using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use."

> "Services Description: The Service includes allows your organization to proactively share and upload information about their security program in a secure manner, and to optionally subscribe to, and to view other vendors' security portals; and, if you are participating in our third party risk management program, a platform that allows you to upload security-related information from third parties for processing and analysis. In addition, the Service allows you to access or request access to information about their security program in a secure manner, and in certain cases agree to non-disclosure terms and download such information."

> "Third Party Material: Under no circumstances will we be liable to you in any way for any content or materials of any third parties, including, but not limited to, for any errors or omissions in any content, or for any loss or damage of any kind incurred as a result of the use of any such content... You agree that you must evaluate, and bear all risks associated with, the use of any content, including any reliance on the accuracy, completeness, or usefulness of such content."

> "User Content: ... You assume all risk associated with your User Content and the transmission of your User Content, and you have sole responsibility for the accuracy, quality, legality and appropriateness of your User Content."

> "General Practices Regarding Use and Storage: ... You agree that the Company has no responsibility or liability for the deletion or failure to store any data or other content maintained or uploaded by the Service."

No separate "AS IS" all-caps disclaimer block or liability cap dollar figure appears in this particular document (unusual compared to peers — it's lighter-touch than Vanta's or Whistic's equivalent, more focused on conduct/IP/DMCA than warranty disclaimers). Governing law: California; venue: San Francisco County.

**Companies confirmed using it (footer "Powered by SafeBase" branding, all directly observed):** Safe Software (trust.safe.com), Community.com (trust.community.com), Confluent (confluent.safebase.us), ICE/Intercontinental Exchange (ice.safebase.us), Shiftbase (trust.shiftbase.com), GitLab (trust.gitlab.com), Mimecast (trust.mimecast.com), Articulate (trust.articulate.com), Infoblox (trust.infoblox.com), Qlik (security.qlik.com), UKG (trustcenter.ukg.com), Okta (app.safebase.io/accounts/.../share — Okta Security Trust Center), Vidyard (trust.vidyard.com), Watermark Insights (trust.watermarkinsights.com), Drata itself (trust.drata.com).

## Conveyor

**What it is:** "A network for sharing trust documentation with customers and prospects" — trust center + AI questionnaire-answering agent ("ConveyorAI") + vendor security-review tooling. Positions itself as "the first end-to-end customer trust platform."

**Pricing:** Per a third-party breakdown (sifthub.io, Jun 2026, snippet only): "1. Trust center (trust portal) · Free trust portal (with custom domain), unlimited docs, and unlimited questions & answers in the knowledge base..." — i.e., Conveyor's trust-center layer itself has a free tier; paid tiers gate the AI questionnaire-answering features. Not independently confirmed on conveyor.com/pricing.

**Features (directly observed on trust.conveyor.com, Conveyor's own live trust center):**
- Header stats: "4 Documents · 231 FAQs · 1 Badges."
- Explicit "Subscribe" and "Get Access" buttons at top.
- **Subprocessor table** with columns Subprocessor / Location of Processing / Usage Details, 27 subprocessors listed by name (Anthropic, AWS, Google Cloud, OpenAI, Slack, Snowflake, Zoom, etc.), each with a one-line purpose description (e.g., "Svix — Optional subprocessor. Svix provides webhooks-as-a-service. If enabled, the payload of your webhook will flow through and temporarily be stored on Svix servers in the USA."). Footer line: **"Last updated July 14, 2026. Subscribe to get notification updates."**
- Separate **"Third-Party LLM Providers"** section disclosing OpenAI, Anthropic, Google as LLM providers and Pinecone as the vector-embedding database, with a data-residency caveat: "Storage of Customer Content by these sub-processors, where applicable, occurs in the United States. Inference requests may be transiently routed through the provider's global network to improve latency and availability; such processing is ephemeral and no Customer Content is stored at rest outside the United States."
- **"Announcements"** feed (functions as a changelog) with dated entries, e.g., "May 29, 2026 — API Key Security Enhancements," "Apr 30, 2026 — Conveyor Privacy Statement Update," "Jan 26, 2024 — 2023 SOC 2 Type II," down to older items like "Jan 24, 2023 — No impact from the March 22 Okta/LASUS$ incident" (proactive incident-response disclosure pattern worth noting for a small SaaS to copy).
- "Quick Summary" checklist widget: "One or more annual third-party audit(s) · Has a formal mobile device management (MDM) program · Annual third-party penetration testing · Has a disaster recovery plan · Subprocessors list available · Has cyber insurance · Will enter into a DPA · Has a bug bounty or vulnerability disclosure program · Deletes customer data on request · Has an API available · Uses a centralized IAM solution (SSO)... · Has a status page."

**Default/template legal language — Conveyor Terms of Service (fetched directly in full, https://www.conveyor.com/legal/terms-of-service, Version 1.6, Effective May 7, 2026):**

> "These Terms of Service (the "Terms") are an important, binding contract between us and you. Please read them carefully before using Conveyor. ... This Agreement takes effect when you click an "I Accept" button or checkbox presented with these terms, sign a contract that incorporates these terms by reference, or, if earlier, when you use any of the Services (the "Effective Date")."

> "THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, AND CONVEYOR'S LIABILITY TO YOU IS LIMITED... Disputes arising hereunder will be resolved by binding arbitration, and BY ACCEPTING THIS AGREEMENT, YOU AND CONVEYOR ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION."

> "CONVEYOR IS NOT RESPONSIBLE OR LIABLE FOR THE DELETION OF OR FAILURE TO STORE ANY CONTENT... FOR THIRD PARTY CONTENT THAT IS INACCURATE OR INCOMPLETE, OR FOR BREACHES OF DATA OTHER THAN THOSE CAUSED BY OUR GROSS NEGLIGENCE. ... YOU UNDERSTAND AND AGREE THAT OUTPUTS ARE GENERATED THROUGH MACHINE LEARNING PROCESSES AND ARE NOT TESTED, VERIFIED, ENDORSED OR GUARANTEED TO BE ACCURATE, COMPLETE OR CURRENT BY CONVEYOR. YOU AND/OR YOUR END USERS SHOULD INDEPENDENTLY REVIEW AND VERIFY ALL OUTPUTS..."

> "THE AGGREGATE LIABILITY OF THE PARTIES... IS LIMITED TO THE AMOUNT PAID BY YOU TO CONVEYOR FOR ACCESS TO AND USE OF THE SERVICE IN THE 12 MONTHS PRIOR TO THE CLAIM." Trust Center is a defined term: **"'Trust Center' means the Customer Trust features allowing End Users to manage and securely share security documents & artifacts with customers and prospects."** A visitor to someone's Trust Center is a defined **"Counterparty User"**: "any individual or entity who are granted access by Customer to access a portion of the Products and/or Services for a limited purpose (eg. downloading a document from a vendor's Trust Center; responding to questions from customers)."

> "Third-Party Links & Content... Conveyor provides access to these Third-Party Links & Content only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Links & Content. you use all Third-Party Links & Content at your own risk..."

Governing law: California; venue: San Francisco. Arbitration via AAA. Note Conveyor keeps prior versions public and linked (v1.5 – July 2024, v1.4 – October 2023), a good transparency pattern.

**Companies confirmed using it ("Powered by Conveyor" footer, directly observed or from search results):** Cvent (trust.cvent.com), TrueContext (trust.truecontext.com), True Platform (trust.trueplatform.com), Atlassian (customertrust.atlassian.com), Progress Software (trust.progress.com), Alteryx, Carta, dbt Labs, Lucid Software, Productboard, Sumo Logic, Zapier (per Conveyor's own "Trusted by" list on trust.conveyor.com).

## Vanta Trust Center (Trustpage acquisition)

**What it is:** Vanta's trust-center product, built on its Jan 2023 acquisition of Trustpage. Vanta calls itself "the leading agentic trust platform" and says over 16,000 companies use it; "5,000+ Trust Center pages" are hosted on Vanta specifically.

**Acquisition (verbatim, via Businesswire, Jan 19, 2023, https://www.businesswire.com/news/home/20230119005118/en/Vanta-Accelerates-Enterprise-Momentum-with-the-Acquisition-of-Trustpage) [snippet]:**

> "Vanta, the leading trust management platform, announced today its acquisition of Trustpage to transform trust into a marketable advantage for companies around the world."

Vanta's own Nov 2023 post (vanta.com/resources/introducing-vanta-trust-center-state-of-trust-report) [snippet]: "Following Vanta's acquisition of Trustpage earlier this year, Trust Center combines the capabilities of Trustpage Trust Centers and Vanta Trust..."

**Pricing:** Not published; "Available as a standalone product or as an add-on to your existing Vanta plan" per vanta.com/products/trust-center (directly fetched, no dollar figures shown — gated behind "Request a demo").

**Features (from vanta.com/products/trust-center, directly fetched):**
- Two tiers named on the page: "Trust Center" and "Advanced Trust Center."
- Trust Center tier: AI-powered chatbot (visitor asks a question, "Vanta AI summarizes answers based on information available in your Trust Center"), continuous controls/test monitoring ("real-time evidence of your active controls"), unlimited customer views/user seats, analytics, branding customization.
- Advanced Trust Center adds: ROI reporting ("track revenue influenced by your Trust Center"), **HubSpot and Salesforce integrations for automated access approval**, **DocuSign and Ironclad integrations for NDA sync and collection**, custom tags/filters by product/region/industry.
- Stated automation stats (Vanta's own marketing claim, not independently audited): "93% — Vanta automates 93% of access approvals*" and "86% — Vanta automates 86% of NDA collection*" (both footnoted "*Results may vary by customer").
- "Subscriber notifications" is a named feature: "Meet contractual obligations by keeping customers informed of key security updates through notifications to all subscribers or targeted groups."
- trust.vanta.com itself is a client-rendered SPA — direct fetch returned only metadata, no visible content (see Gaps).

**Default/template legal language — Vanta External User Terms of Service (this is the specific document governing Trust Center *visitors*, fetched directly in full, https://www.vanta.com/legal/external-user-terms):**

> "The short version: Vanta is a trust management platform that supports customers by making it easier for their vendors and business partners to access, manage, and share security and compliance information. Vanta is a service provider to its customers... When you access, manage, or share security and compliance information via Vanta with a Vanta customer, Vanta's activities are governed by that contract, and those safeguards continue to apply."

> "The use of the Vanta Services is subject to the Vanta Master Subscription Agreement... When a customer makes Vanta Services available to a vendor, business partner, or other party ("you") as an authorized user, Vanta's role is that of a service provider, and the agreement between Vanta and the customer governs Vanta's provision of Vanta Services."

> "Third-Party Content. The Vanta Services may display content uploaded or provided by customers or other third parties. Vanta does not control, pre-screen, or endorse such content and is not responsible for its accuracy, completeness, reliability, or legality. You agree that you bear all risks associated with your use of or reliance on any third-party content available through the Vanta Services."

> "Artificial Intelligence Features. Some of the Vanta Services may include AI-powered features. Vanta makes no representations or warranties regarding any outputs generated by such features ("AI Outputs"), including as to their accuracy, quality, completeness, or fitness for any particular purpose. You should not rely solely on AI Outputs and should independently verify any AI Outputs before acting on them."

> "Disclaimer of Warranties. THE VANTA SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND... NEITHER VANTA NOR ITS CUSTOMERS MAKE ANY REPRESENTATIONS REGARDING THE ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY CONTENT AVAILABLE THROUGH THE VANTA SERVICES."

> "Limitation of Liability. ... IN NO EVENT SHALL THE TOTAL LIABILITY OF VANTA TO YOU EXCEED $100.00."

This is the most visitor-specific, cleanly-drafted "trust center terms" document found in this research — note the explicit **$100 liability cap** to external (non-paying) trust-center visitors, and the blanket "neither Vanta nor its customers make any representations regarding the accuracy... of any content" disclaimer, which directly answers the "who is responsible if the trust center is wrong" question. Governing law: California; venue San Francisco County.

**Companies confirmed using it (Vanta's own customer list / "Join the largest network of Trust Centers" logos, directly observed on vanta.com/products/trust-center):** Snowflake (trust.snowflake.com), Miro, WeWork (trust.wework.com), Intercom (trust.intercom.com), TravelPerk (trustcenter.travelperk.com), Aptean (trust.aptean.com), ZoomInfo (trust.zoominfo.com), plus Atlassian, Duolingo, Golden State Warriors, Icelandair, Ramp, Synthesia, GitHub cited as customers on trust.vanta.com's own meta-description.

## Drata Trust Center (native/legacy, distinct from SafeBase)

**What it is:** Drata's own original trust-center product (pre-dates and now runs parallel to SafeBase within the Drata portfolio). Per Drata's help center, "Customers using the New Drata experience may manage their Trust Center through SafeBase" but the legacy "Classic Drata experience" Trust Center is still live and not being sunset.

**Pricing (third-party estimates only, not vendor-confirmed):**
- complyjet.com: "Trust Center Pro $3K-..." add-on pricing, on top of Drata's base platform pricing which third parties estimate at "$7,500–$15,000/year" (Essential/Foundation) up to "$37,046/year" (Advanced) and "$100,000+/year" (Enterprise) — costbench.com and secureleap.tech, snippets only.

**Features (fetched directly, https://help.drata.com/en/articles/8067402-trust-center-essential-and-pro-plans, updated May 26, 2026):**

> "Trust Center Essential [free to all Drata customers]: Single hub to host security reports, documents and policies. Live view of your security posture. Clickwrap NDA support. Private document access requests."

> "Trust Center Pro includes all features of Trust Center Essential, plus: Salesforce connection... Custom public trust page URL... Personalization and branding: Use an HTML editor to further customize your public Trust page. Automated access approvals: Identify pre-approved domains for automated access. **Configurable access expiration dates: Default length is 365 days.** Publishing capabilities: Publish Topics & Common Questions and live Announcements. Docusign NDA integration... Open APIs: Access Trust Center open APIs for further customization."

Note the explicit **365-day default expiration** — one of the few vendor pages found that states a concrete default numeric value for access expiry.

**Legal:** Same Drata Trust Center Terms of Use as SafeBase entry above (drata.com/trust-center-terms-of-use) governs both legacy Drata Trust Center and SafeBase-powered instances.

## Secureframe Trust Center

**What it is:** Trust-center feature bundled into Secureframe's compliance-automation platform ("Secureframe Trust" / "Secureframe Comply").

**Pricing:** Not published by vendor with dollar figures on the feature page itself. Per Secureframe's own support article (support.secureframe.com/en/articles/15111339, dated Jul 17 2026 per crawl date) [snippet]: "The free tier of Trust Center comes standard with all Secureframe Comply Fundamentals plans, while Advanced Trust Center comes with Comply Complete plans." Third-party estimates (complyjet.com, mspcompared.com; not vendor-confirmed) put overall Secureframe pricing at "$7,500/year" starting, scaling to "$35,000–$70,000+/year."

**Features (fetched directly, secureframe.com/features/trust-center):**

> "Publish a Trust Center for prospects and customers to find information about the measures your organization is taking to ensure a robust security position. Data – like monitoring checks on security controls – is pulled continuously from Secureframe, but admins may choose to hide or display content on their Trust Center."

> "From your Trust Center, visitors can self-serve or request sensitive security documents. Admins at your organization can review/approve/deny requests and enforce an NDA for resources in the requests dashboard, streamlining the process for both you and your Trust Center visitors."

> "Your Trust Center is fully customizable - set up a custom domain with your organization's logo and colors, and adjust any design components with custom fonts, custom domains, and CSS."

**Legal (from search snippets only, not independently fetched in full):** Secureframe maintains a separate "Website Terms of Use" (secureframe.com/websiteterms, dated 2023-05-01) distinct from its core "Terms of Service" (secureframe.com/terms, dated 2025-04-04) and a "Partner Portal Terms" (undated) that includes: "Use of any Content is at Partner's own risk and Secureframe makes no promises, guarantees, representations or warranties regarding the Portal's availability." It is not confirmed which of these (if any) is the actual click-through document a Trust Center visitor sees — flagged as a gap below.

**Companies confirmed using it (Secureframe's own case examples, directly observed):** Cohere (trustcenter.cohere.com), Finch (finch.secureframetrust.com), Remote (trust.remote.com).

## Whistic

**What it is:** Third-party risk management (TPRM) platform where the trust-center product is called "Whistic Profile" / "Whistic Trust Center," feeding into a shared "Trust Center Exchange" (formerly "Trust Catalog") where buyers can browse vendor trust centers without being asked directly.

**Pricing:** Whistic does not publish pricing. Per heyiris.ai (third-party, Feb 2026, snippet, not vendor-confirmed): "Whistic doesn't publish pricing on their website. There's no pricing page. No tiered plans. No cost estimates... around $20,625 per year." Whistic's own marketing explicitly offers a **free "Basic Profile"** tier (whistic.com/resources/blog/how-to-get-the-most-out-of-your-free-whistic-basic-profile).

**Features (fetched directly from Whistic's own help-center articles):**

Setting Up Your Whistic Trust Center (https://whistichelp.zendesk.com/hc/en-us/articles/14767501524119, updated March 19, 2026):

> "Your Whistic Trust Center allows you to proactively gather and send your crucial security information to customers and prospects. Once created, you can control who has access to it for how long. You can also create multiple Trust Centers for different situations and place sensitive material behind a built-in NDA workflow."

> "NDA: Upload an updated version of your NDA. **We recommend this feature as best practice, especially when you're sharing secure information.** NDAs are only required once for all Trust Center shares and recipients within a company domain (accounts)."

> "Trust Center Access Expiration Date: Set a custom time frame in which your Trust Center will expire. **We recommend this feature as best practice**... Once your Trust Center is shared, the viewer will only be able to access it within the time frame you have set (example: 3 weeks)."

> "Trust Center Updates: This section allows you to choose if you want your Trust Center recipients to access the current version of the Trust Center only, or if you will allow them access to changes and updates... Whenever you make an edit to a Trust Center that is shared on a Subscription a new Trust Center will be sent to each recipient... **This will also extend the expiration date for access to the Trust Center.** If you do not wish to extend the expiration date, we recommend using the Snapshot setting instead of Subscription."

Watermarking Documents (https://whistichelp.zendesk.com/hc/en-us/articles/16148093923351, updated May 25, 2026):

> "Do you want to remind users who access your documents to use those documents responsibly? Now PDF documents of Profile customers will be watermarked unless the company setting is toggled off. PDF documents you have uploaded to Whistic will be watermarked with the user's email address and the date and time of access... To disable watermarking: Go to Trust Centers --> Trust Center Settings --> Watermarking... Toggle off Watermarking (**the default is enabled**)."

Note the "9 months stale" document flag: "Any documents on your Trust Center that are older than 9 months will acquire a small red badge that you will only see internally."

**Default/template legal language — Whistic Terms of Service (fetched directly in full, https://www.whistic.com/terms, dated May 24, 2024):**

> "BY USING THE SERVICES, OR BY OTHERWISE ACCEPTING THESE TERMS (EITHER BY ACCESSING THIS WEBSITE, CLICKING "ACCEPT" OR IN CONNECTION WITH AN ORDER FORM OR OTHER AGREEMENT WITH WHISTIC WHICH INCORPORATES THESE TERMS OF SERVICE BY REFERENCE), YOU ARE AGREEING TO BE BOUND AND ABIDE BY THESE TERMS OF SERVICE."

> "6.3. EXCEPT FOR THE EXPRESS WARRANTIES SET FORTH IN SECTION 6.1, THE SERVICES ARE PROVIDED "AS IS." WHISTIC SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND TITLE. WITHOUT LIMITING THE FOREGOING, WHISTIC MAKES NO WARRANTY OF ANY KIND THAT THE SERVICES, THE CROWDCONFIDENCE SCORE, OTHER SCORES OR RISK REPORTS, ANY THIRD-PARTY PRODUCT, THIRD-PARTY CONTENT, OR ANY RESULTS OF THE USE OF THE SERVICES, WILL MEET CUSTOMER'S OR ANY OTHER PERSON'S REQUIREMENTS, OPERATE WITHOUT INTERRUPTION, ACHIEVE ANY INTENDED RESULT, BE COMPATIBLE OR WORK WITH ANY SOFTWARE, SYSTEM, OR OTHER SERVICES, BE SECURE, ACCURATE, COMPLETE, FREE OF HARMFUL CODE, OR ERROR-FREE."

This is notable: Whistic explicitly names its own proprietary trust/risk score ("CrowdConfidence Score") in the disclaimer, i.e., it disclaims the accuracy of its *own scoring product*, not just third-party content — a useful phrase pattern for a DIY trust page ("we disclaim the accuracy of our own self-reported status," not just uploaded documents).

An older Whistic EULA PDF (2019, https://s3.amazonaws.com/EULA/Whistic_EULA_e1d8b704-f1ee-429f-923a-14c71ad6ddf9.pdf) contains near-identical language: "WHISTIC SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND TITLE... ERROR-FREE" [snippet only] — confirms this disclaimer language has been stable since at least 2019.

## OneTrust Trust & Compliance / Certification Automation

**What it is:** OneTrust's trust-center offering ("OneTrust Trust" — the public-facing hub) plus "Certification Automation" (the former Tugboat Logic product OneTrust acquired, positioned as a SOC 2/compliance-automation module within the larger OneTrust privacy/GRC suite).

**Pricing:** Not published by vendor. Third-party estimate (soc2auditors.org, not independently verified): "$20K-$40K+/yr." Certification Automation was announced/launched publicly via PRNewswire on 2023-03-02.

**Note on research depth:** Only search-snippet-level data was gathered for OneTrust (onetrust.com/trust/ and the Certification Automation product pages were not fetched directly in this pass) — see Gaps. What was found:

> "5. DISCLAIMERS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, ONETRUST DISCLAIMS AND EXCLUDES ALL WARRANTIES, CONDITIONS, GUARANTEES, REPRESENTATIONS, OR OTHER TERMS..." — my.onetrust.com/s/myOtTerms.pdf ("my.OneTrust.com Terms of Use") [snippet only, undated in snippet]

> "OneTrust Master Terms of Service... 'Customer Content' [means] any data or information submitted by or on behalf of Customer to the Cloud Services..." — onetrust.pactsafe.io/versions/... [snippet only]

This my.OneTrust.com Terms of Use PDF appears to be OneTrust's admin/customer portal terms, not necessarily the visitor-facing Trust Center click-through — could not confirm which document (if any) a OneTrust Trust Center *visitor* actually clicks through, unlike the confirmed Drata/Vanta/Whistic documents above.

## TrustCloud (TrustShare)

**What it is:** TrustCloud's customer-assurance / trust-portal product, part of its wider "TrustOps / TrustShare / TrustRegister / TrustLens" GRC suite. TrustShare = the trust-center-equivalent product.

**Pricing:** AWS Marketplace listing shows a concrete line item: "TrustShare. AI-Powered Security Questionnaire Automation - 1 Questionnaire. $150.00" and "TrustRegister for Startups. Risk Register for <50 Employee Org, First 25 [free?]" (aws.amazon.com/marketplace/pp/prodview-7kznn2w6ykryu) [snippet]. General plan pricing not otherwise public; toolradar.com (third-party) notes TrustCloud uses a "Talk to Sales" model.

**Features (fetched directly, community.trustcloud.ai/docs/trustshare/, updated Sept 18, 2025):**

> "TrustShare is a secure platform that enables organizations to share sensitive information with customers, prospects, and partners in a controlled environment. By creating data rooms with granular access controls and engagement tracking, TrustShare ensures that critical compliance and security documentation is both accessible and protected."

> "Key features of TrustShare: 1. **Controlled Data Rooms** — Create secure, permission-based spaces for sharing documentation. Track customer interactions to understand engagement and intent. 2. **Automatic Trust Portal Generation** — Generate a branded, centralized portal... 3. **Secure Access Management** — Define access permissions at user or group levels. Restrict downloads and enable view-only access when required. 4. **Document Watermarking** — Apply automatic watermarks to sensitive documents. Ensure content integrity and discourage unauthorized distribution. 5. **Standardized Vendor Evaluation**... 6. **Automated Content Creation** — Generate product security and compliance documentation automatically."

**Default/template legal language — TrustCloud Terms of Service (fetched directly in full, https://www.trustcloud.ai/legal/tos/, "Last modified: May 9, 2023"):**

> "5.2. DISCLAIMERS: NOTWITHSTANDING THE FOREGOING, TRUSTCLOUD DOES NOT WARRANT THAT CLIENT'S USE OF THE SOFTWARE AND SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE. OTHER THAN THE EXPRESS WARRANTIES CONTAINED IN SECTION 5.1, TRUSTCLOUD MAKES NO REPRESENTATION OR WARRANTY AND HEREBY SPECIFICALLY DISCLAIMS ANY REPRESENTATION OR WARRANTY, EXPRESS OR IMPLIED, REGARDING THE SERVICES AND THE SOFTWARE, INCLUDING ANY IMPLIED WARRANTIES AS TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, SYSTEM AVAILABILITY OR RELIABILITY... CLIENT ASSUMES SOLE RESPONSIBILITY FOR RESULTS OBTAINED FROM ITS AUTHORIZED USERS' USE OF THE SOFTWARE OR SERVICES OR AND FOR CONCLUSIONS DRAWN FROM SUCH USE."

> "7.2. IN NO EVENT WILL EITHER PARTY'S AGGREGATE LIABILITY TO THE OTHER PARTY OR ANY OTHER THIRD PARTY IN CONNECTION WITH THIS AGREEMENT EXCEED AN AMOUNT EQUAL TO THE TOTAL AMOUNT OF FEES PAID OR PAYABLE BY CLIENT IN THE TWELVE (12) MONTH PERIOD PRECEDING THE CLAIM."

This document is the general customer/subscriber ToS (i.e., for the company running TrustShare), not a distinct visitor-facing document — no separate "trust portal visitor terms" was found for TrustCloud.

**Companies:** TrustCloud's own trust portal is at trust.trustcloud.ai. Third-party review site auditxyz.com describes it as comparable to SafeBase/Conveyor but did not list named customer logos in the snippet captured.

## Sprinto

**What it is:** Compliance-automation platform (SOC 2, ISO 27001, etc.) with a bundled Trust Center product, also sold as a **free-standing offering on AWS Marketplace usable by non-Sprinto customers**.

**Pricing:** AWS Marketplace listing (snippet): "Highlights 100% Free for All. No upsells, no hidden costs. Available to everyone, even if you are not a Sprinto customer." Sprinto's core platform pricing (third-party estimates, not vendor-confirmed): complyjet.com says "$4,000 to $5,000 for small setups," rising to "$18,000–$24,000" once you add "editable policies, custom roles, a Trust Centre, or a private cloud." compliancerated.com: "starts at $6,000/yr."

**Features/pattern description (fetched directly from Sprinto's own blog post "What Is a Trust Center?", sprinto.com/blog/what-is-a-trust-center/, dated June 29, 2026 — useful as a vendor's own articulation of the standard feature set, even though written as content marketing):**

> "Trust Centers offer two levels of access: public and gated. A public Trust Center is open to anyone... A gated Trust Center restricts access to sensitive documents and only allows verified stakeholders such as prospects under NDA, auditors, or partners to view them."

> "**Receive**: Once approved, users receive access through secure, controlled methods. These may include expiring download links, watermarked documents, or encrypted email attachments."

> "**Admin features: Content control, expiration, and analytics** — Content control: Admins can assign role-based permissions so different teams manage their content areas. For example, legal may own contracts and DPAs, while security handles audit reports. Expiration and revocation: Time-bound access settings let admins define how long sensitive documents remain available, such as 30-day access to an audit report. If a risk is identified, access can be revoked immediately with no manual cleanup. Analytics: Built-in dashboards provide visibility into document engagement..."

> "With tools like Sprinto, your Trust Centers can be live within minutes... What gets pulled in: Security policies, controls, and subprocessors (from your Sprinto instance); Compliance certificates like SOC 2, ISO 27001; Privacy policy and terms of service links; Company branding, logos, and website copy; Trusted customer logos or references."

## Scytale

**What it is:** AI-powered compliance/audit platform ("40+ security and privacy frameworks") with a Trust Center product launched as a standalone feature (covered by Security Boulevard, Feb 2025).

**Pricing:** Not published by vendor (scytale.ai/pricing gates behind "Book a Demo" per search snippet). Third-party estimate (compliancerated.com): "Scytale starts at $7,500/yr."

**Note on research depth:** trust.scytale.ai returned only an empty client-rendered shell on direct fetch (JS SPA, no server-rendered content) — could not capture live feature/legal detail. Per search snippets only:

> "Showcase Your Security and Compliance Program in Minutes with Scytale's Trust Center" — Security Boulevard headline, Feb 24, 2025. "Launch a fully customized Trust Center in minutes with Scytale and effortlessly showcase your security and compliance posture."

> "Scytale's Trust Center lets you showcase your security and compliance posture in minutes. No manual updates required. It automatically syncs your SOC 2, ISO..." — LinkedIn product page snippet.

No verbatim legal/ToU language was captured for Scytale — flagged in Gaps.

## Anecdotes

**What it is:** "Compliance-as-code" GRC platform; Trust Center launched Sept 2024 as a feature that syncs live from the company's underlying "Anecdotes ComplianceOS," explicitly marketed as a SafeBase-replacement.

**Positioning as a SafeBase alternative (verbatim, from anecdotes.ai/lp/trust-center-lp) [snippet]:**

> "Own your Trust Center — And your GRC Future... With Anecdotes, you're not just getting a seamless replacement for SafeBase. You're getting a configurable, enterprise-grade Trust Center AND the platform behind it, so your GRC program can grow, scale, and adapt with you."

**Launch announcement (fetched directly in full, PRNewswire, Sept 17, 2024, https://www.prnewswire.com/news-releases/anecdotes-introduces-trust-center-302250139.html):**

> "TEL AVIV, Israel and PALO ALTO, Calif., Sept. 17, 2024 /PRNewswire/ -- Anecdotes, the leading security compliance technology firm, today announced the launch of Anecdotes Trust Center, a centralized platform for companies to effortlessly share compliance and security information and documentation with prospects, customers, and partners."

> "Reflecting the company's real-time security and compliance posture, the Trust Center enables companies to decide exactly what information and documentation to share, and to what extent... Sales teams can give prospects access to essential documentation early in the sales cycle without any intervention—or delay—from security or compliance teams."

> ""There's no better way to build trust than by making security and compliance information and documentation easily available," says Roi Amior, Chief Product Officer and co-founder."

> "To keep in full control over the shared data, users can customize privacy settings for each document in their Trust Center and automate access permissions for private documents. Salesforce integration enables sales teams to automatically grant access to relevant documentation as prospects move through the buying process, while DocuSign integration supports one-click NDA access, streamlining the process."

> "Consistent, accurate, and real-time: Anecdotes Trust Center continuously pulls data directly from a company's Anecdotes Compliance OS, ensuring all documentation is up-to-date and accurate and reducing the risk of errors that can occur when multiple teams are involved in the documentation process."

This "continuously pulls live data so the page can't go stale" pitch (vs. manually-uploaded-PDF trust centers) is Anecdotes' core differentiator and worth noting as a design principle for a DIY build: staleness risk is lower if the page renders live from source-of-truth data rather than from uploaded snapshots.

**Pricing/legal:** Not captured in this pass (gated demo, no ToU fetched) — flagged in Gaps.

## HyperComply

**What it is:** Security-questionnaire-automation platform whose trust-center product is called "Trust Page." Positions as bidirectional: helps you answer inbound questionnaires *and* publish your own outbound trust page.

**Pricing:** Per HyperComply's own blog (2022, snippet): "HyperComply is free to use for procurement teams sending up to 20 vendor reviews per year and offers custom pricing for companies..." Third-party estimate (auditxyz.com, not vendor-confirmed): "HyperComply pricing starts around $6,000/year." Implementation fees per Vendr (third-party): "$3,000 to $15,000."

**Positioning (fetched directly in full, hypercomply.com/blog/corporation-trust-center, by Amar Chahal, Aug 6, 2024 — HyperComply's own explainer content, useful as vendor-authored framing of the category, not neutral):**

> "A trust center, or Trust Page, is a central resource for information about a company's business practices, regulations, and guidelines for security, privacy, compliance, and openness. It serves as a single source of truth for customers, partners, regulators, and other stakeholders..."

> "**2. Balancing Transparency and Security:** While transparency is the goal, it's important to carefully consider what information to share publicly. Oversharing certain security details could potentially create vulnerabilities." (listed as one of HyperComply's own named "Key Challenges" of running a trust center — a candid caveat worth keeping.)

Per auditxyz.com (third-party, snippet): "Trust center features are less polished than dedicated trust center platforms like SafeBase."

**Legal:** HyperComply's Trust Page legal doc is linked in its footer as "Trust Page" → trust.hypercomply.io/ — not independently fetched in this pass (flagged in Gaps).

## Oneleet

**What it is:** Combined "do compliance for you" service + platform (pentest, SOC 2 audit facilitation, monitoring) with a bundled live Trust Center.

**Pricing:** Not published by vendor (oneleet.com/pricing gates to contact form). Third-party estimates vary widely and are **not vendor-confirmed**: sprinto.com blog suggests "entry-level plan around $10,000/year, with typical customers paying in the $20,000–$80,000 range"; complyjet.com: "$15,000 and $30,000" for SOC 2 Type II; softwarefinder.com: "$8,000 and $60,000+ annually."

**Features (third-party description only — toolradar.com, not vendor-confirmed):**

> "Oneleet provides a Trust Center feature that serves as a centralized platform for showcasing an organization's security posture and compliance efforts. This allows for transparent communication with stakeholders regarding security measures."

**Note on research depth:** Both trust.oneleet.com and security.oneleet.com (its Trust Center URLs) returned empty client-rendered shells on direct fetch — no live feature/legal content captured. Flagged in Gaps.

## Thoropass

**What it is:** "End-to-end compliance solution" (audit facilitation + compliance suite) whose Trust Center shipped as a named feature in 2025/2026 (was previously in beta).

**Pricing:** Explicitly **free** as an add-on: per Thoropass's own announcement, "Trust Center ships free with every Thoropass plan, including platform-only and audit-only subscriptions." Thoropass's overall platform pricing (third-party estimates only): sprinto.com blog: "median deals are around ~$30K/year"; complyjet.com: "SOC 2 Type 1: Around $12,000 - $27,000... SOC 2 Type 2: anywhere between $15,000 - $1,00,000+."

**Launch announcement (fetched directly in full, "Introducing Thoropass Trust Center: Your Compliance, On Display," thoropass.com/blog/thoropass-trust-center):**

> "Security due-diligence shouldn't derail momentum. Yet today, teams burn countless hours chasing down documents and answering repetitive questionnaires to prove they're secure... Thoropass Trust Center closes that transparency gap. In one click, you can publish a branded site—trust.yourcompany.com—that makes it effortless for prospects, customers, and partners to self-serve the evidence they need to do business with your company."

> "**Share documentation on your terms** — Designate any file as public (downloadable by anyone) or private (requires an access request). You decide what to expose and when. **Protect sensitive docs behind NDAs** — Visitors can sign an NDA right in the portal by simply typing their name, creating an auditable record before private documents are released."

Note: Thoropass's NDA mechanism is explicitly lightweight — "simply typing their name" — worth flagging as a low-friction (if legally thin) pattern versus DocuSign-style e-signature integrations used by Drata/Anecdotes/Vanta.

**Legal:** Thoropass maintains a general "MSA," "DPA," and "Terms and Conditions" (linked in site footer: thoropass.com/master-subscription-agreement, /data-processing-addendum, /terms-and-conditions) but no Trust-Center-specific visitor ToU was located/fetched in this pass — flagged in Gaps.

## Delve — includes a live accuracy/fraud controversy directly relevant to this research

**What it is:** Y Combinator-backed AI compliance-automation startup (SOC 2, HIPAA, ISO 27001) that also runs a "free trust report" / trust-page product at trust.delve.co (per-customer subdomains, e.g., trust.delve.co/operand). Raised a $32M Series A at a $300M valuation led by Insight Partners (per TechCrunch, referencing a July 2025 raise).

**This is the single most important finding for a "values honest, plain-language disclosure" audience:** In March 2026, an anonymous whistleblower ("DeepDelver," a former Delve customer) published a detailed Substack post accusing Delve of fabricating compliance evidence and letting customers publish trust pages listing controls that were never implemented. Fully verbatim from TechCrunch (fetched directly, "Delve accused of misleading customers with 'fake compliance'" by Anthony Ha, published March 22, 2026 7:43 AM PDT, updated March 23, 2026, https://techcrunch.com/2026/03/22/delve-accused-of-misleading-customers-with-fake-compliance/):

> "An anonymous Substack post published this week accuses compliance startup Delve of "falsely" convincing "hundreds of customers they were compliant" with privacy and security regulations, potentially exposing those customers to "criminal liability under HIPAA and hefty fines under GDPR.""

> "Their conclusion? That Delve "achieves its claim of being the fastest platform by producing fake evidence, generating auditor conclusions on behalf of certification mills that rubber stamp reports, and skipping major framework requirements while telling clients they have achieved 100% compliance.""

> "DeepDelver went into considerable detail about those claims, accusing the startup of providing customers with "fabricated evidence of board meetings, tests, and processes that never happened," then forcing those customers to "choose between adopting fake evidence or performing mostly manual work with little real automation or AI.""

> "In addition to accusing Delve of misleading its customers, DeepDelver said the startup is helping those customers "mislead the public by hosting trust pages that contain security measures that were never implemented.""

> "DeepDelver also claimed that virtually all of Delve's clients seem to have gone through two audit firms, Accorp and Gradient, which they described as "part of the same operation," one that operates primarily in India, with only a nominal presence in the United States... "By generating auditor conclusions, test procedures, and final reports before any independent review occurs, Delve places itself in the role of both implementer and examiner. This is not a technicality. It is a structural fraud that invalidates the entire attestation.""

**Delve's own response (fetched directly via TechCrunch's reporting of it, Delve's blog post at delve.co/blog/response-to-misleading-claims not independently fetched but quoted by TechCrunch):**

> "On Friday, the startup attempted to refute the accusations on its blog, calling the Substack post "misleading" and saying it "contains a number of inaccurate claims."... Delve responded to the accusations by saying it does not issue compliance reports at all. Instead, it's an "automation platform" that ingests information about compliance, then provides auditors with access to that information. "Final reports and opinions are issued solely by independent, licensed auditors, not Delve," the company said."

> ""Draft templates are not the same as 'pre-filled evidence,'" the company said."

**Real-company fallout — other vendors' trust centers publicly distancing themselves from Delve (evidence that this scandal reached other companies' own trust-center disclosures, i.e., it changed what competitors put on THEIR trust pages):**

Vidyard's trust center (trust.vidyard.com, "Powered by SafeBase") [snippet, not independently fetched in full]:

> "Vidyard is not a Delve customer and is not affected by this situation. Our SOC 2 Type II audit is conducted by Coalfire Controls, an independent firm with no connection to Delve or the audit partners named in the investigation."

Lovable (LinkedIn post, March 21, 2026) [snippet]:

> "We're aware of recent reporting about Delve's compliance practices. Lovable is not a Delve customer. We proactively moved to Vanta in late..."

A third-party site (extruct.ai) built a public database explicitly cataloguing exposure: "This database catalogs 275 companies that appear on Delve's trust pages with SOC 2 compliance claims that raise serious questions" (trustlists.org and iansresearch.com covered the same story; VISO TRUST's analysis, fetched directly, March 25, 2026, https://visotrust.com/resources/delve-ai-compliance/, frames the structural lesson):

> "Think about how trust centers work. A vendor builds one. They populate it with the controls they want you to see. They publish a polished page that signals security maturity to every prospect, customer, and auditor who lands on it. There is no independent party curating that page. There is no mechanism requiring that what's listed actually reflects reality. And critically, if no one checks, there is no downside to overstating your controls."

**Takeaway for this research corpus:** this is a live, unresolved (as of access date) case study of exactly the risk a small, honesty-focused SaaS founder should design against — i.e., don't let a trust center (whether built on a vendor platform or DIY) publish a claim ("SOC 2 compliant," "control X implemented") that isn't independently verifiable, and be explicit about what's self-attested vs. third-party-audited.

**Pricing:** Not published; complyjet.com (third-party, not vendor-confirmed) estimates "$12k per year" for the automation platform plus "$12k" for the audit.

## Open source / DIY — Probo (getprobo)

**What it is:** Full self-hostable GRC platform (not just a trust page) with a trust-center module built in, called "Compliance Page." MIT-licensed per GitHub UI, ISC-licensed per its own README (both badges appear — flagged as a minor inconsistency worth double-checking before relying on it). 1.1k GitHub stars, 166 forks, 4,490 commits as of access date (github.com/getprobo/probo, fetched directly).

**Verbatim README (fetched directly):**

> "**Open-source GRC platform for engineers.** Probo is a self-hostable governance, risk, and compliance (GRC) platform built for engineering and security teams. It covers the full GRC lifecycle: risk identification, control tracking, vendor risk, data privacy, access reviews, audit programs, and document approval workflows. Every entity is accessible through a web console, a CLI, a Model Context Protocol (MCP) API, and a GraphQL API..."

> "**Compliance Page** | Public compliance portal, NDA management, certification publishing, custom domain support" — listed as one of its "Capabilities" table rows, alongside Risk Management, Controls & Frameworks, Vendor/Third-Party Risk (including "subprocessor discovery"), Data Privacy (DPIA, Transfer Impact Assessments), Access Reviews, Audit Programs, Evidence & Measures, Document Management, and Cookie & Consent management.

Tech stack: Go + PostgreSQL backend, React/TypeScript/Relay/TailwindCSS frontend, self-hosted via Docker (`git clone --recurse-submodules`, `make stack-up`, `make build`). No CLA required, DCO sign-off required for contributions. Security contact: security@getprobo.com. Website/docs: getprobo.com, getprobo.com/docs.

**Assessment for a small SaaS:** heaviest-weight option of the open-source choices found — you get a full compliance/risk platform (overkill if you only want a public trust page), but the "Compliance Page" module specifically covers NDA management and custom domains, i.e., feature parity with the gating mechanics of commercial tools.

## Open source / DIY — Comp AI (trycomp.ai / trycompai/comp)

**What it is:** Explicitly marketed as an open-source "Vanta & Drata Alternative." Full compliance-automation platform (SOC 2, ISO 27001, HIPAA, GDPR) built Next.js/Prisma/Trigger.dev, with a hosted trust-center component ("Trust Access" per its own docs) as well as a self-hosted path. 1.6k GitHub stars, 323 forks, 7,219 commits as of access date (github.com/trycompai/comp, fetched directly).

**Verbatim README (fetched directly):**

> "**Comp AI** — The open-source compliance platform... **AI that handles compliance for you in hours.** Comp AI is the fastest way to get compliant with frameworks like SOC 2, ISO 27001, HIPAA and GDPR. Comp AI automates evidence collection, policy management, and control implementation while keeping you in control of your data and infrastructure."

**Licensing model — "Open Core" (fetched directly, worth quoting exactly since it affects what a self-hoster actually gets for free):**

> "Comp AI, Inc. is a commercial open source company, which means some parts of this open source repository require a commercial license. The concept is called "Open Core" where the core technology (99%) is fully open source, licensed under AGPLv3 and the last 1% is covered under a commercial license (["/ee" Enterprise Edition"])."

Own docs (trycomp.ai/docs/introduction) [snippet]: "Comp AI is an AI-first compliance platform for teams building and maintaining SOC 2, ISO 27001, HIPAA, GDPR, and customer security programs. Use these docs to configure automated evidence collection, policy workflows, cloud checks, integrations, device compliance, security questionnaires, **Trust Access**, and API-driven compliance automation."

Comp AI runs its own hosted trust center as a live example/dogfood instance at **trust.inc/org_69a976a2d98d5499802005ac** and **security.trycomp.ai** [snippet]: "This Trust Center provides transparent visibility into Comp AI's security, compliance, governance, and trust documentation, giving your procurement and security teams everything they need in one place." (Note: Comp AI's own trust center runs on the third-party "trust.inc" hosted platform rather than self-hosted — worth confirming before assuming Comp AI's trust-page feature is fully self-hostable end-to-end.)

Repo topics include "vanta," "drata" tags (self-identifying as their alternative). Deployment docs mention Docker and Vercel; a `SELF_HOSTING.md` file exists in the repo (not independently fetched).

## Open source / DIY — smaller single-purpose GitHub projects

Found via github.com/topics/trust-center (11 public repos tagged as of access date, fetched directly) plus targeted searches. These are much smaller/earlier-stage than Probo/Comp AI — treat star counts as a rough proxy for maturity/support likelihood, not endorsement:

- **kodustech/trust-center** — "Kodus Trust Center · Dead-simple Trust Hub." MIT license. 11 stars, 3 forks (fetched directly). Self-hosted, **YAML-driven**: "Paste your security program into a single YAML document and instantly expose a polished trust portal with compliance badges, document requests, subprocessors, FAQs, and more—no paid SaaS, no vendor lock-in." Explicit `subprocessors` YAML schema block with `name`, `category`, `location`, `logo`, `description` fields, plus a `subprocessorsLink` option. Stack: Next.js 16, Supabase (for storing document requests + YAML config), NextAuth with GitHub SSO for the admin side. Document-request flow: "Modal collects work email/context → stored via Supabase (document_requests table)" reviewed manually by an admin (no automated NDA/e-sign integration). This is the closest thing found in open source to "just the trust page, nothing else" — smallest footprint, but also smallest community (single-digit stars, no releases published).

- **sbomify/sbomify** — "sbomify is a product security artifact hub and a trust center." Python, 55 stars (per topics listing) [snippet, not independently fetched]. Focused specifically on Software Bill of Materials (SBOM) generation/hosting and publishing, not general security-document trust pages — narrower scope than the others.

- **EtticDevelopment/opentrust** — "A self-hosted, open-source trust center plugin for WordPress with an optional AI assistant grounded in your own policies." PHP/WordPress-plugin architecture — relevant if a small SaaS's marketing site already runs WordPress. [snippet, not independently fetched.]

- **themayursinha/verity-trust-copilot** — "Self-hosted compliance automation with AI-powered questionnaire answering, public Trust Center, and continuous AWS/GitHub monitoring. BYOK — supports OpenAI, Anthropic, Gemini, Groq, DeepSeek, Mistral, Ollama, and 10+ LLM providers." Python. [snippet, not independently fetched.] Bring-your-own-key LLM model is notable — avoids the "which vendor's AI trains on our compliance docs" question that Conveyor's ToS explicitly addresses (see Conveyor entry above).

- **bounded-systems/trust** — "Bounded Systems Trust Center — a public, grep-verifiable claims ledger (verifiable, not attested)." HTML. [snippet only.] Framing ("grep-verifiable," "not attested") is philosophically the most aligned with an "honest, plain-language disclosure" mandate of anything found in this research — worth a closer look in a follow-up pass even though it currently shows 0 stars.

None of these smaller repos had a discoverable license file confirmed beyond kodustech (MIT) in this research pass — verify licensing before adopting.

## Static / DIY approaches (no dedicated tool)

- **GitLab's own security handbook** (handbook.gitlab.com/handbook/security/) is the canonical example of the "just publish it in your public docs/handbook" approach cited in the brief — GitLab is famous for radical transparency via its public company handbook. **However**, directly confirmed in this research: GitLab's actual customer-facing *Trust Center* (trust.gitlab.com) is **not** static/DIY — it runs on commercial SafeBase (fetched directly, "GitLab Trust Center | Powered by SafeBase" branding, full document library, subprocessor list, Trust Center Updates feed, etc.). So even the highest-profile "handbook-as-transparency" company still runs its formal customer trust center on a paid commercial platform, layered on top of (not instead of) its public handbook. That is a meaningful data point: the handbook-style approach and a formal gated trust center appear to be complementary, not substitutes, at least at GitLab's scale.
- No other concrete "static site / markdown-in-docs" trust-center examples (e.g., a security.md-as-trust-page pattern, or a Netlify/Vercel-hosted static subprocessor list) were independently located and verified in this pass beyond the open-source repos above and the general concept of a "security.txt" / docs page — flagged in Gaps for a follow-up search specifically targeting indie-hacker/bootstrapped SaaS examples (e.g., searching indie SaaS communities, Hacker News "Show HN" trust-page posts) rather than the GRC-vendor-dominated search results this pass kept surfacing.

## Not found / gaps

- **Full verbatim visitor-facing "Trust Center Terms of Use" for**: Conveyor (only the general company ToS was found/fetched — it's unclear whether Conveyor shows a *separate* click-through to trust-center visitors or relies on the general ToS's "Counterparty User" definition), Whistic (same — general ToS covers Trust Center use but no separate click-wrap document was located), TrustCloud (general ToS only), Secureframe (found three different "terms" documents — ToS, Website Terms, Partner Portal Terms — but could not confirm which one, if any, actually gates a Trust Center visitor), OneTrust (only a "my.OneTrust.com Terms of Use" admin-portal PDF was found; the actual OneTrust Trust Center visitor experience was not fetched), Scytale, Anecdotes, HyperComply, Oneleet, Thoropass, and Delve (none of these six had a locatable/fetchable trust-center-specific ToU in this pass — only general MSA/ToS or no legal doc at all was found).
- **Scytale, Oneleet trust center pages** (trust.scytale.ai, trust.oneleet.com, security.oneleet.com) all returned empty client-rendered JS shells on direct fetch — no way to verify live feature set, subprocessor list, or legal footer without a headless-browser-capable fetch tool. Same issue affected trust.vanta.com and trust.delve.co/delve (the platform's own dogfood/example instance) — Vanta and Delve's *product marketing pages* were fetched successfully, but their *live trust center examples* were not.
- **Pricing** is confirmed directly from the vendor (with real dollar figures, not just "contact sales") for almost no one in this list — Thoropass ("free with every plan") and Sprinto/HyperComply (free tiers, per vendor's own marketing) are the exceptions. Every other dollar figure in this file is a third-party estimate (complyjet.com, costbench.com, compliancerated.com, mspcompared.com, sprinto.com's own competitor-comparison blog posts, Vendr, etc.) and should be treated as directional, not authoritative — these sites often disagree with each other by 2-3x on the same vendor.
- **OneTrust Certification Automation** and **OneTrust Trust Center** were the two most under-researched entries in the required scope — only search snippets were captured, no direct page fetches succeeded/were attempted for onetrust.com/trust/ or the Certification Automation product pages. Needs a dedicated follow-up pass.
- **Anecdotes, Scytale, HyperComply, Oneleet, Delve**: no pricing or legal-terms direct fetch obtained (marketing/launch-announcement content only was captured for most).
- **Indie/bootstrapped-SaaS DIY examples** (i.e., real small companies who built a trust page themselves without any of the above tools — the audience's own peer group) were not found; all search results were dominated by GRC-vendor marketing and vendor-comparison/review sites. A follow-up search specifically on Hacker News, IndieHackers, or GitHub "awesome-selfhosted"-style lists (rather than general web search) would likely surface these better.
- **Whether SafeBase (pre-Drata) had its own, separately-branded legal document** distinct from the current "Drata Trust Center Terms of Use" was not confirmed — it's possible older SafeBase-only instances still link to a legacy safebase.io-branded ToU rather than the Drata-branded one captured here; not verified either way.
- Did not check: Anecdotes' and HyperComply's own Trust Center legal footers directly (both are linked from their respective sites — anecdotes.ai/trust and trust.hypercomply.io — but neither was fetched in this pass).
