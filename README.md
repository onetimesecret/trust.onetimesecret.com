# Onetime Secret Trust Centre

The source for [trust.onetimesecret.com](TRUST-SITE.md) and
Onetime Secret's policy documents: Terms of Service, Privacy Statement, Data
Processing Agreement (DPA), and Technical & Organisational Measures (TOMs).

This repository is public on purpose. The commit history is the changelog:
if we change a retention period, a subprocessor, or a line of the DPA, the
diff is here for anyone to review.

## How it fits together

Shared facts — retention periods, notice windows, backup locations, the
subprocessor list — live once, in YAML:

- `src/content/policy-constants.yaml` — retention periods, windows, tiers, locations
- `src/content/trust.yaml` — subprocessors and trust-site content, published verbatim at `/trust.yaml`
- `src/content/document-manifest.yaml` — per-document signoff record (status, commit, date)

The documents themselves are human-written prose in
`src/pages/{terms,privacy,dpa,toms}.mdx` that interpolates those values at
build time, so a fact can't drift between the DPA and the Privacy Statement.
The DPA's Schedule A tables and the trust site's Subprocessors page render
from the same data. Details in [docs/how-this-site-works.md](docs/how-this-site-works.md).

## Building locally

Astro, fully static — no accounts, no analytics, no runtime.

```sh
pnpm install
pnpm build    # dist/; fails loudly on any schema violation
pnpm dev      # local preview
```

## Feedback

Questions or corrections are welcome as issues. We can't offer legal advice,
and issues here aren't a support channel — for account help, see
[onetimesecret.com/feedback](https://onetimesecret.com/feedback). The
rendered documents on our site govern; this repository is how they're made.

## License

Document text is available under [CC0-1.0](LICENSE.md) (no trademark
permissions granted), in the tradition of
[GitHub's site-policy](https://github.com/github/site-policy) repo this one
began from. These documents were written for Onetime Secret — adapt with
care, and with your own lawyer.
