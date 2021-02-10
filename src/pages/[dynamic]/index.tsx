import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

const DynamicPage = (): JSX.Element => {
  return (
    <div>
      <h1>DynamicPage Component</h1>
    </div>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      dynamic: 'hello',
    },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    /* paths: [...Array<T>(10000)].map((_, index) => ({ */
    paths: Array.from({length: 1000}, ((_, index) => ({
      params: {
        dynamic: `page-${index}`,
      },
    }))),
    fallback: false,
  }
}

export default DynamicPage
