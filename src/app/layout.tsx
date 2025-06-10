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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${comfortaa.className} antialiased`}>

        <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(26,26,28,0.5)] backdrop-blur-md border-b-2 border-zinc-700 shadow-md">
          <Navbar />
        </header>

        <main className="mx-auto relative">
          {children}
        </main>

      </body>
    </html>
  );
}
