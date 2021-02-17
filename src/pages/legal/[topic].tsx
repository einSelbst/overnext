import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

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
  const { topic, locale } = router.query
  return (
    <div className="bg-white dark:bg-black">
      <h2>Legal - {topic}</h2>
      <span>You speak {locale}</span>
      <ThemeChanger />
    </div>
  )
}

export default _Topic
