import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import localFont from "next/font/local";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
// import { SpeedInsights } from '@vercel/speed-insights/next';

const customFont = localFont({
    src: "../font/customFont.otf",
    variable: "--myCustomFont",
});

export const metadata: Metadata = {
    title: "Uttarakhand Culture",
    description: "Our aim is to ensure that this invaluable heritage is passed down to future generations.",
    keywords: "Uttarakhand, culture, heritage, festivals, traditions, digital preservation",
    openGraph: {
        title: "Uttarakhand Culture",
        description: "Explore the rich cultural heritage of Uttarakhand.",
        url: "https://uttarakhand-culture.vercel.app", 
        siteName: "Uttarakhand Culture",
        images: [
            {
                url: "https://uttarakhand-culture.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FheroMapImage.fc8fad10.webp&w=828&q=75", 
                width: 800,
                height: 600,
                alt: "Cultural Heritage of Uttarakhand",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={customFont.className}>
                <main>
                <Navbar/>
                  {children}
                  {/*<SpeedInsights />*/}
                <Footer/>
                </main>
            </body>
        </html>
    );
}
