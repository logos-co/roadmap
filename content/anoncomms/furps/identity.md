# Identity FURPS

## Functionality

1. An account is bound to at least one cryptographic key whose private part is controlled by the holder.
2. An account has a stable, long-lived address that does not change when keys rotate or are revoked.
3. An account carries an append-only operation log of credential changes.
4. An account can be created without permission from any third party.
5. An account can hold one or more keys.
6. A new key can be added to an account.
7. A key can be revoked from the account.
8. Given an account address, anyone can query for the associated keys.
9. Single-key compromise must not permit irreversible account takeover.

<!-- ──────── post-mainnet ──────── -->

10. Account creation is resistant to trivial Sybil attacks.
11. An account allows for associating externally owned identifiers (EoIs) to be used as alternative addresses.
12. An account supports programmable validation policies, defined by the holder, that govern which mutations are accepted (i.e., full provenance log implementation)

## Usability

1. The basic identity protocol (accounts, address format, operation log, contact discovery flow) is published in a specification.
2. The registry interface (lookup, write authorisation) is published in a specification.
3. The identity library is implemented in Rust.
4. The identity library is available via C-bindings.
5. The identity library is integrated into a working Logos Chat module deployed to Logos Core.
6. The registry is implemented on the Logos Blockchain (as an LEZ program or as a dedicated Identity Zone).
7. The registry backend choice on the Logos Blockchain (LEZ program vs dedicated Identity Zone) is evaluated and documented.

<!-- ──────── post-mainnet ──────── -->

8. The EoI format and disclosure model is published in a specification.
9. The CAIP-122 binding for Logos identities is published in a specification.
10. Holder-defined account recovery policies are published in a specification.
11. The provenance log protocol is published in a specification.

## Reliability

1. Account operation logs are durably stored forever in a registry.

## Performance

1. A registry lookup of an account's current state completes within a bounded time under typical network conditions.
2. Account creation completes within a few seconds on a typical client.

## Supportability

## Miscellaneous dependencies

1. Dependency on a performant Logos Blockchain backend for the V1 registry.
