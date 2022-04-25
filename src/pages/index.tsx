import type { NextComponentType } from 'next'
import Head from 'next/head'
import Link from 'next/link'

/* eslint-disable react/iframe-missing-sandbox */
export const Home = (): NextComponentType => (
  <div className='container'>
    <Head>
      <title>The Egg</title>
      <meta content='A page about life on earth' name='description' />
    </Head>

    <div id='main'>
      <h1>
        Welcome to <a href='https://nextjs.org'>Overnext!</a>
      </h1>

      <p className='description'>
        An overly opinionated starter for <code>next.js</code>
      </p>

      <div className='py-20'>
        <h2 className='text-center text-3xl text-gray-700 dark:text-gray-100'>
          A short story
        </h2>
        {/* @see {@link https://css-tricks.com/lazy-load-embedded-youtube-videos/} */}
        {/* iframe sandbox attribute should match my CSP headers, actually I have this redundant now */}
        {/* however, using 'allow-scripts' and 'allow-same-origin' defeates the purpose of sandboxing, but without this my need loading trick doesn't work */}
        {/* to allow links from iframes I would need to add 'allow-popups', see https://csplite.com/csp/test186/ */}
        <iframe
          allowFullScreen
          allow='autoplay; encrypted-media; picture-in-picture'
          height='315'
          loading='lazy'
          sandbox='allow-scripts allow-same-origin'
          src='https://www.youtube-nocookie.com/embed/h6fcK_fRYaI'
          srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%;}div{display:grid;place-items:center;}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:50px;text-align:center;font:28px/50px sans-serif;color:white; width: 13%;background-color: rgba( 0, 0, 0, 0.6 );border-radius:10px}span:hover{background-color: red}</style><a href=https://www.youtube-nocookie.com/embed/h6fcK_fRYaI?autoplay=1><img src=https://img.youtube.com/vi/h6fcK_fRYaI/hqdefault.jpg alt='Kurzgesagt: The Egg' /><div><span>&#x25BA;</span></div></a>"
          title='YouTube video player'
          width='560'
        />
      </div>

      <button
        data-cy='test-button'
        type='button'
        // eslint-disable-next-line react/jsx-no-bind
        onClick={(): void => {
          window.alert('With TypeScript and Jest') // eslint-disable-line no-alert
        }}>
        Test Button
      </button>

      <h2>Some further info</h2>

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
    </div>
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
/* eslint-enable react/iframe-missing-sandbox */

export default Home
