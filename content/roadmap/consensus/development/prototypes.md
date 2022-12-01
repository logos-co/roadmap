---
title: "Consensus Prototypes"
tags:
  - "consensus"
  - "development"
---

Consensus Prototypes is a collection of Rust implementations of the [Consensus Candidates](tags/candidates)

## Tiny Node

Tiny node is a fake/basic implementation of the `Carnot` consensus protocol on top of a `Waku` network layer.

The main idea is to have a node that can simulate the consensus protocol message passing through. So we can spawn testing networks
and measure the latencies of the necessary messages.

We aim to have information enough to answer the question, do `Waku` works for the `Carnot` protocol?

`Carnot` has a clear idea of how the network overlay should be. As a base overview, it is expected that the nodes are connected forming a **tree**.
We belive that this can be modeled with `Waku` in a logical way, but the underlaying `Waku` system will never be like that.
So we need to know if the pubsub system used by `Waku` will be enough for our purpoises.


There is currently an ongoing effort by Giacomo and Daniel centered in [the consensus branch](https://github.com/logos-co/nomos-research/pull/16)


## Required Roles
- Lead Developer (filled)