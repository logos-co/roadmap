---
title: Initial Integration to Logos Core
tags:
  - messaging-milestone
date: 2026-01-19
github: https://github.com/logos-messaging/pm/issues/398
---

**Resources Required for 2026H1**:
- 2 devs for 1 month from Delivery Team
- 1 dev for 1 month from Chat Team
- Infra team to deploy fleet

Both Logos Chat and Logos Delivery are available as Logos Core modules, each exposing APIs to other modules and applications running in Logos Core. A demonstration chat application is built on top of the Chat module.

The Chat module embeds Logos Delivery directly (via Nimble) rather than using the Delivery Logos Core module — this architectural simplification is intentional for v0.1. Integration between the two modules through Logos Core is planned for [Phase 2](2026-logos-core-integration-phase-2).

nim-ffi is delivered as a reusable library for exposing C-bindings from any Nim library, enabling Logos Core integration on desktop platforms.

A `logos.dev` fleet is deployed for testnet operations.

## FURPS

- [Nim FFI](/messaging/furps/application/nim_ffi.md): F1, U1, U2, U3, R1, R2, S1, +1
- [Messaging API](/messaging/furps/core/messaging_sdk.md): S2
- [Logos Chat](/messaging/furps/application/chat_sdk.md): S3

## Risks

| Risk                         | (Accept, Own, Mitigation)                                                                                             |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Windows and build challenges | `nim-ffi` is not a straightforward functionality delivery. Do note that most of the C-bindings work is already done. |
| Nim macros                   | Delivery Team has limited experience with Nim macros, potentially impacting the speed of delivery.                   |
| Logos Core API instability   | Logos Core is still evolving. Module API surface may change, requiring rework of integration code.                    |

## Deliverables

### Implement a Chat module for Logos Core

**Owner**: Chat Team

**Feature**: [Logos Chat](/messaging/furps/application/chat_sdk.md)

- Logos Core module exposes 1:1 chats API for other Logos Core modules and applications.
- A simple chat application is implemented for demonstration purposes.
- Logos Delivery is embedded in the Chat module and *NOT* used as a Logos Core module.
- RLN is ignored/disabled.
- Developer-facing documentation: API reference, getting started guide, and example application walkthrough.

### Implement a Delivery module for Logos Core

https://github.com/logos-messaging/pm/issues/374

**Owner**: Delivery Team

**Feature**: [Messaging API](/messaging/furps/core/messaging_sdk.md)

- Logos Delivery module exposes Messaging API (send, health) for other Logos Core modules.
- Logos Delivery module exposes API for running a Delivery Node.
- Developer-facing documentation: API reference, getting started guide, and example application walkthrough.

### Deploy required fleets for Testnet

**Owner**: Delivery Team

- A `logos.dev` fleet is deployed with Logos Nodes running Delivery module.
- A configuration of Delivery module is provided for `logos.test` fleet.

### [Create nim-ffi, a library to easily expose C-bindings from Nim](https://github.com/logos-messaging/pm/issues/332)

Deliver nim-ffi, a library that facilitates delivering functional c-bindings for nim libraries.

**Owner**: Delivery Team

**Feature**: [Nim FFI](/messaging/furps/application/nim_ffi.md)

**FURPS**:
- F1. Provides the core logic needed to expose any synchronous or asynchronous Nim library to a C-FFI library.

- U1. Introduce new pragma definitions, such as `{.ffi.}`, to appropriately annotate types and procedures.
- U2. Any Nim project can use it and can be installed using Nimble, similarly to how nim-chronos is imported.
- U3. The interaction with the exposed C library can be done using JSON.

- R1. Nim-FFI does not leak memory.
- R2. The exposed C library never hangs when working asynchronously.

- S1. The exposed C library can be used in Logos Core; on Linux, Mac and Windows.

- +1. `logos-delivery` repository uses `nim-ffi`.
- +2. `logos-chat` repository uses `nim-ffi`.