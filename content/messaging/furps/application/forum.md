---
title: Forum
tags:
    - messaging-furps
date: 2025-11-13
---

## Functionality

1. Users can identify themselves by signing with their Bitcoin key.
2. Only users owning Logos ordinal or an ENS can create a cell.
3. Any user (authenticated or not) can see the content; basic encryption functionality.
4. Existing cells can be listed.
5. Cell can be created with a name, description, icon; icon size will be restricted; created is solo admin.
6. Post can be created in a cell with a title and body; text only.
7. Comments can be made on posts and other comments; text only.
8. Posts can be upvoted.
9. Users can setup a call sign; bitcoin identity operator unique name - remains - ordinal used as avatar; OP number out-of-scope (not onchain).
10. Cell admin can mark posts and comments as moderated.
11. Cell admin can mark users as moderated.
12. Users can identify themselves by signing with their Web3 key.
13. Posts, comments and cells have a relevance index, which can be used to order or hide them in the UX. 
14. The relevance index is lowered for post and comments which are moderated, or from a moderated user.
15. The relevance index is increased if the author owns an ENS or Logos ordinal.
16. The relevance index is increased if the post or comment is upvoted by an ENS or Logos ordinal owner.
17. The relevance index is increased if the post has a comment from an ENS or Logos ordinal owner.
18. Anonymous users can upvote, comments and post.

## Usability

1. A user can see all topics through all cells.
2. A user can see the number of active members per cell; deduced from retrievable activity.
3. Users can bookmark posts and topics; local only.
4. Users can sort topics per new or top.
5. The ordinal picture and information are used to identify user, in addition to the custom nickname.
6. Moderated users, comments, and posts are hidden.
7. Users do not need to sign every message with their wallet.
8. Users do not need any software beyond a browser to use the forum.
9. This includes a prototype UI to dogfood the PoC; Nice UI will be handled by Comms Hubs team.
10. A library with clear API is produced to enable frontend developers to use it with a nice UI.
11. ENS holders can choose to use an ENS for display purposes.
12. The relevance index is used to push most relevant posts and comments on top.

## Reliability

1. Data is ephemeral; and will disappear after some time; No effort spent on topic or comment durability, out of scope for now.
2. End-to-end reliability strategy will be employed to enable app instance to know about missing messages and attempt to retrieve them.

## Performance

None

## Supportability

1. Web app; bitcoin and ethereum wallets optional.

## + (Privacy, Anonymity, Deployments)

1. A centralised API is used to get Bitcoin ordinal information.
2. The Forum uses The Waku Network.