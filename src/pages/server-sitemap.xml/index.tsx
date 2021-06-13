import type { GetServerSideProps } from 'next'
import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps: GetServerSideProps = async context => {
  /*
   * Method to source urls from cms
   * const urls = await fetch('https//example.com/api')
   */

  const fields = [
    {
      lastmod: new Date().toISOString(),
      // Absolute url
      loc: 'https://example.com',
      /*
       * changefreq
       * priority
       */
    },
    {
      lastmod: new Date().toISOString(),
      // Absolute url
      loc: 'https://example.com/dynamic-path-2',
      /*
       * changefreq
       * priority
       */
    },
  ]

  return getServerSideSitemap(context, fields)
}

// Default export to prevent next.js errors
export default getServerSideProps
