---
title: Introduction
firstHeadline: About the TYPO3-on-AWS Project
section: Getting Started
breadcrumb:
    - label: 'Getting Started'
      url: '../'
---

### Quick Overview

[Amazon Web Services](https://aws.amazon.com) (abbreviated "AWS") is undoubtedly the dominant cloud service provider worldwide. The services provided by this US company make up a cloud computing platform which allows everyone to boot up a scalable virtual private server in a few minutes. These servers build an ideal hosting environment for the enterprise open-source content management system **TYPO3 CMS**.

In short: go to the AWS Marketplace, find the machine images, choose your preferred version and launch an instance. It usually takes less than 5 minutes and you have a fully working, TYPO3-optimised server running — with full "root" access to the server via SSH and an administrator account in TYPO3.

The use cases are countless: spin up the most recent version of TYPO3 and take it for a test drive (e.g. if you have never worked with this CMS before), test a new version or your own TYPO3 extension. Use the instance as a development/test/approval platform or demonstrate TYPO3 to your clients or students. We compiled a list of the [typical use cases](../miscellaneous/typical-use-cases.md) if you are curious what else you could do.

The comprehensive [documentation](../index.md) guides you through all steps and provides answers to frequently asked questions. It is also a great resource for advanced users: it provides [security-related](../security/index.md) information on how to keep the server up-to-date and and describes how to update to the bleeding-edge version of TYPO3 from the Git repository for example.

### <a id="costs">Costs</a>

**One of the great benefits of Amazon Web Services is that you only pay what you use!**

#### Running an EC2 Instance

AWS hourly usage fees only apply when instances are running. These fees will appear on your monthly bill. Running an [EC2 instance](../miscellaneous/glossary.md#ec2instance) costs just a few $US cents per hour, assuming you launch a small, medium, or large instance. Bigger and more powerful are also available if required.

In most cases, a small instance (for example `m3.small`) is sufficient for running a TYPO3 instance in production, but depending on your exact requirements and expected traffic you possibly want to consider using a more powerful instance type. The exact costs depend on the operating system ("Linux" in our case), geographical region, instance type (performance), duration of operation, and data transferred.

So-called "micro" and "small" instances are suitable for common test scenarios and AWS even offers a [free usage tier](http://aws.amazon.com/free/) for new customers who qualify for it.

Further options are "reserved" and "spot" instances, and AWS also offers dedicated hosts which provide you with EC2 instance capacity on physical servers dedicated for your use.

#### Running the Software

License costs do not incur at all and the software running on the server is offered free of charge. Please see the licenses below and review [AWS EC2 Pricing](https://aws.amazon.com/ec2/pricing) for further details.

### <a id="licenses">Licenses</a>

[Debian GNU/Linux](https://www.debian.org/) — the operating system installed on the machine images — is free software, mainly licensed under the (common) [GNU General Public License](http://www.gnu.org/licenses/) and other open-source licenses. The software packages pre-installed on the server are stable (if not stated otherwise) and have been carefully selected and tested for interoperation and compatibility with each other and TYPO3.

[TYPO3](https://typo3.org) is a registered trademark and licensed under the [GNU General Public License](http://www.gnu.org/) version 2 or later. You can use TYPO3 free of any charge. You can redistribute it and/or modify it and/or built upon it under the terms of the GNU General Public License as published by the [Free Software Foundation](https://www.fsf.org/).

TYPO3 and all software components installed on the [EC2 instance](../miscellaneous/glossary.md#ec2instance) as well as the [machine images](../miscellaneous/glossary.md#machineimages) itself are distributed without any warranty.
