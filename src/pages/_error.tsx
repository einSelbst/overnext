import { NextPageContext } from 'next'
import NextError, { ErrorProps } from 'next/error'

/**
 * <ErrorPage />
 */
const _error = ({ statusCode, title }: ErrorProps) => (
  <NextError statusCode={statusCode} title={title} />
)

/**
 * Add logger
 */
_error.getInitialProps = async (ctx: NextPageContext): Promise<ErrorProps> => {
  const props = NextError.getInitialProps(ctx)
  const { err } = ctx

  if (err) {
    /* Sentry.captureException(err) */
    /* Sentry.addBreadcrumb({ */
    /* data: { */
    /* asPath, */
    /* }, */
    /* }) */
  }

  return props
}

export default _error
