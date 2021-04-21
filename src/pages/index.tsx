import Head from 'next/head'
import Link from 'next/link'

export const Home = (): JSX.Element => {
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='A page about a fee called hikel' />
      </Head>

      <main>
        <Link href='/legal' locale='fr'>
          <a href='fr/legal' data-cy='fr-legal'>
            To /fr/legal
          </a>
        </Link>
        <div>
          <h1>Hello, world!</h1>
          <p>Welcome to your internationalised page!</p>
          <br />
        </div>
        <h1 className='title'>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p className='description'>
          Get started by editing <code>pages/index.tsx</code>
        </p>

        <div className='py-20'>
          <h2 className='text-3xl text-center text-gray-700 dark:text-gray-100'>
            Next.js + Tailwind CSS 2.0
          </h2>
        </div>

        <button
          data-cy='test-button'
          type='button'
          onClick={() => {
            window.alert('With typescript and Jest')
          }}
        >
          Test Button
        </button>

        <div className='grid'>
          <a href='https://nextjs.org/docs' className='card'>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/docs/getting-started' className='card'>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className='card'
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className='card'
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img
            src='/vercel.svg'
            alt='Vercel Logo'
            width='71px'
            height='16px'
            className='logo'
          />
        </a>
      </footer>
    </div>
  )
}

export default Home
