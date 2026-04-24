import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "Joshua Plaza",
  description: "Revenue and AI Marketing Operations strategist with 6+ years in B2B SaaS, specializing in Marketo-Salesforce ecosystems.",
  keywords: "Joshua Plaza, Marketing Operations, Revenue Ops, Marketo, Salesforce, B2B SaaS, Demand Generation, Marketing Automation, AI Automation, Chicago",
  authors: [{ name: "Joshua Plaza" }],
  creator: "Joshua Plaza",
  publisher: "Joshua Plaza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Joshua Plaza - Marketing Operations",
    description: "Revenue and AI Marketing Operations strategist specializing in Marketo-Salesforce ecosystems.",
    siteName: "Joshua Plaza's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Plaza - Marketing Operations",
    description: "Revenue and AI Marketing Operations strategist specializing in Marketo-Salesforce ecosystems.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
