// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caleb Carpenter Portfolio",
  description: "Dashboards, automation, and data solutions — selected projects and case studies.",
  icons: {
    icon: [{ url: "/tablogo.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/tablogo.png" }],
  },
  openGraph: {
    title: "Caleb Carpenter Portfolio",
    description: "Dashboards, automation, and data solutions.",
    url: "https://calebcarpenter.com",
    siteName: "Caleb Carpenter Portfolio",
    images: [{ url: "/tablogo.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/tablogo.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen bg-white text-slate-900`}>
        {/* NAV */}
        <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
          <nav className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
            <Link href="/" className="font-semibold">Caleb Carpenter</Link>
            <div className="flex items-center gap-5 text-sm">
              <Link href="/projects" className="hover:underline">Projects</Link>
              <a href="/Caleb-Carpenter-Resume.pdf" className="hover:underline">Résumé</a>
              <a href="mailto:cmshepcarp@gmail.com" className="rounded-md px-3 py-1.5 bg-black text-white hover:opacity-90">
                Email me
              </a>
            </div>
          </nav>
        </header>

        {/* JSON-LD (SEO) */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Caleb Shepherd-Carpenter",
              jobTitle: "Data Analyst",
              url: "https://calebcarpenter.com",
              sameAs: [
                "https://github.com/cmshepcarp",
                "https://www.linkedin.com/in/your-handle"
              ],
            }),
          }}
        />

        {children}

        {/* FOOTER */}
        <footer className="mt-20 border-t">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-8 text-sm text-slate-500 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Caleb Shepherd-Carpenter</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/cmshepcarp" className="hover:underline">GitHub</a>
              <a href="https://www.linkedin.com/in/your-handle" className="hover:underline">LinkedIn</a>
            </div>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
