const baseUrl2 = (): string => {
  // eslint-disable-next-line no-console
  console.log('evaluating base URL in env config')

  if (process.env.VERCEL === '1') {
    return `https://${process.env.VERCEL_URL as string}`
  }
  if (process.env.NETLIFY === 'true') {
    return `https://${process.env.DEPLOY_PRIME_URL as string}`
  }
  return 'example.com'
}

const APP_ENV = {
  PRODUCTION: process.env.NODE_ENV === 'production',
  DEVELOPMENT: process.env.NODE_ENV === 'development',

  /**
   * Determines if we are running on server or in the client.
   *
   * @returns `true` if running on server, `false` if in browser context
   */
  SERVER_RENDERED: typeof window === 'undefined',

  /**
   * Used in the sitemap to generate the URLs
   *
   * @remarks
   * Regarding the `??`:
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_Coalescing_Operator | Nullish Coalescing Operator}
   */
  SITE_URL: process.env.URL ?? 'https://overnext.vercel.app',
  SITE_URL2: baseUrl2(),
}

export default APP_ENV
