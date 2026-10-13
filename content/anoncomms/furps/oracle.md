# Oracle FURPS

## Functionality

1. Oracle nodes fetch price data from predefined sources
2. Indexer performs onchain aggregation of signed node data
3. The LEZ contract exposes basic functions to update and read the latest price
4. Oracle nodes fetch price data from predefined sources according to a defined fetch specification
5. Cross zone TX enables provable atomic cross-zone transactions between oracle zone and LEZ
6. Oracle nodes publish signed observations to Logos Blockchain
7. The proposer reads the immutable observation data, verifies the memberships, computes the median and pushes it to LEZ
8. Oracle nodes register with staking by an LEZ contract
9. Upon the proposer attestation, the LEZ contract initiates a dispute window

## Usability

1. The system design is documented in a LIP
2. The oracle nodes and indexer are implemented in Rust
3. The fetch mechanism is specified and documented
4. Atomic cross zone TX is deployed for cross-zone interactions involving the oracle zone
5. Developer documentation for the Oracle Zone is published in a document
6. Benchmark results for the Oracle Zone are published in a research blog
7. Performance benchmark results over three spot prices and six months of real data are published in a research blog
8. The dispute mechanism is published in a specification

## Reliability

1. Basic protection against faulty or inconsistent data via multi-source aggregation
2. A malicious proposer is eliminated by honest proposers through the dispute mechanism

## Performance

1. Price updates are completed within a reasonable time bound
2. Cross-zone transaction latency is benchmarked

## Supportability

1. Oracle node and indexer operations are logged to enable debugging of fetch and aggregation failures
2. PACT cross-zone transaction failures are logged with sufficient detail for diagnosis
