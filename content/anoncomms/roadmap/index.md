---
title: AnonComms Roadmap
tags:
  - milestones
  - deliverables
  - roadmap
  - anoncomms
---

## Roadmap Overview

The AnonComms team is currently working on the following features, required for mainnet:

1. [Create a basic service discovery module for Logos Core](/anoncomms/roadmap/discovery.md), by defining an efficient service discovery protocol over libp2p kad-DHT.
2. [Establish a libp2p mixnet for Logos Core](/anoncomms/roadmap/mix.md), with a special focus on DoS/Sybil protection and delivering privacy-preserving file sharing in collaboration with the Logos Storage team.
3. [Deliver de-MLS for p2p group messaging](/anoncomms/roadmap/de-mls.md), with a special focus on integration in the Logos Chat module.
4. [Implement RLN membership allocation service for Logos Core](/anoncomms/roadmap/rln.md), including translating RLN to run in the Logos Execution Zone (LEZ)
5. [Research and develop an LEZ-compatible Decentralised Oracle Network](/anoncomms/roadmap/oracle.md), in support of features such as a stablecoin

Of these, (1) and (2) are the most critical,
as basic service discovery and routing anonymity
will be foundational to much of the Logos Core infrastructure.

In addition, the team is also working on tracks,
that either target post-mainnet features
or are not critical for mainnet launch.

6. [Implement an MVP payment protocol](/anoncomms/roadmap/incentivisation.md) that exploits Logos Blockchain/Nescience to allow privacy-preserving, mostly off-chain payments to service providers.
7. [Maintain and expand the Zerokit library](/anoncomms/roadmap/zerokit.md) that improves usability and add big-endian support.
8. [Support gasless L2 transactions](/anoncomms/roadmap/gasless-l2.md) on Status Network, including publishing a whitepaper.
9. [Develop the λAccount identity primitive](/anoncomms/roadmap/identity.md), a VLAD-based identity anchor developed cross-team with Logos Chat, extending to Blockchain and Storage needs.

## Testnet Milestones

The work is split into milestones, according to the targeted Logos testnet/releases

### Testnet v0.1

Features critical for the testnet:

- [x] [Service Discovery Testnet v0.1 Deliverables](/anoncomms/roadmap/testnet_v0.1/discovery_v0.1.md)
- [x] [Mix Testnet v0.1 Deliverables](/anoncomms/roadmap/testnet_v0.1/mix_v0.1.md)

Non-critical features explored within testnet scope:

- [x] [Service Incentivisation Testnet v0.1 Deliverables](/anoncomms/roadmap/testnet_v0.1/incentivisation_v0.1.md)
- [x] [De-MLS Testnet v0.1 Deliverables](/anoncomms/roadmap/testnet_v0.1/de-mls_v0.1.md)
- [x] [Zerokit Testnet v0.1 Deliverables](/anoncomms/roadmap/testnet_v0.1/zerokit_v0.1.md)
- [x] [Gasless L2 Testnet v0.1 Deliverables](/anoncomms/roadmap/testnet_v0.1/gasless-l2_v0.1.md)
- [x] [RLN Testnet v0.1 Deliverables](/anoncomms/roadmap/testnet_v0.1/rln_v0.1.md)

### Testnet v0.2

Features critical for the testnet:

- [x] [Service Discovery Testnet v0.2 Deliverables](/anoncomms/roadmap/testnet_v0.2/discovery_v0.2.md)
- [x] [Mix Testnet v0.2 Deliverables](/anoncomms/roadmap/testnet_v0.2/mix_v0.2.md)
- [x] [De-MLS Testnet v0.2 Deliverables](/anoncomms/roadmap/testnet_v0.2/de-mls_v0.2.md)
- [x] [Identity Track Testnet v0.2 Deliverables](/anoncomms/roadmap/testnet_v0.2/identity_v0.2.md)

Non-critical features explored within testnet scope:

- [x] [Service Incentivisation Testnet v0.2 Deliverables](/anoncomms/roadmap/testnet_v0.2/incentivisation_v0.2.md)
- [x] [Zerokit Testnet v0.2 Deliverables](/anoncomms/roadmap/testnet_v0.2/zerokit_v0.2.md)
- [x] [RLN Testnet v0.2 Deliverables](/anoncomms/roadmap/testnet_v0.2/rln_v0.2.md)
- [x] [Oracle Testnet v0.2 Deliverables](/anoncomms/roadmap/testnet_v0.2/oracle_v0.2.md)

#### Modules

For Testnet v0.2, the AnonComms team have responsibilities within the following critical Logos modules:

- Logos Chat module:
  - De-MLS backed group chat implementation
  - Mix-based publishing _with demo-version pluggable DoS protection based on RLN_
  - Basic RLN integration for Mix DoS protection and RLN-Relay publishing
  - Basic service discovery integration

- Service discovery module
  - Module is provided by P2P team, but supported/red teamed by AnonComms

Although not critical for the testnet,
the AnonComms team aim to have the following optional features as part of Testnet v0.2 at the end of Q2:

- Logos Chat module:
  - RLN membership allocation for mix (demo client mode)
  - _Integration_ of service discovery module

- Demo RLN membership allocation module
  - distributes RLN memberships in off-chain protocol based on pluggable authentication
  - demo mode: authentication might be simple signature
  - demo mode: RLN on-chain memberships might be stubbed/not fully migrated to LEZ yet

- Demo Store payment module
  - demonstrates the payment protocol functioning end-to-end for accessing Waku Store services

### Testnet v0.3

Features critical for the testnet:

- [ ] [Service Discovery Testnet v0.3 Deliverables](/anoncomms/roadmap/testnet_v0.3/discovery_v0.3.md)
- [ ] [Identity Track Testnet v0.3 Deliverables](/anoncomms/roadmap/testnet_v0.3/identity_v0.3.md)
- [ ] [Mix Testnet v0.3 Deliverables](/anoncomms/roadmap/testnet_v0.3/mix_v0.3.md)
- [ ] [Oracle Testnet v0.3 Deliverables](/anoncomms/roadmap/testnet_v0.3/oracle_v0.3.md)
- [ ] [RLN Testnet v0.3 Deliverables](/anoncomms/roadmap/testnet_v0.3/rln_v0.3.md)
- [ ] [De-MLS Testnet v0.3 Deliverables](/anoncomms/roadmap/testnet_v0.3/de-mls_v0.3.md)

Non-critical features explored within testnet scope:

- [ ] [Service Incentivisation Testnet v0.3 Deliverables](/anoncomms/roadmap/testnet_v0.3/incentivisation_v0.3.md)
- [ ] [Zerokit Testnet v0.3 Deliverables](/anoncomms/roadmap/testnet_v0.3/zerokit_v0.3.md)

### Mainnet

- [ ] [Identity Track Mainnet Deliverables](/anoncomms/roadmap/mainnet/identity_mainnet.md)
