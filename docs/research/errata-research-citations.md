# Research citations preserved from the ERRATA working files

Extracted 2026-07-02 from `ERRATA-2.md` and `ERRATA-115.md` before deletion;
their full text remains in git history. `REMAINING_DECISIONS.md` records the
applied outcomes; this file keeps only the sources and background that exist
nowhere else.

## Subprocessor change-notice design (ERRATA-2)

- **EDPB Opinion 22/2024**: identity of the full subprocessor chain
  (including sub-subprocessors) should be readily available at all times and
  proactively current — stricter than notify-subscribers-only market
  practice; directly supports the public, dated, git-backed list.
- Art. 28(2) general authorization requires only informing the controller of
  intended changes with an opportunity to object; no notice period is
  specified in law (live DPAs range from 14 days to none). The 30-day window
  in our documents is a chosen commitment, not a legal requirement.
- Market observations: customers treat subprocessor pages as feeds
  (monitoring services scrape them for diffs); Microsoft differentiates
  notice periods by subprocessor category.
- Design constraints adopted: the public list supplements notice, never
  replaces it (objection windows run from a notice event); notify all
  account holders by email rather than gating behind a subscription.

## API-integration clause prior art (ERRATA-115)

Assessment outcome: clause elements standard (integration grant, Section H
cross-reference, anti-passing-off); the affirmative "attribution where
required" duty was mildly atypical and was resolved by removing it entirely,
keeping only the anti-passing-off condition (recorded in the decisions
ledger).

References consulted:

- Explorium — B2B Data API Resale Rights & Licensing (2026):
  https://www.explorium.ai/blog/data-for-gtm/b2b-data-api-resale-rights-licensing-what-product-builders-need-to-know-now-in-2026/
- OEM Distribution and License Agreement Template:
  https://www.business-in-a-box.com/template/oem-distribution-and-license-agreement-D5200/
- Janitor.ai Terms of Service: https://janitor.ai/terms
- promise.legal — Customizing a SaaS ToS for Self-Hosted, Open-Source & AI
  Products:
  https://blog.promise.legal/startup-central/customizing-saas-tos-self-hosted-open-source-ai-products/
