# Peer benchmark: ToS / Privacy / DPA / TOMs vs privacy-first SaaS convention

**Date:** 2026-07-18
**Branch reviewed:** `integration/2026-update` (terms.mdx, privacy.mdx, dpa.mdx, toms.mdx, policy-constants.yaml)
**Method:** Multi-agent deep-research run (106 agents): 5 search angles → 24 sources fetched → 117 claims extracted → top 25 adversarially verified with 3-vote panels → 21 confirmed, 4 refuted. Peer DPAs verified verbatim against live primary documents (GitHub Oct 2025, Tailscale Jun 2025, PostHog) on 2026-07-18. Supplemented by full manual read of all four local documents. Follow-up verification pass 2026-07-18 (3 agents, live fetches): 7-peer trust-artifact sweep, PP lawful-bases and B2B-termination convention checks, Quebec Law 25 statutory verification.

**Coverage caveat (updated after follow-up pass):** the original run's surviving claims all concerned the DPA and EU/UK law. The 2026-07-18 follow-up pass closed most of that hole: the peer artifact inventory is now verified across 7 companies (§3), and the §4.3 termination, §4.5 lawful-bases, and §4.6 Law 25 observations are now source-verified (one of them — the GitHub lawful-bases sub-claim — turned out to be wrong and is corrected in place). Still unverified: the TOMs-specific angles and the §4.1 contract-interpretation question, which are counsel territory rather than web-checkable.

---

## Executive summary

The four documents are structurally conventional for a privacy-forward SaaS. The subprocessor model mirrors GitHub's almost exactly (including the 30-day window), the 72-hour breach notice is inside the peer range, and the DPA maps onto the ICO's Art. 28(3) minimum-terms checklist. The largest verified benchmark difference is **international-transfer mechanics**: every benchmarked peer DPA incorporates the 2021 EU SCCs with explicit module selection, the UK ICO IDTA, and Swiss FADP adaptations; ours incorporates none — a deliberate posture as of 2026-07-18, with the regional-localization rationale and full flow inventory documented in ADR-002 (see §2.1) and only the conditional-clause question left for counsel. The most material regulatory gaps for a BC company serving EU/UK users are the **Article 27 EU representative** (no one-stop-shop for a non-EU controller means breach notification to *every* affected Member State's supervisory authority) and **controller-side Article 30 records of processing** (the under-250 exemption does not cover regular core processing). Two clauses sit at the aggressive edge of regulator expectations: the §6.3 emergency-subprocessor carve-out and the bare fixed-72h breach clause.

---

## 1. Where we align with convention (verified 3-0)

### 1.1 Subprocessor authorization model = GitHub's structure
General authorization + advance notice + objection window + termination-as-sole-remedy is exactly GitHub's model (§9.A-C: 30 days' notice, "may terminate any subscription for the affected Online Services without penalty"), matching our 30-day `subprocessor_notice_days`. ICO guidance requires only advance notice and "a chance to object" and prescribes no post-objection remedy. Peer variations: Tailscale uses 10-day notice with a **pro-rata refund** as the sole-and-exclusive remedy (the refund is our point of difference); PostHog is the outlier with a graduated remedy (remediation attempts first, termination after 30 unresolved days).

### 1.2 Full subprocessor register with push notice satisfies EDPB Opinion 22/2024(a)
The Opinion expects identity information (name, address, contact) for **all** subprocessors readily available at all times, proactively supplied and kept current, regardless of risk. Our Schedule A / one-page register plus email notice to all account holders aligns; on-request-only publication would not.

### 1.3 72-hour breach notice is inside the peer range
Tailscale uses the same 72h outer bound. GitHub and PostHog commit only to "without undue delay" (no hour figure anywhere in GitHub's DPA). A fixed 72h is stricter in form than the GDPR Art. 33(2) baseline. Drafting defects remain — see §2.3.

### 1.4 DPA structure maps onto the UK Art. 28(3) checklist
The eight minimum terms (documented instructions, confidentiality, security, sub-processor rules, DSR assistance, controller assistance, end-of-contract, audits) plus the chapeau's processing-details requirement (our Schedule B) are all present. The Data (Use and Access) Act 2025 left Art. 28(3) and Art. 30 unamended. A formal clause-by-clause validation pass was scoped but not executed — cheap to do.

### 1.5 Audit clause is a permissible supplement
Once-per-calendar-year with breach/regulator exceptions is fine in principle — Art. 28(3)(h)/ICO set no frequency cap — provided restrictions don't have a "dissuasive effect" on the underlying right. But see §2.5: we restrict harder than GitHub in one dimension without GitHub's justifying attestations.

---

## 2. Deviations and risk points (verified, ranked)

### 2.1 No SCC / IDTA / Swiss FADP incorporation — highest-risk gap
Every benchmarked peer layers transfer mechanisms; we incorporate none:

| | EU SCCs (2021) | UK IDTA/Addendum | Swiss FADP | DPF |
|---|---|---|---|---|
| GitHub | Modules 1, 2, 3 incorporated | s.119A(1) Addendum | Swiss-modified SCCs, FDPIC fallback | Self-certified |
| Tailscale | Modules 2/3 form part of DPA | ICO IDTA (21 Mar 2022) | GDPR refs amended to FADP | — |
| PostHog | Module 2 only, optional clauses excluded | UK Addendum | FDPIC 27-Aug-2021 statement | Self-certified |
| **OTS** | **Mentioned once (dpa.mdx:214) as unexecuted Stripe contingency** | **None** | **None** | **Stripe's, not ours** |

Our architecture genuinely reduces transfers, and verifiers noted the "gap" framing is an inference, not a regulator holding. But our own Stripe-US carve-out admits at least one restricted-transfer path, and the §12.2(b) edge-network TLS termination (Cloudflare/Approximated terminating outside the region) is a cross-border data flow with **no named Art. 46 mechanism at all**. Peers treat conditional incorporation ("to the extent legally required, the SCCs are incorporated…") as standard belt-and-suspenders. That drafting pattern costs one section and closes the gap without conceding transfers occur.

**Posture decided 2026-07-18:** the no-SCC posture is deliberate and now documented. Regional localization means restricted transfers do not occur in ordinary operation; the complete cross-border inventory — Stripe (billing, paying customers only, DPF-covered), Proton correspondence (company email and internal documents, Swiss adequacy), transient edge TLS, Global Elite geo-backups, and centralized EU error monitoring (confirmed same day, see §6.1) — is recorded with mechanisms in `decisions/ADR-002-transfer-mechanisms.md`, and DPA §12.2(d) and (e) now name the Proton and Sentry flows (previously disclosed elsewhere but absent from §12.2's exception list). Whether to add the conditional clause peers use anyway remains on the counsel list (`REMAINING_DECISIONS.md`).

### 2.2 Article 27 EU representative — missing regulatory obligation
As a BC controller subject to Art. 3(2) with no EU establishment, we must designate an EU representative. EDPB Guidelines 9/2022 v2.0 (paras 72-73, the specifically revised paragraph): a non-EU controller gets no one-stop-shop, so a notifiable breach must be reported to **every supervisory authority where affected data subjects reside**. The UK Addendum §3.4 self-assesses a UK-rep exemption, but there is no EU-rep analysis anywhere in the four documents. See also §4.2 — the UK self-assessment itself looks untenable. Peer practice (2026-07-18 sweep): only Proton (Proton Europe sàrl) and Tailscale (EDPO) name an EU representative in their privacy policies; PostHog claims an unnamed appointment; GitHub, Bitwarden, Signal, and Fastmail publish none, and only Tailscale names a UK rep. The Art. 3(2) obligation does not depend on peer practice — but non-designation is evidently common, which informs enforcement-risk weighting, not compliance.

### 2.3 Breach clause drafting defects
dpa.mdx:170 ("shall notify the Company within 72 hours") has three defects vs the Tailscale formulation ("without undue delay (and in any event within seventy-two (72) hours)" of knowledge, excluding "unsuccessful log-in attempts, pings, port scans, denial of service attacks"):
- No "without undue delay" pairing — a bare deadline can be read as licensing delay up to 72h; EDPB para 45 recommends *prompt* notice with information in phases.
- No knowledge/awareness trigger — the clock start is contestable. EDPB para 44: the processor need only establish a breach occurred (not assess risk first), and the controller is "aware" — starting its own Art. 33(1) clock — the moment we inform it.
- No unsuccessful-attempts carve-out — routine noise is arguably notifiable as drafted.
Market practice for processor→controller notice is typically 24-48h precisely so the controller can meet its own 72h duty; our 72h is at the outer edge.

### 2.4 §6.3 emergency-subprocessor carve-out deviates from EDPB Opinion 22/2024(b)
The Opinion's benchmark under general authorisation: an approved list at signature plus a **sufficient timeframe to object before the change**, with the processor actively flagging changes. §6.3 permits engagement before notice; the objection window runs only afterward. GitHub's DPA has no such carve-out. (Qualifier: the Opinion says "should"; it's Art. 64(2) interpretive guidance binding supervisory-authority practice, not legislation. It matters most for EU-establishment controllers.)

### 2.5 Audit clause: restriction without the attestation that earns it
GitHub is *effectively* more restrictive but earns it: audits satisfied primarily by SOC 1/SOC 2 Type 2 and ISO 27001 reports on request; direct audits need 30 days' notice, accredited auditors, and customer-borne costs. We have no third-party attestation layer, yet demand 60 days' notice — double GitHub's. Our cost allocation (requester pays, including our internal facilitation costs) was not among verified claims; GitHub's model (customer compensates cooperation expenses) is comparable.

### 2.6 Controller-side Article 30 RoPA — missing documentation
The DPA commits us to Art. 30(2) *processor* records (dpa.mdx:113). No controller-side RoPA (accounts, billing, marketing, HR) exists among the documents. ICO: the sub-250 exemption covers only *occasional*, low-risk processing — running the service, sales, and payroll are continuous core activities. This is an internal artifact to create, not necessarily a published one.

---

## 3. What we're missing (verified items only)

1. **Conditional SCC incorporation + UK Addendum/IDTA + Swiss FADP adaptation** in the DPA (§2.1) — *reframed 2026-07-18: the no-SCC posture is a documented decision (ADR-002); whether to add the conditional clause anyway is a counsel question, not a missing item.*
2. **EU Art. 27 representative** designation, or a documented (and defensible) exemption analysis (§2.2).
3. **Controller-side RoPA** (§2.6).
4. **Third-party attestation posture** (SOC 2 / ISO 27001 / recurring pen-test attestation) to support the audit-clause restrictions (§2.5) — TOMs §4.2 mentions periodic adversarial assessments "disclosed on request," which is weaker than the 5 of 7 sweep peers that publish certifications (SOC 2 Type II is the common denominator; only Signal and Fastmail publish none).

### 3a. Peer artifact sweep (verified 2026-07-18, live fetches)

The hypothesized inventory was originally sourced from the refuted Basecamp benchmark (§5.2); a real sweep of Proton, Bitwarden, Signal, Fastmail, Tailscale, PostHog, and GitHub replaced it:

| Artifact | Peer prevalence | Our status |
|---|---|---|
| Status page | 7/7 | not assessed in this pass |
| Vulnerability-disclosure channel | 7/7 (security.txt itself 6/7; Bitwarden relies on HackerOne + a repo security policy) | security.txt + PGP key already scaffolded on the trust site (`public/.well-known/security.txt`) |
| DSAR / privacy contact | 6/7 (Proton substitutes in-product self-service; Signal has only a general contact) | PP documents privacy@ — covered |
| Public SLA terms | 4/7, three of the four gated to enterprise/paid-support tiers (Proton the outlier: credits for all paid users) | none — optional by peer practice |
| Transparency report | 4/7 — the consumer-privacy brands (Proton, Signal, Fastmail) plus GitHub; none of the B2B infra tools (Tailscale, PostHog, Bitwarden) | none — a positioning call: privacy-brand posture argues for one, B2B model doesn't |
| SOC 2 / ISO 27001 claims | 5/7 (not Signal, not Fastmail) | none — item 4 above |
| Named EU Art. 27 / UK rep | EU 2/7 (Proton, Tailscale); UK 1/7 (Tailscale) | none — §2.2 |

Reading: the near-universal artifacts (status page, VDP channel, privacy contact) are table stakes, and we are covered or scaffolded on the latter two. The split artifacts (SLA, transparency report) track business model rather than privacy posture, so neither is a verified gap for us — they are choices. The trust site remains the natural home for whichever we adopt.

---

## 4. Document-level observations (4.3, 4.5, 4.6 since verified; the rest not web-checkable)

These come from a full read of the four documents. The 2026-07-18 follow-up pass verified three of them against primary sources (marked inline); the remainder are contract-interpretation or drafting judgments — flag for counsel rather than treating as settled.

### 4.1 DPA §8 fine-allocation vs §13 liability cap tension
§8: "Each party shall bear the costs of any fines, penalties, damages… to the extent arising from such party's breach." §13 *Liability*: everything subject to ToS Sections L/M/N. ToS M excludes consequential damages entirely and has **no monetary cap for direct damages** — it is an exclusion clause, not a cap. Whether §8's fine-bearing obligation survives §13's incorporation of ToS M is ambiguous in both directions: a customer reads §8 as an uncapped indemnity for GDPR fines; we read §13 as neutering §8. Peer DPAs link to a defined cap in the principal agreement (typically fees paid in trailing 12 months). We have no such defined cap anywhere — that is itself unusual for B2B SaaS and cuts against *us* (unlimited direct-damages exposure) as much as for us.

### 4.2 UK Addendum §3.4 self-assessed rep exemption looks untenable
Art. 27(2) exempts processing that is **occasional**, excludes large-scale special-category data, and is unlikely to result in risk. Three of the four stated grounds (time-limited retention, privacy-enhancing design, minimal data) are not Art. 27(2) criteria; the one that matters — occasional — is hard to sustain for a continuously operated service with UK customers on a dedicated UK region. Same analysis applies a fortiori to the missing EU rep (§2.2). An annual-review commitment does not cure a wrong test.

### 4.3 ToS J.4 termination-at-will is consumer-grade for paid B2B *(verified 2026-07-18, one refinement)*
"With or without cause, with or without notice, effective immediately… refuse service to anyone for any reason" is GitHub's consumer posture (M.3, confirmed verbatim). The peer B2B terms were fetched: **notice-and-cure for material breach is uniform** — Tailscale §4.3 (30-day cure), PostHog §7.2 (30-day cure), and GitHub's own Customer Agreement §9.3 (30-day cure; prepaid unused fees reimbursed if GitHub is the breaching party). GitHub's B2B General Terms also give either party termination without cause on 30 days' notice with prepaid subscriptions running to term (§9.2) — its enterprise paper differs sharply from the consumer ToS ours derives from, which is the strongest form of the claim. One refinement: "pro-rata refund for convenience" is *not* the literal peer pattern — refunds attach to provider breach or legally-compelled termination (Tailscale §4.4; GitHub §9.4), while pure convenience termination is unavailable (Tailscale), notice-only with prepaid periods honored (GitHub), or restricted to customers with nothing prepaid (PostHog §7.1). Bitwarden is the counter-example, keeping consumer-grade immediate termination even for business accounts. The bad interaction with the DPA's data-return commitments stands: immediate termination without notice sits awkwardly beside the 30-day export window.

### 4.4 DPO self-assessment (DPA §3.2) is defensible as drafted
Unlike the Art. 27 analysis, the Art. 37 reasoning (no regular/systematic large-scale monitoring; no large-scale special categories as core activity) applies the correct test and is the posture most small privacy-first peers take. Keep the annual review.

### 4.5 Privacy Statement lacks lawful-bases coverage (Art. 13(1)(c)) *(verified 2026-07-18 — original GitHub sub-claim corrected)*
Legitimate interest is named once (SSO security logs). The original claim that GitHub's current statement maps a lawful basis to each purpose was **wrong**: verification shows GitHub lists the four bases generically with illustrative examples and leaves its 12-item processing-purposes list unannotated; Tailscale does the same (generic four-bases section). Proton and PostHog do genuine per-purpose mapping — Proton states the basis inline per processing activity, PostHog groups its purposes under each basis. So the verified peer convention is: a dedicated lawful-bases section at minimum (4/4 peers), per-purpose mapping as the stronger tier (2/4). We currently have neither — a single legitimate-interest mention is below even the generic tier.

### 4.6 Quebec Law 25 named but not operationalized *(confirmed 2026-07-18 against the statute)*
The PP claims operation "in accordance with… Quebec's Law 25." Verified against the official English text of the private-sector act: s. 3.1 of P-39.1 (inserted by Law 25 s. 103, in force **2022-09-22**) makes the person exercising the highest authority the person in charge of personal-information protection by default (delegable in writing), and requires that "the title and contact information of the person in charge … be published on the enterprise's website" (fallback to other means only if there is no website). Precision: the statute requires **title + contact information** — the person's name is not statutorily required, though some firm summaries over-state this. Law-firm consensus (BCLP and others) is that the Act likely reaches organizations outside Quebec processing Quebec residents' data, with no minimum thresholds. Since the PP affirmatively claims Law 25 compliance, publication is a duty on the claim's own terms: publish the title (default: the principal) and a contact, or soften the claim.

### 4.7 The moderation-vs-ephemerality story is coherent — keep it that way
ToS D.2 (right to remove content) is expressly qualified by D.4 (no access/scanning by design), and the PP repeats the narrow-access carve-outs consistently. This is the mismatch the research flagged as a misrepresentation-risk pattern for GitHub-derived documents on encrypted products (no claims survived verification either way), and our current drafting already handles it better than most. The one soft spot: D.2's "in our sole discretion" removal right has no mechanism it could actually operate through for unviewed secrets other than the D.4(b)-(d) paths — harmless, but a skeptical security reviewer will ask.

### 4.8 TOMs "known gap" disclosure (§1.2, no centralized tamper-evident audit logging)
Honest and unusual — it builds credibility, and Art. 32 requires *appropriate* not perfect measures. But it is now a discoverable admission in a public document. Pair it with a dated remediation intent (even "under evaluation, target FY2027") so it reads as a roadmap item rather than an indefinite deficiency.

---

## 5. Refuted claims — do not rely on these (0-3 votes)

1. **Basecamp CC-BY policy-reuse precedent** — 37signals does *not* publish its policy suite under CC BY 4.0 inviting reuse. Our CC0/GitHub-derived approach is not legitimized by that precedent (GitHub's own site-policy repo is CC0, which remains the actual basis).
2. **Basecamp artifact-list benchmark** (SLA, security overview, use-restrictions policy, etc.) — not verified as described. **Superseded 2026-07-18** by the real 7-peer sweep in §3a.
3. **Swiss FADP adequacy mechanics** as stated — the Swiss angle is entirely unresolved.
4. **TIA-documentation duty for the Stripe/DPF transfer** — we are not verified to owe customers transfer-impact-assessment documentation for a DPF-covered transfer.

## 6. Open questions

1. **Transfer mapping** — *answered in full 2026-07-18:* the operator confirmed non-EU regions DO ship errors to the EU-hosted self-hosted Sentry instance (client- and server-side scrubbing applied; incidental capture possible). Because the flow runs *into* the EU, no restricted transfer arises under any applicable regime (UK→EU is covered by the UK adequacy regulations); the real defect was contractual — DPA §12.1's absolute residency promise contradicted the §5.3 disclosure for non-EU customers — closed by enumerating the flow as §12.2(e). Global Elite geo-backups were already §12.2(c). Support tooling closed the map the same day: all tooling is deployed per region, and the only cross-region element is Processor staff terminals VPNing into a region to administer production — not a Chapter V transfer at all (EDPB Guidelines 05/2021: a transfer requires a distinct importer; same-entity staff access is an Art. 32 matter, now stated in TOMs §1.2 alongside the existing MFA/encrypted-connection controls), with Canada's EU/UK adequacy as the conservative-reading backstop. The ADR-002 rule (regionalize or enumerate with a mechanism) held up on both uses, and **the transfer map is complete**.
2. **Swiss posture:** is Canada adequate under revised FADP; do Swiss users' data reach non-adequate regions; is an FADP adaptation clause needed?
3. ~~**Peer artifact sweep**~~ — **answered 2026-07-18**, see §3a: VDP channel, status page, and privacy contact are near-universal; SLA and transparency reports split by business model; nothing in the sweep creates a new verified gap for us.
4. **Liability cap:** confirm with counsel whether the absence of any monetary cap on direct damages (ToS M is exclusions-only) is intended.

## 7. Recommended actions, in priority order

1. **DPA transfer posture — done 2026-07-18, one counsel question open.** The no-SCC rationale and the four-flow inventory are recorded in `decisions/ADR-002-transfer-mechanisms.md`; DPA §12.2(d) added for the Proton correspondence flow (Swiss adequacy). Remaining: counsel decides whether to add a conditional incorporation clause ("to the extent legally required…" — PostHog's Module-2-only version is the leanest model) as belt-and-suspenders on top of the documented rationale.
2. **Art. 27: appoint an EU representative** (services run €500-2k/yr) or have counsel bless an exemption memo that survives the "occasional" test; redo the UK §3.4 assessment with the correct criteria at the same time.
3. **DPA §8 redraft (breach):** "without undue delay and in any event within 72 hours of becoming aware," add the unsuccessful-attempts carve-out and a phased-information commitment (Tailscale formulation).
4. **DPA §6.3: narrow the emergency carve-out** — e.g., limit to like-for-like replacement of an existing Schedule A category, notice within 5 business days, objection window plus pro-rata refund remedy.
5. **Create the controller-side RoPA** (internal; the policy-constants/trust.yaml register is 60% of the processor-side inputs already).
6. **DPA §11: drop audit notice to 30 days** to match GitHub, and decide the attestation roadmap (recurring pen-test letter now; SOC 2 when revenue justifies) that makes the restrictions defensible.
7. **Resolve the §8-fines / §13-cap / ToS-M interaction** with counsel; consider a real mutual cap (12-month fees) which is *more* protective than the current exclusions-only posture.
8. **ToS J.4: add B2B termination terms for paid plans** — 30-day cure for material breach (uniform peer practice, including GitHub's own Customer Agreement); for convenience termination, 30 days' notice with prepaid subscriptions running to term or refunded pro-rata; a committed refund where we terminate for our own breach or for regulatory reasons.
9. **PP: add a lawful-bases section** — the generic four-bases tier (GitHub/Tailscale) at minimum; per-purpose mapping (Proton/PostHog) is the stronger form. **Law 25:** the publication duty is statutory (P-39.1 s. 3.1) — publish the title and contact information of the person in charge (default: the principal), or drop the compliance claim.
10. **Trust-site artifact priorities from the sweep (§3a):** finish the security.txt/VDP path (already scaffolded); treat the transparency report as a positioning decision (consumer-privacy brands publish one, B2B infra tools don't); skip a public SLA for now (peers gate it to enterprise tiers).

## Sources (verified primary)

- GitHub DPA — github.com/customer-terms/github-data-protection-agreement (Oct 2025 version)
- Tailscale DPA — tailscale.com/dpa (Jun 2025)
- PostHog DPA — posthog.com/dpa
- EDPB Guidelines 9/2022 v2.0 (breach notification), paras 44-46, 72-73
- EDPB Opinion 22/2024 (Art. 64(2), processor/sub-processor obligations), exec summary + para 27
- ICO: contracts — minimum required terms (Art. 28(3)); documentation — who needs to document (Art. 30)
- ICO NCSC Vulnerability Disclosure Toolkit v2; proton.me/legal/transparency; signal.org/legal; standardnotes.com/legal/terms (fetched; no surviving claims)
- Secondary: IAPP (Schrems II/Canada; Art. 27 explainer), Norton Rose Fulbright, McMillan, Dentons, Sidley (Swiss SCC recognition)

Follow-up pass (live fetches 2026-07-18):

- Artifact sweep: proton.me (security.txt, /legal/transparency, /legal/terms §5, /legal/privacy, /business/trust), bitwarden.com (/compliance, /terms, /privacy, /help/security-faqs), signal.org (security.txt, /bigbrother, /legal, /security), fastmail.com (security.txt, /policies/transparency-report, /about/privacy, /policies/terms-of-service), tailscale.com (security.txt, /sla, /privacy-policy, /terms, /security), posthog.com (security.txt, /terms §14, /privacy, /handbook/company/security), github.com (security.txt, transparencycenter.github.com, customer-terms SLA)
- GitHub Customer Agreement, General Terms (March 2025, PDF via github.com/customer-terms) — termination §§9.2–9.4, quoted from raw pdftotext
- GitHub General Privacy Statement, Tailscale privacy policy, Proton privacy policy, PostHog privacy notice — lawful-bases structure
- Quebec: P-39.1 s. 3.1 official English text (legisquebec.gouv.qc.ca); CAI guidance + Québec.ca 2022-09-22 release; BCLP, "Quebec Law No. 25: a little-known privacy law with a big reach" (Jan 2024)
