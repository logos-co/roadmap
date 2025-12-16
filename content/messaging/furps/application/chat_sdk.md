---
title: Chat SDK
tags:
    - messaging-furps
date: 2025-11-13
---

## Functionality

1. Accounts can be created in a permission-less way, to communicate on the network.
2. Accounts can send messages to conversations with one other participant.
3. All conversations benefit from forward secrecy and post-compromise security.
4. Sender gets confirmation of message reception by recipient device.
5. Developers can create their own payload types or use supplied basic types.
6. Sdk contains a default message database for developers.
7. Sdk contains a default secrets database for developers.

## Usability

1. Secure session setups are non-interactive, allowing messages to be sent without waiting for the recipient's device to come online.
2. Conversations are initiated by sharing invite links out-of-band.
3. Minimal example of the ChatSDK is no more than 25 lines of code.

## Reliability

1. Participants in a conversation can eventually determine whether they missed messages.

## Performance

1. 10K active SDK users on a single shard add no more than an average of 10Mbps to the total bandwidth; based on clients generating 100 character chat messages, 4 times per minute.

## Supportability

1. Messaging integrates RLN-like rate limit, limiting outbound messages per epoch.
2. Payload definitions are versioned to support future protocol updates.
3. library can be used via C-Bindings, for integration with Logos Core.

## + (Privacy, Anonymity, Deployments)

1. Non-participants in the conversation cannot correlate individual messages to a sender.
2. Non-participants in the conversation cannot correlate conversation to participants.
3. Network observers cannot aggregate account holder activity.
4. Nimble package manager is used to build.