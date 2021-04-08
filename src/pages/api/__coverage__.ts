// Report API code coverage: https://github.com/bahmutov/next-and-cypress-example
import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  coverage: string
}

const coverage = (
  request: NextApiRequest,
  response: NextApiResponse<Data>
): void => {
  response.statusCode = 200
  response.json({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore TS2339
    coverage: global.__coverage__ || undefined, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
  })
}

export default coverage
