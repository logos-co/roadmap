---
title: "VM Foundations"
---
## `vac:nes:zkvm:vac:vm-foundations`
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
    VM Foundations: 2024-03-01, 2024-12-31
```

- status: 40%
- CC: team

### Description

The focus of this milestone is on the significant adaptation of a Zero-Knowledge Virtual Machine (zkVM) that places an emphasis on privacy enhancements. By modifying existing zkVM frameworks, the goal is to integrate advanced cryptographic primitives to create a highly secure, privacy-preserving computational environment. This includes exploring and implementing cutting-edge research in cryptographic techniques and ensuring these can be efficiently executed within our zkVM framework, with an example pathway through Nexus VM for specific Rust-based cryptographic implementations. The analysis includes RISC Zero, GKR-based VMs, and Layer 2 zkVMs, with a focus on their instruction set architectures, privacy capabilities, proof complexities, and specific innovations or limitations. This milestone will be divided in several sub-milestones in order to understand which paths to take and which path would better fit in order to get tangible output (see Work Breakdown and Deliverables)


---

### Work Breakdown & Deliverables
* * [x] Sub Milestone 1: Privacy Cryptography Research and Selection

  **Work Breakdown:** Conduct exhaustive research into cryptographic primitives that enhance privacy, determining which are most applicable and promising for integration into a zkVM.
  
  **Deliverables:**
    * * [x] A comprehensive review of current cryptographic techniques that enhance privacy, including signature schemes and MPC schemes, focusing on those with potential for zkVM integration -> [1. List of zkVMs](https://notes.status.im/s/_4MmpSCc9) and [2. In-depth Review](https://github.com/vacp2p/zk-explorations/issues/40).
    * * [x] Analysis of selected cryptographic primitives for implementation in Rust, considering their compatibility with the zkVM environment, specifically within frameworks like Nexus VM -> [List of Primitives and Privacy Requirements](https://notes.status.im/s/AFBtW3Prj).
    * * [x] A blogpost reflecting the research that have been conducted. -> [Exploring zkVMs: Which Projects Truly Qualify as Zero-Knowledge Virtual Machines?](https://vac.dev/rlog/zkVM-explorations)

* * [ ] Sub Milestone 2: Cryptographic Implementation and Testing (Related to Sub Milestone 1)

  **Work Breakdown:** Implement the selected cryptographic primitives in Rust (From Sub Milestone 1), ensuring they are optimized for privacy enhancement within the zkVM framework.
  
  **Deliverables:** Repo documenting the testing processes, performance evaluations, and optimizations applied to the cryptographic implementations to ensure privacy efficiency and scalability within the zkVM.


* * [ ] Sub Milestone 3: zkVM Adaptation for Privacy

  **Work Breakdown:** Adapt an existing zkVM to integrate the implemented cryptographic primitives, prioritizing privacy preservation. For instance we can think about replacing Merkle trees with Verkle trees within existing VMs, or adding proof compression layer to replace logarithmic proof sizes with constant sized proofs. The possible prototype could potentially incorporate selected features and optimizations from the previous phases. This involves implementing privacy-preserving properties, selecting appropriate instruction sets, and integrating advancements such as Nova-based proof systems.
  
  **Deliverables:**
  * Potential Privacy-Centric zkVM Prototype: A zkVM that integrates the Rust-based cryptographic libraries, showcasing enhanced privacy capabilities.
  * Detailed documentation on performance metrics and comparative analysis with existing systems.

**Impact:** This plan underscores the goal for delivering a zkVM with strong focus on privacy enhancements. By identifying and integrating advanced cryptographic primitives, and considering the deployement within environments like Nexus VM or similar VMs, this milestone aims to make significant contributions to the field of privacy-preserving computation. Sub milestones may slightly change and some of them might be accomplished faster than others especially that during the previous period, we have focused on existing zkVMs and extensively studied the integration of cryptographic primitives to enhance pivacy.



