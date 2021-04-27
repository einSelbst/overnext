export const config = {
  amp: 'hybrid',
}

export const getStaticPaths = async () => {
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

export const getStaticProps = async ({ params }: any) => {
  console.log(params)

  return {
    props: {
      fragments: params.fragments,
    },
  }
}

function Fragme () {
  return (
    <div>
      <h1>My AMP Fragments Page!</h1>
    </div>
  )
}

export default Fragme
