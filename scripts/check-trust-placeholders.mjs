#!/usr/bin/env node
// Guard: no ALL-CAPS placeholder phrases in trust.yaml.
//
// /trust.yaml is served verbatim (src/pages/trust.yaml.ts) and is not
// draft-pruned (src/lib/sitemap.ts nonSectionRoutes), so instruction-style
// placeholders like "LIST THE EXACT MODELS IN USE" ship publicly the moment
// they merge. Unfilled facts must be neutral "TBD" values tracked in
// REMAINING_DECISIONS.md (AI-1 / DPA-1), or kept out of this file entirely
// via the ADR-003 draft sidecar.
//
// Rule: a run of three or more consecutive ALL-CAPS words (2+ letters,
// possessive 'S allowed) is a placeholder phrase when it is 25+ characters
// long or contains an English function word. Both branches are needed so
// legitimate acronym clusters pass — "AWS SES NZ→CA", "DKIM/DMARC/SPF",
// "EU-US DPF + UK" — while short imperatives ("CONFIRM KAGI'S UPSTREAM
// MODEL TERMS") and anything sentence-shaped still fail.
import { readFileSync } from "node:fs";

const FILE = "src/content/trust.yaml";
const CAPS_RUN = /\b[A-Z]{2,}(?:['’]S)?\b(?:[^\w\n]{1,5}\b[A-Z]{2,}(?:['’]S)?\b){2,}/g;
const FUNCTION_WORD = /\b(THE|AND|OR|FOR|OUR|WITH|WHICH|THIS|THAT|FROM|INTO|ARE|IS|BE|TO|IN|ON|OF|USE|USES)\b/;
const isPlaceholder = (run) => run.length >= 25 || FUNCTION_WORD.test(run);

const lines = readFileSync(new URL(`../${FILE}`, import.meta.url), "utf8").split("\n");
const hits = lines.flatMap((text, i) =>
  [...text.matchAll(CAPS_RUN)].some((m) => isPlaceholder(m[0])) ? [{ line: i + 1, text: text.trim() }] : [],
);

if (hits.length > 0) {
  console.error(`${FILE}: ${hits.length} ALL-CAPS placeholder phrase(s) in a file served verbatim at /trust.yaml:`);
  for (const h of hits) console.error(`  L${h.line}: ${h.text}`);
  console.error('Use a neutral "TBD" value tracked in REMAINING_DECISIONS.md, or the ADR-003 draft sidecar.');
  process.exit(1);
}
console.log(`${FILE}: no ALL-CAPS placeholder phrases.`);
