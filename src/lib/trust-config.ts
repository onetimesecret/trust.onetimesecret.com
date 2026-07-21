import { z } from "zod";

// Zod schema for src/content/trust.yaml — the single source of truth every
// page renders from (Astro Handoff Spec §3, adapted from the Kodus
// trust-config vocabulary). One deliberate divergence from Kodus: `access`
// defaults to `public`; gate by exception.

export const AccessSchema = z.enum(["public", "request"]).default("public");

// The regional multi-tenant deployments (ToS "Regional Domains"). Service
// `regions` values reference these codes; `global` marks a service engaged
// for every region (pan-region — e.g. Proton, Stripe).
export const RegionCodeSchema = z.enum(["eu", "uk", "us", "ca", "nz"]);

export const RegionSchema = z.object({
  code: RegionCodeSchema,
  label: z.string(),
  domain: z.string(),
});

// --- Geography: four fields, four questions. They look redundant but
// legitimately diverge (e.g. AWS = US company, EU-stored data, serves every
// region), so all are kept:
//   entity.jurisdiction — under whose LAW the company sits (transfer analysis)
//   entity.transferBasis — the cross-border transfer / adequacy BASIS (see below)
//   services[].location — where the DATA physically sits for that service (residency)
//   services[].regions  — which of our Regional Domains the service serves (routing)
// Do NOT restate any of these in note/comment: a "data located in X" note
// duplicates location/jurisdiction and is the main source of drift, and the
// transfer basis now has its own field. note/comment are for certifications
// only (ISO 27001, SOC 2, …) — everything geographic or transfer-related is
// structured above.

// One row in a DPA Schedule A category table. The DPA's Schedule A tables
// are rendered from these — the contractual list and this file cannot
// drift because they are the same data.
// strictObject across the subprocessor family: a misplaced or misspelled key
// (e.g. a per-service flag landing at subprocessor level) fails the build
// instead of being silently stripped.
export const SubprocessorServiceSchema = z.strictObject({
  category: z.enum(["infrastructure", "network", "email", "backup", "payments"]),
  // Row label when it differs from the subprocessor's shortName,
  // e.g. "AWS (S3)", "Hetzner (Object storage)".
  label: z.string().optional(),
  // Schedule A "Purpose" column — contractual verbatim; tightening this
  // wording edits the DPA. The plain-language pitch lives on the
  // subprocessor's `summary`, not here.
  purpose: z.string(),
  // Terse service description for diagram nodes ("Compute & hosting",
  // "Edge proxy & TLS"); `purpose` stays Schedule-A verbatim.
  short: z.string(),
  // Ground-truth prose of where THIS service physically processes/stores data
  // ("EU (Germany, Finland); US (Oregon)", "Switzerland", "Global edge
  // network"). Per-service, not per-entity: the entity's displayed location is
  // derived from the unique service locations (subprocessorLocation). `regions`
  // below is the machine-checkable encoding of this text.
  location: z.string(),
  // Schedule A "Tiers" column. Use tier FAMILY names from the
  // policy-constants.yaml `tiers:` block ("Identity, Team" — never SKUs
  // like "Identity Plus"), "All", "Global Elite", or a scoping phrase
  // ("All multi-tenant tiers, when accessed via the regional service domains").
  tiers: z.string(),
  // Lifecycle of THIS service row, when it differs from the norm:
  //   (absent)      — in standard use
  //   standby       — approved in advance but not yet processing; for a
  //                   single approved-only service of an otherwise active
  //                   vendor (whole-vendor standby is entity `engagement`)
  //   transitioning — an engagement being phased in or out; rendered with
  //                   the dashed "not always there" border in the diagram
  //                   and register
  status: z.enum(["standby", "transitioning"]).optional(),
  // Front-door column for the region diagram. Omit for anything that
  // isn't an ingress path (compute, backups, email, payments — those are
  // placed by category):
  //   canonical — regional service-domain path (…onetimesecret.com):
  //               Cloudflare DNS + edge proxy
  //   custom    — customer custom-domain targets (…onetime.co): the DNS
  //               authoritative for those targets (Hetzner) + Approximated TLS
  ingress: z.enum(["canonical", "custom"]).optional(),
  // Which Regional Domains this service serves — routing key for the trust-site
  // diagram, NOT a Schedule A column: 'global' (pan-region, engaged regardless
  // of where the data lives) or specific region codes. This is the structured
  // encoding of `location` above; the two must agree (see trust.yaml reconcile
  // TODO). Codes must exist in the top-level `regions` registry.
  regions: z.union([z.literal("global"), z.array(RegionCodeSchema).nonempty()]),
  dataCategories: z.array(z.string()).nonempty(), // Schedule A "Categories of Data"
});

// DPA Schedule A "Subprocessor Entity Details" row.
export const SubprocessorEntitySchema = z.strictObject({
  address: z.string(),
  // The company's legal home — Schedule A "Jurisdiction" column. About the
  // VENDOR, not the data: it can differ from every service's `location` (AWS =
  // US jurisdiction, EU-stored data). Drives cross-border transfer analysis.
  // Values are the country of incorporation ("Germany", "US", "Switzerland") —
  // not a bloc, and never corporate-structure commentary.
  jurisdiction: z.string(),
  // The lawful basis for any cross-border transfer — the single home for the
  // adequacy fact that used to be smeared across note/comment. Sits next to
  // jurisdiction because it answers the question jurisdiction raises. Values
  // follow the DPA §12 framework:
  //   No cross-border transfer — data stays in its region of collection
  //                           (DPA §12.1); no restricted transfer occurs
  //   EU-US DPF + UK Extension + Swiss-US DPF — US vendor certified under
  //                           the Data Privacy Framework (DPA §12.2(a))
  //   "… — DPA §12.2(b)/(c)" — the transient-edge and geo-backup exceptions,
  //                           anchored to their governing clause
  //   Swiss adequacy — DPA §12.2(d) — vendor in an adequate third country
  //                           (EU Art. 45 decision; UK adequacy regulations)
  //   "None — …"            — transparency listing: the service processes no
  //                           Company Personal Data (e.g. public-site CDN)
  // (§12.2(e), Sentry error telemetry, is self-hosted — never a row here.)
  // Omit only where no processing occurs yet (standby entries).
  transferBasis: z.string().optional(),
  // Schedule A "Comment" column (contractual). Certifications ONLY (ISO 27001,
  // SOC 2, …). Never geography or transfer basis — both are structured above
  // (location/regions and transfer); restating them here is the main drift source.
  comment: z.string().optional(),
});

export const SubprocessorSchema = z.strictObject({
  name: z.string(),
  // Short name used in the Schedule A category tables ("Hetzner");
  // override per-service with services[].label where it differs.
  shortName: z.string(),
  // Human summary for the trust site's Subprocessors page — plain language,
  // NOT contractual. The Schedule A "Purpose" wording lives per-service in
  // services[].purpose.
  summary: z.string(),
  // "TBD" until the per-entity engagement dates are confirmed against
  // invoices / infra history (Handoff Spec §7.2).
  since: z.string(),
  // Engagement of the vendor as a whole (single-service exceptions live on
  // services[].status). `active` = processes data in the standard
  // multi-tenant / single-tenant service today. `standby` = vetted and
  // contractually approved (it stays in Schedule A's "List of Approved
  // Subprocessors"), but processes nothing in the standard service —
  // disclosed in advance so the objection window can run before engagement.
  // Providers engaged only for bespoke/custom installs are ALSO recorded as
  // plain `standby`, deliberately unlabeled: the register's "Bespoke &
  // custom installations" notice covers them generically, and a per-provider
  // bespoke flag would map which vendors serve those installs.
  engagement: z.enum(["active", "standby"]).default("active"),
  // True when the provider runs our OWN operations (company/support email,
  // source control, CI, corporate DNS) rather than the customer secret
  // flow. Operational entries are kept OUT of the region data-flow diagram
  // and grouped into the Subprocessors page's "used internally" section
  // instead of the main register. Independent of `engagement`: Proton Mail
  // is operational AND active (it processes support-email personal data, so
  // it stays in Schedule A); Northflank is operational AND standby. Providers
  // that process NO Company Personal Data at all are not subprocessors —
  // they belong in `internalTools`, not here.
  operational: z.boolean().optional(),
  // Trust-site display note ("Certifications & notes"); falls back to
  // entity.comment when absent. Same rule as comment: certifications only —
  // no geography, no transfer basis (those are structured on entity).
  note: z.string().optional(),
  entity: SubprocessorEntitySchema,
  services: z.array(SubprocessorServiceSchema).nonempty(),
});

// Providers we use to run the company that are NOT subprocessors of Company
// Personal Data — source control, CI, corporate DNS, AI-assisted development
// and research tools. They have no Schedule A
// row (no data categories, tiers, or transfer basis to state) and never
// render into the DPA. Listed on the Subprocessors page purely for
// transparency, alongside the operational subprocessors. If a tool starts
// processing Company Personal Data, it graduates into `subprocessors`.
export const InternalToolSchema = z.strictObject({
  name: z.string(),
  // What we use it for, plain language.
  use: z.string(),
  // The company's legal home, where known. Transparency only — no transfer
  // analysis attaches, since no Company Personal Data is processed.
  jurisdiction: z.string().optional(),
  // Optional certifications / clarifying note.
  note: z.string().optional(),
  // True for AI-assisted tools. Groups the entry onto the AI page's
  // "Employee AI usage" section in addition to the Subprocessors page's
  // internal-tools list.
  ai: z.boolean().optional(),
});

// Model-level AI disclosure, rendered on the AI page. Vendor-level
// disclosure (`internalTools` with `ai: true`) says who we pay; it doesn't
// say what actually processes our source and drafts, or under which terms.
// No trust-centre convention exists for model-level disclosure — the
// SafeBase-style AI cards stop at the vendor — so this schema sets ours:
// the exact model as the vendor names it, the surface it's reached
// through, what we use it for, and any per-model terms note.
export const AiModelSchema = z.strictObject({
  // Exact model name and version/ID as the vendor publishes it.
  model: z.string(),
  // Vendor legal name; must match an `internalTools` entry with `ai: true`.
  vendor: z.string(),
  // The tool or surface the model is reached through (editor agent, CLI,
  // assistant UI) — the thing that determines what the model can see.
  via: z.string(),
  // What we use it for, plain language.
  use: z.string(),
  // Optional per-model terms note (training exclusion, retention).
  note: z.string().optional(),
});

// Derived display location: the unique service locations, in order.
export function subprocessorLocation(s: { services: Array<{ location: string }> }): string {
  return [...new Set(s.services.map((r) => r.location))].join("; ");
}

export type RegionCode = z.infer<typeof RegionCodeSchema>;
export type Region = z.infer<typeof RegionSchema>;

type ServiceRegions = { regions: "global" | RegionCode[] };

export type ServiceStatus = "active" | "standby" | "transitioning";

// Effective lifecycle of one service row: whole-vendor standby wins, then
// the row's own status, else active.
export function serviceStatus(
  s: { engagement: "active" | "standby" },
  r: { status?: "standby" | "transitioning" },
): ServiceStatus {
  return s.engagement === "standby" ? "standby" : (r.status ?? "active");
}

// Pan-region: every service applies regardless of which region the data lives in.
export function isPanRegion(s: { services: ServiceRegions[] }): boolean {
  return s.services.every((r) => r.regions === "global");
}

// The region-specific services a subprocessor has in a given region
// (pan-region services are excluded — they appear in the pan-region list).
export function servicesForRegion<R extends ServiceRegions>(s: { services: R[] }, code: RegionCode): R[] {
  return s.services.filter((r) => r.regions !== "global" && r.regions.includes(code));
}

export const ChangelogEntrySchema = z.object({
  date: z.string(),
  verb: z.enum(["added", "removed", "updated"]),
  title: z.string(),
  note: z.string(),
});

export const DocumentSchema = z.object({
  name: z.string(),
  description: z.string(),
  category: z.enum(["policy", "agreement", "assessment", "technical"]),
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
  internalTools: z.array(InternalToolSchema).default([]),
  aiModels: z.array(AiModelSchema).default([]),
  subprocessorChangelog: z.array(ChangelogEntrySchema),
  documents: z.array(DocumentSchema),
  faqs: z.array(FaqSchema),
  auditMappings: z.array(AuditMappingSchema),
  flow: z.array(FlowStepSchema),
});

export type TrustConfig = z.infer<typeof TrustConfigSchema>;
export type Subprocessor = z.infer<typeof SubprocessorSchema>;
export type InternalTool = z.infer<typeof InternalToolSchema>;
export type AiModel = z.infer<typeof AiModelSchema>;
export type ChangelogEntry = z.infer<typeof ChangelogEntrySchema>;
export type TrustDocument = z.infer<typeof DocumentSchema>;
