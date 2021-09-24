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
  const toggleLinkReference = useRef<HTMLAnchorElement>(null)

  // eslint-disable-next-line max-statements
  useEffect(() => {
    // get the AMP or canonical links from the document header
    const linkCanonical = document.querySelector('link[rel="canonical"]')
    const linkAmp = document.querySelector('link[rel="amphtml"]')
    if (linkCanonical === null && linkAmp === null) return

    // this is the non-working assignment
    const ampLink = document.querySelector('a#ampLink')
    const link = linkCanonical === null ? linkAmp : linkCanonical

    if (link !== null) {
      if (ampLink !== null) ampLink.href = link.href
      if (toggleLinkReference.current !== null)
        toggleLinkReference.current.textContent = link.href
      // this is the functional/working assignment
      if (toggleAnchorReference.current !== null) {
        toggleAnchorReference.current.href = link.href
        toggleAnchorReference.current.textContent = link.href
      }
    }
  }, []) // the array of dependencies on whom useEffect depends
  // empty array means useEffect is only called for first time when component is loading/ rendered

  return (
    <div>
      <h1>One</h1>
      <p>
        I&apos;m a hybrid page and I&apos;m available in multiple languages!
      </p>
      {isAmp && <p>Now I&apos;am AMP! (escaping entity is difficult here)</p>}

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

      <div>
        {isAmp ? (
          <>
            <p>On AMP pages I can make use of the LINK element</p>
            <Link href='/hybrid/one'>
              <a>View Non-AMP Version</a>
            </Link>
          </>
        ) : (
          <>
            <p>This doesn&apos;t work because LINK is locally routed</p>
            <Link data-id='ampLink' href='/hybrid/one?amp=1'>
              <a ref={toggleLinkReference}>...Loading</a>
            </Link>
            <br />
            <br />
            <p>This is ok because a full reload is triggered</p>
            <a ref={toggleAnchorReference} href='foo'>
              ...Loading
            </a>
            <br />
            <br />
            <p>
              This would also be ok but only works locally as for the different
              AMP links in production
            </p>
            <a href={`/${locale ?? 'en'}/hybrid/one?amp=1`}>
              view {locale} amp version via anchor link
            </a>
          </>
        )}
      </div>
    </div>
  )
}
export { config }

export default One
