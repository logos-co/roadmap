---
title: Explore Peer Discovery Gap
tags:
    - waku-milestone
date: 2025-02-10
---

Github Milestone: https://github.com/waku-org/pm/milestone/44

The current peer discovery protocols, discv5, is limited in regards to finding peers with specific characteristics (shards, mounted protocols, etc). As such characteristics are filtered after the fact, and not part of the random walk mechanism.

This implementation impedes the decentralization of store services and implementation of a mixnet.

In this milestone, we will implement PoCs for those two features, to highlight the caveats of discv5 and define requirements for an upgrade of the peer discovery for Waku.

### Deliverable: [Waku Sync]()

### Deliverable: [Experiment with decetralized store and SDS]()

### Deliverable: [Mixnet PoC](https://github.com/waku-org/pm/issues/291)

Write  a short specification describing Waku integration of libp2p mix protocol, including details on interfacing with Waku Discovery methods, spam-protection (RLN), and other Waku-related concerns. This must be followed by a PoC implementation mixing Waku Lightpush and Store requests and responses. It will be necessary to collaborate with the Vac p2p subteam to interpret and mature the libp2p spec and implementation simultaneously.

### Deliverable: [Mixnet MVP roadmap]()