import { AppProps /*, App, AppContext */ } from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import '@styles/main.css'

/**
 * Determines if we are running on server or in the client.
 * @return {boolean} true if running on server
 */
function isServerRendered (): boolean {
  return typeof window === 'undefined'
}

/**
 * Conditionally inject axe into the page.
 * This only happens outside of production and in a browser (not SSR).
 * @see https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react/examples/next.js
 *
 * TODO: why not use next.js dynamic import?
 */
// if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
if (!isServerRendered() && process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
  const axe = require('@axe-core/react')
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  axe(React, ReactDOM, 1000, {})
}

function _app ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {/* <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86" /> see https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag */}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// _app.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default _app
