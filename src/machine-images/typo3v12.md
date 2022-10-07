---
title: TYPO3 CMS 12.x
# subtitle: Start Page
typo3versions:
    - v12
---

## History

TYPO3 v12.0, the first sprint release of the TYPO3 v12 release series, is currently under review by AWS and will be available soon.

<!--
The TYPO3 v12.x machine images are listed at the AWS Marketplace under product ID [XXXXXXXXXX](https://aws.amazon.com/marketplace/pp/XXXXXXXXXX). We published the first sprint release TYPO3 v12.0 as a machine image in October 2022. The long-term support release (TYPO3 version 12.4) is scheduled to April 2023.
-->

<!--
The TYPO3 v12.x machine images are listed at the AWS Marketplace under product ID [XXXXXXXXXX](https://aws.amazon.com/marketplace/pp/XXXXXXXXXX). We published the first machine image in October 2022. The long-term support release (TYPO3 version 12.4) was published in October 2021.
-->

## TYPO3

TYPO3 v12 will feature a significant productivity boost, as we aim to make the system the fastest TYPO3 version ever. The first sprint release of the TYPO3 v12 series comes with about 100 new features for editors, integrators and developers. Further changes and improvements will be announced in every sprint release over six months until the LTS-release in April 2023.

According to the [official release announcement](https://typo3.org/article/get-ready-for-typo3-v12){.fa-icon .fa-right-external-link-alt}, the highlights of TYPO3 v12 are:

* Increased performance
* Improved backend usability
* Create custom content types quickly and easily
* Top-modern dependent libraries (CKEditor v5, Symfony v6, Doctrine v3)
* Many improvements for developers

## Server and Services

The machine image at the AWS Marketplace comes with the packages installed and configured listed below. Please note that all these components can be upgraded, removed, replaced, etc. as required.

### Operating System

* Debian GNU/Linux version 12 (code name: "Bookworm").

### Web Server

* Apache version 2.4, see [official documentation](https://httpd.apache.org/docs/2.4/){.fa-icon .fa-right-external-link-alt}.

### Database Server

* MariaDB version 10.6, see [official resources](https://mariadb.org/documentation/){.fa-icon .fa-right-external-link-alt}.

Depending on the project size, project complexity, and individual use case, we recommend to consider an externally hosted database instance such as [Amazon Aurora MySQL/MariaDB](https://aws.amazon.com/rds/aurora/){.fa-icon .fa-right-external-link-alt} (or a similar [Amazon RDS](../miscellaneous/glossary.md#amazonrds){.fa-icon .fa-right-glossary} product), managed by AWS.

### PHP

* PHP Version 8.1, see [official documentation](https://www.php.net/docs.php){.fa-icon .fa-right-external-link-alt}.

### PHP Composer

The TYPO3 installation uses [PHP Composer](https://getcomposer.org/){.fa-icon .fa-right-external-link-alt} version 2 by default. Today, Composer is the officially recommended method of installing TYPO3.

### Other Components

* Image Magick, see [official website](https://imagemagick.org/){.fa-icon .fa-right-external-link-alt}.
