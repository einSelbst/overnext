/**
 * This page uses function expressions / const instead of
 * function declaration for
 * `getStaticProps` and `getStaticPaths`
 */
import { ParsedUrlQuery } from 'querystring'
import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from 'next'

/* istanbul ignore next */
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

/**
 * When it comes to types or interfaces, we suggest following
 * the guidelines presented by the react-typescript-cheatsheet community:
 *
 *  - “always use interface for public API’s definition when authoring
 *     a library or 3rd-party ambient type definitions.”
 *  - “consider using type for your React Component Props and State,
 *     because it is more constrained.”
 */
type FragmentsProps = {
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

const Fragments = ({
  fragments,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => (
  <div>
    <h1>My AMP Fragments Page!</h1>
    <p>Fragments: {fragments}</p>
  </div>
)

export default Fragments
