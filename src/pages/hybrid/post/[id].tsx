export const config = {
  amp: 'hybrid',
}

export async function getStaticPaths () {
  return {
    fallback: true,
    paths: [
      {
        params: {
          id: '4',
        },
      },
    ],
  }
}

export async function getStaticProps ({ params }: any) {
  return {
    props: {
      id: params.id,
    },
  }
}

function Post (props: any) {
  return (
    <div>
      <h1>My AMP Post Page!</h1>
      <h2>PostID: {props.id}</h2>
    </div>
  )
}

export default Post
