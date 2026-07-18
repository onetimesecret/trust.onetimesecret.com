ERRATA-1.md

1. **Organization/subscription model is still ambiguous**


Looking at Kinde, their docs don't address "contractor vs. cheater" head-on and the reason they don't is itself the answer. Four things from their material bear directly on our ambiguity:

**1. They price on axes that make org count irrelevant, so agency patterns need no policing.**

**2. The paying party is decoupled from the org.** 

**3. Their answer for agencies at the platform level is "multiple businesses, one login, each billed separately."** 

**4. On procurement: card-only billing is what creates the reseller in the first place.** 

What that means for what we want to achieve, in plain-language:

**"The only real cheat is serving multiple distinct end-entities through a single org/subscription."** The one genuine way to cheat this pricing model is to make one paid organization do the work of several. Picture a contractor with five client companies. The honest setup is five organizations, each with its own paid subscription. The cheat is to create one organization, pay once, and put all five companies' people and domains inside it. Five companies receive the service, we get paid for one. That is the entire category of abuse: paying once for what should have been several purchases. Everything else that merely looks odd, such as one person owning many organizations or an outsider's card paying the bill, is ordinary business.

**"The five-orgs-per-owner cap then stops doing anti-abuse work (unpaid orgs aren't worth hoarding)."** The rule "each account may own at most five organizations" only makes sense as a defense against cheating. But once every organization must carry its own subscription, owning many organizations cannot save anyone money. Each extra organization either has a subscription, in which case we get paid, or has none, in which case it grants nothing beyond the free tier. Collecting fifty empty organizations gains the collector nothing. So the cap no longer protects revenue.

**"Can be a plain ops guardrail, raised freely for billing accounts with subscriptions attached."** Keep the limit purely as housekeeping: it prevents clutter, accidents, and scripted signups from creating thousands of junk organizations. Because housekeeping is its only remaining job, we can raise it without deliberation whenever a paying customer asks. A contractor with twelve clients wants twelve organizations; each will carry a subscription, so saying yes costs we nothing and earns money. The limit stays strict only for accounts that have never paid, where junk is the realistic risk.

Sources: [Kinde pricing](https://www.kinde.com/pricing/), [Billing concepts & terms](https://docs.kinde.com/billing/about-billing/billing-concepts-terms/), [Kinde billing model](https://docs.kinde.com/billing/about-billing/kinde-billing-model/), [Billing FAQs](https://docs.kinde.com/billing/about-billing/kinde-billing-faqs/), [Kinde for different business models](https://docs.kinde.com/build/set-up-options/kinde-business-model/), [Run multiple businesses](https://docs.kinde.com/build/set-up-options/run-multiple-businesses/), [Multi-tenant billing architecture](https://www.kinde.com/learn/billing/billing-infrastructure/multi-tenant-billing-architecture-scaling-b2b-saas-across-enterprise-hierarchies/), [Linking orgs to billing plans](https://kinde.com/learn/billing/plans/how-to-link-organizations-to-billing-plans-a-guide-for-b2b-saas/), [Terms of service](https://docs.kinde.com/trust-center/agreements/terms-of-service/)


---

### **Business arrangements we support.**


Confirmed against the codebase first: `OrganizationMembership` carries a `domain_scope_id`, and domain-scoped memberships are granted by that domain's IdP (organization_membership.rb:132-167, 642-649). So one org with N domains, each with its own SSO and its own scoped members, can genuinely behave like N tenants under one subscription. That matters for both halves of our question.

**Reframing the ToS.** The move is to invert the document: define the supported arrangements positively, make the prohibition one narrow sentence that names the boundary rather than the villain, and frame every limit as an operational default rather than a wall. Something like this shape:

> **Business arrangements we support.** An organization represents one company, team, or project. We do not need to be a member of an organization to pay for it. We explicitly support: agencies and IT contractors who own and pay for organizations on behalf of clients; resellers who purchase subscriptions and invoice their customers through their own procurement process; and sponsors paying for an organization they take no part in. One billing account can hold any number of subscriptions. If we manage organizations for several clients, contact us about partner pricing and consolidated invoicing.
>
> **The one boundary.** Each subscription covers one organization, and one organization serves one end customer. Operating a single organization as shared infrastructure for multiple distinct companies is not a supported arrangement; the supported version is one organization each, and we make that the easier path. Account limits (organizations per owner, members per organization) are operational defaults, raised on request for accounts in good standing.
>
> **Self-hosting.** Onetime Secret is MIT licensed. If our commercial terms don't fit your situation, running your own instance is a legitimate and supported choice, and we document it.

The MIT paragraph converts the ToS from a fence into a price list: nobody needs to subvert the paid service because the free path is public and endorsed. That is a credible reason our terms can stay light, and it reads as confidence rather than generosity. It also truthfully repositions what the subscription sells: hosting, support, uptime, and the onetimesecret.com trust anchor, not artificial scarcity. Standard caveat: I'm not a lawyer, run the final wording past one.


Definitions?

An **alias domain** shares the org's members, auth, and identity. A company with twelve brands or regional TLDs pointing at one branded secret page is one entity with twelve names. These cost we nearly nothing and leak no revenue. "Unlimited domains" should keep meaning exactly this, without apology, and it stays a headline feature of Identity Plus and Team Plus.

A **boundary domain** is one that carries its own IdP and its own domain-scoped members. That configuration is our product's definition of a distinct end customer, whether or not anyone intended it that way. The `domain_scope_id` machinery is precisely the feature a contractor would use to run five clients inside one subscription.


The judo is to make the boundary configuration the on-ramp to an organization instead of a substitute for one. Concretely: build **"promote domain to organization"** as a first-class product action. One click takes a boundary domain and spins it out into its own org under the same billing account, carrying its IdP, its scoped members, and its branding with it, prorated onto a new agreement. Then the upgrade path is a feature we advertise to agencies, not an accusation we level at them. Wer existing per-org member caps (`total_members_per_org` in billing.yaml) do the economic pressure: five clients' staff sharing one org's member allowance run out of room naturally, and the resolution we offer is a spin-out, which costs them one click and earns we an agreement.

We also hold a card Kinde doesn't: in a secrets product, isolation is the value proposition itself. A contractor consolidating five clients into one org is creating exactly the cross-client adjacency their clients hired them to prevent, with a shared member list and shared org metadata. Say so, gently, in the partner-facing docs: separate organizations protect we and our clients from each other. Proper use isn't just easier than subversion here; subversion is professionally embarrassing in a way the consolidator's own customers would object to. That is the strongest form of "tempering abuse with cost structure": the cost is borne in the abuser's own product experience, and the exit from it is a purchase.
