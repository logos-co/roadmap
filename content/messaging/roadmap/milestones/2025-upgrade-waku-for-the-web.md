---
title: Upgrade Waku for the Web
tags:
    - messaging-milestone
date: 2025-02-10
github: https://github.com/waku-org/pm/milestone/43
---
EDC: 2025-04-18

Harden Waku for the Browser (js-waku as client, nwaku as service node) to build robust and reliable web applications for Logos.

## Deliverables

### [Scalable Data Sync in browser](https://github.com/logos-messaging/pm/issues/280)

Implement the e2e reliability protocol SDS in js-waku; to build Logos applications with the same reliability foundation as the Status app.

### [Improved browser bootstrap](https://github.com/logos-messaging/pm/issues/290)

Improve bootstrap strategy by avoiding relying on bootstrap nodes beyond discovery. Design and implement a working strategy in js-waku. Review implementation in nwaku to copy the findings. A spec may be produced, depending on the complexity of the solution.


### [Browser simulations](https://github.com/logos-messaging/pm/issues/279)

Include js-waku (browser) to scalability simulations, to help confirm scalability of the library; with nwaku as a service node
