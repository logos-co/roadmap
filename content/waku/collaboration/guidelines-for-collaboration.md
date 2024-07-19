---
title: Guidelines for Collaboration
tags:
    - Waku
    - collaboration
date: 2024-07-18
lastmod: 2024-07-18
---

# Guidelines for Collaboration

## Visibility Into Work and Productivity

- **Daily Standup** The `stand-up` channel on the Waku Discord server is where core contributors share their daily stand up summarizing their daily planned tasks.
- **Weekly Report**: Every Friday, all team members must add a comment to the *Epic* GH issue they own and worked on the past week or planned to work on next week. See [Waku project management](https://github.com/waku-org/pm#readme) for more.
- **Track your work with Github issues**: Make sure to always have an open Github issue corresponding to your current task. Follow the following post for some [insights on how to write good Github issues](https://wiredcraft.com/blog/how-we-write-our-github-issues/).
- **Quality Github pull requests**: Github issues are (typically) followed by one or multiple Github pull requests (PR) to address the task(s) set out in the issue. PRs should be of *reasonable size* and with *proper documentation*. All commits within the PR [should be signed](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits). Do not forget to [request PR review](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) from your peers when your PR is ready. Before merging an open PR, all commits should be rebased on master and squashed into a single commit with a [semantic commit message](https://www.conventionalcommits.org/en/v1.0.0/). Use the following guides on how to make a good PR
    - [Anatomy of a perfect pull request](https://opensource.com/article/18/6/anatomy-perfect-pull-request)
    - [How to write a perfect pull request](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/). This post expands on good PR documentation and communication.
- **PR Reviews:** Spend a portion (10-20%) of your daily work reviewing other team members’ Pull requests. This will allow a swift and smooth development process.
- **Seek feedback** Do not hesitate to seek feedback from the senior members of the team, especially those who work closely with you.
- **Communicate effectively:** Know the team members that are relevant to your project and get their feedback and comments on your project when need be.

## Communication media

- **Basic principle:** Waku is an open-source protocols and software. We are part of a wider community. As such, your first instinct should be to communicate *as openly as possible* in the forum/channel most suited to your query. That said, we have channels for team-internal communications that relate to project management, team travel or other more personal conversations.
- **Discord server:** it takes a while to get used to the bewildering number of channels on the Waku Discord server. Here are some guidelines to help you get started:
    - `#intros`: a good place to introduce yourself to the community once you’ve joined
    - `#gm`: a quick “good morning” when you start your day adds to a friendly environment and shows other community members that you’re online
    - `#stand-up`: daily one-liners indicating what your focus will be for the day
    - `#support`: general support questions related to Waku protocols or the organisation
    - `#nwaku-contribute`, `#go-waku-contribute`, `#js-waku-contribute`: discussions related to the nim, go and JavaScript Waku v2 clients respectively
    - `#team-pm-private`: team-internal discussions related to Waku Product project management.
    - We maintain various team-internal channels, including `#afk`, `#watercooler`, `#events`, and more, which facilitate sharing while we work
- **Examples:**
    - *You’re getting started and have a question related to the nwaku codebase:* ask away in the open `#nwaku-contribute` channel. Feel free to tag specific people that you think may help, but don’t be too surprised if other community members jump in with an answer.
    - *While reading a Waku RFC you have a suggestion on how to improve the protocol:* ping the team on the open `#support` channel for general question about protocols, or `#rfc` if it is about phrasing or clarity in the RFC. You could also create a GH issue in the [vacp2p/rfc](https://github.com/vacp2p/rfc) repository.
    - *You want to inform the team that you’re off sick:* use the team-internal `#afk` channel.

## Autonomy and Motivation

- **Alignment with principles**: Waku follows a set of principles as described in https://status.im/about/, a good understanding of those is vital to making a meaningful contribution to the team. Should you have any questions regarding the principles, do not hesitate to reach out to your team members for more insights and explanations.
- **Familiarize yourself with relevant tools and tech** Your work involves knowledge of the basics of Git and [Github](https://docs.github.com/) e.g., creating issues, pull requests (PRs), branches, merging, rebasing, etc. Spend some time and familiarize yourself with these concepts.
