import {
  GetStaticPaths,
  GetStaticProps,
  /* GetStaticPathsContext, */
  /* GetStaticPropsContext, */
  InferGetStaticPropsType,
} from 'next'
import React from 'react'

export const config = {
  amp: 'hybrid',
}

const DynamicPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
): JSX.Element => {
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

  const res = await Promise.resolve('Hello')

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

/**
 * see: https://github.com/vercel/commerce/blob/master/pages/%5B...pages%5D.tsx
 * combine paths with locales so that all pages can be pre-rendered
 */
export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  await Promise.resolve('async needs await')
  // the paths would come from an api, but to have something to work with:
  let paths = Array.from({ length: 10 }, (_, index) => ({
    params: {
      dynamic: `page-${index}`,
    },
  }))

  if (locales) {
    const pathsI18n = paths.map(path => {
      return locales.map(locale => {
        return { params: path.params, locale: locale }
      })
    })
    paths = pathsI18n.reduce((a, v) => a.concat(v), paths)
  }

  return {
    paths: paths,
    /* paths: [
     *   { params: { dynamic: 'page-1' } },
     *   { params: { dynamic: 'page-1' }, locale: 'en' },
     *   { params: { dynamic: 'page-1' }, locale: 'fr' },
     * ], */
    // Fallback shouldn't be enabled here or otherwise this route
    // will catch every page, even 404s, and we don't want that
    fallback: false,
  }
}

export default DynamicPage
