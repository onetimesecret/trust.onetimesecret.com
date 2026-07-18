# trust.onetimesecret.com

Onetime Secret's trust centre: a self-authored, versioned security report for
procurement and vendor-security reviewers. Prose and dated documents only —
no compliance badges, anywhere.

This site is intended to be a public git repository: the commit history is
the changelog, and diffs on the subprocessor list are the trust signal.

## How it's built

- **Astro, static output.** No SSR, no accounts. Access "requests" are email;
  the changelog is `git log`.
- **Single source of truth:** `src/content/trust.yaml`, validated by the Zod
  schema in `src/lib/trust-config.ts`. Every page is a pure render of that
  file, and it is published verbatim at `/trust.yaml` for tooling to diff.
- Fonts are self-hosted via Fontsource — the Privacy Statement commits to
  serving all site assets from our own domains, so no Google Fonts.

Architecture, source-file layout, interpolation, and build commands are
documented in [how-this-site-works.md](./how-this-site-works.md).

## Content rules

- The canonical contractual subprocessor list is **DPA Schedule A**
  (`src/pages/dpa.mdx`, rendered at `/dpa`), whose tables are generated from
  the `subprocessors:` block of `src/content/trust.yaml`. There is one copy
  of the data; edit `trust.yaml` and both the DPA and the Subprocessors page
  change together — the rendered DPA governs.
- Security claims must match the corrected 2026 policy language. In
  particular: a user passphrase is an **access-control gate verified before
  decryption, not a key-derivation input** — do not reintroduce "we cannot
  decrypt passphrase-protected secrets" phrasing (that was only true of a
  legacy scheme).
- No analytics of any kind on this site (the Privacy Statement commits to no
  third-party analytics and no first-party behavioral analytics).

## Before launch (open items)

1. ~Claim the `trust.onetimesecret.com` subdomain.~ It's okay, I know a guy.
2. ~Replace `public/pgp-key.asc` (placeholder) with the real key.~ Done
3. Fill the `since:` dates in `trust.yaml` from infra/billing history.
4. Add the HECVAT 4.1.5 artifact at `public/documents/hecvat-4.1.5.xlsx`
   (or update the document row).
5. Reconstruct real subprocessor change history for the changelog.
6. Set document `updatedAt` dates when the 2026 policy revision gets its
   effective date; update the `view source & history` links if the public
   repo URL differs from `onetimesecret/site-policy`.
7. Editorial sign-off on the Assurance page framing, carried verbatim from
   the design mock: "Open source since 2012" and the one-person-company
   presentation. Confirm both are how we want to present publicly.
8. The production publish must build with `SITE_PHASE=production pnpm build`.
   The non-production banners are fail-safe: any build that doesn't declare
   production keeps them (see `src/lib/site-env.ts`) — nothing to remove or
   edit, just set the variable in the publish job.
