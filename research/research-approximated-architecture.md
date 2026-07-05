---
title: Approximated.app Architecture Research
date: 2026-06-01
purpose: Inform TODO-2 (multi-tenant domain architecture) in privacy statement review
---

# Approximated.app Architecture Research

## What Approximated Does

Approximated automates custom domain management and TLS/SSL certificates for SaaS platforms. It allows end-users of a SaaS product to connect their own domains, with Approximated handling certificate issuance, renewal, and traffic proxying.

## Architecture

### Proxy Clusters

Each customer (the SaaS platform, not the end-user) gets a **dedicated proxy cluster** — a group of globally distributed machines that handle traffic for that customer's custom domains.

- Built on **customized Caddy server builds** (Caddy is an open-source Go-based web server with automatic HTTPS)
- Hosted on **Fly.io**, which provides global distribution and low-latency routing
- Each cluster gets a **dedicated IPv4 address**
- Clusters are self-healing with intelligent routing and frequent health checks per region

Source: Elixir Forum post by founder; Approximated docs.

### DNS Configuration

End-users point their custom domain at the cluster via one of:

1. **A record** → cluster's dedicated IPv4 address (simplest)
2. **CNAME** → an intermediary domain controlled by the SaaS customer, which itself has an A record to the cluster (allows batch IP changes)

If a DNS record is pointed at a cluster without a matching virtual host configuration, it is ignored — the SaaS customer controls which domains are routed.

### TLS Certificate Management

- Certificates are **automatically issued and renewed** by the Caddy proxy (ACME/Let's Encrypt)
- The system monitors `ssl_active_from` and `ssl_active_until` timestamps
- SSL status is exposed via API and webhooks

The founder mentioned plans to eventually build a custom ACME client and reverse proxy in Elixir, but currently relies on Caddy's mature built-in ACME support.

### Traffic Flow

1. Visitor's browser resolves custom domain → DNS A record → Approximated cluster IP on Fly.io
2. Fly.io routes to the nearest edge server in the cluster
3. **Caddy terminates TLS** — the HTTP request is decrypted at the edge node
4. Caddy proxies the request to the SaaS application's origin server (the "target" configured in the virtual host)
5. Response flows back through Caddy → re-encrypted → returned to visitor

### Geographic Distribution

- Clusters have **edge servers in regions all over the world** (Approximated's marketing language)
- Traffic routes through the **region nearest the visitor** for low latency
- Approximated's docs do not enumerate specific regions or jurisdictions
- Fly.io operates in 30+ regions globally (their public infrastructure)

### Virtual Hosts

Configuration objects that map incoming domains to targets:

- Incoming domain (the custom domain)
- Target address and port (the SaaS app's origin)
- Load-balancing policy: first, random, round_robin, least_conn
- Sticky session support via cookies
- Multiple upstream servers supported

## Privacy-Relevant Facts

1. **TLS termination occurs at Approximated's edge nodes**, meaning decrypted HTTP traffic is briefly visible to Approximated's infrastructure before being forwarded to the origin
2. **Edge nodes operate across jurisdictions** — the nearest edge may be in a different country than the origin server
3. **Data categories processed**: IP addresses, HTTP request/response content (briefly, during proxying), TLS certificate metadata, DNS resolution data
4. **Approximated is a US company** (Delaware incorporation per DPA entity table)
5. **No privacy policy or DPA found** on approximated.app (404 on /privacy)

## What We Could Not Verify

- Exact list of Fly.io regions used by Approximated clusters
- Whether Approximated logs or retains any request data
- Specific data processing agreements between Approximated and their customers
- Whether Fly.io's anycast is used (likely, given Fly.io's architecture, but not confirmed by Approximated's docs)

## Scale

- 200,000+ custom domains served (as of Elixir Forum post)
- Millions of daily requests
- 99.87%–99.993% average domain uptime (varies by source)

## How OTS Uses Approximated

Per the privacy statement and DPA:

- **Identity Plus and Team Plus** tiers use Approximated for custom domain TLS
- Custom domains are served via `onetime.co` subdomains, which do **not** use Cloudflare proxy
- **Global Elite** (single-tenant) does not use Approximated — TLS is managed on dedicated OTS infrastructure
- **Regional domains** (eu.onetimesecret.com etc.) use Cloudflare, not Approximated

## Sources

- approximated.app (homepage, docs)
- Elixir Forum: "Built with Elixir: Approximated.app" (founder post, technical details)
- ElixirMerge case study (summary of the above)
- OTS privacy statement and DPA (current drafts)
