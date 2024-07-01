import '@/styles/global.css'
import type { AppProps } from 'next/app'
import React, { Suspense } from 'react';
import Layout  from '@/components/layout';
import { ContainerCustom } from '@/styles/global';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout className={inter.className}>
      <ContainerCustom maxWidth={false}>
        <Component className={inter.className} {...pageProps} />
      </ContainerCustom>
      <SpeedInsights/>
    </Layout>
  )
}
