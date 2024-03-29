import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import ThemeChanger from 'components/layout/theme-changer'
import ENV from 'config/env.config'
import LegalLayout from 'layouts/legal.layout'
import type { NextLayoutPage } from 'typings/layout'

const _Topic: NextLayoutPage = (): JSX.Element => {
  const router = useRouter()
  const { locale, locales, query } = router
  const { topic } = query
  // NextSeo doesn't want a string array, which 'topic' might be
  const firstTopic: string = Array.isArray(topic) ? topic[0] : topic ?? ''

  const imageDefaultHeight = 600,
    imageDefaultWidth = 800

  return (
    <>
      <NextSeo
        canonical={`https://overnext.vercel.app/legal/${firstTopic}`}
        description='A legal topic.'
        languageAlternates={locales?.map((loc: string) => ({
          href: `https://overnext.vercel.app/${loc}/legal/${firstTopic}`,
          hrefLang: loc,
        }))}
        openGraph={{
          description: 'A legal topic',
          images: [
            {
              alt: firstTopic,
              height: imageDefaultHeight,
              url: 'https://via.placeholder.com/728x90.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide',
              width: imageDefaultWidth,
            },
          ],
          title: firstTopic,
          type: 'website',
        }}
        title={firstTopic}
      />
      <main className='bg-white dark:bg-black'>
        <header>
          <h1>Legal - {topic}</h1>
        </header>
        <section aria-label='quick summary'>
          Summary Text. Visit this for more info:
          https://www.smashingmagazine.com/2020/01/html5-article-section/
        </section>

        <article>
          <header>
            <p>The Header of the article</p>
            <p>Main URL for this deployment is {ENV.SITE_URL}</p>
          </header>
          <section className='introduction' />
          <section className='content'>Content goes here</section>
          <section className='summary' />
          <footer>
            <p>The footer of the article</p>
          </footer>
        </article>
        <span>You speak {locale}</span>
        <p>This page is also available in the following languages: {locales}</p>
        <ThemeChanger />
      </main>
    </>
  )
}

_Topic.Layout = LegalLayout

export default _Topic
