import type { GetServerSideProps } from 'next'
import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps: GetServerSideProps = async context => {
  /*
   * Method to source urls from cms
   * const urls = await fetch('https//example.com/api')
   */

  const fields = [
    {
      loc: 'https://example.com', // Absolute url
      lastmod: new Date().toISOString(),
      /*
       * changefreq
       * priority
       */
    },
    {
      loc: 'https://example.com/dynamic-path-2', // Absolute url
      lastmod: new Date().toISOString(),
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
