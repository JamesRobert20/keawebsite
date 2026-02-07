import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSerif = DM_Serif_Display({
    variable: "--font-dm-serif",
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
    variable: "--font-jakarta",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Kea Company Ltd | Tanzanian Crop Supplier - Farm to Market",
    description: "Kea Company Ltd connects Tanzanian farmers directly to grocery chains, restaurants, and businesses. We supply quality maize, beans, rice, and cassava with reliable delivery across East Africa.",
    keywords: "Tanzania crops supplier, maize wholesale Tanzania, beans supplier, rice supplier, cassava, agricultural products Tanzania, Dar es Salaam, East Africa, farm to market, B2B crops",
    openGraph: {
        title: "Kea Company Ltd | Farm to Market Crop Supply",
        description: "Connecting Tanzanian farmers to businesses. Quality maize, beans, rice & cassava supplied directly to grocery chains and restaurants.",
        type: "website",
        locale: "en_US",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${dmSerif.variable} ${jakarta.variable} antialiased min-h-screen flex flex-col bg-white`}
            >
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
