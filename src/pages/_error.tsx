import { NextPageContext } from 'next'
import NextError, { ErrorProps } from 'next/error'

/**
 * <ErrorPage />
 */
const _error = ({ statusCode, title }: ErrorProps): JSX.Element => (
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
