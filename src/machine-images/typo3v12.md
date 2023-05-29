---
title: TYPO3 CMS 12.x
# subtitle: Start Page
typo3versions:
    - v12
---

## History

The TYPO3 v12.x machine images are available at the [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-e7albgyp3zlso). We published the first machine image in October 2022. The long-term support release (TYPO3 version 12.4) was published in April 2023.

## TYPO3

TYPO3 v12 LTS is a technically matured and jam-packed CMS featuring a significant productivity boost. Many backend enhancements such as a cleaner user interface of the page module, drag'n drop functionality in the Filelist module, and a "livesearch" in the TYPO3 backend are just a few examples of the release. TYPO3 v12 LTS also features incoming and outgoing webhooks, Content Security Policy (CSP), and many improvements for developers.

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

* PHP Version 8.2, see [official documentation](https://www.php.net/docs.php){.fa-icon .fa-right-external-link-alt}.

### PHP Composer

The TYPO3 installation uses [PHP Composer](https://getcomposer.org/){.fa-icon .fa-right-external-link-alt} version 2 by default. Today, Composer is the officially recommended method of installing TYPO3.

### Other Components

* Image Magick, see [official website](https://imagemagick.org/){.fa-icon .fa-right-external-link-alt}.
