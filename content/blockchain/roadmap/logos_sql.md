# λSQL

## Resources Required

- 1 Engineer

## Risks

- SQL transaction execution must be deterministic across replicas
- Layering over the ZoneSDK must stay generic enough to work with any channel

## Deliverables

### λSQL

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

λSQL turns any Blockchain Channel into a decentralized SQL database by writing SQL transactions into the channel. Writes are transactions written into inscriptions; when seen in a block, they are executed against a local SQLite copy of the database. Reads are served from the local state.

The architecture is layered:

- **ZoneSDK**: handles raw transactions and read/write events
- **λSQL-rs**: built on top of the ZoneSDK, abstracts the SQL operations
- **ORM integration** (possible): sqlx or diesel on top of λSQL-rs

**Checklist**:
- [ ] Architecture proposal
- [ ] MVP implementation
