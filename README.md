[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# NextJS Typescript Boilerplate

Bootstrap a developer-friendly NextJS app configured with:

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-typescript-eslint-jest with-typescript-eslint-jest-app
# or
yarn create next-app --example with-typescript-eslint-jest with-typescript-eslint-jest-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Development

- [Typescript](https://www.typescriptlang.org/)

- Formatting and Linting with [Prettier-Standard](), which uses [ESLint](https://eslint.org/) under the hood for linting and configures [prettierx](https://github.com/brodybits/prettierx/) to use [Standard](https://github.com/standard/standard) style.
- Linting, typechecking, formatting and commit message checks on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)
- Commits follow the [Conventional Commits convention](https://www.conventionalcommits.org/) and are supported via [Commitizen](https://github.com/commitizen/cz-cli). To make a new commit type `yarn cz` and follow the prompts.

I haven't made my mind up regarding code documentation and the usage of jsdoc.

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

# CI

## Github Actions

- basic: runs linter, tests and build for different node versions
- auto-create-pr: creates Pull Requests for new branches
- compressed-size: checks the size of the bundled files and adds a comment in the PR
