/// <reference types="next" />
/// <reference types="next/types/global" />

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
