/// <reference types="next" />
/// <reference types="next/types/global" />
declare module '@moxy/next-layout'

type ComponentReturnType =
  | ReactElement
  | Array<ComponentReturnType>
  | string
  | number
  | boolean
  | null // Note: undefined is invalid
