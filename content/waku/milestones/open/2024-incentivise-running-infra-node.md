---
title: Incentivise running a Waku infrastructure node
tags:
    - waku-milestone
date: 2024-09-07
---

##  Milestone: [Incentivise running a Waku infrastructure node](https://github.com/waku-org/pm/milestone/35)

By the end of this milestone, we will have defined a roadmap and implemented a working proof of concept to incentivise node operators running Waku infrastructure for shared shards. In general, Waku infrastructure consists of RLN Relay nodes both forming the decentralised routing backbone for Waku messages and providing a set of services on top of Waku that might be useful for applications. A sustainable Waku infrastructure is necessary within Status to achieve scalability for 1:1 chats and permissionless communities. These Status features use RLN rate-limiting on shared shards as supported by the RLN relay nodes and require a set of decentralised services for Status Mobile and resource-restricted clients, including RLN proofs as a service, Store, Filter and Lightpush. This milestone encapsulates the efforts to distribute rewards for running RLN Relay nodes and getting paid for providing Waku services. This is the first step to providing a sustainable way to scale the Status application.

### Deliverable: [RLN Relay Incentivisation - Distribute RLN fees PoC](https://github.com/waku-org/pm/issues/243)

Proof of concept mechanism for distributing RLN membership fees to RLN relay nodes based on an on-chain consensus mechanism for routed messages. Publishers over an RLN-controlled network pay membership fees, which entitle them to send a given amount of messages per unit of time while the membership remains active. Currently these membership fees are not used and are simply returned on membership expiry. These fees can be used to incentivise the RLN relay nodes that support the rate-limited infrastructure by routing and validating messages.

### Deliverable: [RLN Relay Incentivisation - RLN fee sharing roadmap & spec](https://github.com/waku-org/pm/issues/244)

Based on learnings from the PoC, formalise a basic specification for RLN fee sharing and message consensus. The specification should be published alongside an implementation roadmap that makes the next steps clear.

### Deliverable: [Service Incentivisation - Pay for RLN provision PoC](https://github.com/waku-org/pm/issues/245)

Proof of concept of paying for RLN provision to a light client by a service node.

A POC payment mechanism that incorporates PoC versions of the three Waku service marketplace elements:
- a price offer/negotiation mechanism
- a proof of payment system
- a local reputation mechanism to distinguish between "good" and "bad" service nodes

Such a PoC would enable discussion with the Status app team on a potential way to provide a paid tier to 1:1 chats users.

### Deliverable: [Service Incentivisation - Service incentivisation roadmap & spec](https://github.com/waku-org/pm/issues/246)

Based on learnings from the PoC, formalise a basic specification for general service incentivisation. The specification should be published alongside an implementation roadmap that makes the next steps clear.
