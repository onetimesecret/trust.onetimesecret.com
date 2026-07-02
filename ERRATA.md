# ERRATA.md
---

Append-only list of errors and potential corrections for the site-policy documentation.

Findings worth your attention before you derive the documents:

1. Unresolved controller/processor contradiction. The live Privacy Statement (line 55) says the Organization owner/admin is the GDPR "controller" for member data with OTS as processor — which matches the DPA's model. But the ToS review (IC-1) removed that same claim from the ToS as "factually incorrect — Onetime Secret remains the controller." No tracker covers this; it needs one position before publication.

[ed: I edited the ToS but possibly inadvertently added to the confusion. The way it was written, it sounded to me like we were conflating "Organization" as in, one of our core data model and "Organization" as in, a legal entity that uses our service. That is all I was trying to clarify; I wasnt expressing any opinions.]


2. DPA-3 no-sell/share qualifier, the five-year inactive-account removal (drafted, not applied), ToS TODO-23/20a/23a (held pending decisions or code verification).

[relies on decision 1]


3. Metadata: both live docs say "Effective date: TBD on release"; the DPA header still reads "Last modified: February 18, 2026" despite the 2026-05-31 filename; the DPA tracker's GE-4 entry is stale (the wording was applied in b013643 but still marked NOT ACTIONED).

[ed: update the dates to TBD on release. The dates I kept there for my own reference to remind me about the provinence of the text.]


4. A framing choice the summary already takes a position on: the 2024-06→2024-10 changes (governing law California→BC, EU-only promise→region selection) belong in the full CHANGELOG but not the "what's changed in 2026" notice — they were already published. Readers of the notice care about deltas from what's live now.

[Agreed. Go ahead with the cleanup]

## 2026-07-01 — Review annotations from WHATS-CHANGED.md and CHANGELOG.md

Itemized from inline annotations made during review of the two summary
documents. Each item names the underlying decision or correction needed in the
policy documents themselves, not just the summaries.

### Decisions needed (blocking)

1. **Organization/subscription model is still ambiguous** (CHANGELOG.md:24,
   66–68; WHATS-CHANGED.md:56–60). "One Organization per customer, up to five
   per account owner" doesn't resolve the IT-contractor case: an owner who
   creates an Organization per end-customer — is that one subscription total
   or one per end-customer? Must decide once, deliberately: which model
   encourages faster growth vs. value capture. The ToS Organizations section,
   the resale/prohibited-uses section, and both summaries all depend on the
   answer. 
  @see ERRATA-1.md

2. **Subprocessor change-notice mechanism is unrealistic**
   (WHATS-CHANGED.md:87; CHANGELOG.md:119–120, 176–177). A flat 30-day
   advance-notice-before-integration commitment doesn't work for a
   multi-tenant service. Research how existing trust centers handle
   subprocessor changes (e.g. subscribe-for-notifications, notice-with-
   objection-window rather than notice-before-integration) and rewrite the
   PP and DPA subprocessor clauses accordingly. Also: "before we add anyone"
   — subprocessors are services, not people; fix the wording. 
  @see ERRATA-1.md

3. **"No marketing email" is too broad** (CHANGELOG.md:144;
   WHATS-CHANGED.md:101–103). Must not exclude feature announcements,
   security advisories, or other service-related notices. IMPORTANT: must
   coincide with the Company Principles on the docs site — those may
   currently say "no email" at all, which likely needs adjusting too.
   Reconcile PP wording, Company Principles, and actual practice.
  @see ERRATA-3.md 



### Verification needed

4. **Single-tenant provisioning phrasing is unclear** (CHANGELOG.md:93).
   "Single-tenant deployments may be provisioned automatically … alongside
   the existing Global Elite tier" — unclear whether this announces an
   offered service or a capability. Decide what is actually being offered
   and state it plainly in the ToS.

  We are considering offer self-service single-tenant deployments in the future, but we are not offering them today. The wording should be changed to reflect that. As in, "We may", as a carve out for writing updated terms and policies at that time.

  Also: I Delano need to see where this originated from. (i.e. what is CHANGELOG.md:93 referring to?)
  
5. **Edge-network TLS termination exception** (WHATS-CHANGED.md:83;
   CHANGELOG.md:131–132). We can eliminate this exception, but not in every
   region immediately. The PP/DPA should be specific per region rather than
   a blanket exception.

  I Delano need to read the source(s) that WHATS-CHANGED.md:83 and CHANGELOG.md:131–132 refer to.



6. **Trademark Policy retirement mention** (CHANGELOG.md:108). Remove from changelog.

7. **Privacy contact address** (CHANGELOG.md:147). Verify what email address
   the October 2024 Privacy Statement used before claiming
   privacy@onetimesecret.com is "now" the contact.

### Wording corrections

8. **"Debugging under confidentiality with audit logging"** (CHANGELOG.md:44;
   WHATS-CHANGED.md:44). Intent understood but the wording is weird and
   sounds troubling. Rewrite the Secret Content exception in the ToS in
   plainer, less alarming language.

9. **"Ordinary-course increases"** (CHANGELOG.md:74). Unfamiliar jargon;
   rewrite the soft-limits clause in plain language.

10. **"Deliverability" as a customer responsibility** (WHATS-CHANGED.md:54).
    Flagged with "??" in the custom-domains responsibilities list — clarify
    what the customer is actually responsible for (DNS records that affect
    email deliverability?) or cut it.

11. **Hardcoded "five regional environments"** (WHATS-CHANGED.md:78;
    CHANGELOG.md:96, 129). The count will change. Word the PP and summaries
    so adding a region doesn't falsify the text (the "minor changes" clause
    already anticipates this).

12. **"site-policy repository" → "trust center"** (WHATS-CHANGED.md:67;
    CHANGELOG.md:102). Rename the authoritative-source reference to the
    trust center (naming: "trust-centre" appears in one annotation — pick
    one spelling).

13. **Broken sentence in WHATS-CHANGED.md intro** (WHATS-CHANGED.md:8–10).
    "…not part of the agreements so any in the case of any discrepancies
    the agreements supersede" — grammar mangled; rewrite.

114. What is the rationale behind having `- * **Verifying you are on the official Service.** ** in the B2 section about Account requirements.
 
    There's no principled rationale. It is misplaced. It's an artifact of where things could land in the inherited document structure. The honest answer:
    
    1. The template has no "your responsibilities" section. These Terms descend from the GitHub → fly.io template, whose skeleton is: B = accounts, C = acceptable use, etc. Section C (Acceptable Use) is framed entirely as prohibitions — "you will not harass, spam, disrupt…" — not affirmative duties. There's no natural home for "things you must actively do," so affirmative user-side obligations accreted into B.2, which was already the closest thing to a per-user rules list ("one human per login," credential non-sharing).
    2. Adjacency to the login-hygiene bullets. The drafter grouped it with "One human per login" because both are user-side security hygiene. That's a thematic association, not a structural one — verifying the domain has nothing to do with account formation, which is what every other B.2 bullet governs (humans only, machine accounts, free-account limits, age, org caps).
    3. It needed to exist somewhere before the reveal. The clause does liability work for recipients, many of whom never have accounts at all. That's actually an argument that B.2 is the wrong home twice over: it's not an account requirement, and its audience isn't even limited to account holders.
    
    Some defensible destinations would be: the delivery disclaimer area (where "anyone holding the link is a Recipient" lives, since domain verification is part of the same delivery-risk story), or the Custom Domains section E.1 it already cross-references. If you want a structural fix rather than a relocation, adding a short "Your responsibilities" subsection would also give the DNS/deliverability and member-management duties (flagged in ERRATA item 10) a proper home — right now those are similarly scattered.

115. "**Permitted API integration.** 
    The clause is close to standard language with one mildly unusual element. 

    @see ERRATA-115.md regarding the unusual element.

    Detail to include: a restriction based on proper use of regional environments. The clause should be rewritten to clarify that the API integration is permitted only if it adheres to the proper use of regional environments, ensuring that data residency and privacy requirements are met. It is the integrators responsibility to ensure that their integration complies with the requirements of their customers.

116. Your responsibilities. 
    We already have language in one of the documents, about excepting our responsibilities from user's responsibilities.
    We need to tie these loose ends together with Verifying your onthe rite site, and defining a list of official domains:

- "OnetimeSecret.dev"
- "OnetimeSecret.com"
- "Onetime.co"
- "Onetime.dev"
- "otshosted.com"
- "otshosted.dev"
- "metalbaum.com"
- "metalbaum.dev"
- "OnetimeSecretary.dev"
- "OnetimeSecretary.com"

### Additions to incorporate

14. **DPA rationale** (CHANGELOG.md:156). Incorporate the annotation: the DPA
    can cover all tiers because the multi-tenant regional environments and
    custom installs run the same way, with the same security and privacy
    controls.

15. **TOMs: public OCI images** (WHATS-CHANGED.md:126). Add: we run the
    application from the public OCI images as regular operating procedure;
    any exception is temporary, for rapid vulnerability patching.

16. **One-human-per-login significance** (CHANGELOG.md:29). The annotation
    notes this matters for privacy and security controls (e.g. secret
    delivery). Make sure the ToS/summaries convey why, not just the rule.

### Not yet ssorted


* In principles: "The only cookie we use is for keeping you logged in" on the Data Minimization page should be cross-checked against the PP's collection inventory (color mode and preferred region were added in Oct 2024) while you're in there.

## 2026-07-01 — Verification results (items 4–7 and header findings 3–4)

**Item 4 — single-tenant provisioning source found.** CHANGELOG.md:93
summarizes `onetime-terms-of-service.md:362`, "Single-tenant deployment
options" (in the Payment/billing section):

> Our Global Elite tier provides a manual, high-touch, single-tenant
> deployment that can be tailored to a customer's requirements. We may also
> offer automatically provisioned single-tenant deployments, which provide a
> dedicated environment through an onboarding experience similar to our
> multi-tenant plans. Where offered, an automatically provisioned
> single-tenant deployment may consist of a single virtual server running the
> application and database together, or of separate application and database
> instances, with configurable resources and a choice of hosting region. The
> deployment options available to you, including resources and region, are
> described where the offering is presented.

The ToS already has the desired "We may … Where offered …" carve-out framing.
The defect is only in the changelog's summary, which restated it as if it
were a live offering. Fix the changelog line, not the ToS.

**Item 5 — edge-network TLS termination source found.** WHATS-CHANGED.md:83
and CHANGELOG.md:131–132 summarize `onetime-privacy-statement.md:170` (Data
residency section, "Edge networks" bullet):

> Cloudflare (for our regional domains) and Approximated (for Custom Domains
> on Identity Plus and Team Plus) operate global edge networks that terminate
> TLS connections at an edge location close to the visitor, which may be
> outside the destination region. The decrypted application traffic is then
> forwarded over an encrypted channel into the appropriate regional
> environment for processing. Global Elite deployments do not use these
> third-party edge networks; TLS is terminated on dedicated infrastructure
> managed by us within the customer's selected region.

Related: PP:105–111 (subprocessor table) and DPA Schedule A rows for
Approximated and Cloudflare. Note the "exception" is actually two distinct
services with different scopes — Cloudflare on regional entry domains,
Approximated on paid-tier Custom Domains — so per-region (or per-surface)
specificity means addressing them separately, not as one blanket clause.

**Item 6 — Trademark Policy was more than an upstream leftover.** At the
2024-10-22 tag, `onetime-trademark-policy.md` existed as a top-level file in
the public repo, rebranded for Onetime Secret (commit 42ad6a8 "First pass on
trademark policy"); removed 2026-05-31 (commit 8294787). However, the Oct
2024 ToS never linked it — its Trademarks section (main:210) says "must
adhere to our trademark guidelines" with no link to the policy document.
So: published in the public repo, but not referenced from the published
Terms. Judgment call — if "published" means linked from the live site, the
retirement line can go; if the public repo counts, keep it.

**Item 7 — Oct 2024 privacy contact confirmed.** The Oct 2024 Privacy
Statement used support@onetimesecret.com (subject line "Privacy Concerns")
with a 45-day response commitment (main:109, 143). So the changelog can
state the delta precisely: contact changed support@ → privacy@, response
time 45 → 30 days (extendable once by 30 with notice).

**Header finding 3 — actioned.** DPA header changed from "Last modified:
February 18, 2026" to "Effective date: TBD on release" (the old line had a
non-breaking space after the colon, for anyone grepping history). GE-4 in
`onetime-dpa-review-tasks.md` updated to done/APPLIED-in-b013643.

**Header finding 4 — cleanup is a no-op.** WHATS-CHANGED.md contains no
restatement of the 2024-06→2024-10 changes (no governing-law, Cloudflare, or
region-selection deltas); it already frames everything against the Oct 2024
baseline. The full CHANGELOG correctly retains the 2024 sections. Nothing to
remove.

## 2026-07-01 — Decisions confirmed and applied

**Items 1–3 decided.** ERRATA-1 through ERRATA-3 are confirmed as the
decisions of record; their prose stands as drafting guidance.

**Item 1 applied to the ToS.** Direction: soften/redirect the prohibition
language into promoting the intended arrangements (per the Kinde analysis in
ERRATA-1) — encourage growth, temper abuse through cost structure (it's
easier to use the service properly than to subvert it), and note that the
MIT-licensed open-source application means sufficiently motivated parties
can always run their own. Changes made:

- ToS Section C.4 rewritten: leads with "one Organization represents one
  customer, each carries its own subscription" as the structure underneath
  all supported arrangements; "Serving your own customers" now expressly
  allows owning/administering many customer Organizations and decouples who
  pays (owner or their customer); new "Running your own instance" bullet
  (MIT license, self-hosted installs independent of these Terms); the
  prohibition collapsed to one plain boundary ("One customer per
  subscription") plus a separate-agreement path for hosted resale and
  white-labeling.
- ToS Section B.2 Organization cap reframed as a housekeeping measure, not a
  business restriction, raised on request (per ERRATA-1: the cap stops doing
  anti-abuse work once every Organization carries its own subscription).
- ToS Section B.3 "One Organization per customer" cross-reference updated to
  match the new C.4 framing.
- Follow-on: CHANGELOG.md:66–68 and WHATS-CHANGED.md:56–60 summary bullets
  still reflect the old prohibition-first framing; regenerate in the
  summary-refresh pass.

**Item 6 applied.** Trademark Policy retirement line removed from
CHANGELOG.md.

**Item 115 applied.** ERRATA-115.md added (assessment: clause is standard
except the affirmative attribution duty — the atypical element). ToS
Permitted API integration clause (C.4) rewritten: the attribution duty
removed entirely (keeping only the standard anti-passing-off condition);
added clear data-jurisdiction language — each regional environment stores
and processes data within its own jurisdiction, data-residency commitments
apply per region (cross-referenced to B.1 and the Privacy Statement), and
the integrator is responsible for ensuring their integration meets the
data-residency and privacy regulations that apply to them and their
customers.
