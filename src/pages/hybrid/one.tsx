import type { OverNextComponentType } from 'next'
import { useAmp } from 'next/amp'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
// eslint-disable-next-line import/no-unassigned-import
import type {} from 'typed-query-selector'

/* istanbul ignore next */
const config = {
  amp: 'hybrid',
}

/**
 * Using 'normal' props instead of prop-types package
 * @see navigation.tsx for an example with prop-types
 */
type Props = {
  readonly success: boolean
  readonly error: boolean
}

/**
 * HTML entities should be escaped
 */
const One = (props: Props): OverNextComponentType => {
  const isAmp = useAmp()
  const router = useRouter()
  const { locale } = router
  const toggleAnchorReference = useRef<HTMLAnchorElement>(null)

  // eslint-disable-next-line max-statements
  useEffect(() => {
    /* console.log('useEffect default') */

    const linkCanonical = document.querySelector('link[rel="canonical"]')
    const linkAmp = document.querySelector('link[rel="amphtml"]')
    const toggleLink = document.querySelector('a#toggleLink')
    const ampLink = document.querySelector('a#ampLink')

    if (linkCanonical === null && linkAmp === null) return

    const link = linkCanonical === null ? linkAmp : linkCanonical
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    if (ampLink !== null) ampLink.href = link!.href
    if (toggleLink !== null) toggleLink.textContent = link!.href
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
    if (toggleAnchorReference.current !== null) {
        toggleAnchorReference.current.href = link === null ? '/' : link.href
        toggleAnchorReference.current.textContent = link === null ? 'broken' : link.href
    }
    /* console.info(router) */
  }, []) // the empty array will call useEffect only for first time while loading the component

  return (
    <main>
      <h1>One</h1>
      <p>
        I&apos;m a hybrid page and I&apos;m available in multiple languages!
      </p>
      {isAmp && <p>Now I am AMP! (escaping entity is difficult here)</p>}

      {/* @see https://github.com/sindresorhus/react-extras#choose */}
      <div className='h-8 w-8'>
        {(() => {
          if (props.success) {
            return <span>{props.success}</span>
          }

          if (props.error) {
            return <span>{props.error}</span>
          }

          return <span>�</span>
        })()}
      </div>

      <p>
        {isAmp ? (
          <Link href='/hybrid/one'>
            <a>View Non-AMP Version</a>
          </Link>
        ) : (
          <span>
            <Link data-id='ampLink' href='/hybrid/one?amp=1'>
              <a id='toggleLink'>...Loading</a>
            </Link>
            <br />
            <a href='foo' id='toggleAnchor'>
              ...Loading
            </a>
          </span>
        )}
      </p>
      <p>
        {isAmp ? (
          <Link href='/hybrid/one'>
            <a>View Non-AMP Version</a>
          </Link>
        ) : (
          <a href={`/${locale ?? 'en'}/hybrid/one?amp=1`}>
            view {locale} amp version via a
          </a>
        )}
      </p>
    </main>
  )
}
export { config }
export default One
