# LSSA Resilience

**Estimated Delivery Date** March 2026

## Resources Required

- 1 Engineer

## Risks

## Deliverables

### Crash Tolerance

**Owner**: David Rusu

**Feature**: [LSSA](/blockchain/furps/index.md)

Ensure the LSSA sequencer can recover from crashes without data loss.

**FURPS**:

- R5. Crash tolerance through persisting state to disk

**Checklist**:
- [ ] State persistence implemented
- [ ] No data loss on crash/restart

### Stress Testing

**Owner**: David Rusu

**Feature**: [LSSA](/blockchain/furps/index.md)

Validate sequencer performance under load.

**FURPS**:

- R6. Sequencer passes stress testing

**Checklist**:
- [ ] Performance benchmarks
- [ ] Sequencer stable under load
