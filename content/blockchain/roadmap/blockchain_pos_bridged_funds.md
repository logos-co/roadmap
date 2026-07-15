# Blockchain PoS Participation for Bridged Funds

When a Sovereign Zone bridges tokens to the blockchain, the backing stake sits idle in the zone's channel account. This milestone lets that channel-held stake participate in Proof of Stake — staked either by the zone's sequencers or delegated to the zone's users — so bridged funds contribute to chain security and earn rewards instead of lying dormant.

## Resources Required

- 1 Researcher
- 2 Engineers

## Risks

- Channel balances are threshold-controlled by the zone's sequencers; allowing them to stake must not let a malicious sequencer set lock or slash funds beyond the zone's intent
- Staking and unstaking must remain consistent with bridge withdrawals — funds committed to PoS cannot be simultaneously withdrawn, and unbonding delays may interact poorly with the bridge's finality assumptions
- Attributing rewards and slashing back to the correct zone or user requires careful accounting within the shared channel account

## Deliverables

### Channel Stake Participation

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Extend the channel account protocol so balances held on behalf of a Sovereign Zone can be committed to Proof of Stake. Define how stake is registered, how unbonding interacts with bridge withdrawals, and how rewards and slashing are accounted against the channel.

**Checklist**:
- [ ] Channel account protocol extended to register and unregister stake
- [ ] Unbonding and withdrawal interaction defined so committed stake cannot be double-spent on a withdrawal
- [ ] Reward and slashing accounting attributed back to the channel

### Staking Authority Model

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Specify who controls the staking of channel funds — the zone's sequencers staking on the zone's behalf, and/or delegation to individual users of the zone — and the authorization required for each path.

**Checklist**:
- [ ] Sequencer-controlled staking of channel funds
- [ ] User delegation of channel-held stake
- [ ] Authorization rules preventing a malicious sequencer set from misappropriating staked funds
