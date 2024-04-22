import '@/styles/global.css'
import type { AppProps } from 'next/app'
import React from 'react';
import Layout  from '@/components/layout';
import { ContainerCustom } from '@/styles/global';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ContainerCustom maxWidth={false}>
        <Component {...pageProps} />
      </ContainerCustom>
    </Layout>
  )
}
