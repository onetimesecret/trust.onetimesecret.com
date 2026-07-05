import { z } from 'zod';

// Zod schema for src/content/trust.yaml — the single source of truth every
// page renders from (Astro Handoff Spec §3, adapted from the Kodus
// trust-config vocabulary). One deliberate divergence from Kodus: `access`
// defaults to `public`; gate by exception.

export const AccessSchema = z.enum(['public', 'request']).default('public');

export const SubprocessorSchema = z.object({
  name: z.string(),
  purpose: z.string(),
  location: z.string(),
  // "TBD" until the per-entity engagement dates are confirmed against
  // invoices / infra history (Handoff Spec §7.2).
  since: z.string(),
  // Core subprocessors apply to all service tiers; alternatives may be
  // engaged per DPA Schedule A ("alternatives unless stated as additive").
  core: z.boolean().default(false),
  note: z.string().optional(),
});

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
      email: z.string().email(),
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
