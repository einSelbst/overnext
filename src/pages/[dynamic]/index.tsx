import {
  GetStaticPaths,
  GetStaticProps,
  /* GetStaticPathsContext, */
  /* GetStaticPropsContext, */
  InferGetStaticPropsType } from 'next'
import React from 'react'

const DynamicPage = (props: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <div>
      <h1>DynamicPage Component {props.dynamic}</h1>
      <h2>Locale: {props.locale}</h2>
    </div>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  //const res = await fetch(`https://.../posts?locale=${locale}`)
  //const posts = await res.json()

  const res = await new Promise(resolve => resolve('Hello'));

  return {
    props: {
      dynamic: res,
      locale: locale,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    //revalidate: 1, // In seconds
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  await new Promise(resolve => resolve('Hello'));
  const rawPaths = Array.from({length: 10}, (_, index) => ({
    params: {
      dynamic: `page-${index}`,
    },
    url: `page-${index}`,
  }))

  const pathss = rawPaths
         .map((page) => page.url)
         .filter((url) => {
           /* console.log(url) */
           /* console.log(locales) */
            return url
      //if (!url || !locales) return url
           /* console.log('shouldnt log') */
      // If there are locales, only include the pages that include one of the available locales
      //if (locales.includes(url.split('/')[0])) return url

      //invalidPaths.push(url)
    })
  /* console.log(paths) */
  /* console.log("something") */
  return {
    /* export async function agetStaticPaths({ locales }: GetStaticPathsContext) { */
    //const { pages } = await getAllPages()
    //const [invalidPaths, log] = missingLocaleInPages()
    paths: [
      { params: { slug: 'page-1', dynamic: 'page-1', pathss } },
      { params: { slug: 'page-1', dynamic: 'page-1' }, locale: 'en'},
      { params: { slug: 'page-1', dynamic: 'page-1' }, locale: 'fr' },
    ],
    // Fallback shouldn't be enabled here or otherwise this route
        // will catch every page, even 404s, and we don't want that
        fallback: false,
      }
      }


export default DynamicPage
