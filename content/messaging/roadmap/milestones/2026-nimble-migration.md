---
title: Nimble Migration
tags:
  - messaging-milestone
date: 2026-01-15
github: https://github.com/logos-messaging/pm/issues/400
---


**Resources Required**:
- 1 Delivery engineer (intermittent)
- 1 Chat engineer (intermittent)

Migrate all main Logos Messaging Nim repositories from the `nimbus-build-system` to Nimble package manager. This simplifies dependency management, improves IDE integration and aligns with the broader Logos ecosystem tooling.

Note: `libchat` is a Rust library and does not use Nimble.

## Deliverables

### [Migrate logos-delivery to Nimble](https://github.com/logos-messaging/pm/issues/377)

**Owner**: Delivery Team

- `logos-messaging/logos-delivery` uses Nimble for build and dependency management
- CI/CD updated accordingly
- Nix flake integration with Nimble

### Migrate logos-chat to Nimble

**Owner**: Chat Team

- `logos-messaging/logos-chat` uses Nimble for build and dependency management
- CI/CD updated accordingly
- Nix flake integration with Nimble

This milestone can be removed is [[2026-chat-developer-preview# Remove unnecessary Nim shim from Logos Chat]] succeeds.  

### [Migrate nim-sds to Nimble](https://github.com/logos-messaging/pm/issues/378)

**Owner**: Delivery Team

- `logos-messaging/nim-sds` uses Nimble for build and dependency management
- CI/CD updated accordingly
- Nix flake integration with Nimble
