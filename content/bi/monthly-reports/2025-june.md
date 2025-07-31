---
title: 2025-06 BI Monthly report
tags:
  - BI-updates
date: 2025-07-02
lastmod: 2025-07-02
draft: false
description: June Monthly update of BI Team
---

## Executive Summary

## Key Updates

### Main Focus

The main focus of the month have been:
* Building metrics for Github community engagement
* Building IFT RAG using internal documentation
* Providing Website analytics
* Extracting social media data to build give sentiment analysis of community interaction
* Deploy a Metadata Catalog and present DataHub in Townhall.

### Visualization

* Keycard - [Social Media Dashabord](https://github.com/status-im/data-docs/issues/43): https://grafana.bi.status.im/d/aenu0t2u920hsd/keycard-global-analytics?orgId=1&from=now-90d&to=now&timezone=browser
* Discord - [Show public activity](https://github.com/status-im/data-docs/issues/34)
* Twitter - [Visualize the posts interracting with our accounts](https://github.com/status-im/data-docs/issues/55) https://superset.bi.status.im/superset/dashboard/twitter-tagged-messages
* Podcasts - [Create analytics for Youtube and Twitter Accounts](https://github.com/status-im/data-docs/issues/48) https://superset.bi.status.im/superset/dashboard/youtube-analytics

### Data Extraction

* Social media:
    * Improve Discord extraction
    * Extract [Tweets interracting without our tags](https://github.com/status-im/data-docs/issues/36)

### AI Solution

* Retrieval of Data extracted.
    * Build Pipelines for clean retrieval
    * testing different models

### Infrastructure

* [Deploy RAG test environment](https://github.com/status-im/infra-bi/issues)
* Finish configuring DataHub synchronization
* Migrate Production host for better price / quality

## Future Plan

### Visualization

* Improve dashboard for Status Website analytics
* Create Dashboard to monitor [Waku bandwith and messages rate](https://github.com/status-im/data-docs/issues/3).

### Data Extraction

* Narative building: extract history to build narative on.
    * [Scrap Blogs content](https://github.com/status-im/data-docs/issues/61)
    * [Scrap Social medias](https://github.com/status-im/data-docs/issues/62)
    * [Extract Data from Farcaster](https://github.com/status-im/data-docs/issues/49)
* Status App - [Extract Paraswap data](https://github.com/status-im/data-docs/issues/42)
* Status Network - [Improve the data extraction](https://github.com/status-im/data-docs/issues/41)
* Finance: [Extract platform where SNT is listed](https://github.com/status-im/data-docs/issues/37)
* Insight, help extracting FURBS and milestones of different project

### AI Solution

* Deploy the Prod environment and make it available to all CCs.
* [Enhance sentiment analysis](https://github.com/status-im/data-docs/issues/45) by adding translation and include more data source.

### Infrastructure

* IFT LLM - Finish building the environment Pipeline
    * Prod environment ready for usage
    * Townhall presentation
* Data Lake: Optimizing the prod environment


## Sources and Useful Links

* [Repository to create new issues](https://github.com/status-im/data-docs): If your team need some Visualization or access to some data, please create an issue in this repository
* [BI documentation](https://docs.bi.status,im)
* [Data Catalog](https://datahub.bi.status.im)

