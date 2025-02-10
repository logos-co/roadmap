---
title: Upgrade Waku for the Web
tags:
    - waku-milestone
date: 2025-02-10
---

Github Milestone: https://github.com/waku-org/pm/milestone/43

Harden Waku for the Browser (js-waku as client, nwaku as service node) to build robust and reliable web applications for Logos.

### Deliverable: [Scalable Data Sync in browser]()

Implement the e2e reliability protocol SDS in js-waku; to build Logos applications with the same reliability foundation as the Status app.

### Deliverable: [Improved browser bootstrap]()

Improve bootstrap strategy by avoiding relying on bootstrap nodes beyond discovery. Design and implement a working strategy in js-waku. Review implementation in nwaku to copy the findings. A spec may be produced, depending on the complexity of the solution.


### Deliverable: [Browser simulations]()

Include js-waku (browser) to scalability simulations, to help confirm scalability of the library; with nwaku as a service node
