# Subprocessor List Practices: Update Commitments, Notice Windows, Errors/Omissions

Access date: 2026-07-20

## Pattern summary

Nearly every vendor structures this the same way: the DPA text grants "general written authorization" (the GDPR Art. 28(2) option) and then points to a **live webpage** as the operative, incorporated-by-reference list — the DPA itself rarely contains a static/signed subprocessor list. Advance-notice windows cluster at **30 days** (Stripe, Salesforce docs reference, Datadog, Atlassian, HubSpot, GitLab, Buttondown, AWS, and dozens of smaller vendors using shared templates like KnowBe4/Sentry/Koalify), with **10–20 business days** as the next most common band (Twilio non-infra: 10 days; Basecamp/37signals: 10 business days; Fathom: 10 business days; Intercom: 20 days). Objection windows are usually the *same* number of days as the notice period, running concurrently, though Google Cloud is a striking outlier (30-day notice / 90-day objection, satisfied by "terminate for convenience" rather than a negotiated cure). Nearly universally, notice = emailing a subscriber list tied to the public webpage, and **silence = deemed consent**. Emergency/urgent-replacement carve-outs ("as soon as reasonably practicable") are common and largely uniform in wording (Zoom, Twilio, Asana, Manychat, Matter, Maestro). The errors/omissions angle is the genuinely thin spot: only generic website-ToU disclaimers (Illumio) or after-the-fact correction blog posts (Buttondown) address it directly — no vendor publishes a formal "if this list is wrong, here's what controls" clause distinct from standard DPA-vs-Agreement precedence language.

### Notice windows found

| Company | Advance notice | Objection window | Mechanism |
|---|---|---|---|
| Stripe | 30 days | 30 days (from notice) | Email subscription to Sub-processors List page; deemed accepted if silent |
| Twilio | 30 days (infra) / 10 days (non-infra) | Same as notice period | Subscribe via webpage; "as soon as reasonably practicable" is the general standard, with fixed floors for each category |
| Salesforce | Via subscription (no fixed advance # in body text found) | 30 days | Subscribe on Trust & Compliance page; unresolved → 60-day cure cap → termination + refund |
| Google Cloud | 30 days | 90 days | Website + notify; objection = terminate agreement for convenience |
| AWS | 30 days | Not specified in public text found | Website update + optional email subscription |
| Microsoft | 6 months (general) / 30 days (AI subprocessors, since May 22, 2026) | Same as notice period | Website + Service Trust Portal; terminate without penalty before notice period ends |
| Zoom | 30 business days (standard) / 7 business days after the fact (emergency) | 15 business days | Email opt-in; cure options (cancel/fix/discontinue feature) before termination |
| Slack | Unspecified ("to the extent required under the Agreement") | Not specified | Posts to page; no public numeric commitment found |
| Notion | Unspecified in public text (before authorizing) | Not specified | Email subscribe via specific subject line |
| OpenAI | Unspecified fixed # (blog/in-product/email) | 30 days | Subscribe on Sub-Processor List site; unresolved after 30 days → termination + refund |
| Anthropic | "Reasonable notice" (2023 DPA text — may be outdated) | 10 days | Written objection; good-faith resolution |
| Atlassian | 30 days | Same (concurrent) | Email subscribe; objection's sole remedy = terminate for convenience |
| Datadog | 30 days | 15 days | Email "Change Notice"; cure options → unresolved after 15 days → termination + pro-rata refund |
| Intercom | 20 days | 20 days | Email distribution list opt-in; good faith → unresolved → termination |
| HubSpot | 30 days | 30 days | Opt-in email form; unresolved → suspend/terminate w/o liability, without prejudice to prior fees |
| GitLab | 30 days (pre-engagement) | 30 days | Email subscribe = "written notice"; GitLab won't engage new subprocessor until 30-day window expires |
| Basecamp/37signals | Notice before authorizing (no fixed advance #) | 10 business days | **GitHub page subscription required**; unresolved within 30-day cure cap → termination + refund |
| Fathom (fathom.ai) | 10 business days | 30 days (from notice, can outlast the 10-day advance window) | Common Paper DPA Standard Terms v1.1; good faith |
| Plausible | Unspecified ("via in-app notifications, email or blog") | Unspecified | No fixed day count; customer "may object and terminate" |
| ActiveCampaign | Notice = posting to webpage | 7 days | Short window; deemed consent if silent |
| Postmark (now "AC PM"/ActiveCampaign) | Notice = posting to webpage (+ optional email opt-in) | 7 days | Same template as ActiveCampaign |
| Buttondown | 30 days | Same (concurrent) | Static DPA text; good faith → unresolved → terminate w/o penalty |
| Proton | Unspecified — "per Privacy Policy notification process" | Not specified | No objection right stated explicitly |
| Tuta | Not found | Not found | No public DPA/subprocessor-notice text located |
| OpenProject | 14 days | (implicit — objection possible within the 14-day window) | Official EU-mandated SCC Option 2 template language, filled in with "14 days" |
| Sitecore | Notice = posting to website (30 business days is the *objection* clock start) | 30 business days | Website posting starts objection clock; unresolved after 90-day cure cap → suspend/terminate |

## GDPR Article 28(2) — the statutory baseline (verbatim)

Source: [gdpr-info.eu/art-28-gdpr](https://gdpr-info.eu/art-28-gdpr/) (official EU Regulation text, Art. 28)

> 2. The processor shall not engage another processor without prior specific or general written authorisation of the controller. In the case of general written authorisation, the processor shall inform the controller of any intended changes concerning the addition or replacement of other processors, thereby giving the controller the opportunity to object to such changes.

Key point for the founder: **the statute names no number of days.** Every specific figure below (30 days, 15 days, 10 business days, etc.) is a contractual choice, not a legal minimum. A third-party monitoring service, Registora, states this explicitly:

> "The 30-day subprocessor notice is a myth[.] A widespread belief holds that GDPR requires 30 days' notice before a subprocessor change. It does not. Article 28(2) requires prior notice and a genuine right to object, but it names no number of days - the timeframe is whatever your Data Processing Agreement sets."
Source: [registora.com/guides/the-30-day-notification-myth](https://registora.com/guides/the-30-day-notification-myth)

Registora's site also states the general engagement-mechanics norm assumed across the industry:
> "GDPR Article 28(2) requires you to publish a current list of every subprocessor that touches your customers' personal data, and to notify them at least thirty days before any addition or replacement."
Source: [registora.com](https://registora.com/) (marketing copy, not the statute — treat as a common convention claim, not law)

---

## Stripe

Source: [stripe.com/legal/dpa](https://stripe.com/legal/dpa) — "Last updated: November 18, 2025"

> 3.2 Sub-processors.
> (a) Stripe engages Sub-processors, which may include its Affiliates, as necessary to perform the Services. User consents to Stripe's use of its existing Sub-processors, as set out on the Stripe Sub-processors List, and grants Stripe a general written authorization to engage Sub-processors as necessary to perform the Services. If User subscribes to email notifications at the Stripe Sub-processors List, then Stripe will notify User via email if Stripe intends to add one or more Sub-processors to that list at least 30 days before the changes take effect. User may reasonably object to a change on legitimate grounds within 30 days after User receives notice of the change. User acknowledges that Stripe's Sub-processors are essential to provide the Services and that if User objects to Stripe's use of a Sub-processor, then notwithstanding anything to the contrary in the Agreement (including this DPA), Stripe will not be obligated to provide User the Services for which Stripe uses that Sub-processor.
>
> (b) Stripe will enter into a written agreement with each Sub-processor that imposes on that Sub-processor obligations comparable to those imposed on Stripe under this DPA, including the obligation to implement appropriate Data Security Measures. If a Sub-processor fails to fulfill its data protection obligations under that agreement, Stripe will remain liable to User for the acts and omissions of its Sub-processor to the same extent Stripe would be liable if performing the relevant Services directly under this DPA.

Notably, the DPA defines the list itself as dynamic, not a frozen exhibit:
> "Stripe Sub-processors List" means the list of Stripe's Sub-processors and Affiliates located at www.stripe.com/legal/service-providers, as updated from time to time.

Source: [stripe.com/legal/service-providers](https://stripe.com/legal/service-providers) — "Last updated: December 20, 2025"

> We will periodically update this page to reflect additions and removals to our list of service providers, Sub-processors and Affiliates. If you are a Business User, you may subscribe to receive email notifications of updates to our list of Sub-processors on this page here.
>
> Under the terms of our Data Processing Agreement (DPA), a Business User may reasonably object in writing to the processing of its personal data by a new Sub-processor within 30 days following the update of this page. If a Business User does not object during the 30 day time period, the appointment of the new Sub-processor shall be deemed accepted by the Business User.

Consequence-of-objection note: Stripe's clause is unusual — objecting doesn't create a termination/refund right; it simply means "Stripe will not be obligated to provide User the Services for which Stripe uses that Sub-processor" (i.e., you lose the feature, not a refund path).

---

## Twilio

Source: [twilio.com/en-us/legal/data-protection-addendum](https://www.twilio.com/en-us/legal/data-protection-addendum), Schedule/Section 6 "Sub-Processors"

> 6.1 Authorization for Sub-Processing. Customer hereby provides a general authorization for Twilio to engage third-party sub-processors for the onward processing of Customer Personal Data that Twilio processes as a processor or sub-processor, subject to the following requirements: ... (c) Twilio will remain liable for any breach of this Addendum that is caused by an act, error, or omission of its sub-processors.
>
> 6.2 Current Sub-Processors and Notification of Sub-Processor Changes. Twilio maintains an up-to-date list of its sub-processors available at <https://www.twilio.com/legal/sub-processors>, which contains a mechanism for Customer to subscribe to notifications of new sub-processors or replacement of existing sub-processors. If Customer subscribes to such notifications, Twilio will provide details of any change in its sub-processors as soon as reasonably practicable. With respect to any change in infrastructure providers of the Services, Twilio will provide written notice to Customer as soon as reasonably practicable but not less than thirty (30) days prior to such change. With respect to any change in Twilio's sub-processors that are not infrastructure providers of the Services, Twilio will provide written notice to Customer as soon as reasonably practicable, but not less than ten (10) days prior to such change.
>
> 6.3 Objection Right for Sub-Processors. Customer may object to Twilio's appointment of a new sub-processor or replacement of an existing sub-processor during the applicable notice period set forth in Section 6.2 ..., provided such objection is in writing and based on reasonable grounds relating to data protection. In such an event, Customer and Twilio agree to discuss commercially reasonable alternative solutions in good faith. If Customer and Twilio cannot reach a resolution within the applicable notice period set forth in Section 6.2 ..., Customer may discontinue the use of the affected Services by providing written notice to Twilio. Any discontinued use of the affected Services will be without prejudice to any fees incurred by Customer prior to the discontinued use. If no objection has been raised by Customer prior to the end of the applicable notice period set forth in Section 6.2 ..., Twilio will deem Customer to have authorized the new sub-processor or updated sub-processor, as applicable.

Twilio subprocessors page: "Twilio maintains an up-to-date list of the names and locations of all sub-processors below. Twilio customers may subscribe to notifications of sub-processor changes to receive updates." — [twilio.com/en-us/legal/sub-processors](https://www.twilio.com/en-us/legal/sub-processors)

---

## Salesforce

Source: PDF — [salesforce.com .../data-processing-addendum.pdf](https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/legal/Agreements/data-processing-addendum.pdf)

> 5.2. Current List of Sub-processors and Notification of New Sub-processors. The current list of Sub-processors engaged in Processing Personal Data for the performance of each applicable Service, including a description of their processing activities and countries of location, is listed under the Infrastructure and Sub-processor Documentation which can be found on SFDC's Trust and Compliance webpage at https://www.salesforce.com/company/legal/trust-and-compliancedocumentation/ ("Infrastructure and Sub-processor Documentation"). Customer hereby consents to these Sub-processors, their locations and processing activities as it pertains to their Personal Data. The Infrastructure and Sub-processor Documentation contains a mechanism to subscribe to notifications of new Sub-processors for each applicable Service, and if Customer subscribes, SFDC shall provide notification of a new Sub-processor(s) before authorizing any new Subprocessor(s) to Process Personal Data to provide the applicable Services.
>
> 5.3. Objection Right for New Sub-processors. Customer may object to SFDC's use of a new Sub-processor by notifying SFDC promptly in writing within thirty (30) days of receipt of SFDC's notice in accordance with the mechanism set out in section 5.2. If Customer objects to a new Sub-processor as permitted in the preceding sentence, SFDC will use reasonable efforts to make available to Customer a change in the Services or recommend a commercially reasonable change to Customer's configuration or use of the Services to avoid Processing of Personal Data by the objected-to new Sub-processor without unreasonably burdening Customer. If SFDC is unable to make available such change within a reasonable period of time, which shall not exceed sixty (60) days, Customer may terminate the applicable Order Form(s) with respect only to those Services which cannot be provided by SFDC without the use of the objected-to new Sub-processor by providing written notice to SFDC. SFDC will refund Customer any prepaid fees covering the remainder of the term of such Order Form(s) following the effective date of termination with respect to such terminated Services, without imposing a penalty for such termination on Customer.
>
> 5.4. Liability. SFDC shall be liable for the acts and omissions of its Sub-processors to the same extent SFDC would be liable if performing the services of each Sub-processor directly under the terms of this DPA, unless otherwise set forth in the Agreement.

This is one of the most complete objection→cure→termination→refund chains found in the whole corpus (30-day objection, 60-day cure cap, then termination with pro-rata refund and no penalty).

---

## Google Cloud / Google Workspace

Source: [cloud.google.com/terms/data-processing-addendum](https://cloud.google.com/terms/data-processing-addendum), Section 11 "Subprocessors"

> 11.1 *Consent to Subprocessor Engagement*. Customer specifically authorizes Google's engagement as Subprocessors of those entities disclosed as described in Section 11.2 ... as of the Addendum Effective Date. In addition, without prejudice to Section 11.4 (Opportunity to Object to Subprocessors), Customer generally authorizes Google's engagement of other third parties as Subprocessors ("New Subprocessors").
>
> 11.4 *Opportunity to Object to Subprocessors*.
> a. When Google engages any New Subprocessor during the Term, Google will, at least 30 days before the New Subprocessor starts processing any Customer Data, notify Customer of the engagement (including the name, location and activities of the New Subprocessor).
> b. Customer may, within 90 days after being notified of the engagement of a New Subprocessor, object by immediately terminating the applicable Agreement for convenience:
> i. in accordance with that Agreement's termination for convenience provision; or
> ii. if there is no such provision, by notifying Google.

Google Workspace admin DPA (near-identical language): "When any New Subprocessor is engaged during the Term, Google will, at least 30 days before the New Subprocessor starts processing any Customer Data, notify..." — [admin.google.com/terms/apps/8/1/en/dpa_terms.html](https://admin.google.com/terms/apps/8/1/en/dpa_terms.html)

The Google Cloud subprocessors page confirms the mechanism exists but points readers to the DPA for the actual figures: "Does Google Cloud provide advance notice of changes to the GCP Subprocessor page? Yes. Please refer to the 'Subprocessor' section of the Cloud Data Processing Addendum for more information about what changes we notify and the applicable notice periods." — [cloud.google.com/terms/subprocessors](https://cloud.google.com/terms/subprocessors)

Notable design choice: Google gives no "cure/negotiate" step at all — the only remedy is termination for convenience, but the objection window (90 days) is by far the longest found in this research.

---

## AWS

Source: [aws.amazon.com/compliance/sub-processors](https://aws.amazon.com/compliance/sub-processors/) — "Last Updated: April 13, 2026"

> AWS will update this page at least 30 days before engaging a new sub-processor, and if you subscribe for updates, AWS will notify you by email of changes to this page.

Also from AWS's GDPR DPA (per search-result snippet, not independently re-fetched in full):
> "At least 30 days before AWS engages a Sub-processor, AWS will update the applicable website and provide Customer with a mechanism to obtain notice of that..." — [d1.awsstatic.com/legal/aws-gdpr/AWS_GDPR_DPA.pdf](https://d1.awsstatic.com/legal/aws-gdpr/AWS_GDPR_DPA.pdf)

Gap: the specific objection-window length and consequence-of-objection language in the full AWS GDPR DPA text was not captured verbatim in this pass (the subprocessors page itself doesn't state an objection number).

---

## Microsoft

Two distinct commitments found, plus a **live, dated policy change** that is highly relevant to "update commitments" as a topic:

**1. General Online Services commitment (six months), just narrowed for AI subprocessors to 30 days as of May 22, 2026.** Verbatim quote of the updated addendum text, as reported by PPC Land (secondary source quoting Microsoft's own DPA — flagged as such):

> "Microsoft will give Customer notice and, as applicable, update the website and provide Customer with a mechanism to obtain notice of that update of any new Subprocessor at least 6 months in advance of providing that Subprocessor with access to Customer Data or for subprocessors that support artificial intelligence functionality, 30 days' notice with the ability to disable use of that subprocessor until at least 6 months after notice."

Termination right on objection (same source, quoting the DPA):
> "then Customer may terminate any subscription for the affected Online Service or the applicable Statements of Service for the applicable Professional Service, respectively, without penalty or termination fee by providing, before the end of the relevant notice period, written notice of termination."

Microsoft's own change-log line for this update, per the same article: "Added clarification of subprocessors that support artificial intelligence functionality in the Notice and Controls on use of Subprocessors section" — the article's author notes this "clarification" framing understates that it created a new, faster-moving category.

Source: [ppc.land/microsofts-dpa-update-cuts-ai-subprocessor-notice-to-30-days](https://ppc.land/microsofts-dpa-update-cuts-ai-subprocessor-notice-to-30-days/), published/updated 2026-05-30, describing Microsoft's DPA published 2026-05-22. Primary Microsoft document referenced: [microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA](https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA)

Practical consequence flagged by the article: rejecting a 30-day-notice AI subprocessor can require terminating an entire Microsoft 365 suite subscription if the AI feature is bundled in — "any termination will apply to the entire suite."

**2. Professional Services track (separate, fixed 30 days):**
> "Microsoft may engage new subprocessors and, in accordance with the Microsoft Professional Services Data Protection Addendum, upon request will provide customers notice of any new subprocessor at least 30 days in advance of providing that subprocessor with access to Support and Consulting Data (the "30-day notice period")..."
Source: [download.microsoft.com/.../MSPS Supplier Notification Customer Guidance.pdf](https://download.microsoft.com/download/c/1/2/c1214bc9-86df-47a5-bf54-45f7b7ff7554/MSPS%20Supplier%20Notification%20Customer%20Guidance.pdf) (per search snippet; PDF served as binary and could not be re-verified verbatim in full in this session)

The Microsoft Online Services Subprocessor List itself lives on the Service Trust Portal (login-gated) — [servicetrust.microsoft.com](https://servicetrust.microsoft.com/DocumentPage/8d295fc2-f7d9-4662-8301-99b077fc6b79), described publicly only as: "The Microsoft Online Services Subprocessor List identifies subprocessors authorized to subprocess customer data or personal data in Microsoft Online Services."

---

## Zoom

Source: PDF — [media.zoom.com/download/assets/zoom-global-dpa.pdf](https://media.zoom.com/download/assets/zoom-global-dpa.pdf) — "Zoom Global Data Processing Addendum (November 2024)"

> 5.3 Zoom may remove, replace, or appoint suitable and reliable further subprocessors in accordance with this Section 5.3:
> (a) Zoom shall at least thirty (30) business days before the new subprocessor starts processing any Customer Personal Data notify Customer of the intended engagement (including the name and location of the relevant subprocessor, and the activities it will perform and a description of the Personal Data it will process). To enable such notifications to the email address entered into the submission field.
> (b) In an emergency concerning Service availability or security, Zoom is not required to provide prior notification to Customer but shall provide notification within seven (7) business days following the change in subprocessor.
> In either case, Customer may object to such an engagement in writing within fifteen (15) business days of receipt of the aforementioned notice by Zoom.
>
> 5.4 If Customer objects to the engagement of a new subprocessor, Zoom shall have the right to cure the objection through one of the following options (to be selected at Zoom's sole discretion):
> (a) Zoom cancels its plans to use the subprocessor with regard to Customer Personal Data.
> (b) Zoom will take the corrective steps requested by Customer in its objection (which remove Customer's objection) and proceed to use the subprocessor with regard to Customer Personal Data.
> (c) Zoom may cease to provide, or Customer may agree not to use (temporarily or permanently), the particular aspect of the Service that would involve the use of such a subprocessor with regard to Customer Personal Data. ... of the Agreement with prior written notice. Termination shall not relieve Customer of any fees or charges owed to Zoom for Services provided up to the effective date of the termination under the Agreement.
>
> If Customer does not object to a new subprocessor's engagement within fifteen (15) business days of notice issuance from Zoom, that new subprocessor shall be deemed accepted.

Note: unlike Salesforce/Datadog/OpenAI, Zoom's termination path explicitly does **not** promise a refund of fees already owed.

---

## Slack

Source: [slack.com/policy-archives/subprocessors/2023-04-07](https://slack.com/policy-archives/subprocessors/2023-04-07) — "Effective: April 7, 2023" (archived version; current live page is at slack.com/slack-subprocessors)

> To support delivery of our Services, Slack Technologies, LLC (or one of its Affiliates listed below), may engage and use data processors with access to certain Customer Data (each, a "Subprocessor"). This page provides important information about the identity, location and role of each Subprocessor.
>
> ## Updates
> As our business grows and evolves, the Subprocessors we engage may also change. We will endeavor to provide the owner of Customer's account with notice of any new Subprocessors to the extent required under the Agreement, along with posting such updates here. Please check back frequently for updates.

This is the weakest/vaguest commitment language found among the large vendors — "will endeavor to provide notice... to the extent required under the Agreement" contains no fixed day count and pushes the real commitment (if any) into the separately-negotiated DPA, which was not independently re-fetched with a specific number in this pass.

Slack DPA PDF (older version, 2017) states only that the "List of Current Sub-processors and Notification of New Sub-processors ... is accessible via http://www.slack.com/slack-subprocessors" without a day figure in the snippet captured.

---

## Notion

Source: [notion.com/help/notion-ai-security-practices](https://www.notion.com/help/notion-ai-security-practices)

> **How do I subscribe to new Subprocessor notifications?**
> Customers may sign up to receive notification of new Subprocessors by emailing [email] with the subject "Subscribe to New Subprocessors." Once a customer has signed up to receive new Subprocessor notifications, Notion will provide that customer with notice of any new Subprocessors before authorizing the new Subprocessor to process Customer Data. For additional information, please see our Data Processing Addendum.

Notion's help center repeatedly points to the DPA (hosted at [notion.notion.site/Data-Processing-Addendum-361b540101274b1fa7e16b90402b0d99](https://www.notion.so/Data-Processing-Addendum361b540101274b1fa7e16b90402b0d99)) for the actual day-count, but that page (a Notion-hosted Notion doc) could not be fetched with a plain-text day figure in this session — treat the specific number as **not found**, only the subscription mechanism is confirmed.

---

## OpenAI

Source: [openai.com/policies/data-processing-addendum](https://openai.com/policies/data-processing-addendum/) — "Updated: December 1, 2025" / "Effective: January 1, 2026"

> 2.9 Engagement of Sub-processors. Customer hereby provides a general authorization to OpenAI to engage the Sub-Processors listed in the Sub-Processor List to process Customer Data in connection with the Services. OpenAI will notify Customer of any changes to the Sub-Processor List via blog post, notification within the Services or other reasonable means, or via email if Customer subscribes to email notifications on the Sub-Processor List site. Customer may object to the use of such additional Sub-processor within 30 days of receiving notice of the change by following the instructions set forth in the Sub-Processor List or by contacting privacy@openai.com. In such case, OpenAI will work with Customer to address its concerns and offer commercially reasonable alternatives or solutions. If none of the alternatives or solutions are commercially feasible, in OpenAI's reasonable judgment, or if the objections have not been resolved to the satisfaction of the Parties within 30 days of OpenAI's receipt of Customer's objection notice, then either Party may terminate the Agreement or any Order Forms or usage regarding the Services that cannot be provided without the use of the new Sub-Processor. In such case, Customer will be refunded any applicable pre-paid fees to the extent they cover periods or terms following the date of such termination.
>
> 2.10 Sub-processor obligations. OpenAI shall enter into contractual arrangements with each Sub-Processor that imposes on them obligations comparable to those imposed on OpenAI under this DPA. Subject to the limitations of liability included in the Agreement, OpenAI will remain liable for the acts and omissions of its Sub-Processors to the same extent OpenAI would be liable under this DPA if it performed such acts or omissions itself.

Notice mechanism is unusually flexible/plural ("via blog post, notification within the Services or other reasonable means, or via email") — OpenAI does not commit to a single channel, unlike most peers.

---

## Anthropic

**Caveat: the only full DPA text located dates to September 22, 2023** (a "Toothless" pre-signature template hosted on a third-party asset CDN, not fetched from anthropic.com directly). Anthropic's live Trust Center (trust.anthropic.com/subprocessors and /updates) renders as a JavaScript shell with no static text — noted per instructions and not force-rendered. Treat the clause below as dated; a Hacker News comment thread from March 2026 characterizes "30-day notice" as the general enterprise-SaaS standard Anthropic follows, but this could not be confirmed against current live text.

Source: PDF — [assets-global.website-files.com/.../Toothless-Anthropic_DPA_Sep-22-2023.pdf](https://assets-global.website-files.com/6548404a216c2e42eb79648b/65680354f8f4425cc8a8110c_Toothless-Anthropic_DPA_Sep-22-2023.pdf)

> 4. SUB-PROCESSORS
> 4.1 Customer grants Anthropic the general authorisation to engage the Sub-processors listed in Schedule 4, and any additional Sub-processors in accordance with clause 4.3.
> 4.2 Anthropic will: (i) enter into a written agreement with each Sub-processor imposing data protection obligations that are substantively no less protective of Covered Data than Anthropic's obligations under this DPA; and (ii) remain liable for each Sub-processor's compliance with the obligations under this DPA.
> 4.3 In the event that Anthropic wishes to appoint an additional Sub-processor: (a) Anthropic will provide Customer reasonable notice; and (b) Customer may, on the basis of reasonable data privacy and data security concerns, object to Anthropic's use of such Sub-processor by providing Anthropic with written notice of the objection within ten (10) days of the date of such notice, otherwise the additional Sub-processor shall be deemed approved. In the event Customer objects to Anthropic's use of a new Sub-processor, Customer and Anthropic will work together in good faith to find a mutually acceptable resolution to address any objections raised by Customer.
>
> SCHEDULE 4 — SUB-PROCESSORS: Anthropic's list of sub-processors is available at https://www.anthropic.com/subprocessors

Contemporary secondary reference (Hacker News discussion, March 2026, on an Anthropic subprocessor-list change): "The 30-day notice for customer data subprocessors is fairly standard for enterprise SaaS at this point. Publishing this list proactively. We've..." — [news.ycombinator.com/item?id=47536110](https://news.ycombinator.com/item?id=47536110) (comment, not Anthropic's own text — included only as market color, day-count not independently verified against current Anthropic contract).

Anthropic's live subprocessor-change announcement style (from the Trust Center updates feed, visible via search snippet only): "Anthropic Subprocessors Update. Published May 6, 2026. We've updated our subprocessor list with one additions: TurboPuffer, which provides..." — [trust.anthropic.com/updates](https://trust.anthropic.com/updates) (page itself is a JS shell; this line is a search-engine cache snippet, not independently re-verified).

---

## Atlassian

Source: [atlassian.com/legal/data-processing-addendum](https://www.atlassian.com/legal/data-processing-addendum) — "Effective starting: August 17, 2026"

> **4. Sub-processing**
> 4.1 General Authorisation. By entering into this DPA, Customer provides general authorisation for Atlassian to engage Sub-processors to Process Customer Personal Data. Atlassian must: (i) enter into a written agreement with each Sub-processor imposing data protection terms that require the Sub-processor to protect Customer Personal Data to the standard required by Applicable Data Protection Law and to the same standard provided by this DPA; and (ii) remain liable to Customer if such Sub-processor fails to fulfill its data protection obligations with regard to the relevant Processing activities under the Agreement.
> 4.2 Notice of New Sub-processors. Atlassian maintains an up-to-date list of its Sub-processors here, which contains a mechanism for Customer to subscribe to notifications of new Sub-processors. Atlassian will provide such notice, to those emails subscribed, at least thirty (30) days before allowing any new Sub-processor to Process Customer Personal Data (the "Sub-processor Notice Period").
> 4.3 Objection to New Sub-processors. Customer may object to Atlassian's appointment of a new Sub-processor during the Sub-processor Notice Period. If Customer objects, Customer, as its sole and exclusive remedy, may terminate the applicable Order for the affected Cloud Product and related Support and Advisory Services in accordance with Section 12.2 (Termination for Convenience) of the Agreement.

Atlassian's FAQ on the same page: "Up to date information about our sub-processors is available our sub-processors page, along with a mechanism to sign up for notifications of new sub-processors. Atlassian will notify all subscribed customers of a new sub-processor before authorizing the new sub-processor to process Customer Personal Data."

The list page itself notes an alternative-notice carve-out for pre-GA products: "If a Beta or EAP service uses a new Sub-processor, Atlassian may use an alternative notification mechanism." — [atlassian.com/legal/sub-processors](https://www.atlassian.com/legal/sub-processors)

---

## Datadog

Source: [datadoghq.com/legal/data-processing-addendum](https://www.datadoghq.com/legal/data-processing-addendum/)

> 4. Subprocessors
> 1. **Subprocessor Authorization.** Customer generally authorizes Datadog to engage Subprocessors in accordance with this Section 4 and approves Datadog's use of the Subprocessors listed in the Subprocessors List. Datadog will update the Subprocessors List at least 30 days before appointing a new Subprocessor and will provide Customer with a mechanism to receive notifications of new Subprocessors (a "Change Notice"), which today is available through the Subprocessors List.
> 2. **Objections to Subprocessors.** Customer may object to a new Subprocessor on reasonable grounds related to the protection of Customer Personal Data by sending an email to privacy@datadoghq.com describing its legitimate, good-faith objection within 15 days of a Change Notice (an "Objection Notice"), in which case Datadog may satisfy the objection by (a) not using the new Subprocessor to Process Customer Personal Data; (b) taking corrective steps requested by Customer in its Objection Notice; or (c) ceasing to provide the parts of the Services that involve the new Subprocessor Processing Customer Personal Data, subject to a mutual agreement of the Parties to adjust the remuneration for the Services considering their reduced scope. If none of the options outlined above are reasonably available and Customer's objection has not been resolved to the Parties' mutual satisfaction within 15 days of Datadog's receipt of the Objection Notice, either Party may terminate the affected Order and Datadog will refund to Customer a pro rata share of any unused amounts prepaid by Customer under the applicable Order for the Services on the basis of the remaining portion of the current terms of the Order. If Customer does not provide a timely Objection Notice, Customer will be deemed to have authorized Datadog's use of the Subprocessor and to have waived its right to object.
> 3. **Subprocessor Requirements.** Datadog will enter into a written agreement with each Subprocessor that contains data protection obligations equivalent to those in this DPA. Datadog will be liable for the actions and omissions of its Subprocessors undertaken in connection with Datadog's performance under this DPA to the same extent Datadog would be liable if performing the Services directly.

One of the most granular objection→remedy chains found, including explicit language about renegotiating remuneration if a feature is dropped, and pro-rata (not full) refund on termination.

---

## Intercom

Source: [intercom.com/legal/data-processing-agreement](https://www.intercom.com/legal/data-processing-agreement) — "Last updated April 9, 2025"

> ## 7. Sub-processors
> i. Authorization for Sub-processing. Customer agrees that (a) Intercom may engage Sub-processors as listed at [Sub-processor Page] which may be updated from time to time and Intercom Affiliates; and (b) such Affiliates and Sub-processors respectively may engage third party processors to process Customer Personal Data on Intercom's behalf. ... (c) Intercom will remain liable and accountable for any breach of this DPA that is caused by an act or omission of its sub-processors.
>
> ii. Current Sub-processors and Notification of Sub-processor Additions.
> b. Intercom may, by giving reasonable notice to the Customer, add or replace Sub-processors to the Sub-processor Page. Intercom will notify Customer if it intends to add or replace Sub-processors from the Sub-Processor Page at least twenty (20) days prior to any such changes. To receive such notification, Customers can send an email to dataprotection@intercom.io to join Intercom's distribution list. If Customer reasonably objects to the appointment of a new Sub-processor within twenty (20) days of receiving such notice, on reasonable grounds relating to the protection of the Customer Personal Data, then Intercom will work in good faith with Customer to find an alternative solution. In the event that the parties are unable to reach a mutually acceptable resolution within a reasonable time thereafter, Customer is permitted to terminate the Agreement.

Note: Intercom's termination right has no explicit refund promise attached (unlike Salesforce/OpenAI/Datadog/Basecamp).

---

## HubSpot

Sources: [legal.hubspot.com/sub-processors-page](https://legal.hubspot.com/sub-processors-page) and [legal.hubspot.com/dpa](https://legal.hubspot.com/dpa) — both "Last Modified: April 14, 2026"

Sub-Processors Page:
> 4. UPDATES TO SUB-PROCESSOR PAGE
> Due to the nature of our global business and our ongoing efforts to delight our customers, our Sub-Processors may change from time to time. ... You may subscribe to receive notifications by email if we update this page to add or replace any Sub-Processors, if any of our Sub-Processors materially change the services that they provide, or if they change the country from which they provide them. To subscribe to the notification please complete the form available at https://legal.hubspot.com/subscribe-subprocessor-updates. If you opt-in to receive a notification, we will notify you at least 30 days prior to any such change taking effect.

DPA text (objection clause, from the HubSpot DPA PDF):
> We have currently appointed, as Sub-Processors, the third parties and HubSpot Affiliates listed in Annex 3 to this DPA. You may subscribe to receive notifications by email if we make changes to the HubSpot Sub-Processors Page ... If you opt in to receive such email, we will notify you at least 30 days prior to any such change.
>
> We will give you the opportunity to object to the engagement of new Sub-Processors on reasonable grounds relating to the protection of Customer Personal Data within 30 days of notifying you. If you do notify us of such an objection, the parties will discuss your concerns in good faith with a view to achieving a commercially reasonable resolution. If no such resolution can be reached, we will, at our sole discretion, either not appoint the new Sub-Processor, or permit you to suspend or terminate the affected Subscription Service in accordance with the termination provisions of the Agreement without liability to either party (but without prejudice to any fees incurred by you prior to suspension or termination).

An older archived HubSpot DPA (2018-11-01) used identical 30-day framing, suggesting this term has been stable for years: "Controller the opportunity to object to the engagement of the new sub-Processors within 30 days after being notified."

---

## GitLab

Source: PDF — [handbook.gitlab.com/pdfs/legal/privacy/customer_dpa_5_1_26.pdf](https://handbook.gitlab.com/pdfs/legal/privacy/customer_dpa_5_1_26.pdf) ("customer_dpa_5_1_26" filename suggests a May 1, 2026 version)

> 14. Sub-processors. To the extent that GitLab acts as a Processor:
> a. Customer agrees that GitLab shall be entitled to use the Sub-processors listed at https://about.gitlab.com/privacy/subprocessors/ for the Service. If GitLab wishes to add a new Sub-processor to the list, GitLab will update the list on the website. Customer may subscribe at https://about.gitlab.com/privacy/subprocessors/#sign-up to receive email notifications of updates to the list, which will serve as written notice to Customer. If Customer wishes to object to the approval of a new Sub-processor, meaning an organization or entity not previously listed at https://about.gitlab.com/privacy/subprocessors/, it must provide such objection in writing to GitLab within thirty (30) days after notice has been received. GitLab will not engage a new Sub-processor to Process Customer Personal Data before the expiry of the thirty (30) day objection period, unless Customer has provided earlier written confirmation of no objection. If Customer objects to the change in Sub-processor, the parties will work together in good faith to resolve the objection, including making a commercially reasonable change to Customer's configuration or use of the Services to avoid the Processing of Personal Data by the new Sub-processor. Customer can only object to the addition of a new Sub-processor on the basis that such addition would cause Customer to violate data protection commitments or other applicable legal requirements. If Customer does not object within the referred period the respective Sub-processor shall be considered approved by Customer.

Notably explicit: GitLab states the email notification itself "will serve as written notice to Customer" (directly answering the "does an email/subscription count as formal notice" question) and commits that the **objection period runs before engagement**, not concurrently with it — GitLab will not start using the new subprocessor until the 30 days lapse.

Website page: "Sign Up to be notified of a change to the list." — [about.gitlab.com/privacy/subprocessors](https://about.gitlab.com/privacy/subprocessors/) (page text itself is minimal; the day-count only appears in the DPA, not the list page).

---

## Basecamp / 37signals

Source: PDF — [37signals.com/policies/privacy/regulations/dpa/Data_Processing_Addendum_current.pdf](https://37signals.com/policies/privacy/regulations/dpa/Data_Processing_Addendum_current.pdf) — "Last updated September 15, 2025"

> 5. SUBPROCESSORS
> 5.2. List of Current Subprocessors and Notification of New Subprocessors. 37signals shall make available to Customer the current list of Subprocessors for the 37signals Services on 37signals's website. 37signals shall provide notification to the Customer of a new Subprocessor(s) before authorizing any new Subprocessor(s) to Process Personal Data in connection with the provision of the applicable Services. **Customers must subscribe to the 37signals Subprocessor Github page for notification of Subprocessor changes.**
> 5.3. Objection Right for New Subprocessors. Customer may object to 37signals's use of a new Subprocessor by notifying 37signals promptly in writing within ten (10) business days after receipt of 37signals's notice of a new Subprocessor in accordance with Section 5.2. In the event Customer objects to a new Subprocessor, 37signals may, at its option, use reasonable efforts to make available to Customer a change in the Services or recommend a commercially reasonable change to Customer's configuration or use of the Services to avoid Processing of Personal Data by the new Subprocessor without unreasonably burdening the Customer. If 37signals is unable to make available such change within a reasonable period of time, which shall not exceed thirty (30) days, Customer may terminate with written notice to 37signals the applicable Agreement solely with respect to Services that cannot be provided by 37signals without use of the new Subprocessor. As of the effective date of termination, 37signals will refund Customer any prepaid fees such terminated Services covering the remainder of the term and will not penalize Customer for such termination.

The GitHub-based subscription mechanism is unique among everything reviewed — a plain-language, developer-native notification channel that fits Basecamp's "no corporate speak" brand voice.

Per-product subprocessor pages exist separately for each 37signals product (Basecamp, HEY, Highrise, Campfire, Backpack), e.g. [37signals.com/policies/privacy/basecamp-subprocessors](https://37signals.com/policies/privacy/basecamp-subprocessors/): "We establish GDPR-compliant data processing agreements with each subprocessor, extending GDPR safeguards everywhere personal data is processed."

---

## Fathom (fathom.ai — meeting-recording AI notetaker; distinct from Fathom Analytics)

Source: [fathom.ai/dpa](https://www.fathom.ai/dpa) — "Last Updated: May 5, 2026"

Built on the **Common Paper DPA Standard Terms v1.1** (an open, reusable legal template — worth flagging to a small-SaaS founder as a starting point rather than drafting from scratch):

> 2.6. Subprocessors.
> 1. Provider will not provide, transfer, or hand over any Customer Personal Data to a Subprocessor unless Customer has approved the Subprocessor. The current list of Approved Subprocessors includes the identities of the Subprocessors, their country of location, and their anticipated Processing tasks. Provider will inform Customer at least 10 business days in advance and in writing of any intended changes to the Approved Subprocessors whether by addition or replacement of a Subprocessor, which allows Customer to have enough time to object to the changes before the Provider begins using the new Subprocessor(s). Provider will give Customer the information necessary to allow Customer to exercise its right to object to the change to Approved Subprocessors. Customer has 30 days after notice of a change to the Approved Subprocessors to object, otherwise Customer will be deemed to accept the changes. If Customer objects to the change within 30 days of notice, Customer and Provider will cooperate in good faith to resolve Customer's objection or concern.

Note the internal tension worth flagging to the founder: the *advance* notice before use is only 10 business days, but the *objection* window is 30 days — meaning Fathom may already be using the new subprocessor before the objection window closes, unless "at least 10 business days advance" is read generously. This is a template quirk, not necessarily intentional.

Attribution footer: "Common Paper DPA Standard Terms Version 1.1 are available at commonpaper.com/standards/data-processing-agreement/1.1 and are used under CC BY 4.0."

---

## Fathom Analytics (privacy-first web analytics — separate company from Fathom Video above)

Source (Trust Center): [trust.fathom.video](https://trust.fathom.video/)

> We will use this section to notify customers of any changes to our subprocessors. By subscribing to Trust Center updates, you will automatically receive notifications whenever we add, remove, or modify subprocessors that process customer data.

No specific day-count was located for Fathom Analytics' own DPA (its dedicated legal document was not independently re-fetched with a number in this session — flagged as a gap). The notification mechanism (Trust Center subscription) is confirmed.

---

## Plausible Analytics

Source: [plausible.io/dpa](https://plausible.io/dpa) — "Last updated: March 2026" (states "Clarifications only. No material changes to data processing.")

> Processor's obligations with respect to the controller
> - Plausible Analytics uses subprocessors where necessary. These subprocessors are bound by data protection agreements and may process data only to provide the services Plausible Analytics has retained them for.
> - Plausible Analytics will notify the customer of changes to subprocessors via in-app notifications, email or blog. The customer may object and terminate the agreement if necessary.

This is a clear example of the "no fixed day count" pattern — deliberately loose language, multi-channel notice, objection right stated but undefined in duration or process. Useful contrast case: a privacy-forward, EU-hosted, open-source company whose actual subprocessor-change mechanics are looser than several larger SaaS vendors reviewed here.

---

## Postmark / ActiveCampaign

Postmark was acquired by / operates under ActiveCampaign, LLC ("AC PM" in its own DPA text), and both products share nearly identical subprocessor language.

Source: [postmarkapp.com/dpa](https://postmarkapp.com/dpa) — "Effective November 17, 2025" (for customers who signed up on/after December 10, 2024; an older DPA version applies to earlier customers)

> 4. **Sub-processors.** AC PM will not engage another processor to Process Personal Information on behalf of User for the purpose of fulfilling AC PM's obligations with respect to the provision of the Service under the Terms (a "Sub-processor") without authorization from User. AC PM will be responsible to User for any material failure of a Sub-processor to fulfill AC PM's data protection obligations as set forth in this DPA. User hereby provides its general written authorization for AC PM to engage Sub-processors. AC PM will notify User of the appointment of any new Sub-processors by way of updating AC PM's Sub-processor webpage located at https://postmarkapp.com/eu-privacy#sub-processors ... In addition, User may subscribe to receive email notifications from AC PM about the appointment of any new Sub-processors by completing the form available via the Sub-processor Webpage. **If within 7 days of AC PM notifying User, User does not notify AC PM in writing of any objections** (on reasonable grounds relating to the protection of Personal Information) to the appointment, it will be deemed that User has consented to the appointment.

Source: [activecampaign.com/legal/dpa](https://www.activecampaign.com/legal/dpa) — "Last Updated: April 10, 2026" — the parent-brand version, essentially identical wording:

> 4. **Sub-processors.** Company will not engage another processor to Process Personal Information on behalf of Client for the purpose of fulfilling Company's obligations with respect to the provision of the Services under the Agreement (a "Sub-processor") without authorization from Client. ... Client hereby provides its general written authorization for Company to engage Sub-processors. Company will notify Client of the appointment of any new Sub-processors by way of updating Company's Sub-processor webpage located at https://www.activecampaign.com/legal/subprocessors ... If within 7 days of Company posting such update, Client does not notify Company in writing of any objections (on reasonable grounds relating to the protection of Personal Information) to the appointment, it will be deemed that Client has consented to the appointment.

The ActiveCampaign/Postmark **7-day** objection window is the shortest fixed number found in this research (tied only by the untimed-but-implicitly-fast Illumio/general-ToU pattern). Also notable: for ActiveCampaign, **posting the webpage update is itself the notice trigger** — the 7-day clock starts at "Company posting such update," not at email receipt, meaning customers who don't check the page or subscribe could miss the window without any individualized notice.

ActiveCampaign's DPA also carries a blunt disclaimer, itself of interest to the "accuracy disclaimer" theme even though it's about the DPA generally rather than the subprocessor list specifically:
> 11. **DISCLAIMER.** COMPANY MAKES NO REPRESENTATION OR WARRANTY THAT THIS ADDENDUM IS LEGALLY SUFFICIENT TO MEET CLIENT'S NEEDS UNDER APPLICABLE LAW... THE PARTIES AGREE THAT THERE WILL BE NO PRESUMPTION THAT ANY AMBIGUITIES IN THIS ADDENDUM WILL BE CONSTRUED OR INTERPRETED AGAINST THE DRAFTER.

---

## Buttondown

**Best "small privacy-forward SaaS, plain-language, describe-and-evidence" example found, including a real correction event.**

Source: [buttondown.com/legal/data-processing-agreement](https://buttondown.com/legal/data-processing-agreement) — metadata shows "Last updated: 2026-03-17 / First published: 2025-07-05"

> ## 5. Sub-processors
> 5.1 The Data Controller provides general authorization for the Data Processor to engage sub-processors.
> 5.2 The Data Processor shall inform the Data Controller of any intended changes concerning the addition or replacement of sub-processors, providing at least 30 days' notice. The Data Controller may object to the change within that period. If the Data Controller objects on reasonable grounds relating to data protection, the parties shall discuss the concern in good faith; if no resolution is reached, the Data Controller may terminate the affected services without penalty.
> 5.3 The Data Processor shall ensure sub-processors are bound by data protection obligations no less protective than those in this DPA.
> 5.4 A current list of sub-processors is maintained at buttondown.com/legal/subprocessors.

Note the clause 5.2 phrasing ("intended changes concerning the addition or replacement of sub-processors") is a near word-for-word lift from GDPR Art. 28(2) itself ("any intended changes concerning the addition or replacement of other processors") — a clean, minimal-risk drafting approach a solo founder could imitate directly.

**Real-world correction event** (directly responsive to the errors/omissions research angle): Source: [buttondown.com/blog/2026-03-16-legal-docs-refresh](https://buttondown.com/blog/2026-03-16-legal-docs-refresh) — "A spring cleaning for our legal docs," published March 16, 2026, by founder Justin Duke:

> **tl;dr**
> None of the below changes reflect any shift in our stance on anything: we just clarified some outdated legalese, removed incorrect info (such as boilerplate copy about "sharing with third-party advertising companies", which we've never done), and pulled out our subprocessors into a formal table.
>
> We just pushed a round of updates to our legal pages — partly prompted by good feedback from a customer working through GDPR compliance on their end, and partly because some of these docs were overdue for a refresh.
>
> ## Sub-processor list
> We added two missing entries to our sub-processor list: **Stripe** (payment processing) and **Seline** (privacy-focused analytics, which replaced Vercel Analytics earlier this year).
>
> ## GDPR compliance page
> The GDPR page previously said data was only shared "for the purposes of sending your newsletter" — but sub-processors like AWS, Cloudflare, and Sentry aren't really about newsletter delivery. We updated the language to "providing the service" and linked directly to the sub-processor list and DPA.
>
> If you're working through your own GDPR compliance and something's missing or unclear, let us know — this latest round of updates came directly from a customer asking good questions.

This is exactly the kind of transparent, low-drama "we found and fixed omissions in our subprocessor list" incident the research brief asked for — a real small SaaS admitting its list was incomplete (missing Stripe and its own analytics vendor), triggered by a customer's compliance review, fixed without any framing of fault or crisis.

---

## Proton

Source: [proton.me/legal/dpa](https://proton.me/legal/dpa) — "Last modified: February 10, 2026"

> ## 5. Subprocessing
> Subject to this Agreement, the Company grants general authorization to the Processor to engage Subprocessors and disclose or transfer Company Personal Data to them. The Company acknowledges and approves the list of Subprocessors outlined in the Processor's Privacy Policy, understanding that this list may be updated by the Processor regularly, in which case the company shall be informed by the Processor according to the Privacy Policy notification process. Furthermore, the Company authorizes the Processor to disclose and transfer Personal Data to any company within its corporate group.
>
> Processor ensures that Subprocessors are subject to an agreement with Processor no less restrictive and protective than the present Agreement with respect to the protection of Company Personal Data to the extent applicable to the nature of the services provided by the Subprocessor.

Notable gap: **no fixed day count, no explicit objection right, no termination/refund consequence stated** — Proton's DPA defers entirely to an undefined "Privacy Policy notification process" for subprocessor changes. This is surprising for a privacy-focused company and worth flagging directly to the founder as a contrast case: reputation for privacy does not automatically mean tighter subprocessor-notice contract language.

---

## Tuta (Tutanota)

**Not found.** Extensive searching (multiple query variations: "Tuta subprocessors list", "Tuta DPA GDPR", "Tuta support GDPR subprocessors list email") turned up only third-party GDPR-scorecard summaries (e.g., scan.meetergo.com's generic statement that "Tuta is an EU/EEA-based provider... check the subprocessor list") and general Tuta support/blog pages with no subprocessor-specific legal text. No dedicated Tuta subprocessor list page or DPA subprocessor clause was located or fetched. If this is needed for the corpus, a follow-up should try Tuta's business/enterprise plan pages directly (tuta.com/business or similar) rather than the general marketing/support site.

---

## OpenProject

**High-value "describe-and-evidence, official EU template" example**, as flagged in the task brief — OpenProject's DPA is not custom-drafted prose but the literal EU Commission-mandated Controller-to-Processor Standard Contractual Clauses (per Art. 28(7) GDPR, EU Decision 2021/915), with the blanks filled in.

Source: [openproject.org/legal/data-processing-agreement](https://www.openproject.org/legal/data-processing-agreement/) — "Last updated: 2024-03-28"

> **Data processing agreement in accordance with the EU standard contractual clauses pursuant to Article 28(7) GDPR, EU Decision 2021/915**
>
> #### 7.7. Use of sub-processors
> (a) OPTION 2: GENERAL WRITTEN AUTHORISATION: The processor has the controller's general authorisation for the engagement of sub-processors from an agreed list. The processor shall specifically inform in writing the controller of any intended changes of that list through the addition or replacement of sub-processors **at least 14 days in advance**, thereby giving the controller sufficient time to be able to object to such changes prior to the engagement of the concerned sub-processor(s). The processor shall provide the controller with the information necessary to enable the controller to exercise the right to object.
> (b) Where the processor engages a sub-processor for carrying out specific processing activities (on behalf of the controller), it shall do so by way of a contract which imposes on the sub-processor, in substance, the same data protection obligations as the ones imposed on the data processor in accordance with these Clauses. ...
> (e) The processor shall agree a third party beneficiary clause with the sub-processor whereby - in the event the processor has factually disappeared, ceased to exist in law or has become insolvent - the controller shall have the right to terminate the sub-processor contract and to instruct the sub-processor to erase or return the personal data.

The **"14 days"** figure is the blank the EU's own official template leaves open for the parties to fill in ("OPTION 2: GENERAL WRITTEN AUTHORISATION" is verbatim boilerplate from the European Commission's Implementing Decision 2021/915 SCC text) — this is a genuinely useful reference point for a small founder: it shows what "filling in the government's own form" looks like in practice, and that 14 days is a real, currently-used choice (shorter than the more common 30-day convention).

List of sub-processors is a separate page incorporated by reference: [openproject.org/legal/data-processing-agreement/sub-processors](https://www.openproject.org/legal/data-processing-agreement/sub-processors/) — "Last updated: 2026-05-18" — "We operate the OpenProject Enterprise cloud OpenProject.eu. In this SaaS infrastructure, all sub-processors are based in the EU."

---

## Sitecore

**Best example of the "does posting to the site alone constitute notice" question being answered explicitly.**

Source: [sitecore.com/legal/dpa](https://www.sitecore.com/legal/dpa) — "SITECORE DATA PROCESSING ADDENDUM v 5.2 (June 2026)"

> **4. SUBPROCESSING**
> 4.1 Authorized Subprocessors. Customer agrees that in order to provide the Services, Sitecore may engage Subprocessors to process Customer Data. A list of Sitecore's current authorized Subprocessors is found in Annex B. Sitecore maintains a current list of its Subprocessors on its website (support.sitecore.com/...) and will post notifications of any new or replacement Subprocessors, prior to the use or replacement of Subprocessors. To receive these notifications by email, Customer can subscribe at the following webpage [contract-notification-hub].
>
> 4.2.5 **Objection Right for new Subprocessors**: If Customer has a reasonable basis relating to privacy or data security to object to Sitecore's use of a new or replacement Subprocessor, Customer shall notify Sitecore promptly in writing **within 30 business days after such notice being made by Sitecore on its website** of a new or replacement Subprocessor. In the event Customer objects to any new Subprocessor(s) on such grounds, Sitecore will use reasonable efforts to work in good faith with Customer to find an acceptable, commercially reasonable, alternate solution. If the Parties are not able to agree to an alternate solution within a reasonable time (**no more than 90 days** from Sitecore's receipt of notice of Customer's objection), Sitecore will either not appoint or replace the Subprocessor or, if this is not possible, Customer may suspend or terminate the applicable Order for Services in respect only to the specific Services which cannot be provided by Sitecore without the use of the objected-to new Subprocessor, by providing written notice to Sitecore and without prejudice to any fees incurred by Customer prior to suspension or termination.

The clock explicitly starts from **website posting**, not from individualized email receipt — the email subscription is offered purely as a convenience, but the 30-business-day objection period is measured from "such notice being made by Sitecore on its website." This directly confirms, for at least one major vendor, that posting to the page is legally sufficient notice on its own; subscribing is optional and doesn't change the clock.

Sitecore's own FAQ frames this plainly: "Sitecore's subprocessors are listed in Annex B of the DPA. Customers can sign up to be notified of changes to the subprocessor list. While customers can object to new subprocessors, Sitecore ensures all subprocessors provide at least the same level of protection as outlined in the DPA."

---

## Emergency / urgent-replacement carve-outs (cross-vendor pattern)

Several vendors use near-identical "as soon as reasonably practicable" boilerplate for urgent subprocessor swaps, suggesting a shared template lineage:

> Zoom: "In an emergency concerning Service availability or security, Zoom is not required to provide prior notification to Customer but shall provide notification within seven (7) business days following the change in subprocessor."
Source: [media.zoom.com/download/assets/zoom-global-dpa.pdf](https://media.zoom.com/download/assets/zoom-global-dpa.pdf)

> Asana: "If Customer subscribes to receive updates available on Asana's Subprocessors page, Customer will be automatically notified of new Subprocessors ten (10) business days before Asana authorizes such Subprocessor to process Customer Personal Data (or in the case of an emergency, as soon as reasonably practicable)."
Source: [asana.com/terms/data-processing](https://asana.com/terms/data-processing) (per search snippet)

> Manychat: "If Manychat reasonably believes that engaging a new Sub-processor and providing access to Customer Content on an expedited basis is necessary to protect the confidentiality, integrity or availability of the Customer Content or avoid material disruption to the Service, Manychat will give such notice as soon as reasonably practicable."
Source: [manychat.com/legal/dpa](https://manychat.com/legal/dpa) (per search snippet)

> Matter: "Matter may replace a Subprocessor if the need for the change is urgent and necessary to provide the Services. In such instance, Matter shall notify Customer of the replacement as soon as reasonably practicable, and Customer shall retain the right to object to the replacement Subprocessor."
Source: [matterapp.com/legal/dpa](https://matterapp.com/legal/dpa) (per search snippet)

> Maestro (mighty-by-maestro.notion.site): "Maestro will promptly (and in any event, thirty (30) days before a new Subprocessor is scheduled to begin Processing Personal Data) provide notice to Customers by updating the aforementioned subprocessor list(s) regarding any such new Subprocessor prior to its Processing of Personal Data, unless exigent circumstances (such as the failure of an [existing subprocessor])..."
Source: search snippet only, page not independently re-fetched in full.

Twilio's own emergency posture is baked into its general standard rather than a separate carve-out: "Twilio will provide details of any change in its sub-processors **as soon as reasonably practicable**" is the umbrella promise, with 30/10-day floors layered on top for the two subprocessor categories (see Twilio section above).

---

## Errors, omissions, discrepancies, and "which document controls" (the rarest angle)

This is the thinnest area of the entire corpus. Findings:

**1. General website-ToU disclaimer appearing on a subprocessor list page (Illumio).** Source: [illumio.com/legal/sub-processor-list](https://www.illumio.com/legal/sub-processor-list) — this disclaimer is part of Illumio's general Website Terms of Use, which is displayed on the same page as the sub-processor list (not a subprocessor-specific clause, but it does functionally cover that content):

> "We may revise these Terms of Use at any time by amending this page. You should check this page from time to time to take notice of any changes that we make; as such changes will be binding upon you. No notice of any changes shall be given. We may update the Site from time to time, and may change the content at any time. **We do not guarantee that our Site or any content on it will be free from errors or omissions.** We make no promise that the Site will always be maintained with the same DNS names, IP addresses, authentication methods or URLs, or that it will always be available and uninterrupted."

This is boilerplate general-website language, not a subprocessor-specific accuracy clause — but it is exactly the kind of blanket disclaimer that, read literally, would cover errors in the sub-processor table itself. Worth flagging to the founder as the *type* of clause that exists, while noting it wasn't purpose-drafted for this content.

**2. "DPA controls over Agreement" precedence clauses are everywhere — but these are almost always about DPA-vs-main-contract conflicts, NOT about DPA-text-vs-published-list conflicts.** Examples of the (different, more common) pattern found via search:
> x.ai: "If and to the extent that more specific terms of this DPA conflict with the terms of the Agreement, the more specific terms of this DPA shall control."
> Multiple SEC-filed vendor contracts and small-SaaS DPA templates (invoicedataextraction.com, carbontool.com, aigencorp.com) use near-identical "in case of conflict... the DPA controls" language.
None of these address what happens if the *published subprocessor list* itself disagrees with what the *DPA text* says about it — that specific conflict-of-authority question was not found addressed anywhere in this research.

**3. The dominant real-world answer is structural, not explicit: nearly every DPA defines "the list" as the live webpage, updated "from time to time," and treats the DPA's own subprocessor-related text as a pointer, not a record.** E.g., Stripe: "'Stripe Sub-processors List' means the list of Stripe's Sub-processors and Affiliates located at www.stripe.com/legal/service-providers, **as updated from time to time**." Sitecore's clock starts from "notice being made ... on its website," not from any static DPA exhibit. This means, in practice, **the live website is functionally authoritative for "what is the current list"** for nearly all vendors reviewed — there is no parallel "signed" list to conflict with. The corollary gap: none of the vendors researched publish a stated correction process for when the live page itself contains a mistake (wrong country, stale entry, missing entry) — Buttondown's blog post (above) is the only found instance of a company transparently narrating a correction, and it did so voluntarily via a blog post, not via a contractually defined correction mechanism.

**4. No further public "incident" of a company being caught with a wrong/stale subprocessor list was found** beyond the Buttondown self-reported example. Searches for "we incorrectly listed," "we mistakenly," and "subprocessor list corrected" surfaced no other genuine SaaS-vendor incident — only irrelevant software-changelog and legal-boilerplate noise.

---

## Not found / gaps

- **Tuta (Tutanota):** No subprocessor list, DPA subprocessor clause, or notice-window language located anywhere on tuta.com or in search results. Needs a follow-up hitting Tuta's business/enterprise-specific pages directly.
- **AWS:** Objection-window length and the full consequence-of-objection clause (cure/termination/refund) were not captured verbatim — only the 30-day advance-notice commitment on the public subprocessors page was confirmed. The full AWS GDPR DPA PDF exceeded fetch size limits and was not re-queried for this specific clause.
- **Slack:** No fixed numeric notice or objection commitment found anywhere in public text (archived subprocessors page uses only "to the extent required under the Agreement" language); the live (non-archived) DPA was not independently fetched with a number.
- **Notion:** Subscription mechanism confirmed (email with subject line "Subscribe to New Subprocessors"), but no specific day-count for advance notice or objection window was found in the fetchable help-center text; the actual DPA (hosted as a Notion page) was not successfully parsed for a number.
- **Anthropic:** Only a September 2023 DPA snapshot was available (10-day objection window, "reasonable notice" for advance warning — no fixed day floor). Anthropic's live Trust Center is a JavaScript-rendered shell and could not be read directly; current commitments may differ from the 2023 text. This is a meaningful data-freshness gap given Anthropic is a named target.
- **Fathom Analytics (analytics product, not Fathom Video/meeting notetaker):** Notification mechanism (Trust Center subscription) confirmed; no specific day-count located for its own DPA text.
- **Google Workspace vs. Google Cloud:** Treated as sharing the same DPA framework (both point to the same "Cloud Data Processing Addendum" family) — a small discrepancy in exact identical wording between the consumer/Workspace admin DPA and the Cloud DPA was not fully reconciled; both quote "at least 30 days," so this is likely immaterial.
- **A genuine third-party-reported incident of a SaaS vendor being caught with an inaccurate/stale subprocessor list** (as opposed to a vendor's own voluntary correction announcement) was not found. Only the Buttondown self-reported "spring cleaning" blog post qualifies, and it was framed as good customer feedback rather than a complaint or incident.
- **A contractual clause explicitly resolving "does the DPA text or the live webpage control if they conflict"** (specific to subprocessor lists, not general DPA-vs-Agreement precedence) was not found at any vendor. This appears to be a genuine, structural gap across the industry, not a research miss — the near-universal design choice (DPA defines "the list" as *whatever the live URL currently shows*) makes the question largely moot by definition, since there is rarely a separate static list to conflict with.
