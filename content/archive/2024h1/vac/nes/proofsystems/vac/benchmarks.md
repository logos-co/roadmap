---
title: "Benchmarks"
---
## `vac:nes:proofsystems:vac:benchmarks`
---

```mermaid
%%{ 
  init: { 
    'theme': 'base', 
    'themeVariables': { 
      'primaryColor': '#BB2528', 
      'primaryTextColor': '#fff', 
      'primaryBorderColor': '#7C0000', 
      'lineColor': '#F8B229', 
      'secondaryColor': '#006100', 
      'tertiaryColor': '#fff' 
    } 
  } 
}%%
gantt
  tickInterval 1month
  dateFormat YYYY-MM-DD 
  section Status
    Benchmarks: 2023-03-01, 2024-05-31
```

- status: 70%
- CC: team

### Description

Since Nescience's main goal is to be innovative in privacy technology (by building a virtual machine that prioritizes privacy,
utilizing mainstream and specialized instruction sets optimized for Zero-Knowledge (ZK) applications),
a key focus is the evaluation of different proof systems especially new ones like the Nova-based proof system against alternatives to identify the best fit for our needs.
This milestone is important for advancing privacy-preserving technologies, setting a benchmark for the fair and effective comparison of ZKP systems.
It's important for both our project's infrastructure and the broader field. The diversity of ZKP system designs necessitates a standardized benchmarking approach to ensure fair comparison,
respecting each system's unique features (which we are aiming to achieve and accomplish)

Comprises:

* research log post
* make benchmark repo public + README (explaining how to execute benchmarks)
* benchmarks (recursive) for all current proof-systems (unless there is a good reason not to include one)
* scientific paper

### Work Breakdown

* By conducting deep investigation of ZKP systems, we aim to demystify the complexities of cryptographic benchmarking and highlight our findings' relevance to privacy technology advancement.

* By rewriting circuits and using same techniques as recursive approach and Poseidon hash functions, we ensure that the comparison focuses on inherent system properties rather than external variables.
This approach will help normalize one of the key variables across systems, allowing for a more direct and fair comparison of their efficiency, scalability, and other critical metrics.


### Deliverables

* Research blog post
* Public benchmark repo on Github (it includes and overall explanation, full circuits implementation and explanation, instructions to execute benchmarks, and testing results on diffferent machines)
* Implementation of recursive circuitsfor all current proof-systems (unless there is a good reason not to include one)
* scientific paper

**Impact:** By selecting the most effective proof system, such as potentially Nova-based ones, based on superior performance,
we aim to strengthen our project's foundation and contribute valuable insights to the privacy field and the scientific community.
This milestone can be useful to any team within the organization to help choose the correct proof system based on their needs
and in general it help the scientific community to get useful insights to progress on different projects within the blockchain field.

