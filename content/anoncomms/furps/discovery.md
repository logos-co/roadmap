# Capability Discovery FURPS

## Functionality

1. Libp2p Kad-DHT nodes can advertise their own address against one or more capabilities
2. Libp2p Kad-DHT nodes can discover addresses of peers with specific capabilities
3. Libp2p nodes can use a general capability discovery API to discover peers with specific capabilities
4. The capability discovery protocol adapts DISC-NG for Kad-DHT to ensure efficient capability discovery
5. Client nodes can discover addresses of peers with specific capabilities without participating in the Kad-DHT

## Usability

1. The capability discovery protocol is published in a specification
2. A PoC implementation accompanies the published protocol
3. The PoC implementation contains instructions to allow open dogfooding
4. A forum post introduces the new protocol, explains privacy tradeoffs, and links to spec and PoC implementation
5. A general capability discovery API is published in a specification
6. The general capability discovery API is available in Nim and C
7. The reference implementation is completed in Nim over the nim-libp2p Kad-DHT implementation
8. The reference implementation is integrated in nwaku to replace discv5 discovery
9. The reference discovery module is integrated into Logos Core

## Reliability

1. 

## Performance

1. 

## Supportability

1. 

## Miscellaneous dependencies:

1. Dependency on nim-libp2p implementation of Kad-DHT
1. Dependency on DST for benchmarking and iterative improvement