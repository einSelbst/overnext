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
      <Html>
        <Head>
          <link href='https://fonts.gstatic.com' rel='preconnect' />
          {/* the preload is automatically added by next.js or one of my linter rules */}
          {/* <link
              as='style'
              href='https://fonts.googleapis.com/css2?family=Inter&family=Sansita&display=swap'
              rel='preload'
              /> */}
          <link
            href='https://fonts.googleapis.com/css2?family=Inter&family=Sansita&display=swap'
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
