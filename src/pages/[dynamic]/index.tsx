import type {
  GetStaticPaths,
  GetStaticProps,
  /* GetStaticPathsContext, */
  /* GetStaticPropsContext, */
  InferGetStaticPropsType,
} from 'next'

/* istanbul ignore next */
const config = {
  amp: 'hybrid',
}

const DynamicPage = ({
  dynamic,
  locale,
}: Readonly<
  InferGetStaticPropsType<typeof getStaticProps>
>): ComponentReturnType => (
  <main>
    <header>
      <h1>DynamicPage Component {dynamic}</h1>
      <h2>Locale: {locale}</h2>
    </header>

    <section aria-label='quick summary'>
      Summary Text. Visit this for more info:
      https://www.smashingmagazine.com/2020/01/html5-article-section/
    </section>

    <article>
      <header>
        <p>The Header of the article</p>
      </header>
      <section className='introduction'>intro</section>
      <section className='content'>content</section>
      <section className='summary'>summary</section>
      <footer>
        <p>The footer of the article</p>
      </footer>
    </article>
  </main>
)

/*
 * This function gets called at build time on server-side.
 * It may be called again, on a serverless function, if
 * revalidation is enabled and a new request comes in
 */
const getStaticProps: GetStaticProps = async ({ locale }) => {
  /*
   * Call an external API endpoint to get posts.
   * You can use any data fetching library
   * const res = await fetch(`https://.../posts?locale=${locale}`)
   * const posts = await res.json()
   */

  const response = await Promise.resolve('Hello')

  return {
    props: {
      dynamic: response,
      locale,
    },
    /*
     * Next.js will attempt to re-generate the page:
     * - When a request comes in
     * - At most once every second
     * revalidate: 1, // In seconds
     */
  }
}

/**
 * see: https://github.com/vercel/commerce/blob/master/pages/%5B...pages%5D.tsx
 * combine paths with locales so that all pages can be pre-rendered
 */
const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  await Promise.resolve('async needs await')
  const numberOfPages = 10
  // the paths would come from an api, but to have something to work with:
  let paths = Array.from({ length: numberOfPages }, (_, index) => ({
    params: {
      dynamic: `page-${index}`,
    },
  }))

  if (locales) {
    const pathsI18n = paths.map(path =>
      locales.map(locale => ({ params: path.params, locale }))
    )
    // not sure how to rewrite this so for now...
    // eslint-disable-next-line unicorn/no-array-reduce
    paths = pathsI18n.reduce((a, v) => [...a, ...v], paths)
  }

  return {
    paths,
    /*
     * paths: [
     *   { params: { dynamic: 'page-1' } },
     *   { params: { dynamic: 'page-1' }, locale: 'en' },
     *   { params: { dynamic: 'page-1' }, locale: 'fr' },
     * ],
     */
    /*
     * Fallback shouldn't be enabled here or otherwise this route
     * will catch every page, even 404s, and we don't want that
     */
    fallback: false,
  }
}

export { config, getStaticPaths, getStaticProps }
export default DynamicPage
