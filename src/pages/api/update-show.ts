import { withSentry } from '@sentry/nextjs'
import { query as q } from 'faunadb'
import type { NextApiRequest, NextApiResponse } from 'next'

import faunaClient from 'lib/fauna'

type showType = {
  title: string
  watched: boolean
}

/* eslint-disable new-cap, @typescript-eslint/no-unsafe-argument */
const updateShow = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  if (request.method === 'POST') {
    // ToDo [+ajv]: validate input
    const body: showType = JSON.parse(request.body) as showType

    const query = await faunaClient.query(
      q.Update(
        q.Select(
          ['ref'],
          q.Get(q.Match(q.Index('shows_by_title'), body.title))
        ),
        {
          data: {
            watched: body.watched,
          },
        }
      )
    )
    response.status(200).json({ data: query })
  }
}
/* eslint-enable new-cap, @typescript-eslint/no-unsafe-argument */

export default withSentry(updateShow)
