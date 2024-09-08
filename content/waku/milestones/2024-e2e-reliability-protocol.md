---
title: End-to-end reliability protocol
tags:
    - waku-milestone
date: 2024-09-07
---

[Milestone End-to-end reliability protocol](https://github.com/waku-org/pm/milestone/29)

Due Date: 2024-09-02

To solve reliability is to solve two problems:

1. High heuristic that messages are received and sent
2. Ability to know whether messages are received or sent

Problem (1) can never be 100% reliable in a network environment. The previous milestones focused on it.

To solve (2), is to create an end-to-end protocol, sender to recipient, that enables the ability to know whether recipient(s) have received messages.

With this milestone, we design and deliver a first PoC for an end-to-end reliability protocol.
This protocol will be specified and implemented in the Status app for Status Communities chat rooms.

### Deliverable: [Telemetry: multicast message reliability](https://github.com/waku-org/pm/issues/192)

Review and ensure the telemetry service can provide accurate statistics on message reliability with a mix of online presence report, message sending and receiving.
The measurement should be specific to multicast messages to ensure that deliverables above do improve reliability in real usage.
This should include content topic data, to be used for later optimization.
For both Desktop and Mobile.
Note that from Status’ team experience, the telemetry statistics have usually been more optimistic than reality, especially when there is a full network drop (ie, no messages going out).

### Deliverable: [End-to-end reliability protocol - PoC](https://github.com/waku-org/pm/issues/193)

Design a protocol that enables end-to-end reliability for Status Communities channels.

The output is an agnostic RFC and a reference implementation in Golang (similar to MVDS library). However, it should take in account the context of Status Communities and leverage related properties (e.g. mostly online community owner nodes).

This deliverable does not include the integration in status-go, but it should provide enough information to then review with the Status app team how this protocol should be used in Status Communities. Parameters such as bandwidth usage and reliability level (e.g. N% of users acks) can then be discussed with the app team before implementation, as well as the type of messages that need such functionality (e.g. status update vs chat message in channel).

### Deliverable: [End-to-end reliability protocol - Status integration](https://github.com/waku-org/pm/issues/194)

Integrate the previously designed protocol in status-go with parameters agreed with the Status product team. Provide the right REST API (if needed) to ensure this is tested by Vac/QA.
Harden the library as needed.