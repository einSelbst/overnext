import { AppProps /*, App, AppContext */ } from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ThemeProvider } from 'next-themes'
import '@styles/main.css'

/**
 * Web Vitals
 * @see https://www.freecodecamp.org/news/how-to-measure-next-js-web-vitals-using-quickmetrics/
 */
const reportWebVitals = (metric: { name: string; value: string }): void => {
  // I can only send 5 metrics to free quickmetrics account
  if (metric.name !== 'Next.js-hydration') {
    sendMetric(metric).catch(error => console.error(error))
  }
  console.log(metric) // eslint-disable-line no-console
}

const sendMetric = async ({
  name,
  value,
}: {
  name: string
  value: string
}): Promise<boolean> => {
  if (!process.env.NEXT_PUBLIC_QUICK_METRICS_API_KEY) return false

  // values must be integers
  const valueInt: number = Math.round(
    name === 'CLS' ? parseFloat(value) * 1000 : parseFloat(value)
  )
  const url = `https://qckm.io?m=${name}&v=${valueInt}&k=${process.env.NEXT_PUBLIC_QUICK_METRICS_API_KEY}`

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url)
  } else {
    await fetch(url, { method: 'POST', keepalive: true })
  }
  return true
}

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
    <ThemeProvider defaultTheme="system" attribute="class">
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {/* <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86" /> see https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag */}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
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

export { reportWebVitals }
export default _app
