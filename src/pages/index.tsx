import type { OverNextComponentType } from 'next'
import Head from 'next/head'
import Link from 'next/link'

export const Home = (): OverNextComponentType => (
  <div className='container'>
    <Head>
      <title>The Egg</title>
      <meta content='A page about life on earth' name='description' />
    </Head>

    <main>
      <h1>
        Welcome to <a href='https://nextjs.org'>Overnext!</a>
      </h1>

      <p className='description'>
        An overly opinionated starter for <code>next.js</code>
      </p>

      <div className='py-20'>
        <h2 className='text-3xl text-center text-gray-700 dark:text-gray-100'>
          A short story
        </h2>
        <iframe
          allowFullScreen
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          height='315'
          loading='lazy'
          src='https://www.youtube-nocookie.com/embed/h6fcK_fRYaI'
          title='YouTube video player'
          width='560'
        />
      </div>

      <button
        data-cy='test-button'
        type='button'
        // eslint-disable-next-line react/jsx-no-bind
        onClick={(): void => {
          window.alert('With typescript and Jest') // eslint-disable-line no-alert
        }}>
        Test Button
      </button>

      <div className='grid'>
        <a className='card' href='https://nextjs.org/docs'>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a className='card' href='https://nextjs.org/docs/getting-started'>
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <Link href='/legal' locale='fr'>
          <a className='card' data-cy='fr-legal'>
            <h3>Legal &rarr;</h3>
            <p>Discover and enjoy the depths of legal issues.</p>
          </a>
        </Link>

        <a className='card' href='https://vercel.com/import?filter=next.js'>
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>
    <style jsx>{`
      button {
        background: #0072ed;
      }
    `}</style>
    <style global jsx>{`
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

      a {
        color: #0072ed;
      }

      iframe {
        border: 0;
      }
    `}</style>
  </div>
)

export default Home
