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
10. An RLN membership can be allocated end-to-end, from a client request through the allocation service to a registered membership usable by the RLN module
11. RLN memberships are registered and accounted for on Logos Blockchain in a way that is compatible with Logos zones and LEZ
12. A validating module can recover the secret key of an RLN membership that violates its rate limit
13. The RLN contract accepts a recovered secret key to slash the corresponding membership and burn its deposit

## Usability

1. The RLN membership allocation protocol is published in a specification
2. Logos Delivery and Chat can use the service to obtain RLN memberships
3. The RLN contract is implemented for Logos Execution Zone
4. The basic RLN membership management module API is published as a specification
5. Logos Delivery uses the basic RLN membership management module and LEZ-based RLN for all membership acquisition and management
6. Advanced authentication mechanisms for RLN membership allocation, including device keys, are evaluated and published
7. The RLN on-chain membership and accounting design for Logos Blockchain is published in a specification
8. Slashing of RLN rate violators is published in a specification

## Reliability

1. 

## Performance

1. The cost of registering and maintaining an RLN membership is low enough for routine use by Logos modules and their users

## Supportability

1.

## Miscellaneous dependencies:

1. 
