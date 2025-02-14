---
title: RLN Mainnet
tags:
    - waku-milestone
date: 2024-09-07
---

Github Milestone: https://github.com/waku-org/pm/milestone/34

Once complemented, the economical behaviour of RLN will have been specified, implemented and discussed with the Status team. An implementation of RLN for light clients will also be done, to demonstrate RLN’s UX with onchain Merkle tree. Finally, the smart contract will be deployed on mainnet.

It will be then possible to design the usage of RLN in Status.

## Deliverables

### [RLNv2 in nwaku](https://github.com/waku-org/pm/issues/204) -- Completed

Improved flexibility of the rate limit (from 1 msg/epoch to N msg/epoch), providing better dimensioning for bandwidth capping.
Moving from RLNv1 to RLNv2 to allow better bandwidth dimensioning in the network. This will allow a message allocation per hour or day per registered publisher, providing better statistical guarantees for network bandwidth usage.
Note this only concerns native libraries using nwaku.

### [Maturing RLN variables/parameters revision (staking, contract/chain, token) - roadmap](https://github.com/waku-org/pm/issues/205) -- Completed

*A review of RLN security parameters and functionality in preparation for mainnet deployment.*
Analyse RLN deployment in the Waku proto-network and evaluate its DoS protection performance as well as review with the Status app team the potential cost mode of RLN:
- Should staking be introduced, especially to improve resilience against adversarial membership registrations?
- Should slashing be introduced or does the existing gossipsub scoring method provide enough protection?
- Which chain or L2 should we target for memberships?
- What token should be used?
- Do we need a combination of msg/sec and msg allocation/day rate limiting?

### [Provision RLN for light push clients POC](https://github.com/waku-org/pm/issues/206) -- Completed

Design and implement a protocol that attaches RLN proof for messages received by light push services, enabling light clients to use the network without RLN.

With this deliverable, nwaku nodes deployed as service nodes lend their RLN memberships to light clients. Enabling Status app to offer a free tiers usage of RLN Relay for 1:1 chat messages.

This is a first PoC, learnings around RLN rate limit parameters, need of multiple RLN managements and service capability are expected to drive further development.

### [Implement RLN smart contract for paid, multilevel memberships](https://github.com/waku-org/pm/issues/256)

This deliverable is an output of Maturing RLN variables/parameters revision (staking, contract/chain, token) - roadmap.

Once we have matured the RLN parameters and specified a minimal set of (smart contract) features for a production-ready membership mechanism, the proposed smart contract changes must be implemented. This also implies implementing each feature in the different Waku clients as needed.
Initial discussion indicates that our minimal feature set include:
- Paid RLN memberships
- RLN memberships at different rate-limit tiers
- Expiry of memberships to prevent hogging
- Support for RLN in resource-restricted clients, i.e. lightweight proof generation and validation
The exact set of features is to be defined in a RFC, as output of Maturing RLN variables/parameters revision (staking, contract/chain, token) - roadmap.

### [RLN contract revision and audit](https://github.com/waku-org/pm/issues/257)

Once a minimal set of smart contract features for RLN has been implemented, the contract needs to be thoroughly revised (and possibly audited) by a group of experts before it can be used in production.
The Waku team will rely on Vac/SC to proceed/organise the smart contract review and audit.

### [Testnet L2 with on-chain tree](https://github.com/waku-org/pm/issues/286)

RLN smart contract is deployed on a testnet L2 and The Waku Network uses it for DoS protection. Nwaku uses the new contract ABI to get Merkle proof from the tree, instead of building the tree locally from contract events. Leading to faster setup and reduced resources.

### [RLNv2 Web management interface](https://github.com/waku-org/pm/issues/281)

Provide a web dapp to interact with the RLNv2 smart contract. Makes it the default way to register RLN for node operators and get the RLN keystore. This means operators will not need to pass an Ethereum private key to their node for registration anymore.

### [Deploy RLN smart contract to a L2 mainnet](https://github.com/waku-org/pm/issues/258)

The RLN smart contract should be deployed to a Layer 2 mainnet.

A first step here may be to deploy to a Layer 2 testnet first. However, we could deploy a test contract to a Layer 2 mainnet directly if it's easier. (A contract used for testing does not have to be productionised/audited before deployment to mainnet.)

This deliverable tracks all steps to deployment of a production version of the contract to a L2.

### [Public dogfooding RLNaaS web app](https://github.com/waku-org/pm/issues/259) -- Completed
Second part of original scope of dogfooding web app.

One of the proposed strategies to roll out RLN for Status 1:1 chats is to use RLNaaS where a service node attaches RLN proof for light clients. This would enable a roll out of RLN without impacting UX or UI.

However, this would decrease the security that RLN brings, so we need to further test this topology to better under risks and mitigate them, or drop this approach.

Deliver a gamified web app to allow further dogfooding of RLN. This should build on the previously delivered (internal) web app to collect reliability and performance metrics.
This may include capturing new metrics from the fleets to gather data and assess the viability of RLNaaS from this experiment.
