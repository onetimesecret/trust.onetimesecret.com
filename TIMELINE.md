# Branch & Commit Timeline

The five branches form a **linear stack** — all 2026 work is 45 commits atop
`main` (`eedf485`, 2024-10-22), each branch a checkpoint further along the same
line. `updates/20260618-2021` is the newest superset tip. Summary view — for
every commit, see `git log`.

## Branch stack (each contains the one below)

```
updates/20260618-2021         -> 2026-07-01  (newest, superset)
  origin/updated/20260614-1956    -> 2026-06-16
  integration/2026-update       -> 2026-06-14  <- HEAD
  origin/updates/20260531-1028   -> 2026-06-01
  main / origin/main           -> 2024-10-22  (published baseline)
```

## Timeline

### 2024 — baseline (on `main`)
```
2024-05-31  f6d1336           fork point from github/site-policy    (tag: archive/2024-05-31-pristine)
2024-06-14  b2e9669           cleanup for onetimesecret.com         (tag: archive/2024-06-14-fork-cleanup)
2024-06-14  42ad6a8..ba672c0  first pass: trademark, privacy, terms
2024-10-22  eedf485           merge #7 — 2024-10-22 policy updates   <- main tip  (tag: 2024-10-22)
```

### 2026-05-31 (morning) · Draft 2 -> tag: archive/2026-05-31-privacy-terms-draft2
```
2026-05-31  57c702a           Update Privacy Statement (2026 draft 2)
2026-05-31  85974c4           Update Terms of Service (draft 2)
2026-05-31  8294787           Remove unused trademark policy doc    (tag: archive/2026-05-31-privacy-terms-draft2)
```

### 2026-05-31 (eve)>06-01 · DPA + review pass -> tag: archive/2026-06-01-dpa-and-review-pass
```
2026-05-31  7aebb76..9c32357  review progress + ToS revisions (task lists, billing, trademark, Organizations)
2026-05-31  b9ed860..572d007  Add DPA (HTML -> markdown via pandoc), rename to 2026-05-31
2026-05-31  c31fa44..a70e4f7  privacy review tasks; split DPA notes from privacy notes
2026-06-01  abfe6ce..312e859  explicit task lists (privacy + DPA)
2026-06-01  1bab4b7           DPA for multi-tenant publication
2026-06-01  f708b0e           Resolve 16 of 18 privacy review items
2026-06-01  d6457ed           cleanup subprocessor list
2026-06-01  cae1e96           remove signature blocks, add authority warranty
2026-06-01  c889181           typo AAC -> AAD
2026-06-01  23cd491           privacy/compliance docs
2026-06-01  cdf18a9           architecture research (Approximated.app)   <- origin/updates/20260531-1028 tip
2026-06-14  2b24e98           Mark TODO-8 done
2026-06-14  8245ada           privacy + terms notes   <- HEAD -> integration/2026-update  (tag: archive/2026-06-01-dpa-and-review-pass)
```

### 2026-06-14>16 · Terms second wave -> tag: archive/2026-06-14-terms-second-wave
```
2026-06-14  e85915c           DPA definitions, security disclosures, tiers
2026-06-14  2d765dc           sync privacy statement with DPA mirror items
2026-06-14  32749c5..de6f744  second-wave ToS changeset + review tasks, encryption/subprocessor terms
2026-06-14  d88549b           account inactivity policy task
2026-06-14  f5f4136           relocate TODO-13 to privacy review
2026-06-16  e2928b9           ignore .txt (resale prior-art scratch)
2026-06-16  696812f           Apply TODO-14 and TODO-15 to ToS   <- origin/updated/20260614-1956  (tag: archive/2026-06-14-terms-second-wave)
```

### 2026-06-18>07-01 · TOMs document (newest, untagged)
```
2026-06-18  8425d0d           Add TOMs draft (WIP)
2026-07-01  62b362c           TOMs with implementation responsibilities   <- updates/20260618-2021 tip
```
