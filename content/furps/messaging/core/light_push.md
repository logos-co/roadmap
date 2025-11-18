---
title: Light Push
date: 2025-11-13
tags:
    - messaging-furps
---
## Functionality

1. RLNaaS clients proceed to pay RLNaaS providers for attaching RLN proof to published messages.
2. RLNaaS clients can assess the quality of a provisioned RLNaaS and use it to build local reputation.
3. RLNaaS clients can use local reputation of RLNaaS providers to select what provider to use.

## Usability

1. A consumer node can pay a service node for RLNaaS.
2. A consumer node can select an RLNaaS provider based on local reputation.

## Reliability
 
1. A consumer prefers new providers to known unreliable providers.
2. In a stable network, a client can find, pay and send a message via a RLNaaS provider (**Vac-QA**)
   in 90% of cases **(Vac-DST)**
3. A client can assess whether an RLNaaS provider has relayed their message (**Vac-QA**)
   in 90% of cases **(Vac-DST)**.

## Performance

1. Assuming a block time of 5 seconds,
   a user can execute an RLNaaS payment and send a message within 30 seconds (Vac-DST)

## Supportability

1. A nwaku-based CLI on a testnet, interaction with a custodial wallet is out-of-scope.

## + (Privacy, Anonymity, Deployments)