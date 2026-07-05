# Resale, managed-service, and white-label terms: prior art survey

Research conducted June 2026 as prior art for the ToS resale and Organizations
terms (Terms of Service sections B.3 and C.4). This document records how
open-source projects and SaaS companies word the parts of their licenses or
Terms of Service that govern resale, managed-service provision, and
white-labeling. It is descriptive, not legal advice. All verbatim quotes were
fetched from their primary sources and verified against them on 2026-06-16;
they reproduce the source's own punctuation and grammatical quirks.

## The convergent pattern

Across source-available licenses, open-core service terms, and general SaaS
agreements, the same three-move pattern recurs:

1. **Permit serving your own customers.** Internal use, and in the clearer
   examples use to serve your own clients or end users, is allowed. The
   strongest positive models name this explicitly: Mattermost ("for the
   benefit of ... Licensee's customers"), the Functional Source License
   ("professional services that you provide to a licensee"), and Bitwarden's
   official MSP program.
2. **Prohibit resale, service-bureau use, and white-labeling.** The most
   uniform element: the phrases "service bureau," "for the benefit of a third
   party," and "resell ... or otherwise commercially exploit" appear almost
   verbatim across GitLab, PostHog, Sentry, Notion, Zoom, and Vercel.
3. **Gate exceptions behind a separate agreement.** Genuine resale or
   white-label business is routed to a distinct, signed document: a
   Reseller/Partner Agreement (GitLab, 1Password, Notion §4.6), a "separate
   commercial agreement" (n8n, Bitwarden), or a separate trademark license
   (Grafana, Ghost, Nextcloud).

A fourth observation is negative and matters for drafting: **no source in
this catalog imposes a price-parity, resale-price-maintenance, or "you must
charge at least what we charge" term.** The boundary is always drawn by mode
of use (serve-your-own-clients vs. resell/repackage) or by a separate
agreement, never by price.

A note on mechanism: the source-available licenses gate use of the
**software** you self-host; Onetime Secret's concern is use of a **hosted
Service**. From the licenses, only the drafting structure transfers (the
carve-out language, the separate-agreement gate), not the license itself.

## Catalog

Grouped by mechanism: (A) source-available software licenses, (B) open-core /
self-host service terms, (C) general SaaS conventions.

### A. Source-available software licenses that gate hosting-for-others

#### [n8n Sustainable Use License](https://docs.n8n.io/sustainable-use-license/)

Permits use or modification for internal business purposes or
non-commercial/personal use; the FAQ explicitly counts consulting services
related to n8n as permitted, while "White-labeling n8n and offering it to
your customers for money" and "Hosting n8n and charging people money to
access it" require "a separate commercial agreement." Closest structural
analog to the desired split; n8n documents that it abandoned the Commons
Clause precisely because it restricted consulting and support services.

#### [Elastic License 2.0 (ELv2)](https://www.elastic.co/licensing/elastic-license)

Broad grant subject to three limitations; internal use and serving your own
clients are fine so long as you are not providing the software itself as a
hosted/managed service. The drafter-tested prohibition sentence:

> You may not provide the software to third parties as a hosted or managed
> service, where the service provides users with access to any substantial
> set of the features or functionality of the software.

A pure prohibition: no on-license carve-out for serving your own clients and
no per-tenant framing.
Canonical file: https://raw.githubusercontent.com/elastic/elasticsearch/main/licenses/ELASTIC-LICENSE-2.0.txt

#### [Business Source License (BSL) 1.1](https://spdx.org/licenses/BUSL-1.1.html)

Permits copying, modification, redistribution, and non-production use;
production use is limited to whatever the adopter's "Additional Use Grant"
allows, with conversion to an open-source Change License within at most four
years. The template itself contains no hosting/competition restriction; the
Additional Use Grant is where a positive carve-out is encoded, with a
default-restricted posture forcing resale/white-label to the commercial
license.
Raw text: https://raw.githubusercontent.com/spdx/license-list-data/main/text/BUSL-1.1.txt; origin: https://mariadb.com/bsl11/

#### [Commons Clause License Condition v1.0](https://commonsclause.com/)

Removes the right to "Sell" from an underlying open-source license, defining
"Sell" as providing to third parties, for a fee, "(including without
limitation fees for hosting or consulting/ support services related to the
Software), a product or service whose value derives, entirely or
substantially, from the functionality of the Software." A cautionary
anti-pattern: the definition sweeps in exactly the contractor/agency/MSP use
a serve-your-clients carve-out is meant to allow, the defect n8n's migration
note documents.

#### [Server Side Public License (SSPL) v1, Section 13](https://www.mongodb.com/legal/licensing/server-side-public-license)

AGPL-style permissions; offering the program as a service is allowed only if
the entire "Service Source Code" (including management, monitoring, backup,
and hosting software) is released under the SSPL at no charge. No flat
prohibition and no separate-agreement gate — a disclosure obligation that in
practice deters commercial managed-service offerings; its only transferable
value is the breadth of its "as a service" definition.

#### [Functional Source License (FSL) 1.1](https://raw.githubusercontent.com/getsentry/fsl.software/main/FSL-1.1-MIT.template.md)

Permits any "Permitted Purpose" — expressly including internal use,
non-commercial education/research, and "in connection with professional
services that you provide to a licensee using the Software" — while barring
any "Competing Use" (a commercial product or service that substitutes for the
software, for the licensor's other offerings built on it, or offers
substantially similar functionality). Converts to Apache-2.0 or MIT after two
years. The best positive model for the consultant carve-out; note the client
must itself be a licensee, the analog of each client holding its own
subscription.

#### [PolyForm Perimeter License 1.0.0](https://github.com/polyformproject/polyform-licenses/blob/1.0.0/PolyForm-Perimeter-1.0.0.md)

"Any purpose is a permitted purpose, except for providing to others any
product that competes with the software." Serving your own clients is
permitted by default if the result does not compete; a product may compete
"even if it provides its functionality via any kind of interface (including
services, libraries or plug-ins)" and "even if it is provided free of charge"
— useful language against evasion by re-wrapping. Protects only the software,
not the licensor's other offerings.

#### [PolyForm Shield License 1.0.0](https://github.com/polyformproject/polyform-licenses/blob/1.0.0/PolyForm-Shield-1.0.0.md)

Same structure as Perimeter, extended to bar products that compete "with the
software or any product the licensor or any of its affiliates provides using
the software." The most protective of the competing-use family and the
closest analogue to a Service operator's actual exposure: it restricts
competing with the licensor's own downstream offerings, not merely the
codebase.

### B. Open-core / self-host service terms

#### [GitLab Subscription Agreement](https://handbook.gitlab.com/handbook/legal/subscription-agreement/)

Permits the Customer's and Affiliates' own internal use; "Contractors" are
"third parties that Customer has engaged to manage, or otherwise use the
Software, solely on behalf of Customer." Prohibits "time sharing or service
bureau purposes (including without limitation, sublicensing, distributing,
selling, reselling any Software)" and any use "for any purpose other than its
and its Affiliates' own internal use." A contractor may manage the customer's
own tenant, but not serve its own distinct clients.
Markdown source: https://gitlab.com/gitlab-com/content-sites/handbook/-/raw/main/content/handbook/legal/subscription-agreement/index.md

#### [GitLab Reseller/Referral Agreement](https://handbook.gitlab.com/handbook/legal/reseller-agreement/)

The separate agreement that gates genuine resale: an enabled Partner may
resell to End Users in an agreed territory, in its own name, and may not use
or deploy the software for its own internal purposes under the agreement.
Demonstrates the two-document split: ordinary customers under the
subscription agreement, genuine resale behind a separate Partner agreement.
Markdown source: https://gitlab.com/gitlab-com/content-sites/handbook/-/raw/main/content/handbook/legal/reseller-agreement.md

#### [Mattermost Software and Services License Agreement](https://mattermost.com/software-services-license-agreement/)

The strongest precedent for a serve-your-customers carve-out: the restriction
bars making the product available to, or using it for the benefit of, "anyone
other than Licensee or Licensee's customers" — carving out the Licensee's own
customers as permitted beneficiaries while still banning
assignment/resale/sublicensing and competitive products. On-Premise
subscriptions may be hosted by a third party the Licensee contracts with
directly.

#### [Discourse Self-Serve Hosting Terms](https://www.discourse.org/self-serve-terms)

A counter-example of the silent, permissive-by-omission approach: the hosted
terms contain acceptable-use rules only and no resale, white-label,
service-bureau, or one-customer-per-account clause at all, leaving
white-label/reseller behavior ungoverned.

#### [Sentry self-host license (FSL-1.1-Apache-2.0)](https://github.com/getsentry/sentry/blob/master/LICENSE.md)

Sentry applies FSL 1.1 to its self-host code: professional services "to a
licensee using the Software" are a named Permitted Purpose; any Competing Use
is barred; converts to Apache-2.0 after two years. The carve-out runs to a
client already running the software and does not authorize multi-tenant
hosting-for-others. Applies to self-host only, not Sentry's SaaS.

#### [Sentry Terms of Service v3.0.0 (hosted service)](https://sentry.io/terms/)

A counter-model: Section 2.3 prohibits "provide access to (except for Users),
distribute, sell or sublicense the Service to a third party" and, notably,
"use the Service on behalf of, or to provide any product or service (except
for Customer Applications) to, third parties" — the only permitted
third-party benefit is a Customer Application the customer itself operates.
Section 21 handles purchases through authorized Resellers separately.

#### [PostHog Cloud Subscription Terms](https://posthog.com/terms)

The common "internal use + Affiliates only" template, near-identical to
GitLab: no use "for timesharing or service bureau purposes or for any purpose
other than its and its Affiliates' own internal use (including without
limitation, sublicensing, distributing, selling, reselling any of the
foregoing)"; "Affiliate" is the standard >50%-voting-control test.
White-labeling is sold as a paid add-on, not a license right.

#### [Ghost.org Terms of Service (Ghost(Pro) hosted)](https://ghost.org/terms/)

A counter-model for the hosted product: users may not "Use any Service or the
Content for any commercial purpose or the benefit of any third party," and
each login is limited to a single named person. The single-person-per-login
rule is a per-seat framing analogous to per-Organization metering.

#### [Ghost Trademark Usage Policy (managed-services carve-out)](https://ghost.org/trademark/)

Permits running and describing your own managed service providing Ghost
software — provided you do not use the Ghost logo on it, remain
API-compatible, make clear the Ghost Foundation is not the source, and do not
imply sponsorship (permitted naming: "XYZ is a fully managed cloud service
for Ghost"). MSP/hosting-for-others on the self-hosted software is thus
governed by trademark policy with brand-distancing conditions rather than the
service ToS; it does not permit reselling Ghost's own hosted SaaS.

#### [Bitwarden](https://github.com/bitwarden/server/blob/main/LICENSE_FAQ.md)

Mixed model: AGPL/GPL code, a source-available "Bitwarden License" tier
requiring a separate commercial agreement for production use, a trademark
policy barring use of the Bitwarden name as your product/business/domain
name, and an official Partner/MSP Program that explicitly welcomes serving
multiple client organizations from one dashboard with consolidated per-seat
billing. Serve-clients is welcomed through an official program;
repackaging/rebranding is gated by separate agreement and trademark.
Raw: https://raw.githubusercontent.com/bitwarden/server/main/LICENSE_FAQ.md

#### [Metabase Commercial License](https://www.metabase.com/license/commercial/2025-05-29)

AGPLv3 core plus a Commercial License permitting distribution to End
Customers solely as embedded in your own Customer Application and "not for
any further distribution." Standalone operation for others — any "hosting,
application services provider, service bureau, software-as-a-service (SaaS)"
— is barred except as integrated into the Customer Application, and removing
the "Powered by Metabase" logo (white-labeling) requires a plan that grants
it. Fees scale by "Units" (per server, installation, customer, or user), a
direct analogue to per-Organization billing.

#### [Grafana Labs Trademark Policy](https://grafana.com/trademark-policy/)

AGPLv3 core: the copyright license already permits hosting-for-others, so
white-labeling/rebranding is restricted by the trademark policy instead —
marks may not be used "in conjunction with derivative software incorporating
modified Grafana Labs software product code," and "Any other use of the
Grafana Labs Marks requires a separate trademark license agreement."
Supports structuring "repackaging/white-labeling requires a separate written
agreement" as a mechanism distinct from service usage terms.

#### [Cal.com](https://cal.com/enterprise)

Historically AGPLv3 core plus a commercial "Platform" license: a customer may
host on its own subdomain or "fully white label Cal.com under your
organization's brand" (branding its own scheduling pages), while deep
integration into your own SaaS with full white-labeling requires the paid
Platform license. Sourcing caveat: Cal.com went closed-source in April 2026
and the public repo is now the MIT Cal.diy fork, so the historical structure
is documented from marketing/FAQ pages, not stable license files.
Relicensing commit: https://github.com/calcom/cal.diy/commit/ab21c7f805a089fa3a11ffd61c4a9aecc349c16c

#### [Documenso Commercial License](https://github.com/documenso/documenso/blob/main/packages/ee/LICENSE)

AGPLv3 Community Edition plus a Commercial/Enterprise License for the
`/packages/ee` code: production use requires a Commercial Subscription "for
the correct number of hosts," with an explicit "it is forbidden to copy,
merge, publish, distribute, sublicense, and/or sell the Software" sentence;
development and testing need no subscription. A clean per-host template
comparable to per-Organization billing.

#### [Rocket.Chat Enterprise Edition License](https://github.com/RocketChat/Rocket.Chat/blob/develop/apps/meteor/ee/LICENSE)

Open-source CE plus source-available EE: EE production use requires a valid
subscription "for the correct number of user seats" and compliance with the
Rocket.Chat Subscription Terms of Service or another agreed document, plus
the same no-copy/sublicense/sell sentence as Documenso. Per-seat subscription
plus a separate signed agreement is the host-for-others gate.

#### [Plausible Analytics](https://github.com/plausible/analytics/blob/master/README.md)

The pure "copyleft + trademark" end of the spectrum: Plausible CE is AGPLv3
with no contractual resale or hosting restriction. The anti-reseller stance
("We want to prevent corporations from offering Plausible as a service
without contributing to the open source project") exists only as stated
intent in a 2020 blog post, not as a binding license or ToS clause; only the
brand is gated, via a separate trademark policy.
Blog: https://plausible.io/blog/open-source-licenses

#### [Nextcloud Trademark Guidelines](https://github.com/nextcloud/nextcloud.com/blob/master/page-trademarks.php)

AGPLv3 core plus trademark guidelines that expressly spell out the permitted
service-provider case: "if you as service provider wish to use the Nextcloud
name and logo, run an unmodified Nextcloud server for your customer, with no
custom apps or disabled/removed official apps." Marks may also be used to
describe and advertise Nextcloud-related services, with one narrow exclusion
(keyword-based ad campaigns, e.g. Google Adwords). The strongest example of
"AGPL permits running a server for your customer; brand is the only gated
thing, via trademark."
Live: https://nextcloud.com/trademarks/

### C. General SaaS resale / service-bureau conventions

#### [Twilio Terms of Service](https://www.twilio.com/en-us/legal/tos)

The cleanest dev-platform carve-out: customers will "not transfer, resell,
lease, license, or otherwise make available the Services to third parties
(except to make the Services available to your End Users) or offer them on a
standalone basis." "Offer them on a standalone basis" is precisely the line
between an agency embedding the service for its clients and reselling the
service itself.

#### [Vercel Terms of Service](https://vercel.com/legal/terms)

The classic app-SaaS prohibition pair despite being a dev platform: "(i)
sublicense, resell, rent, lease, transfer, assign, or otherwise commercially
exploit or make the Services available to any third party" and "(iv) use the
Services for timesharing or service bureau purposes or otherwise for the
benefit of a third-party." No inline carve-out for serving clients; resale
would require a separate arrangement.

#### [Notion Master Subscription Agreement (v.4)](https://www.notion.com/master-subscription-agreement)

License scope is "solely in connection with Customer's internal business
operations." Restrictions bar sub-licensing/selling/sharing the Services,
using them "to provide business process outsourcing services to third parties
(e.g., as a service bureau)," using the Services or API "to circumvent
Subscription Fees," circumventing the unique-identity requirement for Users,
and "temporarily and superficially" reducing User counts to evade limits —
the anti-stuffing/per-identity concept behind a one-Organization-per-customer
rule. §4.6 handles purchases through authorized Resellers separately.

#### [1Password Terms and Conditions of Service](https://1password.com/legal/terms-of-service)

Use is framed per "Use Limit": customers shall not "make the Services
available to anyone other than those authorized by the applicable Use Limit"
nor "sell, resell, rent or lease the Services." Resale/MSP activity is routed
to a separate Partner arrangement; the Use Limit framing is the per-seat
equivalent of per-Organization metering.

#### [Zoom Terms of Service](https://www.zoom.com/en/trust/terms/)

Pairs an explicit "internal use only" software license with a prohibition on
offering the Services "for lease, rent, or sale, or reproduce, resell,
distribute, publish, display, assign, transfer, sublicense, lend, use on a
timeshare or service bureau basis." Account and Host rights may not be shared
"unless otherwise expressly pre-approved by Zoom in writing" — a parallel to
banning multiple distinct customers in one tenant.

#### [Stripe Services Agreement](https://stripe.com/legal/ssa)

Restricts only no-value-added pass-through, not legitimate integration: users
must not "act as service bureau or pass-through agent for the Services with
no added value to Customers," and for Payments must not "act as or hold
itself out as a payment facilitator, intermediary or aggregator, or otherwise
resell the Stripe Payments Services." Genuine resale is routed to a separate
reseller agreement; the boundary is value-added integration vs. bare resale.
Services Terms: https://stripe.com/legal/ssa-services-terms

## Comparison table

"Serves your clients?" reads: does the base license/ToS, on its own terms,
let you use the product to serve your own distinct customers (not just your
own internal use)? No source imposes any price term.

| Source | Mechanism | Serves your clients? | Resale gate |
|---|---|---|---|
| n8n Sustainable Use License | source-available license | Consulting/support: yes. Hosting-for-money/white-label: no | Separate commercial agreement |
| Elastic License 2.0 | source-available license | Yes, unless providing it as a hosted/managed service | Prohibition (exceptions out of band) |
| BSL 1.1 | source-available + delayed OSS | Defined by the adopter's Additional Use Grant | Commercial license |
| Commons Clause v1.0 | source-available condition | No (its "Sell" definition catches consulting/hosting) | None in the clause |
| SSPL v1 §13 | source-available copyleft | Yes, if you release the entire Service Source Code | Source-disclosure copyleft |
| FSL 1.1 | source-available + delayed OSS | Yes, "professional services ... to a licensee" | Competing-use prohibition |
| PolyForm Perimeter 1.0.0 | source-available license | Yes, if the result does not compete with the software | Competing-product prohibition |
| PolyForm Shield 1.0.0 | source-available license | Yes, if it does not compete with the software or the licensor's offerings | Competing-product prohibition |
| GitLab Subscription Agreement | license | Contractor on behalf of Customer only; not own clients | Separate Reseller/Referral Agreement |
| GitLab Reseller/Referral Agreement | separate agreement | Yes (that is its purpose) | Is the gate |
| Mattermost SSLA | license | Yes, "for the benefit of ... Licensee's customers" | No-resale/sublicense prohibition |
| Discourse Self-Serve Terms | service ToS | Not addressed (silent) | None (silent) |
| Sentry self-host (FSL) | license | Yes, "professional services ... to a licensee" | Competing-use prohibition |
| Sentry ToS v3.0.0 | service ToS | No (Customer Application only) | No-resale + separate Reseller |
| PostHog Cloud Terms | service ToS | No (internal use + Affiliates only) | No-resale/service-bureau prohibition |
| Ghost.org ToS | service ToS | No ("...or the benefit of any third party") | Trademark policy (separate) |
| Ghost Trademark Policy | separate agreement | Yes, on self-hosted software, with brand conditions | Is the gate (brand) |
| Bitwarden | mixed (code + MSP program) | Yes, via the Partner/MSP Program | Separate commercial agreement / trademark |
| Metabase Commercial License | mixed (AGPL + commercial) | Yes, embedded in your Customer Application | Commercial license; service-bureau/SaaS barred |
| Grafana Trademark Policy | mixed (AGPL + trademark) | Yes under AGPL; brand is gated | Separate trademark license agreement |
| Cal.com | mixed (AGPL + Platform) | Brand your own pages: yes; SaaS integration: paid | Paid Platform license |
| Documenso Commercial License | mixed (AGPL + commercial) | CE via copyleft; EE per-host subscription | Commercial Subscription |
| Rocket.Chat EE License | mixed (OSS + source-available + MSA) | CE via license; EE per-seat subscription | Subscription ToS / MSA |
| Twilio ToS | service ToS | Yes, to your own End Users (not standalone resale) | No standalone resale; separate arrangement |
| Vercel ToS | service ToS | Not via inline carve-out | No-resale + service-bureau prohibition |
| Notion MSA v.4 | mixed (MSA + Reseller clause) | No (internal business operations only) | No-resale/service-bureau + separate Reseller (§4.6) |
| 1Password Terms | mixed (Terms + Partner) | Within the Use Limit only | No-resale; separate Partner arrangement |
| Zoom ToS | service ToS | No (internal use only) | No-resale + service-bureau prohibition |
| Plausible Analytics | AGPL + trademark | Yes under AGPL copyleft | Trademark policy only (no contractual ban) |
| Nextcloud | AGPL + trademark | Yes (run an unmodified server for your customer) | Trademark guidelines |
| Stripe SSA | mixed (Terms + reseller doc) | Yes, to your own customers (not no-value resale) | Service-bureau bar; separate reseller doc |

## How the prior art maps to the Onetime Secret drafting

The following is original drafting by Onetime Secret, not a quotation from
any surveyed source, recorded here to show how the prior art informed the
wording of ToS Section C.4 and the Organization definition. This was the
June 2026 working draft; the adopted language in the live
`../onetime-terms-of-service.md` (A.13, B.3, C.4) evolved from it and is
authoritative — see decision "Item 1" in `../REMAINING_DECISIONS.md`:

> - **Serving your own customers.** You may use the Service for the benefit
>   of your own customers, including as a contractor, agency, or
>   managed-service provider, provided each customer is set up as its own
>   Organization with its own subscription, so that one Organization
>   corresponds to one customer. Used this way, no separate agreement is
>   required.
> - **Prohibited resale.** Without a separate written agreement signed with
>   Onetime Secret, you may not resell or sublicense the Service, provide it
>   to a third party on a service-bureau basis, white-label or repackage it
>   as your own offering, or operate a reseller business based on the
>   Service. Placing multiple distinct customers in a single Organization or
>   subscription, to avoid the per-Organization basis described above, is
>   also prohibited.

> **Organization** means a multi-user account on the Service that represents
> a single customer (one legal entity), managed by one or more administrators
> on its behalf. An Organization may be administered by a party other than
> the customer it represents (for example, a contractor administering an
> Organization for a client), and each Organization corresponds to a single
> customer and carries its own subscription.

Grounding map: the serve-your-own-customers carve-out follows Mattermost
("for the benefit of ... Licensee's customers") and Sentry's "Customer
Application"; the no-resale/service-bureau core follows GitLab, PostHog, and
Sentry; the separate-written-agreement gate follows GitLab's Reseller
Agreement and n8n's separate commercial agreement; the deliberate absence of
any price/parity term follows the entire field (no surveyed source uses one).
