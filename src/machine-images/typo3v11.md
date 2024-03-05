---
title: TYPO3 CMS 11.x
firstHeadline: TYPO3 CMS 11.x
section: Machine Images
breadcrumb:
    - label: 'Machine Images'
      url: '../'
typo3versions:
    - v11
---

### History

The TYPO3 v11.x machine images are available at the [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-v6w33h2oatsyk). We published the first machine image in December 2020. The long-term support release (TYPO3 version 11.5) was published in October 2021.

### TYPO3

TYPO3 v11 LTS contains many enhancements, new features, and modern technologies under the hood which make this version the best TYPO3 release yet. As a long-term support release (LTS), this version will be maintained by the community for three years, until October 2024.

According to the [official release announcement](https://typo3.org/article/typo3-v11-lts-warp-speed), the highlights of TYPO3 v11 are:

* Unified editor experience
* Advanced filelist module
* Deep links and link sharing in the TYPO3 backend
* Improved collaboration and Workflow features
* Flexible and secure Multi-factor Authentication (MFA)
* And a lot of Improvements for Developers

### Server and Services

The machine image at the AWS Marketplace comes with the packages installed and configured listed below. Please note that all these components can be upgraded, removed, replaced, etc. as required.

Please also note that in comparison to the [other TYPO3 versions](index.md), the TYPO3 v11 machine images have a slightly different and more modern setup. The instance features a mininum of 16 GB disk space by default and the Linux swap partition is automatically created during system launch.

#### Operating System

* Debian GNU/Linux version 11 (code name: "Bullseye").

#### Web Server

* Apache version 2.4, see [official documentation](https://httpd.apache.org/docs/2.4/).

#### Database Server

* MariaDB version 10.5, see [official resources](https://mariadb.org/learn/).

Depending on the project size, project complexity, and individual use case, we recommend to consider an externally hosted database instance such as [Amazon Aurora MySQL/MariaDB](https://aws.amazon.com/rds/aurora/) (or a similar [Amazon RDS](../miscellaneous/glossary.md#amazonrds) product), managed by AWS.

#### PHP

* PHP Version 7.4, see [official documentation](https://www.php.net/docs.php).

#### PHP Composer

The TYPO3 installation uses [PHP Composer](https://getcomposer.org/) version 2 by default. Today, Composer is the officially recommended method of installing TYPO3.

#### Other Components

* Image Magick, see [official website](https://imagemagick.org/).
