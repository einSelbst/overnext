// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './', // eslint-disable-line unicorn/prevent-abbreviations
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  clearMocks: true,

  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
  /*
   * globals: {
   *    'ts-jest': {
   *      isolatedModules: true,
   *      useESM: true,
   *    },
   *  },
   */

  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],

  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },

  /* preset: 'ts-jest/presets/default-esm', */
  /* preset: 'ts-jest/presets/js-with-babel-esm', */

  roots: ['<rootDir>'],

  /* setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'], */
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: 'jsdom',
  /* testEnvironment: 'jest-environment-jsdom', */

  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(test).[jt]s?(x)'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],

  // with babel
  transform: {
    // the first line would mean swc is used in tests, but it gives a warning I don't know how to get rid of
  /* '^.+\\.(ts|tsx)$': 'babel-jest', */
  // so I'm optiong out of swc for jest for now

  '^.+\\.(js|jsx|ts|tsx)$': [
    'babel-jest',
    {
      presets: [
        [
          'next/babel',
          {
            'styled-jsx': {
              'babel-test': true,
            },
          },
        ],
      ],
    },
  ],
},


  // with swc explicitly
  /* transform: {
   *   '^.+\\.(ts|tsx)$': [
   *     '@swc/jest',
   *     {
   *       jsc: {
   *         parser: {
   *           decorators: false,
   *           dynamicImport: false,
   *           syntax: 'typescript',
   *           tsx: true,
   *         },
   *         transform: {
   *           react: {
   *             runtime: 'automatic',
   *           },
   *         },
   *       },
   *       sourceMaps: true,
   *     },
   *   ],
   * },
   */
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  /*
   * transformIgnorePatterns: [
   *   '/node_modules/',
   *   '^.+\\.module\\.(css|sass|scss)$',
   * ],
   */
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
