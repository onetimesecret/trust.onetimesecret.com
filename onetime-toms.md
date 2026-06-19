# Technical and Organizational Measures (TOMs) — Onetime Secret

Last modified: June 18, 2026

This document describes the technical and organizational measures ("TOMs") implemented by Onetime Secret (the "Processor") pursuant to Article 32 of the GDPR to ensure a level of security appropriate to the risk. It supplements Section 4 (Security) and Schedule C of the Onetime Secret [Data Processing Agreement](./onetime-dpa-2026-05-31.md) ("DPA") and is the canonical description of those measures; capitalized terms used but not defined here have the meaning given in the DPA.

These measures are reviewed and improved on an ongoing basis, taking into account the state of the art, the cost of implementation, and the nature, scope, context, and purposes of processing. This document is published openly and may be shared freely with your compliance, legal, and audit teams; no confidentiality restriction applies to the document itself.

This document does not apply to self-hosted deployments of the Processor's open-source software, where no data processing relationship with the Processor arises.

## Data Protection at Onetime Secret

- Personnel with access to Company Personal Data are vetted for reliability and are bound by confidentiality undertakings or statutory obligations of confidentiality (DPA §3).
- External parties are engaged under confidentiality terms; Subprocessors are engaged only under agreements no less protective than the DPA (DPA §6).
- The core application is published as open-source software, allowing the Company and independent parties to inspect the Processor's data-handling and cryptographic implementations — a verifiable layer of transparency beyond the descriptions below.

---

## 1. Confidentiality

### 1.1 Physical Access Control

*Technical:* Production systems are hosted in certified third-party data centers (e.g., Hetzner, ISO 27001:2022; UpCloud, ISO 27001:2022 / SOC 2 Type II / CISPE). The Processor operates no physical data center of its own; physical access is controlled by the hosting Subprocessor under its certified regime.

*Organizational:* Subprocessor security practices, including physical controls, are assessed on a regular basis. Hosting is restricted to the approved Subprocessors listed in Schedule A of the DPA.

### 1.2 Logical Access and Authorization Control

*Technical:*
- Administrative access to production systems requires multi-factor authentication.
- Access to cryptographic key material is restricted to essential operational processes.
- User account credentials are protected with Argon2id adaptive one-way hashing (per-credential random salt, constant-time verification).

*Organizational:* Access is granted on a least-privilege, need-to-know basis, strictly limited to individuals who require it for the purposes of the Principal Agreement. Personnel with system access are bound by confidentiality obligations (DPA §3).

### 1.3 Separation Control

*Technical:*
- Production and test/diagnostic environments are separated.
- Multi-tenant infrastructure (Identity Plus tier) maintains secure compartmentalization between customers; Global Elite customers receive logically dedicated environments with isolated application stacks and database instances.
- Application and data tiers are architecturally separated: application servers hold the system-level secret required for key derivation; database servers store encrypted Secret Content but do not hold or have access to that secret.
- The object class and identifier are bound as Additional Authenticated Data (AAD), ensuring ciphertext cannot be transplanted between records.

*Organizational:* Regional data isolation policy (DPA §12): Company Personal Data collected within a regional environment is not transferred to infrastructure outside that region, with the sole exception of Stripe billing data (covered by the EU-US Data Privacy Framework and successor mechanisms).

### 1.4 Pseudonymization and Encryption (Art. 32(1)(a))

*Technical:*
- **Secret Content at rest:** XChaCha20-Poly1305 authenticated encryption (AES-256-GCM available as an alternative); keys derived with BLAKE2b from a system-level secret not stored alongside the data plus a context string; per-operation random nonce. The encryption key is not stored and must be reconstructed at decryption time; the database server does not hold the key material necessary to decrypt Secret Content.
- **Passphrase-protected Secrets:** Where supplied, a user passphrase acts as an access-control gate verified before decryption; the passphrase hash is stored separately using Argon2id.
- **Full-disk encryption:** Production storage volumes are encrypted at the block level using LUKS.
- **Backups:** Encrypted with GPG using 4096-bit keys; decryption keys are stored offsite and are not present in the production environment.

*Organizational:* Secret Content is automatically Purged on first access or expiration; the Processor does not access, categorize, or analyze Secret Content. Operational logs apply client- and server-side data scrubbing to minimize incidental personal data.

---

## 2. Integrity (Art. 32(1)(b))

*Technical:*
- Authenticated encryption (XChaCha20-Poly1305 / AES-256-GCM) provides tamper detection for Secret Content at rest; AAD binding prevents ciphertext being moved between records.
- All data in transit is protected with TLS 1.3 and strong cipher suites, providing integrity and confidentiality of transmissions between clients and the Processor's infrastructure.

*Organizational:* The Processor does not engage in automated individual decision-making or profiling (DPA §12.3). Processing is limited to the documented instructions in DPA §2.

---

## 3. Availability, Resilience and Recoverability (Art. 32(1)(c))

*Technical:*
- Local encrypted backups retained for seven (7) days.
- Geo-located encrypted backups (Global Elite) stored in AWS S3 (Frankfurt, EU) with automatic expiration after thirty (30) days.
- Backup encryption uses an asymmetric scheme so that compromise of production systems does not expose backup contents.

*Organizational:* Backup storage locations align with the regional data isolation policy (DPA §12). Encrypted backup copies of Purged Secrets are retained only for the Backup Retention Period (30 days), after which they are automatically deleted.

---

## 4. Procedures for Review, Assessment and Evaluation (Art. 32(1)(d), 25(1))

*Technical:* A self-hosted error-monitoring stack (Sentry, hosted within the EU) supports security monitoring and technical diagnostics, with data scrubbing applied to minimize incidental personal data. Server request logs are retained for the Operational Retention Period only.

*Organizational:*
- Annual review of cryptographic implementations against current security guidance.
- Incident response procedures: in the event of a Personal Data Breach affecting Company Personal Data, the Processor notifies the Company within 72 hours (DPA §8).
- Records of processing activities maintained under Art. 30(2) and made available on request (DPA §3.3).
- Reasonable assistance with data protection impact assessments and prior consultations (DPA §9).
- Procedures to assist with Data Subject rights requests, taking into account the ephemeral nature of Secret Content (DPA §7).
- Annual review of the Data Protection Officer and UK representative assessments (DPA §3.2; UK Addendum §3.4).

---

## 5. Sub-processor Compliance (Art. 28)

*Technical:* Subprocessor remote access to relevant systems is controlled and limited to the services each Subprocessor provides.

*Organizational:*
- Subprocessors are engaged only under data processing agreements no less restrictive or protective than the DPA (DPA §6).
- The Company receives at least thirty (30) days' advance notice before a new Subprocessor is engaged, with the opportunity to object (DPA §6).
- The current list of approved Subprocessors, with data location, purpose, and categories of data, is maintained in Schedule A of the DPA.
- Subprocessor security practices are assessed on a regular basis.

---

*This document is maintained in sync with Schedule C of the DPA. Where this TOMs document and Schedule C describe the same control, this document governs the description; the DPA governs the binding obligations.*
