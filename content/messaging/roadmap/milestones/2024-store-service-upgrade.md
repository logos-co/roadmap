---
title: Store Service Upgrade
tags:
    - messaging-milestone
date: 2024-09-07
github: https://github.com/waku-org/pm/milestone/27
---
EDC: 2025-04-11


With this milestone, the store protocol becomes more easily usable for reliability purposes.
Moreover, nwaku PostgreSQL implementation will enable better disk space management and enable operators to hard cap the used disk space.

## Deliverables

### [Store v3-beta - Message Hashes](https://github.com/logos-messaging/pm/issues/131)

Enable the Waku Network to provide distributed and synchronised store services.
An improved version of the Store protocol, marking a crucial increment towards a synchronisation protocol:
- introduces the concept of deterministic message hashes to index messages
- considers the Store as a key-value store
- allows for querying a list of keys (message hashes) from the Store
- allows for querying for the full message content (values) of a set of keys from the Store
- keeps all previous value-based filtering (e.g. content topic, timestamp) in place

### [Store v3 - store synchronisation](https://github.com/logos-messaging/pm/issues/132)

<!-- Moved to decentralized store milestone https://docs.google.com/document/d/1L8HvXtAYk-JqQL6w3RgCskXwegcTa0J5nyH9YL4LrQE/edit?disco=AAABZGqoBO4 -->

Upgrade the Store service capability in the network from a collection of local, unsynchronised,
semi-centralised (trusted) service nodes to a decentralised service capability in the network with inter-node synchronisation.
Building on Store v3-beta, this version of Store includes basic synchronisation between nodes. This will probably include:
- a protocol/heuristic to resume store services after an offline period
- a protocol/heuristic to periodically compare local key-value store with other nodes and find missing keys
- a protocol/heuristic to periodically download the messages (values) for missing keys from other store nodes

### [DoS protection for req-res protocols and metrics](https://github.com/logos-messaging/pm/issues/66)

Add local DoS protection service nodes by applying request rate limitation on non relay protocols, including store.
- Apply some limited bandwidth limitation on service protocols
- Provide failsafe mechanisms to third party apps / client side help for request rejection mechanisms

### [PostgreSQL Maintenance](https://github.com/logos-messaging/pm/issues/119)

Provide a solution on how to best handle PostgreSQL database growth and pruning, so that node operators can predict database size and avoid disruptions due to full disk space.

### [Completed] [Metric: Count store messages](https://github.com/logos-messaging/pm/issues/167)

[Message-finder](https://github.com/waku-org/message-finder) is used to compare the number of Status messages across Status nodes to understand the potential discrepancies and odd behaviour of messages being inserted in the past in a given channel.

This deliverable captures the message count on all Waku fleets to use as a metrics of the efficacy of store sync.
