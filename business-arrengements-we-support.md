# business-arrengements-we-support.md
---

# Business Arrangements We Support

Draft policy page / ToS section for Onetime Secret. Written to be read by customers, not lawyers. Standalone; pairs with `billing-payer-decoupling.md`.

---

An **organization** on Onetime Secret represents one company, team, or project. A **subscription** covers one organization. That is the whole model. Everything below follows from it.

One thing that surprises people: you do not need to be a member of an organization to pay for it. The paying party (the billing account, with its card or invoice arrangement) and the organization it pays for are deliberately separate. Whoever handles the money does not need access to the secrets, and whoever uses the service does not need to see the invoice. One billing account can hold any number of subscriptions.

## Arrangements we explicitly support

**Direct.** Your company signs up, creates an organization, and pays for it. The common case.

**Agency and contractor managed.** You run IT for multiple clients. Create an organization for each client, pay for all of them from one billing account, and manage them under one login. Each client gets their own isolated organization: their own members, their own domains, their own SSO, their own data. You get one card on file and, if you want it, one consolidated invoice. If you manage several client organizations, ask us about partner pricing. We want this arrangement to exist; it is a channel, not a loophole.

**Reseller and procurement.** Your customer's procurement team doesn't pay by credit card and doesn't buy directly from suppliers. Fine: you purchase the subscription, invoice your customer through your own accounts-payable process, and administer the organization on their behalf, or hand them the keys and just keep paying. We also support invoice-based payment directly for organizations that need it, so ask before assuming a card is required.

**Sponsored.** A parent company paying for a subsidiary, a donor paying for a nonprofit, a vendor paying for a community project. The payer never has to sign in.

In every arrangement, the person who controls the payment method and the people who administer the organization can be different parties. Billing authority inside an organization (who can change plans, who sees invoices) is a role you assign; ownership of the payment method lives with the billing account. They are often the same person. Nothing requires it.

## Domains

Identity Plus and Team Plus organizations get unlimited custom domains, and we mean it. Point as many domains as you like at your organization: brands, regional TLDs, product names. A domain that shares your organization's members and sign-in is an alias, and aliases are free in any quantity.

A domain becomes something different when it carries its own identity provider and its own scoped members. At that point it isn't another name for your organization; it is functionally a separate tenant, which usually means a separate client. That's not a violation, it's a signal, and we built the path for it: **promote the domain to its own organization**. The spin-out carries the domain's SSO connection, members, and branding into a new organization under your existing billing account, prorated. Your client gets real isolation, you get one more line on the same invoice.

## The one boundary

Each subscription serves one end customer. Operating a single organization as shared infrastructure for several distinct companies is the one arrangement we don't support.

We're not going to police this with audits. We don't have to, because in a secrets product the consolidation hurts you before it hurts us: your clients share a member list, share organization metadata, and sit adjacent to each other inside the very boundary they hired you to maintain. Separate organizations protect you and your clients from each other. The supported version costs a few clicks and partner pricing; the unsupported version costs you an awkward conversation with your own customers.

## Limits are defaults, not walls

Organizations per account, members per organization, and similar caps are operational guardrails against clutter and scripted signups. They are not enforcement. If you have a legitimate arrangement that needs more, ask, and the answer for accounts in good standing is yes.

## You can always run your own

Onetime Secret is MIT licensed. If none of these arrangements fit, or you'd simply rather not pay us, run your own instance; we publish the code and document self-hosting. The paid service sells hosting, uptime, support, and the onetimesecret.com trust anchor. It has never sold artificial scarcity, which is why this page can afford to be short.

Questions about an arrangement not described here: just ask. If it serves your customers without pretending several companies are one, we can probably support it.
