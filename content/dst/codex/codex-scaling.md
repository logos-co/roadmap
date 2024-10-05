---
title: Codex Scaling
tags:
  - "2024q4"
  - "dst"
  - "codex"
draft: false
description: "Improve Codex's scaling abilities
and our understanding of these,
using scientific testing and experiments,
leading to better scaling.
Compare to other systems.
Support the testnet efforts by providing base capacity.
Measure speed, latency, other metrics.
Give hard numbers on Codex vs BitTorrent."
---

`vac:dst:codex:codex-scaling`

## Description
Use real world testing, theoretical analysis and simulation
to determine and improve Codex's scaling properties.

Find the limits of Codex's capabilities and measure them in different scenarios.

We will allow Codex to scale to support large scale use cases,
test how it behaves in large 100TB+ testnet deployments
and in various deployment setups,
and we will help make Codex more scalable in the first place.

We will support the Conduit of Expertise narrative directly
by providing valuable insights to Codex
and the ability to theorise, reason about,
test, measure and improve
the performance, stability and scalability of Codex.

These efforts will contribute in these ways to the Conduit of Expertise narrative:

* Accelerate adoption and development and productising of Codex
  by providing support to the Codex team
  in the form of real world testing
  to improve their efficiency and effectiveness
  in building a better product.

* Improve the RFC culture
  by allowing for faster and easier development of RFCs
  with the aid of rapidly accelerated insights
  into how an RFC in development will perform
  as it's being expanded and going through the draft process.

* Allow easier post-mortem analysis
  of the success or relative performance of a given RFC -
  does this change use more or less bandwidth?
  Did it improve things?
  Seeing the effects of changes at scale
  allows for a greater ability to usefully wrap up work on
  and conclude an RFC process
  and document and absorb what we learned
  in the process into further improvements.

Further, we will contribute both directly and indirectly
to the Premier Research destination narrative
by helping Codex build a stable base
on which other research and interesting use cases can be built.


## Task List

### Deploy Base Capacity

* fully qualified name: <vac:dst:codex:codex-scaling:deploy-base-capacity>
* owner: Wings
* status: 99%
* start-date: <2024/06/01>
* end-date: <2024/12/31>

#### Description

Deploy a large set of base capacity to the Codex testnet and keep it online, stable and prevented from losing data where possible.

It will consist of 50x nodes with 10xTB of data each.

#### Deliverables

* Helm chart adapted to Vaclab and used to deploy the nodes.
* 50x nodes running and adopted into the testnet.
* Downloads/uploads tested and working for at least 3 selected nodes.
* Ongoing monitoring (not a one time thing)
* 500TB of overall capacity provided to the network

### > How Fast Is Codex?

* fully qualified name: <vac:dst:codex:codex-scaling:how-fast-is-codex>
* owner: Wings
* status: 0%
* start-date: <2024/06/01>
* end-date: <2024/12/31>

#### Description

Related to Codex Comparison, 
we simply want to find out fast Codex is, at various things 
under different kinds of stress and load.

We will use the Base Capacity.

We will test and compare the following:

* Upload speed (1 client)
* Download speed
* Time to first byte
* Time to 50%
* Time to 90%
* Time to 100

We would also like to collect all data from the items in this matrix:

**Benchmark conditions**:
  * total size: 2, 8, 16, 32
  * seeders: 1, 2, 4, 8, 16
  * file size: 
      100
     MB, 
      1
     GB, 
      5
     GB

#### Deliverables

- [ ] Reports from how each item in the matrix performed.
- [ ] A general writeup