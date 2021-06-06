import { ENV } from '.'

export default {
  title: 'Overnext | Powered by Next.js',
  titleTemplate: '%s - Nice stuff',
  description: 'Basically nothing but DX',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: ENV.SITE_URL,
    site_name: 'Overnext', // eslint-disable-line camelcase
  },
  twitter: {
    handle: '@overnext',
    site: '@overnext',
    cardType: 'summary_large_image',
  },
}
