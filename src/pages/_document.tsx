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
