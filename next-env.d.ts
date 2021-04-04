// see: https://github.com/arasfeld/next-graphql-app/blob/main/next-env.d.ts
import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType,
} from 'next'
import type { AppProps } from 'next/app'

declare module 'next' {
  type NextLayoutComponentType<P = unknown> = NextComponentType<
    NextPageContext,
    unknown,
    P
  > & {
    Layout?: ReactNode
  }

  type NextLayoutPage<P = unknown, IP = P> = NextComponentType<
    NextPageContext,
    IP,
    P
  > & {
    Layout: ReactNode
  }
}

declare module 'next/app' {
  type AppLayoutProps<P = unknown> = AppProps<P> & {
    Component: NextLayoutComponentType
  }
}
