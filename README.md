[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# NextJS Opinionated Typescript Boilerplate

# DX

## Commit Style

- [Conventional Commits convention](https://www.conventionalcommits.org/)
  - [Commitizen](https://github.com/commitizen/cz-cli)

# Code Style

- [Typescript](https://www.typescriptlang.org/)
- [Standard](https://github.com/standard/standard)
- [EditorConfig](https://editorconfig.org/)
- maybe jsdoc?

## Linter

- [Prettier-Standard](https://github.com/sheerun/prettier-standard)
  - [prettierx](https://github.com/brodybits/prettierx/)
- [ESLint](https://eslint.org/)
  - ToDo: https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next
- [`husky`](https://github.com/typicode/husky) for hooks
  - [lint-staged](https://github.com/okonet/lint-staged)

# Testing

- [Jest](https://jestjs.io/)
  - [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## next plugins

- [compose plugins](https://github.com/cyrilwanner/next-compose-plugins)
- [bundle analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)

## Scripts

```bash
yarn dev      - start dev server
yarn cz       - make new commit
yarn release  - make new release
yarn type-check - run typescript compiler
yarn lint     - run eslint
yarn format   - run prettier
yarn test     - run jest
yarn validate - run tsc, prettier, eslint and the tests
```

## Github Actions

- basic: runs linter, tests and build for different node versions
- auto-create-pr: creates Pull Requests for new branches
- compressed-size: checks the size of the bundled files and adds a comment in the PR

# Deployment

- ToDo

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
