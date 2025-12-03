---
title: RLN Smart Contract
date: 2025-11-13
tags:
    - messaging-furps
---
## Functionality

1. RLN rate limit can be defined in terms of multiple messages per epoch.
2. RLN rate limit is set at membership insertion
3. RLN proof generation and validation only requires Web3 RPC `call`s, no blockchain events or initialisation are needed.
4. An ERC-20 token deposit is needed to insert a membership

## Usability

1. Application developers can set RLN rate limit at insertion.
2. User does not need to wait for merkle tree synchronization and building to start relaying
   or sending messages.
3. Application does not need to do a Web3 RPC call for every tree change to generate or validate messages.
4. Application can transfer tokens and register membership with a single transaction.

## Reliability

1. ...

## Performance

1. New node setup with an RLN membership can be ready to verify RLN proof within 5s,
   no matter the size of the membership set **(Vac-DST)**.
2. Rate limit variables, in combination with good defaults on software side, enable around 5,000 registrations.

## Supportability

1. ...

## + (Privacy, Anonymity, Deployments)

1. Smart Contracts are deployed on ~Linea Sepolia~ Status L2 Sepolia.
2. TWN uses smart contracts deployed on ~Linea Sepolia~ Status L2 Sepolia.