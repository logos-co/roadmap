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
5. A Kad-DHT discovery protocol is published in a specification
6. The Kad-DHT discovery API is available in Nim
7. The reference Kad-DHT discovery implementation is completed in Nim over the nim-libp2p Kad-DHT implementation
8. The reference capability discovery implementation is completed in Nim over the nim-libp2p Kad-DHT implementation
9. Capability discovery is integrated in Logos Delivery to replace discv5 discovery
10. The capability discovery module is available as a Logos Core module
11. The capability discovery API is published in a specification
12. An extensible peer record library allows application modules to create and maintain discoverable records
13. Capability discovery is integrated into `chat2mix` application for dogfooding

## Reliability

1. 

## Performance

1. Capability discovery provides comparable performance to discv5 when all nodes support the same service
2. Capability discovery performs better than discv5 to find a sparse service

## Supportability

1. Capability discovery can be benchmarked in large scale Delivery module simulations
2. Capability discovery can be benchmarked in a standalone p2p capability discovery module

## Miscellaneous dependencies:

1. Dependency on nim-libp2p implementation of Kad-DHT
1. Dependency on DST for benchmarking and iterative improvement