export default {
  PRODUCTION: process.env.NODE_ENV === 'production',

  /**
   * Determines if we are running on server or in the client.
   * @return {boolean} true if running on server
   */
  SERVER_RENDERED: typeof window === 'undefined',

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_Coalescing_Operator
  SITE_URL: process.env.SITE_URL ?? 'https://overnext.vercel.app',
}
