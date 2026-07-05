import { z } from 'zod';

// Zod schema for src/content/trust.yaml — the single source of truth every
// page renders from (Astro Handoff Spec §3, adapted from the Kodus
// trust-config vocabulary). One deliberate divergence from Kodus: `access`
// defaults to `public`; gate by exception.

export const AccessSchema = z.enum(['public', 'request']).default('public');

// One row in a DPA Schedule A category table. The DPA's Schedule A tables
// are rendered from these — the contractual list and this file cannot
// drift because they are the same data.
export const SubprocessorRoleSchema = z.object({
  category: z.enum(['infrastructure', 'network', 'email', 'backup', 'payments']),
  // Row label when it differs from the subprocessor's shortName,
  // e.g. "AWS (S3)", "Hetzner (Object storage)".
  label: z.string().optional(),
  purpose: z.string(),
  location: z.string(),
  tiers: z.string(), // "All", "Global Elite", "Identity Plus, Team Plus", ...
  optional: z.boolean().default(false),
  data: z.array(z.string()).nonempty(), // Categories of Data
});

// DPA Schedule A "Subprocessor Entity Details" row.
export const SubprocessorEntitySchema = z.object({
  address: z.string(),
  jurisdiction: z.string(),
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
  note: z.string().optional(),
  entity: SubprocessorEntitySchema,
  roles: z.array(SubprocessorRoleSchema).nonempty(),
});

// Derived display location: the unique role locations, in order.
export function subprocessorLocation(s: { roles: Array<{ location: string }> }): string {
  return [...new Set(s.roles.map((r) => r.location))].join('; ');
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
