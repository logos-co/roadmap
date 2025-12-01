# Capability Discovery FURPS

## Functionality

1. Libp2p Kad-DHT nodes can advertise their own addresses and capabilities in a signed record
2. Libp2p Kad-DHT nodes can discover and validate the signed records of random, advertised peers
3. Libp2p Kad-DHT nodes can filter discovered records for specific capabilities
4. Libp2p nodes can use a general capability discovery API to discover peers with specific capabilities
5. The capability discovery protocol adapts DISC-NG for Kad-DHT to ensure efficient capability discovery
6. Client nodes can discover addresses of peers with specific capabilities without participating in the Kad-DHT

## Usability

1. The capability discovery protocol is published in a specification
2. A PoC implementation accompanies the published protocol
3. The PoC implementation contains instructions to allow open dogfooding
4. A forum post introduces the new protocol, explains privacy tradeoffs, and links to spec and PoC implementation
5. A Kad-DHT discovery protocol and API is published in a specification
6. The Kad-DHT discovery API is available in Nim and C
7. The reference Kad-DHT discovery implementation is completed in Nim over the nim-libp2p Kad-DHT implementation
8. The reference capability discovery implementation is completed in Nim over the nim-libp2p Kad-DHT implementation
9. Capability discovery is integrated in nwaku to replace discv5 discovery
10. The discovery module is integrated into Logos Core

## Reliability

1. 

## Performance

1. 

## Supportability

1. 

## Miscellaneous dependencies:

1. Dependency on nim-libp2p implementation of Kad-DHT
1. Dependency on DST for benchmarking and iterative improvement