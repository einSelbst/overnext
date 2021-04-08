import Link from 'next/link'
import Footer from 'components/layout/footer'

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

      <Footer />
    </>
  )
}

export default LegalLayout
