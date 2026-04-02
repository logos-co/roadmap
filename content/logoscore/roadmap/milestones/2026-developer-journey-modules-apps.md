---
title: Improve Developer Journey for Modules & Apps Development
tags:
  - logoscore-milestone
date: 2026-03-31
github-milestone: 'https://github.com/logos-co/logos-workspace/issues/44'
---

# Improve Developer Journey for Modules & Apps Development

https://github.com/logos-co/logos-workspace/issues/44

**completion target**:  Testnet v0.2

**Resources Required for 2026H1**:

- 3 Engineers

Make it easier to build, iterate on, and ship Logos modules and applications. This milestone covers three fronts: enabling agent-assisted development workflows through CLI and MCP support; rolling out the module builder build system and a test framework across all projects; and improving the builder itself with better configuration, daemon mode, and developer tooling.

The goal is that a developer (or an automated agent) can scaffold a module, build it, test it, and debug its interactions with other modules — all with minimal friction and a single coherent toolchain.

## FURPS

- [Developer Module](/logoscore/furps/developer-module.md)
- [Logos App](/logoscore/furps/logos-app.md)

## Deliverables

### Facilitate Agentic Workflows

**Owner**: Logoscore Team

**Feature**: [Developer Module](/logoscore/furps/developer-module.md) (supportability, usability)

Improve tooling and integration points so that automated agents (and humans) can scaffold, modify, and validate modules with fewer manual steps. This includes language-server support for IDE integration, MCP support for agent tooling, and debug tooling for tracing module interactions.

**Tasks**:

- [Add MCP support](https://github.com/logos-co/logos-basecamp/issues/122) — enable Model Context Protocol integration in Basecamp for agent-assisted workflows
- [Support debug tool to log calls between modules in dev mode](https://github.com/logos-co/logos-liblogos/issues/102) — add tracing of inter-module communication for debugging
- [CLI support](https://github.com/logos-co/logos-logoscore-cli/issues/16)
- [Developer Module: output selective or global tracing and logging of module interactions](https://github.com/logos-co/logos-core-poc/issues/78) — configurable tracing output at the developer module level
- [Investigate LSP server support](https://github.com/logos-co/logos-workspace/issues/42) — evaluate feasibility of a Language Server Protocol implementation for Logos module development or some other method to improve developer experience using an IDE

### [Update Apps and Modules to Use Test Framework](https://github.com/logos-co/logos-module-builder/issues/68)

**Owner**: Logoscore Team

**Feature**: [Logos App](/logoscore/furps/logos-app.md)

Roll out the module builder's test framework across all existing modules and apps. Each module gets integration tests that validate its behavior within the LogosCore runtime.

**Sub-tasks** (13 modules):

- [logos-package-manager-module](https://github.com/logos-co/logos-module-builder/issues/53) ([duplicate](https://github.com/logos-co/logos-module-builder/issues/54))
- [logos-blockchain-module](https://github.com/logos-co/logos-module-builder/issues/55)
- [logos-blockchain-ui](https://github.com/logos-co/logos-module-builder/issues/56)
- [logos-lez-wallet-ui](https://github.com/logos-co/logos-module-builder/issues/57)
- [logos-lez-module](https://github.com/logos-co/logos-module-builder/issues/58)
- [logos-wallet-module](https://github.com/logos-co/logos-module-builder/issues/59)
- [logos-wallet-ui](https://github.com/logos-co/logos-module-builder/issues/60)
- [logos-accounts-module](https://github.com/logos-co/logos-module-builder/issues/61)
- [logos-accounts-ui](https://github.com/logos-co/logos-module-builder/issues/62)
- [logos-chat-module](https://github.com/logos-co/logos-module-builder/issues/63)
- [logos-chat-ui](https://github.com/logos-co/logos-module-builder/issues/64)
- [logos-delivery-module](https://github.com/logos-co/logos-module-builder/issues/65)

### Improve Logos Module Builder

**Owner**: Logoscore Team

Enhance the builder itself — configuration, developer experience, and runtime modes — based on dogfooding feedback.

**Tasks**:

- [Unify configs into a single `metadata.json` file](https://github.com/logos-co/logos-module-builder/issues/66) — replace the current split of `metadata.json` + `module.yaml` + `manifest.json` with a single configuration source
- [Update module builder to handle different edge cases](https://github.com/logos-co/logos-module-builder/issues/49) — harden the builder against real-world module structures encountered during rollout
- [Daemon mode](https://github.com/logos-co/logos-liblogos/issues/78) — run LogosCore as a background daemon, enabling faster iteration cycles during development
- [Implement a `logos shell` command (like `nix develop`)](https://github.com/logos-co/logos-liblogos/issues/69) — drop developers into a pre-configured shell environment with all dependencies available
- [Lock versions used in tutorial](https://github.com/logos-co/logos-tutorial/issues/27) — pin dependency versions in the tutorial to prevent breakage as the stack evolves

### Generalize Logos Apps

**Owner**: Logoscore Team

**Tasks**:

- [Generalize LogosApp and Standalone Apps](https://github.com/logos-co/logos-basecamp/issues/11) — make the app shell reusable beyond Basecamp so third-party developers can build standalone Logos applications
- [QML inspector in standalone app](https://github.com/logos-co/logos-standalone-app/issues/5) — add a built-in QML inspector for debugging UI modules during development
