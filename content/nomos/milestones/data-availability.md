---
title: Data Availability
tags:
  - nomos-milestone
  - roadmap-2024
---
### Core Tasks

- **Dispersal.** Design Dispersal algorithm. With current conclusions on the DA requirements of Zones, we can design dispersal given:
- Number of chunks
- Number of nodes participating in DA
- **PoV.** This solution will require gossip-based distribution of Proof of Validator (see below) and public keys, to allow VID without relying on validator registries.
- **VID?** Analyze if VID is still a better option than async validator light-node verification (the Danksharding way), given the target design with many more nodes than initially accounted for.
- **Dissemination.** Design of an altruistic replication protocol (ie dissemination), to further strengthen the DA, by extending it beyond the Nomos validators to Light Nodes. This could be a DHT or similar solution. 
Perhaps this turns into “DA starts with a groups of selected validators and then it's further disseminated although without proof in VID” situation, which might actually be more coherent with our vision. Answering this question is very important.

### Action Plan

Solving the remaining problems of DA requires mainly knowledge of distributed systems. The only exception is the PoV, which can be designed a researcher with more knowledge of Zk. Note that it's mainly an ZK engineering problem, not a protocol problem.

The steps to implement Data Availability are the following:

1. Initial implementation. Pick a number of nodes and disperse the chunks directly to them. This solution is insufficient for production because it lacks two things:
    1. Even distribution of chunks in the entire validator set.
    2. A single client cannot disperse the chunks well enough, while at the same time gossiping cannot be used for this (defeats the entire purpose of DA).
    3. A way to verify that the network has achieved enough dissemination.
    4. It doesn't scale. If we have 100k nodes, do we select a subset? How's that subset gonna distribute to the rest of the network.
2. ASAP, Design a dispersal and dissemination protocol, to solve the above problems. This can be thought of an IPFS kind of protocol. The main difference is that the validators are able to verify DA through sampling to ensure the data is there.
3. Implement solution in 2.

DA is a problem that looks more solved than it actually is. The key aspects that remain to be solved are listed above. Working on solutions for this, while maintaining the design principle of maximizing validator count with low reliability, it's paramount.