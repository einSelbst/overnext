import { NextSeo } from 'next-seo'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  // TODO [>1.2]: refactor to use nextjs default way of rendering only on client
  // eslint-disable-next-line unicorn/no-null
  if (!mounted) return null

  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      <button
        className='mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md'
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}
      >
        Change Theme
      </button>
    </div>
  )
}

const _Topic = (): JSX.Element => {
  const router = useRouter()
  const { locale, locales, query } = router
  const { topic } = query
  // NextSeo doesn't want a string array, which 'topic' might be
  const firstTopic: string | undefined = Array.isArray(topic) ? topic[0] : topic

  return (
    <>
      <NextSeo
        title={firstTopic}
        description='A legal topic.'
        canonical='https://feehikel.vercel.app'
        languageAlternates={locales?.map((loc: string) => {
          return {
            hrefLang: loc,
            href: `https://feehikel.vercel.app/${loc}/legal/${
              firstTopic || ''
            }`,
          }
        })}
        openGraph={{
          type: 'website',
          title: firstTopic,
          description: 'A legal topic',
          images: [
            {
              url:
                'https://via.placeholder.com/728x90.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide',
              width: 800,
              height: 600,
              alt: firstTopic,
            },
          ],
        }}
      />
      <main className='bg-white dark:bg-black'>
        <h1>Legal - {topic}</h1>
        <span>You speak {locale}</span>
        <p>This page is also available in the following languages: {locales}</p>
        <ThemeChanger />
      </main>
    </>
  )
}

export default _Topic
