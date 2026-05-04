import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NONCHALLAN - Scooter Rentals",
  description: "Premium scooter rental platform. Ride the future effortlessly.",
  keywords: ["scooter rental", "electric scooter", "urban mobility", "NONCHALLAN"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className={`${inter.className} min-h-full bg-white text-gray-900`}>
        <div className="sticky top-0 z-[60]">
          <AnnouncementBar />
        </div>
        <div className="w-full px-6 md:px-10 [&>nav]:top-10 md:[&>nav]:top-12">
          <Navbar />
          <main className="w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
