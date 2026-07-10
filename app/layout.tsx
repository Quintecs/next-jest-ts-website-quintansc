import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/components/site/header";
import Footer from "@/components/site/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Quintec — Tecnologia & Soluções Digitais",
    template: "%s | Quintec",
  },
  description:
    "Quintec — Desenvolvimento de soluções digitais modernas, performáticas e acessíveis com React, Next.js e Node.js.",
  keywords: [
    "Quintec",
    "Desenvolvimento",
    "Front-end",
    "TypeScript",
    "React",
    "Next.js",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex flex-1 flex-col items-center" data-testid="layout">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === "production" ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  );
}
