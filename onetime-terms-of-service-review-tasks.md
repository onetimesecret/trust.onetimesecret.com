# Terms of Service Review Tasks

Generated: 2026-05-31
Source: onetime-terms-of-service-notes.txt

---

## Internal Inconsistencies

These are cross-reference or logical conflicts within the document:

### IC-1: GDPR Controller Claim (Line 84)
- **Location:** Section B.3 "Member data"
- **Issue:** Document states Organization is "controller" for member data. This is factually incorrect — Onetime Secret remains the controller; Organization is a structural grouping.
- **Fix:** Clarify that Onetime Secret is the data controller; Organization provides administrative grouping.

### IC-2: Authentication Methods vs Configuration (Lines 89, 98)
- **Location:** Section B.4 "Authentication Methods"
- **Issue:** Line 89 says "Depending on your region and your Organization's configuration" but line 98 says "may vary by region, by plan tier, and over time" — no mention of org configuration.
- **Fix:** Make consistent. Either both mention org configuration or separate the concepts properly.

### IC-3: API Resale Redundancy (Section H vs Section C.7)
- **Location:** Section C.7 "Excessive Use" vs Section H "API Terms"
- **Issue:** Notes mention adding API plan text to C.7, but H already says "We may offer subscription-based access to our API for users who require high-throughput access or whose use would otherwise resemble resale of our Service."
- **Fix:** Reference Section H from C.7 instead of duplicating language.

### IC-4: Global Elite Cryptographic Detail Promise (Line 120)
- **Location:** Section B.6 "Data Retention and Security"
- **Issue:** States Global Elite "may receive additional cryptographic detail in their separate agreement" — this creates a dependency on a document that may not exist for every customer.
- **Fix:** Soften language or move to a general statement elsewhere to avoid stale cross-references.

---

## TODO Items

### TODO-1: Organization Account Limits
- **Section:** B.2 "Account Requirements"
- **Note:** Document says "one free Organization account per legal entity." Reality: up to 5 organizations per account owner, more by request.
- **Action:** Verify this limit and update text to match actual enforcement.
- **Priority:** High

### TODO-2: Admin vs Owner Privileges
- **Section:** B.3 "Roles"
- **Note:** Document conflates admin and owner access. Admins have fewer privileges per `lib/onetime/models/organization_membership.rb`.
- **Action:** Differentiate owner vs admin privileges clearly, referencing entitlement definitions.
- **Priority:** High

### TODO-3: MFA in Authentication List
- **Section:** B.4 "Authentication Methods"
- **Note:** MFA is listed as a "way to sign in" — MFA is a second factor, not a sign-in method itself.
- **Action:** Restructure the bullet points. Separate primary authentication methods from MFA/recovery.
- **Priority:** Medium

### TODO-4: Authentication Availability Wording
- **Section:** B.4 (Line 98)
- **Note:** "The specific authentication methods available may vary by region, by plan tier, and over time" — contradicts earlier mention of org configuration.
- **Action:** Rewrite to include org configuration; make "over time" its own sentence.
- **Priority:** Medium

### TODO-5: Service Usage Limits / API Exploitation
- **Section:** C.4 "Service Usage Limits"
- **Note:** Current text prohibits reproducing/reselling "any portion of the Service" — but API integrations serving customers is legitimate. Objection is to reselling custom domains or domain-specific features without permission.
- **Action:** Narrow scope to specify what cannot be resold (domain-specific features) vs what can (API integration).
- **Priority:** High

### TODO-6: Scraping Policy Clarification
- **Section:** C.5 "Scraping"
- **Note:** Allow scraping for documentation on docs.onetimesecret.com/.dev, blog, etc. Prohibit scraping regional subdomains.
- **Action:** Add explicit allowance for documentation domains; explicitly prohibit scraping regional environments (eu., ca., etc.).
- **Priority:** Medium

### TODO-7: Excessive Use — Paid Plans Statement
- **Section:** C.7 "Excessive Use on Free Services"
- **Note:** Should include statement for paid plans: no specific limits enforced but usage monitored.
- **Action:** Add paragraph for paid plan monitoring. Reference Section H for API-specific plans rather than duplicating.
- **Priority:** Medium

### TODO-8: Secret Content Access Exception
- **Section:** D.4 "Treatment of Secret Content"
- **Note:** "We do not access, read, scan, categorize, or analyze Secret Content" — should we add exception for explicit owner permission (debugging, demonstration)?
- **Action:** Consider adding: "except with explicit permission from the content owner (including org owner on behalf of members) for debugging or demonstration purposes." Use standard legal language.
- **Priority:** Medium — needs legal review

### TODO-9: Homepage Secrets Naming / Feature Details
- **Section:** E.2 "Domain-Specific Features"
- **Note:** "Homepage Secrets" — how to shorten? Avoid tying specific feature details to legal document. Each feature should preface with "Where/when enabled."
- **Action:** Generalize feature descriptions; add "Where enabled" prefix to each. Keep details on product pages, not ToS.
- **Priority:** Low

### TODO-10: Trademark "Protected" vs "Registered"
- **Section:** G.2 "Trademarks"
- **Note:** Document calls them "protected trademarks" — can we use this term for unregistered marks?
- **Action:** Verify trademark status. If unregistered, use "trademarks" without "protected" or specify common law protection.
- **Priority:** Medium — needs legal review

### TODO-11: Stripe Billing Verification
- **Section:** I.2 "Upgrades, Downgrades, and Changes"
- **Note:** CAREFULLY verify statements match actual Stripe integration behavior.
- **Action:** Audit each bullet against Stripe proration rules and current implementation.
- **Priority:** High

### TODO-12: Multi-Tenant Plan Name Definitions
- **Section:** I.3 "Billing Schedule and Refunds"
- **Note:** May introduce Identity, Team, Identity Lite, Team Lite, etc. Need clarity that "Identity Plus" and "Team Plus" refer to all variants.
- **Action:** Add definition in Section A or use "Identity Plan (and any successor tiers)" pattern.
- **Priority:** Medium

---

## Summary

| Category | Count |
|----------|-------|
| Internal Inconsistencies | 4 |
| High Priority TODOs | 4 |
| Medium Priority TODOs | 7 |
| Low Priority TODOs | 1 |
| **Total Items** | **16** |

---

## Next Steps

1. Address High Priority items first (IC-1, TODO-1, TODO-2, TODO-5, TODO-11)
2. Legal review needed for TODO-8 (Secret Content exception) and TODO-10 (trademark wording)
3. Verify Stripe integration before finalizing TODO-11
4. Consolidate redundant API language (IC-3) when editing C.7 and H
