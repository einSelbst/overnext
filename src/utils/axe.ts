import axe from '@axe-core/react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

/**
 * Accessibility helper that outputs to the console on dev and test
 * environment only and client-side only.
 * @see https://github.com/dequelabs/react-axe
 * @see https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react/examples/next.js
 */
const enableAxe = async (): Promise<void> => {
  return await axe(React, ReactDOM, 1000, {})
}

export default enableAxe
