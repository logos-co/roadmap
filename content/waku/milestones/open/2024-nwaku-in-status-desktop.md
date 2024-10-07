---
title: Nwaku in Status Desktop
tags:
    - waku-milestone
date: 2024-09-07
---

[Milestone Nwaku in Status Desktop (Relay mode)](https://github.com/waku-org/pm/milestone/33)

Estimated date of delivery: 2025-01-31

There is work duplication in go-waku and nwaku due to the common area of concern: relay usage and native library.

With this milestone, Status Desktop builds can use nwaku instead of go-waku. However, it should be seen as a MVP as further hardening and implementation of light client mode will be missing.
Go-waku will still be used for Status Mobile.

This strategy enables concrete steps toward sunsetting go-waku in a short period of time, avoiding a perpetual prototyping phase where many high risk problems (e.g. mobile bundle size, etc) have to be solved before the switch can be made.

The next milestone will then focus on hardening the nwaku Desktop build and implement missing features such as [Reliability Protocol for resource-restricted](). Once done, it will reduce the scope of go-waku maintenance to light clients only and drastically reduce the duplicate work done between nwaku and go-waku.

Note that we want to draw the line to RLN in terms of go-waku maintenance, meaning that if Status were to use RLN (see [Scale 1:1 chat messages PoC]()), then it should happen with nwaku.

### Deliverable: [Nwaku on Windows](https://github.com/waku-org/pm/issues/239)

Ensure that nwaku can build and run on Windows. This includes regular PR CI and test run done on Windows environments.

### Deliverable: [Nwaku in Status Desktop (Relay)](https://github.com/waku-org/pm/issues/203)

Use nwaku instead of go-waku in Status Desktop and produce a working and distributable special (no light client) build for Linux and Mac OS environments.
“Light client” mode should be disabled for this build as only relay protocols are implemented.
Windows builds are also out of scope.

This includes an abstraction layer to enable the other builds to still use go-waku:
- Desktop Windows
- Desktop “prod” (with both light client and relay modes, via go-waku)
- Mobile

CLIs created for Vac/QA should also be produced with nwaku to enable QA and DST to run tests/simulations.
