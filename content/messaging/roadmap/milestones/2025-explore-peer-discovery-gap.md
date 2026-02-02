---
title: Explore Peer Discovery Gap
tags:
    - messaging-milestone
date: 2025-02-10
---
EDC: 2025-06-30

Github Milestone: https://github.com/waku-org/pm/milestone/44

The current peer discovery protocols, discv5, is limited in regards to finding peers with specific characteristics (shards, mounted protocols, etc). As such characteristics are filtered after the fact, and not part of the random walk mechanism.

This implementation impedes the decentralization of store services and implementation of a mixnet.

In this milestone, we will implement PoCs for those two features, to highlight the caveats of discv5 and define requirements for an upgrade of the peer discovery for Waku.

## Deliverables

### [Waku Sync](https://github.com/waku-org/pm/issues/132)

Design and implement a protocol that enables message set discrepancy identification and resolution; to enable synchronisation of latest messages in store nodes in a decentralized manner. This is a re-attempt of store v3 - synchronisation 2024H2 deliverable, using learnings from the first attempt.

### Experiment with decentralized store and SDS

Use Waku with decentralized store nodes (currently fleet store nodes are hardcoded), in combination with SDS and Waku Sync to assess behaviour and caveats.

Proceed with local and extended simulations, as well as use this behaviour in web apps on TWN (Qaku, Forum). The output will be bug fixes and documentation on next steps (e.g. peer discovery protocols).

### [Mixnet PoC](https://github.com/waku-org/pm/issues/291)

Write  a short specification describing Waku integration of libp2p mix protocol, including details on interfacing with Waku Discovery methods, spam-protection (RLN), and other Waku-related concerns. This must be followed by a PoC implementation mixing Waku Lightpush and Store requests and responses. It will be necessary to collaborate with the Vac p2p subteam to interpret and mature the libp2p spec and implementation simultaneously.

### Mixnet MVP roadmap

Write a post of the next step to get libp2p-mixnet in Waku to MVP stage. This may include specific requirements for libp2p-mixnet or other protocols (e.g. peer capability discovery).
