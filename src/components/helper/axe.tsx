/* import axe from '@axe-core/react' */
import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Axe = (): JSX.Element => {
  /* void axe(React, ReactDOM, 1000, {}) */

  if (process.env.NODE_ENV === 'development') {
    void (async () => {
      try {
        const { default: axe } = await import('@axe-core/react')
        void axe(React, ReactDOM, 1000, {})
        console.log('axe is ready')
      } catch {
        // console.log(err);
        console.log('axe not ready yet')
      }
    })()
  }

  console.log('Im here')
  return <span>Yeah, AXE is watching for A11Y issues, check your console</span>
}

export default Axe
