import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Footer from '../src/components/nav/Footer';
import Header from '../src/components/nav/Header';
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
