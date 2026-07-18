import { z } from 'zod';

// Zod schema for src/content/trust.yaml — the single source of truth every
// page renders from (Astro Handoff Spec §3, adapted from the Kodus
// trust-config vocabulary). One deliberate divergence from Kodus: `access`
// defaults to `public`; gate by exception.

export const AccessSchema = z.enum(['public', 'request']).default('public');

// The regional multi-tenant deployments (ToS "Regional Domains"). Role
// `regions` values reference these codes; `global` marks a role engaged
// for every region (pan-region — e.g. Proton, Stripe).
export const RegionCodeSchema = z.enum(['eu', 'uk', 'us', 'ca', 'nz']);

export const RegionSchema = z.object({
  code: RegionCodeSchema,
  label: z.string(),
  domain: z.string(),
});

// --- Geography: four fields, four questions. They look redundant but
// legitimately diverge (e.g. AWS = US company, EU-stored data, serves every
// region), so all are kept:
//   entity.jurisdiction — under whose LAW the company sits (transfer analysis)
//   entity.transfer     — the cross-border transfer / adequacy BASIS (see below)
//   roles[].location    — where the DATA physically sits for that role (residency)
//   roles[].regions     — which of our Regional Domains the role serves (routing)
// Do NOT restate any of these in note/comment: a "data located in X" note
// duplicates location/jurisdiction and is the main source of drift, and the
// transfer basis now has its own field. note/comment are for certifications
// only (ISO 27001, SOC 2, …) — everything geographic or transfer-related is
// structured above.

// One row in a DPA Schedule A category table. The DPA's Schedule A tables
// are rendered from these — the contractual list and this file cannot
// drift because they are the same data.
export const SubprocessorRoleSchema = z.object({
  category: z.enum(['infrastructure', 'network', 'email', 'backup', 'payments']),
  // Row label when it differs from the subprocessor's shortName,
  // e.g. "AWS (S3)", "Hetzner (Object storage)".
  label: z.string().optional(),
  purpose: z.string(),
  // Terse role description for diagram nodes ("Compute & hosting",
  // "Edge proxy & TLS"); `purpose` stays Schedule-A verbatim.
  short: z.string(),
  // Ground-truth prose of where THIS role physically processes/stores data
  // ("EU (Germany, Finland); US (Oregon)", "Switzerland", "Global edge
  // network"). Per-role, not per-entity: the entity's displayed location is
  // derived from the unique role locations (subprocessorLocation). `regions`
  // below is the machine-checkable encoding of this text.
  location: z.string(),
  tiers: z.string(), // "All", "Global Elite", "Identity Plus, Team Plus", ...
  optional: z.boolean().default(false),
  // Which Regional Domains this role serves — routing key for the trust-site
  // diagram, NOT a Schedule A column: 'global' (pan-region, engaged regardless
  // of where the data lives) or specific region codes. This is the structured
  // encoding of `location` above; the two must agree (see trust.yaml reconcile
  // TODO). Codes must exist in the top-level `regions` registry.
  regions: z.union([z.literal('global'), z.array(RegionCodeSchema).nonempty()]),
  data: z.array(z.string()).nonempty(), // Categories of Data
});

// DPA Schedule A "Subprocessor Entity Details" row.
export const SubprocessorEntitySchema = z.object({
  address: z.string(),
  // The company's legal home — Schedule A "Jurisdiction" column. About the
  // VENDOR, not the data: it can differ from every role's `location` (AWS =
  // US jurisdiction, EU-stored data). Drives cross-border transfer analysis.
  jurisdiction: z.string(),
  // The lawful basis for any cross-border transfer — the single home for the
  // adequacy fact that used to be smeared across note/comment. Sits next to
  // jurisdiction because it answers the question jurisdiction raises. Values
  // follow the DPA §12 framework:
  //   intra-region          — data stays in its region of collection (§12.1);
  //                           no restricted transfer
  //   EU-US DPF             — US vendor certified under the Data Privacy
  //                           Framework (DPA §12.2(a))
  //   EU adequacy decision  — vendor in an EU-adequate third country (CH, NZ)
  //   "… — DPA §12.2(b)/(c)" — the transient-edge and geo-backup exceptions,
  //                           anchored to their governing clause
  // Omit only where no processing occurs yet (standby entries).
  transfer: z.string().optional(),
  // Schedule A "Comment" column (contractual). Certifications ONLY (ISO 27001,
  // SOC 2, …). Never geography or transfer basis — both are structured above
  // (location/regions and transfer); restating them here is the main drift source.
  comment: z.string().optional(),
});

export const SubprocessorSchema = z.object({
  name: z.string(),
  // Short name used in the Schedule A category tables ("Hetzner");
  // override per-role with roles[].label where it differs.
  shortName: z.string(),
  // Human summary for the trust site's Subprocessors page; the factual
  // per-category detail lives in roles[].
  purpose: z.string(),
  // "TBD" until the per-entity engagement dates are confirmed against
  // invoices / infra history (Handoff Spec §7.2).
  since: z.string(),
  // Core subprocessors apply to all service tiers; alternatives may be
  // engaged per DPA Schedule A ("alternatives unless stated as additive").
  core: z.boolean().default(false),
  // Engagement is orthogonal to core/optional. `active` = processes data in
  // the standard multi-tenant / single-tenant service today. `standby` =
  // vetted and contractually approved (it stays in Schedule A's "List of
  // Approved Subprocessors"), but processes no customer data yet — disclosed
  // in advance so the objection window can run before engagement. Providers
  // unique to a bespoke/custom install are recorded as `standby`; that
  // install is governed by its own agreement, not this list.
  engagement: z.enum(['active', 'standby']).default('active'),
  // Trust-site display note ("Certifications & notes"); falls back to
  // entity.comment when absent. Same rule as comment: certifications only —
  // no geography, no transfer basis (those are structured on entity).
  note: z.string().optional(),
  entity: SubprocessorEntitySchema,
  roles: z.array(SubprocessorRoleSchema).nonempty(),
});

// Derived display location: the unique role locations, in order.
export function subprocessorLocation(s: { roles: Array<{ location: string }> }): string {
  return [...new Set(s.roles.map((r) => r.location))].join('; ');
}

export type RegionCode = z.infer<typeof RegionCodeSchema>;
export type Region = z.infer<typeof RegionSchema>;

type RoleRegions = { regions: 'global' | RegionCode[] };

// Pan-region: every role applies regardless of which region the data lives in.
export function isPanRegion(s: { roles: RoleRegions[] }): boolean {
  return s.roles.every((r) => r.regions === 'global');
}

// The region-specific roles a subprocessor has in a given region
// (pan-region roles are excluded — they appear in the pan-region list).
export function rolesForRegion<R extends RoleRegions>(
  s: { roles: R[] },
  code: RegionCode,
): R[] {
  return s.roles.filter((r) => r.regions !== 'global' && r.regions.includes(code));
}

export const ChangelogEntrySchema = z.object({
  date: z.string(),
  verb: z.enum(['added', 'removed', 'updated']),
  title: z.string(),
  note: z.string(),
});

export const DocumentSchema = z.object({
  name: z.string(),
  description: z.string(),
  category: z.enum(['policy', 'agreement', 'assessment', 'technical']),
  access: AccessSchema,
  updatedAt: z.string(), // ISO date, "TBD on release", "rolling", or "planned"
  action: z.object({
    label: z.string(), // "read", "download", "email us", "notify me", "view"
    href: z.string().optional(), // absent => mailto contact
  }),
});

export const FaqSchema = z.object({
  q: z.string(),
  a: z.string(),
});

export const AuditMappingSchema = z.object({
  framework: z.string(),
  control: z.string(),
  how: z.string(),
});

export const FlowStepSchema = z.object({
  step: z.string(),
  title: z.string(),
  body: z.string(),
});

export const TrustConfigSchema = z.object({
  meta: z.object({
    name: z.string(),
    updatedAt: z.string(),
    contacts: z.object({
      email: z.email(),
      sla: z.string(),
      pgp: z.string(),
    }),
  }),
  regions: z.array(RegionSchema).nonempty(),
  subprocessors: z.array(SubprocessorSchema),
  subprocessorChangelog: z.array(ChangelogEntrySchema),
  documents: z.array(DocumentSchema),
  faqs: z.array(FaqSchema),
  auditMappings: z.array(AuditMappingSchema),
  flow: z.array(FlowStepSchema),
});

export type TrustConfig = z.infer<typeof TrustConfigSchema>;
export type Subprocessor = z.infer<typeof SubprocessorSchema>;
export type ChangelogEntry = z.infer<typeof ChangelogEntrySchema>;
export type TrustDocument = z.infer<typeof DocumentSchema>;
