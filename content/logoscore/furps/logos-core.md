## Logos Core (liblogos)

Logos Core is a minimal library 

All additional functionality beyond core loading/unloading and object registry shall be provided exclusively via modules.

### Functionality

1. The library shall enable loading and unloading of modules (using Qt's QPluginLoader).
2. The library shall provide a central "QObject Registry" accessible by all loaded modules for dynamic object registration and discovery.
3. The library shall support proxying and "daisy chaining" of Qt Remote Objects / QObject Registries to allow interaction with a parent Logos Core instance (for use in Process Manager Module).
4. The library shall handle basic lifecycle management tasks (initialize, load, unload) of modules adhering to a defined ILogosModule interface.
5. The library shall minimally facilitate the Qt event loop without providing additional functionalities (such as transports, UI, networking) directly.

### Usability

1. The library shall offer a straightforward and minimal public API clearly defined for ease of integration into various applications.
2. The library shall clearly communicate critical module lifecycle events and errors via logging to standard output or integration points.
3. The library shall document clearly how to create modules adhering to the ILogosModule interface, including requirements and best practices.

### Reliability

1. The library shall ensure extremely high reliability and robustness, guaranteeing stable loading/unloading and operation of modules.
2. The library shall gracefully handle and clearly report module loading errors, initialization failures, and runtime exceptions.
3. The library shall prevent a failing module from compromising the stability of the core system or other loaded modules.

### Performance

1. The library shall operate entirely non-blocking, ensuring minimal latency and negligible overhead for module interactions.
2. The library shall optimize internal operations, including QObject registry queries and module lifecycle management, to maintain responsiveness.
3. The library shall efficiently handle dynamic addition and removal of modules with minimal impact on system resources and responsiveness.

### Supportability

1. The library shall strictly adhere to the microkernel-microservices (aka plugin) architectural paradigm, ensuring minimalism and modularity.
2. The library shall maintain compatibility with standard Qt practices and leverage Qt's meta-object system for reflective capabilities, ensuring long-term maintainability and extensibility.
3. Logos Core shall be written in Nim.

### Out of Scope
1. The library may enforce module isolation and clearly define interaction boundaries to ensure stability and security.
2. The library may optimize CBOR serialised calls between QObjects with automatic CBOR-Schema (i.e using CDDL)

## Process Manager Module (logos_host)

Process Manager Module provides Process Isolation for 3rd party modules, the intention is to enhance stability of Logos Core against crash-prone code, while transparently allowing Modules to run in-process or out-of-process, and transparent use of the "QObject Registry"

### Functionality

1. The system shall manage independent module execution within isolated processes (using Qt's QProcess mechanism).
2. The system shall transparently load and run unmodified modules unaware of their isolated environment.
3. The system shall enable inter-process communication (using Qt Remote Objects, supporting Dynamic Replicas and a Remote QObject Registry).
4. The system shall proxy the Logos Core namespace, allowing isolated modules to register and retrieve QObjects as if they were local.
5. The system shall automatically restart crashed or terminated modules, implementing an exponential backoff strategy to manage repetitive failures.
6. The system shall provide consistent and transparent object lifecycle management across module boundaries.

### Usability

1. The system shall require minimal configuration to integrate seamlessly with existing Qt-based applications.
2. The system shall provide clear and timely feedback regarding the status of managed modules, including startup, operational health, and shutdown.
3. The system shall offer a straightforward mechanism for users to monitor and control the lifecycle of components through simplified interfaces.
4. The system shall present error notifications clearly, including module crashes and automatic restart events.

### Reliability

1. The system shall maintain stable operation even in the event of frequent module crashes, ensuring system-wide stability through isolated module execution.
2. The system shall guarantee the integrity and consistency of Logos Core proxies through Qt Remote Objects verification mechanisms.
3. The system shall gracefully handle and isolate failures, preventing a single module's failure from impacting overall system functionality.

### Performance

1. The system shall initialize inter-process Qt Remote Objects connections swiftly, ensuring minimal latency between module startup requests and module availability.
2. The system shall efficiently manage multiple simultaneous QProcess instances with negligible overhead.
3. The system shall optimize Qt Remote Object interactions, ensuring efficient communication with low bandwidth consumption.
4. The system shall scale dynamically with minimal performance degradation as additional modules and remote objects are introduced.
5. The system shall keep resource usage (CPU, memory, network bandwidth) within predefined limits under typical operational scenarios. %% **TODO** identify whats acceptable %%

### Supportability

1. The system shall include comprehensive logging and diagnostics capabilities, providing detailed insights for troubleshooting and module health assessments.
2. The system shall support remote debugging and monitoring capabilities via Qt Remote Objects, allowing easier maintenance and issue resolution.
3. The system shall be designed for extensibility, accommodating additional communication transports (such as POSIX, TCP/IP or WebSockets) seamlessly.
4. The system shall support automatic updates and module deployment procedures, enabling rapid and seamless integration of new or updated components.
5. The system shall include configurable parameters for the management of process isolation, restart strategies, and inter-process communication settings.
