import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsApp/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Venner Infotech | Premium IT Solutions & Services",
  description: "Venner Infotech provides cutting-edge IT solutions, software development, and digital transformation services to elevate your business.",
  keywords: ["IT Company", "Software Development", "Web Development", "Digital Transformation", "Venner Infotech"],
  authors: [{ name: "Venner Infotech" }],
  creator: "Venner Infotech",
  publisher: "Venner Infotech",
  openGraph: {
    title: "Venner Infotech | Premium IT Solutions & Services",
    description: "Cutting-edge IT solutions, software development, and digital transformation services.",
    url: "https://vennerinfotech.com",
    siteName: "Venner Infotech",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
