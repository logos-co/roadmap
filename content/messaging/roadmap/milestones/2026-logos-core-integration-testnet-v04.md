---
title: Logos Core Integration — Phase 4
tags:
  - messaging-milestone
date: 2026-09-16
github: https://github.com/logos-messaging/pm/issues/478
---

Continues [Logos Core Integration — Phase 3](2026-logos-core-integration-phase-3) by extending the `delivery-module` API with the [Reliable Channel API](/messaging/furps/application/reliable_channel.md) features.

## Deliverables

### [Add Reliable Channel encryption to `delivery-module` API](https://github.com/logos-messaging/pm/issues/472)

**Owner**: Delivery Team

Expose Reliable Channel encryption through the `delivery-module` API, so Logos Core applications can use it.

### [Support multiple module clients in `delivery-module`](https://github.com/logos-messaging/pm/issues/484)

**Owner**: Delivery Team

`delivery-module` fully supports being used by several Logos Core modules at once (e.g. the chat module and an app module) sharing one node:
- Node lifecycle is shared, while modules request different configs
- Modules share content topics and reliable channels
- Reliable channel data of one module does not leak to another through signals
