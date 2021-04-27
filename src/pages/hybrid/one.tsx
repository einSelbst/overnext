import { useAmp } from 'next/amp'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const config = {
  amp: 'hybrid',
}

const One = (): JSX.Element => {
  const isAmp = useAmp()
  const router = useRouter()
  const { locale } = router

  return (
    <main>
      <h1>One</h1>
      {isAmp && <p>I'm AMP!</p>}
      <p>
        {isAmp ? (
          <Link href='/hybrid/one'>
            <a>View Non-AMP Version</a>
          </Link>
        ) : (
          <Link href='/hybrid/one?amp=1'>view amp version via Link</Link>
        )}
      </p>
      <p>
        {isAmp ? (
          <Link href='/hybrid/one'>
            <a>View Non-AMP Version</a>
          </Link>
        ) : (
          <a
            href={locale ? `/${locale}/hybrid/one?amp=1` : '/hybrid/one?amp=1'}
          >
            view {locale} amp version via a
          </a>
        )}
      </p>
    </main>
  )
}

export default One
