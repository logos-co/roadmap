---
title: Test nwaku on Status
tags:
    - Waku
    - Status
    - collaboration
    - nwaku
date: 2024-07-22
lastmod: 2024-07-22
---

This document is based on the following [recorded session](https://drive.google.com/file/d/16ZJB5n2aazf9LfGZPKHPTGJy9zZJ6nIH/view)

In order to test Nwaku on Status, you need to first deploy your release candidate to the `shards.staging` fleet. You will also need to build status-desktop by following the instructions [here](https://www.notion.so/Building-ca1db4fb3baf4f15bab8da717832b743?pvs=21).

Once we are able to run status-desktop locally, run

```bash
make run ARGS="--enable-fleet-selection --datadir=./datadir1"
```

This will open Status Desktop. Create a new account, and once logged in go to `Settings->Advanced->Fleet` and select `shards.staging`

![](images/test-nwaku-status/1)

After selecting the fleet, Status Desktop will close and you will need to run again

```bash
make run ARGS="--enable-fleet-selection --datadir=./datadir1"
```

Log in with the password you set previously, and check that`shards.staging` is configured

![](images/test-nwaku-status/2)

In the Advanced section again, please enable the following options:

- Full developer mode
- Debug
- Node Management
- Enable creation of sharded communities
- Enable Community Creation

Some of these options might also close your Status Desktop window. If so, run again Status Desktop with the same command as before and check that all the above configurations are enabled.

Now, open a new terminal and run a new instance of Status Desktop using a different directory for its database. For example

```bash
make run ARGS="--enable-fleet-selection --datadir=./datadir2"
```

Follow the same steps as with the other Status Desktop instance, only changing the `datadir` flag

With the previous step completed, enter the `Node Management` section and check that both instances are connected to peers

![](images/test-nwaku-status/3)

In one of the accounts, copy the link to its profile

![](images/test-nwaku-status/4)

And then, in the other account, send it a contact request

![](images/test-nwaku-status/5)

Make sure you get a notification for it in your other window and accept the contact request

![](images/test-nwaku-status/6)

Chat between both accounts and check that messages get delivered properly

![](images/test-nwaku-status/7)

Finally, test that the Store nodes work properly.

For it, close one of the windows and from the open window send messages to it.

Re-run the Status Desktop instance you just closed and check that you receive the messages sent to you when you were offline.

Some extra operations that we can run to double check everything is ok are:

- In `Node Management` run the RPC method `{"method":"settings_nodeConfig"}` and check in the output that you are connected to the right fleet
- Similarly, you can run the RPC method `{"method":"wakuext_peers"}` to get the list of peers
- Check in `Settings→Advanced→History nodes` the history nodes we are connected to

To do: define how to test Status Communities