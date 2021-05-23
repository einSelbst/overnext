/* import { LayoutTree } from '@moxy/next-layout' */
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import { useAmp } from 'next/amp'
import type { AppLayoutProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import * as React from 'react'
/* import 'styles/main.css' // tailwind */
import 'styles/global.scss' // global styles
import { ENV, SEO } from 'config'
import DefaultLayout from 'layouts/default.layout'
import SiteLayout from 'layouts/site.layout'

/**
 * Web Vitals
 * @see {@link https://www.freecodecamp.org/news/how-to-measure-next-js-web-vitals-using-quickmetrics/}
 */
const reportWebVitals = (metric: { name: string; value: string }): void => {
    // I can only send 5 metrics to free quickmetrics account
    if (metric.name !== 'Next.js-hydration') {
      sendMetric(metric).catch(error => console.error(error))
    }
    console.log(metric) // eslint-disable-line no-console
  },
  sendMetric = async ({
    name,
    value,
  }: {
    name: string
    value: string
  }): Promise<boolean> => {
    if (!process.env.NEXT_PUBLIC_QUICK_METRICS_API_KEY) {
      return false
    }

    // eslint-disable-next-line no-console
    console.log('sending metrics to quickmetrics...')

    // values must be integers
    const valueInt: number = Math.round(
        name === 'CLS'
          ? Number.parseFloat(value) * 1000
          : Number.parseFloat(value)
      ),
      url = `https://qckm.io?m=${name}&v=${valueInt}&k=${process.env.NEXT_PUBLIC_QUICK_METRICS_API_KEY}`

    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url)
    } else {
      await fetch(url, { method: 'POST', keepalive: true })
    }
    return true
  },
  /**
   * Conditionally inject axe into the page.
   * This only happens outside of production and in a browser (not SSR).
   * @see {@link https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react/examples/next.js}
   *
   * Regarding next.js dynamic
   * @see {@link https://github.com/vercel/next.js/blob/0af3b526408bae26d6b3f8cab75c4229998bf7cb/examples/with-dynamic-import/pages/index.js }
   */
  A11yLinter = dynamic(import('components/helper/axe'), { ssr: false }),
  HeadIcons = (): JSX.Element => {
    const isNotAmp = !useAmp()

    return (
      <Head>
        {isNotAmp && (
          <>
            <meta
              name='viewport'
              content='initial-scale=1.0, width=device-width'
            />
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            {/* the preload is automatically added by next.js or one of my linter rules */}
            <link
              rel='preload'
              href='https://fonts.googleapis.com/css2?family=Inter&family=Sansita&display=swap'
              as='style'
            />
            <link
              href='https://fonts.googleapis.com/css2?family=Inter&family=Sansita&display=swap'
              rel='stylesheet'
            />
          </>
        )}
        {/* <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86" /> see https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag */}
        {/* Browsers use this in some areas to help your brand feel more embedded */}

        {/* <link
          rel='preload'
          href='https://unpkg.com/marx-css/css/marx.min.css'
          as='style'
          type='text/css'
          />
          <link
          rel='stylesheet'
          href='https://unpkg.com/marx-css/css/marx.min.css'
          type='text/css'
          />
          <link rel="stylesheet" href="node_modules/modern-normalize/modern-normalize.css" />
        */}
        <meta name='theme-color' content='#ffffff' />
        {/* Windows uses these to help your brand feel more embedded */}
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta
          name='msapplication-TileImage'
          content='/icons/mstile-150x150.png'
        />
        {/* Browsers use these as tab and app icons */}
        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/icons/icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/icons/icon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/icons/icon-16x16.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/icons/apple-touch-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/icons/apple-touch-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/icons/apple-touch-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/icons/apple-touch-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/icons/apple-touch-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/icons/apple-touch-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/icons/apple-touch-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icons/apple-touch-icon.png'
        />
        <link
          rel='mask-icon'
          href='/icons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        {/* for PWA: */}
        {/* <link rel="manifest" href="path/to/manifest.json" crossorigin="use-credentials" /> */}
        <link rel='manifest' href='/manifest.json' />
      </Head>
    )
  }

/**
 * Now here I do mix 2 different ways for adding a Layout, the simpler version
 * where a page has a property `Layout` and the slightly more advanced version
 * where a page has a function `getLayout`. I will keep both for the moment.
 */
function _app ({ Component, pageProps }: AppLayoutProps): React.ReactElement {
  const isAmp = useAmp(),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    Layout = Component.Layout || DefaultLayout,
    withSiteLayout = (page: React.ReactNode) => <SiteLayout>{page}</SiteLayout>,
    getLayout = Component.getLayout || withSiteLayout

  // amp pages doesn't work well with the theme so I had to split it
  return isAmp ? (
    <>
      <DefaultSeo {...SEO} />
      <HeadIcons />
      <Component {...pageProps} />
    </>
  ) : (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <DefaultSeo {...SEO} />
      <HeadIcons />
      {/* <Layout {...this.props}> */}
      <Layout>{getLayout && getLayout(<Component {...pageProps} />)}</Layout>

      {/* <Layout>
            <Component {...pageProps} />
            </Layout>
          */}
      {/* <LayoutTree
            Component={Component}
            pageProps={pageProps} /> */}

      {process.browser && ENV.DEVELOPMENT && <A11yLinter />}
    </ThemeProvider>
  )
}

export { reportWebVitals }
export default _app
