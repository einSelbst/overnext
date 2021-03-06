import { ENVIRONMENT } from 'config'

export default {
  title: 'Overnext | Powered by Next.js',
  titleTemplate: '%s - Nice stuff',
  description: 'Basically nothing but DX',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: ENVIRONMENT.SITE_URL,
    site_name: 'Overnext',
  },
  twitter: {
    handle: '@overnext',
    site: '@overnext',
    cardType: 'summary_large_image',
  },
}
