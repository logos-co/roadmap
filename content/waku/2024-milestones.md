---
title: 2024 Milestones
date: 2024-06-04
---
## Gantt Chart

[[content/waku/2024-gantt]]

## Milestones and Deliverables

### Store Service Upgrade

https://github.com/waku-org/pm/milestone/27
Due Date: 2024-09-20

With this milestone, the store protocol becomes more easily usable for reliability purposes.
Moreover, nwaku PostgreSQL implementation will enable better disk space management and enable operators to hard cap the used disk space.

### Direct Message Reliability
Due Date: 2024-09-02

https://github.com/waku-org/pm/milestone/28

With this milestone, connectivity issues in Status Mobile and Desktop are solved and tested.
Usage of store v3-beta casts a wide net on potential message loss, at the cost of bandwidth overhead (but still lower than current usage of storev2).

Review of MVDS usage for all direct messages is done to ensure that critical messages (request to join, contact request, 1:1 messages, private group) are delivered.

### End-to-end reliability protocol

https://github.com/waku-org/pm/milestone/29
Due Date: 2024-09-02

To solve reliability is to solve two problems:

1. High heuristic that messages are received and sent
2. Ability to know whether messages are received or sent

Problem (1) can never be 100% reliable in a network environment. The previous milestones focused on it.

To solve (2), is to create an end-to-end protocol, sender to recipient, that enables the ability to know whether recipient(s) have received messages.

With this milestone, we design and deliver a first PoC for an end-to-end reliability protocol.
This protocol will be specified and implemented in the Status app for Status Communities chat rooms.

### Static Sharding - dedicated shards

https://github.com/waku-org/pm/milestone/30
Due Date: 2024-09-30

Creating a new community on its dedicated shard would be tested and working, including assigning a pre-shared key for opt-in message signing (weak DoS protection).

Community creation on a default shard (32) to remain (up to app team to hide button or not) to enable mass creation of communities on shared shard for QA testing purposes.

Vac QA and DST are asked to look at Status Communities behaviour, whereas previously the focus was on direct messages reliability (one layer lower).

Finally, telemetry service will be updated to include bandwidth usage statistics, with a fine breakdown to understand top bandwidth consumers (control msg, chat msg, etc). Additionally, the DST team is asked to run simulations with a focus on bandwidth usage.

### Bandwidth optimization and protocol review

https://github.com/waku-org/pm/milestone/31
Due Date: TBD

Bandwidth measurement from the previous milestone may lead to improvement that should be tackled with this milestone. This should be done in tandem with tackling low-hanging/high value items of the [Status Community protocols potential scaling problems](https://github.com/vacp2p/research/issues/177).

Finally, usage of content topics should be reviewed to align with Waku’s recommendation, clear migration strategy, caveat and benefits should be outlined, such as future usage of auto-sharding and reduction of topics used by a single user for more efficient use of services.

### Scale up number of Communities

https://github.com/waku-org/pm/milestone/32
Due Date: TBD

Proceed with next steps to scale up the number of communities with a focus on testing and configure rendezvous which would enable a large number of communities on their own shard, with the caveat of a more federated global topology.
The rendezvous nodes of a community would be a centralised infra to a community.

Also proceed with enhancing of the current decentralised discovery protocol to pave the way towards less centralised topology.

### Nwaku in Status Desktop (Relay, *nix)

https://github.com/waku-org/pm/milestone/33
Due Date: TBD

With this milestone, Status Desktop builds on Linux and Mac can use nwaku instead of go-waku.
Go-waku will still be used for Windows (Desktop) and Status Mobile.

### Scale 1:1 chat messages PoC

https://github.com/waku-org/pm/milestone/34
Due Date: 2024-11-30

Improved flexibility of the rate limit (from 1 msg/epoch to N msg/epoch), providing better dimensioning for bandwidth capping.

Moving from RLNv1 to RLNv2 to allow better bandwidth dimensioning in the network. This will allow a message allocation per hour or day per registered publisher, providing better statistical guarantees for network bandwidth usage.
