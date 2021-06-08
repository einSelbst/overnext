# Overnext - Overly Opinionated Next.js Boilerplate

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/einselbst/overnext/Continuous%20integration)
[![Continuous integration](https://github.com/einSelbst/overnext/actions/workflows/basics.yml/badge.svg)](https://github.com/einSelbst/overnext/actions/workflows/basics.yml)
[![GitHub Super-Linter](https://github.com/einselbst/overnext/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B13111%2Fgit%40github.com%3AeinSelbst%2Fovernext.git.svg?type=shield)](https://app.fossa.com/projects/custom%2B13111%2Fgit%40github.com%3AeinSelbst%2Fovernext.git?ref=badge_shield)

![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=overnext)
[![Netlify Status](https://api.netlify.com/api/v1/badges/df1fbbbc-8ce1-48ab-8ad4-5ce0f308aa13/deploy-status)](https://app.netlify.com/sites/overnext/deploys)

<details>
  <summary>
    Tooling
  </summary>

[![Prettier](https://img.shields.io/badge/code_style-Prettier-ff69b4.svg?logo=Prettier&logoColor=white&style=flat-square 'Prettier')](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square 'Commitizen')](http://commitizen.github.io/cz-cli/)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=dependabot&style=flat-square 'Renovate')](https://renovateapp.com/)

</details>

<details>
  <summary>
    Versions
  </summary>

![next version](https://img.shields.io/badge/next-10.2.3-brightgreen)
![react version](https://img.shields.io/badge/react-17.0.2-brightgreen)
![webpack version](https://img.shields.io/badge/webpack-5.38.1-brightgreen)
![@babel/core version](https://img.shields.io/badge/@babel/core-7.14.5-brightgreen)
![typescript version](https://img.shields.io/badge/typescript-4.3.2-brightgreen)
![cypress version](https://img.shields.io/badge/cypress-7.5.0-brightgreen)
![jest version](https://img.shields.io/badge/jest-27.0.4-brightgreen)
![eslint version](https://img.shields.io/badge/eslint-7.28.0-brightgreen)
![tailwindcss version](https://img.shields.io/badge/tailwindcss-2.1.4-brightgreen)

</details>

<details>
  <summary>
    Metrics
  </summary>

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=bugs)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=code_smells)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=ncloc)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=alert_status)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=security_rating)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=sqale_index)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=einSelbst_feehikel&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=einSelbst_feehikel)

[![Total alerts](https://img.shields.io/lgtm/alerts/g/einSelbst/overnext.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/einSelbst/overnext/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/einSelbst/overnext.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/einSelbst/overnext/context:javascript)

[![Code Grade](https://www.code-inspector.com/project/21436/score/svg?service=github)](https://frontend.code-inspector.com/project/21436/dashboard)

</details>

## Approach

- DX _first_
  - the foundation
- Integrations _second_
  - db/cms
  - 3rd party services
- UI _third_
  - all screens: from watch-face to wide screen, not just mobile/desktop
  - the [new responsive](https://www.youtube.com/watch?v=jUQ2-C5ZNRc)
- UX _last_
  - features & content

This is more about priorities than about a temporal order.

## Guiding Principles

- automate it &trade;
- optimize it, aka do it cheap
- go vanilla until good reasons to not
- test'n lint it, aka catch bugs early

## DX

- [`pnpm`](https://pnpm.js.org/en/) package manager
- automation, [inspirations](https://github.com/sdras/awesome-actions)
- conformity, [inspirations](https://github.com/dustinspecker/awesome-eslint)
- [`standard-version`](https://github.com/conventional-changelog/standard-version) for release versioning and changlog creation
- [`browserlist`](https://github.com/browserslist/browserslist) for browser compatibility

  - [`autoprefixer`](https://github.com/postcss/autoprefixer)
  - [`eslint-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat)

- <details>
    <summary>
      <a href="https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md">enable expiring ToDo's (`eslint-plugin-unicorn`)</a>
    </summary>

  - Expire after a specific date: `[YYYY-MM-DD]` to define a UTC due date in the ISO 8601 format
  - Expire when your package (`package.json`) reaches a specific version: `[>1]` or `[>=2]`. No whitespace.
  - Expire when a package.json engines property reaches a specific version: `[engine:node@>8]` or `[engine:node@>=8]`, only `node` engine is supported. No whitespace.
  - Expire when you install/uninstall a specific package: use `[+package]` or `[-package]` to expire. No whitespace.
  - Expire when a package reaches a specific version: use `[package@>1]` or `[package@>=2]`. No whitespace.
  </details>

### Tips

- use [volta](https://github.com/volta-cli/volta) for toolchain management (hoping for [pnpm support](https://github.com/volta-cli/volta/issues/737)), see: [install guide](./CONTRIBUTING.md)
- use [pnpm completion](https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4) via `pnpm install-completion`
- create recommended repo files via [cgx](https://github.com/jeroenouw/cgx)
- create `README.md` integrate via [README.so template](https://readme.so/editor)

### Commit Style

- [Conventional Commits convention](https://www.conventionalcommits.org/)

  - [Commitizen](https://github.com/commitizen/cz-cli) CLI helper
    <details>
      <summary>Show commit types</summary>

    - `a11y`: Accessibility
    - `build`: Changes that affect the build system (example scopes: webpack, typescript, babel, pnpm)
    - `chore`: Other changes that don't modify src or test files
    - `ci`: Changes to the CI configuration files and scripts (example scopes: Github Actions, BrowserStack)
    - `cx`: Customer Experience
    - `deps`: Managing dependencies
    - `docs`: Documentation only changes
    - `dx`: All things about improving developer experience
    - `feat`: A new feature
    - `fix`: A bug fix
    - `i18n`: Internationalization
    - `perf`: A code change that improves performance
    - `refactor`: A code change that neither fixes a bug nor adds a feature
    - `revert`: Reverts a previous commit
    - `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    - `test`: Adding missing tests or correcting existing tests
    - `ui`: CSS and layout
    - `ux`: User Experience
    - `wip`: work in progress
    </details>

  - [`semantic-pull-requests`](https://github.com/zeke/semantic-pull-requests) Github app

### Scripts

To print a description of the scripts run `pnpm run info`

```yaml
dev: Start next app in dev mode
debug: Start node debugger
build: Build the app
start: Start server to serve the local app build
serve: Build app and start server
servex: Build & run app on public URL
test: Run unit and integration tests once
test:ci: Run jest tests on CI, will re-add cypress later again
test:jest: Run jest tests and update screenshots
test:cy: Open cypress test runner (needs a running app server)
e2e:watch: Start dev server, open cypress and watch
e2e: Build & serve app, then run cypress once
format: Format source code and fix issues
lint: Lint source code and fix issues
lint:html: Run html-validate on generated static output files
validate: Validate source code and output files
validate:src: Format, lint, type-check & unit test the app
validate:out: Build app, run integration tests & validate generated html
build:analyze: Build app and output bundle analyzer diagrams
build:size: build app and measure loading performance
find:unused: Find unused files
build:ssr: used on CI for 'compressed size' action
cz: Make new commit
release: Prepare a new release
docs: Generate typedoc docs
info: Display info about the scripts
```

## Code Style

- React [Strict Mode](https://reactjs.org/docs/strict-mode.html) enabled in [development](https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode)
  - ~~[`prop-types`](https://www.npmjs.com/package/prop-types) (for run-time type checking)~~ -> discarded, see [reasons](#prop-types)
- [Typescript](https://www.typescriptlang.org/) (for compile time type checking)
  - with [`tslib`](https://www.npmjs.com/package/tslib) for imports optimization
  - [`typesync`](https://github.com/jeffijoe/typesync) for find dependency typings
  - [TSDoc](https://tsdoc.org/) docstrings to generate [`typedoc`](https://github.com/TypeStrong/typedoc) documentation
- [Prettier](https://github.com/prettier/prettier)
- [EditorConfig](https://editorconfig.org/)

### Linter / A11y

- [ESLint](https://eslint.org/)

  - most core rules are enabled
  - [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier), turns off all rules that are unnecessary or conflict with Prettier
  - [`typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint)
  - <details>
      <summary>
        <a href="https://github.com/sindresorhus/eslint-plugin-unicorn"><code>eslint-plugin-unicorn</code></a>
      </summary>

    - "unicorn/better-regex": "error",
    - "unicorn/catch-error-name": "error",
    - "unicorn/consistent-destructuring": "error",
    - "unicorn/consistent-function-scoping": "error",
    - "unicorn/custom-error-definition": "off",
    - "unicorn/empty-brace-spaces": "error",
    - "unicorn/error-message": "error",
    - "unicorn/escape-case": "error",
    - "unicorn/expiring-todo-comments": "error",
    - "unicorn/explicit-length-check": "error",
    - "unicorn/filename-case": "error",
    - "unicorn/import-index": "off",
    - "unicorn/import-style": "error",
    - "unicorn/new-for-builtins": "error",
    - "unicorn/no-abusive-eslint-disable": "error",
    - "unicorn/no-array-callback-reference": "error",
    - "unicorn/no-array-for-each": "error",
    - "unicorn/no-array-push-push": "error",
    - "unicorn/no-array-reduce": "error",
    - "unicorn/no-console-spaces": "error",
    - "unicorn/no-for-loop": "error",
    - "unicorn/no-hex-escape": "error",
    - "unicorn/no-instanceof-array": "error",
    - "unicorn/no-keyword-prefix": "off",
    - "unicorn/no-lonely-if": "error",
    - "no-nested-ternary": "off",
    - "unicorn/no-nested-ternary": "error",
    - "unicorn/no-new-array": "error",
    - "unicorn/no-new-buffer": "error",
    - "unicorn/no-null": "error",
    - "unicorn/no-object-as-default-parameter": "error",
    - "unicorn/no-process-exit": "error",
    - "unicorn/no-static-only-class": "error",
    - "unicorn/no-this-assignment": "error",
    - "unicorn/no-unreadable-array-destructuring": "error",
    - "unicorn/no-unsafe-regex": "off",
    - "unicorn/no-unused-properties": "off",
    - "unicorn/no-useless-undefined": "error",
    - "unicorn/no-zero-fractions": "error",
    - "unicorn/number-literal-case": "error",
    - "unicorn/numeric-separators-style": "error",
    - "unicorn/prefer-add-event-listener": "error",
    - "unicorn/prefer-array-find": "error",
    - "unicorn/prefer-array-flat": "error",
    - "unicorn/prefer-array-flat-map": "error",
    - "unicorn/prefer-array-index-of": "error",
    - "unicorn/prefer-array-some": "error",
    - "unicorn/prefer-date-now": "error",
    - "unicorn/prefer-default-parameters": "error",
    - "unicorn/prefer-dom-node-append": "error",
    - "unicorn/prefer-dom-node-dataset": "error",
    - "unicorn/prefer-dom-node-remove": "error",
    - "unicorn/prefer-dom-node-text-content": "error",
    - "unicorn/prefer-includes": "error",
    - "unicorn/prefer-keyboard-event-key": "error",
    - "unicorn/prefer-math-trunc": "error",
    - "unicorn/prefer-modern-dom-apis": "error",
    - "unicorn/prefer-module": "error",
    - "unicorn/prefer-negative-index": "error",
    - "unicorn/prefer-node-protocol": "error",
    - "unicorn/prefer-number-properties": "error",
    - "unicorn/prefer-optional-catch-binding": "error",
    - "unicorn/prefer-query-selector": "error",
    - "unicorn/prefer-reflect-apply": "error",
    - "unicorn/prefer-regexp-test": "error",
    - "unicorn/prefer-set-has": "error",
    - "unicorn/prefer-spread": "error",
    - "unicorn/prefer-string-replace-all": "off",
    - "unicorn/prefer-string-slice": "error",
    - "unicorn/prefer-string-starts-ends-with": "error",
    - "unicorn/prefer-string-trim-start-end": "error",
    - "unicorn/prefer-switch": "error",
    - "unicorn/prefer-ternary": "error",
    - "unicorn/prefer-type-error": "error",
    - "unicorn/prevent-abbreviations": "error",
    - "unicorn/string-content": "off",
    - "unicorn/throw-new-error": "error"
    </details>

  - [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react), [rules](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules)
  - [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)

  - <details>
      <summary>
        <a href="https://github.com/xjamundx/eslint-plugin-promise"><code>eslint-plugin-promise</code></a>
      </summary>

    - "promise/always-return": "error"
    - "promise/no-return-wrap": "error"
    - "promise/param-names": "error"
    - "promise/catch-or-return": "error"
    - "promise/no-native": "off"
    - "promise/no-nesting": "warn"
    - "promise/no-promise-in-callback": "warn"
    - "promise/no-callback-in-promise": "warn"
    - "promise/avoid-new": "warn"
    - "promise/no-new-statics": "error"
    - "promise/no-return-in-finally": "warn"
    - "promise/valid-params": "warn"
    </details>

  - [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y), [rules](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/master/docs/rules)
  - [`eslint-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat), works with browserslist
  - [`eslint-plugin-next`](https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next)
  - [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)

  - [`eslint-plugin-tsdoc`](https://github.com/microsoft/tsdoc/tree/master/eslint-plugin)

  - [`typescript-eslint-language-service`](https://github.com/Quramy/typescript-eslint-language-service), not exactly sure what this does...
  - [`eslint-plugin-cypress`](https://github.com/cypress-io/eslint-plugin-cypress)
  - [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)
  - [`eslint-plugin-jest-dom`](https://github.com/testing-library/eslint-plugin-jest-dom)

- [Prettier](https://prettier.io/) for code formatting
- [`husky`](https://github.com/typicode/husky) for hooks
- [`git-format-staged`](https://github.com/hallettj/git-format-staged), to format staged files (surprise), [reasons](https://www.olioapps.com/blog/automatic-code-formatting/)
- [`axe-core/react`](https://github.com/dequelabs/axe-core-npm)

## Tech Stack

- next.js
- WIP: sanity

## Next.js Configuration

### Features

- [`src` Directory](https://nextjs.org/docs/advanced-features/src-directory)
- [Custom `App`](https://nextjs.org/docs/advanced-features/custom-app)
- [Custom `Document`](https://nextjs.org/docs/advanced-features/custom-document)
- [Custom Error Pages](https://nextjs.org/docs/advanced-features/custom-error-page)
- [module path aliases](https://nextjs.org/docs/advanced-features/module-path-aliases)
- [Internationalized Routing](https://nextjs.org/docs/advanced-features/i18n-routing)
- [AMP Support](https://nextjs.org/docs/advanced-features/amp-support/introduction), but [not for long](https://www.lafoo.com/the-end-of-amp/)
- [Measuring performance](https://nextjs.org/docs/advanced-features/measuring-performance)

### Plugins & Helper

- [`compose plugins`](https://github.com/cyrilwanner/next-compose-plugins)
- webpack [`bundle analyzer`](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)
- [`next-pwa`](https://github.com/shadowwalker/next-pwa)
  - for [PWA](https://web.dev/progressive-web-apps/) support via [`workbox`](https://developers.google.com/web/tools/workbox)
  - see [documentation](https://www.npmjs.com/package/next-pwa?activeTab=readme#configuration)
- [`next-sitemap`](https://github.com/iamvishnusankar/next-sitemap)
- [`next-seo`](https://github.com/garmeeh/next-seo), for MetaTags, OpenGraph & JsonLD
- [`next-themes`](https://github.com/pacocoursey/next-themes), for dark-mode
- [persistend layout](https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/)
- [`next-unused`](https://github.com/pacocoursey/next-unused)
- integrate [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) with [browserslist](https://github.com/browserslist/browserslist) currently [not possible](https://github.com/vercel/next.js/discussions/12826), can only use [`targets`](https://babeljs.io/docs/en/babel-preset-env#targets) option to set targeted browser

### Styling

...all still unclear atm...

- Stage 1: site should be useable without any CSS
- Stage 2: site should look ok with only [classless CSS](https://github.com/dohliam/dropin-minimal-css)
- Stage 3: some kind of CSS framework, no css-in-js

- keep it [simple](https://1linelayouts.glitch.me/)
- make use of [modern-normalize](https://github.com/sindresorhus/modern-normalize) -> is part of [tailwind](https://tailwindcss.com/docs/adding-base-styles)
- [Tailwind CSS](https://tailwindcss.com/) - really unsure about it, esp. after reading [this](https://dev.to/jaredcwhite/why-tailwind-isn-t-for-me-5c90)
- first, find some nice [`minimal/classless CSS framework`](https://github.com/dohliam/dropin-minimal-css)
  - [`shoelace`](https://shoelace.style/)
  - [`em dash`](https://github.com/jfbrennan/m-)
- ToDo: [`autoprefixer`](https://github.com/postcss/autoprefixer), [issue](https://github.com/vercel/next.js/issues/23658) on next.js side
- ToDo: integrate [PostCSS Preset Env](https://github.com/csstools/postcss-preset-env) with [next.js PostCss Config](https://nextjs.org/docs/advanced-features/customizing-postcss-config)
- ToDo: integrate [lazysizes](https://github.com/aFarkas/lazysizes), with [native loading](https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/native-loading)

## Testing

- [Jest](https://jestjs.io/)
  - [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)
- [Cypress](https://www.cypress.io/)
  - [Code Coverage](https://docs.cypress.io/guides/tooling/code-coverage.html) via [istanbul](https://istanbul.js.org/) and [nyc](https://github.com/istanbuljs/nyc), bon voyage
  - [Dashboard](https://dashboard.cypress.io/)
  - [Github Integration](https://docs.cypress.io/guides/dashboard/github-integration.html#Install-the-Cypress-GitHub-app)
  - [cypress-watch-and-reload](https://github.com/bahmutov/cypress-watch-and-reload)
  - ToDo: if I want to run [headless cypress in watch mode](https://github.com/cypress-io/cypress/issues/3665#issuecomment-665866436)

## CI

### Github Actions

- [Skip Duplicate Actions](https://github.com/marketplace/actions/skip-duplicate-actions)
- [`create-pull-request`](https://github.com/thomaseizinger/create-pull-request), creates PR's for new branches
- [Labeler](https://github.com/actions/labeler): adds labels to PR's based on the changed files
- [`dependency-version-badge`](https://github.com/bahmutov/dependency-version-badge): update version badges in README
- `basic`: runs linters, tests and build
- [`compressed-size`](https://github.com/preactjs/compressed-size-action): checks the size of the bundled files and adds a comment in the PR
- [`size-limit`](https://github.com/andresz1/size-limit-action) for load time performance tracking
- [`eslint-plus-action`](https://github.com/bradennapier/eslint-plus-action), runs eslint and prints a summary in the PR
- [Super-Linter](https://github.com/github/super-linter)
- Lighthouse on Vercel: Runs a Lighthouse Audit on the Vercel Preview URL
- WIP: [`auto-push-css`](https://github.com/projectwallace/push-css-action), needs `PROJECT_WALLACE_TOKEN` set in Repo Env Secrets

#### WIP Security Audits

- [ShiftLeft Code Scanning](https://slscan.io/en/latest/integrations/code-scan/)
- [`CorrelatedLabs/detect-secrets-action`](https://github.com/CorrelatedLabs/detect-secrets-action)
- [`RobertFischer/detect-secrets-action`](https://github.com/RobertFischer/detect-secrets-action), uses Yelp's [detect-secrets](https://github.com/Yelp/detect-secrets)

### Audits & Service Dashboards

- [Lighthouse](https://github.com/GoogleChrome/lighthouse/) on vercel
- [Quickmetrics Dashboard](https://app.quickmetrics.io/dashboards)
  - to track [Web Vitals](https://web.dev/vitals/)
  - [how-to](https://www.freecodecamp.org/news/how-to-measure-next-js-web-vitals-using-quickmetrics/)
- [Sonarcloud Dashboard](https://sonarcloud.io/dashboard?id=einSelbst_feehikel)
  - needs `SONAR_TOKEN` env var in Github
- [LGTM Dashboard](https://lgtm.com/projects/g/einSelbst/overnext/?mode=list)
- [Code Inspector](https://frontend.code-inspector.com/project/21436/dashboard)
- [Cypress Dashboard](https://dashboard.cypress.io/projects/esdwok/runs)
- [Fossa Dashboard](https://app.fossa.com/projects)
  - needs `FOSSA_API_KEY` env var in Github
- [Renovate Dashboard](https://app.renovatebot.com/dashboard#github/einSelbst/overnext) for dependency management
- [Vercel Dashboard](https://vercel.com/einselbst/overnext)
- [Netlify Dashboard](https://app.netlify.com/sites/overnext/overview)
- [Dareboost](https://www.dareboost.com/en/dashboard), free version has 5 analyses per month
- [Project Wallace](https://www.projectwallace.com/~einselbst/overnext) for CSS monitoring

## Installation

see [CONTRIBUTING](./CONTRIBUTING.md)

## Deployment

- [Documentation](https://nextjs.org/docs/deployment)
- [Vercel](https://vercel.com/import?filter=next.js)
  - for pnpm:
    - override "Install Command":
      - `npx pnpm i -P` (skips dev dependencies) -> this has [issues](https://github.com/vercel/next.js/issues/16471)
      - `rm -rf node_modules && npx pnpm i -P`
      - `npx pnpm i -P --shamefully-hoist`
      - `npx pnpm i -P --store=node_modules/.pnpm-store --shamefully-hoist`
    - override "Build Command":
      - `pnpm run build` (vercel will use yarn otherwise)
  - [`vercelignore`](https://vercel.com/guides/prevent-uploading-sourcepaths-with-vercelignore) to only upload neccessary files
- [Netlify](https://www.netlify.com/blog/2020/11/30/how-to-deploy-next.js-sites-to-netlify/)
  - "Redirects and rewrites using next.config.js aren’t currently supported for Next.js sites on Netlify."
  - [`netlify.toml`](https://github.com/netlify/netlify-plugin-nextjs)
  - asset [post processing](https://docs.netlify.com/configure-builds/file-based-configuration/#post-processing)
  - [skip](https://docs.netlify.com/configure-builds/file-based-configuration/#ignore-builds) deployments without [relevant changes](https://answers.netlify.com/t/issues-with-build-ignore-command-not-ignoring-as-required/23428/13?u=einselbst)
  - netlify plugins
    - [netlify-plugin-cypress](https://github.com/cypress-io/netlify-plugin-cypress)
    - [netlify-plugin-html-validate](https://github.com/oliverroick/netlify-plugin-html-validate), uses [html-validate](https://html-validate.org/)
    - [netlify-plugin-checklinks](https://github.com/munter/netlify-plugin-checklinks), uses [hyperlink](https://github.com/Munter/hyperlink)
    - [netlify-plugin-a11y](https://github.com/netlify-labs/netlify-plugin-a11y), uses [pa11y](https://github.com/pa11y/pa11y)
- [AWS Amplify](https://docs.amplify.aws/guides/hosting/nextjs/q/platform/js)

## Demo

- [Vercel](https://overnext.vercel.app)
- [Netlify](https://overnext.netlify.app)

## Monitoring

- [Speedlify](https://overwatch-next.netlify.app/overnext/)

## Documentation

ToDo [Documentation](https://linktodocumentation)

## Learnings

### prop-types

Intially I wanted to use [prop-types](https://github.com/facebook/prop-types) because of the reasons given in those articles:

- [TypeScript and React: Prop Types](https://fettblog.eu/typescript-react/prop-types/) - Blogpost by Stefan Baumgartner
- [PropTypes in a TypeScript React Application](https://stackoverflow.com/a/54690878/531439) - Anwer on StackOverflow
- [Notes on TypeScript: Inferring React PropTypes](https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88) - Guide on `dev.to`

When I actually started using them I had some problems:

- to be able to extend the function object I had to use `React.FC` because otherwise TypeScript prevents this, but:
- I don't want to use `React.FC` for [these reasons](https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/),
  - especially I dont want to close the door for [going Preact](https://fettblog.eu/go-preact/)
- also `prop-types` itself seem to have an [unclear](https://github.com/facebook/prop-types/issues/337#issuecomment-791013311) [future](https://github.com/facebook/prop-types/issues/249)

I might still use prop-types in case I encounter a situation where I get much benefit from the runtime type checking, but then I would only use it for this specific case.

### Linter

Initially I used [Prettier-Standard](https://github.com/sheerun/prettier-standard)
which included

- [Stnadard](https://standardjs.com/)
- [PrettierX](https://github.com/brodybits/prettierx)
  because I thought it's a great idea to not waste time for config etc. But the tool hasn't received any maintenance for almost a year and I already had to add workarounds.
  Being interested in linting in general I also had issues with clean extensibility of my eslint config and it wasn't completely clear to me what really runs as part of `prettier-standard`.

I also considerd other bundles like
[XO](https://github.com/xojs/xo) which would have been my first choice because it includes [unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
[Canonical](https://github.com/gajus/eslint-config-canonical)

but they all have stuff included I don't need and other stuff is missing which I want so I decided to go vanilla `eslint` and do my config by hand to have max control over everything and less dependencies.

### Hosting

There are a few differences between Vercel & Netlify.

- `sass` module can be a `devDependency` on Netlify, but must be a (production) `dependency` on Vercel
- i18n routing: on Vercel the user is redirected to the browser detected language by default, but not on Netlify

### Setup

- on MacOS BigSur, with iterm2 I have a strange problem that my terminal windows just vanish, the syslogs just say

```sh
login[55941]: DEAD_PROCESS: 55941 ttys000
```

I noticed that running scripts with multiple sub-invocations (eg. `pnpm validate`) not only start `zsh` processes, which I use and which is also the default in BigSur,
but also a `bash` process. You can use the following command to check what pnpm will use as a script shell (in my case it was 'null', which seem to mean `bash`)

```sh
% pnpm config get script-shell
```

So I set it to `zsh` by running `% pnpm config set script-shell zsh` but it doesn't solve the issue, keeping notes here anyway...

## API Reference

ToDo link to API Docs

## Roadmap

- Additional browser support

- Add more integrations

## Optimizations

## Credits

...where credits due, thanks to [@bahmutov](https://github.com/bahmutov), [@elliottsj](https://github.com/elliottsj), [Stefan Baumgartner](https://twitter.com/ddprrt), [@ferlopezm94](https://github.com/ferlopezm94),[@iamvishnusankar](https://github.com/iamvishnusankar), [@pacocoursey](https://github.com/pacocoursey), [@thomaseizinger](https://github.com/thomaseizinger), [@sindresorhus](https://github.com/sindresorhus) and all the others whom I copied code from!

## Related

- [Next Right Now](https://unlyed.github.io/next-right-now/)
  - [`next-right-now`](https://github.com/UnlyEd/next-right-now), flexible production-grade boilerplate with Next.js
- [Next.js with Moxy](https://next-with.moxy.tech/), a better version of this project
  - [`next-with-moxy`](https://github.com/moxystudio/next-with-moxy)

## ToDo

I should use Github Issues for this but hey.

- [ ] I have node version defined in several places, maybe I can consolidate this
  - `.nvmrc`
  - `.npmrc` because pnpm
  - ~package.json > engine~, removed because annoying warning in vercel
  - package.json > volta, for volta
- [ ] add [SRI](https://github.com/vercel/next.js/discussions/23951)
- [ ] cypress a11y plugin
- [ ] [cypress-html-validate](https://html-validate.org/usage/cypress.html) plugin
- [ ] make use of [Project Wallace](https://www.projectwallace.com/), still wip
- [ ] [wdyr](https://github.com/welldone-software/why-did-you-render/issues/113) vs preact [1](https://github.com/preactjs/preact/issues/2760)
- [ ] use ISR - Incremental Static Regeneration ? [opinion](https://www.netlify.com/blog/2021/03/08/incremental-static-regeneration-its-benefits-and-its-flaws/)
- [ ] wip: enable [unused ESLint rules](https://github.com/alexilyaev/stylelint-find-rules)

### Documentation ToDo's

- [ ] automate typedoc generation
- [ ] maybe [apiDoc](https://apidocjs.com/)?, [ts-docs-gen](https://github.com/SimplrJS/ts-docs-gen)?, [DocFX](https://dotnet.github.io/docfx/)?

<details>
  <summary>Project Automation / Labeling Ideas</summary>

### Issues

- ToDo: [zenhub link pr to issue](https://github.com/coblox/zenhub-link-pr-to-issue)
- ToDo: [tag ur it](https://github.com/damccorm/tag-ur-it)
- ToDo: [auto label](https://github.com/Renato66/auto-label)
- ToDo: [issue action](https://github.com/Naturalclar/issue-action)
- ToDo: [actions comment run](https://github.com/nwtgck/actions-comment-run)

### Projects

- ToDo: [auto card labeler](https://github.com/technote-space/auto-card-labeler)
- ToDo: [project automation plus](https://github.com/alex-page/github-project-automation-plus)
- ToDo: [move issue to project column](https://github.com/marketplace/actions/move-labeled-or-milestoned-issue-to-a-specific-project-column)
- ToDo: [project bot](https://github.com/philschatz/project-bot)
- ToDo: [automate projects](https://github.com/takanabe/github-actions-automate-projects)

### Milestones

- ToDo: [create milestone](https://github.com/WyriHaximus/github-action-create-milestone)

### Branches

- ToDo: [create-issue-branch](https://github.com/robvanderleek/create-issue-branch)

### Pull Requests

- ToDo: [PR Labeler](https://github.com/Decathlon/pull-request-labeler-action)
- ToDo: [prow github action](https://github.com/jpmcb/prow-github-actions)
- ToDo: [task completed checker action](https://github.com/kentaro-m/task-completed-checker-action)
</details>

## Licenses

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B13111%2Fgit%40github.com%3AeinSelbst%2Fovernext.git.svg?type=large)](https://app.fossa.com/projects/custom%2B13111%2Fgit%40github.com%3AeinSelbst%2Fovernext.git?ref=badge_large)
