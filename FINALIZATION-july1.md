FINALIZATION-july1.md


## Subprocessor escape hatch 
The "reasonable data-protection grounds" gate. In market-standard DPAs (and in SCC Clause 9-style language), a customer who objects to a new subprocessor must base the objection on reasonable, documented data-protection grounds — a filter that stops customers from objecting for arbitrary or commercial reasons and forces a negotiation before any termination right kicks in. Your DPA §6.2 deliberately omits that filter: any objection, for any reason, triggers the remedy (terminate the affected Services without penalty within the 30-day window). The batch-pass rationale, recorded in ERRATA.md, was that the gate is unnecessary because your remedy is self-executing — termination is the customer's sole remedy and you're not obliged to reverse the engagement, so there's nothing to litigate about whether grounds are "reasonable." That's a defensible, customer-friendly position, but it's a deviation from market standard, which is exactly why I'd have counsel confirm it: the main exposure is that any subprocessor change becomes a no-questions-asked early-exit hatch from a prepaid annual contract, and §6.2 is silent on whether "without penalty" implies a pro-rata refund of the unused prepaid period.


## Refund terms

The refund terms. The revision replaced "no refunds, no exceptions" with a 30-day window on paid multi-tenant plans (measured from the most recent billing date), with single-tenant plans defaulting to the same window "unless a separate agreement says otherwise." What I'd have reviewed, in priority order:

1. Amount and scope precision. "Refundable within 30 days of the most recent billing date" should be explicit that it covers only the most recent charge — otherwise an annual subscriber on day 29 could read it as a full-year refund. Also check interaction with the proration rules in I.2: immediate plan changes with proration plus a refund window creates a potential double-dip path (upgrade, get prorated credit, then refund).
2. Single-tenant default. Defaulting Global Elite to a 30-day refund means potentially refunding a manual, high-touch provisioning effort. The escape hatch ("unless a separate agreement says otherwise") only works if your Global Elite agreements actually say otherwise — worth confirming they do, or carving out provisioning/setup costs in the ToS default.
3. Alignment with the DPA §6.2 termination right (above) and with Organization cancellation — the three exit paths (refund window, subprocessor objection, ordinary cancellation) should produce consistent money outcomes.
4. Mandatory consumer-law overlays. Governing law is BC, but you serve EU/UK individuals; the 14-day cooling-off rules can't be contracted away, so the stated policy should not read as narrower than mandatory rights in those regions.
5. Coupons/promotions interaction — what's refunded on a discounted or nonprofit-priced purchase.

## Disambiguate cookies, local storage, session storage.

Practical recommendation for an open-source SaaS product

Name them explicitly. Use "cookies and similar technologies, including local storage and session storage" rather than relying on "cookies" alone.
Disclose what you store where. E.g., "We use session storage to hold your in-progress form data and local storage to remember your theme preference." Generic language invites ambiguity.
Don't assume "cookies" is a catch-all. Cookie consent management tools like CookieScript specifically scan for and block local/session storage separately from cookies, treating them as distinct disclosure items 3.


## Disambiguate what dedicated means

As it applies to "dedicated instances".


## Review subprocessors

- Catalyst Cloud entity details: add a Catalyst Cloud Limited row to the Subprocessor Entity Details table in onetime-dpa-2026-05-31.md (~line 309–318). 
- Optionally add DigitalOcean and AWS rows too — they're also absent, a pre-existing inconsistency.
- Add BunnyCDN for static sites and storage
