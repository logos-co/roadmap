---
title: Logoscore Consolidation
tags:
  - logoscore-milestone
date: 2026-03-31
github-milestone: 'https://github.com/logos-co/logos-workspace/issues/43'
---

# Logoscore Consolidation

https://github.com/logos-co/logos-workspace/issues/43

**Estimated date of completion**: June 2026 (Testnet v0.2)

**Resources Required for 2026H1**:

- 3 Engineers

This milestone completes the LogosCore abstraction work, then transitions the existing modules to ensure they using the correct abstraction, APIs and tooling. In parallel liblogos and logos-cpp-sdk are further refactored and the transport layer moves to CDDL-defined schemas encoded as CBOR.

## FURPS

- [Logos Core](/logoscore/furps/logos-core.md)

## Deliverables

### [Finish Abstraction](https://github.com/logos-co/logos-liblogos/issues/98)

**Owner**: Logoscore Team

**FURPS**: [Logos Core](/logoscore/furps/logos-core.md) (functionality, reliability, API clarity)

Complete remaining abstraction layers so modules and core share clear boundaries and stable interfaces. This covers lifecycle, dependency management, process isolation, logging, and API documentation.

**Tasks**:

- [Review and implement lifecycle management tasks of modules](https://github.com/logos-co/logos-liblogos/issues/19)
- [Ensure LogosCore handles reliably loading/unloading modules](https://github.com/logos-co/logos-liblogos/issues/20)
- [Detect acyclic dependencies of loaded modules](https://github.com/logos-co/logos-liblogos/issues/11)
- [Fix: `logos_host` processes often stay alive after app quits](https://github.com/logos-co/logos-liblogos/issues/39)
- [Improve LogosCore logs](https://github.com/logos-co/logos-liblogos/issues/25)
- [Move process stats to its own library](https://github.com/logos-co/logos-liblogos/issues/41)
- [Document LogosCore main APIs](https://github.com/logos-co/logos-liblogos/issues/10)

### [Update Apps and Modules to Use Module Builder](https://github.com/logos-co/logos-module-builder/issues/67)

**Owner**: Logoscore Team

Migrate all existing modules and apps to build with the Logos Module Builder, establishing a single consistent build path across the project. This is a prerequisite for the test framework rollout (tracked under [Developer Journey](2026-developer-journey-modules-apps.md)).

**Sub-tasks** (13 modules):

- [logos-storage-module](https://github.com/logos-co/logos-module-builder/issues/36)
- [logos-libp2p-module](https://github.com/logos-co/logos-module-builder/issues/37)
- [logos-package-manager-ui](https://github.com/logos-co/logos-module-builder/issues/38)
- [logos-package-manager-module](https://github.com/logos-co/logos-module-builder/issues/39)
- [logos-blockchain-module](https://github.com/logos-co/logos-module-builder/issues/40)
- [logos-blockchain-ui](https://github.com/logos-co/logos-module-builder/issues/41)
- [logos-lez-module](https://github.com/logos-co/logos-module-builder/issues/42)
- [logos-lez-wallet-ui](https://github.com/logos-co/logos-module-builder/issues/43)
- [logos-delivery-module](https://github.com/logos-co/logos-module-builder/issues/44)
- [logos-accounts-module](https://github.com/logos-co/logos-module-builder/issues/45)
- [logos-accounts-ui](https://github.com/logos-co/logos-module-builder/issues/46)
- [logos-chat-ui](https://github.com/logos-co/logos-module-builder/issues/47)
- [logos-chat-module](https://github.com/logos-co/logos-module-builder/issues/48)

### [Update Modules to Pure C++ Interface](https://github.com/logos-co/logos-cpp-sdk/issues/44)

**Owner**: Logoscore Team

Move all C++ modules to the pure C++ interface, removing legacy bindings and aligning with the abstraction boundaries established in liblogos.

**Sub-tasks** (9 modules):

- [logos-storage-module](https://github.com/logos-co/logos-cpp-sdk/issues/34)
- [logos-libp2p-module](https://github.com/logos-co/logos-cpp-sdk/issues/35)
- [logos-package-manager-module](https://github.com/logos-co/logos-cpp-sdk/issues/36)
- [logos-blockchain-module](https://github.com/logos-co/logos-cpp-sdk/issues/37)
- [logos-lez-module](https://github.com/logos-co/logos-cpp-sdk/issues/38)
- [logos-wallet-module](https://github.com/logos-co/logos-cpp-sdk/issues/39)
- [logos-accounts-module](https://github.com/logos-co/logos-cpp-sdk/issues/40)
- [logos-chat-module](https://github.com/logos-co/logos-cpp-sdk/issues/41)
- [logos-delivery-module](https://github.com/logos-co/logos-cpp-sdk/issues/42)

### [Move Transport to CDDL + CBOR](https://github.com/logos-co/logos-cpp-sdk/issues/43)

**Owner**: Logoscore Team

Adopt CDDL for schema definitions and CBOR for wire encoding in the transport layer. This replaces ad-hoc serialization with a standards-based approach that enables cross-language interoperability and schema validation.

### [Rethink JS SDK: Update to Use New liblogos and CDDL](https://github.com/logos-co/logos-js-sdk/issues/4)

**Owner**: Logoscore Team

Align the JavaScript SDK with the new liblogos abstraction and CDDL-based transport, so that JS-based modules and tooling remain compatible with the consolidated stack.

### [Capability Error Message](https://github.com/logos-co/logos-chat-legacy-ui/issues/2)

**Owner**: Logoscore Team

Surface clear error messages when a module lacks required capabilities, improving debuggability during development and integration.
