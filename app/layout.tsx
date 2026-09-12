import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteAnalytics from "@/components/site/site-analytics";
import CookieConsent from "@/components/site/cookie-consent";

import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import WhatsAppFloatingButton from "@/components/site/whatsapp-floating-button";
import { SiteStructuredData } from "@/components/site/structured-data";
import { SITE_DESCRIPTION, SITE_ORIGIN, SITE_TITLE } from "@/lib/seo";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });


export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  applicationName: "Quintec",
  title: {
    default: SITE_TITLE,
    template: "%s | Quintec",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Quintec",
    "Desenvolvimento",
    "Front-end",
    "TypeScript",
    "React",
    "Next.js",
  ],
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={inter.variable}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-screen flex-col font-sans">
        <SiteStructuredData />
        <a href="#conteudo" className="sr-only fixed left-4 top-4 z-50 rounded-lg bg-accent p-4 text-background focus:not-sr-only">Pular para o conteúdo</a>
        <Header />
        <main id="conteudo" tabIndex={-1} className="flex flex-1 flex-col items-center" data-testid="layout">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
        <CookieConsent />
        {process.env.NODE_ENV === "production" ? (
          <>
            <SiteAnalytics />
          </>
        ) : null}
      </body>
    </html>
  );
}
