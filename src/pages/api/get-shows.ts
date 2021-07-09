import { withSentry } from '@sentry/nextjs'
import { query as q } from 'faunadb'
import type { NextApiRequest, NextApiResponse } from 'next'

import faunaClient from 'lib/fauna'

/* eslint-disable new-cap, @typescript-eslint/no-unsafe-argument */
const getShows = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'GET') {
    const query = await faunaClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('shows'))),
        q.Lambda(show => q.Get(show))
      )
    )
    response.status(200).json({ data: query })
  }
}
/* eslint-enable new-cap, @typescript-eslint/no-unsafe-argument */
/*
 *const { FAUNADB_SECRET: secret } = process.env
 *
 *let client: Client
 *
 *if (secret) {
 *  client = new Client({ secret })
 *}
 *
 *const getShows2 = async (
 *  request: NextApiRequest,
 *  response: NextApiResponse
 *) => {
 *  try {
 *    let collections: any[] | never[] = []
 *
 *    if (!client) {
 *      response
 *        .status(500)
 *        .json({ error: new Error('Missing secret to connect to FaunaDB') })
 *      return
 *    }
 *
 *    await client
 *      .paginate(q.Collections())
 *      .map(reference => q.Get(reference))
 *      .each(page => {
 *        collections = collections.concat(page as any)
 *      })
 *
 *    response.json({ collections })
 *  } catch (error) {
 *    response.status(500).json({ error })
 *  }
 *}
 */

export default withSentry(getShows)
