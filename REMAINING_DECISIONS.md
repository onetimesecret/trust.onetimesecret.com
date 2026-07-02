# Remaining decisions

Decisions and verifications that block publication and need Delano. One item
per line. Everything else in ERRATA.md is unblocked drafting work.



## Legal position (blocks the most downstream text)

- [x] Decision CP-1: Pick one controller/processor position for Organization member data — the live Privacy Statement (line 55) says the Organization owner/admin is the GDPR controller with Onetime Secret as processor (matching the DPA's model), but the ToS review (IC-1) removed that same claim as "factually incorrect — Onetime Secret remains the controller." One position must hold across ToS, PP, and DPA before publication. (ERRATA.md header finding 1)

Background: I edited the ToS but possibly inadvertently added to the confusion. The way it was written, it sounded to me like we were conflating "Organization" as in, one of our core data model and "Organization" as in, a legal entity that uses our service. That is all I was trying to clarify; I wasnt expressing any opinions.

The term "Organization" is overloaded so for disambiguation:

* GDPR & DPA language, controller/processor: our customers are the controllor and we are the processer. My background note explains where this confusion came from. Our pre-existing DPA was already correct about this.
* Protecting our Subscription/billing arrangements: Organization as in our data model entity is a one to one with subscription. 

DECISION: our customers are the controllor and we are the processer.  Our pre-existing DPA was already correct about this.





## Substantive scope judgments


### Decision DPA-3: 
- [x] Decision DPA-3: The Privacy Statement's no-sell/no-share commitment carries the qualifier "not for their commercial purposes" — decide whether that qualifier is intentional scope-narrowing; if not, remove it. (onetime-dpa-review-tasks.md DPA-3)

This item is poorly labelled (related to the confusion I mention above); it has nothing to do with the DPA or GDPR. 

DECISION: We bill at the organization data record level. The Organization owner is the one who is responsible for the subscription and billing. This is a separate concern from the GDPR controller/processor relationship. This relates directly to the "**Business arrangements we support.**" section in ERRATA-1. 

DECISION (2026-07-02, the qualifier question itself): Remove the "for their commercial purposes" qualifier. We do not sell, rent, or trade Account Data — absolute, no qualifier. We do not share it with any third party except in the situations the section already lists (subprocessors for the stated reasons, corporate transactions, Compelled Disclosure, or with permission). Applied to the Privacy Statement "How we share" opening paragraph; sharing is scoped by the enumerated situations rather than by a commercial-purposes qualifier.





### Decision INACT-1:

- [x] Decision INACT-1: Inactive-account removal — attempt email notice to the registered address before removing, or keep "removal may occur automatically and without separate notice"? (Privacy review-tasks TODO-12; drafted text ready either way)

DECISION: WE WILL GIVE NOTICE. Draft the clause(s) based on thef following:

Use notice-attempt language, and make it concrete rather than aspirational. The strongest, least-attackable formulation I'd suggest, modeled on the Apple/Google pattern:

> We will attempt to notify you via the email address associated with your account at least [N] days before suspending or deleting an account that has been inactive for [M] months. If the account remains inactive after that period, we may suspend or delete it and its associated data. Notice is a courtesy; our failure to send or your failure to receive it does not prevent deletion, but we will make a reasonable attempt.

A few refinements worth considering:

Make notice a "best-efforts" obligation, not a condition precedent. Saying "we'll try to notify you" rather than "we won't delete until you've been notified" preserves your ability to act while still being defensible. This is the actual legal posture Google and Apple take — they send notice as a matter of policy, not as a contractual precondition that would let users block deletion by ignoring email.
Define "inactive" precisely (e.g., "no successful login for 12 months"). Vague "extended period as we determine" language (à la Humana Community, cited in TermsFeed) is the other common weakness 1.
Carve out data-export/grace period if you can — even a "you may request an export for 30 days after notice" clause materially changes the user-rights feel without much operational cost.



### Decision INACT-2:
- [x] Decision INACT-2: Confirm five years as the inactivity window (regulation and our own policy may change across it; draft says "may," not "will," so the number is the only open variable). (Privacy review-tasks TODO-12)

DECISION: 5 years i.e. 60 months.



### Decision TODO-23:

- [x] Decision TODO-23: Approve (or edit) the drafted "Network-level access controls" clause stating that single-tenant deployments may offer IP-range filtering depending on the hosting provider — a contractual availability statement, held for individual review. (ToS review-tasks TODO-23)


DECISION:  multi-tenant Service, CIDR/IP filtering is enforced at the application layer; single tenant deployments may offer IP-range filtering depending on the hosting provider. whichever is available we will clearly label. 




## Code verification (needs the application repo, outside site-policy)


### Verify TODO-20a:

- [x] Verify TODO-20a: Confirm in the application code that Incoming Secrets protects configured recipient email addresses as claimed (address handled as a hashed value; only a display name rendered in the form) before any mechanism language goes into the ToS; TODO-20's "best effort" wording already covers the liability core without it. (ToS review-tasks TODO-20a)


DECISION: YES without any ambiguity, Incoming Secrets protects email addresses.


- [x] Verify TODO-23a: Confirm that on the multi-tenant Service, CIDR/IP filtering is enforced at the application layer (vs network or edge) before that implementation detail is drafted into the ToS. (ToS review-tasks TODO-23a)

DECISION:  multi-tenant Service, CIDR/IP filtering is enforced at the application layer; single tenant deployments may offer IP-range filtering depending on the hosting provider. whichever is available we will clearly label. 



## Facts only you have


### Facts TLS-1:

- [x] Facts TLS-1: For the edge-TLS-termination exception (Cloudflare on regional entry domains; Approximated on paid-tier Custom Domains), state which regions/surfaces can drop the exception and roughly when — the per-surface restructure of PP/DPA text can proceed without this, but any elimination claim can't. (ERRATA.md item 5)


DECISION: Do not include elimination claim in the PP/DPA text. The exception is a fact of the current architecture and will remain so for the foreseeable future. We will not make any claims about eliminating this exception in the documentation. We will update the documents in the future when that is taking place. 

Be clear about: Cloudflare on regional domains only (eu.onetimesecret.com) and for the protection of the service. Use a custom domain is off cloudflare and on Approximated. We already added good language around edge-network TLS termination.
