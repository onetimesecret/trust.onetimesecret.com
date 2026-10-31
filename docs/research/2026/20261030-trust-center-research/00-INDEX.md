# Trust Center Research Corpus — Index

Compiled 2026-07-20 via Kagi search + direct page fetches (4 parallel research agents + independent spot verification). Purpose: answer follow-up questions about trust center tools, production trust center language, and correction/discrepancy practices. All substantive quotes are verbatim with URL and date; snippet-only (unverified) items are flagged inline.

## Files

| File | Contents | Size of net |
|---|---|---|
| `01-tooling-landscape.md` | Commercial platforms (SafeBase/Drata, Conveyor, Vanta, Secureframe, Whistic, OneTrust, TrustCloud, Sprinto, Scytale, Anecdotes, HyperComply, Oneleet, Thoropass, Delve) + open source (Probo, Comp AI, Kodus, sbomify, opentrust, verity, bounded-systems) + the Delve fraud scandal (Mar 2026) in full | 15 commercial, 7 OSS/DIY |
| `02-trust-center-terms.md` | Verbatim terms/disclaimers from live trust centers: OpenAI, Salesforce, Atlassian, GitLab, Datadog, Zoom, Slack, Stripe, Cloudflare, Twilio, HashiCorp, Notion, PagerDuty, Vercel, PostHog, Palo Alto, Drata ToS, Vanta External User Terms, Secureframe, ZenGRC, Lev, 37signals, Fathom Analytics, Plausible, Buttondown, Bear Blog | ~30 companies |
| `03-subprocessor-practices.md` | DPA subprocessor clauses + list pages: notice windows, objection rights, deemed consent, emergency carve-outs, GDPR Art. 28(2) text, errors/omissions findings. Summary table of all notice windows at top | ~27 companies |
| `04-goodfaith-transparency-corrections.md` | Safe harbor texts in full (disclose.io, CISA, DOJ, HackerOne, GitHub), transparency practice (GitLab, Buffer, PostHog, Mozilla, Cloudflare, Proton, Mailfence), warrant canaries, breach windows, VDP SLAs, corrections-policy genre (AFFiNE), RFC 9116, GitHub site-policy process | ~40 sources |
| `05-clause-patterns.md` | **Start here.** Cross-cutting synthesis organized by the five research questions, master time-window table, documented white space (things no vendor does), verification status | — |

## Quick answers

- Best trust-center precedence/accuracy clause in the wild → Lev (05 §1, 02). Verified verbatim.
- Only standalone visitor-facing trust center ToU documents → Drata + Vanta (05 §1; full text 01). Vanta caps visitor liability at $100.
- Does posting to the subprocessor page count as notice → Yes at Stripe and Sitecore explicitly; GitLab makes subscription email the formal notice and won't engage until the window lapses (05 §4, 03).
- Notice-window market range → 7 days to 6 months, 30-day mode; full table 03 top + 05 §5. GDPR sets no number (Art. 28(2) verbatim in 03).
- Any company that publicly corrected a wrong subprocessor list → only Buttondown, Mar 2026 blog post (03, 05 §4).
- Any clause handling site-vs-DPA discrepancies or list errors → none exists anywhere; structural gap documented (03 §"Errors...", 05 §4 and white-space list).
- Good-faith language sources → VDP safe harbors (disclose.io CC0 texts adoptable verbatim) and DPA objection-resolution clauses; never applied to a company's own published content (04, 05 §3).
- Correction SLAs with numbers → AFFiNE 7 days (verified), Plausible 1-business-day response, CISA 3-business-day VDP ack; no trust center has one (05 §5, 04).
- Trust-center-tool fraud precedent → Delve scandal, full quotes in 01.
- Open source options → Probo (full GRC, "Compliance Page" module) and Comp AI (open-core AGPL) are the real ones; the rest are <60-star early-stage (01).

## Relevance hooks to open OTS decisions

Factual mapping only, from the Compliance project's open items: the "live subprocessors page" decision is informed by 03 (mechanics: page-as-authoritative-list, subscribe buttons, Stripe's Summary of Changes pattern, 37signals' GitHub-subscription mechanism, OpenProject's 14-day EU SCC fill-in). The "vulnerability disclosure SLA specificity" decision is informed by 04 (3-business-day CISA standard vs. A&O 5/10 tiered; disclose.io CC0 safe harbor). The Terms/DPA canonical-source clause connects to 05 §4 precedence types and the GitHub site-policy public-PR model in 04. The describe-and-evidence framing preference matches Lev's clause + CTO-note structure (02) and the self-attested-vs-audited separation argued by the Delve fallout (01).

## Confidence and gaps

Spot-verified 2026-07-20 (4/4 passed): Secureframe, Lev, Stripe, AFFiNE — see 05 "Verification status." Known weak spots: Vanta-hosted portals (Anthropic, Snowflake, Notion's portal, Deltek) are JS shells — body text unreachable by plain fetch; Anthropic subprocessor terms rest on a Sept 2023 DPA PDF; Microsoft's 6-month/30-day split sourced via PPC Land reporting of the DPA, not the DPA directly; Treviya/fremforge (post-mortem windows) and the corrections-genre comparison pages are obscure sites — treat as pattern evidence, not authority; Tuta: nothing found. Each file ends with its own "Not found / gaps" section.
