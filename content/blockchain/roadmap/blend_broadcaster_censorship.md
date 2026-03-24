# Blockchain Blend Broadcaster Censorship Resistance

## Resources Required

- 3 Researchers

## Risks

- Latency increase from block reconstruction
- Potential increase in blend bandwidth

## Deliverables

### Message Sharding for Censorship Resistance

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Currently, the broadcaster node in Blend could decide to drop the block proposal if he disagrees with the contents. To remove this point of failure, we can increase message redundancy through sharding the block proposal with an N of M reconstruction scheme. Doing this means that any one broadcaster node would not be able to see the complete block before broadcasting.

This has the added benefit of increasing blend reliability through message redundancy through the M of N scheme.

**FURPS**:

- F5. Block proposal redundancy
- F6. Censorship resistance against malicious broadcasters

**Checklist**:
- [ ] Message sharding protocol designed
- [ ] Block reconstruction mechanism
- [ ] Latency impact measured and acceptable
- [ ] Bandwidth impact measured and acceptable
