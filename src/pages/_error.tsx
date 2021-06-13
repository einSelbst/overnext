import type { NextPageContext } from 'next'
import type { ErrorProps } from 'next/error'
import NextError from 'next/error'

/**
 * <ErrorPage />
 */
const _error = ({
  statusCode,
  title,
}: Readonly<ErrorProps>): ComponentReturnType => (
  <NextError statusCode={statusCode} title={title} />
)

/**
 * Add logger
 */
_error.getInitialProps = async (
  context: NextPageContext
): Promise<ErrorProps> => {
  const properties = NextError.getInitialProps(context)
  const { err } = context

  if (err) {
    /* Sentry.captureException(err) */
    /* Sentry.addBreadcrumb({ */
    /* data: { */
    /* asPath, */
    /* }, */
    /* }) */
  }

  return properties
}

export default _error
