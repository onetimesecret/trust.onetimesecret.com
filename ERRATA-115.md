ERRATA-115.md

Based on the research, here's my assessment:

## The clause is **closer to standard language** — with one mildly unusual element.

Let me break it down by component:

### What's standard

- **Permitted API integration into your own applications / for end users** — This is the bread-and-butter of SaaS API terms. The standard formulation grants a limited license to access and use the API to build functionality into your own products for your users. Most SaaS ToS / API terms do exactly this. Apollo's API Terms, cited as typical, grant "a non-exclusive, non-transferable, non-assignable revocable license to access and use the APIs solely for your internal business purposes" [^1].
- **Cross-referencing a dedicated API terms section** (your `[Section H]`) — Very common. API-specific obligations (rate limits, keys, security, data) are usually split into their own section and referenced from the license grant.
- **Not misrepresenting the source of the Service** — This is essentially an anti-passing-off / anti-white-labeling provision, and it's a well-established pattern. The guide on white-label SaaS agreements notes that a "common mistake" is allowing full white-label distribution without requiring any attribution, which would let the licensor's technology end up bundled with inferior products, damaging reputation with no contractual recourse [^2]. So requiring that the source not be misrepresented is a recognized, sensible protection.

### What's mildly atypical (but not weird)

- **"…or remove attribution where required"** — The phrasing "where required" is the slightly unusual bit. Two observations:
  1. The attribution requirement itself fits **open-source SaaS** particularly well, since OSS licenses (BSD, Apache, MIT) commonly carry notice/attribution obligations, and the promise.legal guide for self-hosted/open-source SaaS explicitly recommends an "Open-Source Software" clause covering "no removal of attributions" [^4]. So in that context the requirement is on-brand, not an outlier.
  2. However, most SaaS API terms **don't impose an affirmative attribution obligation on the integrator** as part of the *permitted-use* grant. The more common formulation is purely *negative*: a prohibition on white-labeling, reselling, or representing the service as your own (e.g., Janitor.ai: "Resell, sublicense, or white-label the Service without express written permission" [^3]). Your clause layers a *positive* attribution obligation on top, hedged by "where required." That's a hybrid that's more often seen in developer-platform / data-API terms (where attribution badges or "Powered by" notices are expected) than in generic SaaS.

### Bottom line

| Element | Standard / Outlier |
|---|---|
| Granting API integration rights for your own apps & end users | Standard |
| Cross-reference to a dedicated API terms section | Standard |
| Don't misrepresent the source of the Service | Standard (anti-passing-off) |
| "…remove attribution where required" | Mildly atypical — a positive attribution duty grafted onto the permitted-use grant; fits open-source SaaS context but is more common in developer-platform/data-API terms than generic SaaS |

So overall: **standard language with one slightly less common flourish**. Nothing in it reads as outlier/weird, and the attribution element is actually *more* defensible in the open-source SaaS context than it would be in a closed-source SaaS ToS. The only thing I'd flag for review is the vague trigger "where required" — you may want that to point to a specific place (e.g., "as specified in the API documentation" or "as required by the applicable open-source license notices") so the obligation has a determinate scope rather than leaving the integrator to guess when attribution is "required."

**References**

[^1]: [B2B Data API Resale Rights & Licensing: What Product Builders Need...](https://www.explorium.ai/blog/data-for-gtm/b2b-data-api-resale-rights-licensing-what-product-builders-need-to-know-now-in-2026/) (30%)
[^2]: [OEM Distribution and License Agreement Template (Free Word)](https://www.business-in-a-box.com/template/oem-distribution-and-license-agreement-D5200/) (27%)
[^3]: [Janitor.ai Terms of Service — Data Cleaning Tool Usage Agreement](https://janitor.ai/terms) (23%)
[^4]: [Customizing a SaaS ToS for Self-Hosted, Open-Source & AI Products](https://blog.promise.legal/startup-central/customizing-saas-tos-self-hosted-open-source-ai-products/) (20%)
