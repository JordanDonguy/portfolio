import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "../styles/globals.css";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import Navbar from "./components/Navbar";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jordan Donguy — Portfolio",
  description: "Full-stack developer portfolio website",
  icons: {
    icon: "/icon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
   const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>

      <body className={`${comfortaa.className} antialiased overflow-hidden`}>

        <NextIntlClientProvider>
          <header className="fixed w-screen h-16 top-0 left-0 right-0 z-50">
            <Navbar />
          </header>
          <main className="w-full h-full">
            {children}
          </main>
        </NextIntlClientProvider>

      </body>
    </html>
  );
}
