# RLN FURPS

## Functionality

1. An RLN membership allocation service can register ID commitments on behalf of third parties
2. The RLN membership allocation service has a pluggable authentication mechanism to determine eligibility for membership
3. Logos modules can use the service as client to obtain adequate registered RLN identities without interacting with the contract
4. The RLN membership allocation service can run as a standalone module or mounted on existing modules
5. Logos modules can read the on-chain Merkle root and proofs
6. The basic RLN membership management module can register RLN memberships on-chain on behalf of a Logos module
7. The basic RLN membership management module stores and manages RLN keys for a Logos module
8. The basic RLN membership management module can operate as a client in the libp2p RLN membership allocation protocol
9. The full RLN module encapsulates Zerokit proof generation and verification, expanding the basic RLN membership management module

## Usability

1. The RLN membership allocation protocol is published in a specification
2. Logos Delivery and Chat can use the service to obtain RLN memberships
3. The RLN contract is implemented for Logos Execution Zone
4. The basic RLN membership management module API is published as a specification
5. Logos Delivery uses the basic RLN membership management module and LEZ-based RLN for all membership acquisition and management
6. Advanced authentication mechanisms for RLN membership allocation, including device keys, are evaluated and published

## Reliability

1. 

## Performance

1. 

## Supportability

1.

## Miscellaneous dependencies:

1. 
