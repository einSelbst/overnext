import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

const DynamicPage = (props: { dynamic: string}): JSX.Element => {
  return (
    <div>
      <h1>DynamicPage Component {props.dynamic}</h1>
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
    paths: Array.from({length: 10}, (_, index) => ({
      params: {
        dynamic: `page-${index}`,
      },
    })),
    fallback: false,
  }
}

export default DynamicPage
