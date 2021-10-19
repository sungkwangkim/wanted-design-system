/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-document-import-in-page */
import Document, { DocumentContext, DocumentProps } from 'next/document'

import { createGenerateId, JssProvider, SheetsRegistry } from '@wds/ui'

export default class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const registry = new SheetsRegistry()
    const generateId = createGenerateId()
    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <JssProvider registry={registry} generateId={generateId}>
              <App {...props} />
            </JssProvider>
          ),
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ),
    }
  }
}
