---
title: Mixnet
date: 2025-11-13
tags:
    - messaging-furps
---
## Functionality

1. Relay nodes can mount mixnet protocol, acting as sender, intermediary or exit nodes.
2. Nodes can connect to other nodes that support mix using static configuration.
3. Client nodes can send light push requests over the mixnet before delivery to a service node.
4. Client nodes can receive a response to a light push request over the mixnet.
5. Nodes can discover other nodes that support mix using available peer discovery mechanisms.

## Usability

## Reliability

## Performance

- P1. Payloads are limited to 4kB

## Supportability

1. `wakunode2` for intermediary and exit nodes.
2. nwaku CLI for sender nodes.
3. Browser based apps built using js-waku support acting as entry nodes.
4. Browser based apps built using js-waku support discovering mix nodes using available peer discovery mechanisms.

## + (Privacy, Anonymity, Deployments)