# Oracle FURPS

## Functionality

1. Oracle nodes fetch price data from predefined sources
2. Oracle nodes publish signed observations to Logos Blockchain
3. The LEZ contract exposes basic functions to update and read the latest price
4. Oracle nodes fetch price data from predefined sources according to a defined fetch specification
5. The proposer reads the immutable observation data, verifies the membberships, computes the median and pushes it to LEZ
6. Oracle nodes register with staking by an LEZ contract
7. Upon the proposer attestation, LEZ contract inits dispute window

## Usability

1. The system design is documented in a LIP
2. Oracle node and proposer roles are implemented in Rust
3. The fetch mechanism is specified and documented
4. Developer documentation for the Oracle Zone is published in a document
5. Performance benchmark results over three spot price and six months of real data are published in a research blog
6. The dispute mechanism is published in a specification

## Reliability

1. Basic protection against faulty or inconsistent data via multi-source aggregation
2. A malicious proposer is eliminated by honest proposers through the dispute mechanism

## Performance

1. Price updates are completed within a reasonable time bound

## Supportability

1. Oracle node and proposer operations are logged to enable debugging of fetch and aggregation failures
