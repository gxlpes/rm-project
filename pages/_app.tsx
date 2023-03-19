import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { GetServerSidePropsContext } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { extendedApi } from '../src/app/services/extendedApi';
import { store } from '../src/app/store/store';
import Layout from '../src/components/layout/Layout';
import { SearchContextProvider } from '../src/contexts/SearchContext';
import '../styles/global/globals.css';
import * as cookie from 'cookie'


export async function getServerSideProps(context: GetServerSidePropsContext) {
  const parsedCookies = context.req.headers.cookie
  console.log(parsedCookies)

  return {
    props: {
      data: parsedCookies,
    }
  }
}

function MyApp({ Component, pageProps }: AppProps, { data }: any) {
  console.log(data, "cookies")
  return (
    <>
      <ApiProvider api={extendedApi}>
        <Provider store={store}>
          <Layout>
            <>
              <Head>
                <title>Rick and Morty Wiki</title>
                <meta name="description" content="NextJS Events" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
              </Head>
            </>
            <SearchContextProvider>
              <Component {...pageProps} />
            </SearchContextProvider>
          </Layout>
        </Provider>
      </ApiProvider>
    </>
  )

}

export default MyApp
