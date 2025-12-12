# Logos Blockchain Decentralized Sequencing

**Estimated Delivery Date** May 29 2026

## Resources Required
- bedrock:research: 2 CC's
- bedrock:engineering: 2 CC's
- zones: 2 CC's

## Risks

- Decentralized Sequencing is an open research topic

## Deliverables

### Bedrock

**Owner**: David Rusu

**Feature**: [Bedrock](/blockchain/furps/bedrock.md)

Most L2's depend on centralized sequencers, this is antithetical to the idea of decentralized networks. If we are to provide an L1 where the dominant programming model is through app chains, then we must ensure that we do all we can to make decentralized sequencing easy.

The primary goal of this feature is to achieve decentralized sequencing without forcing Sovereign Rollups to run consensus. They should be able to achieve decentralized sequencing without the complexities of P2P networking and consensus protocols.

Instead, Sovereign Rollops offload the complexity of decentralized networks to Logos Blockchain and can focus on building compelling applications.

**FURPS**:

- F7. Decentralized sequencing for Sovereign Rollups through blockchain enforced sequencer coordination

**Checklist**:
- [ ] Sequencers can join and leave from a Sovereign Rollup
- [ ] Bedrock enforces sequencer schedule
- [ ] Decentralized Sequencing is tolerant to misbehaving sequencers

### LSSA

LSSA will be the first user of decentralized sequencing, it will need to understand the decentralized sequencing model and ensure that the sequencer proposes blocks only when it is its turn, and downloads and processes the published blocks of fellow sequencers.

**Owner**: David Rusu

**Feature**: [LSSA](/blockchain/furps/lssa.md)

**FURPS**:

- R1. LSSA Sequencer supports decentralized sequencing through Blockchain enforced sequencer coordination, ensuring crash tolerance.
- U4. Ability to run a sequencer throgh Logos Core.


**Checklist**:
- [ ] Integration with Bedrock Decentralized Sequencing model
- [ ] Downloads blocks from bedrock that were produced by fellow sequencers.
- [ ] Reject invalid blocks from fellow sequencers
- [ ] Apply valid blocks from fellow sequencers
