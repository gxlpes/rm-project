import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { api } from '../src/app/services/auth';
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
      <ApiProvider api={api}>
        <SearchContextProvider>
          <Component {...pageProps} />
        </SearchContextProvider>
      </ApiProvider>
      <Footer />
    </>
  )

}

export default MyApp
