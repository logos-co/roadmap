---
title: Deploy RLN onchain tree on L2 Testnet
tags:
    - messaging-milestone
date: 2024-09-07
---


**Resources Required for 2025H2**:
- 1.5 core researchers for 1 month

By the end of this milestone, we will have defined a roadmap and implemented a working proof of concept to incentivise node operators running Waku infrastructure for shared shards.

In general, Waku infrastructure consists of RLN Relay nodes both forming the decentralised routing backbone for Waku messages and providing a set of services on top of Waku that might be useful for applications.
A sustainable Waku infrastructure is necessary within Status to achieve scalability for 1:1 chats and permissionless communities.
These Status features use RLN rate-limiting on shared shards as supported by the RLN relay nodes
and require a set of decentralised services for Status Mobile and resource-restricted clients,
including RLN proofs as a service, Store, Filter and Lightpush.
This milestone encapsulates the efforts to distribute rewards for running RLN Relay nodes and getting paid for providing Waku services.
This is the first step to providing a sustainable way to scale the Status application.

## Strategic Objective

Logos Vision: Core Values Alignment

## FURPS
- [Incentivisation](/messaging/furps/core/incentivisation.md): F1-3, U1-2, R1-3, P1, for S1

## Risks

| Risk                                       | (Accept, Own, Mitigation)                     |
|--------------------------------------------|-----------------------------------------------|
| Heavy on research and unknowns, UX impacts | Identify concrete deliverables, dogfood early |