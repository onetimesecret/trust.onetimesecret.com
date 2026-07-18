import * as yaml from "js-yaml";
import { z } from "zod";
// Vite inlines the file contents at build time — no runtime fs access, so
// prerendering works regardless of where the bundle executes.
import rawYaml from "../content/policy-constants.yaml?raw";

// Zod schema for src/content/policy-constants.yaml — the canonical shared
// facts (retention periods, windows, locations, tiers) interpolated into
// the MDX policy documents and the trust site. Strict: an unknown key is a
// typo or an unconsumed fact, and either should fail the build.

const days = z.number().int().positive();

export const PolicyConstantsSchema = z
  .object({
    retention: z
      .object({
        backup_days: days,
        operational_days: days,
        subprocessor_notice_days: days,
        local_backup_days: days,
        geo_backup_expiry_days: days,
      })
      .strict(),
    windows: z
      .object({
        refund_days: days,
        data_export_days: days,
        privacy_response_days: days,
        privacy_response_extension_days: days,
        inactive_account_years: days,
        inactive_notice_days: days,
        policy_change_notice_days: days,
      })
      .strict(),
    infrastructure: z
      .object({
        geo_backup_location: z.string(),
        offsite_backup_location: z.string(),
      })
      .strict(),
    tiers: z
      .object({
        // Keys = deployment-model categories; values = tier family names
        // (not qualified SKUs). See policy-constants.yaml for the rationale.
        multi_tenant: z.array(z.string()).nonempty(), // shared infra
        multi_tenant_suffix: z.string(),
        single_tenant: z.array(z.string()).nonempty(), // dedicated, standardized
        dedicated: z.array(z.string()).nonempty(), // dedicated + customer-specific config
      })
      .strict(),
    security: z.object({ bcrypt_cutoff: z.string() }).strict(),
    urls: z
      .object({
        terms: z.url(),
        privacy: z.url(),
        dpa: z.url(),
        toms: z.url(),
      })
      .strict(),
    exceptions: z
      .object({
        billing_records: z.string(),
        configuration_documentation_years: days,
      })
      .strict(),
  })
  .strict();

export type PolicyConstants = z.infer<typeof PolicyConstantsSchema>;

// Build fails loudly on a schema violation — prose derives from the
// validated artifact, never the reverse.
export const constants: PolicyConstants = PolicyConstantsSchema.parse(
  yaml.load(rawYaml, { schema: yaml.CORE_SCHEMA }),
);

// Prose helpers — spelled-out numbers with numerals in parentheses, the
// convention the legal documents already use ("thirty (30) days").
const SPELLED: Record<number, string> = {
  5: "five",
  7: "seven",
  30: "thirty",
  60: "sixty",
};

export function spelledDays(n: number): string {
  const word = SPELLED[n];
  if (!word) throw new Error(`spelledDays: add "${n}" to SPELLED`);
  return `${word} (${n}) days`;
}

export function spelledYears(n: number): string {
  const word = SPELLED[n];
  if (!word) throw new Error(`spelledYears: add "${n}" to SPELLED`);
  return `${word} (${n}) years`;
}

// "Basic, Identity, Team, and any successor or variant tiers"
export const multiTenantTiers = `${constants.tiers.multi_tenant.join(", ")}, ${constants.tiers.multi_tenant_suffix}`;
