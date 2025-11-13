---
title: Codex Archiving PoC
tags:
    - messaging-furps
date: 2025-11-13
---

## Functionality

1. Any end user can publish a backup snapshot of the entire SDS log to Codex.
2. End user (may be privileged) can publish the corresponding Codex CID with metadata over Waku to a dedicated snapshot content topic.
3. Participants can query the Waku snapshot topic for the latest CID.
4. Participants can retrieve the archived messages from Codex.
5. Participants can perform a store Query for more recent messages following the snapshot timestamp and SDS state.

## Usability

1. Workflow should be conceptually identical, whether the Codex interaction is via a local node or Codex gateway.
2. Publishing or retrieving via Codex should be optional.

## Reliability

## Performance


## Supportability

1. Developers can use this protocol in web applications.

## + (Privacy, Anonymity, Deployments)