---
title: Accessing the Server
subtitle: The Second Step
---

## SSH Access (Get Access Details)

Assuming, you just started a new server (see section "[Launch the Instance](launch.md)" for details), the first thing you have to do now is to retrieve the **access details**. This includes access to the backend of TYPO3 (the administrator interface), the Install Tool, and possibly the database server.

Open the [AWS Management Console](https://console.aws.amazon.com/ec2/){.fa-icon .fa-right-external-link-alt} (EC2 service) and copy the **public hostname** of the instance to your clipboard. It is labelled "Public DNS" and looks like:

> ec2-123-45-67-89.compute-1.amazonaws.com

Use a SSH client software such as [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/){.fa-icon .fa-right-external-link-alt} for Microsoft Window and select your private SSH key to authenticate against the server (no password required). Connect to the server and make sure you are using the user name "`admin`" to log in. The access details will be displayed. This looks like the example below:

```text
TYPO3 CMS:

  Install Tool password.............: yac867Sst8vwEOuE
  Backend admin user / password.....: admin / pcT3qWeaJOnJVyC2

MySQL Database Server:

  Administrator user / password.....: root / 5QGXl7LuVObv7BXk
  TYPO3 user / password.............: typo3 / ny0OBEpZTtKSQGWA
  TYPO3 database....................: typo3cms

-----------------------------------------------------------

  Operating system..................: Debian GNU/Linux 8 (jessie)
  Debian release....................: version 8.2

  Amazon AWS instance ID............: i-4264c3bb
  Amazon AWS instance type..........: t2.micro
  Amazon AWS Security Group ID......: TYPO3-on-AWS

  If you can not access your TYPO3 CMS instance under the following URL,
  please ensure the AWS Security Group has TCP port 80 open.

  http://123.45.67.89

```

Please note that the screen above is just an example. The exact output depends on the TYPO3 version you have chosen and your individual setup. It is also important to understand that passwords, user names, etc. can be changed. The details that are shown when you log in are the **initial** details that are generated when you launch the instance the first time. They are stored in the file `/home/admin/.accessdetails`.

If you update the access details you should consider to delete this initial file to avoid any confusion.

## Super User Privileges

At this point, you are logged in as user "`admin`" with limited access to the server. However, you can execute commands with full system privileges by adding `sudo` in front of the command. For example:

```bash
$ id --user --name
admin
```

```bash
$ sudo id --user --name
root
```

The first command shows "`admin`" as the name of the user who executed the command `id`. The second command (with `sudo` prepended) shows "`root`" which is the super user of the system. You can also switch to user "`root`" by executing the following command:

```bash
$ sudo -i
```

Every command you execute from this point on runs under the super user privileges ("`root`").

> ### Be Warned {.warning .warning-headline .warning-icon}
>
> The **super user** can do anything and everything, and thus doing daily work as the super user can be dangerous. You could type a command incorrectly and destroy the system.

You can switch back from being user "`root`" to the "`admin`" user by entering `exit`:

```bash
$ exit
```

## TYPO3 Backend Access

TYPO3 features two different views: the publicly visible interface of your TYPO3 website is called **frontend** (FE). This is what your users/visitors see.

In order to manage your TYPO3 site, you have to login to the **backend** (BE). This is the administration interface. Depending on how you configure the system, you may allow editors to maintain content, to add or delete pages, upload files and images, etc.

The backend can be accessed by adding "`/typo3`" to the end of the URL. Assuming, your hostname reads:

> ec2-123-45-67-89.us-east-1.compute.amazonaws.com

Then, the **frontend** is:

> http://ec2-123-45-67-89.us-east-1.compute.amazonaws.com

...and the **backend** can be accessed as:

> http://ec2-123-45-67-89.us-east-1.compute.amazonaws.com/typo3

## Install Tool

The name "Install Tool" is a little bit misleading because this component of TYPO3 offers more than just installing the system. It also enables you to configure the instance. In newer versions of TYPO3 (for example TYPO3 v9 and later) the Install Tool is an integral part of the backend, but can also be accessed as a stand-alone application if required. Simply add "`typo3/install`" to the URL. For example:

> http://ec2-123-45-67-89.us-east-1.compute.amazonaws.com/typo3/install

If you are not logged in at the backend of TYPO3 you need the *Install Tool password* to access this important component.

The initial password is displayed when you login as user "`admin`" via SSH as described above. Make sure that you enter the password exactly as shown (upper and lower case).

## What's Next

Before we discuss the next steps, let's check if we are on the same page. You [launched](launch.md) an EC2 instance with TYPO3 pre-installed and retrieved the access details by logging in via SSH. You accessed the *frontend* and you logged in at the *backend* of TYPO3. You also know how to open the *Install Tool*.

If this is all correct, you are ready to go and to use the TYPO3 instance. We compiled a list of [typical use cases](../miscellaneous/typical-use-cases.md) to give you an idea what you can do now. You can also have a look at the "[How-to](../../how-to/)"-section to learn more about some specific task.
