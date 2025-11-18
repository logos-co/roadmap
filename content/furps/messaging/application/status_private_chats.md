---
title: Status Private Chats
date: 2025-11-13
tags:
    - messaging-furps
---
Waku specific FURPS, **before** integration of the Chat SDK.

## Functionality

1. Features other than one-to-one chats are either removed or can be disabled.
2. One-to-one chat’s traffic is not impacted by other features.
3. One-to-one chats are functional when rate limited by 100 msg per 10min over Waku or less.

## Usability

1. Features other than one-to-one chat can be removed or disabled.
2. A user with only one-to-one chat enabled can expect limited bandwidth and resource usage and a smooth experience.

## Reliability

1. One-to-one chat’s implementation behaves as specified (**Vac-QA**).

## Performance

1. 99% of one-to-one user messages are eventually received by their recipient, within 5 minutes of being online (**Vac-DST**).
2. One-to-one chat’s non-user messages do not consume over 20% of the allocated quota (**Vac-DST**).

## Supportability

1. status-cli/backend

## + (Privacy, Anonymity, Deployments)

1. ...