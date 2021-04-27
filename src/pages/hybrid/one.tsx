export const config = {
  amp: 'hybrid',
}

export const getStaticProps = async ({ params }: any) => {
  console.log(params)

  return {
    props: {
      fragments: 'params',
    },
  }
}

const One = () => {
  return (
    <main>
      <h1>One</h1>
    </main>
  )
}

export default One
