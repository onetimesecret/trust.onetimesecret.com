# Terms of Service Revision Recommendations

**Date:** 2026-05-31  
**Status:** Draft for Review  
**Branch:** updates/20260531-1028

---

## Executive Summary

This document consolidates research findings and proposed revisions to the Onetime Secret Terms of Service. Nine revision items are organized by impact priority, with legal review flags and cross-references noted.

**Key Statistics:**
- Total revision items: 9
- Requiring legal review: 7
- Research-backed items: 3 (Organization limits, Admin/Owner privileges, Stripe billing)

---

## Priority 1: High Impact / Legal Risk

These items address incorrect legal statements or significant liability exposure.

### 1.1 Member Data Controller Claim

| Field | Value |
|-------|-------|
| **Section** | B.3 |
| **Legal Review** | Required |
| **Dependencies** | None |

**Current Text:**
> Member data. When the Organization adds a member, the Organization is the controller for that member's personal data within the Service for purposes of GDPR and equivalent laws. We process member data on the Organization's behalf.

**Proposed Text:**
> Member data. Onetime Secret is the data controller for member personal data within the Service for purposes of GDPR and equivalent laws. The Organization, through its owners and administrators, has administrative control over member accounts — including the ability to add or remove members, configure access permissions, and view Organization-level audit logs — but this administrative role does not make the Organization a data controller under applicable privacy law.

**Rationale:**
The current text incorrectly states that the Organization is the data controller. Under GDPR, the data controller is the entity that determines the purposes and means of processing personal data. Onetime Secret determines how the Service processes member data, not the Organization. Organizations have administrative capabilities but administrative control within a platform does not confer data controller status.

**Research Context:**
The Admin vs Owner privilege research confirms that Organizations have administrative capabilities (audit_logs, manage_members) but these are entitlement-based permissions within the platform, not controller determinations over data processing purposes.

---

### 1.2 Trademark Terminology for Unregistered Marks

| Field | Value |
|-------|-------|
| **Section** | G.2 |
| **Legal Review** | Required |
| **Dependencies** | None |

**Current Text:**
> The following names are protected trademarks of Onetime Secret:

**Proposed Text:**
> The following names are trademarks of Onetime Secret and are protected under common law:

**Rationale:**
"Protected trademarks" implies registration, which confers statutory protection. For unregistered marks, rights arise from actual use in commerce under common law trademark doctrine. The revised wording accurately asserts trademark ownership while specifying the basis of protection.

---

### 1.3 Treatment of Secret Content Exceptions

| Field | Value |
|-------|-------|
| **Section** | D.4 |
| **Legal Review** | Required |
| **Dependencies** | Admin/Owner privileges research |

**Current Text:**
> We do not access, read, scan, categorize, or analyze Secret Content.

**Proposed Text:**
> We do not access, read, scan, categorize, or analyze Secret Content, except: (a) with the express prior consent of the content owner; (b) at the direction of an Organization owner acting on behalf of its members, where such access is reasonably necessary for compliance, security, or administrative purposes within that Organization; or (c) for debugging, troubleshooting, or demonstration purposes, provided that access is limited to Onetime Secret personnel acting under a duty of confidentiality and is logged for audit purposes. Any access under this section is limited in scope and duration to what is reasonably necessary to accomplish the stated purpose.

**Rationale:**
The blanket prohibition may conflict with legitimate operational needs: user support requests, Organization owner compliance obligations, and production debugging. The exceptions include appropriate safeguards (express consent, duty of confidentiality, audit logging, scope limitations).

**Research Context:**
The Admin/Owner research confirms that Organization owners have `audit_logs` entitlement and administrative authority over members. Exception (b) aligns with this entitlement structure.

---

## Priority 2: Business Operations / Clarity

These items clarify business operations and prevent user confusion.

### 2.1 Service Usage Limits and API Exception

| Field | Value |
|-------|-------|
| **Section** | C.4 |
| **Legal Review** | Required |
| **Dependencies** | Cross-references Section H |

**Current Text:**
> You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, use of the Service, or access to the Service without our express written permission.

**Proposed Text:**
> You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, use of the Service, or access to the Service without our express written permission, except as follows:
>
> - **Permitted API integration.** You may use our API (subject to [Section H](#h-api-terms)) to integrate the Service into your own applications and to provide functionality to your end users, provided you do not misrepresent the source of the Service or remove attribution where required.
>
> - **Prohibited resale of domain-specific features.** You may not resell, sublicense, or offer as a managed service to third parties any domain-specific functionality — including Custom Domains, Verified Email Addresses, Homepage Secrets, or SSO configuration — without our prior written consent. For example, you may not operate a white-label service that provisions Custom Domains on our infrastructure for your own customers without a separate reseller agreement.

**Rationale:**
The blanket prohibition could forbid legitimate API integrations. The revision carves out explicit permission for API use while specifically prohibiting resale of domain-specific features.

---

### 2.2 Excessive Use - Paid Plan Coverage

| Field | Value |
|-------|-------|
| **Section** | C.7 |
| **Legal Review** | Required |
| **Dependencies** | Cross-references Section H |

**Current Text:**
> If we determine that your usage of free services is significantly excessive in relation to other Onetime Secret customers, we reserve the right to suspend your account or throttle your service until your consumption returns to a reasonable level.

**Proposed Text:**
> If we determine that your usage of free services is significantly excessive in relation to other Onetime Secret customers, we reserve the right to suspend your account or throttle your service until your consumption returns to a reasonable level.
>
> Paid plans do not impose fixed usage ceilings; however, we monitor usage patterns to ensure fair access across our customer base. If your usage is materially outside typical patterns for your plan tier, we will contact you to discuss options, which may include upgrading to a higher tier or an API-specific plan. For programmatic or high-throughput access, see [Section H](#h-api-terms).

**Rationale:**
The current section only addresses free services. The addition clarifies that paid plans are monitored but not hard-capped, with a contact-first approach rather than immediate suspension.

---

### 2.3 Scraping Policy for Documentation and Regional Subdomains

| Field | Value |
|-------|-------|
| **Section** | C.5 |
| **Legal Review** | Required |
| **Dependencies** | Mirrors Section A.3 regional subdomain list |

**Current Text:**
> You may scrape the Website for the following reasons:
>
> - Researchers may scrape public, non-personal information for research purposes, only if any publications resulting from that research are open access.
> - Archivists may scrape public data for archival purposes.
>
> You may not scrape Onetime Secret for spamming purposes, including for the purpose of harvesting user contact information.

**Proposed Text:**
> You may scrape the Website for the following reasons:
>
> - Researchers may scrape public, non-personal information for research purposes, only if any publications resulting from that research are open access.
> - Archivists may scrape public data for archival purposes.
> - AI training services and search engines may scrape our documentation sites (docs.onetimesecret.com), developer resources (onetime.dev, onetimesecret.dev), and blog for indexing and training purposes.
>
> You may not scrape Onetime Secret for spamming purposes, including for the purpose of harvesting user contact information.
>
> You may not scrape our regional subdomains (eu.onetimesecret.com, ca.onetimesecret.com, uk.onetimesecret.com, us.onetimesecret.com, nz.onetimesecret.com, and any additional regional environments we may add). These subdomains host user-facing application infrastructure and are not intended for automated data collection.

**Rationale:**
Adds affirmative permission for AI/search indexing of documentation while explicitly prohibiting scraping of regional production subdomains. The regional list mirrors Section A.3 for consistency.

---

## Priority 3: Technical Accuracy / Consistency

These items improve technical accuracy and internal consistency.

### 3.1 Authentication Methods and MFA Structure

| Field | Value |
|-------|-------|
| **Section** | B.4 |
| **Legal Review** | Not required |
| **Dependencies** | None |

**Current Text (Lines 89-98):**
> We support multiple ways to sign in. Depending on your region and your Organization's configuration, available methods may include any of the following: [bullet list including MFA]... The specific authentication methods available may vary by region, by plan tier, and over time.

**Proposed Text:**
> We support multiple ways to sign in. Depending on your region, your Organization's configuration, and your plan tier, available methods may include:
>
> - A passphrase set on your account
> - A one-time magic link sent to your email
> - A third-party identity provider such as Google, Apple, or GitHub
> - A WebAuthn / passkey credential
> - Single Sign-On (see Section B.5 below) via SAML 2.0, OIDC, or another federation protocol we support
>
> Where available on your plan, you may also enable multi-factor authentication with recovery codes for account recovery.
>
> The specific authentication methods available may change over time. We may add or remove supported methods without itemizing each addition or removal. Where you sign in via a third-party provider, your use of that provider is subject to that provider's own terms and privacy practices.

**Rationale:**
Three fixes: (1) Consistency in factor enumeration (region, org config, plan tier). (2) MFA separated as it is not a "way to sign in" but an additional security layer. (3) "Over time" clarified in its own sentence.

---

### 3.2 Global Elite Cryptographic Detail Promise

| Field | Value |
|-------|-------|
| **Section** | B.6 |
| **Legal Review** | Required |
| **Dependencies** | None |

**Current Text:**
> Customers on the Global Elite tier may receive additional cryptographic detail in their separate agreement.

**Proposed Text:**
> Additional cryptographic and infrastructure detail is available upon request for customers with dedicated deployment arrangements.

**Rationale:**
The current language implies Global Elite customers will find cryptographic details in a "separate agreement" that may not exist. The revision: removes tier-specific naming; replaces passive expectation with active offer; uses descriptive "dedicated deployment arrangements" rather than brand-specific naming.

---

### 3.3 Plan Naming Future-Proofing

| Field | Value |
|-------|-------|
| **Section** | I.3 |
| **Legal Review** | Required |
| **Dependencies** | Should align with introduction paragraph |

**Current Text:**
> For our **multi-tenant paid plans** (Identity Plus, Team Plus, and any successor multi-tenant tiers):

**Proposed Text:**
> For our **multi-tenant paid plans** (such as Identity Plus, Identity Lite, Team Plus, Team Lite, and any successor or variant multi-tenant tiers):

**Rationale:**
Adding "such as" makes the list explicitly non-exhaustive, and "or variant" covers tiers in the same family (Lite, Pro, etc.) without requiring ToS updates for each new tier.

---

## Research Findings: Code-Verified Items

The following research findings informed the revisions above and may warrant additional ToS updates.

### R1. Organization Account Limits

**Finding:** The codebase enforces **5 organizations per account owner** in the free tier, not "one per legal entity" as stated in Section B.2.

**Code Location:** `/Users/d/Projects/dev/onetimesecret/onetimesecret/lib/onetime/models/organization/features/with_plan_entitlements.rb` (lines 113-123)

**Current ToS (B.2):**
> One free Organization account per legal entity. A legal entity may not maintain more than one free Organization account.

**Recommended Action:** Update to: "Up to 5 free organizations per account owner. Additional organizations available by request or plan upgrade."

**Status:** Not included in draft revisions above; flagged for separate consideration.

---

### R2. Admin vs Owner Privilege Definitions

**Finding:** The code defines explicit entitlement separation between Owner and Admin roles:

- **Owner-only:** manage_billing, manage_orgs, manage_sso, ip_access_rules, workspace_branding, custom_mail_sender, flexible_from_domain, custom_signup_validation
- **Admin:** audit_logs, manage_members, custom_domains, homepage_secrets, incoming_secrets, custom_branding, custom_privacy_defaults
- **Member:** create_secrets, view_receipt, api_access, extended_default_expiration, notifications

**Code Location:** `/Users/d/Projects/dev/onetimesecret/onetimesecret/lib/onetime/models/organization_membership.rb` (lines 55-106)

**Current ToS (B.3):**
> Owners and administrators have access to Organization-level configuration, billing, audit logs, member management, and any plan-specific features...

**Recommended Action:** Clarify that billing and SSO are owner-only; admins cannot modify billing or SSO configuration.

**Status:** Informational; consider for Section B.3 enhancement.

---

### R3. Stripe Billing Behavior

**Finding:** All four ToS claims in Section I.2 are **VERIFIED** against the codebase:

1. Trial billing configured via Stripe with `trial_period_days` support
2. Monthly-to-yearly conversion uses `proration_behavior: 'create_prorations'`
3. Upgrades bill immediately via proration
4. All proration delegated to Stripe via `Stripe::Invoice.create_preview()`

**Code Location:** `/Users/d/Projects/dev/onetimesecret/onetimesecret/apps/web/billing/controllers/billing.rb` (lines 466-734)

**Status:** No ToS changes needed for billing behavior claims.

---

## Dependency Map

```
B.3 (Member Data Controller) ─────┐
                                  ├── Both relate to Organization admin authority
D.4 (Secret Content Exceptions) ──┘

C.4 (Service Usage Limits) ───────┬── Both cross-reference Section H
C.7 (Excessive Use) ──────────────┘

C.5 (Scraping Policy) ────────────── References A.3 regional subdomain list

I.3 (Plan Naming) ────────────────── Should align with intro paragraph plan references
```

---

## Implementation Checklist

- [ ] **Legal review:** Items 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, 3.2, 3.3
- [ ] **Internal consistency check:** Verify Section A.3 subdomain list matches C.5 additions
- [ ] **Plan naming audit:** Ensure intro paragraph plan references align with I.3 changes
- [ ] **Organization limit decision:** Resolve discrepancy between ToS (1 per entity) and code (5 per owner)
- [ ] **Privacy Statement alignment:** Verify member data controller change propagates to Privacy Statement if needed
