import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
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
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default _document
