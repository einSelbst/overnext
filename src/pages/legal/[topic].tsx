import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import ThemeChanger from 'components/layout/theme-changer'
import { ENV } from 'config'
import LegalLayout from 'layouts/legal.layout'

const _Topic = (): JSX.Element => {
  const router = useRouter()
  const { locale, locales, query } = router
  const { topic } = query
  // NextSeo doesn't want a string array, which 'topic' might be
  const firstTopic: string = Array.isArray(topic) ? topic[0] : topic ?? ''

  return (
    <>
      <NextSeo
        title={firstTopic}
        description='A legal topic.'
        canonical={`https://overnext.vercel.app/legal/${firstTopic}`}
        languageAlternates={locales?.map((loc: string) => {
          return {
            hrefLang: loc,
            href: `https://overnext.vercel.app/${loc}/legal/${firstTopic}`,
          }
        })}
        openGraph={{
          type: 'website',
          title: firstTopic,
          description: 'A legal topic',
          images: [
            {
              url: 'https://via.placeholder.com/728x90.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide',
              width: 800,
              height: 600,
              alt: firstTopic,
            },
          ],
        }}
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
          <section className='introduction'></section>
          <section className='content'>Content goes here</section>
          <section className='summary'></section>
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
