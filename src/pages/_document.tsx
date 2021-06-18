import type { DocumentContext, DocumentInitialProps } from 'next/document'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class _document extends Document {
  static async getInitialProps(
    context: DocumentContext
  ): Promise<DocumentInitialProps> {
    return Document.getInitialProps(context)
  }

  // I would prefer putting the font declarations in _app.jsx as they wouldn't push down the other meta tags
  static render(): JSX.Element {
    return (
      <Html prefix='og: http://ogp.me/ns#'>
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
