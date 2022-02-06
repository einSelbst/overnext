# Contributing

## optional

- macos: homebrew, to install all the other stuff
- volta `curl https://get.volta.sh | bash`, for js toolchain management

## prerequisites

### node.js

- if you have volta installed _Node.js_ should be installed automatically when you open the project
- if you have `nvm` installed use `nvm i`
- I need to test this but I think `pnpm` will install _node.js_ automatically because I have set `use-node-version` in `.npmrc`

### npm

- if you have volta installed _npm_ should be installed automatically when you open the project

### pnpm

- `curl -f https://get.pnpm.io/v6.js | node - add --global pnpm`
- `npm i -g pnpm`
- optional: `pnpm install-completion`
- optional: `pnpm config set script-shell zsh`

## fork this project

- `git clone <your-forked-repo>`
- `git checkout -b my-fix`

## setup

- `pnpm i` # to install deps
- `pnpm validate` # make sure everything works

## start project locally in dev mode

- `pnpm dev` or `pnpm e2e:watch` (to have tests running)

## fix some code

- ... write some code...
- `pnpm validate` # make sure everything still works
- `pnpm cz` # commit new code
- `git push origin my-fix`

## Lastly

- open a pull request on GitHub.
