---
title: Security Best Practises
#subtitle: Security Best Practises
lastupdate: 27 August 2019
---

## Introduction

Keeping the server (the EC2 instance) and TYPO3 CMS secure is very important and an essential task. You should have a strict policy and tested procedures in place. This documentation can not cover a complete security strategy (please seek further advices from a trained system administrator and security expert), but it describes recommended basic actions.

Ensuring and hardening the security of a system also depends on the individual setup. In case you installed additional software packages or TYPO3 extensions, changed the configuration or integrated other services, you should take further measures, not documented here.

This documentation assumes you are using the default setup as it stands when you launch one of our TYPO3-on-AWS [machine images](../machine-images/index.md).

## Debian GNU/Linux

It is highly recommended that security-related updates of [Debian GNU/Linux](https://debian.org){.fa-icon .fa-right-external-link-alt} are installed in a timely manner (in an ideal world, as soon as they are released). You find detailed instructions how to check, if updates are available, and how to install them in section *Update Debian Linux*. <!-- @TODO -->

We also recommend to study [The Debian Administrator's Handbook](https://debian-handbook.info/){.fa-icon .fa-right-external-link-alt} (in particular chapter "Security"), which is available for free and a fantastic resource for all users of a Debian-based distribution.

## TYPO3 CMS

Like any other web application or content management system, [TYPO3 CMS](https://typo3.org){.fa-icon .fa-right-external-link-alt} requires security updates from time to time. TYPO3 CMS has a great reputation and the TYPO3 Security Team takes its responsibility very seriously.

Security advisories about TYPO3 CMS and TYPO3 third party extensions are published by the Security Team at [https://typo3.org/help/security-advisories/](https://typo3.org/help/security-advisories/){.fa-icon .fa-right-external-link-alt}. If a security update for your TYPO3 instance has been published, it is highly recommended to install it as soon as possible. If no update is available to fix the vulnerability, follow the recommendation in the security advisories.

In addition to the actions above, we also recommend to read the official [TYPO3 Security Guide](https://docs.typo3.org/m/typo3/reference-coreapi/master/en-us/Security/){.fa-icon .fa-right-external-link-alt}. This document describes some typical risks and advises how to protect a TYPO3 site in order to ensure it is and stays secure and stable.

## AWS Security

The AWS cloud infrastructure has been designed to be one of the most flexible and secure cloud computing environments available today. The [AWS Security Center](https://aws.amazon.com/security/){.fa-icon .fa-right-external-link-alt} provides a comprehensive collection of information and resources around security measures built into the core AWS cloud infrastructure, platforms, and services.

The AWS Security Center is also the source of official [security bulletins](https://aws.amazon.com/security/security-bulletins/){.fa-icon .fa-right-external-link-alt} published by AWS.
