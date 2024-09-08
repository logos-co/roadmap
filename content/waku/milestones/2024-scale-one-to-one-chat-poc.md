---
title: Scale 1 to 1 chat messages PoC
tags:
    - waku-milestone
date: 2024-09-07
---

[Milestone Scale 1:1 chat messages PoC](https://github.com/waku-org/pm/milestone/34)

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