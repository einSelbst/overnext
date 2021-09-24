import ENV from 'config/env.config'

const SEO_CONFIG = {
  description: 'Ihr Notar in Teterow',
  openGraph: {
    locale: 'de',
    site_name: 'Notarin Schipke', // eslint-disable-line camelcase
    type: 'website',
    url: ENV.SITE_URL,
  },
  title: 'Notarin Schipke | Ihr Notar in Teterow',
  titleTemplate: '%s - Notarin Schipke',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@notarin-schipke',
    site: '@notarin-schipke',
  },
}

export default SEO_CONFIG
