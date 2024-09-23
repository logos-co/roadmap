---
title: Coordination Layer
tags:
  - nomos-milestone
  - roadmap-2024
---
### Core Tasks

- Define data model (ie UTXO + partial transactions)
- Select proving system. This could potentially become a very large project, requiring tooling and compiler development. But we should try by all means using a ZK system with a compiler readily available.
- Provide the necessary tools for a ZK engineer to develop the 3 proofs and experimental Zone bridges.

### Action Plan

The stages of research and development for the CL are as follow:

1. **Phase 1: Design CL data model.** We need a simple, expressive transaction system that supports synchronous composability. The output from this phase will be a CL specification focused on supporting one key feature: *private atomic asset transfers between zones*.
2. **Phase 2: Choose ZK system.** The single most important task of the research team in this work-stream is to make the fundamental choices that will allow us to build the foundation as fast as possible for a usable CL. This has to be done carefully and considering the specific use case of ZK in the CL, with the requirements that we have.
3. **Phase 3: Build the minimal system for protocol dependencies.** After this, we need to put a minimal system in place, so that the 3 proofs of the protocol can be built. This is a big blocker for the network privacy and PPoS protocols, so it needs to be the primary implementation objective.
4. **Phase 4 (partially in 2024): Develop the CL tooling and integration to unlock more complex engineering feats.** This will be a larger task, and not assumed to be finished by 2024. These include:
    1. Zone bridges
    2. Synchronous composability
    3. Aggregation/Solving layer