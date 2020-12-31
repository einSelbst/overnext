# NextJS Opinionated Typescript Boilerplate

![next version](https://img.shields.io/badge/next-latest-brightgreen) ![react version](https://img.shields.io/badge/react-17.0.1-brightgreen) ![typescript version](https://img.shields.io/badge/typescript-4.1.3-brightgreen) ![cypress version](https://img.shields.io/badge/cypress-6.2.0-brightgreen) ![jest version](https://img.shields.io/badge/jest-26.6.3-brightgreen) ![eslint version](https://img.shields.io/badge/eslint-7.16.0-brightgreen) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=bugs)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=code_smells)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel) [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=ncloc)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=alert_status)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=security_rating)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel) [![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=sqale_index)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel)

# DX

- automation, inspirations https://github.com/sdras/awesome-actions
- conformity, inspirations https://github.com/dustinspecker/awesome-eslint

## Commit Style

- [Conventional Commits convention](https://www.conventionalcommits.org/)
  - [Commitizen](https://github.com/commitizen/cz-cli)
    - feat: A new feature
    - fix: A bug fix
    - docs: Documentation only changes
    - style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    - refactor: A code change that neither fixes a bug nor adds a feature
    - perf: A code change that improves performance
    - test: Adding missing tests or correcting existing tests
    - build: Changes that affect the build system or external dependencies (example scopes: webpack, typescript, yarn)
    - ci: Changes to our CI configuration files and scripts (example scopes: Github Actions, BrowserStack, SauceLabs)
    - chore: Other changes that don't modify src or test files
    - revert: Reverts a previous commit

## Project Automation / Labeling

### Issues

- ToDo: https://github.com/coblox/zenhub-link-pr-to-issue
- ToDo: https://github.com/damccorm/tag-ur-it
- ToDo: https://github.com/Renato66/auto-label
- ToDo: https://github.com/Naturalclar/issue-action

### Projects

- ToDo: https://github.com/technote-space/auto-card-labeler
- ToDo: https://github.com/alex-page/github-project-automation-plus
- ToDo: https://github.com/marketplace/actions/move-labeled-or-milestoned-issue-to-a-specific-project-column
- ToDo: https://github.com/philschatz/project-bot
- ToDo: https://github.com/takanabe/github-actions-automate-projects

### Milestones

- ToDo: https://github.com/WyriHaximus/github-action-create-milestone

### Branches

- ToDo: https://github.com/robvanderleek/create-issue-branch

### Pull Requests

- ToDo: https://github.com/Decathlon/pull-request-labeler-action
- ToDo: https://github.com/jpmcb/prow-github-actions

# Code Style

- [Typescript](https://www.typescriptlang.org/)
- [Standard](https://github.com/standard/standard)
- [EditorConfig](https://editorconfig.org/)
- maybe jsdoc?

## Linter

- [Prettier-Standard](https://github.com/sheerun/prettier-standard)
  - [prettierx](https://github.com/brodybits/prettierx/)
- [ESLint](https://eslint.org/)
  - [eslint-plugin-next](https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next)
  - [eslint-plugin-jsx-a11y]()
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
  - [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
  - [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)
  - TODO: add more https://github.com/dustinspecker/awesome-eslint
- [`husky`](https://github.com/typicode/husky) for hooks
  - [lint-staged](https://github.com/okonet/lint-staged)
- [axe-core/react](https://github.com/dequelabs/axe-core-npm)

# Testing

- [Jest](https://jestjs.io/)
  - [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)
- [Cypress](https://www.cypress.io/)
  - [Code Coverage](https://docs.cypress.io/guides/tooling/code-coverage.html)

# Audits

- Lighthouse
- [sonarcloud](https://sonarcloud.io/)

# Next.js Configuration

## Plugins

- [compose plugins](https://github.com/cyrilwanner/next-compose-plugins)
- webpack [bundle analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)

## Scripts

```bash
yarn dev      - start dev server
yarn build    - build project
yarn build:analyze - build project and visualize chunks
yarn cz       - make new commit
yarn release  - make new release
yarn type-check - run typescript compiler
yarn lint     - run eslint
yarn format   - run prettier
yarn test     - run jest
yarn test:cy  - open cypress test runner
yarn validate - run tsc, prettier, eslint and the tests
```

# CI

## Github Actions

- basic: runs linter, tests and build for different node versions
- auto-create-pr: creates Pull Requests for new branches
- compressed-size: checks the size of the bundled files and adds a comment in the PR
- ESLint: another action that runs eslint and prints a summary in the PR
- Lighthouse on Vercel: Runs a Lighthouse Audit on the Vercel Preview URL
- Labeler: adds labels to PR's based on the changed files
- Badges: update badges in README
- [sonarcloud](https://github.com/SonarSource/sonarcloud-github-action): code analysis

# Deployment

- [Documentation](https://nextjs.org/docs/deployment)
- [Vercel](https://vercel.com/import?filter=next.js)
- ToDo: Netlify

# ToDo

- [] improve tsconfig
- [] fix running of checks on pr create
- [] fix sonarcloud action
- [] cypress watch mode
- [] cypress a11y plugin

# Credits

...where credits due, thanks to @bahmutov, @ferlopezm94, @thomaseizinger and all the others where I copied code from!
