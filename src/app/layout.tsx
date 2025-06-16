import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./styles/globals.css";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${comfortaa.className} antialiased`}>

        <header className="fixed w-screen h-16 top-0 left-0 right-0 z-50">
          <Navbar />
        </header>

        <main className="w-full h-full">
          {children}
        </main>

      </body>
    </html>
  );
}
