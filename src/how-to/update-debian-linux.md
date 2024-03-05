---
title: Update Debian GNU/Linux
firstHeadline: Update Debian GNU/Linux
section: How-to
breadcrumb:
    - label: 'How-to'
      url: '../'
---

### Introduction

This article is based on the assumption that you are using one of our TYPO3-on-AWS machines images in its default setup.

Keeping the operating system of the server up-to-date is a very important task to ensure your server is and stays secure and stable. Debian GNU/Linux makes it very easy to install updates, as long as you are using a stable version of the system, follow the main principles of maintaining it properly and do not install unsupported or proprietary software packages.

This document describes how to install updates manually and provides suggestions how to automate this process. However, it can not replace a reading such as "[The Debian Administrator's Handbook](http://debian-handbook.info/)" (which is available for free and a fantastic resource for all users of a Debian-based distribution) or the knowledge and expertise of a system administrator.

### Manual Updates

Assuming, you have not changed the address of the Debian repository server, you only need to do two simple things:

1. Update your package list (this checks if new updates are available for your system).
2. Download/install all updates available.

Installing software requires "root" privileges, so assuming you are logged in as user "admin" all commands have to prepended with `sudo`. To retrieve new lists of packages (available updates), execute the following command:

```bash
$ sudo apt-get update
```

The second step (check, download and install updates) can be initiated by the following command:

```bash
$ sudo apt-get upgrade
```

If the output reads "0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded", your system is already up-to-date. Otherwise, a list of available updates is shown and the system asks you, if you want to continue the download and installation of these. If you confirm this, the updates are retrieved from the repository server and deployed.

Depending on the type and nature of the update, it might be required to execute further actions during the installation/update process, e.g. restart services or decide, if an updated configuration file should replace an existing one. Follow the prompts on the screen and if in doubt, choose the default or recommended action.

### Automated Updates

Under certain circumstances, it might be necessary to automate the update process. A typical use case for such a scenario could be a server, which is not actively maintained by a system administrator. This strategy comes with some significant risks (e.g. if an update breaks the server or website), so you should really know, what you are doing.

On the other hand, the Debian GNU/Linux update process is known to be very stable and robust, especially if you are running a standard stable version of Debian.

There are several ways to set up automated updates (also known as unattended upgrades). The method described below is just one option.

First, install packages **unattended-upgrades** and **apt-listchanges** by executing the following command:

```bash
$ sudo apt-get install unattended-upgrades apt-listchanges
```

Then, configure **apt-listchanges**:

```bash
$ sudo dpkg-reconfigure apt-listchanges
```

The first setting should be changed to "text", the rest should remain as it stands. In the next step, edit file `50unattended-upgrades`:

```bash
$ sudo vi /etc/apt/apt.conf.d/50unattended-upgrades
```

Search for the following line and remove the leading #-character at the beginning:

```text
...
#Unattended-Upgrade::Mail "root";
...
```

Newer versions of Debian GNU/Linux do not have the value `root` configured by default. Use a valid email address and save your changes. Configure package **unattended-upgrades** as the last step:

```bash
$ sudo dpkg-reconfigure --priority=low unattended-upgrades
```

The question "Automatically download and install stable updates?" should be answered with "**Yes**".

This is all required to configure your Debian GNU/Linux system to check and install updates on a daily basis. Whenever updates have been installed (or the installation failed), an email is sent to "root" or the addresses configured above.

Some updates require a restart of the server (e.g. kernel updates). The default configuration does not reboot the server automatically and it is recommended to review the update notification mails and take appropriate actions if required.

### Notifications Only

A middle ground between manual and automatic updates is a notification concept: the system checks for required updates regularly and sends an email to a specific email address if updates are available.

The Debian package called **apticron** is a useful tool for this task:

```bash
$ sudo apt-get install apticron
```

When the installation is complete edit its configuration file:

```bash
$ sudo vi /etc/apticron/apticron.conf
```

Simply specify one or more email addresses (separated by a space) in the EMAIL-line as follows (replace `admin@example.com` with a valid email address):

```text
...
EMAIL="root@localhost admin@example.com"
...
```

Apart from that line, the default configuration should suit most cases. After saving your changes, the system will check for updates on a daily basis and sends an email to the address(es) configured.
