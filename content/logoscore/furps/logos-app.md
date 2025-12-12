## Logos App

A thin wrapper of Logos Core (liblogos), provided as a binary. It handles the build system for multiple targets (Linux, Windows, macOS, Android, iOS, potentially WASM). This is seperate from the Logos App GUI Modules, and can be run entirely from command line.

### Functionality

1. The app shall serve as a thin executable wrapper around liblogos, initialising and starting the Logos Core environment.
2. The app shall set up the environment for loading plugins and manage essential startup tasks such as plugin directory configuration.
3. The app shall automatically load critical default modules, such as the Package Manager, upon initialisation.

### Usability

1. The app shall provide minimal yet clear startup logs and runtime information to the console, facilitating transparency during initialization and plugin loading.
2. The app shall maintain simplicity of use, requiring minimal configuration from end-users, focusing primarily on immediate usability.

### Reliability

1. The app shall reliably initialize and finalize the Logos Core environment, ensuring a clean startup and graceful shutdown of all resources.
2. The app shall provide clear and informative logging if critical default plugins fail to load, enabling prompt diagnosis and intervention.

### Performance

1. The app shall execute startup routines efficiently, minimizing the time from launch to operational readiness.
2. The app shall make minimal use of system resources, delegating intensive operations to the Logos Core loaded modules.

### Supportability

1. The app shall be structured to facilitate straightforward builds for multiple platforms, including Linux, Windows, macOS, Android, iOS, and potentially WASM.
2. The app shall maintain clear and maintainable code architecture, making use of standard Qt best practices to support future platform updates and expansions.
