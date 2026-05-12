# Identity FURPS

## Functionality

1. An identity is bound to at least one cryptographic key whose private part is controlled by the holder.
2. An identity has a stable, long-lived address that does not change when keys rotate or are revoked.
3. An identity carries an append-only operation log of credential changes.
4. An identity can be created without permission from any third party.
5. An identity can hold one or more installation keys.
6. A new installation can be added to an identity by an authorised current installation.
7. An installation can be revoked by an authorised current installation.
8. An identity is consumable by de-MLS to retrieve the key package for an active installation.
9. Identity creation is resistant to trivial Sybil attacks.
10. An identity can be discovered by contacts via address share and registry lookup.

<!-- ──────── post-mainnet ──────── -->

11. An identity can hold one or more associations to externally owned identifiers (EoIs).
12. An identity holder controls which EoIs are disclosed to which counterparty.
13. An identity can be used to sign in to Logos services using CAIP-122.
14. An identity supports holder-defined recovery policies (e.g. social recovery).
15. An identity's operation log supports programmable validation policies, defined by the holder, that govern which mutations are accepted (i.e., full provenance log implementation).

## Usability

1. The basic identity protocol (address format, operation log, contact discovery flow) is published in a specification.
2. The registry interface (lookup, write authorisation) is published in a specification.
3. The identity library is implemented in Rust.
4. The identity library is available via C-bindings.
5. The identity library is integrated into a working Logos Chat module deployed to Logos Core.
6. The registry is implemented as an LEZ program.

<!-- ──────── post-mainnet ──────── -->

7. The EoI format and disclosure model is published in a specification.
8. The CAIP-122 binding for Logos identities is published in a specification.
9. Holder-defined identity recovery policies are published in a specification.
10. The provenance log protocol is published in a specification.

## Reliability

## Performance

1. A registry lookup of an identity's current state completes within a bounded time under typical network conditions.
2. Identity creation completes within a few seconds on a typical client.

## Supportability

## Miscellaneous dependencies

1. Dependency on performant LEZ for the V1 registry backend.
