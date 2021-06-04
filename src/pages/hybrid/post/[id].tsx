/**
 * This page uses functions instead of const for
 * `getStaticProps` and `getStaticPaths`
 */
// eslint-disable-next-line unicorn/prefer-node-protocol
import { ParsedUrlQuery } from 'querystring'
import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from 'next'

/* istanbul ignore next */
export const config = {
  amp: 'hybrid',
}

interface StaticPathParameters extends ParsedUrlQuery {
  id: string
}

export async function getStaticPaths(
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

interface PostProps {
  id: string | string[] | undefined
}

/* export async function getStaticProps ({ */
/* params, */
/* }: GetStaticPropsContext): Promise<GetStaticPropsResult<PostProps>> { */
export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<PostProps>> {
  await Promise.resolve('async needs await')
  return {
    props: {
      id: context.params?.id,
    },
  }
}

function Post({
  id,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  // function Post ( props: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <div>
      <h1>My AMP Post Page!</h1>
      <h2>PostID: {id}</h2>
    </div>
  )
}

export default Post
