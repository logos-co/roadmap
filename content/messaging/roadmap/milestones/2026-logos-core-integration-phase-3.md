---
title: Logos Core Integration — Phase 3
tags:
  - messaging-milestone
date: 2026-03-01
---

# Logos Core Integration — Phase 3

**Estimated date of completion**: Required for Mainnet

**Resources Required**:
- 1 Delivery engineer
- 1 Chat engineer
- Logos Core team support

The final integration phase for mainnet. Logos Delivery module stops embedding functionality and instead integrates with other Logos Core modules:

- **RLN membership module**: Delivery module uses the RLN membership Logos Core module to manage rate-limiting credentials, rather than interacting with the blockchain directly.
- **Discovery module**: Delivery module uses the Discovery Logos Core module (AnonComms capability discovery) for peer discovery, rather than running its own discovery.
- **P2P module**: Delivery module uses a shared p2p/networking module from Logos Core for connection management and protocol negotiation.

This enables a fully modular Logos Core deployment where all modules share infrastructure and can be independently updated.

## FURPS

- [Messaging API](/messaging/furps/core/messaging_sdk.md): S2 (C-bindings via Logos Core)

## Risks

| Risk                            | (Accept, Own, Mitigation)                                                                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logos Core module API stability | Module APIs must be stable for mainnet. Breaking changes at this stage are costly.                                                                          |
| Discovery module readiness      | AnonComms Discovery module may not be ready or may not meet Delivery requirements. Evaluate early.                                                          |
| P2P module dependency           | A shared p2p module may not exist or may not meet Delivery requirements. Evaluate early whether this is achievable or if Delivery keeps its own networking. |
| Multi-module coordination       | Running RLN, discovery, p2p, Delivery, and Chat modules together introduces coordination complexity. Integration testing is critical.                       |

## Deliverables

### Delivery module uses RLN membership module

**Owner**: Delivery Team

Logos Delivery module obtains RLN credentials and validates proofs through the RLN membership Logos Core module rather than direct blockchain interaction.

### Delivery module uses Discovery module

**Owner**: Delivery Team

Logos Delivery module uses the Discovery Logos Core module (capability discovery, developed by AnonComms) for peer discovery instead of running its own embedded discovery.

### Delivery module uses shared p2p module

**Owner**: Delivery Team

Logos Delivery module uses a shared p2p/networking module for connection management, enabling other modules to share the peer infrastructure.

### Full integration testing

**Owner**: Messaging Team (definition) + IFT-TS (implementation)

End-to-end testing of all Messaging-related Logos Core modules running together:
- Chat module → Delivery module (via Logos Core)
- Delivery module → RLN membership module (via Logos Core)
- Delivery module → Discovery module (via Logos Core)
- Delivery module → P2P module (via Logos Core)
- Full message lifecycle: send, deliver, acknowledge, with RLN rate limiting
