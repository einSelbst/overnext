import LegalLayout from 'layouts/legal.layout'
import Link from 'next/link'

const Legal = (): JSX.Element => (
  <>
    <h1>Legal pages</h1>
    <ul>
      <li>
        <Link href='/legal/privacy'>
          <a data-cy='privacy-link'>Privacy</a>
        </Link>
      </li>
      <li>
        <Link href='/legal/imprint'>
          <a data-cy='imprint-link'>Imprint</a>
        </Link>
      </li>
      <li>
        <Link href='/legal/about'>
          <a data-cy='about-link'>About</a>
        </Link>
      </li>
    </ul>
  </>
)

Legal.Layout = LegalLayout

export default Legal
