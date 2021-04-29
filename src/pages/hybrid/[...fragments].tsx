import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPathsContext,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from 'next'

export const config = {
  amp: 'hybrid',
}

interface FragmentsProps {
  fragments: string | string[]
}

export const getStaticPaths: GetStaticPaths = async (
  _context: GetStaticPathsContext
) => {
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

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<FragmentsProps>> => {
  await Promise.resolve('async needs await')

  console.log(params)
  const frags = params!.fragments!
  return {
    props: {
      fragments: frags,
    },
  }
}

function Fragme ({
  fragments,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <div>
      <h1>My AMP Fragments Page!</h1>
      <p>Fragments: {fragments}</p>
    </div>
  )
}

export default Fragme
