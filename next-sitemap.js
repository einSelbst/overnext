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

module.exports = {
  siteUrl: baseUrl() || 'https://example.com',
  changefreq: 'daily',
  priority: sitemapPriority,
  sitemapSize: maxSitemapEntries,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml', '/awesome/secret-page'],
  // Default transformation function
  // eslint-disable-next-line require-await
  transform: async (config, path) => ({
    loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
    changefreq: config.changefreq,
    priority: config.priority,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  }),
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'test-bot',
        allow: ['/path', '/path-2'],
      },
      {
        userAgent: 'black-listed-bot',
        disallow: ['/sub-path-1', '/path-2'],
      },
    ],
    /* additionalSitemaps: ['https://example.com/server-sitemap.xml'], */
    additionalSitemaps: [`${baseUrl()}/server-sitemap.xml`],
  },
}
