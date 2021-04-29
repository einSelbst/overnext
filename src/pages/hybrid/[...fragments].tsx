/**
 * This page uses const instead of function for
 * `getStaticProps` and `getStaticPaths`
 */
// eslint-disable-next-line unicorn/prefer-node-protocol
import { ParsedUrlQuery } from 'querystring'
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPathsContext,
  GetStaticPropsContext,
  GetStaticPathsResult,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from 'next'

export const config = {
  amp: 'hybrid',
}

interface StaticPathParameters extends ParsedUrlQuery {
  fragments: string | string[]
}

export const getStaticPaths: GetStaticPaths = async (
  _context: GetStaticPathsContext
): Promise<GetStaticPathsResult<StaticPathParameters>> => {
  await Promise.resolve('async needs await')

  return {
    fallback: false,
    paths: [
      {
        params: {
          fragments: ['foo', 'bar'],
        },
      },
    ],
  }
}

interface FragmentsProps {
  fragments: string | string[]
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<FragmentsProps>> => {
  await Promise.resolve('async needs await')

  const frags = params?.fragments ?? 'baz'
  return {
    props: {
      fragments: frags,
    },
  }
}

function Fragments ({
  fragments,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <div>
      <h1>My AMP Fragments Page!</h1>
      <p>Fragments: {fragments}</p>
    </div>
  )
}

export default Fragments
