---
title: Codex RFC Effort (extended)
tags:
  - 2024Q4
  - rfc
  - codex
draft: true
description: Commitment around writing RFCs for Codex
---

`ift:rfc:codex:rfc-documentation-2024q4`

## Description

This commitment revolves around creating the set of RFCs based on the documentation and codebase provided by the Codex team. The team plans jumpstart the RFC culture within the Codex ecosystem, assisting the engineers and the users with the extensive documentation with regards to the codebase.

The initial RFCs we will be focusing on are Erasure Coding and Storage. These 2 have been picked as the initial ones due to their completion state.

**Alignment with VAC Narratives:**

* The VAC RFC team plans to become a repository for RFCs regarding all the IFT projects, Codex included. 
* By educating and implementing the RFC Culture, we want to have projects apply their RFCs to the team of rfc-editors, in the future.
* One of our ideals is to have the broader web3 community utilize our RFCs to potentially implement within their projects and ecosystems (similar to how [IETF](https://www.ietf.org/) works). 

## Task List

### Erasure Coding

* fully qualified name: `ift:rfc:codex:initial-rfcs:erasure coding`
* owner: jimstir
* status: started
* start-date: 
* end-date: 2024/12/31

#### Description 
This specification describes the erasure coding technique used in the Codex protocol.
Erasure coding is used by the Codex client to encode datasets being presented to the marketplace. 

Codex uses storage proofs to determine whether a storage provider is storing a certain dataset. Storage providers agree to store dataset for a period of time and store an encoded dataset provided by the requester. Using erasure coding, client nodes will be able to restore datasets that are abandoned by storage providers. Also validator nodes are able to detect whether data is missing within a slot.

#### Deliverables 
* RFC file (fully reviewed and approved by the Codex team)

### Marketplace

* fully qualified name: `ift:rfc:codex:initial-rfcs:marketplace
* owner: jimstir
* status: started
* start-date: 
* end-date: 2024/12/31

#### Description 

The marketplace is a critical component of the Codex network, serving as a platform where all involved parties interact to ensure data persistence. It provides mechanisms to enforce agreements and facilitate data repair when storage providers (SPs), fail to fulfill their duties.

Codex Marketplace and its interactions are defined by a smart contract deployed on an EVM-compatible blockchain. This specification describes these interactions for the various roles within the network.

#### Deliverables 
* RFC file (fully reviewed and approved by the Codex team)