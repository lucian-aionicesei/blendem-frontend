import Header from '@/components/Header'
// import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const categories = ['documentary', 'industry', 'festival', 'culture', 'nature', 'sports', 'broadcast', 'creative']

  return (
    <>
    <Header/>
    <Component {...pageProps} />
    </>
  )
}
