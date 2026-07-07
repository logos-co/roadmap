---
title: Logos Core Integration — Phase 3
tags:
  - messaging-milestone
date: 2026-07-07
---

**Resources Required**:
- 1 Delivery engineer
- Logos Core team support

The v0.3 stage of Logos Core integration. Building on [Phase 2](2026-logos-core-integration-phase-2) (Chat module using the Delivery module through Logos Core), this phase proves the first cross-module integrations as proofs of concept and rolls out QUIC on the fleets. The POCs de-risk [Phase 4](2026-logos-core-integration-phase-4.md), where embedded components are fully replaced by shared Logos Core modules.

## Deliverables

### Pluggable RLN membership

**Owner**: Delivery Team

The pluggable RLN membership interface itself is designed in [RLN on Logos Blockchain](2026-add-support-for-rln-on-lee) ([#416](https://github.com/logos-messaging/pm/issues/416)), with in-process backends (EVM, Logos Blockchain, centralized server). This deliverable makes the rest of `logos-delivery` consume RLN membership strictly through that interface — no direct blockchain or group-manager access from the kernel — so that a backend can also be provided across the Logos Core module boundary.

**Done when**: An RLN membership backend can be swapped — including one provided by a Logos Core module — without changes to `logos-delivery` internals. Exercised by the POC below.

### POC: Integrate RLN module

**Owner**: Delivery Team

Proof of concept: the Delivery module obtains RLN credentials and validates proofs through the RLN membership Logos Core module (from AnonComms), instead of interacting with the blockchain directly. Validates the module interface ahead of the full integration in [Phase 4](2026-logos-core-integration-phase-4.md).

### Make discovery pluggable in Logos Delivery

**Owner**: Delivery Team

Peer discovery is extracted behind a kernel discovery interface, with the embedded discv5 as the default implementation. Additional discovery sources can be plugged in and their results merged.

**Done when**: The Discovery Logos Core module can be added as a peer source (see the POC below) without kernel changes, enabling the full replacement of discv5 in [Phase 4](2026-logos-core-integration-phase-4.md).

### POC: Delivery module uses Discovery module for peer discovery

**Owner**: Delivery Team

Proof of concept: the Delivery module uses the Discovery Logos Core module (from AnonComms) as an additional source of peer discovery. In this stage, Discovery module is used alongside existing discovery (discv5) — the Delivery module queries the Discovery module for peers and merges them with peers from its own discovery. discv5 can be disabled once this integration is validated.

This is a POC — the full replacement of embedded discv5 happens in [Phase 4](2026-logos-core-integration-phase-4.md).

### Enable QUIC in `logos.dev` and `logos.test`

**Owner**: Delivery Team

QUIC transport support landed in `logos-delivery` in v0.2. This deliverable enables QUIC on the fleet nodes.

**Done when**: The `logos.dev` and `logos.test` fleet deployments are updated and nodes communicate over QUIC.
