import type { AppProps } from 'next/app';
import Footer from '../src/components/layout/Footer';
import Header from '../src/components/layout/Header';
import '../styles/global/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )

}

export default MyApp
