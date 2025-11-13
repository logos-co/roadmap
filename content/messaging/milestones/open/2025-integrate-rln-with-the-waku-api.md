---
title: Integrate RLN With the Waku API
tags:
    - waku-milestone
date: 2025-09-30
---
Github Milestone: https://github.com/waku-org/pm/milestone/52

Deliver a native RLN library with a deliberate API to manage RLN memberships, as well as proof verification and generation. This includes extracting RLN Relay as a relay plugin validation strategy, that can then be passed internally to nwaku node as any other strategy.

Once delivered, usage of Chat SDK of RLN becomes possible, with clear API to instantiate nwaku library with RLN, as well as API to manage RLN membership.

Introduce RLN proof generation and validation in the Browser. RLN API should be similar across all implementations.

Finally, migrate to Status network L2 testnet and improve UX issues discovered via dogfooding such as rate of RPC Calls.