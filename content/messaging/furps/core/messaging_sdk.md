---
title: Messaging API
tags:
  - messaging-furps
date: 2025-11-13
---
## Functionality

1. Setup, start and stop a messaging node.
2. Support edge node operation mode.
3. Support core node operation mode.
4. Does automatic peer discovery based on the node platform and operation mode.
5. Returns health and connectivity information using proven heuristics.
6. Previously discovered peers are persisted across restarts, and potentially used for future connections.

## Usability

1. When setting up a messaging node, no need to specify what protocols to mount, only an operational mode (edge or core).
2. Disconnection detection and recovery, and other peer management matters are automatically handled.
3. Developers do not need to specify the protocols used to send and receive messages; it is deduced from the mode of operation.
4. By default, auto-sharding is applied, meaning developers do not need to be concerned by sharding; pubsub topics are never exposed.
5. Developers only need to handle errors in cases of irretrievable failure requiring end-user action. Internal errors are not bubbled up if they can be recovered internally.

## Reliability

1. Sends a message using peer-to-peer reliability (service node redundancy, optional store confirmation)
2. Receives messages using peer-to-peer reliability (service node redundancy, periodic store query, periodic filter ping)

## Performance

## Supportability

1. Developers can use the API in Nim software, importing it via Nimble.
2. Developers can use the API via C-bindings, in Logos Core.

## + (Privacy, Anonymity, Deployments)
