---
title: Launch the Instance
firstHeadline: Launch the Instance
section: Getting Started
breadcrumb:
    - label: 'Getting Started'
      url: '../'
---

### Overview

Only three simple steps are required to launch a TYPO3 system on AWS and it usually takes less than 5 minutes (assuming you already have an [AWS account](https://portal.aws.amazon.com/billing/signup)):

* Go to the [AWS Marketplace](https://aws.amazon.com/marketplace/seller-profile?id=3c5e5f3c-d60e-4405-a9ca-aae8abfa3e2b).
* Choose the characteristics of the TYPO3-on-AWS machine image you want to use.
* Launch the instance.

After that, you are able to connect to the server and [access](access.md) TYPO3. You can then change, re-configure, and test the system to your heart's content. No limits!

### Prerequisite

Before you start, ensure you meet the following requirements:

* You have a valid [AWS account](https://portal.aws.amazon.com/billing/signup) (and access details).
* You know about TYPO3 basics.
* You have at least basic knowledge of Linux system administration.

### AWS Marketplace

The [AWS Marketplace](https://aws.amazon.com/marketplace/seller-profile?id=3c5e5f3c-d60e-4405-a9ca-aae8abfa3e2b) features thousands of machine images (virtual servers) which you can start with a click of a few buttons. This requires an AWS account (see see [AWS Getting Started Resource Center](https://aws.amazon.com/getting-started/) to learn how to sign up for a free AWS account).

Go to the [AWS Marketplace](https://aws.amazon.com/marketplace/seller-profile?id=3c5e5f3c-d60e-4405-a9ca-aae8abfa3e2b) and search for "`schams.net`" (or follow the link) to get an overview of the TYPO3-on-AWS images available. They are labelled as "`sold by schams.net`" but given that the price is $0.- the usage of the software is free of any charge (AWS hourly usage fees apply though, see [costs](introduction.md#costs) for further details).

Our machine images usually feature the latest TYPO3 version and a well-known, modern, stable, open-source, and free Linux operating system: Debian GNU/Linux. There are alternative TYPO3 machine images available from other vendors/sellers and if our offers do not meet your requirements, you could consider to search for "`typo3`" and choose one of the other images instead.

> ### Warning {.warning .warning-headline .warning-icon}
>
> Please note that we can not support machine images from other vendors/sellers. We recommend to compare costs and support options when you consider alternative products.

### Choose/Configure Machine Image

Depending on your needs and requirements, you may want to launch a specific version of TYPO3. In most cases this will be the latest stable LTS-version (long-term support). A list of all TYPO3 versions can be found on the page "[Machine Images Overview](../machine-images/index.md)".

Click the "Continue" button and login with your AWS account if you are not logged in yet. On the next page you can select between "**1-Click Launch**" and "**Manual Launch**". In this documentation we use the first option.

From top to bottom, you can select a few things now:

* The TYPO3 version you want to use.
* The region in which you want to launch the server.
* The instance type (micro, small, medium, large, etc.).
* Classic or VPC (virtual private cloud) setup.
* The Security Group (firewall rules).
* The SSH key pair to use.

Unless you have some specific requirements, or you know exactly what you are doing, use the following configuration:

Select the latest TYPO3 version and a region of your choice (e.g. `US-east`). The instance types comprise varying combinations of CPU, memory, storage, and networking capacity. For testing purposes, the "micro" instance should be sufficient. For a small to medium size TYPO3 site in production, you possibly want to use a "small" or "medium" instance. You find all details about instance types at <https://aws.amazon.com/ec2/instance-types/>

If you are eligible for [AWS' Free Usage Tier](https://aws.amazon.com/free/), you can run a micro instance for free for a certain period of time.

It depends on the region and the specific machine image you choose, if you can launch your server inside a VPC (virtual private cloud) or in a "classic setup". VPC is slightly more complex but offers more options in regards of your network setup for example. *Security Groups* define firewall rules (which IP addresses are allowed to access which service of your server). Our standard setup is strictly limited for security reasons and only port 22 (SSH access) and port 80 (web access) are allowed. You can adjust these rules later (e.g. open additional ports such as 443 for HTTPS), so choose the option "create new based on seller settings" from the dropdown box.

The last configuration allows you to choose the SSH key in order to access your server. AWS does not allow password access by default and the more secure public/private key authentication has to be used instead. With this method a public key is stored on the server and a private key is stored on your machine. When you try to access the server, your *SSH client* negotiates the authentication with the server. Only if your local private key matches the public key installed on the server, you are logged in. Otherwise the server denies access. This sounds like the key to your house, right? So make sure that your private key remains private and never copy it or share it with someone else.

If you created a public/private key pair in the same AWS region before, you can select it from the dropdown box. In this case, it is important that you have the private key on your local machine of course. If you never created a key pair in the region you selected, you have to visit the [Amazon EC2 Console](https://console.aws.amazon.com/ec2/#s=KeyPairs) first, create a new key pair in the right region, and return to the "1-Click Launch" page.

Due to the fact that you cannot login to the server without your private key, you have to create a new key pair in the case you lost the private key.

### Launch Instance

Finally, click button "**Accept Terms & Launch with 1-Click**" to launch the machine image with the settings made. At this point an instance will be deployed on EC2 and you will receive an email to confirm your subscription. Your new server will be ready in 2 to 3 minutes. Once the instance is running you have two options: you can manage the server in the AWS Management Console or you can go to the TYPO3 instance straight away (access the software). Both options appear in the list of subscriptions as links.

If you launched a TYPO3 instance and followed the link to the site, you will see a start screen with a TYPO3 logo at the top and some information about the instance. If this is not the case, you possibly accessed the site too early (maybe the server has not completed the boot process yet). Be patient and try again a few minutes later.

Assuming, you can access the site in your browser, well done! You just launched your new TYPO3 instance on a Debian GNU/Linux operating system running in the AWS cloud.

### What's Next?

First of all, please note that hourly usage fees may apply when instances are running. These fees are AWS costs and we do not control them. Please see [costs](introduction.md#costs) and [licenses](introduction.md#licenses) for further details. If you do not use the instance, simply shut it down (**stop** the EC2 instance). Changes you make (e.g. to your TYPO3 website) remain and you can re-start the instance later and continue working with it.

If you do not need the instance anymore you can **terminate** it. This destroys the instance and all data stored on it. Be careful though: terminating an instance is an irreversible action.

Once you started a new server, the first thing you should do is accessing the server via SSH and getting the access details (for example the password to the TYPO3 backend). Please read the documentation "[Accessing the Server](access.md)" for further instructions.

Whenever you started a server, it is also a good idea to check and install security updates. See the [security-related topics](../security/index.md) of this documentation for details.
