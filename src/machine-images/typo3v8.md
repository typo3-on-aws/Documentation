---
title: TYPO3 CMS 8.x
# subtitle: Start Page
typo3versions:
    - v8
---

## History

The TYPO3 CMS 8.x machine images are listed at the AWS Marketplace under product ID [B01DO8DF2E](https://aws.amazon.com/marketplace/pp/B01DO8DF2E). We published the first TYPO3 v8 machine image in April 2016. Subsequent releases include all TYPO3 sprint releases as well as the long-term support version **TYPO3 v8 LTS** (also known as version 8.7).

TYPO3 CMS 8.x reached its end-of-life in March 2020. Extended support can be obtained from the [TYPO3 GmbH](https://typo3.com){.fa-icon .fa-right-external-link-alt}.

## TYPO3

According to the [official release announcement](https://typo3.org/cms/release-news/typo3-8-release-notes/){.fa-icon .fa-right-external-link-alt}., the highlights of TYPO3 version 7 LTS are:

* Performance (mainly due to PHP v7, Standalone Fluid, ExtJS replacement by jQuery).
* Mobile responsive backend.
* New image manipulation functionality.
* New Form Framework to build forms.
* The introduction of [CKEditor](http://ckeditor.com/){.fa-icon .fa-right-external-link-alt}. as the default RTE.
* The usage of [Doctrine DBAL](http://www.doctrine-project.org/projects/dbal.html){.fa-icon .fa-right-external-link-alt}. for database abstraction.
* New concepts for multiple languages and translations.

The LTS-version was released on Tuesday, 4 April 2017. It received maintenance and bug fixes for 1.5 years and security updates for three years until April 2020.

## Server and Services

The machine image at the AWS Marketplace comes with the packages installed and configured listed below. Please note that all these components can be upgraded, removed, replaced, etc. as required.

### Operating System

* [Debian GNU/Linux](https://debian.org){.fa-icon .fa-right-external-link-alt} version 8 (code name: "Jessie").

### Web Server

* Apache version 2.4, see [official documentation](https://httpd.apache.org/docs/2.4/){.fa-icon .fa-right-external-link-alt}.

### Database Server

* MySQL version 5.5, see [reference manual](https://dev.mysql.com/doc/refman/5.5/en/){.fa-icon .fa-right-external-link-alt}.

### PHP

* PHP Version 7.0, see [official documentation](https://www.php.net/docs.php){.fa-icon .fa-right-external-link-alt}.

### Other Components

* Image Magick version 6.8, see [official website](https://imagemagick.org/){.fa-icon .fa-right-external-link-alt}.
