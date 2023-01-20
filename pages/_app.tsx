import '@/styles/global.css'
import type { AppProps } from 'next/app'
import React from 'react';
import { ReactDOM } from 'react';

import Layout  from '../src/components/layout';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
