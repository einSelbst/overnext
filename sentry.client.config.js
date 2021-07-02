/*
 * This file configures the initialization of Sentry on the browser.
 * The config you add here will be used whenever a page is visited.
 * https://docs.sentry.io/platforms/javascript/guides/nextjs/
 */
import { init } from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN
const SENTRY_TRACES_SAMPLE_RATE =
  process.env.SENTRY_TRACES_SAMPLE_RATE ||
  process.env.NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE

init({
  dsn: SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: SENTRY_TRACES_SAMPLE_RATE,
  /*
   * ...
   * Note: if you want to override the automatic release value, do not set a
   * `release` value here - use the environment variable `SENTRY_RELEASE`, so
   * that it will also get attached to your source maps
   */
})
