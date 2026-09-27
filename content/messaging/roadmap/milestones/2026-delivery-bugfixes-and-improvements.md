---
title: Bugfixes and Improvements
tags:
  - messaging-milestone
date: 2026-09-16
github: https://github.com/logos-messaging/pm/issues/479
---

Address bugs and feedback on Logos Delivery collected from the Testnet v0.3 release.

## Deliverables

### [Messaging API — address 0.3 feedback](https://github.com/logos-messaging/pm/issues/481)

**Owner**: Delivery Team

Address feedback on the [Messaging API](2026-messaging-api-general-availability) received after Testnet v0.3.

### [Bump Delivery dependencies](https://github.com/logos-messaging/pm/issues/485)

**Owner**: Delivery Team

nim-libp2p 2.4.0, Zerokit 3.0, Nim 2.2.12.

### [Allow pluggable nim-libp2p](https://github.com/logos-messaging/logos-delivery/issues/4341)

**Owner**: Delivery Team

Logos Delivery is built on top of nim-libp2p types rather than against an interface, so the libp2p stack cannot be swapped. Decouple it, to allow nim-libp2p to be used as a shared Logos Core module.

### [Speed up PR CI](https://github.com/logos-messaging/logos-delivery/issues/4342)

**Owner**: Delivery Team

Run only what a change affects on PRs, and move full coverage to a nightly run that fails loudly.
