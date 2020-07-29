---
title: Update TYPO3 CMS
#subtitle: ...
typo3versions:
    - v10
---

## Introduction

This article is based on the assumption that you are using one of our TYPO3-on-AWS machines images in its default setup.

Keeping the server and TYPO3 up-to-date is a very important task to ensure your server and application are secure and stable. In general, we differentiate between three types of updates:

- A *major version* update (this is from version 10.x.x to version 11.x.x for example).
- A *minor version* update (this is from version 10.3.x to version 10.4.x for example).
- A *bugfix version* update (this is from version 10.4.1 to version 10.4.2 for example).

This document describes how to update TYPO3 to the latest **bugfix version**. These updates are important as bugfix updates possibly also contain security fixes.

Please refer to the [official TYPO3 Installation and Upgrade Guide](https://docs.typo3.org/m/typo3/guide-installation/master/en-us/){.fa-icon .fa-right-external-link-alt} for instructions on how to update major and minor versions.


## Considerations

A TYPO3 core update is typically easy and straight forward &mdash; in particularly bugfix updates. However, it is best practice to create a backup of the TYPO3 instance (including the database) in case something goes wrong.

> ### Backups {.info .info-headline .info-icon}
>
> It is better to have a backup that you don't need than needing a backup that you don't have!

Another advice is to test an update on a separate instance before executing the update on a production instance.


## TYPO3 Core Update

The following sections assume that you are using our TYPO3-on-AWS machines images and the [PHP Composer](https://getcomposer.org/){.fa-icon .fa-right-external-link-alt} setup (which is the default and recommended setup).


### Check Current Versions

To list **all** currently installed packages and their versions, you can use the `show` command:

```bash
$ composer show
```

To filter the list you can pass a package mask using wildcards. The following example only shows TYPO3 core packages for example:

```bash
$ composer show typo3/cms*
```

For more details about the `composer show` command, please read the [Composer documentation](https://getcomposer.org/doc/03-cli.md#show){.fa-icon .fa-right-external-link-alt}.


### Update the TYPO3 Core

In order to get the latest versions of the dependencies, you can use the `update` command. To update the TYPO3 core, execute the following command to update all packages that match the pattern `typo3/cms*` (which are the TYPO3 core packages):

```bash
$ composer update typo3/cms* --with-all-dependencies
```

Composer supports a wide range of options. The example above includes the option `--with-all-dependencies` which adds all dependencies of allowed packages to the allow list, including those that are root requirements. The option `--dry-run` is often recommended to only simulate the command without actually doing anything. This way you can check what *would* happen before you execute the command without this option.

For more details about the `composer update` command, please read the [Composer documentation](https://getcomposer.org/doc/03-cli.md#update-u){.fa-icon .fa-right-external-link-alt}.


## TYPO3 Extension Updates

Now let's look at extension updates. Did you know that most security vulnerabilities are discovered in TYPO3 extensions rather than in the TYPO3 core?
As outlined in the dedicated section "[Security](../../security/)", this is an important topic and security is our top priority.
You should keep an eye on the [official security advisories](https://typo3.org/help/security-advisories){.fa-icon .fa-right-external-link-alt} published by the TYPO3 Security Team.

We recommend that you keep your TYPO3 extensions up-to-date, and you should take action as soon as possible if a security update is available.

To update *everything* (the TYPO3 core, all dependent packages, and TYPO3 extensions) you can execute the following command:

```bash
$ composer update
```

This is basically the same `composer update` command that you used above, but without the filter for TYPO3 core packages.
You can also use the `--dry-run` option to only simulate the command without actually doing anything.


## Further Reading

See official [TYPO3 Installation and Upgrade Guide](https://docs.typo3.org/m/typo3/guide-installation/master/en-us/){.fa-icon .fa-right-external-link-alt} provides more details on how to update a TYPO3 instance and/or extensions.
