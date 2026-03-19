# Blockchain Blend Edge Node Privacy

**Estimated Delivery Date** EoY 2026

## Resources Required

- 1 Researcher (MP)
- External dependency on AnonComms

## Risks

- Latency increase from additional mix network path
- External dependency on AnonComms team

## Deliverables

### Edge Node Privacy

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Edge nodes only connect to Blend network nodes when they have block proposals, this means that any network observer can link the final block proposal with the edge node connecting to Blend Network. This can be resolved using a mix network to protect edge nodes when interacting with Blend.

**FURPS**:

- F7. Blend edge node privacy

**Checklist**:
- [ ] Mix network integration designed
- [ ] Latency impact measured and acceptable
