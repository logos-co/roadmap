---
title: Logos Core Integration — Phase 4
tags:
  - messaging-milestone
date: 2026-03-01
---


**Resources Required**:
- 1 Delivery engineer
- 1 Chat engineer
- Logos Core team support

The final integration phase for mainnet. Logos Delivery module stops embedding functionality and instead integrates with other Logos Core modules.

The vision is a shared P2P module that all Logos modules (Delivery, Storage, Blockchain) use for common networking concerns — discovery, mix, gossip. Delivery is the first module to adopt this architecture.

The progression toward the shared P2P module:
1. **Discovery** (mainnet requirement) — Delivery module uses the Discovery Logos Core module for peer discovery instead of its own embedded discovery (discv5). The interface is straightforward: ask for peers, get peers. This builds on the [POC from v0.3](2026-logos-core-integration-phase-3).
2. **Mix** (mainnet goal) — Delivery module uses mix from the P2P module. Interface between module and mix needs design work (current callback-based mixification is not clean).
3. **GossipSub** (stretch goal, post-mainnet acceptable) — Delivery module uses a shared gossip layer from the P2P module. If achieved, it demonstrates the full P2P module vision.

Additionally:
- **RLN membership module**: Delivery module uses the RLN membership Logos Core module to manage rate-limiting credentials, rather than interacting with the blockchain directly.

This enables a fully modular Logos Core deployment where all modules share infrastructure and can be independently updated.

## FURPS

- [Messaging API](/messaging/furps/core/messaging_sdk.md): S2 (C-bindings via Logos Core)

## Risks

| Risk                            | (Accept, Own, Mitigation)                                                                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logos Core module API stability | Module APIs must be stable for mainnet. Breaking changes at this stage are costly.                                                                          |
| Discovery module readiness      | AnonComms Discovery module may not be ready or may not meet Delivery requirements. Evaluate early via v0.2 POC.                                             |
| Mix module interface design     | The interface between a module and mix is currently callback-based and complex. Needs redesign for clean integration.                                        |
| Multi-module coordination       | Running RLN, discovery, p2p, Delivery, and Chat modules together introduces coordination complexity. Integration testing is critical.                       |

## Deliverables

### Delivery module uses Discovery module

**Owner**: Delivery Team

Logos Delivery module uses the Discovery Logos Core module (capability discovery, developed by AnonComms) as its primary peer discovery mechanism. This replaces the embedded discv5 discovery. Builds on the [v0.3 POC](2026-logos-core-integration-phase-3).

**This is a mainnet requirement.**

### Delivery module uses Mix from P2P module

**Owner**: Delivery Team

Logos Delivery module uses mix capabilities from the shared P2P/networking module. Requires a clean interface design to replace the current callback-based mixification approach.

**Mainnet goal, but not blocking if interface design is not resolved.**

### Delivery module uses shared GossipSub (stretch)

**Owner**: Delivery Team

Logos Delivery module uses a shared gossip layer from the P2P module, completing the vision of a fully shared networking stack across all Logos modules.

**Stretch goal — post-mainnet acceptable.**

### Delivery module uses RLN membership module

**Owner**: Delivery Team

Logos Delivery module obtains RLN credentials and validates proofs through the RLN membership Logos Core module rather than direct blockchain interaction.

### Full integration testing

**Owner**: Messaging Team (definition) + IFT-TS (implementation)

End-to-end testing of all Messaging-related Logos Core modules running together:
- Chat module → Delivery module (via Logos Core)
- Delivery module → RLN membership module (via Logos Core)
- Delivery module → Discovery module (via Logos Core)
- Delivery module → P2P module (via Logos Core)
- Full message lifecycle: send, deliver, acknowledge, with RLN rate limiting
