---
title: LogosCore Roadmap
tags:
  - roadmap
  - logoscore
---

# Roadmap Overview

The Logoscore team is working towards a modular, cross-platform application framework with a decentralized package ecosystem.

## Milestones

The work is split into milestones, planned to be achieved by certain release.

### Testnet v0.2

- [Logoscore Consolidation](2026-logoscore-consolidation.md)
  - Finish abstraction (lifecycle management, dependency detection, process cleanup, API docs)
  - Update all apps and modules to use Module Builder (13 modules)
  - Update all modules to pure C++ interface (9 modules)
  - Move transport to CDDL + CBOR
  - Align JS SDK with new liblogos and CDDL
- [Improve Developer Journey for Modules & Apps Development](2026-developer-journey-modules-apps.md)
  - Facilitate agentic workflows (LSP, MCP, debug tracing)
  - Roll out test framework across all modules (13 modules)
  - Improve Module Builder (unified config, daemon mode, `logos shell`)
  - Generalize LogosApp and standalone apps
- [Package Manager — Foundations](2026-package-manager-foundations.md)
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

- Decentralized Package Manager
