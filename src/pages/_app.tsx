import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import '../styles/global.scss'

import { Provider as NextAuthProvider } from 'next-auth/client'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

const initialOptions = {
  "client-id": "Ac2EoZjolp9AI0Sve0YALHT7gxSioSSJzWN0AeIgPg8c_ZZXfpNNURNtZ3f3cJMnJEekIt8IRx2PQFrf",
  currency: "BRL",
  intent: "capture"
}

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <NextAuthProvider session={pageProps.session}>
      <PayPalScriptProvider options={initialOptions}>
        <Header />
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  )
}

export default MyApp
