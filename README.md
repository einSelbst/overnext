# Overnext - Overly Opinionated Next.js Boilerplate

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/einselbst/overnext/Continuous%20integration?style=flat-square)
[![Netlify Status](https://api.netlify.com/api/v1/badges/df1fbbbc-8ce1-48ab-8ad4-5ce0f308aa13/deploy-status)](https://app.netlify.com/sites/overnext/deploys)
[![GitHub Super-Linter](https://github.com/einselbst/overnext/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)

<details>
  <summary>
    Tooling
  </summary>

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square 'Standard.js')](https://standardjs.com)
[![Prettier](https://img.shields.io/badge/code_style-Prettier-ff69b4.svg?logo=Prettier&logoColor=white&style=flat-square 'Prettier')](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square 'Commitizen')](http://commitizen.github.io/cz-cli/)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=dependabot&style=flat-square 'Renovate')](https://renovateapp.com/)

</details>

<details>
  <summary>
    Versions
  </summary>

![next version](https://img.shields.io/badge/next-10.0.9-brightgreen)
![react version](https://img.shields.io/badge/react-17.0.2-brightgreen)
![typescript version](https://img.shields.io/badge/typescript-4.2.3-brightgreen)
![cypress version](https://img.shields.io/badge/cypress-6.8.0-brightgreen)
![jest version](https://img.shields.io/badge/jest-26.6.3-brightgreen)
![eslint version](https://img.shields.io/badge/eslint-7.23.0-brightgreen)
![tailwindcss version](https://img.shields.io/badge/tailwindcss-2.0.4-brightgreen)

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

</details>

## Approach

- DX _first_
  - the foundation
- Integrations _second_
  - db/cms
  - 3rd party services
- UI _third_
  - all screens: from watch-face to wide screen, not just mobile/desktop
- UX _last_
  - features & content

## Guiding Principles

- automate it(tm)
- catch bugs early(tm)
- do it cheap(tm)

## DX

- [`pnpm`](https://pnpm.js.org/en/) package manager
- automation, [inspirations](https://github.com/sdras/awesome-actions)
- conformity, [inspirations](https://github.com/dustinspecker/awesome-eslint)
- recommended repo files via [cgx](https://github.com/jeroenouw/cgx)

### Commit Style

- [Conventional Commits convention](https://www.conventionalcommits.org/)

  - [Commitizen](https://github.com/commitizen/cz-cli) helper
    <details>
      <summary>Show commit types</summary>

    - `feat`: A new feature
    - `fix`: A bug fix
    - `docs`: Documentation only changes
    - `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    - `refactor`: A code change that neither fixes a bug nor adds a feature
    - `perf`: A code change that improves performance
    - `test`: Adding missing tests or correcting existing tests
    - `build`: Changes that affect the build system or external dependencies (example scopes: webpack, typescript, pnpm)
    - `ci`: Changes to our CI configuration files and scripts (example scopes: Github Actions, BrowserStack, SauceLabs)
    - `chore`: Other changes that don't modify src or test files
    - `revert`: Reverts a previous commit
    </details>

### Scripts

To print a description of the scripts run `pnpm run info`

```yaml
dev: Start next app in dev mode
debug: Start node debugger
build: Build the app
start: Start server to serve the local app build
serve: Build app and start server
servex: Build & run app on public URL
cz: Make new commit
release: Prepare a new release
docs: Generate typedoc docs
info: Display info about the scripts
find:unused: Find unused files
format: Format source code and fix issues
lint: Lint source code and fix issues
lint:html: Run html-validate on generated static output files
test: Run unit and integration tests once
test:jest: Run jest tests and update screenshots
test:cy: Open cypress test runner (needs a running app server)
e2e:watch: Start dev server, open cypress and watch
e2e: Build & serve app, then run cypress once
validate: Validate source code and output files
validate:src: Format, lint, type-check & unit test the app
validate:out: Build app, run integration tests & validate generated html
```

## Code Style

- React [Strict Mode](https://reactjs.org/docs/strict-mode.html) enabled in [development](https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode)
- [Typescript](https://www.typescriptlang.org/) (for compile time type checking) with [`tslib`](https://www.npmjs.com/package/tslib)
- [`prop-types`](https://www.npmjs.com/package/prop-types) (for run-time type checking), more [info](https://stackoverflow.com/a/54690878/531439)
- [Standard](https://github.com/standard/standard)
- [EditorConfig](https://editorconfig.org/)
- [`typedoc`](https://github.com/TypeStrong/typedoc)

### Linter / A11y

- [Prettier-Standard](https://github.com/sheerun/prettier-standard)

  - [`prettierx`](https://github.com/brodybits/prettierx/)

- [ESLint](https://eslint.org/)

  - [`eslint-plugin-next`](https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next)
  - [`typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint)
  - [`eslint-plugin-cypress`](https://github.com/cypress-io/eslint-plugin-cypress)
  - [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)
  - [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)
  - [`eslint-plugin-jest-dom`](https://github.com/testing-library/eslint-plugin-jest-dom)
  - [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
  - <details>
      <summary>
        <a href="https://github.com/xjamundx/eslint-plugin-promise">`eslint-plugin-promise`</a>
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

  - [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)
  - [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)

- [`husky`](https://github.com/typicode/husky) for hooks

  - pinned at v4, v5 is [open-source/sponsors only](https://dev.to/typicode/what-s-new-in-husky-5-32g5)
  - [`lint-staged`](https://github.com/okonet/lint-staged)

- [`axe-core/react`](https://github.com/dequelabs/axe-core-npm)

## Testing

- [Jest](https://jestjs.io/)
  - [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)
- [Cypress](https://www.cypress.io/)
  - [Code Coverage](https://docs.cypress.io/guides/tooling/code-coverage.html)
  - [Dashboard](https://dashboard.cypress.io/)
  - [Github Integration](https://docs.cypress.io/guides/dashboard/github-integration.html#Install-the-Cypress-GitHub-app)
  - [cypress-watch-and-reload](https://github.com/bahmutov/cypress-watch-and-reload)
  - ToDo: if I want to run [headless cypress in watch mode](https://github.com/cypress-io/cypress/issues/3665#issuecomment-665866436)

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
- [`next-unused`](https://github.com/pacocoursey/next-unused)

### Styling

...all still unclear atm...

- [Tailwind CSS](https://tailwindcss.com/) - really unsure about it, esp. after reading [this](https://dev.to/jaredcwhite/why-tailwind-isn-t-for-me-5c90), also looking at:
  - [`shoelace`](https://shoelace.style/)
  - [`em dash`](https://github.com/jfbrennan/m-)
- ToDo: [`autoprefixer`](https://github.com/postcss/autoprefixer)

## CI

### Github Actions

- `basic`: runs linter, tests and build for different node versions
- `auto-create-pr`: creates Pull Requests for new branches
- `compressed-size`: checks the size of the bundled files and adds a comment in the PR
- [`eslint-plus-action`](https://github.com/bradennapier/eslint-plus-action), runs eslint and prints a summary in the PR
- Lighthouse on Vercel: Runs a Lighthouse Audit on the Vercel Preview URL
- Labeler: adds labels to PR's based on the changed files
- Badges: update badges in README
- [Super-Linter](https://github.com/github/super-linter)
- [`detect-secrets-action`](https://github.com/RobertFischer/detect-secrets-action), uses Yelp's [detect-secrets](https://github.com/Yelp/detect-secrets)

### Audits & Service Dashboards

- [Lighthouse](https://github.com/GoogleChrome/lighthouse/) on vercel
- [Quickmetrics Dashboard](https://app.quickmetrics.io/dashboards)
  - to track [Web Vitals](https://web.dev/vitals/)
  - [how-to](https://www.freecodecamp.org/news/how-to-measure-next-js-web-vitals-using-quickmetrics/)
- [Sonarcloud Dashboard](https://sonarcloud.io/dashboard?id=einSelbst_feehikel)
- [LGTM Dashboard](https://lgtm.com/projects/g/einSelbst/overnext/?mode=list)
- [Cypress Dashboard](https://dashboard.cypress.io/projects/esdwok/runs)
- [Fossa Dashboard](https://app.fossa.com/projects)
- [Renovate Dashboard](https://app.renovatebot.com/dashboard#github/einSelbst/overnext)

## Deployment

- [Documentation](https://nextjs.org/docs/deployment)
- [Vercel](https://vercel.com/import?filter=next.js)
  - override "Install Command": `rm -rf node_modules && npx pnpm i` (if pnpm should be used)
  - override "Build Command": `next build && npx pnpm run postbuild` (optional)
- [Netlify](https://www.netlify.com/blog/2020/11/30/how-to-deploy-next.js-sites-to-netlify/)
  - [`netlify.toml`](https://github.com/netlify/netlify-plugin-nextjs)
  - [assets](https://docs.netlify.com/configure-builds/file-based-configuration/#post-processing)
  - "Redirects and rewrites using next.config.js aren’t currently supported for Next.js sites on Netlify."
  - netlify plugins
    - [cypress](https://github.com/cypress-io/netlify-plugin-cypress)

## ToDo

- [ ] cypress a11y plugin
- [ ] [wdyr](https://github.com/welldone-software/why-did-you-render/issues/113) vs preact [1](https://github.com/preactjs/preact/issues/2760)
- [ ] automate typedoc generation
- [ ] maybe [apiDoc](https://apidocjs.com/)
- [ ] use ISR - Incremental Static Regeneration ? [opinion](https://www.netlify.com/blog/2021/03/08/incremental-static-regeneration-its-benefits-and-its-flaws/)

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

## Credits

...where credits due, thanks to [@bahmutov](https://github.com/bahmutov), [@elliottsj](https://github.com/elliottsj), [@ferlopezm94](https://github.com/ferlopezm94),[@iamvishnusankar](https://github.com/iamvishnusankar), [@pacocoursey](https://github.com/pacocoursey), [@thomaseizinger](https://github.com/thomaseizinger) and all the others whom I copied code from!
