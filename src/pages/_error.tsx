import { captureException, flush } from '@sentry/nextjs'
import type { NextPageContext } from 'next'
import type { ErrorProps } from 'next/error'
import NextErrorComponent from 'next/error'

// extending the nextjs base error type
type ErrorComponentProps = ErrorProps & {
  err?: Error
  hasGetInitialPropsRun?: boolean
}

/**
 * <ErrorPage />
 *
 * @see https://github.com/natterstefan/next-with-sentry/blob/main/pages/_error.js
 */
const _error = ({
  err,
  hasGetInitialPropsRun,
  statusCode,
  title,
}: Readonly<ErrorComponentProps>): ComponentReturnType => {
  if (hasGetInitialPropsRun === false && Boolean(err)) {
    /*
     * getInitialProps is not called in case of
     * https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
     * err via _app.js so it can be captured
     */
    captureException(err)
    // Flushing is not required in this case as it only happens on the client
  }
  return <NextErrorComponent statusCode={statusCode} title={title} />
}

/**
 * Add logger
 */
_error.getInitialProps = async (
  context: NextPageContext
): Promise<ErrorComponentProps> => {
  const errorInitialProps = (await NextErrorComponent.getInitialProps(
    context
  )) as ErrorComponentProps
  const { err, asPath } = context

  /*
   * Workaround for https://github.com/vercel/next.js/issues/8592, mark when
   * getInitialProps has run
   */
  errorInitialProps.hasGetInitialPropsRun = true

  /*
   * Running on the server, the response object (`res`) is available.
   *
   * Next.js will pass an err on the server if a page's data fetching methods
   * threw or returned a Promise that rejected
   *
   * Running on the client (browser), Next.js will provide an err if:
   *
   *  - a page's `getInitialProps` threw or returned a Promise that rejected
   *  - an exception was thrown somewhere in the React lifecycle (render,
   *    componentDidMount, etc) that was caught by Next.js's React Error
   *    Boundary. Read more about what types of exceptions are caught by Error
   *    Boundaries: https://reactjs.org/docs/error-boundaries.html
   */

  if (err) {
    captureException(err)
    /* Sentry.addBreadcrumb({ */
    /* data: { */
    /* asPath, */
    /* }, */
    /* }) */

    /*
     * Flushing before returning is necessary if deploying to Vercel, see
     * https://vercel.com/docs/platform/limits#streaming-responses
     */
    await flush(2000)

    return errorInitialProps
  }

  /*
   * If this point is reached, getInitialProps was called without any
   * information about what the error might be. This is unexpected and may
   * indicate a bug introduced in Next.js, so record it in Sentry
   */
  captureException(
    new Error(
      `_error.js getInitialProps missing data at path: ${
        asPath ?? 'unknown error path'
      }`
    )
  )
  await flush(2000)

  return errorInitialProps
}

export default _error
