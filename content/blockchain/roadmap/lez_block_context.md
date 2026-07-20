# LEZ Block Context

## Resources Required

- 1 Engineer

## Risks

- Block context design may need iteration based on developer feedback
- Since execution happens off chain, we don't know which block the tx will land in. The block context should be flexible enough so that it can give programs some information about which block it lands without binding the tx to exactly one block.

## Deliverables

### Block Context

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Expose block context (block number, etc.) to LEZ programs. For example:

- Voting protocols need a cutoff time, which can be implemented through knowing the block number the transaction is executed in.
- Atomic swaps require timeouts after which funds are released, this timing can be implemented through the block number.

**FURPS**:

- F31. Programs have defined interface exposing input/output accounts and contextual information (block number, etc.)

**Checklist**:
- [x] Block context exposed to programs
