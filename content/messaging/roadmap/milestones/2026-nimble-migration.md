---
title: Nimble Migration
tags:
  - messaging-milestone
date: 2026-01-15
github: https://github.com/logos-messaging/pm/issues/400
---

**Estimated date of completion**: Q2 2026

**Resources Required**:
- 1 Delivery engineer (intermittent)
- 1 Chat engineer (intermittent)

Migrate all main Logos Messaging Nim repositories from the legacy build system to Nimble package manager. This enables reproducible builds, proper dependency management, and aligns with the broader Logos ecosystem tooling.

Note: `libchat` is a Rust library and does not use Nimble.

## Deliverables

### Migrate logos-delivery to Nimble

**Owner**: Delivery Team

- `logos-messaging/logos-delivery` uses Nimble for build and dependency management
- CI/CD updated accordingly
- Nix flake integration with Nimble

### Migrate logos-chat to Nimble

**Owner**: Chat Team

- `logos-messaging/logos-chat` uses Nimble for build and dependency management
- CI/CD updated accordingly

### Migrate nim-sds to Nimble

**Owner**: Delivery Team

- `logos-messaging/nim-sds` uses Nimble for build and dependency management

### Verify Nimble-based builds across all platforms

**Owner**: Delivery Team

- Linux, macOS, Windows builds verified
- Nix flake outputs working with Nimble
- Cross-compilation for mobile targets verified (prerequisite for mobile support milestone)
