# Trust, but verify the content

The policy pages are generated from two YAML sources of truth:

- `src/content/policy-constants.yaml` — retention periods, windows, locations, tiers
- `src/content/trust.yaml` — subprocessors, controls (mirrors DPA Schedule A)

Three checks, in increasing strength:

## 1. Structural (free)

`src/lib/policy-constants.ts` imports the YAML at build time (`?raw`) and
validates it with a strict Zod schema — unknown or missing keys fail the
build. The MDX docs (`src/pages/*.mdx`) interpolate those constants; there
is no second copy of the facts.

## 2. Spot-check the build

```sh
pnpm build
diff src/content/trust.yaml dist/trust.yaml        # must be identical
grep -c "30 days" dist/terms/index.html            # YAML-only values appear
```

## 3. Mutation test (definitive)

With `pnpm dev` running:

```sh
sed -i '' 's/refund_days: 30/refund_days: 31/' src/content/policy-constants.yaml
sleep 2
curl -s http://localhost:4321/terms/ | grep -c "31 days"   # non-zero = wired up
git checkout -- src/content/policy-constants.yaml           # revert
```

If a fact on any page does **not** change when its YAML value changes, it
is hardcoded and has escaped the generator — file it as a bug.

## Scope

This verifies numbers and structured facts only. Prose in the MDX files is
hand-written per document; the generator guarantees fact consistency, not
wording consistency. See `docs/how-this-site-works.md`.
