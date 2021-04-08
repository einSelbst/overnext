// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

const hello = (request: NextApiRequest, response: NextApiResponse): void => {
  response.statusCode = 200
  response.json({ name: 'John Doe' })
}

export default hello
