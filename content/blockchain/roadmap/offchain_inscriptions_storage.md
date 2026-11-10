# Blockchain Off-chain Inscriptions on Logos Storage

Inscription bodies move off-chain into Logos Storage, with Logos Storage acting as a pseudo Data Availability network. Blocks carry only a commitment to each body, so zones such as LEZ can publish larger payloads without growing the chain.

## Resources Required

- TBD

## Risks

- Depends on the Storage team: first measurements found three storage-side issues that need fixing
- Logos Storage is not a Data Availability network, so the availability guarantees zones can rely on must be spelled out

## Deliverables

### Off-chain Inscription Bodies

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Specify and implement off-chain inscription bodies on Logos Storage ([logos-lips#454](https://github.com/logos-co/logos-lips/pull/454)).

**Checklist**:
- [x] Measured on the live storage network: fast enough for LEZ-sized payloads; one Raspberry Pi 5 seeder served 128 concurrent readers with no failures
- [ ] Storage-side issues found in the measurements resolved
- [ ] Off-chain inscription bodies RFC
- [ ] Implementation in the node and Zone SDK
