/**
 * This page uses functions instead of const for
 * `getStaticProps` and `getStaticPaths`
 */
import type { ParsedUrlQuery } from 'querystring'

import type {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from 'next'

/* eslint-disable import/exports-last, import/group-exports */
/* istanbul ignore next */
export const config = {
  amp: 'hybrid',
}
/* eslint-enable import/exports-last, import/group-exports */

type StaticPathParameters = ParsedUrlQuery & {
  readonly id: string
}

async function getStaticPaths(
  _context: GetStaticPathsContext
): Promise<GetStaticPathsResult<StaticPathParameters>> {
  await Promise.resolve('async needs await')
  return {
    /* https://github.com/vercel/next.js/issues/14256#issuecomment-671573442 */
    /* was fallback: true , but for hybrid AMP it must be 'blocking */
    fallback: 'blocking',
    paths: [
      {
        params: {
          id: '4',
        },
      },
    ],
  }
}

type PostProps = {
  readonly id: string[] | string | undefined
}

/* export async function getStaticProps ({ */
/* params, */
/* }: GetStaticPropsContext): Promise<GetStaticPropsResult<PostProps>> { */
async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<PostProps>> {
  await Promise.resolve('async needs await')
  return {
    props: {
      id: context.params?.id,
    },
  }
}

const Post = ({
  id,
}: Readonly<InferGetStaticPropsType<typeof getStaticProps>>): JSX.Element => (
  // function Post ( props: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  <div>
    <h1>My AMP Post Page!</h1>
    <h2>PostID: {id}</h2>
  </div>
)

export { getStaticPaths, getStaticProps } // eslint-disable-line import/group-exports
export default Post
