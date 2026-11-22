import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { profile } from "./data/profile";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://calebcarpenter.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Caleb Carpenter | Operations Analyst & Data Analytics",
  description:
    "Portfolio for Caleb Shepherd-Carpenter, a Las Vegas operations analyst focused on data quality, business intelligence, reporting, and workflow automation.",
  keywords: [
    "Caleb Carpenter",
    "Caleb Shepherd-Carpenter",
    "data analyst",
    "operations analyst",
    "Power BI",
    "Power Automate",
    "Las Vegas analyst",
  ],
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "1024x1024" }],
    apple: [{ url: "/favicon.png" }],
  },
  alternates: {
    canonical: "/",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: "Caleb Carpenter",
  jobTitle: profile.title,
  url: SITE_URL,
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen bg-[#f7f8f4] text-slate-900 antialiased`}>
        <header className="sticky top-0 z-40 px-3 py-3">
          <nav aria-label="Primary navigation" className="mx-auto flex min-h-14 max-w-6xl flex-wrap items-center justify-between gap-2 rounded-lg border border-white/70 bg-white/90 px-3 py-2 shadow-[0_12px_40px_rgba(15,23,42,0.09)] backdrop-blur-xl sm:flex-nowrap sm:px-5">
            <Link href="/" className="font-semibold text-slate-950">
              Caleb Carpenter
            </Link>
            <div className="flex flex-wrap items-center gap-1 text-sm sm:gap-2">
              <Link href="/projects" className="rounded-md px-2 py-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:px-3">
                Projects
              </Link>
              <Link href="/skills" className="rounded-md px-2 py-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:px-3">
                Skills
              </Link>
              <a href={profile.resumeUrl} className="rounded-md px-3 py-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-950">
                Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-md bg-slate-950 px-2 py-2 text-white shadow-sm transition hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:px-3"
              >
                Email me
              </a>
            </div>
          </nav>
        </header>

        {children}

        <footer className="border-t border-slate-200 bg-white/70">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between md:px-6">
            <p>&copy; {new Date().getFullYear()} {profile.name}</p>
            <div className="flex items-center gap-4">
              <a href={profile.github} className="hover:text-slate-950" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} className="hover:text-slate-950" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>

        <Script
          id="person-json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
