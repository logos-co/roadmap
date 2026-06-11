# Service Discovery Track

A major cornerstone of the Logos Launch Strategy
is the efficient discovery of core services in a fully decentralised manner.
The current approach to decentralised discovery, random walks over libp2p's Kad-DHT
is not scalable and efficient enough for a diverse ecosystem consisting of multiple services,
facing the [needle-in-a-haystack problem](https://vac.dev/rlog/wakuv2-apd#random-walk-performance-estimation).

In this track, we're building a fully functional, efficient service discovery module available in Logos Core,
usable by all Logos modules as primary ambient discovery method.
The new service discovery protocol will be published as a specification adapting [DISC-NG](https://ieeexplore.ieee.org/document/10629017) for libp2p Kad-DHT.

## Roadmap

**FURPS**: [Service Discovery FURPS](/anoncomms/furps/discovery.md)

**Scheduled milestones**:
- [Testnet v0.1](/anoncomms/roadmap/testnet_v0.1/discovery_v0.1.md)
- [Testnet v0.2](/anoncomms/roadmap/testnet_v0.2/discovery_v0.2.md)
- [Testnet v0.3](/anoncomms/roadmap/testnet_v0.3/discovery_v0.3.md)

Future work in this track, include:
1. Anonymising the discovery protocol, including privacy-preserving discovery requests, anonymous DHT participation, etc.
2. Assisting other Logos teams in integrating the protocol in their own core modules (outside of Logos Delivery integration, which will be the reference integration)
3. Longer term benchmarking and testing to improve the efficiency and scalability of the protocol

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Dependency on nim-libp2p for Kad-DHT implementation | Close collaboration with p2p team; specify API before implementation ready to harden interfaces quickly |
| Dependency on DST team for benchmarking and iterative improvements | Develop test strategy/simulations from the outset in collaboration with DST team |
