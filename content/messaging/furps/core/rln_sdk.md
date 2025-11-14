---
title: Logos-messaging RLN SDK
date: 2025-11-13
tags:
    - messaging-furps
---
## Functionality

1. Accepts RLN network configuration at initialization.
2. API to pass messages for proof validation.
3. API to import RLN credentials, compatible with RLN Membership management.
4. API to accept Waku Message and generate proof.
5. API to inform on configured rate limit parameters and remaining quota.

## Usability

1. TWN RLN configuration is applied by default.
2. No boilerplate code beyond initialization is necessary to pass RLN instance in a Waku API implementation.
3. Rate usage is persisted across restarts.

## Reliability

## Performance

## Supportability

1. library can be used in Go applications; available on pkg.go.dev.
2. library can be used in Rust applications; import via git path.
3. library can be used in Nim applications; import via git path.

## + (Privacy, Anonymity, Deployments)

1. Only one set of credentials can be used at a given time.