---
title: Rendezvous
date: 2025-11-13
tags:
    - messaging-furps
---
## Functionality

1. libp2p-rendezvous peer discovery protocol is used

## Usability

1. Relay nodes discover additional peers via libp2p-rendezvous

## Reliability

1. Relay nodes finds new peers when solely using rendezvous **(Vac-QA)**.

## Performance

1. In an established network of 1k relay nodes on 10 shards with 1 bootstrap node,
   100 new relay nodes (relay + discv5 + Waku PX + rendezvous)
   can connect to 20 relay peers in the right shard within 1 minute (**Vac-DST**)
   ; run simulation without rendezvous to see the difference

## Supportability

1. Enabled in status-go using nwaku c-bindings
2. Enabled in nwaku-compose

## + (Privacy, Anonymity, Deployments)

N/A