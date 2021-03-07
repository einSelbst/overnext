export default {
  PRODUCTION: process.env.NODE_ENV === 'production',
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_Coalescing_Operator
  SITE_URL: process.env.SITE_URL ?? 'https://overnext.vercel.app',
}
