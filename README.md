# Welcome to @djblackeagle/testing-publish <!-- omit in toc -->

[![npm version](https://img.shields.io/npm/v/@djblackeagle/testing-publish.svg)][REF_INTERN_URL_NPMJS_PACKAGE]
[![Downloads](https://img.shields.io/npm/dm/@djblackeagle/testing-publish.svg)][REF_INTERN_URL_NPMJS_PACKAGE]
[![License](https://img.shields.io/badge/License-MIT-blue.svg)][REF_INTERN_FILE_MD_LICENSE]
[![CodeQL](https://github.com/DJBlackEagle/testing-publish/workflows/CodeQL/badge.svg)][REF_INTERN_URL_WORKFLOW_CODEQL]
[![Build Status](https://github.com/DJBlackEagle/testing-publish/workflows/Code%20quality%20and%20tests/badge.svg)][REF_INTERN_URL_WORKFLOW_CQAT]
[![Code Style](https://img.shields.io/badge/code_style-@djblackeagle/testing--publish-blue.svg)][REF_INTERN_URL_CODESTYLE]

Unified configuration for consistent code style, leveraging popular tools like
ESLint, Prettier, and Commitlint to ensure code quality, readability, and
standardized commit messages.

## Table of Contents <!-- omit in toc -->

- [Benefits](#benefits)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [Security](#security)
- [License](#license)
- [Additional Resources](#additional-resources)

## Benefits

Using `@djblackeagle/testing-publish` offers several advantages for your projects:

- **Consistency:** Enforce a unified code style across all your JavaScript and
  TypeScript projects.
- **Readability:** Improve code readability and maintainability with standardized
  formatting.
- **Efficiency:** Save time by automating code style enforcement with ESLint and
  Prettier.
- **Collaboration:** Facilitate team collaboration with consistent code and
  commit messages.
- **Quality:** Improve code quality by catching potential issues early with ESLint.
- **Standardized Commits:** Ensure clear and informative commit messages with
  Commitlint, following [Conventional Commits][REF_INTERN_URL_COMMIT_MESSAGE_FORMAT].

## Getting Started

This section will guide you through setting up and configuring `@djblackeagle/testing-publish`
in your project.

### Requirements

- [Node.js][REF_EXTERN_NODEJS] (>=18.0.0)
- [npm][REF_EXTERN_NPM] or [pnpm][REF_EXTERN_PNPM] or [Yarn][REF_EXTERN_YARN]
- [commitlint][REF_EXTERN_COMMITLINT] (>=19.8.0)
- [ESLint][REF_EXTERN_ESLINT] (>=9.0.0)
- [Prettier][REF_EXTERN_PRETTIER] (>=3.5.0)

### Installation

Install `@djblackeagle/testing-publish` and its dependencies using your preferred
package manager:

```sh
# npm
npm install --save-dev @djblackeagle/testing-publish prettier @commitlint/cli @commitlint/config-conventional eslint

# pnpm
pnpm add --save-dev @djblackeagle/testing-publish prettier @commitlint/cli @commitlint/config-conventional eslint

# Yarn
yarn add --dev @djblackeagle/testing-publish prettier @commitlint/cli @commitlint/config-conventional eslint
```

### Configuration

#### commitlint <!-- omit in toc -->

Create or modify your `commitlint.config.mjs` file and add the following:

```javascript
import { codeStyleNodeJs } from '@djblackeagle/testing-publish';

const config = {
  ...(await codeStyleNodeJs.commitlint.configs.base()),
};

export default config;
```

#### ESLint <!-- omit in toc -->

Create or modify your `eslint.config.mjs` file and add the following:

```javascript
import { codeStyleNodeJs } from '@djblackeagle/testing-publish';

/** @type {import('eslint').Linter.Config[]} */
const config = [...(await codeStyleNodeJs.eslint.configs.base(''))];

export default config;
```

#### Prettier <!-- omit in toc -->

Create or modify your `prettier.config.mjs` file and add the following:

```javascript
import { codeStyleNodeJs } from '@djblackeagle/testing-publish';

const config = {
  ...codeStyleNodeJs.prettier.configs.base(),
};

export default config;
```

## Contributing

We welcome contributions from the community! If you're interested in helping to
improve `@djblackeagle/testing-publish`, please take a look at our
[Contributing Guidelines][REF_INTERN_FILE_MD_CONTRIBUTING] for more information on
how to get started.

## Code of Conduct

We are committed to fostering a welcoming and inclusive community. Please review
our [Code of Conduct][REF_INTERN_FILE_MD_CODE_OF_CONDUCT] to understand our
expectations for behavior within the project.

## Security

If you discover a security vulnerability in `@djblackeagle/testing-publish`, please
follow our [Security Guidelines][REF_INTERN_FILE_MD_SECURITY] to report it responsibly.

## License

This project is licensed under the [MIT License][REF_INTERN_FILE_MD_LICENSE].

## Additional Resources

- [Development Guidelines][REF_INTERN_FILE_MD_DEVELOPMENT] – For detailed information
  on development, including explanations of package.json scripts and workflow configuration.

[REF_INTERN_EMAIL_ADDRESS_COD]: mailto:djblackeagle-dev@djblackeagle.services
[REF_INTERN_EMAIL_ADDRESS_OWNER]: mailto:djblackeagle-dev@djblackeagle.services
[REF_INTERN_EMAIL_ADDRESS_SECURITY]: mailto:djblackeagle-dev@djblackeagle.services
[REF_INTERN_FILE_MD_CHANGELOG]: CHANGELOG.md
[REF_INTERN_FILE_MD_CODE_OF_CONDUCT]: CODE_OF_CONDUCT.md
[REF_INTERN_FILE_MD_CONTRIBUTING]: CONTRIBUTING.md
[REF_INTERN_FILE_MD_DEVELOPMENT]: DEVELOPMENT.md
[REF_INTERN_FILE_MD_LICENSE]: LICENSE.md
[REF_INTERN_FILE_MD_README]: README.md
[REF_INTERN_FILE_MD_SECURITY]: SECURITY.md
[REF_INTERN_URL_ACTIONS]: https://github.com/DJBlackEagle/testing-publish/actions
[REF_INTERN_URL_CODESTYLE]: https://github.com/DJBlackEagle/testing-publish
[REF_INTERN_URL_COMMITS]: https://github.com/DJBlackEagle/testing-publish/commits/main/
[REF_INTERN_URL_COMMIT_MESSAGE_FORMAT]: https://www.conventionalcommits.org/en/v1.0.0/
[REF_INTERN_URL_CONTRIBUTING_GENERATOR]: https://contributing.md/generator
[REF_INTERN_URL_GIT]: https://github.com/DJBlackEagle/testing-publish
[REF_INTERN_URL_ISSUE_LIST]: https://github.com/DJBlackEagle/testing-publish/issues
[REF_INTERN_URL_ISSUE_NEW]: https://github.com/DJBlackEagle/testing-publish/issues/new/choose
[REF_INTERN_URL_MD_CHANGELOG]: https://github.com/DJBlackEagle/testing-publish/blob/main/CHANGELOG.md
[REF_INTERN_URL_MD_CODE_OF_CONDUCT]: https://github.com/DJBlackEagle/testing-publish/blob/main/CODE_OF_CONDUCT.md
[REF_INTERN_URL_MD_CONTRIBUTING]: https://github.com/DJBlackEagle/testing-publish/blob/main/CONTRIBUTING.md
[REF_INTERN_URL_MD_DEVELOPMENT]: https://github.com/DJBlackEagle/testing-publish/blob/main/DEVELOPMENT.md
[REF_INTERN_URL_MD_LICENSE]: https://github.com/DJBlackEagle/testing-publish/blob/main/LICENSE.md
[REF_INTERN_URL_MD_README]: https://github.com/DJBlackEagle/testing-publish/blob/main/README.md
[REF_INTERN_URL_MD_SECURITY]: https://github.com/DJBlackEagle/testing-publish/blob/main/SECURITY.md
[REF_INTERN_URL_NPMJS_PACKAGE]: https://www.npmjs.com/package/@djblackeagle/testing-publish
[REF_INTERN_URL_PULLREQUEST]: https://github.com/DJBlackEagle/testing-publish/pulls
[REF_INTERN_URL_VULNERABILITY]: https://github.com/DJBlackEagle/testing-publish/security
[REF_INTERN_URL_VULNERABILITY_NEW]: https://github.com/DJBlackEagle/testing-publish/security/advisories/new
[REF_INTERN_URL_WORKFLOW_CQAT]: https://github.com/DJBlackEagle/testing-publish/actions/workflows/code-quality-and-tests.yml
[REF_INTERN_URL_WORKFLOW_CODEQL]: https://github.com/DJBlackEagle/testing-publish/actions/workflows/codeql.yml
[REF_EXTERN_NODEJS]: https://nodejs.org
[REF_EXTERN_NPM]: https://www.npmjs.com
[REF_EXTERN_PNPM]: https://pnpm.io
[REF_EXTERN_YARN]: https://yarnpkg.com
[REF_EXTERN_PRETTIER]: https://prettier.io
[REF_EXTERN_COMMITLINT]: https://commitlint.js.org/
[REF_EXTERN_ESLINT]: https://eslint.org

<!-- markdownlint-disable-file MD013 -->
