---
title: Waku Scaling
tags:
  - "2024q4"
  - "dst"
  - "waku"
draft: false
description: "Use real world testing, theoretical analysis and simulation to determine and improve Waku's scaling properties. Find the limits of Waku's capabilities and measure them in different scenarios."
---

`vac:dst:waku:waku-scaling`

## Description
Use real world testing, theoretical analysis and simulation to determine and improve Waku's scaling properties. Find the limits of Waku's capabilities and measure them in different scenarios.

Through this we will among other things research and find the limits of Waku's capabilities and measure them in different scenarios. We will work with the Waku team to improve and measure Waku and allow for deep examination of a wide range of networks from sizes anywhere from small (< 500 nodes) to midscale (500-5000 nodes) to large (10,000+ nodes).

We will in some ways provide a parallel to the Vac QA team's efforts - while their focus is on individual low level or individual parts of Waku and other software within the IFT ecosystem, ours will be on the real world behaviour of Waku as a whole system - at different scales and with different configurations, mesh structure and shape - and how that maps to our theoretical work. At the same time, we will use the results of testing Waku at various scales to build further theoretical work to test and improve in a harmonious loop.

We will support the Conduit of Expertise narrative directly by providing valuable insights to Waku and the ability to theorise, reason about, test, measure and improve the performance, stability and scalability of Waku. 

These efforts will contribute in these ways to the Conduit of Expertise narrative:

* Accelerate improvements to Waku, improving the developer community's experience and satisfaction both inside and outside of IFT's ecosystem, through allowing repeatable, measureable and real world insights into Waku, all the way from theory to practice and back.
* Improve the RFC culture by allowing for faster and easier development of RFCs with the aid of rapidly accelerated insights into how an RFC in development will perform as it's being expanded and going through the draft process.
* Allow easier post-mortem analysis of the success or relative performance of a given RFC - does this change use more or less bandwidth? Did it improve things? Seeing the effects of changes at scale allows for a greater ability to usefully wrap up work on and conclude an RFC process and document and absorb what we learned in the process into further improvements.

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