import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Printer Technical Support - Professional Service for HP, Brother, Canon and other brands printers",
    description: "Expert troubleshooting and technical solutions for HP, Brother, Canon, and all major printer brands.",
};

import { ChatProvider } from "@/components/ChatProvider";
import ChatWidget from "@/components/ChatWidget";

// ... imports




export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </head>
            <body className={`${inter.className} font-professional text-gray-700 bg-soft-white`}>
                <ChatProvider>
                    <Header />
                    {children}
                    <Footer />
                    <ChatWidget />
                </ChatProvider>

                {/* External Scripts */}
                {/* <Script src="https://sites.super.myninja.ai/_assets/ninja-daytona-script.js" strategy="lazyOnload" /> */}
            </body>
        </html>
    );
}
