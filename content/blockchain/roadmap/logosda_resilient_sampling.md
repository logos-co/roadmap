# Blockchain LogosDA Resilient Sampling

## Resources Required

- 2 Researchers

## Risks

- Sampling resilience affects data availability guarantees
- Must handle transient failures gracefully

## Deliverables

### Resilient DA Sampling

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Sampling resilient to transient DA failures. Currently need 20 positive samples, may do more than 20 samples to get that. DA failures may lead to large blockchain reorgs, threatening finality.

**Checklist**:
- [x] Impact of DA Failure is analyzed
- [x] Adaptive sampling mechanism
