// Report API code coverage: https://github.com/bahmutov/next-and-cypress-example
import { NextApiRequest, NextApiResponse } from 'next'

const coverage = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore TS2339
    coverage: global.__coverage__ || null,
  })
}

export default coverage
