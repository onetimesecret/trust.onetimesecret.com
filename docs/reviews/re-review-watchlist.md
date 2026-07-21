# Re-review watchlist — external references

Living register of the external sources the four policy documents and ADR-002
depend on, with re-check cadence. Extracted from the 2026-07-18 peer-benchmark
run (`docs/research/2026/20260718-peer-benchmark-legal-docs.md`) and its follow-up
verification pass; the report itself is a dated artifact and no longer carries
URLs — this file is the canonical URL record.

Conventions: **Last verified** is the date the source was fetched and its
content confirmed. Update the date when re-checked; note material changes in
the report or a new dated research file, not here. Cadence tiers: quarterly
(certifications that lapse), semi-annual (adequacy + regulator guidance),
pre-revision (diff before touching the dependent document), annual
(full re-benchmark).

---

## 1. Certifications that lapse — quarterly

These are annual self-certifications. If one lapses, a DPA clause loses its
stated mechanism.

| Source | URL | Depends on it | Check | Last verified |
|---|---|---|---|---|
| Stripe DPF listing | https://www.dataprivacyframework.gov/list — search "Stripe, Inc." | DPA §12.2(a) (sole mechanism for the only US flow) | Status **Active**; covers EU-US + UK Extension + Swiss-US | 2026-07-18 (via DPA drafting; participant ID not pinned — pin it next check) |
| DPF framework status | https://www.dataprivacyframework.gov/ + EU Commission adequacy page (§2) | DPA §12.2(a); invalidation triggers the SCC-fallback cooperation clause | Framework not invalidated/suspended; note pending litigation | 2026-07-18 |

Peer DPF listings, for benchmark diffs only (not dependencies): GitHub
https://www.dataprivacyframework.gov/participant/6174, PostHog
https://www.dataprivacyframework.gov/participant/2915.

## 2. Adequacy decisions — semi-annual

| Source | URL | Depends on it | Check | Last verified |
|---|---|---|---|---|
| EU adequacy decisions (list) | https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en | Canada (PIPEDA) adequacy → EU-customer posture of a BC company; Switzerland adequacy → Proton flow, DPA §12.2(d) | Canada still listed (2024 review maintained it; reforms frozen — see §5 Bill C-27); Switzerland still listed | 2026-07-18 |
| UK adequacy regulations (UK→third country) | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/ | UK→EU Sentry flow (DPA §12.2(e)); UK→Switzerland (Proton, §12.2(d)) | EU and Switzerland still adequate under UK regulations | 2026-07-18 |
| Swiss FDPIC adequacy list | https://www.edoeb.admin.ch/en/adequacy | Swiss-user posture (open question from benchmark — Canada-under-FADP unresolved; the one Swiss claim was refuted 0-3) | Canada's FADP status; whether a FADP clause is needed | 2026-07-18 (fetched; claim refuted — treat angle as open) |

## 3. Regulator guidance baselines — semi-annual, and always before a DPA revision

| Source | URL | Depends on it | Baseline verified | Last verified |
|---|---|---|---|---|
| EDPB Guidelines 9/2022 (breach notification) | https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-92022-personal-data-breach-notification-under_en | DPA §8 redraft (paras 44-46); Art. 27 breach consequence (paras 72-73) | v2.0, adopted 2023-03-28 | 2026-07-18 |
| EDPB Opinion 22/2024 (processor/sub-processor obligations) | https://www.edpb.europa.eu/our-work-tools/our-documents/opinion-board-art-64/opinion-222024-certain-obligations-following_en | DPA §6 model; §6.3 carve-out risk point | Adopted 2024-10-07 | 2026-07-18 |
| ICO: contracts — minimum required terms | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/contracts-and-liabilities-between-controllers-and-processors-multi/what-needs-to-be-included-in-the-contract/ | DPA Art. 28(3) checklist mapping; audit + subprocessor clauses | Eight-term list; DUAA 2025 left Art. 28(3) unamended | 2026-07-18 |
| ICO: who needs to document processing (RoPA) | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/documentation/who-needs-to-document-their-processing-activities/ | Controller-side RoPA gap (report §2.6) | Sub-250 exemption excludes non-occasional core processing | 2026-07-18 |
| EC Standard Contractual Clauses page | https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en | ADR-002 counsel question (conditional SCC clause); Stripe SCC-fallback | 2021 SCCs current; **watch**: Commission has signalled additional SCCs for importers already subject to GDPR — would change the conditional-clause calculus | 2026-07-18 |
| ICO IDTA / UK Addendum page | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/international-data-transfer-agreement-and-guidance/ | Same counsel question, UK leg | IDTA of 2022-03-21 current | 2026-07-18 |

## 4. Peer documents — diff before revising the corresponding OTS document; annual otherwise

Verified-version baselines matter: diff against these, not against memory.

| Peer | URL | Baseline verified | Why we track it |
|---|---|---|---|
| GitHub DPA | https://github.com/customer-terms/github-data-protection-agreement | Oct 2025 version, fetched 2026-07-18 | Closest structural model for our DPA §6, §11 |
| GitHub site-policy repo | https://github.com/github/site-policy | CC0 license confirmed 2026-07-18 | Upstream source of our ToS/PP; watch for upstream changes worth porting (repo history diffs cleanly) |
| Tailscale DPA | https://tailscale.com/dpa | Jun 2025 version, fetched 2026-07-18 | Model formulation for breach clause + refund remedy |
| PostHog DPA | https://posthog.com/dpa | Fetched 2026-07-18 | Leanest conditional-SCC drafting; graduated subprocessor remedy |
| Proton legal hub + transparency report | https://proton.me/legal · https://proton.me/legal/transparency | Fetched 2026-07-18 | Privacy-brand artifact benchmark (EU rep via Proton Europe sàrl; transparency report; SLA credits for all paid users) |
| Signal | https://signal.org/legal/ | Fetched 2026-07-18 | Minimal-ToS posture for an E2EE product |
| Standard Notes | https://standardnotes.com/legal/terms | Fetched 2026-07-18 | Small-company E2EE ToS benchmark |
| Tailscale privacy policy | https://tailscale.com/privacy-policy | Fetched 2026-07-18 | Names EU (EDPO) + UK reps — the model if we appoint one |
| Bitwarden / Fastmail legal pages | https://bitwarden.com/terms/ · https://www.fastmail.com/about/ | Swept 2026-07-18 (7-peer artifact sweep; exact sub-URLs not pinned — pin on next sweep) | Round out the 7-peer artifact matrix in report §3a |

## 5. Statutes in motion — check on revision of the dependent doc

| Source | URL | Depends on it | Status at last check |
|---|---|---|---|
| Quebec Law 25 (P-39.1 as amended) | https://www.legisquebec.gouv.qc.ca/en/document/cs/P-39.1 | PP Canada section; s. 3.1 person-in-charge publication duty (open gap); s. 17 before-transfer assessment (Sentry flow, ADR-002 note) | Statutory duties confirmed 2026-07-18 |
| UK Data (Use and Access) Act 2025 | legislation.gov.uk — search "Data (Use and Access) Act 2025" (deep link not pinned) | UK Addendum; ICO guidance in §3 may be revised under it | As of 2026-07: Art. 28(3) and Art. 30 unamended; RoPA replacement abandoned |
| Canada Bill C-27 / CPPA successor | https://www.parl.ca/legisinfo/ — search C-27 | PP PIPEDA references; Canada's EU adequacy rests on PIPEDA | Reforms frozen (per McMillan, 2026-07-18); if revived, PP references and adequacy analysis both reopen |

## 6. Secondary commentary — context only; refresh at annual re-benchmark

No dependencies; useful starting points when the annual re-benchmark reruns.

- https://iapp.org/news/a/schrems-ii-impact-on-data-flows-with-canada — adequacy covers PIPEDA-governed recipients only; provincial-law nuance
- https://iapp.org/news/a/representatives-under-art-27-of-the-gdpr-all-your-questions-answered — Art. 27 explainer
- https://mcmillan.ca/insights/publications/privacy-on-ice-canada-maintains-gdpr-adequacy-status-despite-frozen-privacy-reforms/ — Canada adequacy 2024 review
- https://www.dentonsdata.com/canadas-pipeda-remains-adequate-under-the-gdpr-what-it-means-for-business/ — same, business framing
- https://www.nortonrosefulbright.com/en/knowledge/publications/2ea9c21f/new-european-standard-contractual-clauses-new-privacy-considerations — 2021 SCC analysis
- https://www.sidley.com/en/insights/publications/2021/09/switzerland-recognizes-new-eu-standard-contractual-clauses — FDPIC recognition of 2021 SCCs
- https://www.vlplawgroup.com/blog/2023/02/08/top-five-pain-points-in-data-processing-agreements-a-blog-post-by-michael-whitener/ — DPA negotiation pain points (audit costs, liability caps)
- https://georgetownlawtechreview.org/content-moderation-on-end-to-end-encrypted-systems-a-legal-analysis/GLTR-01-2024/ — AUP enforcement over content the provider can't read (ToS D.2/D.4 posture)
- https://www.ncsc.gov.uk/files/NCSC-Vulnerability-disclosure-Toolkit-v2.pdf — VDP/security.txt, if that artifact is adopted
- https://drata.com/learn/assurance/trust-center-updates-best-practices — trust-centre conventions (for the trust site build-out)

## 7. Event-driven triggers — no URL, reopen on occurrence

- **Any new subprocessor or cross-region data path** → reopens ADR-002; the new flow must be regionalized or added to DPA §12.2 with a named mechanism. Still unmapped as of 2026-07-18: cross-region support-tooling access.
- **DPF invalidated or Stripe listing lapses** → §12.2(a) SCC-fallback cooperation clause activates; execute SCCs with Stripe.
- **Counsel outcomes** on the conditional-SCC clause and §8/§13 liability interaction (`REMAINING_DECISIONS.md`) → update DPA and this list's §3 dependencies.
- **EU/UK representative appointed** → §2.2 of the report and UK Addendum §3.4 both revise; remove the rep-related checks above.
- **Annual re-benchmark** (next: ~2027-07) → rerun the deep-research comparison; peers verified live are cheap to re-diff from the §4 baselines.

---

Live verification links already embedded in the published docs (not duplicated
here): TOMs §2.1 carries per-domain SSL Labs links; the subprocessor register
(`trust.yaml` / DPA Schedule A) carries per-provider legal-entity records.
