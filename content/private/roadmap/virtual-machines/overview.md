---
titles: "Virtual Machines Overview"
tags:
  - "virtual machines"
  - "zero knowledge"
---

## Motivation
Logos seeks to use a privacy-first virtual machine for transaction execution. We believe this can only be acheived through zero-knowledge. The majority of current work in the field focuses more towards the aggregation and subsequent verification of transactions. This leads us to explore the researching and development of a privacy-first virtual machine. 

LINK TO APPROPRIATE NETWORK REQUIREMENTS HERE

#### Educational Resources
- primer on Zero Knowledge Virtual Machines - [link](https://youtu.be/GRFPGJW0hic)

### Implementations:
- TinyRAM - link
- CairoVM
- zkSync
- Hermes
- [MIDEN](https://polygon.technology/solutions/polygon-miden/) (Polygon)
- RISC-0
	- RISC-0 Rust Starter Repository - [link](https://github.com/risc0/risc0-rust-starter)
	- targets RISC-V architecture
	- benefits:
		- a lot of languages already compile to RISC-V
	- negatives:
		- not optimized or EVM where most tooling exists currently

## General Building Blocks of a ZK-VM
- CPU
	- modeled with "execution trays"
- RAM
	- overhead to look out for
		- range checks
		- bitwise operations
		- hashing
- Specialized circuits
- Recursion

## Approaches
- zk-WASM
- zk-EVM
- RISC-0
	- RISK-0 Rust Starter Repository - [link](https://github.com/risc0/risc0-rust-starter)
	- targets RISC-V architecture
	- benefits:
		- a lot of languages already compile to RISC-V
		- https://youtu.be/2MXHgUGEsHs - Why use the RISC Zero zkVM?
	- negatives:
		- not optimized or EVM where most tooling exists currently

## General workstreams
- bytecode compiler
- zero-knowledge circuit design
- opcode architecture (???)
- engineering
- required proof system
- control flow
	- MAST (as used in MIDEN)

## Roles
- [ZK Research Engineer](zero-knowledge-research-engineer.md)
- Senior Rust Developer
