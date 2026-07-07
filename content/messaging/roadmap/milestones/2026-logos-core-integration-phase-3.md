## Deliverables

### POC: Integrate RLN module

### POC: Delivery module uses Discovery module for peer discovery

**Owner**: Delivery Team

Proof of concept: the Delivery module uses the Discovery Logos Core module (from AnonComms) as an additional source of peer discovery. In this stage, Discovery module is used alongside existing discovery (discv5) — the Delivery module queries the Discovery module for peers and merges them with peers from its own discovery. discv5 can be disabled once this integration is validated.

This is a POC — required for v0.3, but only included in v0.2 if a clean architecture is achievable. If integration would require a hacky shim that gets thrown away, it is deferred to v0.3.

### Enable QUIC in `logos.dev` and  `logos.test`

