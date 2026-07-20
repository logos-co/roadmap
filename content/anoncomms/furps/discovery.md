# Service Discovery FURPS

## Functionality

1. Libp2p Kad-DHT nodes can advertise their own addresses and capabilities in a signed record
2. Libp2p Kad-DHT nodes can discover and validate the signed records of random, advertised peers
3. Libp2p Kad-DHT nodes can filter discovered records for specific capabilities
4. Libp2p nodes can use a general service discovery API to discover peers with specific capabilities
5. The service discovery protocol adapts DISC-NG for Kad-DHT to ensure efficient service discovery
6. Client nodes can discover addresses of peers with specific capabilities without participating in the Kad-DHT
7. Service discovery correctly discovers all advertised peers in a topology of several thousand nodes
8. Service discovery correctly discovers peers advertising a sparse service in a topology of several thousand nodes

## Usability

1. The service discovery protocol is published in a specification
2. A PoC implementation accompanies the published protocol
3. The PoC implementation contains instructions to allow open dogfooding
4. A forum post introduces the new protocol, explains privacy tradeoffs, and links to spec and PoC implementation
5. A Kad-DHT discovery protocol is published in a specification
6. The Kad-DHT discovery API is available in Nim
7. The reference Kad-DHT discovery implementation is completed in Nim over the nim-libp2p Kad-DHT implementation
8. The reference service discovery implementation is completed in Nim over the nim-libp2p Kad-DHT implementation
9. Service discovery is integrated in Logos Delivery to discover libp2p mix nodes
10. The service discovery module is available as a Logos Core module
11. The service discovery API is published in a specification
12. An extensible peer record library allows application modules to create and maintain discoverable records
13. Service discovery is integrated into `chat2mix` application for dogfooding
14. Service discovery is built into Logos Delivery as a separate Logos core module
15. Service discovery can be configured in Logos Delivery as alternative ambient peer discovery to discv5
16. A research post introducing the service discovery protocol and its implementation, including DST performance results, is published on the Logos research blog
17. An analysis enumerating privacy-leaking actions in the service discovery protocol is published
18. A survey of anonymisation techniques applicable to DHT-based service discovery, including the Octopus protocol and mix-based approaches, is published
19. A roadmap for introducing anonymity properties into service discovery, including dependencies on the libp2p mix protocol, is published

## Reliability

1. 

## Performance

1. The service discovery module provides comparable performance to discv5 when all nodes support the same service
2. The service discovery module performs better than discv5 to find a sparse service
3. Service discovery integrated in Logos Delivery provides comparable performance to discv5 when all nodes support the same service
4. Service discovery integrated in Logos Delivery performs better than discv5 to find a sparse service

## Supportability

1. Service discovery can be functionally validated in large-scale standalone DST simulations
2. The service discovery module can be benchmarked in large-scale standalone DST simulations
3. Logos Delivery with integrated service discovery can be validated and benchmarked in large-scale DST simulations

## Miscellaneous dependencies:

1. Dependency on nim-libp2p implementation of Kad-DHT
2. Dependency on DST for benchmarking and iterative improvement

<!-- ──────── post-mainnet ──────── -->

## Functionality

XX. Service discovery does not reveal to DHT intermediary nodes the full service lookup intent of a querying node
XX. Service discovery protects a querying node's network identity from correlation with their service lookup patterns by a passive network observer
XX. A node's advertisements of multiple services are not linkable to each other by passive DHT observers
XX. Service discovery request routing can be anonymised through an anonymous transport layer such as the libp2p mix protocol
