---
title: Logos Core Roadmap
tags:
  - roadmap
  - logoscore
  - logosctl
  - basecamp
  - ethereum
  - bitcoin
  - zcash
  - monero
  - lez
  - uplink
  - mobile
---

## Roadmap Overview

The Logos Core team is working towards a modular, cross-platform application framework with a decentralized package ecosystem.

The team is currently working on the following tracks:

1. [Logos Core C3A](/logoscore/roadmap/core-c3a.md): the reworked Core, with CDDL-based module contracts.
2. [Bitcoin Integration](/logoscore/roadmap/bitcoin.md): apps and modules for interacting with the Bitcoin blockchain.
3. [Zcash Integration](/logoscore/roadmap/zcash.md): apps and modules for interacting with the Zcash blockchain.
4. [Signers](/logoscore/roadmap/signers.md): evolution of the Keystore app, allowing more generic management of signer devices.
5. [Uplink App](/logoscore/roadmap/uplink.md): the node referral app.
6. [LEZ App](/logoscore/roadmap/lez.md): one LEZ app, wallet and Explorer merged, running on LEZ core.
7. [Basecamp Enhancements and Maintenance](/logoscore/roadmap/basecamp.md): new Basecamp features, the move to a single UI app type, and bug fixes.
8. [Design System](/logoscore/roadmap/design-system.md): theming and mobile readiness.
9. [Mobile Support](/logoscore/roadmap/mobile-support.md): Logos apps on mobile devices (Android and iOS).

## Testnet Milestones

The work is split into milestones, according to the targeted Logos testnet/releases.

### Testnet v0.2

- [Logoscore Consolidation](/logoscore/roadmap/milestones/2026-logoscore-consolidation.md)
  - Finish abstraction (lifecycle management, dependency detection, process cleanup, API docs)
  - Update all apps and modules to use Module Builder (13 modules)
  - Update all modules to pure C++ interface (9 modules)
  - Move transport to CDDL + CBOR
  - Align JS SDK with new liblogos and CDDL
- [Improve Developer Journey for Modules & Apps Development](/logoscore/roadmap/milestones/2026-developer-journey-modules-apps.md)
  - Facilitate agentic workflows (LSP, MCP, debug tracing)
  - Roll out test framework across all modules (13 modules)
  - Improve Module Builder (unified config, daemon mode, `logos shell`)
  - Generalize LogosApp and standalone apps
- [Package Manager — Foundations](/logoscore/roadmap/milestones/2026-package-manager-foundations.md)
  - Extract library and abstract provider for decentralized package manager
  - Package integrity via signatures
  - Package lifecycle: upgrade, uninstall, SEMVER support
  - UI improvements and version selection

### Testnet v0.3

- Basecamp
  - Remove qtwidgets MDI and add kdbab docker widgets
  - Onboarding & settings encryption
  - sqlcipher module
- Logoscore Enhancements
  - Support talking to an existing core
  - Support running multiple instances of a module
  - Debug Tool: log calls between modules
- Support Other Platforms
  - Windows Support

### Testnet v0.4

Logos Core:

- [ ] [Logos Core CDDL Contract Commitment Architecture v0.4 Deliverables](/logoscore/roadmap/testnet_v0.4/core-c3a_v0.4.md)

Basecamp & Apps:

- [ ] [Bitcoin Integration v0.4 Deliverables](/logoscore/roadmap/testnet_v0.4/bitcoin_v0.4.md)
- [ ] [Zcash Integration v0.4 Deliverables](/logoscore/roadmap/testnet_v0.4/zcash_v0.4.md)
- [ ] [Signers v0.4 Deliverables](/logoscore/roadmap/testnet_v0.4/signers_v0.4.md)
- [ ] [Uplink App v0.4 Deliverables](/logoscore/roadmap/testnet_v0.4/uplink_v0.4.md)
- [ ] [LEZ Core and App Unification v0.4 Deliverables](/logoscore/roadmap/testnet_v0.4/lez_v0.4.md)
- [ ] [Basecamp Enhancements and Maintenance v0.4 Deliverables](/logoscore/roadmap/testnet_v0.4/basecamp_v0.4.md)
- [ ] [Design System v0.4 Deliverables](/logoscore/roadmap/testnet_v0.4/design-system_v0.4.md)

### Testnet v0.5

Logos Core:

- [ ] [Logos Core CDDL Contract Commitment Architecture v0.5 Deliverables](/logoscore/roadmap/testnet_v0.5/core-c3a_v0.5.md)

Basecamp & Apps:

- [ ] [Signers v0.5 Deliverables](/logoscore/roadmap/testnet_v0.5/signers_v0.5.md)
- [ ] [LEZ App Go-Live v0.5 Deliverables](/logoscore/roadmap/testnet_v0.5/lez_v0.5.md)
- [ ] [Basecamp Enhancements and Maintenance v0.5 Deliverables](/logoscore/roadmap/testnet_v0.5/basecamp_v0.5.md)
- [ ] [Design System v0.5 Deliverables](/logoscore/roadmap/testnet_v0.5/design-system_v0.5.md)
- [ ] [Mobile Support v0.5 Deliverables](/logoscore/roadmap/testnet_v0.5/mobile-support_v0.5.md)
