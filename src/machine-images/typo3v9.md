---
title: TYPO3 CMS 9.x
firstHeadline: TYPO3 CMS 9.x
section: Machine Images
breadcrumb:
    - label: 'Machine Images'
      url: '../'
typo3versions:
    - v9
---

### History

The TYPO3 v9.x machine images are available at the [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-o6ng7g5nghjmi). The first machine image was published in 2018 and features [TYPO3 CMS version 9.0.0](https://get.typo3.org/release-notes/9.0.0). Subsequent releases include all TYPO3 sprint releases including the long-term support version **TYPO3 v9 LTS** (also known as version 9.5).

TYPO3 CMS 9.x reached its end-of-life in October 2021. Extended support can be purchased from the [TYPO3 GmbH](https://typo3.com).

### TYPO3

TYPO3 version 9 LTS offers enhanced usability features in the backend (the administration interface), upgraded end-user security and privacy (e.g. to achieve GDPR compliance without headaches), top modern password hashing algorithms, best-practice SEO options out of the box, and much more.

According to the [official release announcement](https://typo3.org/article/typo3-v9-lts-youre-the-one-that-i-want/), the highlights of TYPO3 version 9 LTS are:

* Speaking URLs out of the box.
* Search engine optimization (SEO) as part of the TYPO3 core (system extension).
* Site management (including "Site Configuration" and "Redirect" backend modules).
* Backend changes such as an updated page tree, modal popups, plus further improvements.
* New Admin Panel.
* Hardened security.
* Context API and other new internal features.
* Upgrade process simplified.
* Full SQLite support.

The LTS-version was released on Tuesday, 2 October 2018. It received maintenance and bug fixes for 1.5 years and security updates for three years until October 2021.

### Server and Services

The machine image at the AWS Marketplace comes with the packages installed and configured listed below. Please note that all these components can be upgraded, removed, replaced, etc. as required.

#### Operating System

* [Debian GNU/Linux](https://debian.org) version 9 (code name: "Stretch").

#### Web Server

* Apache version 2.4, see [official documentation](https://httpd.apache.org/docs/2.4/).

#### Database Server

* MariaDB version 10.1, see [official resources](https://mariadb.org/learn/).

#### PHP

* PHP Version 7.2, see [official documentation](https://www.php.net/docs.php).

#### Other Components

* Image Magick version 6.9, see [official website](https://imagemagick.org/).
