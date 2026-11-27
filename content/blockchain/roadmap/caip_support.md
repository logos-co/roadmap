# Blockchain and LEZ CAIP Support

Make the Logos Blockchain and LEZ addressable through the [Chain Agnostic Improvement Proposals (CAIP)](https://github.com/ChainAgnostic/CAIPs) standards, so multi-chain wallets, explorers and dApp tooling can identify Logos chains, accounts and assets without Logos-specific integrations.

## Resources Required

- TBD

## Risks

- TBD

## Deliverables

### Logos CAIP Namespace

**Owner**: TBD

**Feature**: [FURPS](/blockchain/furps/index.md)

Define and register a Logos namespace in the [ChainAgnostic namespaces](https://github.com/ChainAgnostic/namespaces) registry, covering both the blockchain and LEZ.

**Checklist**:
- [ ] Chain IDs (CAIP-2) specified for the blockchain and LEZ
- [ ] Account IDs (CAIP-10) specified for blockchain and LEZ accounts
- [ ] Asset IDs (CAIP-19) specified for native and LEZ tokens
- [ ] Namespace submitted to the ChainAgnostic namespaces registry

### Blockchain CAIP Support

**Owner**: TBD

**Feature**: [FURPS](/blockchain/furps/index.md)

Expose CAIP identifiers from the blockchain node, wallet and explorer.

**Checklist**:
- [ ] Node and wallet APIs accept and return CAIP identifiers
- [ ] Blockchain Explorer resolves CAIP identifiers

### LEZ CAIP Support

**Owner**: TBD

**Feature**: [FURPS](/blockchain/furps/index.md)

Expose CAIP identifiers from the LEZ sequencer, wallet and explorer.

**Checklist**:
- [ ] LEZ sequencer and wallet APIs accept and return CAIP identifiers
- [ ] LEZ Explorer resolves CAIP identifiers
