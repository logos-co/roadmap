---
title: "Nomos Milestone: Full Base Layer Specification"
---
## `nomos:base-layer-spec:`
---
### Description
The initial milestone of the Nomos project is a full specification of the Base Layer. This entails detailed explanations of the working parts of the architecture and how they lay the groundwork for future layers to be built on top. The working parts are:
- A private P2P network
- Data availability
- A private Proof-of-State model leveraging a scalable, lightweight consensus algorithm

This work can be tracked via the following epics.

### Key Epics
#### `network-privacy:` [[nomos/base-layer-spec/network-privacy/overview|overview]]
- due: 
- progress: 
- short description: Creation of a privacy preserving network underlay

#### `private-pos:` [[nomos/base-layer-spec/priv-pos/overview|overview]]
- due: Sept 29, 2023
- progress: 
- short description: Creation of a Proof-of-Stake model that preserves the privacy of the stakers within the network

#### `data-availability:` [[nomos/base-layer-spec/data-avail/overview|overview]]
- due: 
- progress: 
- short description: Definition of how Nomos makes data available to network participants, and its reference implementation for the Base Layer.

### Dependent Upon:
#### `vac:dr:carnot-aggregation-spec`
- [[carnot-2-3rds-vote-aggregation]]

#### `vac:tke:stake-rewards`
- [[vac/tke/g/nomos/economic-analysis|economic-analysis]]