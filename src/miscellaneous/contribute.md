---
title: How to Contribute
firstHeadline: Improving the Documentation
section: Miscellaneous
---

**Yes, we need your help!** The TYPO3-on-AWS [machine images](../machine-images/index.md) are offered free of charge. So is the documentation you are reading now. We encourage you to provide feedback (positive and negative), report issues (typos, grammar errors, etc.), and help us shape *TYPO3-on-AWS* for the future. Don't hesitate to [contact us](/contact). Seriously!

### Where You Can Contribute

Any feedback is welcome: we adjust, extend, and improve the documentation based on the feedback we receive. Did you come across an issue? Is something not working as documented or as you expect? Do you think something should be explained better or differently? Please [contact us](/contact) or see below how to contribute to improve the documentation.

If you want to write some instructions (for example for the [how-to section](../../how-to/)), we would love to hear from you.

### How You Can Contribute

Contributing to the documentation is easier than you might think.

#### The Less-tech Savvy

Don't worry if you are not familiar with terms such as "Markup", "Git", "pull requests", etc. Just [contact us](/contact) and let us know what you are interested in and what you can offer. We will work something out with you.

#### The Hardcore Tech-nerds

The source code of the *TYPO3-on-AWS* documentation is publicly available at [GitHub](https://github.com/typo3-on-aws/Documentation). The repository contains two folders: `theme/` and `src/`. The latter contains all files and directories that represent the documentation. The documentation is almost entirely written in simple [Markdown](https://en.wikipedia.org/wiki/Markdown). The static site generator [MkDocs](https://www.mkdocs.org/) is used to convert the Markdown files into the project documentation.

Take a peek and play with it - it's super-easy! Clone the *original* repository:

```bash
$ git clone https://github.com/typo3-on-aws/Documentation.git
```

Change into the `Documentation/` directory and run MkDocs' built-in server. This opens a web-server on TCP port 8000:

```bash
$ cd Documentation/
$ mkdocs serve
```

While you edit the Markdown documentation files you can check the outcome in real-time in your browser (`http://localhost:8000`).

To contribute to the documentation, [fork](https://www.google.com/search?q=site%3Ahelp.github.com+fork) the repository, make your changes to the Markdown files, and suggest your changes as a [pull request](https://www.google.com/search?q=site%3Ahelp.github.com+pull+request).
