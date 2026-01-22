# Logos Testnets

This page outlines the high-level deliverables available for testing in upcoming Logos testnets.

(Note: This page mainly lists the public-facing, testable modules and apps. Logos includes substantial R&D critical for launch and enabling these deliverables, beyond what's listed here.
See individual component team roadmaps for full details.)

## v0.3
(TBD)

## v0.2
(TBD)

Early stage planning; Subject to change.

### Logos Core

#### Modules
* capability discovery module (alpha version, not used by other Logos modules yet)

## v0.1
(This not final yet and might be updated.)

The main goal is to test the backends (blockchain including LEZ, storage, and ChatSDK/messaging). UX and DevEx are not the primary focus at this stage and will be improved towards testnet v0.2.
Developers will still be able to test applications on Logos core, and the Logos app will provide interfaces that allow users to interact with the modules.

Our goal is to expose as much functionality as possible through Logos core, which requires a focus on module integration.

### Logos Core

* liblogos loads modules from github
    - package manager using Logos storage as backend will be introduced in a later testnet
* Logos app supports interfaces of the Simple app UIs listed below
* Logos node can load and start the Blockchain, Storage, and ChatSDK nodes.
    - used for headless server mode
    - each node (Blockchain, Storage, ChatSDK) exposes their own RPC through which they can be driven.
    - plans for future testnet: consolidate RPC into a dedicated module that nodes register with.


#### Modules

Testnet v0.1 will feature the following Logos core modules in alpha state):

* Blockchain wallet
* Logos Execution Zone (LEZ) wallet
* LEZ Blockexplorer
* Blockchain Node
* Storage Node
* Chat Node exposing ChatSDK interface (includes LMN (logos messaging nim) node; for testnet v0.2 the ChatSDK module will use the sepate LMN module)
* LMN module (early version, not used by the ChatSDK module yet)

(For more details, see the component sections below below and the respective component roadmaps.)

#### Simple Apps

These apps can be controlled via alpha-state UIs within the Logos app:

* Blockchain / LEZ wallet
    - early alpha version; we will add more context / docs for v0.2
* Simple Chat App
    - simple 1:1 chat app using the ChatSDK
    - key bundles have to be transmitted out of band (bad UX, but we can test the backend)
* Simpile Filesharing App
* Simpe Mix Push Message App
    - a separate app that allows pushing messages over mix
    - for v0.2 we will integrate mix support into the Chat App

### AnonComms

* mix module PoC
* mix app PoC

The mix demo app will showcase basic libp2p mix net functionality,
allowing users to send messages routed through our libp2p mix net.
This early PoC lacks DoS protection and incentivization mechanisms.
The demo mix module will rely on a separate (experimental) network stack with components directly compiled into the mix module;
this also contains a first version of our capability discovery protocol.
For testnet v0.2 we plan to integrate mix functionality into the Chat app.

### Blockchain

####  Blockchain

Testnet v0.1 will feature PPoS consensus through Cryptarchia and the Blend Network.

Through the UIs listed above, users can test:

* Staking and running validators
* Setuping a wallet
* Receiving tokens from a faucet
* Sending tokens

#### LEE / LEZ

* Centralized sequencer processes all transactions.
    - will not be a logos core module; the decetralized sequencer (planned for v0.2) will be a logos core module)
* Settles on Logos blockchain (via inscriptions) and uses blockchain consensus
* Native token transfers in both public and private states.
* simple wallet UI (in Logos app)
* Creation and transfer of custom tokens in both public and private states.
* Users can interact with sample apps (e.g. AMM,) in public and private state
* Track public transactions through Explorer (view number of transactions etc for private state)

* EcoDev/developers can deploy and execute programs on LEZ in both public and private states.

### Messaging
* demo Chat app
  - shows 1:1 chat (keybundles will be out of band; no identy management yet) via ChatSDK module

* EcoDev/developers can test parts of the LMN module via its API.
    - some parts (respectiving messges) might be exposed through the old API / mocked.

### Storage
* demo filesharing app that demonstrates the storeage module
  - enter a CID and get the file
  - store a file

* EcoDev/developers can test storeage module via its API.
