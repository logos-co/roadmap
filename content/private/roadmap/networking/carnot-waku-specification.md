---
title: "A Specification proposal for using Waku for Carnot Consensus"
tags:
- "waku"
- "carnot"
- "networking"
- "consensus"
---

##### Definition Reference 
- $k$ - size of a given committee
- $n_C$ - number of committees in the overlay, or nodes in the tree
- $d$ - depth of the overlay tree
- $n_d$ - number of committees at a given depth of the tree

## Motivation
In #Carnot, an overlay is created to facilitate message distribution and voting aggregation. This document will focus on the differentiated channels of communication for message distribution. Whether or not voting aggregation and subsequenty traversal back up the tree can utilize the same channels will be investigated later. 

The overlay is described as a binary tree of committees, where a individual in each committee propogates messages to an assigned node in their two children committees of the tree, until the leaf nodes have recieved enough information to reconstitute the proposal block. 

This communication protocol will naturally form "pools of information streams" that people will need to listen to in order to do their assigned work:
- inner committee communication
- parent-child chain communication
- intitial leader distribution

### **inner committee communication** 
all members of a given committee will need to gossip with each other in order to reform the initial proposal block
- This results in $n_C$ pools of $k$-sized communication pools.

### **parent-child chain communication** 
The formation of the committee and the lifecycle of a chunk of erasure coded data forms a number of "parent-child" chains. 
- If we completely minimize the communcation between committees, then this results in $k$ number of $n_C$-sized communication pools.
- It is not clear if individual levels of the tree needs to "execute" the message to their children, or if the root committee can broadcast to everyone within its assigned parent-chain communcation pool at the same time.
- It is also unclear if individual levels of the tree need to send independant messages to each of their children, or if a unified communication pool can be leveraged at the tree-level. This results in $d$ communication pools of $n_d$-size. 

### **initial leader distribution**
For each proposal, a leader needs to distribute the erasure coded proposal block to the root committee
- This results in a single communication pool of size $k(+1)$.
- the $(+1)$ above is the leader, who could also be a part of the root committee. The leader changes with each block proposal, and we seek to minimize the time between leader selection and a round start. Thusly, this results in a requirement that each node in the network must maintain a connection to every node in the root committee. 

## Proposal
This part of the document will attempt to propose using various aspects of Waku, to facilitate both the setup of the above-mentioned communication pools as well as encryption schemes to add a layer of privacy (and hopefully efficiency) to message distribution. 

We seek to minimize the availability of data such that an individual has only the information to do his job and nothing more.

We also seek to minimize the amount of messages being passed such that eventually everyone can reconstruct the initial proposal block

`???` for Waku-Relay, 6 connections is optimal, resulting in latency ???

`???` Is it better to have multiple pubsub topics with a simple encryption scheme or a single one with a complex encryption scheme

As there seems to be a lot of dynamic change from one proposal to the next, I would expect [`noise`](https://vac.dev/wakuv2-noise) to be a quality candidate to facilitate the creation of secure ephemeral keys in the to-be proposed encryption scheme. 

It is also of interest how [`contentTopics`](https://rfc.vac.dev/spec/23/) can be leveraged to optimize the communication pools. 

## Whiteboard diagram and notes
![Whiteboard Diagram](images/Overlay-Communications-Brainstorm.png)