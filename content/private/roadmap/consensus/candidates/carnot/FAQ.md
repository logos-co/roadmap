---
title: "Frequently Asked Questions"
tags:
  - "Carnot"
  - "consensus"
openToc: true
---

## Network Requirements and Assumptions

### What assumptions do we need Waku to fulfill? - Corey
> `Moh:` Waku needs to fill the following requirements, taken from the Carnot paper:

> **Definition 3** (Probabilistic Reliable Dissemination). _After the GST, and when the leader is correct, all the correct nodes deliver the proposal sent by the leader (w.h.p)._

> **Definition 4** (Probabilistic Fulfillment). _After the GST, and when the current and previous leaders are correct, the number of votes collected by teh current leader is $2c+1$ (w.h.p)._

## Tradeoffs

### I think the main clear disadvantage of such a scheme is the added latency of the multiple layers. - Alvaro

> `Moh:` The added latency will be O(log(n/C)), where C is the committee size. But I guess it will be hard to avoid it.  Though it also depends on how fast the network layer (potentially Waku) propagats msgs and also on execution time of the transaction as well.

> `Alvaro:` Well IIUC the only latency we are introducing is directly proportional to the levels of subcommitee nesting (ie the log(n/C)), which is understandably the price to pay. We have to make sure though that what we gain by introducing this is really worth the extra cost vs the typical comittee formation via randao or perhaps VDFs

> `Moh:` Again the Typical committee formation with randao can reduce their wait time value to match our latency, but then it becomes vulnerable and fail if the network latency becomes greater than their slot interval. If they keep it too large it may not fail but becomes slow. We won't have that problem. If an adversary has the power to slow down the network then their liveness will fail, whereas we won't have that issue.

## How would you compare Aptos and Carnot? - Alvaro

> `Moh:` It is variant of DiemBFT, Sui is based on Nahrwal, both cannot scale to more than few hunderd of nodes. That is why they achieve that low latency.

> `Alvaro:` Yes, so they need to select a committee of that size in order to operate at that latency What's wrong with selecting a committee vs Carnot's solution? This I'm asking genuinely to understand and because everyone will ask this question when we release.

> `Moh:` When you select a committee you have to wait for a time slot to make sure the result of consensus has propagated. Again strong synchrony assumption (slot time), formation of forks, increase in PoS attack vector come into play
Within committee the protocol does not need a wait time but for its results to get propagated if scalability is to be achieved, then wait time has to be added or signatures have to be collected from thousands of nodes.

> `Alvaro:` Can you elaborate?

> `Moh:` Ethereum (and any other protocol who runs the consensus in a single committee selected from a large group on nodes) has wait time so that the output of the consenus propagates to all honest nodes before the next committee is selected.  Else the next committee will fail or only forks will be formed and chain length won't increase. But since this wait time as stated, increases latency, makes the protocol vulnerable,   Ethereum  wants to avoid it to achieve responsivess.  To avoid wait time (add responsiveness) a protocol has to collect  attestation signatures from 2/3rd of all nodes (not a single committee) to move to the second round (Carnot is already responsive). But aggregating and verifying signatures thousands of signatures is expensive and time consuming. This is why they are working to improve BLS signatures. Instead we have changed the consensus protocol in such a way that a small number of signatures need to be aggregated and verified to achieve responsiveness and fast finality. We can further improve performance by using the improved BLS signatures.

> One cannot achieve fast finality while running the consensus in a small committee. Because attestation of a Block within the single committee is not enough. This block can be averted if the leader of the next committee has not seen it. Therefore, there should be enough delay so that all honest nodes can see it. This is why we have this wait/slot time. Another issue can be a malicious leader from the next chosen committee can also avert a block of honest leader and hence preventing honest leaders from getting rewards. If blocks of honest leaders are averted for long time, stake of malicious leaders will increase. Moreover, malicious leaders can delay blocks of honest nodes by making fork and averting them. Addressing these issues will further make the protocol complex, while still laking fast finality.

## Data Distribution

### How much failure rate of erasure code transmission are we expecting. Basically, what are the EC coding parameters that we expect to be sending such that we have some failure rate of transmission? Has that been looked into? - Dmitriy
> `Moh:` This is a great question and it points to the tension between the failure rate vs overhead. We have briefly looked into this (today me and Marcin @madxor discussed such cases), but we haven’t thoroughly analyzed this. In our case, the rate of failure also depends on committee size. We look into $10^{-3}$ to $10^{-6}$ probability of failure. And in this case, the coding overhead can be somewhere between 200%-500% approximately. This means for a committee size of 500 (while expecting receipt of messages from 251 correct nodes), for a failure rate of $10^{-6}$ a single node has to send > 6Mb of data for a 1Mb of actual data. Though 5x overhead is large, it still prevent us from sending/receiving 500 Mb of data in return for a failure probability of 1 proposal out of 1 million. From the protocol perspective, we can address EC failures in multiple ways: a: Since the root committee only forwards the coded chunks only when they have successfully rebuilt the block. This means the root committee can be contacted to download additional coded chunks to decode the block. b: We allow this failure and let the leader be replaced but since there is proof that the failure is due to the reason that a decoder failed to reconstruct the block, therefore, the leader cannot be punished (if we chose to employ punishment in PoS). 

### How much data should a given block be. Are there limits on this and if so, what are they and what do they depend on? - Dmitriy
> `Moh:` This question can be answered during simulations and experiments over links of different bandwidths and latencies. We will test the protocol performances with different block sizes. As we know increasing the block size results in increased throughput as well as latency. What is the most appropriate block size can be determined once we observe the tradeoff between throughput vs latency.

## Signature Propagation

### Who sends the signatures up from a given committee? Do that have any leadered power within the committee? - Tanguy
> `Moh:` Each node in a committee multicasts its vote to all members of the parent committee. Since the size of the vote is small the bit complexity will be low. Introducing a leader within each committee will create a single point of failure within each committee. This is why we avoid maintaining a leader within each committee

## Network Scale

### What is our expected minimum number of nodes within the network? - Dmitriy
> `Moh:` For a small number of nodes we can have just a single committee. But I am not sure how many nodes will join our network 

## Byzantine Behavior

### Can we also consider a flavor that adds attestation/attribution to misbehaving nodes? That will come at a price but there might be a set of use cases which would like to have lower performance with strong attribution. Not saying that it must be part of the initial design, but can be think-through/added later. - Marcin
> `Moh:` Attestation to misbehaving nodes is part of this protocol. For example, if a node sends an incorrect vote or if a leader proposes an invalid transaction, then this proof will be shared with the network to punish the misbehaving nodes (Though currently this is not part of pseudocode). But it is not possible to reliably prove the attestation of not participation.

> `Marcin:` Great, and definitely, we cannot attest that a node was not participating - I was not suggesting that;). But we can also think about extending the attestation for lazy-participants case (if it’s not already part of the protocol).

> `Moh:` OK, thanks for the clarification 😁 . Of course we can have this feature to forward the proof of participation of successor committees. In the first version of Carnot we had this feature as a sliding window. One could choose the size of the window (in terms of tree levels) for which a node should forward the proof of participation. In the most recent version the size of sliding window is 0. And it is 1 for the root committee. It means root committee members have to forward the proof of participation of their child committee members. Since I was able to prove protocol correctness without forwarding the proofs so we avoid it. But it can be part of the protocol without any significant changes in the protocol

> If the proof scheme is efficient ( as the results you presented) in practice and the cost of creating and verifying proofs is not significant then actually adding proofs can be good. But not required.

### Also, how do you reward online validators / punish offline ones if you can't prove at the block level that someone attested or not? - Tanguy
> `Moh:` This is very tricky and so far no one has done it right (to my knowledge). Current reward mechanism for attestation, favours fast nodes.This means if malicious nodes in the network are fast, they can increase their stake in the network faster than the honest nodes and eventually take control of the network. Or in the case of Ethereum a Byzantine leader can include signature of malicious nodes more frequently in the proof of attestation, hence malicious nodes will be rewarded more frequently. Also let me add that I don't have definite answer to your question currently, but I think by revising the protocol assumptions, incentive mechanism and using a game theoretical approach this problem can be resolved.

> An honest node should wait for a specific number of children votes (to make sure everyone is voting on the same proposal) before voting but does not need to provide any cryptographic proof. Though we build a threshold signature from root committee members and it’s children but not from the whole tree. As long as enough number of nodes follow the the protocol we should be fine. I am working on protocol proofs. Also I think bugs should be discovered during development and testing phase. Changing protocol to detect potential bug might not be a good practice.

### doesn't having randomly distributed malicious nodes (say there is a 20%) increase the odds that over a third of a committee end up being from those malicious ones? It seems intuitive: since a 20% at the global scale is always <1/3, but when randomly distributed there is always non-zero chance they end up in a single group, thus affecting liveness more and more the closer we get to that global 1/3. Consequently, if I'm understanding the algorithm correctly, it would have worse liveness guarantees that classical pBFT, say with a randomly-selected commitee from the total set.  - Alvaro

> `Alexander:` We assume that fraction of malicious nodes is $1/4$ and given we chooses comm. sizes, which will depend on total number of nodes, appropriately this guarantees that with high probability we are below $1/3$ in each committee.

> `Alvaro:` ok, but then both the global guarantee is below that current "standard" of 1/3 of malicious nodes and even then we are talking about non-zero probabilities that a comm has the power to slow down consensus via requiring reformation of comms (is this right?)

> `Alexander:` This is the price  we pay to improve  scalability. Also these probabilities of failure can be very low.

### What happens in Carnot when one committee is taken over by >1/3 intra-comm byzantine nodes? - Alvaro

> `Moh:` When there is a failure the overlay is recalculated. By gradually increasing the fault tolerance by a small value, the probability of failure of a committee slightly increases but upon recalculating the correct overlay, inactive nodes that caused the failure of previous overlay (when no committee has more than 1/3 Byzantine nodes) will be slashed.



## Synchronicity

### How to guarantee synchronicity. In particular how to avoid that in a big network different nodes see a proposal with 2c+1 votes but different votes and thus different random seed - Giacomo

> `Moh:` The assumption is that there exists some known finite time bound Δ and a special event called GST (Global Stabilization Time) such that:

> The adversary must cause the GST event to eventually happen after some unknown finite time. Any message sent at time x must be delivered by time $\delta + \text{max}(x,GST)$. In the Partial synchrony model, the system behaves asynchronously till GST and synchronously after GST.

> Moreover, votes travel  one  level at a time from tree leaves to the tree root. We only need the proof of votes of root+child committees to conclude with a high probability that the majority of nodes have voted.

### That's a timeout? How does this work exactly without timing assumptions? Trying to find this in the document -Alvaro

> `Moh:` Each committee only verifies the votes of its child committees. Once a verified 2/3rd votes of its child members, it then sends it vote to its parent. In this way each layer of the tree verifies the votes (attests) the layer below. Thus, a node does not have to collect and verify 2/3rd of all thousands of votes (as done in other responsive BFTs) but only from its child nodes.