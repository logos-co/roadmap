# Large-Data "Transport Layer" for Mix

## Functionality

1. Nodes should be able to exchange arbitrary sized payloads over a mixnet of fixed message size. This effectively emulates arbitrarily sized messages.
1. Allows asymmetrical request/response operations in which the response is orders of magnitude larger than the request.

## Usability

1. The API should make chunking and reassembly of payloads completely transparent to the application.
1. The API should manage SURB asymmetries automatically, making sure that a node replying with a large payload to a small request always has enough SURBs to complete its response. In cases in which the requester cannot anticipate the size of the response, this might involve some sort of protocol for requesting and "topping up" SURBs automatically.

## Reliability

1. The transport layer should ensure that all chunks are delivered and reassembled correctly.

## Performance

1. Performance should not be significantly different from doing the process manually: chunking the request payload and sending it over the mixnet, pushing enough SURBs to cover the response, chunking the response and sending it back over the mixnet.

## Supportability

1. ...

## Security

1. The transport layer should not change the security properties of the mixnet; i.e., it should not weaken anonymity. In case technical tradeoffs do lead to some loss of anonymity, this should be clearly documented and justified.
