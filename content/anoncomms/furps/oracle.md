# Oracle FURPS

## Functionality

1. Oracle nodes fetch price data from predefined sources
2. LON indexers aggregate the signed observations finalized on Logos Blockchain
3. The LEZ contract exposes basic functions to update and read the latest price
4. Oracle nodes fetch price data from predefined sources according to a defined fetch specification
5. Oracle nodes interact with LEZ through LEZ TXs signed with their LEZ key, for registration, attestation and disputes
6. Oracle nodes publish signed observations to Logos Blockchain
7. The proposer reads the immutable observation data, verifies the memberships, computes the median and pushes it to LEZ
8. Oracle nodes register with staking by an LEZ contract
9. Upon the proposer attestation, the LEZ contract initiates a dispute window

## Usability

1. The system design is documented in a LIP
2. The oracle nodes, including their LON sequencer and LON indexer processes, are implemented in Rust
3. The fetch mechanism is specified and documented
4. The LEZ contract interfaces used by oracle nodes, `oracle_register` and `oracle_prices`, are documented
5. Developer documentation for the Oracle Zone is published in a document
6. Benchmark results for the Oracle Zone are published in a research blog
7. Performance benchmark results over three spot prices and six months of real data are published in a research blog
8. The dispute mechanism is published in a specification

## Reliability

1. Basic protection against faulty or inconsistent data via multi-source aggregation
2. A malicious proposer is eliminated by honest LON indexers through the dispute mechanism

## Performance

1. Price updates are completed within a reasonable time bound
2. Latency from observation inscription to a FINAL price on LEZ is benchmarked

## Supportability

1. Oracle node operations, in both the LON sequencer and the LON indexer, are logged to enable debugging of fetch and aggregation failures
2. Failed LEZ TXs from oracle nodes, for attestation and disputes, are logged with sufficient detail for diagnosis
3. Oracle Zone components and LEZ contracts are compatible with LEZ v0.2
4. An end-to-end test suite covers the full oracle flow, from price fetching to the price update on LEZ, including the dispute window