---
title: TYPO3 CMS 7.x
# subtitle: Start Page
typo3versions:
    - v7
---

## History

The TYPO3 CMS 7.x machine images are listed at the AWS Marketplace under product ID [B00RY6O0QS](https://aws.amazon.com/marketplace/pp/B00RY6O0QS). The first machine image was published in January 2015 and features [TYPO3 CMS version 7.0.2](https://get.typo3.org/release-notes/7.0.2){.fa-icon .fa-right-external-link-alt}. Subsequent releases include all TYPO3 sprint releases including the long-term support version **TYPO3 v7 LTS** (also known as version 7.6).

TYPO3 CMS 7.x reached its end-of-life in December 2018. Extended support can be obtained from the [TYPO3 GmbH](https://typo3.com){.fa-icon .fa-right-external-link-alt}.

## TYPO3

According to the [official release announcement](https://typo3.org/article/announcing-typo3-cms-7-lts/){.fa-icon .fa-right-external-link-alt}, the highlights of TYPO3 version 7 LTS are:

* Restructured TYPO3 backend.
* Performance increase.
* Revised install tool.

The LTS-version was released on Tuesday, 10 November 2015. More than three years after the initial release, this version reached its end-of-life on Friday, 30 November 2018 (see [announcement](https://typo3.org/article/this-is-the-end-for-typo3-v7-lts/){.fa-icon .fa-right-external-link-alt}) and users were encouraged to upgrade to [TYPO3 v8](typo3v8.md).

## Server and Services

The machine image at the AWS Marketplace comes with the packages installed and configured listed below. Please note that all these components can be upgraded, removed, replaced, etc. as required.

### Operating System

* [Debian GNU/Linux](https://debian.org){.fa-icon .fa-right-external-link-alt} version 8 (code name: "Jessie").

### Web Server

* Apache version 2.4, see [official documentation](https://httpd.apache.org/docs/2.4/){.fa-icon .fa-right-external-link-alt}.

### Database Server

* MySQL version 5.5, see [reference manual](https://dev.mysql.com/doc/refman/5.5/en/){.fa-icon .fa-right-external-link-alt}.

### PHP

* PHP Version 5.6, see [official documentation](https://www.php.net/docs.php){.fa-icon .fa-right-external-link-alt}.

### Other Components

* Image Magick version 6.8, see [official website](https://imagemagick.org/){.fa-icon .fa-right-external-link-alt}.
