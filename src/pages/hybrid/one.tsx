import { useAmp } from 'next/amp'
import Link from 'next/link'
import { useRouter } from 'next/router'

/* istanbul ignore next */
export const config = {
  amp: 'hybrid',
}

/**
 * HTML entities should be escaped
 */
const One = (): JSX.Element => {
  const isAmp = useAmp()
  const router = useRouter()
  const { locale } = router

  return (
    <main>
      <h1>One</h1>
      <p>I&apos;m maybe AMP!</p>
      {isAmp && <p>I am AMP! (escaping entity is difficult here)</p>}
      <p>
        {isAmp ? (
          <Link href='/hybrid/one'>
            <a>View Non-AMP Version</a>
          </Link>
        ) : process.env.PRODUCTION ? (
          <Link href='/hybrid/one.amp'>view server amp version via Link</Link>
        ) : (
          <Link href='/hybrid/one?amp=1'>view local amp version via Link</Link>
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
