---
title: Rate Limit Manager
date: 2025-11-13
tags:
    - messaging-furps
---
## Functionality

1. Rate limit the number of messages passed to the delivery service.
2. The rate limit is set in a form of number of messages per epoch; same format as RLN Relay.
3. Tracks current quota and usage.
4. Messages can be flagged with three priorities level: critical, normal, optional.
5. When remaining message quota is low, critical messages are sent, normal messages are queued and optional messages are dropped.
6. When message quote is exhausted, critical messages are queued on top, normal messages are queued, optional messages are dropped.

## Usability

1. Developer can mark messages with relevant priority.
2. Developer can pass messages by batch; with an all-or-none sending strategy.
3. Developer can access total quota and remaining quota values.
4. Message status is available to the developer (queued, dropped, passed to delivery service).

## Reliability

1. Errors and status from the underlying delivery service are available to the developer.
2. Queued messages are persisted across restart.
3. Quota status is persisted across restart.

## Performance

1. ...

## Supportability

1. Nim library.

## + (Privacy, Anonymity, Deployments)

1. Nimble package manager is used to build.