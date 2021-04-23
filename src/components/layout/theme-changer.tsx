import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeChanger = (): JSX.Element | null => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  // ToDo [>1.2]: refactor to use nextjs default way of rendering only on client
  // @see {@link https://github.com/vercel/next.js/blob/4e9c5eeae075e2cba60bab0a522cd43ce9662c5c/examples/progressive-render/pages/index.js}
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

export default ThemeChanger
