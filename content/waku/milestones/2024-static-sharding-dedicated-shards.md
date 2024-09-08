---
title: Static Sharding - dedicated shards
tags:
    - waku-milestone
date: 2024-09-07
---

[Milestone Static Sharding - dedicated shards](https://github.com/waku-org/pm/milestone/30)

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