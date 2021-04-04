import Link from 'next/link'

const LegalLayout = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <>
      <header>
        <nav>
          <Link href='/'>
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href='/legal/about'>
            <a>About</a>
          </Link>{' '}
          |{' '}
          <Link href='/legal/privacy'>
            <a>Privacy</a>
          </Link>{' '}
          |{' '}
          <Link href='/legal/contact'>
            <a>Contact</a>
          </Link>
        </nav>
      </header>

      {children}

      <aside>
        <p>Something which is supposed to be on the side</p>
      </aside>

      <footer>
        <p>©Copyright 2050 by nobody. All rights reversed.</p>
      </footer>
    </>
  )
}

export default LegalLayout
