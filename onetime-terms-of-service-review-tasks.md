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

### TODO-1: Organization Account Limits ❌ NEEDS VERIFICATION
- **Section:** B.2 "Account Requirements"
- **Note:** Document says "one free Organization account per legal entity." Reality: up to 5 organizations per account owner, more by request.
- **Action:** Verify this limit and update text to match actual enforcement.
- **Priority:** High
- **Status:** Line 72 unchanged. Requires codebase/policy verification before editing.

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
| High Priority TODOs | 4 | 3 | 0 | 1 |
| Medium Priority TODOs | 7 | 6 | 1 | 0 |
| Low Priority TODOs | 1 | 1 | 0 | 0 |
| **Total Items** | **16** | **13** | **2** | **1** |

**Completion: 93.75%** (15/16 addressed, 1 awaiting external verification)

---

## Remaining Work

### Needs External Verification

1. **TODO-1 (High)**: Organization account limits — verify actual enforcement in codebase before updating line 72

### Optional Follow-up

- **IC-2**: Minor wording inconsistency between lines 89 and 99 (acceptable as-is)
- **TODO-10**: Trademark wording defensible but available for legal review if desired
