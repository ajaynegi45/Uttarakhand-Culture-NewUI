import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import localFont from "next/font/local";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Toaster } from "sonner";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { SessionProvider } from "next-auth/react";
// import { SpeedInsights } from '@vercel/speed-insights/next';

const customFont = localFont({
  src: "../font/customFont.otf",
  variable: "--myCustomFont",
});

export const metadata: Metadata = {
  title:
    "Uttarakhand Culture - Explore Devbhoomi's Heritage, Traditions, and Natural Beauty",
  description:
    "Explore the rich cultural heritage of Uttarakhand, Devbhoomi's vibrant festivals, traditions, folklore, and breathtaking landscapes. Join our mission to preserve and celebrate the heritage of Manaskhand and Kedarkhand for future generations.",
  keywords:
    "Uttarakhand, culture, Devbhoomi, Uttarakhand culture, Pahadi culture, Uttarakhand heritage, Manaskhand, Kedarkhand, traditions, festivals, folk music, folk dances, digital preservation, Pahad, Pahadi, Pahadi traditions, Garhwali, Kumaoni, Himalayan culture, Uttarakhand tourism, cultural preservation, spiritual Uttarakhand, pilgrimage, Uttarakhand cuisine, Uttarakhand art, Uttarakhand history, Nanda Devi, Chhota Kailash, Ganga, Yamuna, Himalayan rivers, Uttarakhand flora fauna, mountain culture",
  openGraph: {
    title:
      "Uttarakhand Culture - Explore Devbhoomi's Heritage, Traditions, and Natural Beauty",
    description:
      "Discover Uttarakhand's cultural heritage, festivals, traditions, folklore, and stunning natural beauty. Join our mission to digitally preserve and celebrate the vibrant legacy of Devbhoomi for future generations.",
    url: "https://uttarakhand-culture.vercel.app",
    siteName: "Uttarakhand Culture",
    images: [
      {
        url: "/SEOIMAGE.webp",
        alt: "Cultural Heritage of Uttarakhand - Traditions, Festivals, and Natural Beauty",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://uttarakhand-culture.vercel.app",
    creator: "@UttarakhandCulture",
    title:
      "Uttarakhand Culture - Explore Devbhoomi's Heritage, Traditions, and Natural Beauty",
    description:
      "Discover Uttarakhand's cultural legacy, rich history, festivals, and natural beauty. Help us preserve the traditions of Devbhoomi for future generations.",
    images: "/SEOIMAGE.webp",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const h = headers();
  const pathname = h.get("x-current-path");

  if (session) {
    if (!session.user?.emailVerified) {
      if (!pathname!.includes("/auth")) {
        redirect("/auth/verify");
      }
    }
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <SessionProvider>
        <body className={customFont.className}>
          <main>
            <Navbar />
            {children}
            {/*<SpeedInsights />*/}
            <Toaster position="bottom-right" richColors={true} closeButton={true} />
            <Footer />
          </main>
        </body>
      </SessionProvider>
    </html>
  );
}
