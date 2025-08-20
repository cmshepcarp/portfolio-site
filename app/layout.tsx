// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Caleb Carpenter Portfolio",
  description:
    "Dashboards, automation, and data solutions — selected projects and case studies.",
  icons: {
    icon: [{ url: "/tablogo.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/tablogo.png" }],
    // (optional) add a larger icon if you have it:
    // other: [{ rel: "apple-touch-icon", url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "Caleb Carpenter Portfolio",
    description: "Dashboards, automation, and data solutions.",
    url: "/", // resolved against metadataBase → https://calebcarpenter.com/
    siteName: "Caleb Carpenter Portfolio",
    images: [
      // Put a 1200×630 image in /public/og-image.png
      { url: "/og-image.png", width: 1200, height: 630, alt: "Caleb Carpenter Portfolio preview" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/", // resolved against metadataBase
  },
  // JSON-LD can be set here with `other` if you’d rather not inline a <script>:
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Caleb Shepherd-Carpenter",
      jobTitle: "Data Analyst",
      url: SITE_URL,
      sameAs: [
        "https://github.com/cmshepcarp",
        "https://www.linkedin.com/in/caleb-shepherd-carpenter", // <-- your real handle
      ],
    }),
  },
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
              <a
                href="mailto:cmshepcarp@gmail.com"
                className="rounded-md px-3 py-1.5 bg-black text-white hover:opacity-90"
              >
                Email me
              </a>
            </div>
          </nav>
        </header>

        {/* If you prefer inline JSON-LD instead of `metadata.other`, keep this and remove `other` above */}
        {/* <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Caleb Shepherd-Carpenter",
              jobTitle: "Data Analyst",
              url: SITE_URL,
              sameAs: [
                "https://github.com/cmshepcarp",
                "https://www.linkedin.com/in/caleb-shepherd-carpenter",
              ],
            }),
          }}
        /> */}

        {children}

        {/* FOOTER */}
        <footer className="mt-20 border-t">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-8 text-sm text-slate-500 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Caleb Shepherd-Carpenter</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/cmshepcarp" className="hover:underline">GitHub</a>
              <a href="https://www.linkedin.com/in/caleb-shepherd-carpenter" className="hover:underline">LinkedIn</a>
            </div>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
