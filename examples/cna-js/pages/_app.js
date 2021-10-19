import '../styles/globals.css'
import React from 'react'

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const style = document.getElementById('server-side-styles')

    if (style) {
      style.parentNode.removeChild(style)
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
