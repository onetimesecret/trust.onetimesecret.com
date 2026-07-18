# Peer benchmark: ToS / Privacy / DPA / TOMs vs privacy-first SaaS convention

**Date:** 2026-07-18
**Branch reviewed:** `integration/2026-update` (terms.mdx, privacy.mdx, dpa.mdx, toms.mdx, policy-constants.yaml)
**Method:** Multi-agent deep-research run (106 agents): 5 search angles → 24 sources fetched → 117 claims extracted → top 25 adversarially verified with 3-vote panels → 21 confirmed, 4 refuted. Peer DPAs verified verbatim against live primary documents (GitHub Oct 2025, Tailscale Jun 2025, PostHog) on 2026-07-18. Supplemented by full manual read of all four local documents.

**Coverage caveat:** every claim that survived verification concerns the DPA and EU/UK data-protection law. The ToS, Privacy Statement, TOMs, and the missing-artifacts inventory were *not* verified against the broader peer set (Proton, Bitwarden, Signal, Fastmail, Plausible, Standard Notes were fetched but produced no surviving claims). Absence of findings there is absence of verification, not evidence of alignment. Section 4 below is this session's document-level analysis, clearly separated from the web-verified findings.

---

## Executive summary

The four documents are structurally conventional for a privacy-forward SaaS. The subprocessor model mirrors GitHub's almost exactly (including the 30-day window), the 72-hour breach notice is inside the peer range, and the DPA maps onto the ICO's Art. 28(3) minimum-terms checklist. The largest verified gap is **international-transfer mechanics**: every benchmarked peer DPA incorporates the 2021 EU SCCs with explicit module selection, the UK ICO IDTA, and Swiss FADP adaptations; ours incorporates none of these. The most material regulatory gaps for a BC company serving EU/UK users are the **Article 27 EU representative** (no one-stop-shop for a non-EU controller means breach notification to *every* affected Member State's supervisory authority) and **controller-side Article 30 records of processing** (the under-250 exemption does not cover regular core processing). Two clauses sit at the aggressive edge of regulator expectations: the §6.3 emergency-subprocessor carve-out and the bare fixed-72h breach clause.

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

### 2.2 Article 27 EU representative — missing regulatory obligation
As a BC controller subject to Art. 3(2) with no EU establishment, we must designate an EU representative. EDPB Guidelines 9/2022 v2.0 (paras 72-73, the specifically revised paragraph): a non-EU controller gets no one-stop-shop, so a notifiable breach must be reported to **every supervisory authority where affected data subjects reside**. The UK Addendum §3.4 self-assesses a UK-rep exemption, but there is no EU-rep analysis anywhere in the four documents. See also §4.2 — the UK self-assessment itself looks untenable.

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

1. **Conditional SCC incorporation + UK Addendum/IDTA + Swiss FADP adaptation** in the DPA (§2.1).
2. **EU Art. 27 representative** designation, or a documented (and defensible) exemption analysis (§2.2).
3. **Controller-side RoPA** (§2.6).
4. **Third-party attestation posture** (SOC 2 / ISO 27001 / recurring pen-test attestation) to support the audit-clause restrictions (§2.5) — TOMs §4.2 mentions periodic adversarial assessments "disclosed on request," which is weaker than every peer's posture.

The broader hypothesized inventory — security.txt/VDP, DSAR intake page, law-enforcement transparency report, status/SLA page, standalone DPO statement — produced **no verified claims either way** (the Basecamp artifact-list benchmark was refuted 0-3). Treat as open, not as confirmed gaps. Note the trust site already planned in this repo is the natural home for most of these.

---

## 4. Document-level observations (this session's analysis — NOT web-verified)

These come from a full read of the four documents; they were in-scope angles the workflow could not verify. Flag for counsel rather than treating as settled.

### 4.1 DPA §8 fine-allocation vs §13 liability cap tension
§8: "Each party shall bear the costs of any fines, penalties, damages… to the extent arising from such party's breach." §13 *Liability*: everything subject to ToS Sections L/M/N. ToS M excludes consequential damages entirely and has **no monetary cap for direct damages** — it is an exclusion clause, not a cap. Whether §8's fine-bearing obligation survives §13's incorporation of ToS M is ambiguous in both directions: a customer reads §8 as an uncapped indemnity for GDPR fines; we read §13 as neutering §8. Peer DPAs link to a defined cap in the principal agreement (typically fees paid in trailing 12 months). We have no such defined cap anywhere — that is itself unusual for B2B SaaS and cuts against *us* (unlimited direct-damages exposure) as much as for us.

### 4.2 UK Addendum §3.4 self-assessed rep exemption looks untenable
Art. 27(2) exempts processing that is **occasional**, excludes large-scale special-category data, and is unlikely to result in risk. Three of the four stated grounds (time-limited retention, privacy-enhancing design, minimal data) are not Art. 27(2) criteria; the one that matters — occasional — is hard to sustain for a continuously operated service with UK customers on a dedicated UK region. Same analysis applies a fortiori to the missing EU rep (§2.2). An annual-review commitment does not cure a wrong test.

### 4.3 ToS J.4 termination-at-will is consumer-grade for paid B2B
"With or without cause, with or without notice, effective immediately… refuse service to anyone for any reason" is GitHub's consumer posture. Paid B2B customers (and their procurement checklists) expect notice-and-cure for cause and a notice period + pro-rata refund for convenience. This also interacts badly with the DPA's data-return commitments: immediate termination without notice sits awkwardly beside the 30-day export window.

### 4.4 DPO self-assessment (DPA §3.2) is defensible as drafted
Unlike the Art. 27 analysis, the Art. 37 reasoning (no regular/systematic large-scale monitoring; no large-scale special categories as core activity) applies the correct test and is the posture most small privacy-first peers take. Keep the annual review.

### 4.5 Privacy Statement lacks per-purpose lawful bases (Art. 13(1)(c))
Legitimate interest is named once (SSO security logs). Conventional GDPR notices enumerate the legal basis per processing purpose (contract performance for the service, legal obligation for billing records, legitimate interest for security logs, consent for product news). GitHub's current privacy statement does this; ours, derived from an older GitHub generation, does not.

### 4.6 Quebec Law 25 named but not operationalized
The PP claims operation "in accordance with… Quebec's Law 25." Law 25 requires a designated person in charge of the protection of personal information (default: the CEO) whose title and contact details are published. We name no one. Either name the responsible person or soften the claim.

### 4.7 The moderation-vs-ephemerality story is coherent — keep it that way
ToS D.2 (right to remove content) is expressly qualified by D.4 (no access/scanning by design), and the PP repeats the narrow-access carve-outs consistently. This is the mismatch the research flagged as a misrepresentation-risk pattern for GitHub-derived documents on encrypted products (no claims survived verification either way), and our current drafting already handles it better than most. The one soft spot: D.2's "in our sole discretion" removal right has no mechanism it could actually operate through for unviewed secrets other than the D.4(b)-(d) paths — harmless, but a skeptical security reviewer will ask.

### 4.8 TOMs "known gap" disclosure (§1.2, no centralized tamper-evident audit logging)
Honest and unusual — it builds credibility, and Art. 32 requires *appropriate* not perfect measures. But it is now a discoverable admission in a public document. Pair it with a dated remediation intent (even "under evaluation, target FY2027") so it reads as a roadmap item rather than an indefinite deficiency.

---

## 5. Refuted claims — do not rely on these (0-3 votes)

1. **Basecamp CC-BY policy-reuse precedent** — 37signals does *not* publish its policy suite under CC BY 4.0 inviting reuse. Our CC0/GitHub-derived approach is not legitimized by that precedent (GitHub's own site-policy repo is CC0, which remains the actual basis).
2. **Basecamp artifact-list benchmark** (SLA, security overview, use-restrictions policy, etc.) — not verified as described; the missing-artifacts inventory needs a real peer sweep.
3. **Swiss FADP adequacy mechanics** as stated — the Swiss angle is entirely unresolved.
4. **TIA-documentation duty for the Stripe/DPF transfer** — we are not verified to owe customers transfer-impact-assessment documentation for a DPF-covered transfer.

## 6. Open questions

1. **Transfer mapping:** does regional localization actually eliminate all restricted transfers besides Stripe-US — support tooling access across regions, centralized error monitoring (EU Sentry receiving non-EU regions' errors?), Global Elite EU geo-backups for non-EU customers? If unmapped paths exist, the missing SCCs become an active gap, not a theoretical one. (Note: PP says Sentry is EU-hosted; whether US/CA/NZ regions ship errors to it is exactly this question.)
2. **Swiss posture:** is Canada adequate under revised FADP; do Swiss users' data reach non-adequate regions; is an FADP adaptation clause needed?
3. **Peer artifact sweep:** which artifacts (VDP/security.txt, transparency report, SLA, DSAR page) are actually standard across Proton/Bitwarden/Signal/Fastmail — unverified after the Basecamp refutation.
4. **Liability cap:** confirm with counsel whether the absence of any monetary cap on direct damages (ToS M is exclusions-only) is intended.

## 7. Recommended actions, in priority order

1. **DPA: add a conditional transfer-mechanisms section** — 2021 EU SCCs Module 2 (and 3 for onward transfers) incorporated "to the extent legally required," UK Addendum, Swiss FADP adaptation. One section; closes the top verified gap; PostHog's is the leanest model.
2. **Art. 27: appoint an EU representative** (services run €500-2k/yr) or have counsel bless an exemption memo that survives the "occasional" test; redo the UK §3.4 assessment with the correct criteria at the same time.
3. **DPA §8 redraft (breach):** "without undue delay and in any event within 72 hours of becoming aware," add the unsuccessful-attempts carve-out and a phased-information commitment (Tailscale formulation).
4. **DPA §6.3: narrow the emergency carve-out** — e.g., limit to like-for-like replacement of an existing Schedule A category, notice within 5 business days, objection window plus pro-rata refund remedy.
5. **Create the controller-side RoPA** (internal; the policy-constants/trust.yaml register is 60% of the processor-side inputs already).
6. **DPA §11: drop audit notice to 30 days** to match GitHub, and decide the attestation roadmap (recurring pen-test letter now; SOC 2 when revenue justifies) that makes the restrictions defensible.
7. **Resolve the §8-fines / §13-cap / ToS-M interaction** with counsel; consider a real mutual cap (12-month fees) which is *more* protective than the current exclusions-only posture.
8. **ToS J.4: add B2B termination terms for paid plans** (cure period for cause; 30 days + pro-rata refund for convenience).
9. **PP: add per-purpose lawful bases; name or soften the Law 25 reference.**

## Sources (verified primary)

- GitHub DPA — github.com/customer-terms/github-data-protection-agreement (Oct 2025 version)
- Tailscale DPA — tailscale.com/dpa (Jun 2025)
- PostHog DPA — posthog.com/dpa
- EDPB Guidelines 9/2022 v2.0 (breach notification), paras 44-46, 72-73
- EDPB Opinion 22/2024 (Art. 64(2), processor/sub-processor obligations), exec summary + para 27
- ICO: contracts — minimum required terms (Art. 28(3)); documentation — who needs to document (Art. 30)
- ICO NCSC Vulnerability Disclosure Toolkit v2; proton.me/legal/transparency; signal.org/legal; standardnotes.com/legal/terms (fetched; no surviving claims)
- Secondary: IAPP (Schrems II/Canada; Art. 27 explainer), Norton Rose Fulbright, McMillan, Dentons, Sidley (Swiss SCC recognition)
