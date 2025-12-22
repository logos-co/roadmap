# Blockchain Blend Message Compression

**Estimated Delivery Date** March 2026

## Resources Required

- 1 Researcher

## Risks

- Low risk, high reward optimization
- Compression effectiveness depends on message patterns

## Deliverables

### Message Compression

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Further compression of blocks in Blend network through use of partial transaction hashes. For example, instead of providing full transaction hashes, we can give a prefix of the hash together with the block root hash. Prefix collisions can be disambiguated using the block root.

**FURPS**:

- P4. Blend network manageable on low bandwidth network links

**Checklist**:
- [ ] Compression algorithm designed
- [ ] Partial transaction hash mechanism implemented
- [ ] Bandwidth reduction measured
