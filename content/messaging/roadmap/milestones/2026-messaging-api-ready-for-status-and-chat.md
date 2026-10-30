---
title: Messaging API — Ready for Status and Chat
tags:
  - messaging-milestone
date: 2026-10-29
github: https://github.com/logos-messaging/pm/issues/520
---

**Targets**: Testnet v0.5

**Resources Required**:
- Delivery Team

Status and Logos Chat are the first applications built on the Messaging API, and they need features beyond General Availability. This milestone collects them, starting with message priorities. More deliverables are added as the integrations surface them.

## Deliverables

### [Add message priorities](https://github.com/logos-messaging/pm/issues/500)

**Owner**: Delivery Team

Applications set a priority on each message they send, and the send queue is ordered by it. Needed for the [Status integration](2026-status-logos-delivery-integration) ([#488](https://github.com/logos-messaging/pm/issues/488)) and later for Logos Chat. `logos-delivery-go` implementation MAY be used for reference.

**Done when**: `send` accepts a priority, and under rate limiting higher-priority messages leave the queue first.
