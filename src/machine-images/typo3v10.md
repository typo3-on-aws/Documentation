---
title: TYPO3 CMS 10.x
# subtitle: Start Page
typo3versions:
    - v10
---

## History

The TYPO3 CMS 10.x machine images are listed at the AWS Marketplace under product ID [B07W2ZPW5P](https://aws.amazon.com/marketplace/pp/B07W2ZPW5P). The first machine image was published in August 2019 and features [TYPO3 CMS version 10.0.0](https://get.typo3.org/release-notes/10.0.0){.fa-icon .fa-right-external-link-alt}.

## TYPO3

In comparison to the [other TYPO3 versions](index.md), the TYPO3 CMS 10.x machine images have a slightly different setup. These are the main changes and new features:

### PHP Composer

The TYPO3 installation uses [PHP Composer](https://getcomposer.org/){.fa-icon .fa-right-external-link-alt} by default. Previous versions were set up using the traditional installation method. Today, Composer is the officially recommended method of installing TYPO3.

### SQLite

The [SQLite](https://www.sqlite.org/){.fa-icon .fa-right-external-link-alt} database engine is used as the default relational database management system (RDBMS) for TYPO3 CMS v10.x machine images. SQLite is not a client–server database engine, but embedded into PHP. This is the ideal data storage for a development environment as well as small production instances. SQLite is fully supported by TYPO3 since version 9.

If you want to use a **database server** instead, you can choose between the following two options in general:

* Installed on the same EC2 instance (see the [documentation](../how-to/install-mariadb-server.md) for further details).
* Externally hosted (either on a separate, self-managed [EC2 instance](../miscellaneous/glossary.md#ec2instance){.fa-icon .fa-right-glossary} or [Amazon RDS](../miscellaneous/glossary.md#amazonrds){.fa-icon .fa-right-glossary}, managed by AWS).

## Server and Services

The machine image at the AWS Marketplace comes with the packages installed and configured listed below. Please note that all these components can be upgraded, removed, replaced, etc. as required.

### Operating System

* Debian GNU/Linux version 10 (code name: "Buster").

### Web Server

* Apache version 2.4, see [official documentation](https://httpd.apache.org/docs/2.4/){.fa-icon .fa-right-external-link-alt}.

### <a id="databaseserver">Database Server</a>

The [SQLite](https://www.sqlite.org/){.fa-icon .fa-right-external-link-alt} database engine is used as the default relational database management system (RDBMS) for TYPO3 CMS v10.x machine images. SQLite is not a client–server database engine, but embedded into PHP.

If SQLite does not meet the requirements of the TYPO3 site you plan to operate, please consider to use either [Amazon Aurora MySQL/MariaDB](https://aws.amazon.com/rds/aurora/){.fa-icon .fa-right-external-link-alt} (or a similar [Amazon RDS](../miscellaneous/glossary.md#amazonrds){.fa-icon .fa-right-glossary} product) or install a database server on the same or a separate EC2 instance. This could be for example [MySQL](https://www.mysql.com/){.fa-icon .fa-right-external-link-alt}, [MariaDB](https://mariadb.org/){.fa-icon .fa-right-external-link-alt}, [PostgreSQL](https://www.postgresql.org/){.fa-icon .fa-right-external-link-alt}, or a TYPO3-compatible database engine.




### PHP

* PHP Version 7.3, see [official documentation](https://www.php.net/docs.php){.fa-icon .fa-right-external-link-alt}.

### Other Components

* Image Magick, see [official website](https://imagemagick.org/){.fa-icon .fa-right-external-link-alt}.
