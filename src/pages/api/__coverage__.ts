// Report API code coverage: https://github.com/bahmutov/next-and-cypress-example
import { withSentry } from '@sentry/nextjs'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  coverage: string | undefined
}

const coverage = (
  _request: NextApiRequest,
  response: NextApiResponse<Data>
): void => {
  const httpStatusOk = 200
  response.statusCode = httpStatusOk
  response.json({
    coverage:
      // @ts-expect-error TS2339
      global.__coverage__ === null
        ? undefined
        : // @ts-expect-error TS2339
          (global.__coverage__ as string),
  })
}

export default withSentry(coverage)
