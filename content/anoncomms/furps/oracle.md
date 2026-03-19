# Oracle FURPS

## Functionality

1. Oracle nodes fetch price data from predefined sources
2. Each oracle node signs its observation and participates in a simple off-chain consensus with a threshold
3. The agreed value is written to the LEZ contract
4. The LEZ contract exposes basic functions to update and read the latest price

## Usability

1. The system design is documented in an RFC
2. The oracle nodes is implemented in Rust

## Reliability

1. Consensus requires agreement from multiple (majority) nodes
2. Basic protection against faulty or inconsistent data via multi-source aggregation.

## Performance

1. Price updates are completed within a reasonable time bound 


## Supportability

1. 