/**
 * Declarations for modules without types
 *
 * This file is a global script, that means it shouldn't have any import/export statement
 * @see {@link https://stackoverflow.com/a/42257742/531439}
 *
 */

// for amp, which doesn't have type definitions
// keep it simple and use any
// @see: {@link https://stackoverflow.com/a/50601125/531439}
declare namespace JSX {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  interface IntrinsicElements {
    'amp-img': any
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */
}
