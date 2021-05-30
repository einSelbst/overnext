# Contributing

## prerequisites

- \*Optional: install [volta](https://volta.sh) on your system. It provides something like a sandbox global env for the project.

`curl https://get.volta.sh | bash`

If you don't like volta you could just use `nvm i`

## fork this project

- `git clone <your-forked-repo>`
- `git checkout -b my-fix`

## setup

- `volta install` to install toolchain (`node`, `npm`, unfortunately not `pnpm` yet)
- `npm i -g pnpm` to install `pnpm`
- `pnpm i` # to install deps
- `pnpm validate` # make sure everything works

## start project locally in dev mode

- `pnpm dev` or `pnpm e2e:watch` (to have tests running)

## fix some code

- `pnpm validate` # make sure everything still works
- `pnpm cz` # commit new code
- `git push origin my-fix`

## Lastly

- open a pull request on Github.
