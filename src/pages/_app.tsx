// import App from "next/app";
import { AppProps /*, AppContext */ } from 'next/app'
import React from 'react'

// Conditionally inject axe into the page.
// This only happens outside of production and in a browser (not SSR).
// @see: https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react/examples/next.js
// TODO: why not use next.js dynamic import?
if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const ReactDOM = require('react-dom')
  const axe = require('@axe-core/react')
  // TODO: simplify, see https://github.com/dequelabs/axe-core-npm/issues/176
  axe(React, ReactDOM, 1000, {}) // axe(React, ReactDOM, 1000)
}

function _app ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default _app
