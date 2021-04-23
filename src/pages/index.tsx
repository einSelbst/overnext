import Head from 'next/head'
import Link from 'next/link'

export const Home = (): JSX.Element => {
  return (
    <div className='container'>
      <Head>
        <title>The Egg</title>
        <meta name='description' content='A page about life on earth' />
      </Head>

      <main>
        <h1>
          Welcome to <a href='https://nextjs.org'>Overnext!</a>
        </h1>

        <p className='description'>
          An overly opinonated starter for <code>next.js</code>
        </p>

        <div className='py-20'>
          <h2 className='text-3xl text-center text-gray-700 dark:text-gray-100'>
            A short story
          </h2>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube-nocookie.com/embed/h6fcK_fRYaI'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
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

          <Link href='/legal' locale='fr'>
            <a href='fr/legal' data-cy='fr-legal' className='card'>
              <h3>Legal &rarr;</h3>
              <p>Discover and enjoy the depths of legal issues.</p>
            </a>
          </Link>

          <a href='https://vercel.com/import?filter=next.js' className='card'>
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <style jsx>{`
        button {
          background: #0072ed;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          color: #000;
          background: #fff;
        }

        [data-theme='dark'],
        [data-theme='dark'] body {
          color: #fff;
          background: #000;
        }

        iframe {
          border: 0;
        }
      `}</style>
    </div>
  )
}

export default Home
