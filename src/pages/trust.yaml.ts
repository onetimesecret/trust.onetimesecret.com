import type { APIRoute } from 'astro';
import { rawTrustYaml } from '../lib/trust';

// Publishes the validated source of truth at a stable URL so procurement
// tooling and agents can diff a file instead of scraping HTML.
export const GET: APIRoute = () =>
  new Response(rawTrustYaml, {
    headers: { 'Content-Type': 'text/yaml; charset=utf-8' },
  });
