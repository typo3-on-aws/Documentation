---
title: Add Swap Space
# subtitle: Start Page
lastupdate: 18 September 2020
---

## Introduction

This article is based on the assumption that you are using one of our TYPO3-on-AWS machine images in its default setup.

This document explains the basics what swap space is, and outlines the required steps to create a swap file and configure the Debian GNU/Linux system to use it.

## Swap Space Basics

A typical computer system or server has two types of memory. The first type is the so-called **RAM** (random access memory). This memory type stores data that is actively used by the system. The amount of available memory depends on the instance type that you choose when you launch your EC2 instance. If a system runs out of memory, programs may be stalled or processes terminated, which typical has a performance impact and can also result in malfunctions.

To avoid situations like this, the **swap space** has been introduced as the second type of memory.
Its purpose is to move inactive data from the RAM to a disk space.

You can choose between two types of swap space. The first option is to create a dedicated volume by using the [AWS Management Console](https://console.aws.amazon.com/ec2/){.fa-icon .fa-right-external-link-alt} for example. After that, you configure Debian GNU/Linux to use this volume as the swap space. The second option is to use a specially configured file as a swap file. This file can be created in the existing system partition.

Please note that it is a best practice to create swap space only on ephemeral storage instance store volumes. Therefore, the following steps describe the second option.

## Swap Size

Before you start, you have to determine the size of your swap space. AWS recommends the following formula:

| Amount of physical RAM:  | Swap size:                                        |
| :----------------------- | :------------------------------------------------ |
| between 0 and 2G bytes   | 2x the amount of RAM                              |
| between 2G and 32G bytes | 4G bytes plus (RAM minus 2G bytes)                |
| more than 32G bytes      | 2x the amount of RAM                              |

For example: a `t3.micro` EC2 instance features 1G byte of RAM. The recommended swap size for this instance type is 2G bytes (2x the amount of RAM).

Another example: a `t3.large` EC2 instance features 8G byte of RAM. The recommended swap size for this instance type is 10G bytes.

## Create the Swap File

Let's assume that you want to create a 2G bytes swap file. Execute the following command, and all other commands listed in this article, as user `admin`:

```bash
$ sudo dd if=/dev/zero of=/var/swap bs=128M count=16
```

The `dd`-command above takes a few second to complete. The output reads similar to the following:

```text
16+0 records in
16+0 records out
2147483648 bytes (2.1 GB, 2.0 GiB) copied, 70.8875 s, 30.3 MB/s
```

The command writes 16 blocks into the file `/var/swap`. Each block has a size of 128M bytes which results in a 2G bytes file.

As the swap file may contain sensitive data, *normal* users other than `root` must not be able to access the file.
Therefore, set the read and write permissions accordingly:

```bash
$ sudo chmod 600 /var/swap
```

Before you can use the file as a swap file, you have to set up a Linux swap area in the file (this is basically "mark the file as a swap space"):

```bash
$ sudo mkswap /var/swap
```

A typical output of the `mkswap`-command is shown below.

```text
Setting up swapspace version 1, size = 2 GiB (2147479552 bytes)
no label, UUID=5f060c4f-3262-49ac-a1b7-5fbe509bdd72
```

## Enable the Swap Space

At this point, the swap file is ready to use.
Execute the following command to verify that the system currently **does not** use any swap space:

```bash
$ sudo swapon --summary
```

The command should not generate any output. Now, instruct the system to use the swap file by adding it to the swap space:

```bash
$ sudo swapon /var/swap
```

If you execute the `swapon`-command with the parameter `--summary` again, the new swap space is now listed:

```bash
$ sudo swapon --summary
```
```text
Filename     Type    Size       Used    Priority
/var/swap    file    2097148    0       -2
```

This is all that is required to create a file and enable it as a swap space. However, the system does not automatically re-enable the swap file when it reboots. Therefore, read on, and configure the system to enable the swap file at boot time.

## Enable Swap at Boot Time

Open the file `/etc/fstab` in your favorite editor, for example "vi" (which is installed in the default TYPO3-on-AWS machine images):

```bash
$ sudo vi /etc/fstab
```

> ### The "vi" Editor {.info .info-headline .info-icon}
> To learn more about "vi" and how to use it, do a [Google search](https://www.google.com/search?q=vi+basic+usage).

Add the following new line at the end of the file:

```text
/var/swap swap swap defaults 0 0
```

Then, save the file and exit "vi".


## Further Resources

- This article is based on instructions published by AWS:<br />
  <https://aws.amazon.com/premiumsupport/knowledge-center/ec2-memory-swap-file/>
- To learn how to use an extra partition (volume) as the swap space, see:<br />
  <https://aws.amazon.com/premiumsupport/knowledge-center/ec2-memory-partition-hard-drive/>
