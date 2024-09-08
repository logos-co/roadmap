---
title: Direct Message Reliability
tags:
    - waku-milestone
date: 2024-09-07
---
[Milestone Direct Message Reliability](https://github.com/waku-org/pm/milestone/28)

Due Date: 2024-09-02

With this milestone, connectivity issues in Status Mobile and Desktop are solved and tested.
Usage of store v3-beta casts a wide net on potential message loss, at the cost of bandwidth overhead (but still lower than current usage of storev2).

Review of MVDS usage for all direct messages is done to ensure that critical messages (request to join, contact request, 1:1 messages, private group) are delivered.

### Deliverable: [Enable testing of direct messages](https://github.com/waku-org/pm/issues/176)

Produce a CLI that enables black-box testing of the Waku integration in status-go. Focus should be on direct messages, including peer management and strategies when network connectivity is lost. This is to enable (1) of the Vac/QA dependencies. Note the CLI should sit under the Status Communities logic layer and focus on message delivery.

Direct messages are used for critical chat features: contact request, community join request and response, 1:1 chat and private group.
Currently, if the connection is dropped, the recovery strategies implemented in status-go often fail.

The Waku team would provide a set of binaries to enable Vac/QA team to setup non-regression functional test (black box/e2e) as well as Vac/DST to run simulations in unreliable environments (latency, connection drop) to ascertain the reliability of the software, before it is touched by Status QA team.

The API of such binaries would be defined based on the needs from the Vac/QA-DST team.

Vac QA team is not expected to proceed with an extensive testing of the Communities functionality, but instead proceed with testing of direct message sending/reception considering various potential network faults.

### Deliverable: [Review connection management strategy and back-off and fix long disconnection issues](https://github.com/waku-org/pm/issues/177)

Review disconnection and peer management in status-go and go-waku for both relay and light client protocols.
Ensure that broken scenarios from dogfooding and Vac/QA testing are covered. Including but not limited to desktop sleep/hibernate and failure to send messages after current backoff strategy.
This includes moving peer management logic from status-go to go-waku for better separation of concerns.

### Deliverable: [Tooling: filter and light push protocols](https://github.com/waku-org/pm/issues/178)

Implement a testing telemetry tool, a.k.a. lite-protocol-tester, that can measure the reliability of light push and filter from nwaku PoV. That tool should enable injecting messages, and produce the right logging. DST’s log tracing tool can then be used to create reports. This will help us to measure the current estate and evolution of the upcoming enhancements.

### Deliverable: [Telemetry: fleet logging](https://github.com/waku-org/pm/issues/180)

Ensure that nwaku nodes in the status fleet log messages to enable traceability on both relay and filter/light push. Also ensure that sync (store v3) does highlight missed messages and related time to enable investigation on why 2 nodes were not synced.

### Deliverable: [Telemetry: direct message reliability](https://github.com/waku-org/pm/issues/182)

Review and ensure the telemetry service can provide accurate statistics on message reliability with a mix of online presence report, message sending and receiving.
The measurement should be specific to direct messages to ensure that deliverables above do improve reliability in real usage.
This should include content topic data, to be used for later optimization.
For both Desktop and Mobile. Telemetry service should also be updated to ensure it covers the disconnection scenario for itself.
Note that from Status’ team experience, the telemetry statistics have usually been more optimistic than reality, especially when there is a full network drop (ie, no messages going out).

### Deliverable: [Reliability Protocol for Relay](https://github.com/waku-org/pm/issues/184)

Define a protocol that leverages store v3-beta, to improve reliability when using Waku Relay, for both delivery and reception of messages.

This enables a local node to ensure it has the same view of the network as its peers.
Deciding on how store v3-beta queries should be triggered and how often should be part of the protocol specifications.

Note this does not provide end-to-end delivery as it only permits a local node to verify that its view of the network is similar to connected peers (and not peers further away in the network).

**The reference implementation will be done in nwaku**: The API should be simple and remove the need for protocol knowledge by the developer (e.g. send/receive verbs).
This should also be used by the light push and filter service (as service nodes).
A similar logic should be implemented in Golang and used in status-go. RFC and collaboration with the nwaku team is expected to ensure similar implementation in both languages.

### Deliverable: [Reliability Protocol for Resource-Restricted Clients](https://github.com/waku-org/pm/issues/186)

Define and implement a protocol that improves reliability in web and mobile environments.
In this particular instance, **js-waku will be the reference implementation** of the designed protocol to enable focus of the js-waku team on resource-restricted environment and of the nwaku team on relay and service node matters/usage.
This deliverable includes the implementation of this protocol in go-waku (nwaku excluded). Work should be done in parallel and feed from each other.
The intent is to compose light push, filter and store v3-beta in combination.

### Deliverable: [User apps for large scale dogfooding](https://github.com/waku-org/pm/issues/188)

Note: new deliverable, stemmed from discussion with js-waku team who have been working on resource-restricted reliability since earlier this year. Yet to be estimated and planned.

**Justification**: testing and simulations have limitations in the context of heterogeneous network behaviour. The best testing comes from the real world/network environment, with real users.
It is expected that not all users will enable opt-in telemetry and that there will be a delay between library improvements and roll out.

### Deliverable: [Review MVDS usage and fail path](https://github.com/waku-org/pm/issues/177)

Review MVDS usage for direct messages and ensure that the fail path is handled correctly with either feedback on the UI or automated retries.
MVDS protocol is already in use for some direct messages. Ensure it is the case for contact requests, join requests, 1:1 chat and private groups.
Also review the fail path for MVDS (are messages retried later or is there feedback/retry on the UI)?
**The output of this is likely to include GUI change recommendations** to add retry buttons or just simply retry indefinitely (for contact requests etc) in addition to some logic change (e.g. ensure the retry happens after reconnection).