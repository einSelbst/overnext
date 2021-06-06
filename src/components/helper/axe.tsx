import * as React from 'react'
import * as ReactDOM from 'react-dom'

/**
 * Configuration for Axe. Unfortunately I have no clue how the default config looks.
 *
 * @see {@link https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure}
 */
const axeConfig = {
  /*
   *   rules: [
   *   { id: 'heading-order', enabled: true },
   *   { id: 'label-title-only', enabled: true },
   *   { id: 'link-in-text-block', enabled: true },
   *   { id: 'region', enabled: true },
   *   { id: 'skip-link', enabled: true },
   *   { id: 'help-same-as-label', enabled: true },
   *   ],
   */
}

const Axe = (): null => {
  if (process.env.NODE_ENV === 'development') {
    const timingDelayInMilliseconds = 1000
    // eslint-disable-next-line no-void
    void (async () => {
      try {
        const { default: axe } = await import('@axe-core/react')
        await axe(React, ReactDOM, timingDelayInMilliseconds, axeConfig)
      } catch {
        /* console.log('axe not ready yet') */
      }
    })()
  }
  // eslint-disable-next-line unicorn/no-null
  return null
}

export default Axe
