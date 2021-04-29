module.exports = {
  extends: ['@commitlint/config-conventional'],
  /* add some more commit types */
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'deps', // dependencies
        'docs',
        'dx', // all things dev experience
        'feat',
        'fix',
        'look', // CSS, etc
        'perf',
        'refactor',
        'revert',
        'style', // this means 'code' style
        'test',
      ],
    ],
  },
}
