ERRATA-1.md

1. **Organization/subscription model is still ambiguous**


Looking at Kinde, their docs don't address "contractor vs. cheater" head-on and the reason they don't is itself the answer. Four things from their material bear directly on your ambiguity:

**1. They price on axes that make org count irrelevant, so agency patterns need no policing.**

**2. The paying party is decoupled from the org.** 

**3. Their answer for agencies at the platform level is "multiple businesses, one login, each billed separately."** 

**4. On procurement: card-only billing is what creates the reseller in the first place.** 

What that means for what we want to achieve, in plain-language:

**"The only real cheat is serving multiple distinct end-entities through a single org/subscription."** The one genuine way to cheat this pricing model is to make one paid organization do the work of several. Picture a contractor with five client companies. The honest setup is five organizations, each with its own paid subscription. The cheat is to create one organization, pay once, and put all five companies' people and domains inside it. Five companies receive the service, you get paid for one. That is the entire category of abuse: paying once for what should have been several purchases. Everything else that merely looks odd, such as one person owning many organizations or an outsider's card paying the bill, is ordinary business.

**"The five-orgs-per-owner cap then stops doing anti-abuse work (unpaid orgs aren't worth hoarding)."** The rule "each account may own at most five organizations" only makes sense as a defense against cheating. But once every organization must carry its own subscription, owning many organizations cannot save anyone money. Each extra organization either has a subscription, in which case you get paid, or has none, in which case it grants nothing beyond the free tier. Collecting fifty empty organizations gains the collector nothing. So the cap no longer protects revenue.

**"Can be a plain ops guardrail, raised freely for billing accounts with subscriptions attached."** Keep the limit purely as housekeeping: it prevents clutter, accidents, and scripted signups from creating thousands of junk organizations. Because housekeeping is its only remaining job, you can raise it without deliberation whenever a paying customer asks. A contractor with twelve clients wants twelve organizations; each will carry a subscription, so saying yes costs you nothing and earns money. The limit stays strict only for accounts that have never paid, where junk is the realistic risk.

Sources: [Kinde pricing](https://www.kinde.com/pricing/), [Billing concepts & terms](https://docs.kinde.com/billing/about-billing/billing-concepts-terms/), [Kinde billing model](https://docs.kinde.com/billing/about-billing/kinde-billing-model/), [Billing FAQs](https://docs.kinde.com/billing/about-billing/kinde-billing-faqs/), [Kinde for different business models](https://docs.kinde.com/build/set-up-options/kinde-business-model/), [Run multiple businesses](https://docs.kinde.com/build/set-up-options/run-multiple-businesses/), [Multi-tenant billing architecture](https://www.kinde.com/learn/billing/billing-infrastructure/multi-tenant-billing-architecture-scaling-b2b-saas-across-enterprise-hierarchies/), [Linking orgs to billing plans](https://kinde.com/learn/billing/plans/how-to-link-organizations-to-billing-plans-a-guide-for-b2b-saas/), [Terms of service](https://docs.kinde.com/trust-center/agreements/terms-of-service/)


---
