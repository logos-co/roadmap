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

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/1518abd9-c08f-4989-93c1-96525e62bce5/cc4efd5e-047f-4d44-b8bd-051fc61840ce/Untitled.png)

After selecting the fleet, Status Desktop will close and you will need to run again

```bash
make run ARGS="--enable-fleet-selection --datadir=./datadir1"
```

Log in with the password you set previously, and check that`shards.staging` is configured

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/1518abd9-c08f-4989-93c1-96525e62bce5/30552c55-a80d-4d9a-ae56-ecd26a4d4bbf/Untitled.png)

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

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/1518abd9-c08f-4989-93c1-96525e62bce5/388402f1-f5a0-415f-a415-2b7542df7a20/Untitled.png)

In one of the accounts, copy the link to its profile

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/1518abd9-c08f-4989-93c1-96525e62bce5/3dee43db-4cdf-45aa-8284-302d1444d450/Untitled.png)

And then, in the other account, send it a contact request

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/1518abd9-c08f-4989-93c1-96525e62bce5/8d28f26a-92bf-494b-9cc5-9eafe5c18ecc/Untitled.png)

Make sure you get a notification for it in your other window and accept the contact request

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/1518abd9-c08f-4989-93c1-96525e62bce5/b74a3339-6a01-4f73-ad47-ea45d78dec94/Untitled.png)

Chat between both accounts and check that messages get delivered properly

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/1518abd9-c08f-4989-93c1-96525e62bce5/c73cc45c-fffb-41ca-ae91-2460523e588e/Untitled.png)

Finally, test that the Store nodes work properly.

For it, close one of the windows and from the open window send messages to it.

Re-run the Status Desktop instance you just closed and check that you receive the messages sent to you when you were offline.

Some extra operations that we can run to double check everything is ok are:

- In `Node Management` run the RPC method `{"method":"settings_nodeConfig"}` and check in the output that you are connected to the right fleet
- Similarly, you can run the RPC method `{"method":"wakuext_peers"}` to get the list of peers
- Check in `Settings→Advanced→History nodes` the history nodes we are connected to

To do: define how to test Status Communities