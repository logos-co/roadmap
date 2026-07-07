---
title: Modularize Delivery Kernel
tags:
  - messaging-milestone
date: 2026-07-07
---

**Resources Required**:
- 2 Delivery engineers

Restructure the internals of `logos-delivery` (the "kernel") so that major components sit behind pluggable interfaces instead of being hardwired into the node. This is preparation work for [Logos Core Integration — Phase 3](2026-logos-core-integration-phase-3) and [Phase 4](2026-logos-core-integration-phase-4.md), where embedded components are gradually replaced by shared Logos Core modules — the swap should be an implementation change behind an interface, not an invasive rewrite.

## Risks

| Risk                      | (Accept, Own, Mitigation)                                                                                                              |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------|
| Interface churn           | Interfaces designed before the Logos Core modules stabilize may need rework. Coordinate with Logos Core and AnonComms teams early.      |
| Refactoring regressions   | Kernel restructuring touches core paths. Rely on the Messaging API test suite and fleet canaries to catch regressions.                  |

## Deliverables

### Pluggable discovery

**Owner**: Delivery Team

Peer discovery is extracted behind a discovery interface, with the embedded discv5 as the default implementation. This enables the [Discovery module POC](2026-logos-core-integration-phase-3) in v0.3 and the full replacement of discv5 by the Discovery Logos Core module in Phase 4.

### RLN everywhere

**Owner**: Delivery Team

RLN proof generation and validation becomes a kernel-level concern applied uniformly across protocols (Relay, LightPush), instead of per-protocol implementations. Builds on [RLN for Edge Nodes](2026-rln-for-edge-nodes.md) and enables enforcing RLN on all traffic in fleets (see [RLN on Logos Blockchain](2026-add-support-for-rln-on-lee)).

### Rate Limit Manager

**Owner**: Delivery Team

The Rate Limit Manager (created in [Reliable Channel API — Beta](2026-reliable-channel-api-beta.md)) becomes a kernel-level component, available to every API exposed by the node — Messaging API, Reliable Channel API — rather than a Reliable-Channel-only feature.
