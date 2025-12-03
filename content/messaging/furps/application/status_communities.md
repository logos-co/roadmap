---
title: Status Communities
date: 2025-11-13
tags:
    - messaging-furps
---
Logos-messaging specific FURPS, before Chat SDK integration.

## Functionality

1. Waku traffic from Communities protocol is segregated from other traffic.
2. Waku traffic from all Communities is routed through a common set of shards.
3. Communities user content traffic is segregated from other Communities traffic.
4. The usage of Waku content topic by Status Communities protocol is simplified.

## Usability

1. Users with Communities features deactivated are not impacted by Communities traffic of other users.
2. It is possible to setup different Waku store databases, and different retention time for user content and other Communities messages.
3. Store responsiveness and edge node readiness are improved.

## Reliability

1. No regression on Communities feature (Vac-QA).

## Performance

1. Time to setup filter subscriptions for Communities has improved by >20% (**Vac-DST**).
2. Time to retrieve 24 hours of Communities messages has improved by >20% (**Vac-DST**).
3. Increased community traffic does not increase bandwidth usage of 1:1 chat (**Vac-DST**).

## Supportability

1. Status Mobile, Desktop, Light and relay modes.

## + (Privacy, Anonymity, Deployments)

1. ...