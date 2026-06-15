# Terms of Service Review Tasks

Generated: 2026-05-31
Updated: 2026-05-31
Source: onetime-terms-of-service-notes.txt

---

## Internal Inconsistencies

These are cross-reference or logical conflicts within the document:

### IC-1: GDPR Controller Claim (Line 84) ✅ DONE
- **Location:** Section B.3 "Member data"
- **Issue:** Document states Organization is "controller" for member data. This is factually incorrect — Onetime Secret remains the controller; Organization is a structural grouping.
- **Fix:** Clarify that Onetime Secret is the data controller; Organization provides administrative grouping.
- **Resolution:** Line 84 now references DPA for data processing roles instead of claiming Organization is controller.

### IC-2: Authentication Methods vs Configuration (Lines 89, 98) ⚠️ PARTIAL
- **Location:** Section B.4 "Authentication Methods"
- **Issue:** Line 89 says "Depending on your region and your Organization's configuration" but line 98 says "may vary by region, by plan tier, and over time" — no mention of org configuration.
- **Fix:** Make consistent. Either both mention org configuration or separate the concepts properly.
- **Resolution:** Mostly fixed. Line 89 mentions org configuration; line 99 treats "over time" as separate concept. Minor inconsistency remains but acceptable.

### IC-3: API Resale Redundancy (Section H vs Section C.7) ✅ DONE
- **Location:** Section C.7 "Excessive Use" vs Section H "API Terms"
- **Issue:** Notes mention adding API plan text to C.7, but H already says "We may offer subscription-based access to our API for users who require high-throughput access or whose use would otherwise resemble resale of our Service."
- **Fix:** Reference Section H from C.7 instead of duplicating language.
- **Resolution:** C.7 (lines 193-194) now references Section H for API-specific plans.

### IC-4: Global Elite Cryptographic Detail Promise (Line 120) ✅ DONE
- **Location:** Section B.6 "Data Retention and Security"
- **Issue:** States Global Elite "may receive additional cryptographic detail in their separate agreement" — this creates a dependency on a document that may not exist for every customer.
- **Fix:** Soften language or move to a general statement elsewhere to avoid stale cross-references.
- **Resolution:** Line 121 now says "Additional detail is available upon request for customers with dedicated deployment arrangements."

---

## TODO Items

### TODO-1: Organization Account Limits ✅ DONE
- **Section:** B.2 "Account Requirements"
- **Note:** Document said "one free Organization account per legal entity." Reality: up to 5 organizations per account owner, more by request.
- **Action:** Verify this limit and update text to match actual enforcement.
- **Priority:** High
- **Resolution:** Line 72 updated to "up to five Organization accounts" with additional by request.

### TODO-2: Admin vs Owner Privileges ✅ DONE
- **Section:** B.3 "Roles"
- **Note:** Document conflates admin and owner access. Admins have fewer privileges per `lib/onetime/models/organization_membership.rb`.
- **Action:** Differentiate owner vs admin privileges clearly, referencing entitlement definitions.
- **Priority:** High
- **Resolution:** Line 82 now clearly differentiates: "Owners have access to... billing, SSO... Administrators have access to audit logs, member management... but cannot modify billing or SSO."

### TODO-3: MFA in Authentication List ✅ DONE
- **Section:** B.4 "Authentication Methods"
- **Note:** MFA is listed as a "way to sign in" — MFA is a second factor, not a sign-in method itself.
- **Action:** Restructure the bullet points. Separate primary authentication methods from MFA/recovery.
- **Priority:** Medium
- **Resolution:** Lines 91-99 restructured. MFA moved to separate paragraph (line 97) as optional second factor.

### TODO-4: Authentication Availability Wording ✅ DONE
- **Section:** B.4 (Line 98)
- **Note:** "The specific authentication methods available may vary by region, by plan tier, and over time" — contradicts earlier mention of org configuration.
- **Action:** Rewrite to include org configuration; make "over time" its own sentence.
- **Priority:** Medium
- **Resolution:** Line 99 rewritten: "may change over time" as separate concept from availability factors.

### TODO-5: Service Usage Limits / API Exploitation ✅ DONE
- **Section:** C.4 "Service Usage Limits"
- **Note:** Current text prohibits reproducing/reselling "any portion of the Service" — but API integrations serving customers is legitimate. Objection is to reselling custom domains or domain-specific features without permission.
- **Action:** Narrow scope to specify what cannot be resold (domain-specific features) vs what can (API integration).
- **Priority:** High
- **Resolution:** Lines 166-170 now split into "Permitted API integration" (allowed) vs "Prohibited resale of domain-specific features" (Custom Domains, Verified Email, Homepage Secrets, SSO).

### TODO-6: Scraping Policy Clarification ✅ DONE
- **Section:** C.5 "Scraping"
- **Note:** Allow scraping for documentation on docs.onetimesecret.com/.dev, blog, etc. Prohibit scraping regional subdomains.
- **Action:** Add explicit allowance for documentation domains; explicitly prohibit scraping regional environments (eu., ca., etc.).
- **Priority:** Medium
- **Resolution:** Lines 178-182 explicitly allow docs/dev/blog scraping for AI training and indexing; prohibit regional subdomain scraping.

### TODO-7: Excessive Use — Paid Plans Statement ✅ DONE
- **Section:** C.7 "Excessive Use on Free Services"
- **Note:** Should include statement for paid plans: no specific limits enforced but usage monitored.
- **Action:** Add paragraph for paid plan monitoring. Reference Section H for API-specific plans rather than duplicating.
- **Priority:** Medium
- **Resolution:** Lines 193-194 add paid plan paragraph with reference to Section H for API-specific options.

### TODO-8: Secret Content Access Exception ✅ DONE
- **Section:** D.4 "Treatment of Secret Content"
- **Note:** "We do not access, read, scan, categorize, or analyze Secret Content" — should we add exception for explicit owner permission (debugging, demonstration)?
- **Action:** Consider adding: "except with explicit permission from the content owner (including org owner on behalf of members) for debugging or demonstration purposes." Use standard legal language.
- **Priority:** Medium — needs legal review
- **Resolution:** Line 224 adds detailed exceptions: (a) owner consent; (b) org owner direction for compliance/security; (c) debugging/troubleshooting by OTS personnel under confidentiality; (d) secrets addressed to OTS.

### TODO-9: Homepage Secrets Naming / Feature Details ✅ DONE
- **Section:** E.2 "Domain-Specific Features"
- **Note:** "Homepage Secrets" — how to shorten? Avoid tying specific feature details to legal document. Each feature should preface with "Where/when enabled."
- **Action:** Generalize feature descriptions; add "Where enabled" prefix to each. Keep details on product pages, not ToS.
- **Priority:** Low
- **Resolution:** Section E.2 (lines 249-258) generalized with "Availability and configuration options are described at... This is not an exhaustive list."

### TODO-10: Trademark "Protected" vs "Registered" ⚠️ ACCEPTABLE
- **Section:** G.2 "Trademarks"
- **Note:** Document calls them "protected trademarks" — can we use this term for unregistered marks?
- **Action:** Verify trademark status. If unregistered, use "trademarks" without "protected" or specify common law protection.
- **Priority:** Medium — needs legal review
- **Resolution:** Line 290 now uses "protected under common law" — accurate for unregistered marks. Wording is defensible but optional legal review remains available.

### TODO-11: Stripe Billing Verification ✅ DONE
- **Section:** I.2 "Upgrades, Downgrades, and Changes"
- **Note:** CAREFULLY verify statements match actual Stripe integration behavior.
- **Action:** Audit each bullet against Stripe proration rules and current implementation.
- **Priority:** High
- **Resolution:** Lines 331-335 revised to match actual `create_prorations` behavior:
  - Trial billing: clarified trials depend on Stripe Price config (checkout doesn't set `trial_period_days`)
  - Monthly→yearly: removed "at next billing date" — proration is immediate, billing cycle resets to change date
  - Upgrades: clarified "takes effect immediately; prorated charges on next invoice" (auto-collected in practice)
  - Proration delegation: accurate, pure Stripe handling
- **Sources:** [Stripe change-price docs](https://docs.stripe.com/billing/subscriptions/change-price), [Stripe trials docs](https://docs.stripe.com/billing/subscriptions/trials)

### TODO-12: Multi-Tenant Plan Name Definitions ✅ DONE
- **Section:** I.3 "Billing Schedule and Refunds"
- **Note:** May introduce Identity, Team, Identity Lite, Team Lite, etc. Need clarity that "Identity Plus" and "Team Plus" refer to all variants.
- **Action:** Add definition in Section A or use "Identity Plan (and any successor tiers)" pattern.
- **Priority:** Medium
- **Resolution:** Line 341 uses "(such as Identity Plus, Identity Lite, Team Plus, Team Lite, and any successor or variant multi-tenant tiers)" pattern.

---

## Summary

| Category | Total | Done | Partial | Needs Verification |
|----------|-------|------|---------|-------------------|
| Internal Inconsistencies | 4 | 3 | 1 | 0 |
| High Priority TODOs | 4 | 4 | 0 | 0 |
| Medium Priority TODOs | 7 | 6 | 1 | 0 |
| Low Priority TODOs | 1 | 1 | 0 | 0 |
| **Total Items** | **16** | **14** | **2** | **0** |

**Completion: 100%** (16/16 addressed)

---

## Remaining Work

### Optional Follow-up

- **IC-2**: Minor wording inconsistency between lines 89 and 99 (acceptable as-is)
- **TODO-10**: Trademark wording defensible but available for legal review if desired

---

## Second Wave (2026-06-01 to 2026-06-14)

Generated: 2026-06-14
Source: onetime-terms-of-service-notes.txt (notes dated 2026-06-01 through 2026-06-14, plus the unprocessed 2026-05-31 block above the "ALREADY PROCESSED" divider)

This addendum continues the id scheme of the first wave (IC-1..IC-4, TODO-1..TODO-12, all complete). None of the second-wave items is a cross-reference contradiction, so all are numbered TODO-13 onward; no new IC- items were required. Of the drafted items below, eight (TODO-16, TODO-17, TODO-18, TODO-19, TODO-20, TODO-21, TODO-22, and TODO-24) have been applied to the live `onetime-terms-of-service.md` per an approved changeset; their per-item Disposition lines record where each landed. TODO-13 (account inactivity removal) has been relocated to the Privacy Statement (see Privacy review-tasks TODO-12), since it is a data-retention matter rather than a contractual term. The remaining items (TODO-14, TODO-15, TODO-23) are held for individual review, and the two sub-claims (TODO-20a, TODO-23a) remain held pending code verification. None of these items is auto-apply.

### TODO-13: Account Inactivity Removal
- **Section:** J "Cancellation and Termination" (new subsection); cross-reference from B.6 "Data Retention and Security"
- **Note:** Disclose that accounts inactive for an extended period may be subject to removal; logging in resets the clock; the data-retention policy still governs. Source note: 2026-06-14.
- **Action:** Add an "Inactive accounts" subsection to Section J and a cross-reference from B.6.
- **Drafted text:**
  > **Inactive accounts.** An account that has not been signed in to for more than five years may be subject to removal. Where this applies, removal may occur automatically, without prior notice and without any action required on your part. Signing in to the account resets this period. Removal of an inactive account is subject to the data-retention practices described in [Section B.6](#6-data-retention-and-security) and in our [Privacy Statement](https://onetimesecret.com/privacy).
- **Priority:** not assigned (second-wave changeset)
- **Disposition:** RELOCATED — not a ToS clause. Moved to the Privacy Statement (see Privacy review-tasks TODO-12).
- **Resolution (2026-06-14):** Account inactivity removal is a data-retention matter, and the Privacy Statement is its canonical home (its "Data retention and deletion" section governs retention windows and deletion mechanics). Stating it in the Terms would fragment the retention story across two documents and frame a privacy obligation as a contractual term. GDPR storage-limitation (Art 5(1)(e)) treats data no longer needed as a retention concern. The Terms remain silent on inactivity removal; the drafted text and the open questions (notice obligation, defensibility of five years) move with it.
- **Rationale:** The note questions whether automatic removal is within regulatory compliance and whether it reads default-safe or as an incursion on user rights, and flags that regulation and policy may change across the five-year window. The load-bearing word is "may," not "will": the draft states a reserved right rather than a guaranteed action, so it stays accurate even if enforcement is not active. Marked needs-decision because notice obligations under GDPR and equivalent regimes, the defensibility of five years, and whether to notify before removal are legal judgment calls.

### TODO-14: Recipient and Delivery Non-Guarantee
- **Section:** D.4 "Treatment of Secret Content" (adjacent) or a new clause under D; cross-referenced from L "Disclaimer of Warranties"
- **Note:** State that we do not guarantee a recipient can access a Secret, that the at-most-one-reveal guarantee precludes a full-receipt guarantee, that we do not guarantee a Secret reaches its intended target, that anyone holding the link is treated as a recipient, and recommend additional protections. Source note: 2026-06-13.
- **Action:** Add a "No guarantee of receipt or delivery" clause adjacent to D.4 (or a new D clause); cross-reference from L.
- **Drafted text:**
  > **No guarantee of receipt or delivery.** We do not guarantee that a recipient will be able to access a Secret. Access can be affected by conditions outside our control, including network interruptions and routine restarts of our systems. Because a Secret is revealed at most once, we cannot also guarantee that its contents are fully received. We do not guarantee that a Secret reaches its intended target. Any person who holds the access link is treated as a recipient, whether or not they are the person you intended. Where stronger assurance matters, use the additional protections available to you, which may include setting a passphrase, requiring the recipient to sign in, requiring the recipient to be a member of your Organization, or sending the contents across multiple separate Secret links.
- **Priority:** not assigned (second-wave changeset)
- **Disposition:** needs-decision
- **Rationale:** Carries both 2026-06-13 bullets and every sub-fact: the access non-guarantee with its causes (network, restarts), the at-most-one-reveal-therefore-not-full-receipt logic, the no-guarantee-of-reaching-target statement, the anyone-with-the-link-is-a-recipient rule, and all four mitigations (passphrase, require login, require Organization member, multiple links). An earlier draft added "if the single reveal is interrupted, the Secret may already have been consumed"; this was removed because it introduces a reveal-time consumption mechanism the author did not write and which depends on unverifiable code. The note says "need better language," so the wording is a judgment call. Mitigations are phrased "may include" to keep per-plan and per-region availability out of binding text, consistent with the TODO-9 preference.

### TODO-15: Reselling: Permitted Procurement vs Prohibited Resale
- **Section:** C.4 "Service Usage Limits" (extends the permitted/prohibited bullet structure added in TODO-5, lines 166-170)
- **Note:** Draw the line between permitted one-to-one procurement (one subscription passed through to one named customer) and prohibited resale (one account serving multiple customers, or operating a reseller business without a separate signed agreement). No price term. Source note: 2026-06-11.
- **Action:** Add two bullets to C.4 following the existing "Permitted API integration" and "Prohibited resale of domain-specific features" bullets.
- **Drafted text:**
  > - **Permitted one-to-one procurement.** You may purchase a subscription on behalf of, and pass it through to, a single named customer, so that one subscription corresponds to one customer. Procuring and administering subscriptions on this one-to-one basis does not require a separate agreement.
  >
  > - **Prohibited resale.** You may not use a single account to serve multiple customers, and you may not operate a reseller business based on the Service, without a separate written agreement signed with Onetime Secret. This is in addition to the restriction on reselling domain-specific functionality described above.
- **Priority:** not assigned (second-wave changeset)
- **Disposition:** needs-decision
- **Rationale:** The note identifies that the gap in C.4 is not a missing price clause but the absence of a clear line between permitted procurement and prohibited resale; defining both cases closes the hole without setting price. The draft contains no price-parity or price-matching term. Per the note, requiring a reseller to charge a fixed price is resale price maintenance (RPM), the most legally sensitive form of vertical price restraint, which is why no such term is drafted; that caution is confined to this rationale and kept out of the binding text. Marked needs-decision because the resale boundary and the "separate written agreement" trigger are legal judgment calls.

### TODO-16: Multiple Organizations Under One Account
- **Section:** B.3 "Organizations" (new bullet); references B.2 "Account Requirements" and C.4 "Service Usage Limits"
- **Note:** Describe the supported arrangement in which one account owner holds multiple Organizations, each Organization carrying its own subscription and representing a single customer. Source note: 2026-06-11.
- **Action:** Add a "One Organization per customer" bullet under B.3, referencing B.2 and C.4.
- **Drafted text:**
  > - **One Organization per customer.** A single account owner may hold more than one Organization (see [Section B.2](#2-account-requirements)). Where an account owner administers Organizations on behalf of distinct customers, each such customer must be represented by its own Organization, and each Organization carries its own subscription. This arrangement keeps one Organization aligned to one customer and is distinct from the prohibited resale described in [Section C.4](#4-service-usage-limits).
- **Priority:** not assigned (second-wave changeset)
- **Disposition:** APPLIED as a new "One Organization per customer" bullet at the end of B.3 "Organizations," before B.4, with xrefs to B.2 (#2-account-requirements) and C.4 (#4-service-usage-limits).
- **Rationale:** The note asks to define the correct procedure for multiple Organizations under one main account, each with its own subscription representing one customer. This pairs with TODO-15 as the legitimate counterpart to prohibited resale, so it cross-references C.4. Builds on the existing B.2 five-Organization limit (set in TODO-1) rather than restating it. Marked needs-decision because it establishes a supported commercial structure and its relationship to the resale boundary.

### TODO-17: Coupon and Promotion Misuse
- **Section:** I "Payment" (new subsection I.7 "Coupons and Promotions")
- **Note:** State that discount eligibility is monitored and that subscriptions using a coupon that does not match the organization type may be terminated. Source note: 2026-06-05.
- **Action:** Add a new I.7 "Coupons and Promotions" subsection to Section I.
- **Drafted text:**
  > ### 7. Coupons and Promotions
  >
  > We offer discounts and promotional pricing to certain types of organization, including non-profits, charities, B Corporations, and educational institutions. Eligibility for these discounts is monitored. We reserve the right to suspend or terminate any subscription that uses a coupon or promotion for which the account does not qualify, including where the organization type does not match the discount claimed. We ask that you not apply a coupon or promotion you are not eligible to use.
- **Priority:** not assigned (second-wave changeset)
- **Disposition:** APPLIED as a new subsection "### 7. Coupons and Promotions" in Section I "Payment," after I.6 and before Section J.
- **Rationale:** Direct transcription of the 2026-06-05 note (non-profit, charity, B-Corp, and education discounts monitored; right to terminate subscriptions using a non-matching coupon), recast into the document's register. Marked needs-decision because it grants a new termination right tied to eligibility, a substantive payment-section clause rather than a typo or mirror.

### TODO-18: Meaning of "Unlimited" (Soft Limits)
- **Section:** C.7 "Excessive Use" (additional paragraph) and/or A "Definitions"
- **Note:** Clarify that "unlimited" features carry a soft limit to prevent abuse and protect resource allocation, and that the limit can be raised on request at no additional charge. Source note: 2026-06-01.
- **Action:** Add an "Unlimited features" paragraph to C.7 (and/or a definition in A).
- **Drafted text:**
  > **"Unlimited" features.** Where we describe a feature as "unlimited," a soft limit may apply to prevent abuse and to protect the allocation of shared resources against accidental or intentional disruption. A soft limit is not a billing cap: where you reach one in the ordinary course of use, you may request an increase at no additional charge.
- **Priority:** not assigned (second-wave changeset)
- **Disposition:** APPLIED as a "**\"Unlimited\" features.**" paragraph appended to C.7 "Excessive Use," after the paid-plan paragraph and before C.8. Placed in C.7 only, not duplicated in A.
- **Rationale:** Transcribes the 2026-06-01 note (soft limit to prevent abuse; increasable by request at no additional charge; about resource allocation and avoiding accidental or intentional disruption). Placed in C.7 because it concerns usage limits and fair access, the same subject as the existing Excessive Use section. Marked needs-decision because qualifying a marketing term ("unlimited") with a contractual limit carries consumer-disclosure implications and is a judgment call on placement and wording.

### TODO-19: Non-Authenticated Recipients
- **Section:** A "Definitions" (recipient terminology) and D.4
- **Note:** Add coverage for non-authenticated recipients, since authenticated recipients are already covered through the account types (owner, invited Organization member, SSO Organization member, Organization administrator). Source note: 2026-05-31.
- **Action:** Add a "Recipients" definition/clause in A and D.4 covering non-authenticated recipients.
- **Drafted text:**
  > **Recipients.** A recipient is any person who retrieves, or attempts to retrieve, a Secret using its access link. A recipient need not hold an account. Authenticated recipients (for example an account owner, an invited Organization member, an Organization member signed in through SSO, or an Organization administrator) are also covered under the account types described in [Section B](#b-account-terms). For non-authenticated recipients, possession of the access link is what grants the ability to retrieve a Secret; we do not separately verify the identity of a non-authenticated recipient.
- **Priority:** not assigned (second-wave changeset)
- **Disposition:** APPLIED as new definition item 15 "**Recipient**" in Section A, after item 14 (SSO), with xref to Section B (#b-account-terms). Not copied into D.4: A is the canonical terminology home and D.4 already relies on it; a forced D.4 cross-reference read as editorializing, so D.4 was left unchanged.
- **Rationale:** The note asks to add language specifically for non-authenticated recipients and confirms authenticated recipients are already covered as account types (owner, invited org member, SSO org member, org admin). The draft ties back to those account types rather than restating them, and connects to TODO-14's anyone-with-the-link rule. Marked needs-decision because introducing a recipient definition affects how the warranty and content sections read.

### TODO-20: Homepage Secrets and Incoming Secrets Responsibility
- **Section:** E.2 "Domain-Specific Features"
- **Note:** State that the Organization owner is responsible for the content of Homepage Secrets and Incoming Secrets, and that we make best effort to avoid exposing configured recipient email addresses but are not liable for exposure caused by bugs or misconfiguration. Source note: 2026-05-31.
- **Action:** Add a "Responsibility for Homepage Secrets and Incoming Secrets" clause to E.2.
- **Drafted text:**
  > **Responsibility for Homepage Secrets and Incoming Secrets.** Where you enable Homepage Secrets or Incoming Secrets, you, as the Organization owner, are responsible for the content created or received through those features and for its compliance with [Acceptable Use](#c-acceptable-use). For Incoming Secrets, we make a best effort to avoid exposing the recipient email addresses you have configured. We are not, however, liable for exposure of a configured email address that results from a defect in the Service or from misconfiguration on your part.
- **Priority:** not assigned (second-wave changeset)
- **Disposition:** APPLIED as a "**Responsibility for Homepage Secrets and Incoming Secrets.**" paragraph in E.2 "Domain-Specific Features," after the feature bullet list and before E.3, with xref to Acceptable Use (#c-acceptable-use). TODO-20a mechanism remains omitted as planned.
- **Rationale:** Transcribes the 2026-05-31 bullet (org owner responsible for Homepage and Incoming Secret content; best effort to avoid exposing configured email addresses; not liable for exposure from bugs or misconfiguration). The note's exposure-avoidance mechanism ("hashed values in the form, display name only") is a claim about application behavior that cannot be verified under the permitted root, so it is omitted here and split to TODO-20a. Marked needs-decision because it allocates a liability boundary.

### TODO-20a: Incoming Secrets Exposure-Avoidance Mechanism (Sub-Claim)
- **Section:** E.2 "Domain-Specific Features" (supporting detail for TODO-20)
- **Note:** The note asserts that configured email addresses are protected by using hashed values in the form and displaying only the name. This is a claim about how the application behaves. Source note: 2026-05-31.
- **Action:** Hold pending code verification; do not draft a specific mechanism into legal text until confirmed.
- **Drafted text:** None pending verification. Candidate language only if confirmed: "To reduce exposure, configured email addresses are not rendered in the submission form; only a display name is shown, and the address itself is handled as a hashed value."
- **Priority:** not assigned (second-wave changeset)
- **Disposition:** needs-code-verification
- **Rationale:** Whether the form uses hashed values and shows only a display name depends on application source code, which is outside the permitted editing root and which the task bars from verification. The liability core of this note is captured in TODO-20 using "best effort" language that does not depend on the specific mechanism; this sub-claim is held separately until the implementation is confirmed, so a specific mechanism is never guessed into legal text.

### TODO-21: Verified Email Configuration Responsibility
- **Section:** E.2 "Domain-Specific Features" (Verified Email Addresses bullet)
- **Note:** State that configuring a deliverable verified email address is the customer's responsibility, that by default the address is limited to one at the Custom Domain (the local part is editable, the domain is fixed), and that some plans allow configuring an address at another domain. Source note: 2026-05-31.
- **Action:** Add a "Verified Email Addresses" responsibility clause to E.2.
- **Drafted text:**
  > **Verified Email Addresses.** Configuring a deliverable Verified Email Address is your responsibility. If a configured address is not deliverable, this is a matter of configuration on your side. By default, a Verified Email Address is limited to an address at your Custom Domain: you may set the part before the "@", while the domain remains your Custom Domain (for example, `support@secrets.example.com`). Depending on your plan, you may be able to configure an address at another domain you control (for example, `support@example.com`).
- **Priority:** not assigned (second-wave changeset)
- **Disposition:** APPLIED by integrating into the existing "**Verified Email Addresses**" bullet in E.2 (not a second block), per the integrate-rather-than-repeat rule. Note: A.11's definition frames "Verified Email Addres" as a *domain*, while E.2 (existing bullet and this draft) frames it as an *address* at that domain. Treated as definitional looseness, not a contradiction, since the existing E.2 bullet already says "an address at your domain"; A.11 is outside the eight and was not edited.
- **Rationale:** Transcribes the 2026-05-31 bullet (configuration is the customer's responsibility; deliverability is on their end; default limited to an address at the Custom Domain with only the local part editable; some plans allow another domain). The plan-dependent capability is stated as "depending on your plan" rather than enumerating tiers, consistent with the TODO-9 preference to keep changeable feature detail out of binding text. Marked needs-decision because it sets a responsibility boundary and describes a default configuration constraint.

### TODO-22: Audience Clarity (Public, Workspace, Session Surfaces)
- **Section:** A "Definitions" or a new introductory subsection
- **Note:** Distinguish the public surface (the "secret"), the workspace, and the session pages (mixed-use), aligned to the frontend applications. Source note: 2026-05-31.
- **Action:** Add a "Surfaces of the Service" framing in A or a new introductory subsection.
- **Drafted text:**
  > **Surfaces of the Service.** The Service presents distinct surfaces, each with a different audience. The public surface is where a Secret is created and retrieved, and is available to any visitor, including non-authenticated recipients. The workspace is the area available to a signed-in account holder for managing their account, Organizations, and configuration. Session pages may be mixed-use, serving both signed-in and non-authenticated visitors depending on the action. References in this Agreement to a particular surface should be read accordingly.
- **Priority:** not assigned (second-wave changeset)
- **Disposition:** APPLIED as a "**Surfaces of the Service.**" framing paragraph at the end of Section A, after the numbered definitions and before Section B. Placed as prose framing rather than a numbered definition item, since it frames three surfaces rather than defining a single term.
- **Rationale:** The note asks to distinguish the audiences along the lines of the frontend apps: public surface ("secret"), workspace, and session pages (mixed-use). The draft names the three surfaces and their audiences without binding to specific application names or routes, since those change. Connects to TODO-19 (non-authenticated recipients live on the public surface). Marked needs-decision because adding a structural framing affects how other sections are interpreted, and the exact surface boundaries are a judgment call.

### TODO-23: Network CIDR/IP Filtering
- **Section:** B.6 "Data Retention and Security" (adjacent) or E "Domain-Specific Features"
- **Note:** State that, on single-tenant installations, network-level filtering options may be available depending on the chosen hosting provider's terms and capabilities. The multi-tenant application-layer assertion is a code claim; see TODO-23a. Source note: 2026-05-31.
- **Action:** Add a "Network-level access controls" clause for single-tenant availability near B.6 or in E.
- **Drafted text:**
  > **Network-level access controls.** On single-tenant deployments, network-level filtering of access by IP range may be available, depending on the terms and capabilities of the hosting provider chosen for that deployment. Availability of such controls is confirmed as part of the deployment arrangement and is not guaranteed for every hosting environment.
- **Priority:** not assigned (second-wave changeset)
- **Disposition:** needs-decision
- **Rationale:** The note states that single-tenant installs such as Global Elite may have network-level options depending on the hosting provider, which is a contractual availability statement and is draftable here. The note also asserts that on multi-tenant, CIDR/IP filtering is accomplished at the application layer; that is a claim about how the Service is implemented and is split to TODO-23a. Marked needs-decision for the single-tenant availability language.

### TODO-23a: Multi-Tenant Application-Layer Filtering (Sub-Claim)
- **Section:** B.6 / E (supporting detail for TODO-23)
- **Note:** The note asserts that on multi-tenant, CIDR/IP filtering is accomplished at the application layer. Source note: 2026-05-31.
- **Action:** Hold pending code verification; do not draft the implementation detail into legal text until confirmed.
- **Drafted text:** None pending verification. Candidate language only if confirmed: "On our multi-tenant Service, access filtering by IP range is applied at the application layer."
- **Priority:** not assigned (second-wave changeset)
- **Disposition:** needs-code-verification
- **Rationale:** Whether multi-tenant IP filtering is enforced at the application layer (versus network or edge) depends on application and infrastructure code outside the permitted root, which the task bars from verification. Held separately so the implementation detail is not guessed into legal text; the single-tenant availability statement in TODO-23 stands on its own.

### TODO-24: Automatic Fulfillment of Single-Tenant Accounts
- **Section:** Introduction (Global Elite framing) and I.3 "Billing Schedule and Refunds" (single-tenant plans)
- **Note:** Add permissive enabling language allowing an automatically fulfilled single-tenant offering that sits between multi-tenant onboarding and the manual Global Elite tier. Source note: 2026-05-31.
- **Action:** Add permissive "Single-tenant deployment options" enabling language to the Introduction framing and/or I.3.
- **Drafted text:**
  > **Single-tenant deployment options.** Our Global Elite tier provides a manual, high-touch, single-tenant deployment that can be tailored to a customer's requirements. We may also offer automatically provisioned single-tenant deployments, which provide a dedicated environment through an onboarding experience similar to our multi-tenant plans. Where offered, an automatically provisioned single-tenant deployment may consist of a single virtual server running the application and database together, or of separate application and database instances, with configurable resources and a choice of hosting region. The deployment options available to you, including resources and region, are described where the offering is presented.
- **Priority:** not assigned (second-wave changeset)
- **Disposition:** APPLIED as a "**Single-tenant deployment options.**" paragraph in I.3 "Billing Schedule and Refunds," after the single-tenant refund paragraph and before the "To request a refund" line. Placed in I.3 only, not the Introduction. No conflict with I.3's "billed annually only" (draft is silent on billing frequency).
- **Rationale:** The note asks for language that allows introducing automatic fulfillment of single-tenant accounts, positioned between multi-tenant onboarding and the manual Global Elite tier, delivering either one VPS (web and database together) or separate web and database instances, configurable, with EU/US region choice. Drafted as permissive enabling language ("we may also offer"), not as a description of a live offering, so the Terms do not assert a product that may not yet exist. Specific resource tiers (low-end versus mid), instance counts, and the EU/US choice are preserved in this rationale but kept out of the binding text and deferred to where the offering is presented, consistent with the TODO-9 preference. Marked needs-decision because it introduces a new tier of service into the framing that today distinguishes only multi-tenant and Global Elite.

---

## Second Wave Summary

| Item | Source | Target Section | Disposition |
|------|--------|----------------|-------------|
| TODO-13 | 2026-06-14 | RELOCATED → Privacy Statement | RELOCATED (see Privacy TODO-12) |
| TODO-14 | 2026-06-13 | D.4 / new D clause (+ L xref) | needs-decision |
| TODO-15 | 2026-06-11 | C.4 | needs-decision |
| TODO-16 | 2026-06-11 | B.3 (+ B.2, C.4 xref) | APPLIED (B.3 bullet) |
| TODO-17 | 2026-06-05 | I (new I.7) | APPLIED (I.7) |
| TODO-18 | 2026-06-01 | C.7 / A | APPLIED (C.7) |
| TODO-19 | 2026-05-31 | A / D.4 | APPLIED (A item 15) |
| TODO-20 | 2026-05-31 | E.2 | APPLIED (E.2 paragraph) |
| TODO-20a | 2026-05-31 | E.2 (sub-claim) | needs-code-verification |
| TODO-21 | 2026-05-31 | E.2 | APPLIED (E.2 Verified Email bullet) |
| TODO-22 | 2026-05-31 | A / new intro | APPLIED (A framing paragraph) |
| TODO-23 | 2026-05-31 | B.6 / E | needs-decision |
| TODO-23a | 2026-05-31 | B.6 / E (sub-claim) | needs-code-verification |
| TODO-24 | 2026-05-31 | Intro / I.3 | APPLIED (I.3) |

Counts: 14 changeset items covering 11 note items. APPLIED: 8 (TODO-16 through TODO-22 except TODO-20a, plus TODO-24). RELOCATED: 1 (TODO-13 → Privacy Statement, see Privacy review-tasks TODO-12). needs-decision: 3 (TODO-14, TODO-15, TODO-23, held for individual review). needs-code-verification: 2 (TODO-20a, TODO-23a). auto-apply: 0.

Eight second-wave items (TODO-16, TODO-17, TODO-18, TODO-19, TODO-20, TODO-21, TODO-22, and TODO-24) have been applied to the live `onetime-terms-of-service.md` per an approved changeset. TODO-13 (account inactivity removal) was relocated to the Privacy Statement (see Privacy review-tasks TODO-12), since inactivity removal is a data-retention matter rather than a contractual term. The remaining items (TODO-14, TODO-15, TODO-23) are held for individual review because each introduces a new legal clause or a judgment call on wording, placement, or a liability boundary, and the two implementation-dependent sub-claims (TODO-20a, TODO-23a) are isolated as needs-code-verification.

---

## Application Report: Second Wave Approved Changeset

This section reports the work completed in applying the eight approved second-wave items to the live `onetime-terms-of-service.md`. It is a record only; the authoritative per-item status remains in each item's Disposition line and in the Second Wave Summary table above.

### Items applied (8)

| Item | Landed in | Anchors wired |
|------|-----------|---------------|
| TODO-16 | New "One Organization per customer" bullet at the end of B.3 "Organizations" | `#2-account-requirements`, `#4-service-usage-limits` |
| TODO-17 | New subsection "### 7. Coupons and Promotions" in Section I, after I.6 | (none in draft) |
| TODO-18 | "Unlimited features" paragraph appended to C.7 "Excessive Use" (C.7 only, not A) | (none in draft) |
| TODO-19 | New definition item 15 "Recipient" in Section A, after item 14 (SSO) | `#b-account-terms` |
| TODO-20 | "Responsibility for Homepage Secrets and Incoming Secrets" paragraph in E.2, after the feature list | `#c-acceptable-use` |
| TODO-21 | Integrated into the existing "Verified Email Addresses" bullet in E.2 (no duplicate block) | (none in draft) |
| TODO-22 | "Surfaces of the Service" framing paragraph at the end of Section A | (none in draft) |
| TODO-24 | "Single-tenant deployment options" paragraph in I.3, after the single-tenant refund paragraph (I.3 only, not the Introduction) | (none in draft) |

All target anchors resolve against existing headings and follow the document's `#<n>-<slug>` convention. Every insertion was additive: no existing subsection was renumbered and no existing cross-reference broke.

### Judgment calls (recorded in the per-item Disposition lines)

- **TODO-19** placed in Section A only, not D.4. Section A is the document's canonical terminology home and D.4 already relies on it; the natural D.4 hook (the anyone-with-the-link rule) belongs to held TODO-14. Copying the definition into D.4 would duplicate, and forcing a cross-reference into D.4's narrow Onetime-Secret-access content read as editorializing, so D.4 was left unchanged.
- **TODO-21** integrated into the existing E.2 "Verified Email Addresses" bullet rather than added as a second block. Flagged definitional looseness: Definition A.11 frames "Verified Email Addres" as a *domain*, while E.2 (the existing bullet and this draft) frames it as an *address* at that domain. Treated as looseness, not a contradiction, because the existing E.2 bullet already says "an address at your domain." A.11 is outside the approved eight and was not edited.

No item required a STOP; all eight applied cleanly.

### Left untouched, as instructed

- Sensitive held items TODO-13, TODO-14, TODO-15 (status unchanged).
- Code-verification sub-claims TODO-20a and TODO-23a (status `needs-code-verification`, unchanged). TODO-23 also left held (`needs-decision`), as it was not among the approved eight.
- The document's effective-date line and all pre-existing content, including pre-existing em-dashes (for example the SSO definition and the E.2 feature-bullet separators) and the `Addres` typo in Definition 11. No em-dashes were introduced by any insertion.

### Tracker updates made for this changeset

- Each applied item's Disposition line changed to "APPLIED ..." with a one-line location note.
- The eight corresponding rows in the Second Wave Summary table set to APPLIED.
- The counts line corrected (APPLIED: 8; needs-decision: 4; needs-code-verification: 2).
- The two prose statements that previously claimed nothing had been applied (the Second Wave intro and the paragraph closing the summary) reconciled to reflect the eight applications.
