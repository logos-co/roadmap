---
title: Streamline DevEx - Mobile, Rust and Web dev
tags:
    - messaging-milestone
date: 2025-07-03
---

**Dropped with new focus on Logos Launch**

# [Streamline DevEx: Mobile, Rust and Web dev](https://github.com/waku-org/pm/milestone/47)

**Estimated date of completion**: 30 Nov 2025

**Resources Required for 2025H2**:
- nwaku 3 eng during 6 weeks
- js-waku 2 eng 6 Week Sep

Complete the Waku API implementation in nwaku by implementing edge node mode (Status' Light Mode).

Streamline the Developer Experience by delivering a Rust SDK that implements the full Waku API and is available on crates.io.
As well as building an easy-to-use local dev environment from the browser, enabling developers to build web apps without
relying on external connectivity. Provide a similar harness to deploy a local RLN dev environment.

Finalize the integration of nwaku in Status application by setting up nwaku-based build for Mobile platforms.

Lastly, develop a PoC protocol to demonstrate the usage of Waku as a Signal network, using WebRTC as example.
This was identified as a demanded demonstration of Waku's capabilities as part of the [Waku MVP analysis](https://www.notion.so/Waku-MVP-1838f96fb65c8039acabf8a6a1e689e7).

## FURPS

See deliverables.

## Risks

| Risk                    | (Accept, Own, Mitigation)                                                                                                                                                |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| nwaku performance       | Performance of nwaku in comparison to go-waku will be measured by DST during H2 and may raise issues that will become blockers for practical usage of nwaku in Mobile.   |
| Publishing to crates.io | One of the challenge to publish libwaku on crates.io is the package size. Several strategy may be developed and tried to find a way to distribute Nim-based Rust crates. |
| Local dev harness       | Creating a local dev environment may be a challenge due to the nature of Waku and RLN, as we would need to locally coordinate bootstrap and blockchain emulation.        |

## Deliverables

### [Waku Rust SDK](https://github.com/logos-messaging/pm/issues/289)

**Owner**: Nim Messaging Team

**Feature**: [Messaging SDK](/messaging/furps/core/messaging_sdk.md)

**FURPS**:
- S4. Rust; available on crates.io.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)

### [Local Web Dev Harness](https://github.com/logos-messaging/pm/issues/359)

**Owner**: js-waku

**Feature**: [Local Web Dev Harness](/messaging/furps/application/local_web_dev_harness.md)

**FURPS**:

- F1. Runs local Waku node to test Web application without relying on external connectivity.
- F2. js-waku runs in NodeJS for testing and CI purposes.

- U1. Developer only need to run a script or preset to start local Waku node and have their web app connect to it.
- U2. Potential WSS/HTTPS issues are worked around so that developer does need to manually generate or import SSL certificates.
- U3. There is an easy option for the developer to bootstrap and connect to local node, instead of external peers.

- S1. Linux and Mac development environments.
- S2. Local network without RLN.
- S3. Chrome and Firefox browsers.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)

### [Local Dev RLN Harness](https://github.com/logos-messaging/pm/issues/360)

**Owner**: Nim Messaging Team

**Feature**: [Local Dev RLN Harness](/messaging/furps/application/local_dev_rln_harness.md)

**FURPS**:
- F1. Runs local Ethereum environment.
- F2. Deploys ERC-20 and RLN smart contract.
- F3. Utility to fund wallet addresses with necessary tokens for deposit for RLN membership registration.

- U1. Developer only need to run a script to setup local blockchain environment.
- U2. Developers can run documented RPC calls to fund wallet addresses.
- U3. Developers can run documented RPC calls to interact with RLN smart contract.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)

### [Waku as a Signal Network (WebRTC) PoC](https://github.com/logos-messaging/pm/issues/298)

**Owner**: js-waku

**Feature**: [Waku as a Signal Network](/messaging/furps/application/signal_network.md)

**FURPS**:

- F1. Establish direct connection to remote peer using their public key as identifier.

- U1. Developers can implement their own application-level discovery method.
- U2. Only remote peer's public key is needed to initiate connection.
- U3. Hook is provided for developer to filter inbound connection requests.

- R1. End-to-end reliability is implemented for the signaling conversation.
- R2. No provided reliability for established connections, left to the developer (e.g. keep alive).

- S1. Developers can use this protocol in web application, imported from npmjs.com.
- S2. Developers can use this protocol to initiate WebRTC connections.
- S3. Only 1:1 direct connections are supported.

- +1. Network observers cannot retrieve node connection details; forward secrecy is **not** included.
- +2. STUN and TURN servers may be required for WebRTC usage.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)