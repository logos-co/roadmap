---
title: Store Sync
date: 2025-11-13
tags:
    - messaging-furps
---
## Functionality

1. Store nodes synchronize recent messages with each other.
2. Store node to store node synchronization happens on a periodic manner.
3. Store node to store node synchronization happens after re-connection is detected.

## Usability

1. Remote store peer selection is done automatically.

## Reliability

1. No message discrepancies at any time, for time windows of 5 minutes to 60 minutes ago.

## Performance

1. A sync of a 60 minutes time window happens under 60 seconds, assuming 15 msgs/second (total), 150KB message size and a maximum of 10% pre-existing message discrepancy (**Vac-DST**).

## Supportability

1. nwaku store service node