---
title: TYPO3 CMS 13.x
firstHeadline: TYPO3 CMS 13.x
section: Machine Images
breadcrumb:
    - label: 'Machine Images'
      url: '../'
typo3versions:
    - v13
---

### History

The TYPO3 v13.x machine images are available at the [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-thrhrvzmzdmi4). We published the first sprint release TYPO3 v13.0 as a machine image in January 2024. The long-term support release (TYPO3 version 13.4) is scheduled to October 2023.

### TYPO3

According to the [official release announcement](https://typo3.org/article/typo3-v13-roadmap-announcement), the planned enhancements of the TYPO3 v13 series are:

* Frontend rendering presets
* Content blocks
* Improved search, redirects and workspaces
* Simplified external system integration
* Top-modern image rendering

### Server and Services

The machine image at the AWS Marketplace comes with the packages listed below installed and configured. Please note that all components can be upgraded, removed, replaced, etc. as required.

#### Operating System

* Debian GNU/Linux version 12 (code name: "Bookworm").

#### Web Server

* Apache version 2.4, see [official documentation](https://httpd.apache.org/docs/2.4/).

#### Database Server

* MariaDB version 10.6, see [official resources](https://mariadb.org/documentation/).

Depending on the project size, project complexity, and individual use case, we recommend to consider an externally hosted database instance such as [Amazon Aurora MySQL/MariaDB](https://aws.amazon.com/rds/aurora/) (or a similar [Amazon RDS](../miscellaneous/glossary.md#amazonrds) product), managed by AWS.

#### PHP

* PHP Version 8.2, see [official documentation](https://www.php.net/docs.php).

#### PHP Composer

The TYPO3 installation uses [PHP Composer](https://getcomposer.org/) version 2 by default. Today, Composer is the officially recommended method of installing TYPO3.

#### Other Components

* Image Magick, see [official website](https://imagemagick.org/).
