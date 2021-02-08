import Link from 'next/link'

const Legal = (): JSX.Element => {
  return (
    <>
      <h1>Legal pages</h1>
      <ul>
        <li>
          <Link href='/legal/privacy'>
            <a href='legal/privacy'>Privacy</a>
          </Link>
        </li>
        <li>
          <Link href='/legal/imprint'>
            <a href='legal/imprint'>Imprint</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a href='about'>About</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Legal
