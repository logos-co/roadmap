---
title: Scalable Data Sync
date: 2025-11-13
tags:
    - messaging-furps
---
## Functionality

1. Ability to know that a published message has been received by at least one member of the group (and could therefore eventually be retrieved by other members).
2. Ability for participants to know when they have missed a message
3. Ability to resend unacknowledged messages
4. Ability to retrieve missed messages using Waku store protocol

## Usability

1. When sending a message to a large group, the application learns whether it was received by other group members.
2. When being part of a large group, the application is able to know whether they are missing messages.
3. When being part of a large group, the application is able to retrieve missed messages.

## Reliability

1. When sending a message in a group, the publisher can ascertain the message was received by at least one recipient **(Vac-QA)**.
2. When receiving messages in a group, the receiver can ascertain most missed messages by receiving one recent message from the group. **(Vac-QA)**

## Performance

Assuming messages in a group are sent at least every `S` seconds, with `S` being no longer than `5 sec`.

1. When sending a message in a group, the publisher can ensure the message was received by at least one recipient within `S` seconds **(Vac-DST)**.
2. When receiving messages in a group, the receiver can detect 90% of missed messages within `3*S` seconds.
3. When receiving messages in group, the receiver can reach eventual consistency within `6*S` seconds **(Vac-DST)**.

## Supportability

1. Applied to Communities channels on Status Desktop
2. For Web apps as a developer library.