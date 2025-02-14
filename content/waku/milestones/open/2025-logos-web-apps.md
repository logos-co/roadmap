---
title: Logos Web apps
tags:
    - waku-milestone
date: 2025-02-10
---

Github Milestone: https://github.com/waku-org/pm/milestone/42

Develop Web applications for Logos, using the Logos technology stack:
- Qaku (Q&A over Waku): harden Waku to MVP level, so it can be used for IFT Town Halls, and Logos physical events
- Logos Operators Forum: Build a web forum PoC over Waku to serve as a basis for a decentralized Logos forum (opchan).

As well as leveraging Qaku to explore Codex x Waku integration.

## Deliverables

### [Reliable Qaku & Library](https://github.com/waku-org/pm/issues/287)

Improve Qaku reliability by integrating SDS and recent feedback from Comms Hubs. Write an app protocol specification describing app behaviour and encryption, to help assess security and scalability; deliver a separate library that implements said protocol.

### [Forum POC]()

A web forum that uses Waku for posts and comments, including a simple UI for demonstration purposes. A clear API needs to be specified and developed to enable frontend developers to replace the PoC frontend with their own.
Specs are expected to describe the usage of Waku and move towards a secure and scalable app protocol.

### [Web3 RPC fallback for service nodes]()

Enable fallback strategies for nwaku services nodes to access Web3 RPC APIs, to ensure that service nodes remain online and able to run RLN Relay and RLNaaS despite ETH RPC provider outage.

### [Codex for message archival PoC]()

Review the Codex integration in Qaku; for long term storage of messages; with retrieval context from SDS. Document it in the context of browser and native apps, Status’ own BitTorrent archival system and SDS, including potential to define a generalized bundling and archival framework. 
