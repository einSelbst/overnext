export default {
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
  SITE_URL: process.env.SITE_URL ?? 'https://overnext.vercel.app',
  FAKE_TOKEN: 'aslk^jf8&238476j&s322@#', // does secrets detect action recognize this?
}
