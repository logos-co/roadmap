---
title: "Testnet version 0.2: release notes"
tags: testnet
---


## Blockchain

### Logos Execution Zone

- LEZ module: other Logos modules can prove and sign arbitrary LEZ transactions.
- LEZ indexer module: any `logoscore` module can follow LEZ state without relying on centralized sequencers.
- LEZ Explorer Basecamp module: inspect LEZ blocks and account state in Basecamp.
- Bridging: move funds between the base layer and LEZ.
- Private transfers: privately receive funds to a well-known key.
- Generalized cross-program calls: invoke programs during execution, supporting flows such as DEX flash swaps.
- Multi-owner accounts: accounts can be controlled by a group.

### Blockchain

- Blend Network: network-level protection for block proposers, completing a major part of the PPoS implementation.
- Bridging: support for depositing to and withdrawing from channels, exposed through the Zone SDK.
- Decentralized sequencing: multi-writer channels with built-in conflict management, exposed through the Zone SDK.
- Logos Core migration: the blockchain node can now run through `logoscore` and Basecamp.

## Storage

- Anonymity-preserving DHT queries over mix.
- More efficient block protocol.
- Logos Storage module:
  - deployed to testnet
  - with OpenMetrics support

## Messaging

### Delivery

- Unified library: Delivery is now a single `liblogosdelivery` library with a tiered API: Kernel, Messaging API, and Reliable Channels.
- Messaging API: integration tests, stabilization, and bug fixes.
- Reliable Channel API: new in v0.2 as a developer preview.
  - API spec and shape landed.
  - First SDS repair implementation added in `nim-sds`.
  - SDS wired into Reliable Channels.
  - Persistence layer added.
- QUIC transport support added.
- Logos Delivery module:
  - deployed to testnet
  - with OpenMetrics support, bug fixes, API cleanup, and an updated Delivery dependency.

### Chat

- Group chats: de-MLS-backed group messaging without a central delivery service.
- One-to-one chat rebuilt on groups: a two-person MLS group gives multi-device support.
- Key exchange: KeyPackage registry removes the need for out-of-band key-bundle exchange.
- Persistence: identity and conversation state are now persisted.
- Reliability: causal-history gap detection improves synchronization.
- Logos Chat module:
  - rebuilt on `logos-rust-sdk`.
  - Chat and Delivery modules integrated.
  - Chat UI rewritten in QML.
  - end-to-end tests added.

## Basecamp and Apps

- App Manager: easier entry point for users to install and run core apps.
- Package Manager UI: refreshed install, update, remove, and repository-management flows, including multi-uninstall and clearer upgrade-state handling.
- Module publishing path: easier integration with module release repositories and release indexes that can be loaded into Package Manager UI.
- Process isolation: UI apps load their Qt plugins in separate processes, with improved shutdown and persistence behavior.
- QML packaging: loading and cache behavior cleaned up to make new releases install more reliably.
- Sandbox and auth: hardened QML sandbox and corrected auth-token handling for UI backends.
- App store model: clearer abstraction over apps, plugins, and modules.
- OpenMetrics module: exposes module metrics to Prometheus-compatible systems.

### LEZ Programs

- Oracle program (deployed on LEZ)
- Token program (deployed on LEZ)
- DEX program (deployed on LEZ)

## Logos Core

### logoscore-cli

- Daemon/client split.
- Remote client/daemon communication over TCP.
- Python wrapper: `logoscore-py`.

### Backend

- Module consumer/provider logic extracted to the C API and wrapped by `cpp-sdk` and `rust-sdk`.
- Restricted module API access through token exchange and caller allow lists.

### Developer Experience

- Code generation gives module and UI developers type-safe access to module APIs and generated boilerplate.
- `logos-modules-release-base` gives developers a standard way to build and publish modules and UI plugins for Basecamp and package-management tooling.

## P2P Module

- Peerstore management exposed.
- Capability discovery exposed.
- Custom protocol registration supported.
- Modules can be notified when data is available on custom protocol streams.
