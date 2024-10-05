---
title: Codex Comparison
tags:
  - "2024q4"
  - "dst"
  - "codex"
draft: false
description: "Measure Codex against systems like IPFS, BitTorrent etc and see how it compares. Primarily BitTorrent."
---

`vac:dst:codex:codex-comparison`
Measure Codex against systems like IPFS, BitTorrent etc and see how it compares. Primarily BitTorrent.
## Description
We will compare Codex to other systems like IPFS and BitTorrent 
to see how it performs.

We will compare on things such as:
* Time to first byte
* Bandwidth usage
* Stability
* Reliability

Most importantly we will do a head to head speed test
comparing download speeds of Codex against other systems.
This will allow us to understand where Codex needs improvement
and where it stands right now in terms of suitability for different use cases.

We will support the Conduit of Expertise narrative directly
by providing valuable insights to Codex
that allow them to understand how Codex performs
in comparison to common and popular systems in the "altruistic" space.

Specifically, we will:

* Accelerate Codex reaching competitiveness with BitTorrent or find out what is and isn't possible to do.
* Answer the simple question: "Is Codex faster than BitTorrent?"
  and in doing so, allow that to be a yes one day 😀
* Test the reliability of Codex in automated and highly stressful benchmarks
  that push its limits and reveal its shortcomings.
* Improve the RFC culture by allowing us to reuse the work we do here
  to build future scenarios that can test complicated situations
  and requirements in a repeatable way.

## Task List

### Matrices Deployments

* fully qualified name: <vac:dst:codex:codex-comparison:matrices-deployments>
* owner: Wings
* status: 50%
* start-date: 2024/10/01
* end-date: 2024/10/11

#### Description

Expand upon the current deployment work
that uses Kubernetes manifests
to deploy and measure complex simulations
by implementing a combination of ArgoCD or some similar deployment tool,
and standardised Helm, Kustomize or plain manifests,
and devise a way to both script and control simulations
in a repeatable, easy way.

Build a system that can deploy and measure
a matrix of different scenarios and configurations.

It must allow multiple unrelated deployments,
such as nwaku and gowaku, to exist and interact
in the course of a single test.

#### Deliverables
* Example Helm charts or Kustomize for deploying Codex.
* Customisations to those Helm or Kustomize charts that allow tuning them to meet specific scenarios such as number of nodes, amount of data.
* Automated systems for running a matrix of tests and measuring them.

This will build on prior work by DST that benefits from this work as well (ArgoCD work).

### Control BitTorrent

* fully qualified name: <vac:dst:codex:codex-comparison:control-bittorrent>
* owner: Wings
* status: 0%
* start-date: 2024/10/10
* end-date: 2024/10/14

Pick a BitTorrent client that is Dockerizable and scriptable. Current main candidate is Deluge, maybe qBittorrent.

Find a sane way to control and script BitTorrent behaviour 
such as distributing a torrent file to the set of peers 
that will be tested and automating stopping, starting, and otherwise manipulating torrents
as a separate process from launching the initial client swarm. Flexibility and consistency is the goal.

Implement those controls and start using them to build towards the wider Commitment.

#### Deliverables

* Selected BitTorrent client and explained reasons for choice.
* Built a Dockerised image if there isn't one already.
* Implemented this into a test scenario of some kind and proven that we can script a scenario.
* A report on what we learned from the process.

### k8sified Tracker

* fully qualified name: <vac:dst:codex:codex-comparison:k8sified-tracker>
* owner: Wings
* status: 0%
* start-date: 2024/10/15
* end-date: 2024/10/17

Make a BitTorrent tracker work within Kubernetes and able to be controlled by API calls.

Most likely it will simply involve adding auth to an existing Deluge or similar API, and passing the request through the existing API.

#### Deliverables

* BitTorrent trackers compared, best one selected, reasons for best choice recorded.
* Chosen tracker is dockerized.
* Chosen tracker is scriptable.
* Finished script and docker container can realistically be used in a test scenario.

### Build/Test Scenarios

* fully qualified name: <vac:dst:codex:codex-comparison:build-test-scenarios>
* owner: Wings
* status: 0%
* start-date: <2024/10/15>
* end-date: <2024/12/31>

Use the work done in Matrices Deployments and Control BitTorrent to build and test a set of scenarios that can be used to test Codex.

We will target these things to compare:

**Modes**: BitTorrent, Codex Erasure-Coded, Codex Non-Erasure-Coded

**Swarm Size**:
  * total size: 2, 8, 16, 32
  * seeders: 1, 2, 4, 8, 16
  * file size: 
      100
     MB, 
      1
     GB, 
      5
     GB

We will compare a matrix of file sizes, seeders, total size, and build a flexible test harness on top of Matrices Deployments and Control BitTorrent to run the tests.

#### Deliverables

* A completely automated end to end test scenario that can be used to test Codex against BitTorrent.
* A report on the results of the tests and the conclusions we can draw from them.
* Hard numbers on what Codex is capable of and how these swarm sizes and other parameters affect performance, latency and other metrics.
