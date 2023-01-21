import type { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../src/components/layout/Footer';
import Header from '../src/components/layout/Header';
import { SearchContextProvider } from '../src/contexts/SearchContext';
import '../styles/global/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <>
        <Head>
          <title>Rick and Morty Wiki</title>
          <meta name="description" content="NextJS Events" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        </Head>
      </>
      <Header />
      <SearchContextProvider>
        <Component {...pageProps} />
      </SearchContextProvider>
      <Footer />
    </>
  )

}

export default MyApp
