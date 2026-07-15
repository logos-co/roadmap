# Blockchain Decentralized Sequencing

## Resources Required
- blockchain:research: 2 CC's
- blockchain:engineering: 2 CC's

## Risks

- Decentralized Sequencing may lead to an increase in invalid messages published to channels
- Decentralized Sequencing may increase latency and reduce throughput

## Deliverables

### Decentralized Sequencing

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Most L2's depend on centralized sequencers, this is antithetical to the idea of decentralized networks. If we are to provide a Blockchain where the dominant programming model is through app chains, then we must ensure that we do all we can to make decentralized sequencing easy.

The primary goal of this feature is to achieve decentralized sequencing without forcing Sovereign Zones to run consensus. They should be able to achieve decentralized sequencing without the complexities of P2P networking and consensus protocols.

Instead, Sovereign Zones offload the complexity of decentralized networks to Logos Blockchain and can focus on building compelling applications.

**FURPS**:

- F12. Decentralized sequencing for Sovereign Zones through blockchain enforced sequencer coordination

**Checklist**:
- [x] Blockchain Specification updated with support for decentralized sequencing
- [x] Blockchain implementation updated to match spec
- [x] Sequencers can join and leave from a Sovereign Zone
- [x] Blockchain enforces sequencer schedule
- [x] Decentralized Sequencing is tolerant to misbehaving sequencers
- [x] Decentralized Sequencing exposed through ZoneSDK
