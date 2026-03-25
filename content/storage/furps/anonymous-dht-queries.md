# Anonymous DHT Queries

## Functionality

1. Supports getting and putting values by key, and the libp2p ADD_PROVIDER/GET_PROVIDERS messages for storing and retrieving provider records.

## Usability

1. API is not significantly different from that of a regular DHT. Ideally, it should be possible to switch between anonymous and non-anonymous queries with few or no code changes.

## Reliability

1. Failure rates might be higher than with a regular DHT, but should not be higher than running DHT queries over a mixnet; e.g. querying a regular DHT by first traversing a mixnet to anonymize the querier.

## Performance

1. Performance should not be significantly worse than querying a regular DHT over a mixnet.

## Supportability

1. ...

## Security

1. The node issuing the operation (put/get/add_provider/get_providers) should not be linkable to the operation. Note that the node that replies to the query is not anonymized here.


