// Report API code coverage: https://github.com/bahmutov/next-and-cypress-example
import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  coverage: string
}

const coverage = (req: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.statusCode = 200
  res.json({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore TS2339
    coverage: global.__coverage__ || null, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
  })
}

export default coverage
