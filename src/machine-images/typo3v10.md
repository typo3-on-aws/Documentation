---
title: TYPO3 CMS 10.x
# subtitle: Start Page
typo3versions:
    - v10
---

## History

The TYPO3 v11.x machine images are available at the [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-q4ardel2bwnjq). The first machine image was published in August 2019 and features [TYPO3 CMS version 10.0.0](https://get.typo3.org/release-notes/10.0.0){.fa-icon .fa-right-external-link-alt}.

## TYPO3

TYPO3 version 10 LTS is the new flagship of the enterprise content management system and is, without doubt, one of the most advanced PHP-based open-source content management systems on the market.

According to the [official release announcement](https://typo3.org/article/typo3-v10-lts-safe-and-sound){.fa-icon .fa-right-external-link-alt}, the highlights of TYPO3 version 10 LTS are:

* Flexible and Expandable Dashboards
* User-friendly Form Framework Wizard
* Automatic Updates for URL Segments and Redirects
* Secure Password Reset/Recovery
* Link Validator Enhancements
* Better UX for Backend User Management
* Attractive HTML-based System Mails
* Frontend Login Improvements
* Automatically Detect Conflicting Redirects
* Translations with [Crowdin](https://crowdin.com/){.fa-icon .fa-right-external-link-alt}
* Browser-native Lazy-loading for Images
* Symfony's DependencyInjection
* Standardized EventDispatcher
* Symfony's Mailer API

The LTS-version was released on Tuesday, 21 April 2020. It receives maintenance and bug fixes for 1.5 years and security updates for at least three years until April 2023.

## Server and Services

The machine image at the AWS Marketplace comes with the packages installed and configured listed below. Please note that all these components can be upgraded, removed, replaced, etc. as required.

In comparison to the [other TYPO3 versions](index.md), the TYPO3 CMS 10.x machine images have a slightly different setup. These are the main changes and new features:

### PHP Composer

The TYPO3 installation uses [PHP Composer](https://getcomposer.org/){.fa-icon .fa-right-external-link-alt} by default. Previous versions were set up using the traditional installation method. Today, Composer is the officially recommended method of installing TYPO3.

### SQLite

[SQLite](https://www.sqlite.org/){.fa-icon .fa-right-external-link-alt} is not a client–server database engine, but embedded into PHP. This is the ideal data storage for a development environment or for small test, preview, or production instances. SQLite is fully supported by TYPO3 since version 9.

All machine images with **TYPO3 sprint releases** (TYPO3 versions 10.0, 10.1, 10.2, and 10.3) use SQLite as the default database engine. **TYPO3 v10 LTS** machine images (TYPO3 version 10.4) use MariaDB (see below) as the default relational database management system (RDBMS).

## Server and Services

The machine image at the AWS Marketplace comes with the packages installed and configured listed below. Please note that all these components can be upgraded, removed, replaced, etc. as required.

### Operating System

* Debian GNU/Linux version 10 (code name: "Buster").

### Web Server

* Apache version 2.4, see [official documentation](https://httpd.apache.org/docs/2.4/){.fa-icon .fa-right-external-link-alt}.

### Database Server

* MariaDB version 10.3, see [official resources](https://mariadb.org/learn/){.fa-icon .fa-right-external-link-alt}.

Depending on the project size, project complexity, and individual use case, we recommend to consider an externally hosted database instance such as [Amazon Aurora MySQL/MariaDB](https://aws.amazon.com/rds/aurora/){.fa-icon .fa-right-external-link-alt} (or a similar [Amazon RDS](../miscellaneous/glossary.md#amazonrds){.fa-icon .fa-right-glossary} product), managed by AWS.

### PHP

* PHP Version 7.3, see [official documentation](https://www.php.net/docs.php){.fa-icon .fa-right-external-link-alt}.

### Other Components

* Image Magick, see [official website](https://imagemagick.org/){.fa-icon .fa-right-external-link-alt}.
