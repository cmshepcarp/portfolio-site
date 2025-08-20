// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site-wide metadata
export const metadata: Metadata = {
  title: "Caleb Carpenter Portfolio",
  description: "Data Analyst Portfolio showcasing dashboards, automation, and data solutions.",
  keywords: [
    "Data Analyst",
    "Portfolio",
    "Dashboards",
    "Automation",
    "Power BI",
    "Python",
    "SQL",
    "ETL",
    "Caleb Carpenter",
  ],
  authors: [{ name: "Caleb Carpenter" }],
  icons: [ 
    { url: "/tablogo.png", type: "image/png", sizes: "32x32" },
    { url: "/tablogo.png", type: "image/png", sizes: "192x192" },
    { url: "/tablogo.png", type: "image/png", sizes: "512x512" },
  ],
  openGraph: {
    title: "Caleb Carpenter Portfolio",
    description: "Dashboards, automation, and data solutions — selected projects and case studies.",
    url: "https://calebcarpenter.com",
    siteName: "Caleb Carpenter Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Caleb Carpenter Portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caleb Carpenter Portfolio",
    description: "Dashboards, automation, and data solutions — selected projects and case studies.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://calebcarpenter.com"),
};

// Root layout — must export a default React component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
