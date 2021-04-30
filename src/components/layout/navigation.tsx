import Link from 'next/link'

export const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href='/'>
        <a>Home</a>
      </Link>{' '}
      |{' '}
      <Link href='/dog'>
        <a>Dog</a>
      </Link>{' '}
      |{' '}
      <Link href='/page-1'>
        <a>Page 1</a>
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
  )
}
