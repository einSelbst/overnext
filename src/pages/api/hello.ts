// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withSentry } from '@sentry/nextjs'
import type { NextApiRequest, NextApiResponse } from 'next'

const hello = (_request: NextApiRequest, response: NextApiResponse): void => {
  const httpStatusOk = 200
  response.statusCode = httpStatusOk
  response.json({ name: 'John Doe' })
}

export default withSentry(hello)
