---
title: PPoS / Consensus
tags:
  - nomos-milestone
  - roadmap-2024
---
### Core Tasks

- Implement Proof of Leader Election
- Implement Proof of Validator (rather employed at other layers, but planning-wise it's better to consider it here)
- Full Analysis of Wealth Concentration using game-theoretical node behavior.
- Full Analysis of privacy leak due to orphan proofs

### Action Plan

The consensus protocol is the best-known piece of our design, given our extensive experience in the matter. However, its guarantees depend largely on the network layer, while all the remaining cryptographic components depend on the CL. These two is where our focus is on. Besides this, most of the deliverables are advanced-stage components, meaning that they are the last pieces remaining.

The road towards finalization looks as follows:

1. Implement the 2 proofs. This depends on the Coordination Layer.
2. Fully analyze the remaining open questions (wealth concentration and privacy leaks via orphan proofs). The work on wealth concentration is scheduled to start soon.