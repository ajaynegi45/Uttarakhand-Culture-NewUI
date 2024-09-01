import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import localFont from "next/font/local";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const customFont = localFont(
    {
      src: "../font/customFont.otf",
      variable: "--myCustomFont",
    }
)

export const metadata: Metadata = {
  title: "Uttarakhand Culture",
  description: "Our aim is to ensure that this invaluable heritage is passed down to future generations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={customFont.className} >
    <main>
        <Navbar/>
        {children}
        <SpeedInsights />
        <Footer/>
    </main>
    </body>
    </html>
  );
}
