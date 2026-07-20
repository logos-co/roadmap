---
title: Logos Core Integration — Phase 3
tags:
  - messaging-milestone
date: 2026-07-07
github: https://github.com/logos-messaging/pm/issues/421
---

**Resources Required**:
- 1 Delivery engineer
- Logos Core team support

The v0.3 stage of Logos Core integration. Building on [Phase 2](2026-logos-core-integration-phase-2) (Chat module using the Delivery module through Logos Core), this phase proves the first cross-module integrations as proofs of concept and rolls out QUIC on the fleets. The POCs de-risk [Phase 4](2026-logos-core-integration-phase-4.md), where embedded components are fully replaced by shared Logos Core modules.

## Deliverables

### [Pluggable RLN membership](https://github.com/logos-messaging/pm/issues/446)

**Owner**: Delivery Team

[RLN for Edge Nodes](2026-rln-for-edge-nodes.md) extracted a generic RLN module in `logos-delivery`, and [RLN on Logos Blockchain](2026-add-support-for-rln-on-lee) has a requirement to build a membership management API ([#416](https://github.com/logos-messaging/pm/issues/416)).

But also, AnonComms specified an RLN membership allocation service ([anoncomms-pm#17](https://github.com/logos-co/anoncomms-pm/issues/17)) that can run as a standalone Logos Core module. Logos Delivery should be able to use it when running in Logos Core. The module itself is not on the AnonComms roadmap yet — ownership to be aligned with AnonComms.

Note that "making RLN pluggable" has different parts:
- enable `logos-delivery`'s RLN module to use different backends — Logos Blockchain / Ethereum L2 / centralized server
- extract part of `logos-delivery`'s RLN module into a Logos Core module
  - Main part (current scope): RLN membership library
  - Extra part (next, to be aligned with AnonComms): generate/validate proofs using external RLN module too.

**Done when**: An RLN membership backend can be swapped — including one provided by a Logos Core module — without changes to `logos-delivery` internals. Exercised by the [Delivery module uses RLN membership module](https://github.com/logos-messaging/pm/issues/448) deliverable below.

### [Delivery module uses RLN membership module](https://github.com/logos-messaging/pm/issues/448)

**Owner**: Delivery Team

Logos Delivery module obtains RLN credentials and validates proofs through the RLN membership Logos Core module rather than direct blockchain interaction, validating the module interface developed with AnonComms.

### [Make discovery pluggable in Logos Delivery](https://github.com/logos-messaging/pm/issues/449)

**Owner**: Delivery Team

Peer discovery is extracted behind a kernel discovery interface, with the embedded discv5 as the default implementation. Additional discovery sources can be plugged in and their results merged.

**Done when**: The Discovery Logos Core module can be added as a peer source (see the POC below) without kernel changes, enabling the full replacement of discv5 in [Phase 4](2026-logos-core-integration-phase-4.md).

### [POC: Delivery module uses Discovery module for peer discovery](https://github.com/logos-messaging/pm/issues/389)

**Owner**: Delivery Team

Proof of concept: the Delivery module uses the Discovery Logos Core module (from AnonComms) as an additional source of peer discovery. In this stage, Discovery module is used alongside existing discovery (discv5) — the Delivery module queries the Discovery module for peers and merges them with peers from its own discovery. discv5 can be disabled once this integration is validated.

This is a POC — the full replacement of embedded discv5 happens in [Phase 4](2026-logos-core-integration-phase-4.md).

### [Enable QUIC in `logos.dev` and `logos.test`](https://github.com/logos-messaging/pm/issues/450)

**Owner**: Delivery Team

QUIC transport support landed in `logos-delivery` in v0.2. This deliverable enables QUIC on the fleet nodes.

**Done when**: The `logos.dev` and `logos.test` fleet deployments are updated and nodes communicate over QUIC.
