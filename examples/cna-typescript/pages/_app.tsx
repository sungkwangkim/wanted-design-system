import '../styles/globals.css'

import * as React from 'react'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const style = document.getElementById('server-side-styles')
    style?.parentNode.removeChild(style)
  }, [])
  return <Component {...pageProps} />
}
export default MyApp
