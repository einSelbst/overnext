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

# Audits

- Lighthouse

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

# Deployment

- [Documentation](https://nextjs.org/docs/deployment)
- [Vercel](https://vercel.com/import?filter=next.js)
- ToDo: Netlify
