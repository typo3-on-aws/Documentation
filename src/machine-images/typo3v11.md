---
title: TYPO3 CMS 11.x
# subtitle: Start Page
typo3versions:
    - v11
---

## History

The TYPO3 v11.x machine images are listed at the AWS Marketplace under product ID [xxxxxxxxxx](https://aws.amazon.com/marketplace/pp/xxxxxxxxxx). We published the first machine image in December 2020.

## TYPO3

According to the [official release announcement](https://typo3.org/article/typo3-version-110-ready-for-liftoff){.fa-icon .fa-right-external-link-alt}, the planned highlights of TYPO3 v11 include:

* Link sharing and deep linking for the TYPO3 backend
* Multi-factor authentication (MFA)
* Improved TYPO3 backend experience
* Improved Extbase framework
* Improved authentication process

## Server and Services

The machine image at the AWS Marketplace comes with the packages installed and configured listed below. Please note that all these components can be upgraded, removed, replaced, etc. as required.

Please note that in comparison to the [other TYPO3 versions](index.md), the TYPO3 v11 machine images have a slightly different and more modern setup. The instance features a mininum of 16 GB disk space by default and the Linux swap partition is automatically created during system launch.

### Operating System

* Debian GNU/Linux version 11 (code name: "Bullseye").

### Web Server

* Apache version 2.4, see [official documentation](https://httpd.apache.org/docs/2.4/){.fa-icon .fa-right-external-link-alt}.

### Database Server

* MariaDB version 10.5, see [official resources](https://mariadb.org/learn/){.fa-icon .fa-right-external-link-alt}.

Depending on the project size, project complexity, and individual use case, we recommend to consider an externally hosted database instance such as [Amazon Aurora MySQL/MariaDB](https://aws.amazon.com/rds/aurora/){.fa-icon .fa-right-external-link-alt} (or a similar [Amazon RDS](../miscellaneous/glossary.md#amazonrds){.fa-icon .fa-right-glossary} product), managed by AWS.

### PHP

* PHP Version 7.4, see [official documentation](https://www.php.net/docs.php){.fa-icon .fa-right-external-link-alt}.

### PHP Composer

The TYPO3 installation uses [PHP Composer](https://getcomposer.org/){.fa-icon .fa-right-external-link-alt} version 2 by default. Today, Composer is the officially recommended method of installing TYPO3.

### Other Components

* Image Magick, see [official website](https://imagemagick.org/){.fa-icon .fa-right-external-link-alt}.
