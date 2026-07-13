import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Lezin Sajid | AI-Fluent Product Builder",
  description: "AI-Fluent Product Builder, Business Analyst, and Strategy & Operations professional. Building products at the intersection of technology, business, and AI. Anthropic certified in AI Fluency and Prompt Engineering.",
  keywords: ["Product Builder", "AI", "Business Analyst", "Strategy", "Operations", "SaaS", "Anthropic Certified", "Prompt Engineering", "Full Stack Developer"],
  authors: [{ name: "Lezin Sajid" }],
  creator: "Lezin Sajid",
  publisher: "Lezin Sajid",
  metadataBase: new URL("https://lezinsajid.com"),
  openGraph: {
    title: "Lezin Sajid | AI-Fluent Product Builder",
    description: "AI-Fluent Product Builder, Business Analyst, and Strategy & Operations professional. Building products at the intersection of technology, business, and AI.",
    type: "website",
    locale: "en_US",
    siteName: "Lezin Sajid",
    url: "https://lezinsajid.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lezin Sajid | AI-Fluent Product Builder",
    description: "AI-Fluent Product Builder, Business Analyst, and Strategy & Operations professional. Building products at the intersection of technology, business, and AI.",
    creator: "@lezinsajid",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
