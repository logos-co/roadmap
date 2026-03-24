# Mix FURPS

## Functionality

1. Nodes can mixify individual libp2p protocol messages for anonymous routing over a libp2p mixnet
2. Nodes can mixify libp2p request-response interactions for anonymous routing over a libp2p mixnet
3. The libp2p mixnet is protected against trivial DoS attacks
4. The libp2p mixnet is protected against a 50% + 1 Sybil attack
5. Nodes can discover other nodes that support mix using available peer discovery mechanisms
6. Exit nodes are protected against trivial abuse/overuse from a single user
7. The libp2p mixnet is protected against more sophisticated DoS attacks, e.g. coordinated DoS against intermediate nodes
8. An application-level mechanism exists to segment large messages and mixify over multiple paths
9. An application-level mechanism exists to segment large responses and coordinating multiple-SURB response paths
10. Nodes can generate cover traffic to increase K-anonymity in the mixnet
11. Providers can anonymously register as a hidden service
12. Clients can discover and anonymously access hidden services

## Usability

1. The libp2p mix protocol and pluggable DoS and Sybil protection is published in specifications
2. The libp2p mix protocol with DoS and Sybil protection is integrated in nim-libp2p
3. The libp2p mix protocol with DoS and Sybil protection is integrated into Waku Lightpush protocol as reference integration
4. A libp2p module with mix capability is integrated into Logos Core
5. A Logos Core demo chat app showcases message publishing over libp2p mix
6. The Logos Core demo chat app discovers mix nodes using libp2p kad-dht discovery with filtering
7. Extended DoS and exit node abuse prevention mechanisms are published in a specification
8. The application-level mechanism to support large messages (requests & responses) is published in a specification
9. Cover traffic generation is published in a specification
10. The protocol allowing hidden service provisioning, discovery and access is published in a specification
11. Basic DHT interactions can be mixified
12. The libp2p mix protocol is integrated into the Logos Chat module

## Reliability

1. 

## Performance

1. 

## Supportability

