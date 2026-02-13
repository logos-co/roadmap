---
title: Messaging API
tags:
  - messaging-milestone
date: 2025-01-14
github-milestone: https://github.com/waku-org/pm/milestone/41
---
Proceed with further Golang code decommission from the Waku stack by defining a high-level Messaging API that includes peer-to-peer reliability; move code implementing it from Golang to Nim; use Nim code in Status Application. Ensure strict separation of concerns between Chat protocols and Waku protocols.

## Deliverables

### [Introduce Messaging API in logos-messaging-nim](https://github.com/logos-messaging/pm/issues/305)

Implement the message API in `logos-messaging-nim`; expose it in C Bindings. The result should be a full decommission of the go-waku repository.

This implies writing a specification for Messaging API.

Messaging API consists of:
- Init API
- Send API
- Health API
- Subscribe API

### [Implement LMN Logos Core module](https://github.com/logos-messaging/pm/issues/374)

**Owner**: LMN team

Provide `logos-messaging-nim` as a module in Logos Core.
The module should expose Messaging API to be used by other Logos Core nodes

### Deploy LMN Fleet of Logos Core in headless mode

**Owner**: LMN team, Infra team

Ensure a staging fleet is available and pre-configurable for the Chat SDK Developer preview.

### Logos Core module - Documentation

TBD - some docs describing how to use Messaging API in the module