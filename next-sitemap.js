/**
 * @see also ./src/pages/server-sitemap.xml
 */
const baseUrl = () => {
  // eslint-disable-next-line no-console
  console.log('evaluating base URL in sitemap config')

  if (process.env.VERCEL === '1') {
    return `https://${process.env.VERCEL_URL}`
  }
  if (process.env.NETLIFY === true) {
    return `https://${process.env.DEPLOY_PRIME_URL}`
  }
  return 'localhost:3000'
}

const maxSitemapEntries = 5000
const sitemapPriority = 0.7

const sitemapConfig = {
  changefreq: 'daily',
  exclude: ['/server-sitemap.xml', '/awesome/secret-page'],
  generateRobotsTxt: true,
  priority: sitemapPriority,
  robotsTxtOptions: {
    /* additionalSitemaps: ['https://example.com/server-sitemap.xml'], */
    additionalSitemaps: [`${baseUrl()}/server-sitemap.xml`],

    policies: [
      {
        allow: '/',
        userAgent: '*',
      },
      {
        allow: ['/path', '/path-2'],
        userAgent: 'test-bot',
      },
      {
        disallow: ['/sub-path-1', '/path-2'],
        userAgent: 'black-listed-bot',
      },
    ],
  },
  siteUrl: baseUrl() || 'https://example.com',
  sitemapSize: maxSitemapEntries,

  // Default transformation function
  // eslint-disable-next-line require-await
  transform: async (config, path) => ({
    changefreq: config.changefreq,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
    priority: config.priority,
  }),
}

module.exports = sitemapConfig
