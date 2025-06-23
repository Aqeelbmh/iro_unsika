"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <title>UNSIKA International Relation Office | Universitas Singaperbangsa Karawang</title>
        <meta name="description" content="Official website of the International Relation Office, Universitas Singaperbangsa Karawang (UNSIKA). Programs, news, partnerships, and contact information." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <LanguageProvider>
          {/* Global Navbar */}
          <Navbar />
          {/* Main Content with Page Transition */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.main
              key={pathname}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {children}
            </motion.main>
          </AnimatePresence>
          {/* Global Footer */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
