import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from 'next/document'

class _document extends Document {
  static async getInitialProps (
    context: DocumentContext
  ): Promise<DocumentInitialProps> {
    return Document.getInitialProps(context)
  }

  // I would prefer putting the font declarations in _app.jsx as they wouldn't push down the other meta tags
  render (): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            rel='preload'
            href='https://fonts.googleapis.com/css2?family=Inter&family=Sansita+Swashed&display=swap'
            as='style'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter&family=Sansita+Swashed&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default _document
