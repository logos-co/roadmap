---
title: Messaging API
tags:
    - messaging-milestone
date: 2025-01-14
---
EDC: 2025-12-19

Github Milestone: https://github.com/waku-org/pm/milestone/41

Proceed with further Golang code decommission from the Waku stack by defining a Waku Messaging API that includes peer-to-peer reliability; move code implementing it from Golang to Nim; use Nim code in Status Application. Ensure strict separation of concerns between Chat protocols and Waku protocols. Uses clean nwaku c-bindings to revamp the Waku Rust bindings.

## Deliverables

### [Define Messaging API](https://github.com/waku-org/pm/issues/282)

Define the [messaging API](https://blog.waku.org/content/images/2024/07/waku-stack-overview-bbe542ade7dadda4b6852b1bd5f1ca66.jpg), a deliberate API to start and configure a Waku node, send and receive messages using the [tunable peer-to-peer reliability protocols](https://github.com/waku-org/specs/pull/52) (store confirmation, service node redundancy, multiple peer discovery); The API must abstract Waku protocols and only expose high level information to the consumer (edge vs relay mode, send message, receive message). The definition should inform terminology and function signature in all languages, including REST.

### Messaging API: nwaku

Implement the message API in nwaku; expose it in C Bindings; implement Golang wrapper. The result should be a full decommission of the go-waku repository.

### [Messaging API: js-waku](https://github.com/waku-org/pm/issues/283)

Implement the messaging API in js-waku; using in the Logos forum PoC and Qaku.

### Messaging API: REST

Implement the messaging API on the REST API of nwaku.

### Messaging API: status-go integration

Exclusively use the Messaging API in status-go; do not use core.

### [Messaging API: Rust SDK](https://github.com/waku-org/pm/issues/289)

Implement the message API in Rust bindings over nwaku.
