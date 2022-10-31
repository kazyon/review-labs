import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div> <Component {...pageProps} /> <footer>
    <p>2022 Dragos</p>
  </footer>
  </div>
}



export default MyApp
 