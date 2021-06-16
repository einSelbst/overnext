import ENV from 'config/env.config'

const SEO_CONFIG = {
  description: 'Basically nothing but DX',
  openGraph: {
    locale: 'en_IE',
    site_name: 'Overnext', // eslint-disable-line camelcase
    type: 'website',
    url: ENV.SITE_URL,
  },
  title: 'Overnext | Powered by Next.js',
  titleTemplate: '%s - Nice stuff',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@overnext',
    site: '@overnext',
  },
}

export default SEO_CONFIG
