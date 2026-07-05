import * as yaml from "js-yaml";
import { TrustConfigSchema, type TrustConfig } from "./trust-config";
// Vite inlines the file contents at build time — no runtime fs access, so
// prerendering works regardless of where the bundle executes.
import rawYaml from "../content/trust.yaml?raw";

export const rawTrustYaml: string = rawYaml;

// Build fails loudly on a schema violation — prose derives from the
// validated artifact, never the reverse.
export const trust: TrustConfig = TrustConfigSchema.parse(
  // CORE_SCHEMA: plain scalars/maps/sequences only — no custom tags.
  yaml.load(rawYaml, { schema: yaml.CORE_SCHEMA }),
);
