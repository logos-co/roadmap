---
title: Scale up number of Communities
tags:
    - waku-milestone
date: 2024-09-07
---

[Milestone Scale up number of Communities](https://github.com/waku-org/pm/milestone/32)

Estimated Date of Completion: 2024-11-30

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