const VERCEL = 'VERCEL'
const NETLIFY = 'NETLIFY'
const AMPLIFY = 'AMPLIFY'
const LOCALHOST = 'LOCALHOST'

const detectPlatform2 = () => {
  if (process.env.VERCEL === '1') {
    return VERCEL
  } else if (process.env.NETLIFY === 'true') {
    return NETLIFY
  } else if (process.env.CODEBUILD_CI === 'true') {
    return AMPLIFY
  }
  return LOCALHOST
}

const baseUrl2 = (): string => {
  // eslint-disable-next-line no-console
  console.log('evaluating base URL in env config')

  if (process.env.VERCEL === '1') {
    return `https://${process.env.VERCEL_URL ?? ''}`
  }
  if (process.env.NETLIFY === 'true') {
    return `https://${process.env.DEPLOY_PRIME_URL ?? ''}`
  }
  return 'example.com'
}

const APP_ENV = {
  DEVELOPMENT: process.env.NODE_ENV === 'development',
  PLATFORMX: detectPlatform2(),
  PRODUCTION: process.env.NODE_ENV === 'production',

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
