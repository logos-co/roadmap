# [Service Incentivisation Track: Testnet v0.3](https://github.com/logos-co/anoncomms-pm/milestone/22)

**Track:** [Service Incentivisation Track](/anoncomms/roadmap/incentivisation.md)

**FURPS:** [Service Incentivisation FURPS](/anoncomms/furps/incentivisation.md)

**Estimated date of completion**: Testnet v0.3 launch

**Resources Required**:
- `TBD` developers for `TBD` weeks

## Deliverables

### [Specify and implement client payment shielding via LEZ private execution mode](https://github.com/logos-co/anoncomms-pm/issues/73)

**Owner**: AnonComms Incentivisation

**FURPS**:

- F4. The payment protocol shields the identity of the paying client from the network via LEZ private execution mode
- U6. The LEZ-private-execution-mode-based client-shielding mechanism is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Research shielding the service provider identity in the payment protocol](https://github.com/logos-co/anoncomms-pm/issues/74)

**Owner**: AnonComms Incentivisation

**FURPS**:

- F5. The payment protocol shields the identity of the receiving service provider from the network
- U7. A specification investigating how to shield the identity of the receiving service provider is published

**Checklist**:
- [ ] Specs: link to specs and/or API definition

### [Research service discovery integration for provider payment policy advertisement](https://github.com/logos-co/anoncomms-pm/issues/75)

**Owner**: AnonComms Incentivisation (primary), AnonComms Discovery (support)

**FURPS**:

- F6. A client can discover service providers that offer a specific service
- F7. A client can discover the payment policy advertised by a discovered service provider
- U8. A specification for discovering service providers and their payment policies via existing service discovery is published

**Checklist**:
- [ ] Specs: link to specs and/or API definition

### [Research non-native token support in provider payment policies](https://github.com/logos-co/anoncomms-pm/issues/76)

**Owner**: AnonComms Incentivisation

**FURPS**:

- F8. A provider's payment policy can specify which non-native tokens it accepts as payment
- U9. A specification investigating support for non-native tokens in provider payment policies is published

**Checklist**:
- [ ] Specs: link to specs and/or API definition

### [Research a shared payment pool model for multiple service providers](https://github.com/logos-co/anoncomms-pm/issues/77)

**Owner**: AnonComms Incentivisation

**FURPS**:

- F9. A payment pool can be shared across multiple service providers rather than being restricted to a single provider
- F10. The payment protocol prevents double-spending/double-claiming of rewards from a shared payment pool
- F11. Service providers can claim rewards from a shared payment pool in accordance with the service they provided, using a reputation- or receipt-based method
- U10. A specification investigating a shared payment pool model supporting multiple service providers, double-spend prevention, and proportional reward claiming is published

**Checklist**:
- [ ] Specs: link to specs and/or API definition
