---
title: Harden RLN Testnet Deployment
tags:
    - waku-milestone
date: 2024-09-30
---

# [Harden RLN Testnet Deployment](https://github.com/logos-messaging/pm/milestone/55)

**Estimated date of completion**: 30 Sep 2025

**Resources Required for 2025H2**:
- 1 js-waku dev for 4 weeks.
- 1 core researcher for 6 weeks.

The recent deployment and dogfooding of the [new RLN smart contract](https://github.com/waku-org/pm/milestone/34) on Linea Sepolia has unveiled several issues:

- Attempt to use a JavaScript RLN library in https://rln.waku.org for credential generation led to interop issue with nwaku/zerokit
- Some zerokit quirk around endianness that is different from Web3 RPC practice
- Spamming of the contract due to "free mint" of the Sepolia ERC-20 token (representing DAI for test purposes)

With this milestone, we tackle the lesson learned from dogfooding by:

- Using zerokit in the browser, and working with Vac-ACZ team to reach adequate UX
- Apply restrictions on testnet contract to allow dogfooding, without exhausting the rate limit due to the fact that testnet is free (as in cheap).

## FURPS

-  [RLN Membership Management](/FURPS/application/rln_membership_management.md): R1

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Smart contract Changes | Iterative delivery of smart contract changes to allow dogfooding without excessive smart contract logic          |
| Zerokit                | Close collaboration with Vac-ACZ and clear expression of [requirements](https://github.com/waku-org/pm/pull/329) |

## Deliverables 

### [Zerokit is used in the Browser for Credentials Management](https://github.com/waku-org/pm/issues/341)

**Owner**: js-waku

**Feature**: [RLN Membership Management](/FURPS/application/rln_membership_management.md)

**FURPS**:
- R1. Import and exports are interoperable across all implementations.

### [Minting of (Sepolia) ERC-20 Tokens for RLN Deposits is permissioned](https://github.com/waku-org/pm/issues/334)

**Owner**: core research

**Feature**: [ERC-20 Testnet Token for RLN Deposit](/FURPS/application/erc-20_testnet_token_for_rln_deposit.md)

**FURPS**:
- F1. Contract owner can mint tokens to any address for free.
- F2. White-listed wallet addresses can mint tokens to any address for free.
- F3. Contract owner can add or remove wallet addresses to the white-list.

- U1. Token name is `TST`.

- +1. Deployed on Linea Sepolia.
- +2. Used as ERC-20 deposit token for Linea Sepolia RLN smart contract deployment.

**Feature**: [RLN Smart Contract](/FURPS/core/rln_smart_contract.md)

- P2. Rate limit variables, in combination with good defaults on software side, enable around 5,000 registrations.

### [Minting of (Sepolia) ERC-20 Tokens for RLN Deposits Burns Sepolia Eth](https://github.com/waku-org/pm/issues/335)

**Owner**: core research

**Feature**: [ERC-20 Testnet Token for RLN Deposit](/FURPS/application/erc-20_testnet_token_for_rln_deposit.md)

**FURPS**:
- F4. Eth (Sepolia) is burnt to mint tokens to any address.

- U2. Usage of Metamask Faucet (usually 0.1 Linea Sepolia Eth) should enable enough `TST` token minting to acquire 2-3 RLN memberships.

- +1. Deployed on Linea Sepolia.
- +2. Used as ERC-20 deposit token for Linea Sepolia RLN smart contract deployment.

