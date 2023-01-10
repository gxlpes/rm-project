import type { AppProps } from 'next/app';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import '../styles/globals.css';

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
