/**
 * Declarations for modules without types
 *
 * This file is a global script, that means it shouldn't have any import/export statement
 * @see {@link https://stackoverflow.com/a/42257742/531439}
 *
 */

/**
 * Why do the render methods of class components return ReactNode, but function components return ReactElement?
 *
 * tl;dr: It is a current TS type incompatibility not related to core React.
 *
 * - TS class component: returns ReactNode with render(), more permissive than React/JS
 * - TS function component: returns JSX.Element | null, more restrictive than React/JS
 *
 * In principle, `render()` in React/JS class components supports the same return types as a function component.
 * With regard to TS, the different types are a type inconsistency still kept due to historical reasons and the need for backwards-compatibility.
 *
 * Ideally a valid return type would probably look more like this:
 *
 * @see {@link https://stackoverflow.com/a/59840095/531439}
 */
type ComponentReturnType =
  | ComponentReturnType[]
  | ReactElement
  | boolean
  | number
  | string
  | null // Note: undefined is invalid

/**
 * amp doesn't have type definitions
 *
 * for now keep it simple and use any
 * @see {@link https://stackoverflow.com/a/50601125/531439}
 * this will extend {@link https://github.com/DefinitelyTyped/DefinitelyTyped/blob/24f1d0c82da2d898acd03fbb3e692eba3c431f82/types/react/index.d.ts#L2902}
 */
declare namespace JSX {
  /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/consistent-type-definitions */
  interface IntrinsicElements {
    'amp-img': any
    // 'amp-*': any, // not sure if something like this could work but scoping to amp would be better than '*'
  }
  /* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/consistent-type-definitions */
}
