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
  title: "Lezin Sajid | Product Manager · AI-Fluent · Bengaluru",
  description: "Product-oriented problem solver with a technical foundation. Shipped 3 products from problem discovery through deployment. Anthropic certified in AI Fluency and Prompt Engineering. Seeking Associate PM, Product Analyst, and AI Product roles.",
  keywords: ["Associate Product Manager", "Product Analyst", "Product Operations", "AI Product", "Business Analyst", "AI Fluency", "Anthropic Certified", "Prompt Engineering", "SaaS", "Product Thinking"],
  authors: [{ name: "Lezin Sajid" }],
  creator: "Lezin Sajid",
  publisher: "Lezin Sajid",
  metadataBase: new URL("https://lezinsajid.com"),
  openGraph: {
    title: "Lezin Sajid | Product Manager · AI-Fluent · Bengaluru",
    description: "Product-oriented problem solver with a technical foundation. Shipped 3 products from problem discovery through deployment. Anthropic certified. Seeking Associate PM and Product Analyst roles.",
    type: "website",
    locale: "en_US",
    siteName: "Lezin Sajid",
    url: "https://lezinsajid.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lezin Sajid | Product Manager · AI-Fluent · Bengaluru",
    description: "Product-oriented problem solver with a technical foundation. Shipped 3 products from problem discovery through deployment. Anthropic certified. Seeking Associate PM and Product Analyst roles.",
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
