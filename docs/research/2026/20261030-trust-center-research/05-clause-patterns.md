# Clause Patterns — Cross-Cutting Synthesis

Access date: 2026-07-20. Synthesized from files 01–04 in this folder. Organized by the five research questions. Verbatim quotes here were double-checked where marked ✓VERIFIED (independently re-fetched 2026-07-20); everything else carries the confidence level noted in the source file.

---

## 1. Clauses about the trust center itself

**Standalone visitor-facing "Trust Center Terms of Use" barely exist.** Across ~30 production trust centers and 15+ platforms, only two platform vendors publish one at a stable public URL:

- **Drata Trust Center Terms of Use** (drata.com/trust-center-terms-of-use, "Date Last Updated: August 12, 2025") — governs all SafeBase/Drata-hosted portals. Conduct/IP-focused; notable clause: "You agree that you must evaluate, and bear all risks associated with, the use of any content, including any reliance on the accuracy, completeness, or usefulness of such content."
- **Vanta External User Terms of Service** (vanta.com/legal/external-user-terms) — the cleanest visitor-specific document found. Key clauses: "NEITHER VANTA NOR ITS CUSTOMERS MAKE ANY REPRESENTATIONS REGARDING THE ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY CONTENT AVAILABLE THROUGH THE VANTA SERVICES." and "IN NO EVENT SHALL THE TOTAL LIABILITY OF VANTA TO YOU EXCEED $100.00."

Everyone else folds trust-center visitors into general website ToS, or gates terms inside a clickwrap NDA that only renders in the authenticated app (SafeBase/Conveyor/Vanta "Get access" flows — not crawlable). The exact phrase "by accessing this trust center you agree" returned zero search results anywhere: nobody uses that construction as static text.

**The model self-referential clause (small vendor, plain voice)** — Lev.com Trust Center, "Updated December 2025" ✓VERIFIED:

> **A note on this documentation:** The information in this Trust Center reflects our current security practices and compliance status as of the date of last update. While we strive to keep this documentation accurate and up-to-date, your agreements with Lev—including our Terms and Conditions and any executed contracts—are the definitive source of truth regarding our obligations and your rights. If you have questions about specific commitments, contact trust@lev.com.

Lev pairs this with a signed first-person note from the CTO ("Look, I know a Trust Center can only tell you so much... Shoot me an email"). Closest existing example to the OTS voice.

**Platform disclaiming its hosted pages** — Secureframe Website Terms (secureframe.com/websiteterms, last updated 5/1/2023) ✓VERIFIED:

> Although we have attempted to provide accurate information on our Site, we assume no responsibility for the accuracy of the information. Any Sites designated as "powered by Secureframe," such as our Trust Center pages, are operated and controlled solely by third parties and not Secureframe. Secureframe has no control over the information or content contained on such Sites, does not check the veracity or accuracy of such content, and disclaims all responsibility and liability therefore.

The structural implication: on hosted platforms, the platform disclaims the content and the company's own agreements say the contract controls — so the trust center content itself sits in a liability void unless the company adds its own accuracy note (which almost none do; Lev is the exception).

**NDA gate mechanics** (file 01/02 detail): DocuSign/Ironclad integrations (Vanta Advanced, Drata Pro, Anecdotes), inline e-sign (Conveyor), or just typing your name (Thoropass). Whistic watermarks PDFs by default with viewer email + timestamp, flags docs older than 9 months internally, and warns that pushing an update to a shared Trust Center *extends the recipient's access expiry*. Drata Pro's default access expiration: 365 days. Conveyor's visitor docs answer "Is the Trust Center Agent's answer official?" with: "the cited source documents are the authoritative reference. If accuracy is critical — for example, for a formal assessment — verify against the source document."

---

## 2. Transparency and openness as practice

**The "public by default" family:**

- GitLab (handbook.gitlab.com/handbook/security/transparency-by-default/): "our position is that all information and activities produced by the security team should be considered 'Public by Default'" with two named exception tiers (customer/partner-only; restricted). Note: GitLab still runs its formal trust center on paid SafeBase — the public handbook and the gated portal are complementary layers, not substitutes.
- PostHog (posthog.com/handbook/company/communication): three buckets (Public / Shared internally / Private internally); outage post-mortems drafted internally but "The results of these should usually be made public though."
- Buffer (buffer.com/open): live revenue/salary dashboard since 2013 — "we believe in the power of transparency to build trust, hold us accountable to a high standard."
- Slack (slack.com/security-practices, June 17, 2025): "As transparency is one of the principles on which our company is built, we aim to be as clear and open as we can about the way we handle security... Please write to feedback@slack.com."

**Quantified openness (rare and striking):** Plausible compliance page — "If anything is not covered, contact us and we will respond within one business day." One of the only quantified feedback commitments found anywhere.

**Transparency reports:** Cloudflare semi-annual; Mozilla moved biannual→annual in 2025 citing the EU DSA; Proton VPN uses event-driven updates ("updated whenever there is a notable new legal request"; 458 orders since 2017, all denied for lack of logs). Warrant canaries are being retired deliberately: Proton says one "is not meaningful in Switzerland" (law forces eventual notification); Reddit's and Apple's disappeared silently. Mailfence still runs a live one with explicit cadence ("Last updated: January 2026... Next update: July 2026").

**The staleness-proofing argument (vendor design principle):** Anecdotes' pitch — trust center "continuously pulls data directly from a company's Anecdotes Compliance OS, ensuring all documentation is up-to-date and accurate and reducing the risk of errors that can occur when multiple teams are involved." Render-from-source-of-truth beats uploaded snapshots.

**The cautionary tale — Delve (live as of access date):** March 2026 whistleblower + TechCrunch reporting accuses YC-backed Delve of "hosting trust pages that contain security measures that were never implemented" and fabricating audit evidence; 275 companies catalogued as exposed; competitors (Vidyard, Lovable) now post "we are not a Delve customer" statements on their own trust pages. VISO TRUST's structural point: "There is no independent party curating that page. There is no mechanism requiring that what's listed actually reflects reality. And critically, if no one checks, there is no downside to overstating your controls." Full detail in file 01. This is the strongest available argument for separating self-attested claims from third-party-verified ones on a trust page.

---

## 3. Good-faith clauses

Good-faith language lives in exactly two places in the wild; no company was found saying "we act in good faith" about its own published trust content (searched; gap).

**Place 1 — VDP/bug-bounty safe harbors** (full texts in file 04):

- disclose.io Safe Harbor (CC0, adoptable verbatim): research is "Authorized concerning any applicable anti-hacking laws, and we will not initiate or support legal action against you for accidental, good-faith violations of this policy... Lawful, helpful to the overall security of the Internet, and conducted in good faith."
- The canonical good-faith definition (DOJ Justice Manual 9-48.000, reused by HackerOne Gold Standard): "accessing a computer solely for purposes of good-faith testing, investigation, and/or correction of a security flaw or vulnerability, where such activity is carried out in a manner designed to avoid any harm to individuals or the public, and where the information derived from the activity is used primarily to promote the security or safety of" the affected class.
- GitHub's reservation clause: "We reserve the sole right to make the determination of whether a violation of this policy is accidental or in good faith, and proactive contact to us before engaging in any action is a significant factor in that decision. If in doubt, ask us first!"
- CISA VDP template pairs the good-faith authorization with the 3-business-day acknowledgment SLA (mirrored verbatim by FTC, NASA, DHS, State, USPTO).

**Place 2 — DPA subprocessor-objection resolution clauses.** Near-universal formula: objection → "the parties will work together in good faith to resolve the objection" → if unresolved within a window, termination (with or without refund). Examples with the phrase verbatim: GitLab, Twilio ("discuss commercially reasonable alternative solutions in good faith"), Intercom, HubSpot ("discuss your concerns in good faith with a view to achieving a commercially reasonable resolution"), OpenAI, Buttondown, Fathom.ai/Common Paper, compliance.tf ("We'll work with you in good faith to find an alternative solution where possible" — plain-language register).

---

## 4. Discrepancy handling — site vs. procedures, wrong/missing subprocessors

**The central structural finding:** no vendor anywhere publishes a clause resolving "what if the published subprocessor list is wrong or conflicts with the DPA." The industry's answer is architectural: the DPA *defines* the list as the live webpage "as updated from time to time" (Stripe, ZenGRC, Intercom, Sitecore, and most others), so there is no second, static list to conflict with — the page is authoritative by definition. Corollary: no published correction process exists for when the page itself is wrong. Genuine industry-wide gap (confirmed as a search-exhausted conclusion in file 03, not a research miss).

**Precedence clauses that DO exist (three types):**

1. Trust-content-vs-contract (the Lev clause above; also Palo Alto Networks ToU: additional/product terms "will control" over website terms; Cloudflare website ToU: "THESE TERMS DO NOT APPLY TO YOUR ACCESS AND USE OF THE CLOUDFLARE PRODUCTS AND SERVICES THAT ARE PROVIDED UNDER... OTHER WRITTEN AGREEMENT SIGNED BETWEEN YOU AND CLOUDFLARE").
2. DPA-vs-Agreement (ZenGRC: "In the event of a conflict between the terms and conditions of this Addendum and the Agreement, the terms and conditions of this Addendum will supersede and control" — the standard formula, dozens of instances).
3. Snippet-only, unverified: Deltek NDA ("strictly a protective agreement... does not modify commercial terms, pricing, or..."), Harness ("To receive such notice(s), Customer must subscribe to the Trust Center"), L2L, Lilt.

**Does posting to the page constitute notice?** Explicitly yes at two vendors:

- Sitecore DPA v5.2 (June 2026): objection window runs "within 30 business days after such notice being made by Sitecore on its website" — email subscription is a convenience, doesn't move the clock.
- Stripe (stripe.com/legal/service-providers, Dec 20, 2025) ✓VERIFIED: "a Business User may reasonably object in writing... within 30 days following the update of this page. If a Business User does not object during the 30 day time period, the appointment of the new Sub-processor shall be deemed accepted."
- ActiveCampaign/Postmark: 7-day clock starts at "Company posting such update."
- Contrast GitLab: subscription email "will serve as written notice to Customer" AND GitLab "will not engage a new Sub-processor... before the expiry of the thirty (30) day objection period" — the only vendor found that explicitly sequences engagement after the window.

**Narrating changes on the list page itself** — Stripe's page opens with a "Summary of Changes" section ✓VERIFIED: "We've updated this page because we strive to be clear about our use of Personal Data and the third party service providers we engage. The below outlines a few highlights of the changes we made, so please review this page carefully." Followed by an itemized diff (entities added/removed/renamed and why). The most developed public example of a subprocessor page carrying its own changelog narrative.

**Blanket errors/omissions disclaimers covering the list:** Illumio's website ToU displayed on its sub-processor list page: "We do not guarantee that our Site or any content on it will be free from errors or omissions." General-purpose boilerplate, not purpose-drafted.

**The one real correction event found — Buttondown, March 16, 2026** (buttondown.com/blog/2026-03-16-legal-docs-refresh): founder added two missing entries (Stripe, Seline) to the subprocessor list after "good feedback from a customer working through GDPR compliance," fixed misdescribed sharing language on the GDPR page, and closed with "If you're working through your own GDPR compliance and something's missing or unclear, let us know — this latest round of updates came directly from a customer asking good questions." No crisis framing, no formal mechanism — a voluntary blog-post correction. The only documented instance of any company publicly correcting its subprocessor list.

---

## 5. Correction guarantees and time windows — master table

All specific numbers found across the corpus (details and verbatim sources in files 03–04):

| Commitment type | Range found | Dominant convention | Named outliers |
|---|---|---|---|
| Subprocessor advance notice | 7 days – 6 months | 30 days | ActiveCampaign/Postmark 7d; Fathom.ai 10 business d; OpenProject 14d (EU SCC blank filled); Twilio 10d non-infra / 30d infra; Zoom 30 business d; Microsoft 6mo general / 30d AI (changed May 22, 2026) |
| Subprocessor objection window | 7 – 90 days | Mirrors the notice period, concurrent | Google Cloud 90d (sole remedy: terminate); Zoom 15 business d; Datadog 15d; Anthropic 10d (2023 DPA, dated) |
| Objection cure cap before termination | 30 – 90 days | 30–60 days | Salesforce 60d → pro-rata refund; 37signals 30d → refund; Sitecore 90d; Datadog 15d → pro-rata refund |
| Emergency subprocessor swap | notify after the fact | "as soon as reasonably practicable" | Zoom: within 7 business days after |
| Breach notification (DPA) | 24h – 72h | 72h (tracks GDPR Art. 33 "where feasible") | Civo 48h; Polser 48h; GDPR baseline: "without undue delay" + 72h to authority |
| VDP acknowledgment | 3 – 5 business days | 3 business days (CISA template, copied by FTC/NASA/DHS/State/USPTO) | A&O Shearman 5bd ack / 10bd triage |
| Post-mortem publication | 72h – 14 days | no standard | Treviya 72h (low-confidence source); fremforge SLA 14d after SEV-1 (low-confidence); PostHog "usually public," no window |
| Website/content corrections | 7 days | emerging genre, no standard | AFFiNE "We correct verified errors within 7 days" + Corrections line on page ✓VERIFIED; Plausible respond within 1 business day; Classlist "review... quarterly and act promptly" |
| Policy-change notice | 24h – 30 days | 30 days for material ToS/Privacy changes | GitHub: 30d material, 24h non-material PRs (deliberately shortened from 30d — "we tend to get feedback soon after we post the changes"); Drata contract amendments 30d; 37signals: no fixed window, refresh date + mailing list |
| Page review cadence | monthly – annual | quarterly for content, annual fallback | AFFiNE monthly pricing / quarterly features / semi-annual full review; "reviewed every March and September" |
| security.txt freshness | Expires < 1 year recommended | RFC 9116 mandatory field | RFC 9116 §5.3: "Not having a security.txt file may be preferable to having stale information in this file." Dropbox's live file omits Expires (real non-compliance example) |

**GDPR baselines (verbatim in files 03–04):** Art. 28(2) requires prior notice + opportunity to object but names NO day count — every number above is a contractual choice ("The 30-day subprocessor notice is a myth" — Registora). Art. 33: "without undue delay and, where feasible, not later than 72 hours."

---

## Combinations observed nowhere (white space)

Documented gaps after exhaustive search — things no vendor currently does, all confirmed as absences in files 01–04:

- A clause resolving DPA-text vs. live-subprocessor-page conflicts, or any stated correction process for an erroneous subprocessor list.
- A "we act in good faith" / good-faith accuracy statement applied to a company's own trust-center content (good faith is only ever pledged about researchers' conduct or objection negotiations).
- A trust center publishing its own correction SLA ("if you find an inaccuracy here, we fix it within X days") — the AFFiNE/corrections-policy genre exists only on marketing comparison pages, never yet on a trust/security page.
- "By accessing this trust center you agree..." as static gate text.
- Small-company DIY trust centers with purpose-built accuracy/precedence language — Lev is the sole near-example; the indie segment otherwise relies on general ToS boilerplate (Fathom Analytics, Buttondown) or silence.

## Verification status

Independently re-fetched and confirmed verbatim on 2026-07-20: Secureframe websiteterms clause; Lev "note on this documentation" clause; Stripe service-providers page (30-day objection from page update, deemed acceptance, Summary of Changes section); AFFiNE editorial policy (7-day corrections, cadence, March/September review). Four for four passed, supporting confidence in the corpus's other direct-fetch quotes. Items flagged "snippet only" in files 01–04 (Harness, L2L, Lilt, Deltek, Microsoft-via-PPC-Land, Anthropic 2023 DPA, Treviya, fremforge) remain unverified — re-fetch before quoting in a legal document.
