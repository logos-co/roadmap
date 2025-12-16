---
title: RLN Membership Management
date: 2025-11-13
tags:
    - messaging-furps
---
## Functionality

1. Can generate RLN credentials.
2. Can insert RLN membership in smart contract, with accompanying deposit. 
3. Can extend RLN membership on smart contract.
4. Can withdraw deposit from smart contract.
5. Membership credentials are encrypted by default on local disk.

## Usability

1. RLN membership details can be exported and imported.
2. Deployment details (address, chain id) are persisted by library and in exports.

## Reliability

1. Import and exports are interoperable across all implementations.

## Performance

1. ...

## Supportability

1. Browser application, using web3 wallet browser extensions.
2. library can be used via C-Bindings, for integration with Logos Core.

## + (Privacy, Anonymity, Deployments)

1. Web version deployed on https://rln.waku.org
2. Available for Linea Sepolia Testnet contracts.
3. Proof generation and validation is out of scope for this FURPS.