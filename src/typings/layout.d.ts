// see: https://github.com/arasfeld/next-graphql-app/blob/main/next-env.d.ts
import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType,
} from 'next'
import type { AppProps } from 'next/app'

declare module 'next' {
  type NextLayoutComponentType<P = Record<string, unknown>> = NextComponentType<
    NextPageContext,
    unknown,
    P
  > & {
    Layout?: ReactNode
    // eslint-disable-next-line @typescript-eslint/ban-types
    getLayout?: () => {}
  }

  type NextLayoutPage<P = Record<string, unknown>, IP = P> = NextComponentType<
    NextPageContext,
    IP,
    P
  > & {
    Layout: ReactNode
  }

  type NextLayoutComponentTypeUnused<
    C extends BaseContext = NextPageContext,
    IP = unknown,
    P = unknown
  > = ComponentType<P> & {
    getInitialProps?(context: C): IP | Promise<IP>
    // eslint-disable-next-line @typescript-eslint/ban-types
    getLayout?: () => {}
    Layout?: ReactNode
  }
}

declare module 'next/app' {
  type AppLayoutProps<P = unknown> = AppProps<P> & {
    Component: NextLayoutComponentType
  }
}
