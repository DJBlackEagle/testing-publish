# Development Guidelines <!-- omit in toc -->

This document provides in-depth information on the internal processes for developing,
building, testing, and maintaining the project. It is intended for developers and
contributors who want to understand how the project works behind the scenes.

## Table of Contents <!-- omit in toc -->

- [Package.json Scripts](#packagejson-scripts)
  - [Cleaning Scripts](#cleaning-scripts)
  - [Build Script](#build-script)
  - [Testing Scripts](#testing-scripts)
  - [Linting Scripts](#linting-scripts)
  - [Formatting Scripts](#formatting-scripts)
  - [Preparation Script](#preparation-script)
  - [Validation Script](#validation-script)
- [Workflow Configuration](#workflow-configuration)
  - [Automatic Dependency Updates](#automatic-dependency-updates)
  - [CodeQL Security Analysis](#codeql-security-analysis)
  - [Issue and Pull Request Cleanup](#issue-and-pull-request-cleanup)
  - [Label Synchronization](#label-synchronization)
- [Additional Resources](#additional-resources)

## Package.json Scripts

This section explains the purpose and functionality of the various scripts defined
in the `package.json` file. These scripts are used to streamline tasks such as
cleaning, building, testing, linting, formatting, and preparing the project.

### Cleaning Scripts

- **clean**  
  Runs multiple cleaning tasks sequentially. It removes build artifacts, cached files,
  and node modules by calling the following sub-scripts:
  - **clean:artifacts**: Deletes the `./.artifacts` directory.
  - **clean:build**: Removes the `./dist` directory where the build output is stored.
  - **clean:cache**: Deletes the `./.cache` directory.
  - **clean:node**: Removes the `./node_modules` directory.

### Build Script

- **build**  
  First, it cleans the build directory (using `clean:build`) and then compiles
  the project using the TypeScript compiler with the configuration specified in `tsconfig.build.json`.

### Testing Scripts

- **test**  
  Executes the test suite using Jest.
- **test:coverage**  
  Runs Jest with a coverage flag to generate code coverage reports.
- **test:watch**  
  Runs Jest in watch mode, automatically re-running tests when files change.
- **test:watch:onlychanged**  
  Runs Jest in watch mode but only tests files that have been modified.

### Linting Scripts

- **lint**  
  Runs ESLint on the entire project to analyze code for potential issues and to
  enforce code style.
- **lint:file**  
  Similar to `lint`, but can be targeted to specific files or directories.
- **lint:fix**  
  Runs ESLint with the `--fix` option to automatically correct fixable issues.
- **lint:fix:file**  
  Similar to `lint:fix`, but intended for specific files.

### Formatting Scripts

- **format**  
  Uses Prettier to check the code formatting across the project.
- **format:file**  
  Similar to `format`, but targets specific files.
- **format:fix**  
  Runs Prettier with the `--write` option to automatically format the code.
- **format:fix:file**  
  Similar to `format:fix`, but intended for specific files.

### Preparation Script

- **prepare**  
  Sets up Husky by installing Git hooks. These hooks enforce code quality and
  commit message standards before commits are finalized.

### Validation Script

- **validate**  
  A comprehensive script that performs a series of checks:
  1. Runs the linting process.
  2. Checks code formatting.
  3. Executes tests using a specific Jest configuration (`jest.config.workflow-ci.mjs`).

## Workflow Configuration

Our Continuous Integration (CI) pipeline is configured to ensure that the project
maintains high quality through automated testing, linting, formatting, and
security scans.

### Automatic Dependency Updates

The project uses an automated workflow with **Dependabot** to keep dependencies
up to date and ensure security updates are applied in a timely manner.

- Dependencies are checked for updates **monthly**, including **GitHub Actions**
  and **npm packages**.
- Critical security updates are applied automatically.
- Dependabot checks the defined package sources at regular intervals and creates
  **pull requests** for new versions.
- Changes can be manually reviewed, merged, or declined.
- Unwanted updates can be closed or ignored through Dependabot configuration.
- Pull requests are assigned to a responsible maintainer and labeled for easy identification.
- Commit messages follow a consistent pattern for better traceability.

Dependabot ensures that the project remains up to date and secure while allowing
control over updates through configurable settings.

### CodeQL Security Analysis

The project uses **CodeQL** to detect vulnerabilities and potential security risks
in the codebase. This automated workflow ensures continuous security analysis.

- CodeQL runs on **pushes to `main`** and **pull requests**.
- A scheduled scan is executed **weekly**.
- The analysis covers **JavaScript** and **TypeScript** code.
- The repository is checked out, and CodeQL is initialized.
- Code is analyzed using CodeQL’s security rules.
- Findings are reported under the repository’s **Security tab** on GitHub.

By detecting security vulnerabilities before they reach production, the workflow
provides automated security scanning without manual intervention and ensures
compliance with best security practices. The CodeQL workflow helps maintain a
secure codebase by identifying risks early in the development cycle.

### Issue and Pull Request Cleanup

The project uses an automated stale issue and pull request cleanup workflow to
ensure that inactive issues and PRs do not clutter the repository.

- Issues become stale after **30 days** of inactivity and are labeled as `stale`.
- Stale issues are closed automatically after **7 days** if no activity occurs.
- Pull requests become stale after **30 days** and are closed after **10 days**
  if no further action is taken.
- Issues and PRs with specific labels (e.g., `no-stale`, `help-wanted`) are
  exempt from this process.

This automation helps keep the repository manageable and ensures that active
discussions are prioritized.

### Label Synchronization

The project uses an automated workflow to ensure consistent issue and pull
request labels. This synchronization process helps maintain structured issue
management and simplifies repository maintenance.

- The workflow runs when changes are pushed to the **main** branch that modify
  the `.github/labels.yml` file.
- Labels defined in `.github/labels.yml` are automatically synchronized across
  the repository.
- Synchronization can also be triggered manually using **workflow dispatch**.
- Ensures a standardized and structured issue labeling system.
- Prevents label inconsistencies when working with multiple contributors.
- Reduces manual label management effort.

By automating label synchronization, the project maintains consistency and
reduces manual work, making issue tracking more efficient.

## Additional Resources

- [README.md][REF_INTERN_FILE_MD_README] – For an overview of the project and
  end-user documentation.
- [Contributing Guidelines][REF_INTERN_FILE_MD_CONTRIBUTING] for more information
  on how to get started.

This `development.md` serves as a guide for developers and contributors. It is
recommended to keep this document updated as the project evolves and new scripts
or CI configurations are introduced.

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
[REF_INTERN_URL_ACTIONS]: https://github.com/DJBlackEagle/code-style-nodejs/actions
[REF_INTERN_URL_CODESTYLE]: https://github.com/DJBlackEagle/code-style-nodejs
[REF_INTERN_URL_COMMITS]: https://github.com/DJBlackEagle/code-style-nodejs/commits/main/
[REF_INTERN_URL_COMMIT_MESSAGE_FORMAT]: https://www.conventionalcommits.org/en/v1.0.0/
[REF_INTERN_URL_CONTRIBUTING_GENERATOR]: https://contributing.md/generator
[REF_INTERN_URL_GIT]: https://github.com/DJBlackEagle/code-style-nodejs
[REF_INTERN_URL_ISSUE_LIST]: https://github.com/DJBlackEagle/code-style-nodejs/issues
[REF_INTERN_URL_ISSUE_NEW]: https://github.com/DJBlackEagle/code-style-nodejs/issues/new/choose
[REF_INTERN_URL_MD_CHANGELOG]: https://github.com/DJBlackEagle/code-style-nodejs/blob/main/CHANGELOG.md
[REF_INTERN_URL_MD_CODE_OF_CONDUCT]: https://github.com/DJBlackEagle/code-style-nodejs/blob/main/CODE_OF_CONDUCT.md
[REF_INTERN_URL_MD_CONTRIBUTING]: https://github.com/DJBlackEagle/code-style-nodejs/blob/main/CONTRIBUTING.md
[REF_INTERN_URL_MD_DEVELOPMENT]: https://github.com/DJBlackEagle/code-style-nodejs/blob/main/DEVELOPMENT.md
[REF_INTERN_URL_MD_LICENSE]: https://github.com/DJBlackEagle/code-style-nodejs/blob/main/LICENSE.md
[REF_INTERN_URL_MD_README]: https://github.com/DJBlackEagle/code-style-nodejs/blob/main/README.md
[REF_INTERN_URL_MD_SECURITY]: https://github.com/DJBlackEagle/code-style-nodejs/blob/main/SECURITY.md
[REF_INTERN_URL_NPMJS_PACKAGE]: https://www.npmjs.com/package/@djblackeagle/code-style-nodejs
[REF_INTERN_URL_PULLREQUEST]: https://github.com/DJBlackEagle/code-style-nodejs/pulls
[REF_INTERN_URL_VULNERABILITY]: https://github.com/DJBlackEagle/code-style-nodejs/security
[REF_INTERN_URL_VULNERABILITY_NEW]: https://github.com/DJBlackEagle/code-style-nodejs/security/advisories/new
[REF_INTERN_URL_WORKFLOW_CQAT]: https://github.com/DJBlackEagle/code-style-nodejs/actions/workflows/code-quality-and-tests.yml
[REF_INTERN_URL_WORKFLOW_CODEQL]: https://github.com/DJBlackEagle/code-style-nodejs/actions/workflows/codeql.yml
