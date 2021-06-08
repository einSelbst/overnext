import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeChanger = (): ComponentReturnType => {
  type ThemeType = ReturnType<typeof useTheme>

  const { theme, setTheme }: ThemeType = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  /*
   * ToDo [>1.2]: refactor to use nextjs default way of rendering only on client
   * @see {@link https://github.com/vercel/next.js/blob/4e9c5eeae075e2cba60bab0a522cd43ce9662c5c/examples/progressive-render/pages/index.js}
   */
  // eslint-disable-next-line unicorn/no-null
  if (!mounted) return null

  // because jsx-no-bind, for performance reasons I want reusable callback functions
  function setThemeLight() {
    setTheme('light')
  }

  function setThemeDark() {
    setTheme('dark')
  }

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      The current theme is: {theme}
      <br />
      <button onClick={setThemeLight} type='button'>
        Light Mode
      </button>
      <br />
      <button onClick={setThemeDark} type='button'>
        Dark Mode
      </button>
      <br />
      <button
        className='mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md'
        onClick={toggleTheme}
        type='button'
      >
        Change Theme
      </button>
    </div>
  )
}

export default ThemeChanger
