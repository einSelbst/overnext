// see: https://github.com/arasfeld/next-graphql-app/blob/main/next-env.d.ts
import type {
  NextComponentType,
  NextLayoutComponentType,
  NextPage,
  NextPageContext,
} from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

/* eslint-disable @typescript-eslint/no-shadow */
declare module 'next' {
  // type NextPage<P = {}, IP = P> = NextComponentType<NextPageContext, IP, P>
  //
  // // this is a union of Reacts Component Type and getInitialProps
  // type NextComponentType<
  //   C extends BaseContext = NextPageContext, // context
  //   IP = {}, // initial props
  //   P = {} // props
  // > = ComponentType<P> & {
  //   /**
  //    * Used for initial page load data population. Data returned from `getInitialProps` is serialized when server rendered.
  //    * Make sure to return plain `Object` without using `Date`, `Map`, `Set`.
  //    * @param ctx Context of `page`
  //    */
  //   getInitialProps?(context: C): IP | Promise<IP>
  // }

  // ----------- additional types --------------

  type NextLayoutComponentType<P = Record<string, unknown>> = NextComponentType<
    NextPageContext,
    unknown,
    P
  > & {
    Layout?: (children: ReactNode) => JSX.Element
    // Layout?: (page: React.ReactNode) => JSX.Element
    getLayout?: (page: ReactNode) => ReactNode
  }

  /**
   * `NextComponentType` is an extension of React.ComponentType
   *   - extending the context with the NextPageContext Interface
   *   - adding getIniialProps
   * `OverNextComponentType` is an extension of NextComponentType
   *   - add Layout property
   *   - add getLayout function
   *   - taking into account what was proposed here:
   *     {@link https://stackoverflow.com/a/59840095/531439}
   */
  type NextComponentType =
    | NextComponentType[]
    | ReactElement
    | boolean
    | number
    | string
    | (NextComponentType<NextPageContext, IP, P> & {
        Layout: ReactNode
      })
    | null // Note: undefined is invalid
}
/* eslint-enable @typescript-eslint/no-shadow */

declare module 'next/app' {
  type AppLayoutProps<P = unknown> = AppProps<P> & {
    Component: NextLayoutComponentType
  }
}

type NextLayoutPage1<P = Record<string, unknown>, IP = P> = NextComponentType<
  NextPageContext,
  IP,
  P
> & {
  Layout: React.ReactNode
}

type NextLayoutPage<P = Record<string, unknown>> = NextPage<P> & {
  Layout: React.ReactNode
}

export type { NextLayoutPage, NextLayoutPage1 }
