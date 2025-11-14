---
title: Signal Network PoC
date: 2025-11-13
tags:
    - messaging-furps
---
## Functionality

1. Establish direct connection to remote peer using their public key as identifier.

## Usability

1. Developers can implement their own application-level discovery method.
2. Only remote peer's public key is needed to initiate connection.
3. Hook is provided for developer to filter inbound connection requests.

## Reliability

1. End-to-end reliability is implemented for the signaling conversation.
2. No provided reliability for established connections, left to the developer (e.g. keep alive).

## Supportability

1. Developers can use this protocol in web application, imported from npmjs.com.
2. Developers can use this protocol to initiate WebRTC connections.
3. Only 1:1 direct connections are supported.

## + (Privacy, Anonymity, Deployments)

1. Network observers cannot retrieve node connection details; forward secrecy is **not** included.
2. STUN and TURN servers may be required for WebRTC usage.