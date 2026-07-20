---
title: Logos Core Integration — Phase 4
tags:
  - messaging-milestone
date: 2026-03-01
github: https://github.com/logos-messaging/pm/issues/427
---


**Resources Required**:
- 1 Delivery engineer
- 1 Chat engineer
- Logos Core team support

The final integration phase for mainnet. Logos Delivery module stops embedding functionality and instead integrates with other Logos Core modules.

The vision is a shared P2P module that all Logos modules (Delivery, Storage, Blockchain) use for common networking concerns — discovery, mix, gossip. Delivery is the first module to adopt this architecture.

This phase delivers the first step: **Discovery** (mainnet requirement) — the Delivery module uses the Discovery Logos Core module for peer discovery instead of its own embedded discovery (discv5). The interface is straightforward: ask for peers, get peers. This builds on the [POC from v0.3](2026-logos-core-integration-phase-3). Mix and GossipSub integration through the shared P2P module are post-mainnet goals.

This enables a fully modular Logos Core deployment where all modules share infrastructure and can be independently updated.

## FURPS

- [Messaging API](/messaging/furps/core/messaging_sdk.md): S2 (C-bindings via Logos Core)

## Risks

| Risk                            | (Accept, Own, Mitigation)                                                                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logos Core module API stability | Module APIs must be stable for mainnet. Breaking changes at this stage are costly.                                                                          |
| Discovery module readiness      | AnonComms Discovery module may not be ready or may not meet Delivery requirements. Evaluate early via v0.3 POC.                                             |
| Multi-module coordination       | Running RLN, discovery, Delivery, and Chat modules together introduces coordination complexity. Integration testing is critical.                       |

## Deliverables

### [Delivery module uses Discovery module](https://github.com/logos-messaging/pm/issues/452)

**Owner**: Delivery Team

Logos Delivery module uses the Discovery Logos Core module (capability discovery, developed by AnonComms) as its primary peer discovery mechanism. This replaces the embedded discv5 discovery. Builds on the [v0.3 POC](2026-logos-core-integration-phase-3).

**This is a mainnet requirement.**
