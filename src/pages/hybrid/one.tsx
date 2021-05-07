import { OverNextComponentType } from 'next'
import { useAmp } from 'next/amp'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

/* istanbul ignore next */
export const config = {
  amp: 'hybrid',
}

/**
 * Using 'normal' props instead of prop-types package
 * @see navigation.tsx for an example with prop-types
 */
type Props = {
  success: boolean
  error: boolean
}

/**
 * HTML entities should be escaped
 */
/* const One = (props: Props): JSX.Element => { */
const One = (props: Props): OverNextComponentType => {
  useEffect(() => {
    console.log('useEffect default')

    const linkCanonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement
    const linkAmp = document.querySelector(
      'link[rel="amphtml"]'
    ) as HTMLLinkElement
    const toggleAnchor = document.querySelector(
      '#toggleAnchor'
    ) as HTMLAnchorElement
    const toggleLink = document.querySelector(
      '#toggleLink'
    ) as HTMLAnchorElement
    const ampLink = document.querySelector('#ampLink') as HTMLAnchorElement

    const link = linkCanonical ? linkCanonical : linkAmp

    if (ampLink) ampLink.href = link.href
    if (toggleLink) toggleLink.textContent = link.href
    if (toggleAnchor) {
      toggleAnchor.href = link.href
      toggleAnchor.textContent = link.href
    }
    console.info(router)
  })
  useEffect(() => {
    console.log('useEffect empty array ')
  }, []) // the empty array will call useEffect only for first time while loading the component

  const isAmp = useAmp()
  const router = useRouter()
  const { locale } = router

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
            <a id='toggleAnchor' href='foo'>
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
