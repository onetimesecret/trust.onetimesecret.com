import * as yaml from "js-yaml";
import { z } from "zod";
import rawYaml from "../content/document-manifest.yaml?raw";

// Signoff manifest for the generated policy documents (see the YAML for
// the process). Displayed by PolicyLayout; hand-maintained.

export const ManifestEntrySchema = z
  .object({
    slug: z.string(),
    title: z.string(),
    source: z.string(),
    effectiveDate: z.string(),
    signoff: z
      .object({
        status: z.enum(["pending-counsel", "counsel-approved", "signed-off"]),
        commit: z.string().nullable(),
        date: z.string().nullable(),
      })
      .strict(),
  })
  .strict();

export const ManifestSchema = z
  .object({ documents: z.array(ManifestEntrySchema).nonempty() })
  .strict();

export type ManifestEntry = z.infer<typeof ManifestEntrySchema>;

const manifest = ManifestSchema.parse(
  yaml.load(rawYaml, { schema: yaml.CORE_SCHEMA }),
);

export function manifestFor(slug: string): ManifestEntry {
  const entry = manifest.documents.find((d) => d.slug === slug);
  if (!entry) throw new Error(`document-manifest.yaml has no entry for "${slug}"`);
  return entry;
}
