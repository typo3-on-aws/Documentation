---
title: Mount an AWS S3 Bucket
firstHeadline: Mount an AWS S3 Bucket
section: How-to
breadcrumb:
    - label: 'How-to'
      url: '../'
---

### Introduction

This article is based on the assumption that you are using one of our TYPO3-on-AWS machines images in its default setup.

The steps below describe how to access a S3 bucket just like a folder on your file system. The approach uses [s3fs](https://github.com/s3fs-fuse/s3fs-fuse), which is a FUSE (File System in User Space) based solution to mount/unmount an [Amazon S3](http://aws.amazon.com/s3/) storage bucket and use system commands with S3. s3fs lets you mount a bucket as a local read/write file system and to store files/folders natively and transparently.

Please see the resources at the end of this document for further details about s3fs and Amazon S3.

<hr />

> #### Experimental {.warning .warning-headline .warning-icon}
>
> It is important to understand that this solution is experimental and not my recommendation for a production environment.
> If you plan to store files decentralized, Amazon offers a simple, scalable, fully managed elastic NFS file system called [Amazon EFS](https://aws.amazon.com/efs/).

<hr />

### Preparation

Before you start, determine the version of Debian GNU/Linux you are using by executing the following command:

```bash
$ cat /etc/debian_version
```

The output is something like "7.8" for example (in this case you are running Debian GNU/Linux "Wheezy") or "8.2" (which is Debian GNU/Linux "Jessie"). We will need this information later, so keep it in mind.

Next, switch from user `admin` to user `root`:

```bash
$ sudo -i
```

Then, download and install the packages required to compile s3fs:

```bash
$ apt-get install make gcc g++ build-essential build-essential
```

Next, install the packages required by s3fs as dependencies. However these packages depend on the Debian version you are running. For **Debian GNU/Linux 7 ("Wheezy")** install the following packages:

```bash
$ apt-get install libfuse-dev fuse-utils libcurl4-openssl-dev libxml2-dev mime-support
```

In case you are running **Debian GNU/Linux 8 ("Jessie")**, install the following packages instead:

```bash
$ apt-get install autotools-dev libcurl4-gnutls-dev libfuse-dev libssl-dev libxml2-dev pkg-config
```

This article uses the latest version of [s3fs from GitHub](https://github.com/s3fs-fuse/s3fs-fuse). Therefore, we also need a Git client and Debian's automake package:

```bash
$ apt-get install git automake
```

### Download and Compile s3fs

As mentioned above, let's use the latest version of s3fs from GitHub:

```bash
$ cd /usr/src/
$ git clone https://github.com/s3fs-fuse/s3fs-fuse.git
```

The output of this command is similar to the following:

```text
Cloning into 's3fs-fuse'...
remote: Reusing existing pack: 1598, done.
remote: Counting objects: 7, done.
remote: Compressing objects: 100% (7/7), done.
remote: Total 1605 (delta 1), reused 0 (delta 0)
Receiving objects: 100% (1605/1605), 907.42 KiB, done.
Resolving deltas: 100% (1059/1059), done.
```

Now, change into the directory and prepare the compilation by executing the script `autogen.sh`:

```bash
$ cd s3fs-fuse
$ ./autogen.sh
```

```text
configure.ac:25: installing `./config.guess'
configure.ac:25: installing `./config.sub'
configure.ac:26: installing `./install-sh'
configure.ac:26: installing `./missing'
src/Makefile.am: installing `./depcomp'
```

This is all that is required to execute the compilation:

```bash
$ ./configure --prefix=/usr
$ make
```

The first command (`configure`) checks if all packages exist. The second command (`make`) compiles the source code of s3fs and generates the executable binary. If this has been successful, you can check the version of s3fs with the following command:

```bash
$ ./src/s3fs --version
```

The output shows something like the following (the version at the date of this writing reads **version 1.77**):

```text
Amazon Simple Storage Service File System V1.77 with OpenSSL
Copyright (C) 2010 Randy Rizun <rrizun@gmail.com>
License GPL2: GNU GPL version 2 <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
```

The last step is to install the binary:

```bash
$ make install
```

### Test and Usage

The following section assumes that we already have an Amazon S3 bucket created in the same availability zone as the EC2 instance. We also assume that you have the access key and the secret key handy. These three commands simply prompt you to enter the details:

```bash
$ read -p "AWS Access Key: " AWS_ACCESS_KEY
$ read -p "AWS Access Secret: " AWS_ACCESS_SECRET
$ read -p "AWS Bucket Name: " AWS_BUCKET_NAME
```

Once entered, save the access key and access secret to a file and make sure, no other user can access it for security reasons:

```bash
$ echo "${AWS_ACCESS_KEY}:${AWS_ACCESS_SECRET}" > /etc/passwd-s3fs
$ chmod 0600 /etc/passwd-s3fs
```

Afterwards, create a mountpoint for the S3 bucket and try to mount it:

```bash
$ mkdir /mnt/s3bucket
$ s3fs ${AWS_BUCKET_NAME} /mnt/s3bucket
```

If no errors occur, you can access your S3 bucket as a folder/hard drive now. Please find some example below.

### Examples

```bash
$ df -h /mnt/s3bucket
```

```text
Filesystem Size Used Avail Use% Mounted on
s3fs 256T 0 256T 0% /mnt/s3bucket
```

The output indicates that you now have a 256 terra byte partition... nice, eh?!

```bash
$ echo "test" > /mnt/s3bucket/test.txt
$ ls -lh /mnt/s3bucket/test.txt
```

The commands above create a simple text file in the S3 bucket and lists the content of the bucket:

```text
-rw-r--r-- 1 root root 5 Jul 4 13:22 /mnt/s3bucket/test.txt
```

### Add a Fixed Mountpoint

You can use the following command to add a fixed mountpoint to your system and let other users use the S3 bucket too:

```bash
$ echo "s3fs#${AWS_BUCKET_NAME} /mnt/s3bucket fuse allow_other 0 0" >> /etc/fstab
```

Depending on your system and requirements, you possibly want to add some further options, for example:

- `use_cache=/tmp`
- `retries=10`
- `readwrite_timeout=60`
- `connect_timeout=60`

Please refer to the [official documentation](https://github.com/s3fs-fuse/s3fs-fuse/wiki/Fuse-Over-Amazon) for a complete overview of all available options.

### Further Resources

- [Official s3fs repository at GitHub](https://github.com/s3fs-fuse/s3fs-fuse).
- [Deprecated repository at Google Project Hosting](https://code.google.com/p/s3fs/).
- [Amazon S3 Product Details](http://aws.amazon.com/s3/).
