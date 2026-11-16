## Blockchain

### Base Layer
* Eras
    - chain behaviour and consensus parameters can change through a hard fork at an era boundary

### LEZ
* Transactional actor model
    - programs compose atomically and exchange messages asynchronously, across public and private execution
* Privacy-preserving transaction fees
    - private transactions pay fees inside their proof; wallets price transactions with dry runs
* Atomic deposits
    - No more 10hr finality delays when bridging funds into LEZ
* LEZ sequencer runs in Logos Core


## storage 

* downloads over mix should perform better than before. I expect at least a 20% increase in performance, but hopefully more;,
* storage will have a new naming service which will allow associating a stable ID to a mutating piece of content (technically to different CIDs over time);,
* Mix and DHT proxies no longer need to be configured as they now use service discovery.

## messaging

**Logos Delivery**
- Messaging API reaches General Availability, validated by DST (might be not ideal to write, as we renamed 0.3 milestone)
- Technical debt halved; target modular architecture agreed

**Logos Chat**
- Self-healing group chats: recovery from missed messages and group forks
- Tooling for measuring group reliability
(- Accounts persist across restarts; delayed)
(- Internal security review; delayed)


## anon comms

### New modules and module diffs

- New RLN membership allocation service module with end-to-end allocation for testnet memberships
  - includes simple pluggable authentication for testnet users
-  Existing Logos Mix module packaged together with Delivery as a single module, deployable as entry, exit or intermediate node
  - testnet v0.4 adds mix forward secrecy via basic key rotation
  - testnet v0.4 adds Poisson-rate cover traffic generation
-  Existing Service Discovery module adopted as a Logos Delivery plugin
  - testnet v0.4 adds simplified service discovery module and API

### Library diffs

- Zerokit released with Poseidon2 support, runtime checks and an audit of the existing components
- de-MLS integration in libchat hardened against malformed messages and repeated membership operations
- Oracle nodes fetch prices from multiple independent sources with basic dispute detection


## Basecamp & apps
- Bitcoin Wallet + Node,
- Zcash Wallet + Node,
- Revamped Signer with support for Keycard (used by Ethereum and Bitcoin wallets)
