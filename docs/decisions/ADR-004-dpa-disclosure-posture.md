# ADR-004: DPA disclosure posture

**Status:** Accepted
**Date:** 2026-07-20

## Context

DPA-1 (`REMAINING_DECISIONS.md`) adds per-subprocessor DPA status to the
public register; [ADR-003](./ADR-003-row-level-draft-lifecycle.md)
supplies the draft lifecycle for accreting it. No law or framework
requires publishing DPA status at all; the market norm is a single
blanket flow-down sentence ("we execute DPAs with our subprocessors").
Because the disclosure is voluntary, every constraint on it is
self-imposed — and self-imposed constraints erode unless recorded. The
failure modes are specific: an ambiguous claim is a misrepresentation
risk, an undated claim decays silently as vendors revise terms, and an
empty cell reads as an omission rather than a position.

## Decision

Seven principles govern what and how we disclose about DPAs:

1. **Voluntary, accuracy-bound.** No law requires publishing DPA
   status; the only compliance constraint is that any claim be true and
   provable. State "in place" only when backed by an executed agreement
   or a dated terms-acceptance we retain as evidence.
2. **Whose standard.** Always "vendor's standard DPA" or "our DPA" —
   never bare "standard terms". That ambiguity is the main
   misrepresentation risk.
3. **Dated claims.** Vendors revise standard DPAs unilaterally, so
   every row carries a `verified` date; undated claims decay silently.
4. **Existence, never terms.** For negotiated DPAs we disclose the
   fact, not the content; NDA-sensitive detail never enters the repo at
   all (the ADR-003 "read aloud" rule, applied at the claim level).
5. **"Not required" is a stated position, not a blank.** For internal
   tools processing no Company Personal Data, say so explicitly; empty
   cells read as omissions.
6. **Beyond convention, deliberately.** Market norm is the blanket
   flow-down sentence; per-row status extends the same posture as the
   model-level AI disclosure — disclose ahead of requirement and set a
   convention where none exists. The blanket statement should still
   exist and can precede per-row data.
7. **Both directions.** The same openness applies upstream: state that
   our own standard DPA is incorporated into the ToS for all accounts
   (with negotiated DPAs for enterprise, where applicable) — reviewers
   ask both ways. Publishes only once counsel confirms the ToS
   incorporation as fact.

## Consequences

- Every published `dpa` row must clear the principle-1 evidence bar;
  the per-row publication calls remain tracked in DPA-1 until the last
  row ships.
- The upstream claim (principle 7) is gated on counsel confirmation,
  also tracked in DPA-1.
- These principles are the template for future voluntary disclosure
  areas: accuracy-bound, dated, attributed, position-over-blank, ahead
  of requirement, in both directions.
