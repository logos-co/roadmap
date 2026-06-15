# Blockchain EmPoWering

EmPoWering is a proof-of-work on-ramp for the Logos Blockchain. It lets new participants earn their way into the system by performing computational work. We aim to support entry without the high-friction path of first buying tokens, effectively a "free-tier" that would be sufficient for very low throughput applications and provides a gentler onboarding slope for users wanting to use applications on the network.

## Resources Required

- 2 Researchers
- 2 Engineers

## Risks

- Current design makes use of Poseidon2 as a SNARK-friendly puzzle. This is easy to accelerate on GPU/FPGA/ASIC hardware, which could undermine fair reward distribution; puzzles may need to be decoupled so each is optimized for its own domain
- Blend's network activity is not all visible on chain, so getting a clean signal for the PoW difficulty adjustment may be difficult
- The reward economics rest on a single parameterization; the required analysis (reward trajectory, pool stability, bootstrap security, inflation bounds) must back the design before it can advance

## Deliverables

### Proof-of-Work Blend Access

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Amend the Blend Protocol so any participant can earn private-messaging access through proof of work. Extends Proof of Quota to a three-branch disjunction (core, leader, proof-of-work), protects the edge-to-core boundary against spam, and generalizes Blend payloads to carry transactions as well as block proposals — enlarging the anonymity set and making edge-node leader traffic indistinguishable from ordinary traffic.

**FURPS**:

- F4. Blend spam protection
- F7. Blend edge node privacy
- F37. Permissionless network privacy: any participant can earn Blend Network access through proof of work
- F38. Permissionless transaction privacy: Blend Network carries transactions in addition to block proposals

**Checklist**:
- [ ] Three-branch Proof of Quota circuit extension
- [ ] Edge-to-core boundary spam protection
- [ ] Payload header routing transactions to the mempool and block proposals to broadcast
- [ ] Per-epoch Blend difficulty controller tracking transaction load

### Proof-of-Work Token Rewards

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Amend Mantle with a reward claim Operation that issues a fixed per-epoch reward from a dedicated proof-of-work reward pool, authorized by the mining solution alone. Per-operation validate-then-execute processing enables mining transactions: paying for transactions via proof of work, with the reward claimed and spent on the fee within the same transaction. The pool is seeded at genesis and refilled from a share of block rewards.

**FURPS**:

- F36. Permissionless user onboarding: mining transactions — newcomers earn tokens through proof of work and pay for transactions with them
- F39. Permissionless bootstrapping of Proof of Stake: fair and private initial stake distribution through proof of work while token markets are thin

**Checklist**:
- [ ] Reward claim Operation specified and implemented
- [ ] Per-operation validate-then-execute transaction processing
- [ ] Reward pool, per-epoch reward, and epoch-boundary refill
- [ ] Per-block reward-difficulty retargeting
- [ ] Three-way block-reward split (Blend / leader / proof-of-work pool)
- [ ] Genesis pool allocation

### Miner Implementation

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

The client-side mining flow: construct the mining credential, search for puzzle tickets against the Blend and reward thresholds, and use the winning solutions — generating the extended Proof of Quota proof for Blend access, and building the self-funding claim transaction that pays its own fee from the freshly claimed reward.

**FURPS**:

- F36. Permissionless user onboarding: mining transactions — newcomers earn tokens through proof of work and pay for transactions with them
- F37. Permissionless network privacy: any participant can earn Blend Network access through proof of work

**Checklist**:
- [ ] Mining loop searching puzzle tickets against the Blend and reward thresholds
- [ ] Extended Proof of Quota proof generation for proof-of-work-backed Blend messages
- [ ] Self-funding claim transaction construction (claim plus transfer paying the fee)

### Economic Analysis

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

The bootstrap and on-ramp behaviours must be shown to emerge from a single parameterization of the genesis endowment, distribution rate, reward share, claim target, and difficulty retarget.

**Checklist**:
- [ ] Reward trajectory: generous early, decaying to a marginal steady state
- [ ] Pool stability: refill-vs-drain dynamic converges without oscillation or deadlock
- [ ] Bootstrap security: issued tokens translate into enough honest stake; adversarial stake bounded
- [ ] On-ramp viability: compute cost and fee margin make claiming a real on-ramp
- [ ] Inflation bounds: issuance stays within the protocol's emission envelope
- [ ] Difficulty controller stability under variable mining demand
- [ ] Builder self-dealing unprofitable at the margin
- [ ] Difficulty decoupling recovers the anonymity-set benefit for edge leaders

### ASIC-Resistant Puzzle

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

The Blend path requires a SNARK-friendly puzzle, which is easy to accelerate in hardware. This is acceptable for Blend admission (no economic incentive) but would defeat fair stake bootstrapping on the reward path. Investigate puzzle constructions and reward parameterizations that make hardware acceleration economically unjustified, likely decoupling the two puzzles.

**Checklist**:
- [ ] Candidate puzzle constructions evaluated
- [ ] Decision on decoupling the Blend and reward puzzles
