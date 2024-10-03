---
title: Visualiser Tool
tags:
  - "2024q4"
  - "dst"
  - "ift"
draft: false
description: "Develop tools or frameworks suitable for visualising the state of arbitrary distributed systems and simulations. This initial iteration must support Waku visualisation, but future intention is to support any system which is log compatible with the Visualiser Tools."
---

`vac:dst:ift:visualiser-tool`

## Description

Develop tools or frameworks suitable for visualising the state of arbitrary distributed systems and simulations. This initial iteration must support Waku visualisation, but future intention is to support any system which is log compatible with the Visualiser Tools.

We will demonstrate the usefulness and unique understanding such a tool can give you about the way a p2p network behaves under different conditions, and from its inception to its middle state and eventual end.

Through providing a way to visualise p2p network behaviour and message propagation, we will help enable the Conduit of Research narrative to be supported by giving the Waku team a way to intuitively understand the actual way network propagation occurs, and how it is affected by different factors.

It will also provide a way to test RFCs that affect aspects of Waku that are visible in a simulation but hard to observe in the real world or without significant mental time and investment into logs that don't provide a visual way of analysing large scale behaviours.

## Task List

### debug-visualiser

* fully qualified name: `vac:dst:ift:visualiser-tool:debug-visualiser`
* owner: Alberto
* status: 60%
* start-date: 2024/06/01
* end-date: 2024/12/31

#### Description

The debug visualiser is designed to allow for digging into the interactions, packet flow and behaviour of distributed systems, initially Waku.

It is intended to be "interesting and deep, not pretty or wide"

#### Deliverables
- [ ] https://github.com/vacp2p/dst-live-visualiser

### live-visualiser
* fully qualified name: `vac:dst:ift:visualiser-tool:live-visualiser`
* owner: Wings
* status: 99%
* start-date: 2024/06/01
* end-date: 2024/12/31

#### Description

The live visualiser is designed to allow for digging into the interactions, packet flow and behaviour of distributed systems, initially Waku.

It is intended to be "pretty and wide" and in contrast to the debug visualiser it runs in realtime along with the network and shows you the network in a way that is easy to understand and interpret, especially for those previously not familiar with peer to peer technologies or networks.

#### Deliverables

- [ ] https://github.com/vacp2p/dst-live-visualiser
