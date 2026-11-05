# Sequencer Collusion Resistance

Bridged funds sit in a Sovereign Zone's channel, and withdrawals from the channel are authorized by a quorum of the zone's sequencers. This leaves bridged funds exposed to two sequencer faults:

- **Theft**: a colluding set of malicious sequencers large enough to form quorum could steal bridged funds.
- **Loss of quorum**: a lesser fault. If f+1 sequencers go offline, the remaining sequencers can no longer form quorum, the bridge can no longer be serviced, and users' bridged funds are stuck.

This milestone protects bridged funds against both.

## Resources Required

- TBD

## Risks

- TBD

## Deliverables

### Theft Resistance

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Prevent a colluding set of malicious sequencers from stealing funds bridged into their zone.

**Checklist**:
- [ ] TBD

### Forced Exit

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

A forced exit mechanism lets users withdraw their bridged funds when the zone's sequencers can no longer form quorum, so users don't lose funds when the bridge can no longer be serviced.

**Checklist**:
- [ ] Forced exit mechanism specified
- [ ] Forced exit mechanism implemented
