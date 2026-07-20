# Service Incentivisation FURPS

## Functionality

1. Client nodes can pay service nodes for decentralised services
2. The payment protocol is mostly off-chain (no on-chain transaction necessary per service request)
3. The payment protocol protects the privacy of the client by unlinking the payment from the service provision
4. The payment protocol shields the identity of the paying client from the network via LEZ private execution mode
5. The payment protocol shields the identity of the receiving service provider from the network
6. A client can discover service providers that offer a specific service
7. A client can discover the payment policy advertised by a discovered service provider
8. A provider's payment policy can specify which non-native tokens it accepts as payment
9. A payment pool can be shared across multiple service providers rather than being restricted to a single provider
10. The payment protocol prevents double-spending/double-claiming of rewards from a shared payment pool
11. Service providers can claim rewards from a shared payment pool in accordance with the service they provided, using a reputation- or receipt-based method

## Usability

1. The off-chain payment protocol is published in a specification
2. The on-chain component of the protocol is published in a specification
3. The off-chain protocol is implemented in Nim
4. The on-chain component of the protocol is implemented for Logos Execution Zone
5. A demo Logos core module demonstrates the payment protocol functioning end-to-end for a service protocol
6. The LEZ-private-execution-mode-based client-shielding mechanism is published in a specification
7. A specification investigating how to shield the identity of the receiving service provider is published
8. A specification for discovering service providers and their payment policies via existing service discovery is published
9. A specification investigating support for non-native tokens in provider payment policies is published
10. A specification investigating a shared payment pool model supporting multiple service providers, double-spend prevention, and proportional reward claiming is published

## Reliability

1. 

## Performance

1. 

## Supportability

1. 
