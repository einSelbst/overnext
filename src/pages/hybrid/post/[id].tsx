/**
 * This page uses functions instead of const for
 * `getStaticProps` and `getStaticPaths`
 *
 */
/* eslint-disable unicorn/prefer-node-protocol */
import { ParsedUrlQuery } from 'querystring'
import {
  GetStaticPathsContext,
  GetStaticPropsContext,
  GetStaticPathsResult,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from 'next'
/* eslint-enable unicorn/prefer-node-protocol */

export const config = {
  amp: 'hybrid',
}

interface StaticPathParameters extends ParsedUrlQuery {
  id: string
}

export async function getStaticPaths (
  _context: GetStaticPathsContext
): Promise<GetStaticPathsResult<StaticPathParameters>> {
  await Promise.resolve('async needs await')
  return {
    /* https://github.com/vercel/next.js/issues/14256#issuecomment-671573442 */
    fallback: 'blocking',
    /* fallback: true, */
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

// export async function getStaticProps (context: GetStaticPropsContext): Promise<GetStaticPropsResult<PostProps>> {
export async function getStaticProps ({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<PostProps>> {
  await Promise.resolve('async needs await')
  return {
    props: {
      id: params!.id,
    },
  }
}

//function Blog (params: InferGetStaticPropsType<typeof getStaticProps>) {
//function Blog ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
// will resolve posts to type Post[]
//}
function Post ({
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
