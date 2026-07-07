# LEZ Bridging

## Resources Required

- 1 Researcher
- 1 Engineer

## Risks

- Security of bridge is critical - must handle malicious sequencer scenarios
- Handling finality of user deposits is complex; if not handled correctly, unfinalized deposits could be reverted on the blockchain without the corresponding LEZ-side mint being reverted

## Deliverables

### LEZ Bridging

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Add bridging support to LEZ utilizing the ZoneSDK, enabling deposit and withdrawal of tokens between the blockchain and LEZ.

**FURPS**:

- F33. Channel Balance management
- F34. Sequencer signing on withdrawal
- F35. User deposits from Blockchain to LEZ

**Checklist**:
- [x] Deposit functionality (Blockchain to LEZ)
- [x] Withdrawal functionality (LEZ to Blockchain)
- [x] Sequencer withdrawal signing
