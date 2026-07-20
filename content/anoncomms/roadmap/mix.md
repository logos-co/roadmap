# Mix Track

Anonymous routing is a basic requirement to provide network-level anonymity for Logos modules.
The first step is to provide sender anonymity via a [libp2p mix protocol](https://rfc.vac.dev/vac/raw/mix/) that was previously delivered.
However, this protocol lacks several mechanisms to make it more generally useful, including DoS protection, hidden services, and more.
It's also not been generalised to more Logos use cases outside of its [integration for Waku Lightpush](https://github.com/waku-org/specs/blob/master/standards/core/mix.md).
Particularly, privacy-preserving file sharing in Logos Storage can benefit from compatible mix mechanisms.

Within this track, we're building modular mix capabilities into nim-libp2p
for use by Logos Core services.
This includes protection against DoS and 50% + 1 Sybil attacks,
as well as common abuses of exit nodes.
The protection mechanism(s) will be published separately
as pluggable extensions to the libp2p mix specification.

## Roadmap

**FURPS**: [Mix FURPS](/anoncomms/furps/mix.md)

**Scheduled milestones**:
- [Testnet v0.1](/anoncomms/roadmap/testnet_v0.1/mix_v0.1.md)
- [Testnet v0.2](/anoncomms/roadmap/testnet_v0.2/mix_v0.2.md)
- [Testnet v0.3](/anoncomms/roadmap/testnet_v0.3/mix_v0.3.md)

Future work in this track, include:
1. Introducing longer-lived mix circuits
2. Incentivising mix participation
3. Introducing multiple mix layers for multiple packet sizes

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
|  |  |
