# Oracle track

An oracle plays a critical role in extending the capabilities of LEZ (Logos Execution Zone) by enabling access to external data.

Within this track, we focus on building a native oracle system for LEZ using Rust across both off-chain nodes and the on-chain program.
The work includes (i) a pre-study to define stablecoin requirements and evaluate efficient signature schemes,
(ii) an RFC specifying the architecture, including off-chain consensus, node responsibilities, data sourcing, and on-chain interfaces, and
(iii) a PoC implementing a minimal system with simple price feeds, a small validator set, and on-chain price update/read functionality.

## Roadmap

**FURPS**: [Oracle FURPS](/anoncomms/furps/oracle.md)

**Scheduled milestones**:
- [Testnet v0.2](/anoncomms/roadmap/testnet_v0.2/oracle_v0.2.md)

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Dependency on the LEZ for possible bugs | Collaboration with the LEZ and smart contract team through codebase and document reviews |