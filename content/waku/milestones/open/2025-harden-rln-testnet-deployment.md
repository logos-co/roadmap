---
title: Harden RLN Testnet Deployment
tags:
    - waku-milestone
date: 2024-09-30
---

Github Milestone: https://github.com/waku-org/pm/milestone/55

The recent deployment and dogfooding of the [new RLN smart contract](https://github.com/waku-org/pm/milestone/34) on Linea Sepolia has unveiled several issues:

- Attempt to use a JavaScript RLN library in https://rln.waku.org for credential generation led to interop issue with nwaku/zerokit
- Some zerokit quirk around endianness that is different from Web3 RPC practice
- Spamming of the contract due to "free mint" of the Sepolia ERC-20 token (representing DAI for test purposes)

With this milestone, we tackle the lesson learned from dogfooding by:

- Using zerokit in the browser, and working with Vac-ACZ team to reach adequate UX
- Apply restrictions on testnet contract to allow dogfooding, without exhausting the rate limit due to the fact that testnet is free (as in cheap).

