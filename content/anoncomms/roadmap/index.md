---
title: AnonComms Roadmap
tags:
  - milestones
  - deliverables
  - roadmap
  - anoncomms
---

## Roadmap Overview

The AnonComms team is currently working on the following tracks:

1. [Create a basic capability discovery module for Logos Core](./discovery.md), by defining an efficient capability discovery protocol over libp2p kad-DHT.
2. [Establish a libp2p mixnet for Logos Core](./establish_libp2p_mixnet.md), with a special focus on getting pluggable Sybil and DoS protection right.
3. [Deliver de-MLS for p2p group messaging](./deliver_de-mls_api.md), with an API supporting multiple stewards and advanced group management.
4. [Implement an MVP payment protocol](./incentivisation.md) that exploits Logos Blockchain/Nescience to allow privacy-preserving, mostly off-chain payments to service providers.
5. [Rework and deliver a public Zerokit 1.0 API](./deliver_public_zerokit_1.0_api.md) that improves usability and add big-endian support.
6. [Release an RLN Prover to support gasless L2 transactions](./release-rln-prover_for_gasless_l2.md) on Status Network, including publishing a whitepaper.
7. [Implement RLN membership allocation service for Logos Core](./implement_rln_membership_allocation.md), including translating RLN to the Logos Blockchain environment

Of these, (1) and (2) are the team's current top priorities,
as both capability discovery and mixifying libp2p protocols
are critical for the launch of Logos.

## Milestones

The work is split into milestones, according to the targeted Logos testnet/releases

### Testnet v0.1

- [Capability Discovery Testnet v0.1 Deliverables](../roadmap/testnet_v0.1/discovery_v0.1.md)
- [Service Incentivisation Testnet v0.1 Deliverables](../roadmap/testnet_v0.1/incentivisation_v0.1.md)

### Testnet v0.2

- [Capability Discovery Testnet v0.2 Deliverables](../roadmap/testnet_v0.2/discovery_v0.2.md)
- [Service Incentivisation Testnet v0.2 Deliverables](../roadmap/testnet_v0.2/incentivisation_v0.2.md)

#### Modules

For Testnet v0.2, the AnonComms team have responsibilities within the following Logos modules:

- Logos Chat module:
  - De-MLS backed group chat implementation
  - Mix-based publishing _with demo-version pluggable DoS protection based on RLN_
  - RLN membership allocation for mix (demo client mode)
  - Capability discovery API and module integration

- Capability discovery module
  - Module is provided by P2P team, but supported/red teamed by AnonComms

- Demo RLN membership allocation module
  - distributes RLN memberships in off-chain protocol based on pluggable authentication
  - demo mode: authentication might be simple signature
  - demo mode: RLN on-chain memberships might be stubbed/not fully migrated to LEZ yet

- Demo Store payment module
  - demonstrates the payment protocol functioning end-to-end for accessing Waku Store services