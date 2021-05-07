/**
 * Declarations for modules without types
 *
 * This file is a global script, that means it shouldn't have any import/export statement
 * @see {@link https://stackoverflow.com/a/42257742/531439}
 *
 */

/**
 * amp doesn't have type definitions
 *
 * for now keep it simple and use any
 * @see {@link https://stackoverflow.com/a/50601125/531439}
 * this will extend {@link https://github.com/DefinitelyTyped/DefinitelyTyped/blob/24f1d0c82da2d898acd03fbb3e692eba3c431f82/types/react/index.d.ts#L2902}
 */
declare namespace JSX {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  interface IntrinsicElements {
    'amp-img': any
    // 'amp-*': any, // not sure if something like this could work but scoping to amp would be better than '*'
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */
}
