# Logos Package Manager

## Functionality

1. **Storage and retrieval.** It should be possible to store and retrieve the packages indexed in the [Logos package repository](https://github.com/logos-co/logos-package) using the Logos storage network; i.e., package contents should come from Logos storage.
1. **Ephemeral and persistent nodes.** Both one-shot "start-download-shutdown" which embed Logos storage in the CLI, and persistent flows in which a user runs a background daemon should be supported. In the latter case, users should replicate and serve packets to other users by default.
1. **Mixnet support.** It should be possible to download packages anonymously; i.e., over Mix.

## Usability

1. **Modularity.** Using Logos storage or an e.g. HTTP backend in the package manager should be as simple as switching an interface implementation. This also depends on the package manager architecture, so we should participate in its design.

## Reliability

1. Public files should not be DoS'ed by the mere existence of too many ephemeral nodes.

## Performance

Performance is driven and constrained by the filesharing protocol.

## Supportability

1. This must be driven from the same CLI which manages packages for the other backends; which is `lgpd` at the time of this writing.