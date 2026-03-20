---
title: AnonComms Roadmap
tags:
  - milestones
  - deliverables
  - roadmap
  - anoncomms
---

## Roadmap Overview

### Mainnet Tracks

The AnonComms team is currently working on the following features, required for Mainnet:

1. [Create a basic capability discovery module for Logos Core](./discovery.md), by defining an efficient capability discovery protocol over libp2p kad-DHT.
2. [Establish a libp2p mixnet for Logos Core](./mix.md), with a special focus on DoS/Sybil protection and delivering privacy-preserving file sharing in collaboration with the Logos Storage team.
3. [Deliver de-MLS for p2p group messaging](./de-mls.md), with a special focus on integration in the Logos Chat module.
4. [Implement RLN membership allocation service for Logos Core](./rln.md), including translating RLN to run in the Logos Execution Zone (LEZ)
5. [Develop an oracle system compatible with the Logos Execution Zone](./oracle.md), in support of features such as a stablecoin

Of these, (1) and (2) are the most critical,
as basic capability discovery and routing anonymity
will be foundational to much of the Logos Core infrastructure.

### Parallel Tracks

In addition, the team is also working on parallel tracks,
that either target post-mainnet features
or tracks support tasks.
6. [Implement an MVP payment protocol](./incentivisation.md) that exploits Logos Blockchain/Nescience to allow privacy-preserving, mostly off-chain payments to service providers.
7. [Maintain and expand the Zerokit library](./zerokit.md) that improves usability and add big-endian support.
8. [Support gasless L2 transactions](./gasless-l2.md) on Status Network, including publishing a whitepaper.

## Testnet Milestones

The Mainnet work is split into milestones, according to the targeted Logos testnet/releases

### Testnet v0.1

- [Capability Discovery Testnet v0.1 Deliverables](../roadmap/2026_Q1/discovery_v0.1.md)
- [Mix Testnet v0.1 Deliverables](../roadmap/2026_Q1/mix_v0.1.md)

### Testnet v0.2

- [Capability Discovery Testnet v0.2 Deliverables](../roadmap/2026_Q2/discovery_v0.2.md)
- [Mix Testnet v0.2 Deliverables](../roadmap/2026_Q2/mix_v0.2.md)
- [De-MLS Testnet v0.2 Deliverables](../roadmap/2026_Q2/de-mls_v0.2.md)

#### Modules

For Testnet v0.2, the AnonComms team have responsibilities within the following Logos modules:

- Logos Chat module:
  - De-MLS backed group chat implementation
  - Mix-based publishing _with demo-version pluggable DoS protection based on RLN_
  - Basic RLN integration for Mix DoS protection and RLN-Relay publishing
  - Basic capability discovery integration

- Capability discovery module
  - Module is provided by P2P team, but supported/red teamed by AnonComms

## Parallel Milestones

Efforts that are not critical for testnet releases,
are tracked in separate milestones, according to the targeted date of completion

### Q1 2026

- [Service Incentivisation Testnet v0.1 Deliverables](../roadmap/2026_Q1/incentivisation_v0.1.md)
- [De-MLS Testnet v0.1 Deliverables](../roadmap/2026_Q1/de-mls_v0.1.md)
- [Zerokit Testnet v0.1 Deliverables](../roadmap/2026_Q1/zerokit_v0.1.md)
- [Gasless L2 Testnet v0.1 Deliverables](../roadmap/2026_Q1/gasless-l2_v0.1.md)
- [RLN Testnet v0.1 Deliverables](../roadmap/2026_Q1/rln_v0.1.md)

### Q2 2026

- [Service Incentivisation Testnet v0.2 Deliverables](../roadmap/2026_Q2/incentivisation_v0.2.md)
- [Zerokit Testnet v0.2 Deliverables](../roadmap/2026_Q2/zerokit_v0.2.md)
- [RLN Testnet v0.2 Deliverables](../roadmap/2026_Q2/rln_v0.2.md)
- [Oracle Testnet v0.2 Deliverables](../roadmap/2026_Q2/oracle_v0.2.md)

#### Modules

Although not critical for the testnet,
the AnonComms team aim to have the following optional features as part of Testnet v0.2 at the end of Q2:

- Logos Chat module:
  - RLN membership allocation for mix (demo client mode)
  - _Integration_ of capability discovery module

- Demo RLN membership allocation module
  - distributes RLN memberships in off-chain protocol based on pluggable authentication
  - demo mode: authentication might be simple signature
  - demo mode: RLN on-chain memberships might be stubbed/not fully migrated to LEZ yet

- Demo Store payment module
  - demonstrates the payment protocol functioning end-to-end for accessing Waku Store services