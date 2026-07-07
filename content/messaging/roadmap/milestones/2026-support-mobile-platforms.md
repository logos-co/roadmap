---
title: Support Mobile Platforms
tags:
  - messaging-milestone
date: 2026-02-21
---


**Resources Required**:
- 1 Delivery engineer
- 1 Chat engineer
- Logos Core team for mobile runtime support

Ensure that Logos Chat and Logos Delivery modules are usable in Logos Core on mobile platforms (iOS and Android).

Edge mode (light push, filter, peer exchange) is implemented in earlier milestones ([Messaging API — General Availability](2026-messaging-api-beta.md)). This milestone ensures it fully works on mobile, with testing and DST validation.

This involves three areas:
1. **nim-ffi mobile support** — Ensure C-bindings produced by nim-ffi work on iOS and Android
2. **Edge mode on mobile** — Verify and test edge mode on resource-constrained mobile devices. Edge mode implementation is done in previous milestones; this milestone covers mobile-specific testing, tuning, and DST validation.
3. **Logos Core on mobile** — Verify no multiple-runtime conflicts when running Chat and Delivery modules in a single mobile process

## FURPS

- [Nim FFI](/messaging/furps/application/nim_ffi.md): S2
- [Messaging API](/messaging/furps/core/messaging_sdk.md): F2 (edge mode — verification on mobile)

## Risks

| Risk                     | (Accept, Own, Mitigation)                                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Mobile cross-compilation | Nim cross-compilation for iOS and Android is not straightforward. Requires build system work.                           |
| Single-process constraint | Mobile platforms require a single process. Multiple async runtimes (Nim Chronos + Rust Tokio) may conflict.            |
| Resource constraints     | Mobile devices have limited bandwidth, battery, and memory. Edge mode must be tuned for these constraints.             |

## Deliverables

### Ensure nim-ffi libraries work on mobile platforms

**Owner**: Delivery Team

**Feature**: [Nim FFI](/messaging/furps/application/nim_ffi.md)

**FURPS**:
- S2. The exposed C library can be used in Logos Core for mobile: iOS and Android.

### Verify and test edge mode on mobile

**Owner**: Delivery Team + DST

Edge mode is implemented in [Messaging API — General Availability](2026-messaging-api-beta.md). This deliverable covers:
- Testing edge mode on iOS and Android devices
- Battery and bandwidth impact assessment
- Performance tuning for mobile constraints
- DST validation of reliability in edge mode on mobile

### Verify Chat and Delivery modules on Logos Core mobile

**Owner**: Delivery Team + Chat Team

- No multiple-runtime conflicts in single-process mobile environment
- Performance testing on mobile devices
- End-to-end validation: 1:1 chats, group chats, identity, on mobile
