---
title: Test
firstHeadline: First Headline
lastupdate: 5 March 2024
breadcrumb:
    - label: 'Item 1'
      url: 'index.md'
    - label: 'Item 2'
      url: 'index.md'
typo3versions:
    - v10
    - v11
    - v12
---

For full documentation visit [mkdocs.org](https://mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs help` - Print this help message.

## Basic Styles and Formatting

Lorem ipsum dolor sit amet, consectetur **bold** adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco [link](https://example.com) nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa *italic* qui officia deserunt mollit anim id est laborum.

You can also <del class="text-decoration-line-through">strike</del> a word, but this requires HTML (not ideal): `<del class="text-decoration-line-through">...</del>`.

## Links

* [external link](http://example.com)
* [external link](http://example.com)
* [glossar](../miscellaneous/glossary)
* [internal link](test.md)

## Source Code

```php
class MyController
{
  private function listAction(): string
  {
    return 'hello';
  }
}
```

# Infos and Warnings

<hr />

> ### Possibly Outdated Information {.info .info-headline .info-icon}
>
> This article was published in March 2018 at [typo3.com](https://typo3.com/blog/typo3-on-amazon-web-services-part-2).
> While the majority of the contents is still valid, please be adviced that some details are possibly slightly outdated today.

<hr />

> ### Do Not Try this at Home {.warning .warning-headline .warning-icon}
>
> This article contains details.

# Headlines

## Headline 2

### Headline 3

#### Headline 4

##### Headline 5

## Columns

Columns are possible too, but this requires HTML (not ideal).

<div class="row">
    <div class="col-md-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div class="col-md-6">
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
</div>

```html
<div class="row">
  <div class="col-md-6">...</div>
  <div class="col-md-6">...</div>
</div>
```
