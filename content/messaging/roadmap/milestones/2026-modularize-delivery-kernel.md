---
title: Modularize Delivery Kernel
tags:
  - messaging-milestone
date: 2026-07-07
---

**Resources Required**:
- 2 Delivery engineers

`logos-delivery` is being restructured into explicit layers:

```
Kernel/core   — node, transports, gossip, store client, discovery,
                RLN, subscription management, health monitoring
  ↑
Messaging     — MessagingClient (Send / Receive services), optionally mounted
  ↑
Channels      — ReliableChannelManager, optionally mounted
```

The groundwork landed in v0.2: MessagingClient became an optionally-mounted layer, subscription management and health monitoring moved into the kernel, and the messaging layer now depends on the kernel handle instead of reaching into node internals ([#3918](https://github.com/logos-messaging/logos-delivery/pull/3918), [#3927](https://github.com/logos-messaging/logos-delivery/pull/3927), [#4000](https://github.com/logos-messaging/logos-delivery/pull/4000)).

This milestone completes the modularization: the kernel exposes a well-defined API surface, major components sit behind pluggable interfaces instead of being hardwired into the node, and cross-cutting concerns (RLN, rate limiting) are solved once at the kernel level. This is preparation work for [Logos Core Integration — Phase 3](2026-logos-core-integration-phase-3) and [Phase 4](2026-logos-core-integration-phase-4.md), where embedded components are gradually replaced by shared Logos Core modules — the swap should be an implementation change behind an interface, not an invasive rewrite.

## FURPS

- [Rate Limit Manager](/messaging/furps/application/rate_limit_manager.md)
- [RLN Relay](/messaging/furps/core/rln_relay.md)
- [LightPush](/messaging/furps/core/light_push.md)

## Risks

| Risk                      | (Accept, Own, Mitigation)                                                                                                              |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------|
| Interface churn           | Interfaces designed before the Logos Core modules stabilize may need rework. Coordinate with Logos Core and AnonComms teams early.      |
| Refactoring regressions   | Kernel restructuring touches core paths. Rely on the Messaging API test suite and fleet canaries to catch regressions.                  |
| Scope creep               | "God object" decomposition can expand indefinitely. Scope is limited to what Phase 3/4 integrations and the deliverables below require. |

## Deliverables

### Define the kernel API surface

**Owner**: Delivery Team

The kernel exposes a complete, explicit API, and the messaging and channels layers consume only that API — the remaining reach-arounds into node internals (subscription manager, store client, RNG, broker context) are removed. This enables a dedicated `logosdelivery_kernel.h` C-binding surface for node-running use cases (fleet tools), putting the deprecated `libwaku` on a retirement path.

**Done when**: Messaging and channels layers depend only on the kernel API; a kernel-level FFI surface exists for running a node without the messaging layer.

### Pluggable discovery

**Owner**: Delivery Team

Peer discovery is extracted behind a kernel discovery interface, with the embedded discv5 as the default implementation. Additional discovery sources can be plugged in and their results merged.

**Done when**: The Discovery Logos Core module can be added as a peer source (the [Phase 3 POC](2026-logos-core-integration-phase-3)) without kernel changes, enabling the full replacement of discv5 in [Phase 4](2026-logos-core-integration-phase-4.md).

### RLN everywhere

**Owner**: Delivery Team

RLN proof generation and validation becomes a kernel-level concern applied uniformly across protocols (Relay, LightPush), instead of per-protocol implementations. Builds on [RLN for Edge Nodes](2026-rln-for-edge-nodes.md) and enables fleets to require RLN proofs on all traffic (see [RLN on Logos Blockchain](2026-add-support-for-rln-on-lee)).

**Done when**: Every publish path — Relay and LightPush, core and edge mode — generates and validates RLN proofs through the shared kernel component.

### Rate Limit Manager

**Owner**: Delivery Team

The [Rate Limit Manager](/messaging/furps/application/rate_limit_manager.md) (created in [Reliable Channel API — Beta](2026-reliable-channel-api-beta.md)) becomes a kernel-level component, available to every API exposed by the node rather than a Reliable-Channel-only feature.

**Done when**: Messaging API and Reliable Channel API consume the same rate limit manager, sharing a single quota and message queue per node.
