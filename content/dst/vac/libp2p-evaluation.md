---
title: Libp2p Evaluation
tags:
  - "2024q4"
  - "dst"
  - "vac"
draft: false
description: "Test libp2p on a regular basis and look for regressions, learn scaling properties and run scaling studies, understand the limits of libp2p and its behaviour."
---

`vac:dst:vac:libp2p-evaluation`

## Description
Test libp2p on a regular basis and look for regressions, learn scaling properties and run scaling studies, understand the limits of libp2p and its behaviour.

We want to learn as much as we can about libp2p's behaviour and how it is evolving over time with each new release and with each thing we are specifically asked to check and test.

We will use a combination of real world testing, theoretical analysis and simulation to determine and measure the success, side effects and other factors of libp2p and its evolution.

We will support the Conduit of Expertise narrative directly by analysing and evaluating new libp2p releases and their features, both with regards to features they have today and with regards to how that compares to past behaviour.

These efforts will contribute in these ways to the Conduit of Expertise narrative:

* Enable improvements to libp2p by allowing for repeatable, measureable and real world insights into libp2p, all the way from theory to practice and back.
* Reduce the risk of a libp2p regression making it into a new release of our product

Additionally, these efforts will contribute to the Premier Research destination narrative by:
* Improving and strengthening our relationship with the libp2p team and thus increasing the reach and influence of the IFT, and improving the chances that we become a full blown 

## Task List

### High Scalability Waku Demonstration

* fully qualified name: `vac:dst:waku:waku-scaling`
* owner: Wings
* status: 95%
* start-date: 2024/03/01
* end-date: 2024/11/01

#### Description
Demonstrate a working, real world, large scale Waku network.

Measure its performance and attempt to support the assertion that Waku is a scalable solution that can work in networks at sizes that push the limits of what the theoretical work we did predicted is possible.

Specifically, we want to deploy a 10,000 node Waku network and measure its performance in terms of message delivery, bandwidth usage, and other metrics. We want to deliver a report on what we learned, what we tested and what we found.

The report should include analysis of the performance of Waku at extreme scale, providing insights that allow people to see significant supporting evidence that Waku can in fact scale to these sizes and perform reliably.

#### Deliverables

- [x] https://github.com/vacp2p/10ksim - A working set of bundled and compatible Kubernetes manifests that allow for up to a 10,000 node Waku network to be reliably created and measured. The manifests should be compatible with [[vac|dst|deployer-tool|deployer-tool]] and flexible.

- [ ] A useful set of measurements taken with the 
List (can consist of a single Deliverable) of planned Deliverables and links to completed Deliverables.
<!-- Most recently blocked by metrics scaling issues, nearly through them -->


<!-- Many more tasks to come based on milestone's previous plans.>