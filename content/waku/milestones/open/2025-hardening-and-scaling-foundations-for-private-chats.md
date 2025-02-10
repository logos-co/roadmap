---
title: Hardening and scaling foundations for private chats
tags:
    - waku-milestone
date: 2025-01-13
---

https://github.com/waku-org/pm/milestone/40

With this milestone, we establish a foundation for scaling one-to-one and private group chats to support a larger number of users. Additionally, we will harden the underlying protocols by studying and refining the current specifications, as well as isolating user traffic from other features.

Our approach to RLN integration will involve two initial steps. First, we will implement a low rate limit and collaborate with the Status team to address the user experience challenges that arise. By combining this with clear specifications, we will be able to better understand scalability for one-to-one chats, including the relationships between user count, usage, and bandwidth/resource utilization.

Furthermore, the enhanced specifications will enable the Vac-QA team to expand test coverage, increasing confidence in reliability and facilitating any future refactoring efforts.

To achieve this milestone successfully, it is essential that one-to-one chats are isolated from other features using Waku, such as Communities, user settings backup, and device pairing/synchronization. Ideally, these features should be either removed or disabled by default to ensure accurate testing and evaluation.

Private chats refers to both one-to-one and private group chats.

## Deliverables

### [Survey impact of message rate and size limit](https://github.com/waku-org/pm/issues/277)

### [Test device pairing and syncing](https://github.com/waku-org/pm/issues/278)

Collaborate with Vac-QA team to duplicate existing library testing in device pairing and syncing context; proceed with bug fixes when possible. This is not a re-write of the protocol but a thorough quality check.
