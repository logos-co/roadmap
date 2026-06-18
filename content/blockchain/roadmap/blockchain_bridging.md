# Blockchain Bridging Support

## Resources Required

- 1 Researcher
- 2 Engineer

## Risks

- Security of bridge is critical - must handle malicious sequencer scenarios
- Handling finality of user deposits is complex; if not handled correctly, unfinalized deposits could be reverted on the blockchain without the corresponding zone-side mint being reverted

## Deliverables

### Bridging Protocol

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Implement bridging support in the blockchain and expose it through the Zone SDK, enabling Sovereign Zones to bridge tokens between the blockchain and their zone.

**FURPS**:

- F33. Channel Balance management
- F34. Sequencer signing on withdrawal
- F35. User deposits from Blockchain to LEZ

**Checklist**:
- [x] Channel account protocol: permissionless deposits, threshold-signed sequencer withdrawals
- [x] Atomic bridging: user deposit is atomically included on chain with the zone's inscription tx
- [x] Async bridging: user deposit waits for finality before inclusion on chain
- [x] Deposit events exposed through the Zone SDK
- [ ] Blockchain Dashboard Includes Deposit Button
