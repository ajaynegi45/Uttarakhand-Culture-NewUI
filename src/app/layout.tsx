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
    title: "Uttarakhand Culture - Explore Devbhoomi's Heritage, Traditions, and Natural Beauty",
    description: "Explore the rich cultural heritage of Uttarakhand, Devbhoomi's vibrant festivals, traditions, folklore, and breathtaking landscapes. Join our mission to preserve and celebrate the heritage of Manaskhand and Kedarkhand for future generations.",
    keywords: "Uttarakhand, culture, Devbhoomi, Uttarakhand culture, Pahadi culture, Uttarakhand heritage, Manaskhand, Kedarkhand, traditions, festivals, folk music, folk dances, digital preservation, Pahad, Pahadi, Pahadi traditions, Garhwali, Kumaoni, Himalayan culture, Uttarakhand tourism, cultural preservation, spiritual Uttarakhand, pilgrimage, Uttarakhand cuisine, Uttarakhand art, Uttarakhand history, Nanda Devi, Chhota Kailash, Ganga, Yamuna, Himalayan rivers, Uttarakhand flora fauna, mountain culture",
    openGraph: {
        title: "Uttarakhand Culture - Explore Devbhoomi's Heritage, Traditions, and Natural Beauty",
        description: "Discover Uttarakhand's cultural heritage, festivals, traditions, folklore, and stunning natural beauty. Join our mission to digitally preserve and celebrate the vibrant legacy of Devbhoomi for future generations.",
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
    twitter:{
        card: "summary_large_image",
        site: "https://uttarakhand-culture.vercel.app",
        creator: "@UttarakhandCulture",
        title: "Uttarakhand Culture - Explore Devbhoomi's Heritage, Traditions, and Natural Beauty",
        description:"Discover Uttarakhand's cultural legacy, rich history, festivals, and natural beauty. Help us preserve the traditions of Devbhoomi for future generations.",
        images: "/SEOIMAGE.webp"
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
