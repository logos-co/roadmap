---
title: 2024 Milestones
date: 2024-06-04
---

## [Milestone Store Service Upgrade](https://github.com/waku-org/pm/milestone/27)

Due Date: 2024-09-20

With this milestone, the store protocol becomes more easily usable for reliability purposes.
Moreover, nwaku PostgreSQL implementation will enable better disk space management and enable operators to hard cap the used disk space.

### Deliverable: [Store v3-beta - Message Hashes](https://github.com/waku-org/pm/issues/131)

Enable the Waku Network to provide distributed and synchronised store services.
An improved version of the Store protocol, marking a crucial increment towards a synchronisation protocol:
- introduces the concept of deterministic message hashes to index messages
- considers the Store as a key-value store
- allows for querying a list of keys (message hashes) from the Store
- allows for querying for the full message content (values) of a set of keys from the Store
- keeps all previous value-based filtering (e.g. content topic, timestamp) in place

### Deliverable: [Store v3 - store synchronisation](https://github.com/waku-org/pm/issues/132)

Upgrade the Store service capability in the network from a collection of local, unsynchronised,
semi-centralised (trusted) service nodes to a decentralised service capability in the network with inter-node synchronisation.
Building on Store v3-beta, this version of Store includes basic synchronisation between nodes. This will probably include:
- a protocol/heuristic to resume store services after an offline period
- a protocol/heuristic to periodically compare local key-value store with other nodes and find missing keys
- a protocol/heuristic to periodically download the messages (values) for missing keys from other store nodes

### Deliverable: [DoS protection for req-res protocols and metrics](https://github.com/waku-org/pm/issues/66)

Add local DoS protection service nodes by applying request rate limitation on non relay protocols, including store.
- Apply some limited bandwidth limitation on service protocols
- Provide failsafe mechanisms to third party apps / client side help for request rejection mechanisms

### Deliverable: [PostgreSQL Maintenance](https://github.com/waku-org/pm/issues/119)

Provide a solution on how to best handle PostgreSQL database growth and pruning, so that node operators can predict database size and avoid disruptions due to full disk space.

### Deliverable: [Metric: Count store messages](https://github.com/waku-org/pm/issues/167)

[Message-finder](https://github.com/waku-org/message-finder) is used to compare the number of Status messages across Status nodes to understand the potential discrepancies and odd behaviour of messages being inserted in the past in a given channel.

This deliverable captures the message count on all Waku fleets to use as a metrics of the efficacy of store sync.

## [Milestone Direct Message Reliability](https://github.com/waku-org/pm/milestone/28)

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

## [Milestone End-to-end reliability protocol](https://github.com/waku-org/pm/milestone/29)

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

## [Milestone Static Sharding - dedicated shards](https://github.com/waku-org/pm/milestone/30)

Due Date: 2024-09-30

Creating a new community on its dedicated shard would be tested and working, including assigning a pre-shared key for opt-in message signing (weak DoS protection).

Community creation on a default shard (32) to remain (up to app team to hide button or not) to enable mass creation of communities on shared shard for QA testing purposes.

Vac QA and DST are asked to look at Status Communities behaviour, whereas previously the focus was on direct messages reliability (one layer lower).

Finally, telemetry service will be updated to include bandwidth usage statistics, with a fine breakdown to understand top bandwidth consumers (control msg, chat msg, etc). Additionally, the DST team is asked to run simulations with a focus on bandwidth usage.

### Deliverable: [Telemetry: Measure Bandwidth](https://github.com/waku-org/pm/issues/195)

Add bandwidth measurements to the self-report (opt-in) telemetry service, including a message type breakdown (ctrl, chat, etc) when possible as well as other protocols such as discovery.
Usage of non-waku bandwidth should also be considered (bittorrent, RPC) to have a full picture in case of report of high bandwidth usage by users.

### Deliverable: [Sharding peer management and discovery hardening](https://github.com/waku-org/pm/issues/172)

Further testing and improvement of peer management in the context of sharding in all Waku implementations. The aim is to ensure that nodes are connected to other nodes of interested shards. As the number of shards (several communities) increase, some improvement on the logic should be needed.

(1) nwaku and go-waku need to follow the same pattern here in terms of relay peer management. For Relay peer management:
- remove named sharding to simplify peer management
- review per-shard peer management metrics (e.g. mesh health per subscribed shard)
- monitor and adapt peer management strategy across both go-waku and nwaku for various shard subscription scenarios (e.g. up to 100 pubsub topic subscriptions) in an integrated deployment

(2) go-waku and nwaku should also follow the same patterns in terms of managing filter/ligh tpush clients (i.e. always keep a predictable amount of open slots for clients) with similar steps to the above to harden the strategy
(3) go-waku and js-waku should follow the same patterns in terms of managing service peers within clients.
(4) Capture recommendations in an RFC and use it as a discussion and decision medium across implementations.

### Deliverable: [Enable testing of custom shard implementation for Communities](https://github.com/waku-org/pm/issues/196)

Create/update CLI with REST API to enable creation and usage of static communities on own dedicated shard for Vac/QA to proceed with testing of various scenarios.
This CLI should also enable running simulations of bandwidth usage by communities, including ctrl messages.
This includes the setup of a pre-shared key to protect the shard and fixing any bug reported.

Note that the ability to create communities on a custom shard and assign a pre-shared key for DoS protection is already implemented in status-go.

Note that telemetry service should include shard specific reports.

## [Milestone Bandwidth optimization and protocol review](https://github.com/waku-org/pm/milestone/31)

Due Date: TBD

Bandwidth measurement from the previous milestone may lead to improvement that should be tackled with this milestone. This should be done in tandem with tackling low-hanging/high value items of the [Status Community protocols potential scaling problems](https://github.com/vacp2p/research/issues/177).

Finally, usage of content topics should be reviewed to align with Waku’s recommendation, clear migration strategy, caveat and benefits should be outlined, such as future usage of auto-sharding and reduction of topics used by a single user for more efficient use of services.

### Deliverable: [Status Communities protocol scaling/bandwidth optimization recommendation](https://github.com/waku-org/pm/issues/197)

Some of the [Status Communities protocols potential scaling problems](https://github.com/vacp2p/research/issues/177) have already been mitigated. However, further work may be needed and identified from simulations and telemetry.

The output of this deliverable is to compile a list of recommendations, for both Waku and Status Communities protocol. This should include potential benefits of changes and enable scheduling the work between Status and Waku teams.
Decision on the work to be done and planning it should be part of the output of this milestone.

This could include review of discv5 implementation in go-waku and nwaku if bandwidth usage is excessive.

### Deliverable: [Review usage of content topics in Status Chat and Communities protocol](https://github.com/waku-org/pm/issues/198)

The usage of content topics in Status is aligned with Wakuv1. Waku v2 comes with a new recommended format that enables auto-sharding.
Moreover, single Status users currently use a high number of content topics, which may have an impact on performance of req-res protocols such as store and filter.
Such impact is to be measured in a previous milestone by Vac DST.

The output of this deliverable should be an RFC update on how content topics should be used, backed with simulations when performance improvement is expected.
It should include migration strategy and potential impact on the product.

## [Milestone Scale up number of Communities](https://github.com/waku-org/pm/milestone/32)

Due Date: TBD

Proceed with next steps to scale up the number of communities with a focus on testing and configure rendezvous which would enable a large number of communities on their own shard, with the caveat of a more federated global topology.
The rendezvous nodes of a community would be a centralised infra to a community.

Also proceed with enhancing of the current decentralised discovery protocol to pave the way towards less centralised topology.

### Deliverable: [Usage of rendezvous](https://github.com/waku-org/pm/issues/199)

Test libp2p rendezvous in nwaku (server) and go-waku (client) to have it ready as a replacement of discv5 to enable over 100 communities.
This should mainly be around configuration, testing and potential bug fixing.
Rendezvous discovery is federated-like and non-private. It is an existing libp2p protocol.

### Deliverable: [DoS protection for req-res protocols and metrics (go-waku as service node)](https://github.com/waku-org/pm/issues/200)

Replicate the DoS protection (local rate limit) logic from nwaku to go-waku as Status Desktop do serve filter and light push node.
If Desktop nodes get DoS via light push/filter service, then it can be disabled, however this may compromise scalability of mobile and would involve deploying more fleet.
As the desktop/mobile ratio is uncertain, best to have this implemented.

## [Milestone Nwaku in Status Desktop (Relay, *nix)](https://github.com/waku-org/pm/milestone/33)

Due Date: TBD

With this milestone, Status Desktop builds on Linux and Mac can use nwaku instead of go-waku.
Go-waku will still be used for Windows (Desktop) and Status Mobile.

### Deliverable: [Nwaku in Golang desktop](https://github.com/waku-org/pm/issues/201)

Provide a Golang library that uses the nwaku bindings (relay+store API) in a desktop environment. The bindings must be usable without RLN for the context of Status Desktop application.

### Deliverable: [Nwaku in Golang: Relay](https://github.com/waku-org/pm/issues/202)

Expose and demonstrate the usage of relay protocols/API usef on go-waku by status-go in the Golang nwaku bindings.
Build on the previous by adding the APIs used by status-go in relay mode. Proceed with dogfooding of said APIs in PoC app to confirm their behaviour in Golang Desktop environment.
This includes work to ensure that the relay reliability protocol implemented in nwaku is used and other libp2p protocols such as autonat, circuit-relay client and hole-punching.

Light client protocols are out of scope.

### Deliverable: [Nwaku in Status Desktop (Relay, *nix)](https://github.com/waku-org/pm/issues/203)

Use nwaku instead of go-waku in Status Desktop and produce a working and distributable special (no light client) build for Linux and Mac OS environments.
“Light client” mode should be disabled for this build as only relay protocols are implemented.
Windows builds are also out of scope.

This includes an abstraction layer to enable the other builds to still use go-waku:
- Desktop Windows
- Desktop “prod” (with both light client and relay modes, via go-waku)
- Mobile

CLIs created for Vac/QA should also be produced with nwaku to enable QA and DST to run tests/simulations.

## [Milestone Scale 1:1 chat messages PoC](https://github.com/waku-org/pm/milestone/34)

Due Date: 2024-11-30

Improved flexibility of the rate limit (from 1 msg/epoch to N msg/epoch), providing better dimensioning for bandwidth capping.

Moving from RLNv1 to RLNv2 to allow better bandwidth dimensioning in the network. This will allow a message allocation per hour or day per registered publisher, providing better statistical guarantees for network bandwidth usage.

### Deliverable: [RLNv2 in nwaku](https://github.com/waku-org/pm/issues/204)

Improved flexibility of the rate limit (from 1 msg/epoch to N msg/epoch), providing better dimensioning for bandwidth capping.
Moving from RLNv1 to RLNv2 to allow better bandwidth dimensioning in the network. This will allow a message allocation per hour or day per registered publisher, providing better statistical guarantees for network bandwidth usage.
Note this only concerns native libraries using nwaku.

### Deliverable: [Maturing RLN variables/parameters revision (staking, contract/chain, token) - roadmap](https://github.com/waku-org/pm/issues/205)

*A review of RLN security parameters and functionality in preparation for mainnet deployment.*
Analyse RLN deployment in the Waku proto-network and evaluate its DoS protection performance as well as review with the Status app team the potential cost mode of RLN:
- Should staking be introduced, especially to improve resilience against adversarial membership registrations?
- Should slashing be introduced or does the existing gossipsub scoring method provide enough protection?
- Which chain or L2 should we target for memberships?
- What token should be used?
- Do we need a combination of msg/sec and msg allocation/day rate limiting?

### Deliverable: [Provision RLN for light push clients PoC](https://github.com/waku-org/pm/issues/206)

Design and implement a protocol that attaches RLN proof for messages received by light push services, enabling light clients to use the network without RLN.

With this deliverable, nwaku nodes deployed as service nodes lend their RLN memberships to light clients. Enabling Status app to offer a free tiers usage of RLN Relay for 1:1 chat messages.

This is a first PoC, learnings around RLN rate limit parameters, need of multiple RLN managements and service capability are expected to drive further development.

### Deliverable: [Pay for RLN provision first PoC](https://github.com/waku-org/pm/issues/207)

Proof of concept of paying for RLN provision to a light client by a service node.

A POC payment mechanism that incorporates PoC versions of the three Waku service marketplace elements:
- a price offer/negotiation mechanism
- a proof of payment system
- a local reputation mechanism to distinguish between "good" and "bad" service nodes

Such a PoC would enable discussion with the Status app team on a potential way to provide a paid tier to 1:1 chats users.
