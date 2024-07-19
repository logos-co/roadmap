---
title: Onboarding Guide
tags:
    - Waku
    - collaboration
date: 2024-07-18
lastmod: 2024-07-18
---

# Onboarding guide

Welcome to Waku! There’s quite a lot to learn so take your time. Here are a few links and some things to start with.

## Vac & Waku

Vac is a wide team that builds public good protocols for the decentralized web - [vac](https://vac.dev/).

Waku originated as an incubation project within Vac with the goal of defining and implementing decentralized communication protocols. We have since evolved into a standalone team, while maintaining close collaboration with Vac, which continues to facilitate the RFC process - [waku](https://waku.org/).

At Waku, each team member may split their working hours between research and sw development, depending on the team goals and personal interests.

- Research: describe protocols in a formal/scientific way - https://github.com/waku-org/research.
- SW development: materialization of the protocols into software components - https://github.com/waku-org.

## Collaboration Guideline

Have a read at our [Collaboration Guidelines](https://www.notion.so/Guidelines-for-Collaboration-59cf0b0b6c43419fb2467ca5ac36fed1?pvs=21) to acquaint yourself with our collaboration best practices.

## Starter tasks

- Complete the BambooHR [tasks](https://statusim.bamboohr.com/inbox/onboarding/) (can be followed in parallel with other tasks.).
- Try out the [Status app](http://status.im/)
- Get familiar with Nim.
Recommendations:
    - [Status Nim Style Guide](https://status-im.github.io/nim-style-guide/)
    - [Nim Language](https://nim-lang.org/)
    - “Nim in Action” book (Dominik Picheta)
    - “Mastering Nim” book (Andreas Rumpf)
    - [Exercism course on Nim](https://exercism.org/tracks/nim/)
    - “[Computer Programming with the Nim Programming Language](https://ssalewski.de/nimprogramming.html)” book (Stefan Salewski)
- Meet the Waku specification
Waku is a communication layer for Web3.
There are three main Waku-client implementations:
    - [nwaku](https://github.com/waku-org/nwaku): Nim implementation aimed to be used by the infrastructure nodes.
    - [go-waku](https://github.com/waku-org/go-waku): Golang implementation aimed to be used by the Desktop app.
    - [js-waku](https://github.com/waku-org/js-waku): JavaScript implementation designed to be run by web browsers.
    
    Aside from the Waku project, Vac also gives a big contribution in the next ones:
    
    - Logos, a Blockchain protocol whose clients would be built in Nim and Rust - [Logos](https://logos.co/).
    - Codex, a decentralized storage protocol (IPFS) - [code-research](https://github.com/status-im/codex-research), [nim-codex](https://github.com/status-im/nim-codex).
- Build [nwaku](https://www.notion.so/2fd36c23256d4850b22535b8623bd6e5?pvs=21). We encourage all core contributors to run a long-lived nwaku node as an operator. More details [here](https://www.notion.so/a78faaa8e76d44fd963415999408ed11?pvs=21).
Useful resources:
    - [Examples](https://github.com/waku-org/nwaku/tree/master/examples/)
    - [Docs](https://github.com/waku-org/nwaku/tree/master/docs)
- Skim specs (primarily Vac, but also Status) and try to get a picture of how things fit together. You do not have to read all the specifications all at once (it may get a bit confusing). We suggest start reading them in the following order, it is just a suggestion, feel free to do it the way you want!:).

While reading RFCs note that there are two versions of WAKU namely WAKU1 and WAKU2. Vac RFCs related to WAKU2 are WAKU2 prefixed whereas other ones are prefixed by WAKU or WAKU1. For example, 8/WAKU-MAIL and 13/WAKU2-STORE are RFCs for WAKU1 and WAKU2, respectively.
    - 1/COSS
    - 10/WAKU2
    - 16/WAKU2-RPC
    - 11/WAKU2-RELAY | 14/WAKU2-MESSAGE | 23/WAKU2-TOPICS | 26/WAKU2-PAYLOAD
    - 12/WAKU2-FILTER
    - 19/WAKU2-LIGHTPUSH
    - 13/WAKU2-STORE
    - 18/WAKU2-SWAP
    - 27/WAKU2-PEERS
    - 15/WAKU2-BRIDGE
- Join the [Vac](https://discord.gg/zRKyr8ve92), [Waku](https://discord.gg/KT2gBKv2ma), and [Nimbus](https://discord.gg/XRxWahP) Discord servers and say hi!
- Recommended: go through the list of existing open issues in the project repo (nwaku, go-waku or js-waku) you’ll mostly be working on and familiarise yourself with the current state of the project. This may take a while, but is an excellent exercise to get acquainted with some important conversations and project history. We encourage new contributors to ask questions in the comment sections of any past issues. You could even self-assign some issues that’s currently unassigned which you’d like to tackle! For this, the `good-first-issue` tag on Github may come in as a handy filter.

## Resources

### Vac

- [Vac overview](https://hackmd.io/@vac/main/https%3A%2F%2Fhackmd.io%2Fz-YmYxhXTSqNVZjnbWYHxw)
- [Vac.dev writeups](https://vac.dev/)
- [Vac RFCs/Specs](https://rfc.vac.dev/)
- [COSS process](https://rfc.vac.dev/spec/1/)
- [10/WAKU2 main spec](https://rfc.vac.dev/spec/10/)
- [Vac forum](https://forum.vac.dev/)
- [Vac 2021 Q3 priorities](https://forum.vac.dev/t/vac-teams-priorities-for-q3-2021/86)
- [Waku v2 training session](https://drive.google.com/file/d/19P3oDNXGBDClfcS6Sgp0t9LYr3UbIFGt/view)
- [Vac Sustainability and business workshop](https://forum.vac.dev/t/vac-sustainability-and-business-workshop/116)

### Status

- [Status whitepaper](https://status.im/files/whitepaper.pdf)
- [Status principles](https://status.im/about/)
- [Status main client spec](https://specs.status.im/spec/1)
- [Status specs](https://specs.status.im/)
- [Status Discuss](https://discuss.status.im/)
- [Nimbus team](https://nimbus.team/)
- [nim-libp2p](https://github.com/status-im/nim-libp2p)

### Ecosystem

- [Ethereum](https://ethereum.org/en/)
- [libp2p](https://libp2p.io/)
- [libp2p specs](https://github.com/libp2p/specs/)