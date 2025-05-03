import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import SessionProvider from "@/providers/SessionProvider";

import { ToastContainer } from "react-toastify";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import TopNavigation from "../components/TopNavigation";

import "./globals.css";
import { auth } from "@/auth";
config.autoAddCss = false

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JustJelly",
  description: "Aggregated search engine for Jellyfin servers",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  const today = new Date();
  
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider session={session}>
          <TopNavigation />
          {children}
        </SessionProvider>
        <footer className="row-start-3 grid gap-4 items-center justify-center p-4 text-center">
          <a href="https://github.com/Bezilon/justjelly" target="_blank" className="font-bold text-sm">&copy; {today.getFullYear()} JustJelly</a>
          <a href="https://www.flaticon.com/free-icons/jellyfish" target="_blank" title="jellyfish icons" className="text-xs">Jellyfish icon created by Freepik - Flaticon</a>
        </footer>
        <ToastContainer autoClose={3000} closeOnClick={true} theme={'dark'}/>
      </body>
    </html>
  );
}
