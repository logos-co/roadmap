---
title: Network Metrics Tracker
date: 2025-11-13
tags:
    - messaging-furps
---
## Functionality

1. Metrics that can be learned from network observations are available
2. Display number of nodes discovered over discv5, by shard
3. Display number of nodes successfully connected to, by shard and user agent, in last hour, day, week
4. Display number of light protocol clients fleet nodes had a inbound connection of, by libp2p protocol, user agent, libp2p transport, and shard, in last hour, day, week; using unique peer id as identifier
5. Number of messages unique messages seen, by shard
6. Inbound and outbound bandwidth, by shard
7. Number of different content topics in last hour, day and week; considering full content topic and application name.
8. Average and max message size by shard
9. Messages stored by fleet store nodes: total size, number, oldest timestamp, by shard

## Usability

1. Metrics above are available publicly for the network of major integrations (Status, RAILGUN, TWN).

## Reliability

1. Metrics should be available 90% of the time.

## Performance

1. The data is updated at least hourly
2. At least 3 months of data is available

## Supportability

1. Grafana dashboards
2. Some metrics may be retrieved by a Waku monitor node with aggressive parameters, other from existing fleet nodes;
   this includes running limited fleet nodes for other networks.

## + (Privacy, Anonymity, Deployments)

1. No IP or Peer Ids are tracked or displayed.
2. Dashboard deployed for The Waku Network
3. Dashboard deployed for Status Waku Network
4. Dashboard deployed for RAILGUN Waku Network