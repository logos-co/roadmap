---
title: "Carnot Overview"
tags:
  - "consensus"
  - "candidate"
  - "Carnot"
editor: "Corey Petty"
---

Carnot (formerly LogosBFT) is a Byzantine Fault Tolerant (BFT) [consensus](roadmap/consensus/index.md) candidate for the Nomos Network that utilizes Fountain Codes and a committees tree structure to optimize message propagation in the presence of a large number of nodes, while maintaining high througput and fast finality. More specifically, these are the research contributions in Carnot. To our knowledge, Carnot is the first consensus protocol that can achieve together all of these properties:

1. Scalability: Carnot is highly scalable, scaling to thousands of nodes.
2. Responsiveness: The ability of a protocol to operate with the speed of a wire but not a maximum delay (block delay, slot time, etc.) is called responsiveness. Responsiveness reduces latency and helps the Carnot achieve Fast Finality. Moreover, it improves Carnot's resilience against adversaries that can slow down network traffic. 
3. Fork avoidance: Carnot avoids the formation of forks in a happy path. Forks formation has the following adverse consequences that the Carnot avoids.
  1. Wastage of resources on orphan blocks and reduced throughput with increased latency for transactions in orphan blocks
  2. Increased attack vector on PoS as attackers can employ a strategy to force the network to accept their fork resulting in increased stake for adversaries.

- [FAQ](roadmap/consensus/candidates/carnot/FAQ.md): Here is a page that tracks various questions people have around Carnot.

## Work Streams

### Current State of the Art
An ongoing survey of the current state of the art around Consensus Mechanisms and their peripheral dependencies is being conducted by Tuanir, and can be found in the following WIP Overleaf document: 
- [WIP Consensus SoK](https://www.overleaf.com/project/633acc1acaa6ffe456d1ab1f)

### Committee Tree Overlay
The basis of Carnot is dependent upon establishing an committee overlay tree structure for message distribution. 

An overview video can be found in the following link: 
- [Carnot Overview by Moh during Offsite](https://drive.google.com/file/d/17L0JPgC0L1ejbjga7_6ZitBfHUe3VO11/view?usp=sharing)

The details of this are being worked on by Moh and Alexander and can be found in the following overleaf documents: 
- [Moh's draft](https://www.overleaf.com/project/6341fb4a3cf4f20f158afad3)
- [Alexander's notes on the statistical properties of committees](https://www.overleaf.com/project/630c7e20e56998385e7d8416)
- [Alexander's python code for computing committee sizes](https://github.com/AMozeika/committees)

A simulation notebook is being worked on by Corey to investigate the properties of various tree overlay structures and estimate their practical performance:
- [Corey's Overlay Jupyter Notebook](https://github.com/logos-co/scratch/tree/main/corpetty/committee_sim)

#### Failure Recovery
There exists a timeout that triggers an overlay reconfiguration. Currently work is being done to calculate the probabilities of another failure based on a given percentage of byzantine nodes within the network. 
- [Recovery Failure Probabilities]() - LINK TO WORK HERE

### Random Beacon
A random beacon is required to choose a leader and establish a seed for defining the overlay tree. Marcin is working on the various avenues. His previous presentations can be found in the following presentation slides (in chronological order):
- [Intro to Multiparty Random Beacons](https://cloud.logos.co/index.php/s/b39EmQrZRt5rrfL)
- [Circles of Trust](https://cloud.logos.co/index.php/s/NXJZX8X8pHg6akw)
- [Compact Certificates of Knowledge](https://cloud.logos.co/index.php/s/oSJ4ykR4A55QHkG)

### Erasure Coding (LT Codes / Fountain Codes / Raptor Codes)
In order to reduce message complexity during propagation, we are investigating the use of Luby Transform (LT) codes, more specifically [Fountain Codes](https://en.wikipedia.org/wiki/Fountain_code), to break up the block to be propagated to validators and recombined by local peers within a committee. 
- [LT Code implementation in Rust](https://github.com/chrido/fountain) - unclear about legal status of LT or Raptor Codes, it is currently under investigation.

