---
title: Group Chat
tags:
    - messaging-furps
date: 2025-11-13
---
## Functionality

1. Accounts can receive a message in multiple locations (e.g. devices) by registering new installations.
2. Accounts can view and remove installations as needed.
3. Accounts can create GroupChats between multiple accounts.
4. Participants can set a group name and description for all participants in the group. 
5. Account can view all provisioned installations.
6. Account can revoke other installations in case of a lost device.

## Usability

## Reliability

1. Group Participants in a conversation can tell if a message is missing, and who sent it.

## Performance

1. The number of network messages for a single outbound group message does not scale with the number of group members.

## Supportability

1. Developers can create group conversations from C-bindings.

## + (Privacy, Anonymity, Deployments)

1. Non-participants cannot correlate a group conversation to any of its participants.
2. No identifying information is visible when registering an installation.