# Good-Faith Clauses, Transparency Commitments, and Mistake-Correction Processes With Time Windows

Access date: 2026-07-20

## Pattern summary

- **"Good faith" is doing real legal work, not just PR.** CISA, DOJ, HackerOne, disclose.io, and GitHub converge on near-identical language: no legal action against good-faith researchers, a narrow definition (testing/investigation/correction, designed to avoid harm, used primarily to promote security), and the org reserving final judgment on what counts as "good faith."
- **3 business days is the de facto VDP acknowledgment standard.** CISA's template text ("Within 3 business days, we will acknowledge that your report has been received") is mirrored word-for-word by FTC, NASA, DHS, State Department, USPTO, and private adopters (JLL). Bespoke corporate VDPs (A&O Shearman) use looser tiers: 5 business days to acknowledge, 10 to triage.
- **72 hours is the DPA/GDPR breach-notification default; smaller/newer SaaS vendors compress to 48.** Civo and Polser (both small, real companies) commit to 48 hours; compliance.tf and the most-copied Law Insider template use 72; GDPR Art. 33 itself sets 72 hours "where feasible" on top of an unqualified "without undue delay."
- **Transparency-report cadence is drifting from semi-annual to annual/event-driven under new regulatory load.** Mozilla explicitly cites the EU Digital Services Act for its 2024→2025 shift from biannual to annual reporting. Proton VPN instead uses an event-driven model ("updated whenever there is a notable new legal request") rather than a fixed calendar.
- **Warrant canaries are being retired or explicitly declared pointless rather than left to go stale.** Proton states a warrant canary "is not meaningful in Switzerland" because Swiss law already forces eventual notification; Reddit's and Apple's canaries were both quietly dropped, which observers read as a canary-death signal in itself.
- **30 days is the emergent standard notice window for material policy/subprocessor changes**, but GitHub deliberately shortened its own default from a 30-day comment period to a 24-hour window for non-material edits after finding feedback arrives fast or not at all — 30 days is now reserved only for ToS/Privacy-level changes.
- **A "corrections policy" micro-genre has formed on ordinary marketing/comparison pages** ("If you believe any information on this page is inaccurate…"), almost always paired with a fixed review cadence and a dated "last reviewed" line. AFFiNE's editorial policy is the most rigorous real example found and reads as a template a small SaaS could adapt directly.
- **RFC 9116's `Expires` field formalizes freshness for security contacts specifically to stop stale/wrong contacts from swallowing real reports** — yet real deployments (Dropbox's live `security.txt`) often omit the field anyway, showing the gap between spec and practice.

---

## Good faith

### disclose.io — "What is Safe Harbor?" (FAQ)

> Most anti-hacking laws pre-date the idea of hacking for good, or the "digital locksmiths" who increasingly shape modern digital safety.
>
> Those laws get used to suppress good-faith research and limit bad publicity for vendors. The result is a "chilling effect" that silences the very people the Internet most needs to hear from. If hackers are the Internet's immune system, the Internet still has an auto-immune problem.
>
> Safe Harbor is language added to a policy that lets people acting in good faith, as the recipient defines it, report security issues without fear of legal repercussions.
>
> disclose.io helps define, spread, and reward Safe Harbor and other disclosure best practices.

Source: disclose.io, "What is Safe Harbor?" — URL: https://disclose.io/faqs/safe-harbor/ — no page date given; site copyright "© 2026 disclose.io."

### disclose.io — Safe Harbor (full standalone clause)

> When conducting vulnerability research, according to this policy, we consider this research conducted under this policy to be:
>
> - Authorized concerning any applicable anti-hacking laws, and we will not initiate or support legal action against you for accidental, good-faith violations of this policy;
> - Authorized concerning any relevant anti-circumvention laws, and we will not bring a claim against you for circumvention of technology controls;
> - Exempt from restrictions in our Terms of Service (TOS) and/or Acceptable Usage Policy (AUP) that would interfere with conducting security research, and we waive those restrictions on a limited basis; and
> - Lawful, helpful to the overall security of the Internet, and conducted in good faith.
>
> You are expected, as always, to comply with all applicable laws. If legal action is initiated by a third party against you and you have complied with this policy, we will take steps to make it known that your actions were conducted in compliance with this policy.
>
> If at any time you have concerns or are uncertain whether your security research is consistent with this policy, please submit a report through one of our Official Channels before going any further.
>
> Note that the Safe Harbor applies only to legal claims under the control of the organization participating in this policy, and that the policy does not bind independent third parties.

Source: disclose.io framework, "Safe Harbor" (standalone full clause, meant for attaching to an existing policy). License: CC0-1.0. — URL: https://disclose.io/framework/terms/safe-harbor/ — Source repo: github.com/disclose/dioterms.

### disclose.io — Simple Safe Harbor (condensed version)

> We will consider your security research to be authorized if you make a good faith effort to comply with this policy during your security research. If your activities violate certain restrictions in our Acceptable Use Policy, we will waive those restrictions for the limited purpose of allowing security research. We will not sue you for attempting to circumvent the technological safeguards we have put in place to protect the applications in scope. If a third party takes legal action against you for activities carried out in accordance with this policy, we will make this authorization known.
>
> For inadvertent, good-faith violations of this policy, we will not take civil action or file a report with law enforcement. Before doing anything that may be inconsistent with or unaddressed by this policy, please contact us by submitting a report.

Source: disclose.io framework, "Simple Safe Harbor" (condensed clause for quick adoption). License: CC0-1.0. — URL: https://disclose.io/framework/terms/simple-safe-harbor/

### CISA — Vulnerability Disclosure Policy Template (BOD 20-01), "Authorization" section

> This section reflects your commitment to not take legal action against anyone in the general public for security research activities that represent a good faith effort to follow the policy.
>
> **If you make a good faith effort to comply with this policy during your security research, we will consider your research to be authorized we will work with you to understand and resolve the issue quickly, and *AGENCY NAME* will not recommend or pursue legal action related to your research. Should legal action be initiated by a third party against you for activities that were conducted in accordance with this policy, we will make this authorization known.**

(The missing comma after "authorized" is present in the source template itself — reproduced as written.)

And under "What you can expect from us":

> When you choose to share your contact information with us, we commit to coordinating with you as openly and as quickly as possible.
>
> - Within 3 business days, we will acknowledge that your report has been received.
> - To the best of our ability, we will confirm the existence of the vulnerability to you and be as transparent as possible about what steps we are taking during the remediation process, including on issues or challenges that may delay resolution.
> - We will maintain an open dialogue to discuss issues.

Source: CISA, Vulnerability Disclosure Policy Template (implementing Binding Operational Directive 20-01). — Web page URL: https://www.cisa.gov/vulnerability-disclosure-policy-template (page itself did not render via fetch — JS shell; full text instead pulled from the identical source markdown at) — Raw source URL: https://raw.githubusercontent.com/cisagov/cyber.dhs.gov/master/pages/20-01-vdp-template.md — Template undated (evergreen); BOD 20-01 issued 2020-09-02.

### DOJ — Justice Manual 9-48.000, Computer Fraud and Abuse Act — "good-faith security research" definition

> The attorney for the government should decline prosecution if available evidence shows the defendant's conduct consisted of, and the defendant intended, good-faith security research. For purposes of this policy, the attorney for the government should apply the definition of "good-faith security research" recommended by the Register of Copyrights in *Section 1201 Rulemaking: Eighth Triennial Proceeding to Determine Exemptions to the Prohibition on Circumvention,* at 258 (Oct. 2021). That is: "good faith security research" means accessing a computer solely for purposes of good-faith testing, investigation, and/or correction of a security flaw or vulnerability, where such activity is carried out in a manner designed to avoid any harm to individuals or the public, and where the information derived from the activity is used primarily to promote the security or safety of the class of devices, machines, or online services to which the accessed computer belongs, or those who use such devices, machines, or online services. Security research not conducted in good faith—for example, for the purpose of discovering security holes in devices, machines, or services in order to extort the owners of such devices, machines, or services—might be called "research," but is not in good faith. CCIPS can consult with prosecutors about specific applications of this factor.

Source: U.S. Department of Justice, Justice Manual § 9-48.000 (Computer Fraud and Abuse Act), section B.3.8. — URL: https://www.justice.gov/jm/jm-9-48000-computer-fraud — Page marked "[updated May 2022]"; originally published 2015-02-19, modified 2022-05-19T13:01:33-04:00. This is the operative DOJ CFAA charging policy referenced by the May 19, 2022 DOJ press release announcing the policy revision (https://www.justice.gov/archives/opa/pr/department-justice-announces-new-policy-charging-cases-under-computer-fraud-and-abuse-act — cited via search snippet only, not separately fetched).

### GitHub — Bug Bounty Program Legal Safe Harbor, Section 1 "Safe Harbor Terms"

> To encourage research and coordinated disclosure of security vulnerabilities, we will not pursue civil or criminal action, or send notice to law enforcement for accidental or good faith violations of this policy. We consider security research and vulnerability disclosure activities conducted consistent with this policy to be "authorized" conduct under the Computer Fraud and Abuse Act, the DMCA, and other applicable computer use laws such as Cal. Penal Code 502(c). We waive any potential DMCA claim against you for circumventing the technological measures we have used to protect the applications in this bug bounty program's scope.
>
> Please understand that if your security research involves the networks, systems, information, applications, products, or services of a third party (which is not us), we cannot bind that third party, and they may pursue legal action or law enforcement notice. We cannot and do not authorize security research in the name of other entities, and cannot in any way offer to defend, indemnify, or otherwise protect you from any third party action based on your actions.
>
> You are expected, as always, to comply with all laws applicable to you, and not to disrupt or compromise any data beyond what this bug bounty program permits.
>
> Please contact us before engaging in conduct that may be inconsistent with or unaddressed by this policy. We reserve the sole right to make the determination of whether a violation of this policy is accidental or in good faith, and proactive contact to us before engaging in any action is a significant factor in that decision. If in doubt, ask us first!

Also Section 2 "Third Party Safe Harbor" commits GitHub to notify a researcher before sharing non-identifying report content with an affected third party, and to get the researcher's written permission before sharing identifying information.

Source: GitHub Docs, "GitHub Bug Bounty Program Legal Safe Harbor." — URL: https://docs.github.com/en/site-policy/security-policies/github-bug-bounty-program-legal-safe-harbor — © 2026 GitHub, Inc. (footer copyright year; no specific revision date shown on page).

Companion page: GitHub Docs, "Coordinated Disclosure of Security Vulnerabilities" — URL: https://docs.github.com/en/site-policy/security-policies/coordinated-disclosure-of-security-vulnerabilities — quote: "We want to keep GitHub safe for everyone. If you've discovered a security vulnerability in GitHub, we appreciate your help in disclosing it to us in a coordinated manner."

### Salesforce — Responsible Disclosure Policy

> At Salesforce, Trust is our #1 value and we collaborate with our customers, partners, and industry to help everyone in the Cloud grow stronger together.
>
> Independent security researchers play a valuable role in internet security. As a result, we encourage responsible reporting of any vulnerabilities that may be found in our site or applications. Salesforce remains committed to working with security researchers to verify and address any reported potential vulnerabilities.
>
> As a component of responsible disclosure, Salesforce will notify potentially impacted customers when they must take action to patch or otherwise remediate a vulnerability in advance of publicly disclosing the issue and releasing a Common Vulnerabilities and Exposures (CVE®).
>
> Please review these terms before you test and/or report a vulnerability. Salesforce pledges not to initiate legal action against researchers for penetrating or attempting to penetrate our systems as long as they adhere to this policy.

Source: Salesforce Security, "Responsible Disclosure Policy." — URL: https://security.salesforce.com/responsible-disclosure-policy — © Copyright 2026 Salesforce, Inc. (no specific last-updated date shown; page served from a WordPress/go-vip staging host mirror as of fetch).

### Cloudflare — Vulnerability Disclosure Policy (landing page)

> Hello, Researcher!
>
> We take security, privacy, and transparency seriously.
>
> Cloudflare appreciates your effort to help us all build a better, more secure Internet.

Source: Cloudflare, "Vulnerability Disclosure Policy" — URL: https://www.cloudflare.com/disclosure/ — © 2026 Cloudflare, Inc. Note: this page is a marketing landing page that routes researchers to Cloudflare's HackerOne-hosted bounty program rather than hosting Cloudflare's own full legal safe-harbor text (see Gaps).

### HackerOne — Gold Standard Safe Harbor Statement (platform-wide safe harbor used by Cloudflare, GitLab, and many other programs)

> Gold Standard Safe Harbor supports the protection of organizations and hackers engaged in Good Faith Security Research. "Good Faith Security Research" is accessing a computer solely for purposes of good-faith testing, investigation, and/or correction of a security flaw or vulnerability, where such activity is carried out in a manner designed to avoid any harm to individuals or the public, and where the information derived from the activity is used primarily to promote the security or safety of the class of devices, machines, or online services to which the accessed computer belongs or those who use such devices, machines, or online services.
>
> We consider Good Faith Security Research to be authorized activity that is protected from adversarial legal action by us. We waive any relevant restriction in our Terms of Service ("TOS") and/or Acceptable Use Policies ("AUP") that conflicts with the standard for Good Faith Security Research outlined here.
>
> This means that for Good Faith Security Research conducted with a good faith effort to comply with our program guidelines and while this program is active, we:
>
> - **Will not** bring legal action against you or report you, including for bypassing technological measures we use to protect the applications in scope; and,
> - **Will** take steps to make known that you conducted Good Faith Security Research if someone else brings legal action against you.
>
> You should contact us for clarification *before* engaging in conduct that you think may be inconsistent with Good Faith Security Research or unaddressed by our guidelines.
>
> Keep in mind that we are not able to authorize security research on third-party infrastructure, and a third party is not bound by this safe harbor statement.

Source: HackerOne Help Center, "Gold Standard Safe Harbor Statement." — URL: https://docs.hackerone.com/en/articles/8494525-gold-standard-safe-harbor-statement — dated August 11, 2025 on page.

Related: HackerOne, "Safe Harbor Overview & FAQ" — URL: https://docs.hackerone.com/en/articles/8494502-safe-harbor-overview-faq — dated 2026-01-16 per search index; snippet: "A 'safe harbor' is a provision that offers protection from liability in certain situations, usually when certain conditions are met."

### Dropbox — security.txt (real, live, compact safe-harbor pointer)

> \# Dropbox uses Intigriti for responsible disclosure.
> \# Please report abusive content (including malware, spam, etc) to abuse@dropbox.com or https://dropbox.com/report_abuse.
> Bug Bounty Contact: bugbounty@dropbox.com
> Bug Bounty Program: https://app.intigriti.com/programs/dropbox/dropbox
> Bug Bounty Acknowledgements: https://app.intigriti.com/programs/dropbox/dropbox/leaderboard
> Vulnerability Disclosure Program: https://app.intigriti.com/programs/dropbox/dropbox-vdp
>
> Hiring: https://www.dropbox.com/jobs/search?q=security

Source: Dropbox live security.txt file. — URL: https://www.dropbox.com/.well-known/security.txt — fetched 2026-07-20; no `Expires:` field present (see Freshness mechanisms / Gaps — this is a real-world RFC 9116 non-compliance example).

### A&O Shearman — Vulnerability Disclosure Policy (full, non-tech-company example)

> This Vulnerability Disclosure Policy (VDP) explains how to report potential security vulnerabilities affecting A&O Shearman websites, applications, and other online services, and how we will engage with you when you do so. The VDP applies to suspected or confirmed cyber vulnerabilities related to A&O Shearman websites or online services that you have discovered and want to report to us. We value the efforts of security researchers who discover and report such vulnerabilities to us. We do not offer monetary or other rewards for reported vulnerabilities.

> **Our response**
> - We aim for a transparent disclosure process:
> - We will acknowledge your report within five business days.
> - We will attempt to triage and provide a remediation timeline within ten business days. Timelines are targets and may vary depending on severity, complexity, and third‑party dependencies, but we will communicate material changes.
> - We will aim to update you regarding our progress. We request that you keep all communications regarding the vulnerability confidential, to ensure mutual trust and the flexibility to work with us towards the resolution of the vulnerability. Upon resolution, we will inform you and may request confirmation of the fix.
> - We request that public disclosures be coordinated to occur simultaneously.

> All retrieved data must be securely deleted within one month of the vulnerability being resolved or as otherwise required by data protection law. In most cases we will ask you to delete any non‑public data immediately upon reporting, and to confirm deletion in writing once remediation is complete.

Source: A&O Shearman, "Vulnerability Disclosure Policy." — URL: https://www.aoshearman.com/en/legal-notices/vulnerability-disclosure-policy — © 2026 A&O Shearman (no separate revision date shown).

### "Good faith" inside a DPA cooperation/efforts clause

> If we need to add or replace a sub-processor, we'll give you at least 30 days' notice. If you object to a new sub-processor, you may terminate the affected services by notifying us before the sub-processor begins processing. **We'll work with you in good faith to find an alternative solution where possible.**

Source: compliance.tf, "Data Processing Agreement," Section 7 "Sub-processors." — URL: https://compliance.tf/dpa/ — "Last updated: February 23, 2026."

---

## Transparency practice

### GitLab handbook — "Transparency by Default" (security team page)

> Purpose
>
> In alignment with our company value of Transparency, one focus of the security organization is to lead the most transparent security organization in business today. Transparency by default requires us to challenge the status quo where security teams traditionally operate in a very private and closed-off manner. However, being open by default requires us to be even more diligent in our efforts of categorizing data in order to ensure the protection of our customers, company, and team member data. Therefore, our position is that all information and activities produced by the security team should be considered "Public by Default" unless defined below:
>
> **Open to GitLab, Partners, Customers** — This information is only externally available to GitLab Partners or Customers as widespread availability of this data can be damaging to GitLab or risk the security or privacy of GitLab, GitLab customers or GitLab partners.
>
> **Restricted: Security Only or other restrictions imposed** — This information is restricted due to confidential data or privacy concerns related to company, customer [data — fragment cuts off here; see Gaps].

Source: GitLab Handbook, "Transparency by Default" (Security section). — URL: https://handbook.gitlab.com/handbook/security/transparency-by-default/ — Note on method: this page's rendered HTML exceeded single-fetch size limits; the quote above was reconstructed verbatim from the live page via sequential overlapping substring extraction (each fragment's tail matches the next fragment's head exactly), not paraphrased. No visible last-modified date on the rendered page; source repo is gitlab-com/content-sites/handbook.

### GitLab — CREDIT values still include Transparency (as of access date)

> Transparency, and together they spell the CREDIT we give each other by assuming good intent. About our values We take inspiration from other companies, and we alw[ays...]

Source: GitLab Handbook, values index page. — URL: https://handbook.gitlab.com/handbook/values/ — fetched 2026-07-20, confirms the live nav still lists "Transparency by Default" as an active handbook section alongside the other CREDIT values. A May 2026 LinkedIn post titled "GitLab Ditches CREDIT Values, Retires Transparency" circulated the opposite claim; as of this access date the live handbook contradicts that claim (see Gaps for full discussion).

Related snippet (data classification standard, not separately fetched): "Given GitLab's value of transparency and because GitLab is public by default, most Team Member names are available publicly." — URL: https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/938e37dc.../content/handbook/security/data-classification-standard.md

Related snippet (GitLab blog, not separately fetched): "Transparency is a part of everything we do here at GitLab and most things are public by default. This transparency-driven approach can lead to some occasional share of things that should not be public." — URL: https://about.gitlab.com/blog/security-strengthened-by-interation-and-transparency/

### Buffer — "Open" page

> **Open metrics**
> A transparent company since 2010
>
> Since 2013, we've been open with Buffer's finances and our team's salaries, among many other metrics. We share openly because we believe in the power of transparency to build trust, hold us accountable to a high standard, and push our industry forward.
>
> This is a dashboard for anyone to see how we're building Buffer.

Page meta-description (near-duplicate phrasing used for SEO/social cards): "Buffer has been an open and transparent company since 2010. We believe in the power of transparency to build trust, hold us accountable to a high standard, and push our industry forward."

History timeline entry: "December [2013] — We published the whole companies salaries."

Live metrics shown at fetch time: MAU 235,636; MRR $2.1M; ARPU $27.22; ARR $25.6M; CEO Salary $310,320; Average Salary $166,656 (individual named-employee salaries also listed).

Source: Buffer, "Open" hub. — URL: https://buffer.com/open — © 2026 Buffer (live dashboard, continuously updated, no single "last updated" date).

### PostHog handbook — "Public by default" (Communication page)

> ## Public by default
>
> We make things public by default because [transparency] is core to our culture. The kinds of information we share falls into one of three buckets:
>
> - *Public* - most things, including our product, roadmap, handbook and strategy.
> - *Shared internally* - almost everything else, such as financial performance, security, fundraising and recruitment.
> - *Private internally* - personal team information, i.e. compensation, disciplinary issues.
>
> Information that is not publicly shared is in areas with complex signals that can impact our ability to sell, raise money or are inappropriate to share more widely for personal privacy reasons.

Postmortem-publication commitment, same page, "Product Internal" repo section, listing what belongs in the private engineering repo:

> Post-mortems on outages, or other issues affecting a large portion of customers. **The results of these should usually be made public though.**

Source: PostHog Handbook, "Communication." — URL: https://posthog.com/handbook/company/communication — page links to its own GitHub source: https://github.com/PostHog/posthog.com/blob/master/contents/handbook/company/communication.md — © 2026 PostHog, Inc.

### 37signals — Policies page + freshness mechanism

> We make our policies as clear, fair, and readable as possible.

> We may update these policies as needed to comply with relevant regulations and reflect any new practices. If we make significant changes, we will refresh the date at the top of the page and notify users who have signed up to our policy updates mailing list.

Source: 37signals, "Policies, Terms, and General Service Information." — URL: https://37signals.com/policies/ — no page-level date; linked Terms of Service dated 2025-09-02, Privacy Policy dated 2025-09-15 per site index.

### Cloudflare — Transparency Report cadence commitment

> …part of our commitment to transparency, Cloudflare publishes such reports twice a year, describing how we handle legal requests for customer information and reports of abuse of our services.

Source: The Cloudflare Blog, "…and our latest transparency report" (H1 2025 transparency report announcement). — URL: https://blog.cloudflare.com/h1-2025-transparency-report/ — fetched in full 2026-07-20 (large page; quote extracted via targeted substring match).

Companion snippet (not separately fetched, direct search-result quote): "An essential part of earning and maintaining the trust of our customers is being transparent about the requests we receive from law enforcement and other governmental entities. To this end, Cloudflare publishes semi-annual updates to our Transparency Report on the requests we have received to disclose information about our customers." — URL: https://www.cloudflare.com/transparency/h1-2025/

Companion snippet (SEC S-1 filing, not separately fetched): "We publish a transparency report on a semi-annual basis to provide details of law enforcement and government requests we receive." — URL: https://www.sec.gov/Archives/edgar/data/1477333/000119312519222176/d735023ds1.htm

Cloudflare warrant-canary reference (snippet only, via Cloudflare's own Learning Center, not separately fetched): "As of December 2020, Cloudflare has the following warrant canaries posted: Cloudflare has never turned over our encryption or authentication keys or our…" — URL: https://www.cloudflare.com/learning/privacy/what-is-warrant-canary/

### Mozilla — Transparency page

> Transparency is a key part of how Mozilla approaches user trust. As an open source project that relies on open development, we build transparency into the way we write our code. Additionally, our product documentation and notices describe how our products work and how we handle user data. Our Content Moderation page provides more detail on how we handle content moderation generally.
>
> With this transparency in mind, we publish bi-annual transparency reports. Most industry transparency reports offer insights into government disclosures and takedown requests. Mozilla's transparency report goes further with the number of personal data requests we receive, the number of copyright, trademark, and other takedown requests we receive, and details on our targeted advertising practices.

FAQ, "What is the scope of the Transparency Report?":

> The purpose is to provide public insight into Mozilla's data privacy practices, including the types of government demands we receive for our user data or to remove content, requests from individuals or companies to remove content based on copyright or trademark claims, and targeted advertising practices… With each additional report that we publish, we'll continue to reevaluate how we can be more transparent.

Source: Mozilla, "Transparency." — URL: https://www.mozilla.org/en-US/about/policy/transparency/ — fetched in full 2026-07-20; page lists reports back to January-December 2015.

Cadence-change note (snippet, not separately fetched): "Prior to 2024, Mozilla published Transparency reports on a biannual basis. In 2025 we moved to annual reporting in response to the European Union's Digital Services Act (DSA), which introduced specific reporting requirements that are applicable to Mozilla platforms." — URL: https://www.mozilla.org/en-US/about/policy/transparency/2025/

### Mailfence — Transparency Report and Warrant Canary (small real company, live cadence)

> In light of our attachment to online privacy – we would like to present our *Transparency report and Warrant canary* to inform you about legal requests for information of our users.
>
> **Transparency Report**
>
> Between the 1st of July 2025 and 31st of December 2025, Mailfence has:
> 1. received requests for user identification in **21 cases**.
> 2. provided user identification because of a valid Belgium court order in **9 case**.
>
> Last updated: January 2026 (this information will be updated every half year)
> Next update: July 2026
>
> To be counted as a request for information, the request must come through a legal channel. We do not count unofficial requests which are always rejected. The only legally binding requests are from Belgian courts that we are legally obligated to comply with.
>
> **Warrant Canary**
>
> Although a gag order is legally not possible in Belgium, we still publish a warrant canary. Mailfence being a Belgian company, cannot receive and has never received any US National Security Letters or FISA court orders. We also have not been subject to any gag order by a FISA court. Finally, we have never placed any backdoors in our hardware or software and have not received any requests to do so.

Source: Mailfence Blog, "Transparency Report and Warrant Canary," by Arnaud (co-founder/CEO). — URL: https://blog.mailfence.com/transparency-report-and-warrant-canary/ — Published April 29, 2016; Last Updated: April 9, 2026. Note: the page's own stated "Next update: July 2026" lands in the same month as this research's access date (2026-07-20) — a live, currently-due freshness commitment.

### Proton — Transparency report (proton.me)

> **Transparency report**
> *Updated January 6, 2026*

> Under Article 271 of the Swiss Criminal Code, Proton may not transmit any data to foreign authorities directly, and we therefore reject all requests from foreign authorities. Swiss authorities may from time to time assist foreign authorities with requests, provided that they are valid under international legal assistance procedures and determined to be in compliance with Swiss law… In general, Swiss authorities do not assist foreign authorities from countries with a history of human rights abuses.

Aggregate figures shown (Proton Mail, 2025): "Number of legal orders: 9,301 / Contested orders: 988 / Orders complied with: 8,313."

Source: Proton, "Transparency report." — URL: https://proton.me/legal/transparency — "Updated January 6, 2026."

### Proton VPN — Transparency report and warrant canary (event-driven freshness model)

> *Editor's note: This page, which was originally published on June 18, 2017, is updated whenever there is a notable new legal request.*
>
> Proton VPN is based in Switzerland, so we will only comply with requests that have been approved by the Swiss court system. We are not legally bound to honor foreign requests without such approval, and in fact we are legally prohibited from doing so by Section 271 of the Swiss Criminal Code.
>
> …Since Proton VPN was launched in 2017, we have received **458 legally binding orders** approved by the Swiss authorities. In every one of these cases, the authorities wanted us to help identify who was connected to a specific Proton VPN server at a specific time.
>
> **In every case, we were unable to provide the requested identifying information** because Proton VPN does not keep the logs that would make such identification possible. So, all such requests were denied.
>
> A warrant canary is not meaningful in Switzerland, because Swiss law requires that the target of a surveillance or data request eventually be notified, so they have the opportunity to contest the data request.

Source: Proton VPN Blog, "Proton VPN transparency report and warrant canary." — URL: https://protonvpn.com/blog/transparency-report — Published July 14, 2026 (this is a periodically-republished/updated post whose visible publish date moves forward each time it's updated, per its own editor's note); 2026 figures shown "through June: Total orders 47, Denied orders 47."

### Warrant-canary generic template

> A typical canary statement might read something like: "As of [date], we have never received a National Security Letter, FISA court order, or any classified request from any government agency."

Source: vpn.social glossary, "Warrant Canary." — URL: https://vpn.social/en/glossary/warrant-canary/ — snippet-level (not separately fetched).

### Warrant-canary historical/cautionary examples (canaries that were later dropped)

> As of January 29, 2015, reddit has never received a National Security Letter, an order under the Foreign Intelligence Surveillance Act, or any [other secret order]…

The canary sentence was removed from Reddit's next transparency report in April 2016 without announcement — widely interpreted by observers as an implicit admission that Reddit had by then received such an order.

Source: TechDirt, "Reddit's Warrant Canary On National Security Letters… Disappears." — URL: https://www.techdirt.com/2016/04/01/reddits-warrant-canary-national-security-letters-disappears/ — 2016-04-01, snippet-level.

> Apple has never received an order under Section 215 of the USA PATRIOT Act. We would expect to challenge such an order if served on us.

Apple's canary language dates to its November 2013 transparency report; per a 2026 secondary source, "as of 2026, Apple no longer includes" this canary statement in its reporting.

Source: TechCrunch (2013-11-05), "Apple Employs 'Warrant Canary' To Warn Users Of Future Compliance"; and Ezone blog (2026-05-26), "Warrant canary" — URLs: https://techcrunch.com/2013/11/05/apple-slips-in-warrant-canary-to-warn-users-of-future-compliance-with-patriot-act-section-215-information-requests/ and https://www.ezone.co.uk/blog/warrant-canary.html — both snippet-level.

---

## Corrections & time windows

### GDPR Article 33 — full text (breach notification to the supervisory authority)

> 1. In the case of a personal data breach, the controller shall without undue delay and, where feasible, not later than 72 hours after having become aware of it, notify the personal data breach to the supervisory authority competent in accordance with Article 55, unless the personal data breach is unlikely to result in a risk to the rights and freedoms of natural persons. Where the notification to the supervisory authority is not made within 72 hours, it shall be accompanied by reasons for the delay.
> 2. The processor shall notify the controller without undue delay after becoming aware of a personal data breach.
> 3. The notification referred to in paragraph 1 shall at least:
>    1. describe the nature of the personal data breach including where possible, the categories and approximate number of data subjects concerned and the categories and approximate number of personal data records concerned;
>    2. communicate the name and contact details of the data protection officer or other contact point where more information can be obtained;
>    3. describe the likely consequences of the personal data breach;
>    4. describe the measures taken or proposed to be taken by the controller to address the personal data breach, including, where appropriate, measures to mitigate its possible adverse effects.
> 4. Where, and in so far as, it is not possible to provide the information at the same time, the information may be provided in phases without undue further delay.
> 5. The controller shall document any personal data breaches, comprising the facts relating to the personal data breach, its effects and the remedial action taken. That documentation shall enable the supervisory authority to verify compliance with this Article.

Source: gdpr-info.eu, "Art. 33 GDPR – Notification of a personal data breach to the supervisory authority." — URL: https://gdpr-info.eu/art-33-gdpr/ — page last modified 2018-03-29 per meta tag (text of the Regulation itself, unchanged since 2016).

### DPA breach-notification windows — four real examples with numbers

**72 hours — compliance.tf DPA (small SaaS, "Last updated: February 23, 2026"):**

> Quick summary: "We notify you of any data breach within 72 hours."
>
> Processor Obligations: "Notifying you of any personal data breach without undue delay, and in any event within 72 hours."
>
> Section 11, Breach Notification: "In the event of a personal data breach, we'll notify you without undue delay, and in any event within 72 hours of becoming aware of it. Our notification will include: The nature of the breach, including the categories and approximate number of data subjects affected; The name and contact details of our point of contact; The likely consequences of the breach; The measures we've taken or propose to take to address the breach and mitigate its effects."

Source: compliance.tf, "Data Processing Agreement." — URL: https://compliance.tf/dpa/ — "Last updated: February 23, 2026."

**48 hours — Civo Data Processing Agreement (real UK cloud provider):**

> 6.1 Processor will promptly and without undue delay, and in any event within 48 hours, notify the Customer if any Personal Data is lost or destroyed or becomes damaged, corrupted, or unusable. Processor will restore such Personal Data at its own expense.
>
> 6.2 Processor will within 48 hours and without undue delay notify the Customer if it becomes aware of: any accidental, unauthorized or unlawful processing of the Personal Data; or any Personal Data Breach.
>
> 6.4 Within 48 Hours following any unauthorized or unlawful Personal Data processing or Personal Data Breach, the parties will coordinate with each other to investigate the matter.

Also, separately, on data subject requests: "9.3 Processor must notify the Customer without undue delay and in any event within 4 working days if it receives a request from a Data Subject for access to their Personal Data or to exercise any of their related rights."

Source: Civo Limited, "Data Processing Agreement." — URL: https://www.civo.com/legal/data-processing-agreement — undated on page (governed by England & Wales law per clause 17.6).

**48 hours — Polser.io Compliance page (small WhatsApp-business SaaS):**

> **Breach Notification**
> In the event of a confirmed Personal Data Breach affecting your data, we will notify you without undue delay and in any event within **48 hours** of becoming aware, in line with Article 33 GDPR.

Source: Polser, "Policies / Compliance." — URL: https://www.polser.io/compliance — "Last updated: March 2026," version stamp "v1.5, 11 Jun 2026."

**72 hours — most-copied Law Insider sample clause (marked "POPULAR SAMPLE, Copied 1 times"):**

> **Notification of Data Breach.** The Processor shall notify the Controller without undue delay after becoming aware of (and in any event within 72 hours of discovering) any accidental or unlawful destruction, loss, alteration or unauthorised disclosure or access to any Personal Data ("Data Breach"). The Processor will take all commercially reasonable measures to secure the Personal Data, to limit the effects of any Data Breach and to assist the Controller in meeting the Controller's obligations under applicable law… The Processor's notification of, or response to, a Data Breach under this Section 10 will not be construed as an acknowledgement by the Processor of any fault or liability with respect to the Data Breach.

Other numeric variants on the same page: a near-duplicate numbered clause ("9.1 The Processor shall notify the Controller without undue delay after becoming aware of (and in any event within 72 hours of discovering)…"), and a "one (1) business day" penalty-linked variant: "The CONTRACTOR must notify the … DEPARTMENT Program Manager and Privacy Officer within one (1) … BUSINESS DAY of discovering that the PHI and/or PII of one (1) or more … may have been breached."

Source: Law Insider, "Notification of Data Breach Sample Clauses." — URL: https://www.lawinsider.com/clause/notification-of-data-breach — undated (rolling clause-sample aggregator).

**24 hours — additional real variant (snippet only, not separately fetched):**

> Data Breach. When Operator reasonably suspects and/or becomes aware of an unauthorized disclosure or security breach concerning any Data covered by this Agreement, Operator shall notify the District within 24 hours.

Source: Law Insider, "Data Breach Clause Samples." — URL: https://www.lawinsider.com/clause/data-breach — snippet-level.

**Regulator guidance restating the 72-hour rule (snippet, not separately fetched):**

> You must report a notifiable breach to the ICO without undue delay, but not later than 72 hours after becoming aware of it.

Source: UK Information Commissioner's Office, "Personal data breaches: a guide." — URL: https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/personal-data-breaches-a-guide/ — page dated 2025-08-20 per search index; snippet-level.

### VDP response SLAs ("we will acknowledge within X business days")

**3-business-day standard (CISA template, mirrored near-verbatim across the US federal/enterprise ecosystem):**

> When you choose to share your contact information with us, we commit to coordinating with you as openly and as quickly as possible.
> - Within 3 business days, we will acknowledge that your report has been received.
> - To the best of our ability, we will confirm the existence of the vulnerability to you and be as transparent as possible about what steps we are taking during the remediation process, including on issues or challenges that may delay resolution.
> - We will maintain an open dialogue to discuss issues.

Source: CISA VDP Template — URL/raw source as cited above under "Good faith." The identical "Within 3 business days, we will acknowledge that your report has been received" sentence was found verbatim (via search snippets, not separately fetched in full) on: FTC (https://www.ftc.gov/policy-notices/vulnerability-disclosure-policy, dated 2021-03-01), NASA (PDF, dated 2026-05-01), JLL US and JLL Canada (https://www.jll.com/en-us/vulnerability-disclosure and /en-ca/), USPTO (https://www.uspto.gov/about-us/security/vulnerability-disclosure-policy — with an added tier: "we will confirm the existence of the vulnerability to you within 90 days"), DHS (https://www.dhs.gov/form/vulnerability-disclosure-form), and the U.S. Department of State (https://www.state.gov/bureau-of-diplomatic-technology/vulnerability-disclosure-policy).

**5/10-business-day tiered standard (A&O Shearman, private-sector law firm):**

> We will acknowledge your report within five business days. We will attempt to triage and provide a remediation timeline within ten business days. Timelines are targets and may vary depending on severity, complexity, and third‑party dependencies, but we will communicate material changes.

Source: A&O Shearman VDP — URL as cited above under "Good faith."

### Status-page / postmortem publication commitments

**72 hours (Treviya — commerce/fintech-adjacent platform trust page):**

> **Post-mortem policy**
> Material incidents receive a written post-mortem published on the status page within **72 hours**. Post-mortems are blameless, include a full timeline, root cause, contributing factors and the corrective actions taken. Minor incidents are logged without full post-mortem but remain in the public incident history for 12 months.

> **Targets**
> Recovery time objective (RTO) ≤ **4 hours** for catastrophic failures. Recovery point objective (RPO) ≤ **15 minutes** on the ledger and account data.

Source: Treviya, "Audits & status, public reliability record." — URL: https://treviya.com/trust/audits — "v2026.04 · ledger consistent" (footer build/version stamp); audit cadence table on page shows a rolling Q4 2025–Q4 2026 schedule.

**14 days (fremforge docs — snippet only, not separately fetched):**

> Per SLA §11.4, a post-mortem MUST be published on the status page within 14 days of any SEV-1; this template is the source format that gets rendered to a status-page entry by the operator.

Source: fremforge docs, "Post-mortem template." — URL: https://docs.frem.sh/runbooks/post-mortem-template/ — snippet-level.

**PostHog's public-by-default postmortem commitment** (cross-referenced from Transparency section above): "Post-mortems on outages, or other issues affecting a large portion of customers. The results of these should usually be made public though." — URL: https://posthog.com/handbook/company/communication

### Corrections policy for website/marketing content ("if you find an error, we will fix it within X")

**AFFiNE Editorial Policy — most rigorous real example found, directly adaptable as a small-SaaS template:**

> ## Corrections and reader feedback
> If you find an error — a stale price, a misattributed feature, a broken link, a misleading verdict — please email [...] with the URL and the specific claim. **We correct verified errors within 7 days** and add a "Corrections" line at the bottom of any page where a substantive claim has changed.
>
> We do not edit comparisons in response to vendor complaints unless the complaint identifies a factual error we can verify. Subjective verdicts ("Notion's UI is heavier") will not be removed simply because the vendor disagrees.

Same policy's update cadence (see also Freshness mechanisms):

> - **Monthly: pricing.** First Monday of every month, every comparison page is checked against current vendor pricing pages.
> - **Quarterly: feature changes.** Every 3 months we re-test the major features compared. New features that change a verdict trigger a same-week update.
> - **Semi-annually: full review.** Every 6 months, each comparison is reviewed end-to-end by a team member who did not write it.
> - **Ad hoc: vendor announcements.** When a vendor announces a major pricing, ownership, or feature change (Notion acquiring X, Confluence repricing, Evernote sunsetting Y), affected pages are updated within 7 days.

> Questions about this policy? … This page is reviewed every March and September; the next scheduled review is September 2026.

Source: AFFiNE, "Editorial Policy — How AFFiNE Tests, Compares, and Updates Knowledge Tools." — URL: https://affine.pro/editorial-policy — "Maintained by AFFiNE Product Team · Last updated June 2026 · Reviewed quarterly."

**Classlist — corrections policy paired with quarterly review and dated "last reviewed" line:**

> If you believe any information on this page is inaccurate or out of date, please contact hello@classlist.com. We review comparison pages quarterly and act promptly on factual corrections.
>
> **Page last reviewed:** April 2026.

Source: Classlist, "WhatsApp vs Classlist for PTA Communication in 2026." — URL: https://www.classlist.com/whatsapp-vs-classlist-for-pta-communication-in-2026 — "© 2026 Classlist Ltd."

**Other real examples of the same genre convention (snippet-level, not separately fetched — included to show this is a recognizable, copyable pattern, not a one-off):**

> If you believe any information on this page is inaccurate or out of date, we encourage providers and users to report it to us so it can be [corrected].

— OneStepGPS, https://www.onestepgps.com/blog/verizon-connect-vs-one-step-gps

> Corrections: If you believe any information on this page is inaccurate, outdated, or unfair, please contact us at hello@merchynt.com and we will review and [correct].

— Merchynt, https://www.merchynt.com/ai-seo-tool-comparison-paige-vs-soci

> If you believe any information on this page is inaccurate or out of date, please contact and we will review.

— EnableAll, https://enableall.com/compare/enableall-vs-crownpeak

> If you believe any information on this page is inaccurate or outdated, please contact us and we will update it promptly.

— Manual.to, https://manual.to/compare/manual-to-vs-azumuta/

> If you believe any information on this page is inaccurate, contact us with supporting details and we will review it. Last reviewed: July 2026.

— Heater and Spa Parts (AU), https://heaterandspaparts.com.au/pages/copy-of-heat-pump-sizing-guide

> If you believe any information on this page is inaccurate or outdated, please contact us and we will review it promptly. Request a correction.

— LiftMyCV, https://www.liftmycv.com/compare/jobcopilot/

> If you believe any information on this page is inaccurate, or if you are the legitimate owner of a listed website or social media account, please contact us.

— Robingo, https://robingo.co.uk/en/pages/security-centre (fraud/security-listing context, not a comparison page — different application of the same sentence pattern)

> If you believe any information on this page is incomplete or inaccurate, please contact Joe Carrasco at 517-373-2768.

— Michigan Senate Appropriations Subcommittee (government-genre precedent for the pattern), https://senate.michigan.gov/information/committees/all-committees/2025-2026/appropriations-subcommittee-on-corrections-and-judiciary/

### Docs "last reviewed" / review-cadence commitments (standalone, beyond AFFiNE above)

> This page is reviewed quarterly. The next scheduled review is 27 August 2026. Material changes to either platform's capabilities…

— Modulos, https://www.modulos.ai/modulos-vs-modelop/ (snippet-level)

> Last refreshed: 9 July 2026. This page is reviewed quarterly.

— Ciralgo, https://ciralgo.com/provider-routing-governance/ (snippet-level)

> This page is reviewed at least annually for accuracy and updated whenever our methods materially change. Substantive revisions are logged here: 2026-06-12…

— Operators Weekly, "How We Research and Review Tools," https://operatorsweekly.com/methodology/ (snippet-level)

> This page is reviewed against HalalWallet editorial standards and source documentation. Reviewed by: HalalWallet Editorial Team. Last reviewed: 2026-07-01.

— HalalWallet, https://www.halalwallet.us/halal-mortgage-refinance (snippet-level)

> While the information on this page is reviewed annually in June and updated as our offices are made aware of changes for state-specific requirements…

— MLC (Martin Luther College) Teaching Licenses page, https://mlc-wels.edu/teaching-licenses/ (snippet-level; .edu genre precedent)

---

## Freshness mechanisms

### RFC 9116 — security.txt `Expires` field, quoted in full, with rationale

Motivation (Section 1, Introduction):

> When security vulnerabilities are discovered by researchers, proper reporting channels are often lacking. As a result, vulnerabilities may be left unreported. This document defines a machine-parsable format ("security.txt") to help organizations describe their vulnerability disclosure practices to make it easier for researchers to report vulnerabilities.

Field definition (Section 2.5.5, Expires) — the only other field besides Contact that RFC 9116 makes mandatory:

> The "Expires" field indicates the date and time after which the data contained in the "security.txt" file is considered stale and should not be used (as per Section 5.3). The value of this field is formatted according to the Internet profiles of [ISO.8601-1] and [ISO.8601-2] as defined in [RFC3339]. It is RECOMMENDED that the value of this field be less than a year into the future to avoid staleness.
>
> This field MUST always be present and MUST NOT appear more than once.
>
> Expires: 2021-12-31T18:37:07z

Rationale (Section 5.3, "Incorrect or Stale Information" — the security-considerations section that explains *why* Expires exists):

> If information and resources referenced in a "security.txt" file are incorrect or not kept up to date, this can result in security reports not being received by the organization or sent to incorrect contacts, thus exposing possible security issues to third parties. **Not having a "security.txt" file may be preferable to having stale information in this file.** Organizations must use the "Expires" field (see Section 2.5.5) to indicate to researchers when the data in the file is no longer valid.
>
> Organizations should ensure that information in this file and any referenced resources such as web pages, email addresses, and telephone numbers are kept current, are accessible, are controlled by the organization, and are kept secure.

Source: IETF RFC 9116, "A File Format to Aid in Security Vulnerability Disclosure," E. Foudil & Y. Shafranovich, April 2022. — URL: https://www.rfc-editor.org/rfc/rfc9116.txt (also indexed at https://www.rfc-editor.org/info/rfc9116/) — Informational RFC, dated April 2022, still current as of access date.

### GitHub site-policy repo — how GitHub runs policy changes via public PRs with notice periods

From the repo README, "How often will GitHub review these policies? / What's the process?":

> We continually review and modify the policies in this repository. Our review and modification process allows for discussion about upcoming changes before they go into effect and lets our community rely on our policies. Of course, GitHub may alter our policies outside that schedule if necessary, such as when we have new product releases.
>
> Policies will be open for discussion and feedback throughout the year. You can expect that someone from GitHub's legal department will see your feedback, but we might not respond immediately. If you need an immediate answer on a legal matter, contact Support.
>
> **When *we* open a pull request, in most cases, we'll leave it open for 24 hours before the changes go into effect.** Comments on and review of our pull requests are welcome, just like in any open source project. **For material changes to our Privacy Statement or Terms of Service (including our Acceptable Use Policies), we'll post the updates 30 days before they go into effect**, as stated in those docs. (We had previously applied a 30-day comment period for most docs in this repo but found that we tend to get feedback soon after we post the changes and were unnecessarily delaying ships.)
>
> For those who are following this repository, the posting of the updated policy will provide a notice of any modifications to the policy.

Source: GitHub, `github/site-policy` repository, `README.md`. — URL: https://github.com/github/site-policy/blob/main/README.md — CC0-1.0 licensed; explicitly offered for others to fork and adapt for their own organizations. Footer copyright "© 2026 GitHub, Inc."; no per-line revision date on the file itself.

The GitHub Blog post explaining the same process in more depth and with historical context:

> We periodically open pull requests in our site-policy repository to develop and make updates collaboratively with our community.
>
> These updates will become effective on November 16, after a 30-day notice and comment period.

> Until now, we had been grouping updates together in a semiannual review period with a 30-day comment period for changes, unless they were typos or related to a product ship. We did this to give our community time to provide feedback. Over time, we found that we tend to get feedback soon after we post the changes, and keeping the comment period open unnecessarily delayed shipping useful clarifications and updates to our users.
>
> Going forward, in most cases, when we open a pull request to propose an update, we'll leave it open for 24 hours before the changes go into effect. For material changes to our Privacy Statement, Terms of Service, Acceptable Use Policies, Corporate Terms of Service, and Enterprise Subscription Agreement, we'll post the updates 30 days before they go into effect, as stated in those documents.

Reasons given for running policy as an open-source project:

> - To make it easy for users to review and understand changes by tracking and displaying the updates as diffs of the changed files
> - To make it easy for users to collaborate, engage with, and fork (reuse and adapt) our site policies by developing our policies in public repositories, where users can work with us on our site policies similar to how we work together on open source projects
> - To take a democratic approach to policy development by incorporating public notice-and-comment into our site policy project
> - To help familiarize policymakers and the public with open source by sharing a project that doesn't require a technical background to understand

Source: The GitHub Blog, "Updates to our Terms of Service and Privacy Statement," by Abby Vollmer (GitHub Director of Platform Policy and Counsel). — URL: https://github.blog/news-insights/policy-news-and-insights/updates-to-our-terms-of-service-and-our-privacy-statement/ — Published October 15, 2020; Updated August 24, 2021.

### "Last updated" conventions — real, dated examples collected across this research

| Source | Exact freshness text | URL |
|---|---|---|
| compliance.tf DPA | "Last updated: February 23, 2026" | https://compliance.tf/dpa/ |
| Polser.io Compliance | "Last updated: March 2026" + version stamp "v1.5, 11 Jun 2026" | https://www.polser.io/compliance |
| Mailfence | "Last Updated: April 9, 2026" (article); "Last updated: January 2026 (this information will be updated every half year) / Next update: July 2026" (report itself) | https://blog.mailfence.com/transparency-report-and-warrant-canary/ |
| Classlist | "Page last reviewed: April 2026" | https://www.classlist.com/whatsapp-vs-classlist-for-pta-communication-in-2026 |
| AFFiNE Editorial Policy | "Last updated June 2026 · Reviewed quarterly" | https://affine.pro/editorial-policy |
| Proton | "Updated January 6, 2026" | https://proton.me/legal/transparency |
| Proton VPN blog | "Editor's note: This page, which was originally published on June 18, 2017, is updated whenever there is a notable new legal request." (event-driven, not calendar-driven) | https://protonvpn.com/blog/transparency-report |
| Treviya | "v2026.04 · ledger consistent" (build/version stamp used as freshness marker) | https://treviya.com/trust/audits |

### security.txt `Expires` field — real-world compliance gap

Dropbox's live `security.txt` (quoted in full above, under "Good faith") contains **no `Expires:` field at all**, despite RFC 9116 making it one of only two mandatory fields. Fetched directly from https://www.dropbox.com/.well-known/security.txt on 2026-07-20.

Corroborating snippets (not separately fetched):

> The Expires field is required by RFC 9116 §2.5.5. It must contain an ISO 8601 datetime indicating when the file should be considered stale.

— securitytxtcheck.com, "RFC 9116 security.txt: The Complete Field Reference & Guide," https://securitytxtcheck.com/guide (2026-06-02)

> security.txt is missing the RFC 9116-mandatory Expires field … RFC 9116 defines only two mandatory fields — Contact and Expires — and says of Expires (§2.5.5): "This field MUST always be present."

— live GitHub issue, twentyhq/twenty repo, https://github.com/twentyhq/twenty/issues/22866 (dated 2026-07-13) — real evidence this is an ongoing, commonly-flagged compliance gap, not a one-off.

### 30-day notice convergence pattern (freshness/notice mechanism)

Multiple independent sources converge on **30 days** as the standard advance-notice window for material policy or subprocessor changes:

- GitHub site-policy: 30 days for material ToS/Privacy Statement/AUP changes (quoted above).
- compliance.tf DPA: "If we need to add or replace a sub-processor, we'll give you at least 30 days' notice." — https://compliance.tf/dpa/
- Polser.io: "We provide at least 30 days' notice before engaging a new subprocessor or replacing an existing one." Plus an opt-in push mechanism: "To receive email notifications of changes to this list, send your request to legal@polser.io and we'll add you to our notification list." — https://www.polser.io/compliance

Contrasting shorter/looser mechanism — 37signals uses no fixed day-count, relying instead on a refreshed on-page date plus an opt-in mailing list: "If we make significant changes, we will refresh the date at the top of the page and notify users who have signed up to our policy updates mailing list." — https://37signals.com/policies/

---

## Not found / gaps

- **disclose.io "Core Terms" / core-vdp page** (`https://disclose.io/framework/terms/core-vdp/`) returned an empty body on every fetch attempt, including the GitHub raw-markdown alternates (`raw.githubusercontent.com/disclose/dioterms/main/core-vdp.md` and the GitLab-style blob raw path). Likely a JS-rendered fragment or redirect the fetch tool couldn't follow. Substituted with the "Simple Safe Harbor" and full "Safe Harbor" clauses plus the FAQ definition, which cover the same substance.
- **GitLab's `/handbook/values/` page** is a large nav/index page. It confirms "Transparency by Default" is still a live handbook section and that the CREDIT acronym still includes Transparency as of 2026-07-20, but does not itself contain a compact, self-contained prose definition of the Transparency value (that content lives on sub-pages not individually crawled in this pass). A May 2026 LinkedIn post ("GitLab Ditches CREDIT Values, Retires Transparency") claims the opposite; the live handbook as fetched contradicts that claim, so it may be about a proposed/rumored change, an outdated take, or a different scope than what's visible externally — flagged rather than resolved.
- **Cloudflare's own full legal Safe Harbor clause text** was not located as a standalone page. `cloudflare.com/disclosure/` is a marketing landing page that routes researchers to Cloudflare's HackerOne-hosted program; the safe-harbor terms that actually govern that program are HackerOne's platform-wide "Gold Standard Safe Harbor" (captured in full above), not a Cloudflare-authored clause.
- **Dropbox's actual bug-bounty/VDP legal safe-harbor text** (as opposed to the `security.txt` pointer and general trust-center language) lives behind Intigriti's platform (`app.intigriti.com/programs/dropbox/...`), which appears to require an account to view in full — not fetched.
- **DOJ's "Framework for a Vulnerability Disclosure Program for Online Systems"** (the primary source CISA's template cites for its Authorization language, at `justice.gov/criminal-ccips/page/file/983996/download`) was not fetched directly — only its downstream influence via the CISA template text was captured.
- **NASA's VDP PDF** and the **ICO breach guide** were confirmed only via search snippets, not fetched in full (both are lower priority given redundant, fuller coverage from other sources already captured).
- **An exact "we act in good faith" phrase on a trust/security page** (as distinct from a generic corporate code-of-conduct PDF) was not found verbatim in this pass. The closest hits were generic ethics-code PDFs (Western Union, Paysafe, INA Group, Ingenico, PMR Group) — not SaaS trust centers. compliance.tf's DPA line ("We'll work with you in good faith to find an alternative solution where possible") is the closest trust-page-adjacent example actually captured.
- **eclipso.eu/transparency**, a real small-company warrant-canary example surfaced in search results, returned an empty body on fetch and was not captured. Mailfence and Proton VPN substitute adequately for the "small real company with a live warrant canary" need.
- **Cloudflare's own specific four-statement warrant-canary text** (referenced by Cloudflare's Learning Center as "As of December 2020, Cloudflare has the following warrant canaries posted…") was not located as a standalone, currently-live page — only the Learning Center's secondhand description of it was captured.
- No search pass specifically located a company whose trust page uses the literal phrase "we publish a public RCA within X days" — the closest matches are Treviya's "post-mortem published on the status page within 72 hours" and the fremforge docs SLA snippet ("post-mortem MUST be published on the status page within 14 days of any SEV-1"), both captured above.
