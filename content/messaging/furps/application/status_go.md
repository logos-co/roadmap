---
title: Status-go
date: 2025-11-13
tags:
    - messaging-furps
---
## Functionality

1. Nwaku is the used Waku implementation for relay mode. 
2. Nwaku is the used Waku implementation for light mode.

## Usability

1. Status Desktop CI run additional builds that uses nwaku. 

## Reliability

1. status-backend built with nwaku can pass the status-cli tests **(Vac-QA)**.

## Performance

1. status-backend built with nwaku has similar performance than go-waku based status-backend within 10% margin, 
   on metrics measured by existing simulations (Vac-DST).

## Supportability

1. Status Desktop binary for Linux, Mac and Windows.
2. Relay mode is supported.
3. Light mode is supported.
4. Status Mobile binary for Android and iOS.
5. Status Tablet binary for Android and iOS.

## + (Privacy, Anonymity, Deployments)

1. Status Desktop CI builds binaries with nwaku, alongside go-waku-based binaries.
2. Status Mobile and Tablet CI builds binaries with nwaku, alongside go-waku-based binaries.