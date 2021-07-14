import { withSentry } from '@sentry/nextjs'
import { query as q } from 'faunadb'
import type { NextApiRequest, NextApiResponse } from 'next'

import faunaClient from 'lib/fauna-client'

type showType = {
  title: string
  watched: boolean
}

/* eslint-disable new-cap, @typescript-eslint/no-unsafe-argument */
const addShow = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    // ToDo [+ajv]: validate input
    const body: showType = JSON.parse(request.body) as showType
    const query = await faunaClient.query(
      q.Create(q.Collection('shows'), {
        data: { title: body.title, watched: false },
      })
    )
    response.status(200).json({ data: query })
  }
}
/* eslint-enable new-cap, @typescript-eslint/no-unsafe-argument */

export default withSentry(addShow)
