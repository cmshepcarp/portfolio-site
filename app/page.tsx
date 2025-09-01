// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// data
import { profile } from "./data/profile";
import { highlights } from "./data/highlights";
import { skills } from "./data/skills";
import { projects } from "./data/projects";

// ui
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import {
  Mail,
  Download,
  Github,
  Linkedin,
  Database,
  Workflow,
  BarChart,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

/** Toggle the hero background.
 *  - "image" uses /public/hero-bg.jpg
 *  - "color" uses a gradient
 */
const HERO_BACKGROUND: "image" | "color" = "image";

/* small helpers */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center p-4">
      <div className="text-3xl md:text-4xl font-bold">{value}</div>
      <div className="text-sm opacity-70 mt-1">{label}</div>
    </div>
  );
}

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
              <p className="text-sm opacity-80 mb-3">{p.impact}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-full">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm opacity-80 hover:opacity-100"
            >
              <span>Case study</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          <ul className="list-disc pl-5 space-y-1 text-sm">
            {p.bullets.map((b, i) => (
              <li key={i} className="leading-relaxed">
                {b}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Page() {
  return (
    <main className="text-slate-900">
      {/* ───────────── HERO ───────────── */}
      <header
        className={`relative h-[56vh] md:h-[68vh] lg:h-[76vh] text-white overflow-hidden ${
          HERO_BACKGROUND === "color"
            ? "bg-gradient-to-r from-slate-900 to-indigo-900"
            : ""
        }`}
      >
        {HERO_BACKGROUND === "image" && (
          <>
            <Image
              src="/hero-bg.jpg"
              alt="Background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent z-0" />
          </>
        )}

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-28 pb-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/25 text-xs mb-4 bg-white/10 backdrop-blur-sm">
              <span className="inline-flex items-center gap-1">
                <Database className="w-3.5 h-3.5" /> Pipelines
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Workflow className="w-3.5 h-3.5" /> Automation
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <BarChart className="w-3.5 h-3.5" /> Dashboards
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight drop-shadow">
              {profile.name}
            </h1>
            <p className="text-lg md:text-xl mt-2 opacity-90 drop-shadow">
              {profile.title}
            </p>
            <p className="max-w-2xl mt-3 md:mt-4 opacity-90 drop-shadow">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Button asChild className="rounded-2xl">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email me
                </a>
              </Button>

              <Button asChild variant="secondary" className="rounded-2xl">
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Download résumé
                </a>
              </Button>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm opacity-90 hover:opacity-100"
              >
                <Github className="w-4 h-4 mr-1" /> GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm opacity-90 hover:opacity-100"
              >
                <Linkedin className="w-4 h-4 mr-1" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ───────────── HIGHLIGHTS ───────────── */}
      <Section title="Highlights">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {highlights.map((h) => (
            <Card key={h.label} className="rounded-2xl">
              <CardContent className="p-6">
                <Stat label={h.label} value={h.value} />
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* ───────────── SKILLS (with readable tooltips) ───────────── */}
      <Section title="Core Skills">
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <Tooltip key={s.slug} content={s.blurb}>
              <Link href={`/skills/${s.slug}`} aria-label={`${s.label} — ${s.blurb}`}>
                <Badge
                  variant="outline"
                  className="rounded-full px-3 py-1 text-sm hover:bg-slate-100 cursor-pointer"
                >
                  {s.label}
                </Badge>
              </Link>
            </Tooltip>
          ))}
        </div>

        <div className="mt-4">
          <Link
            href="/skills"
            className="inline-flex items-center text-sm font-medium hover:underline"
          >
            Browse all skills <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </Section>

      {/* ───────────── PROJECTS ───────────── */}
      <Section title="Selected Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
        <div className="mt-6 text-right">
          <a href="#" className="inline-flex items-center text-sm font-medium">
            See all projects <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </Section>
{/* ───────────── EXPERIENCE (SafeNest) ───────────── */}
<Section title="Experience">
  <Card className="rounded-2xl shadow-md border border-gray-200 bg-white/70 backdrop-blur">
    <CardContent className="p-6 space-y-4">
      <div>
        <h3 className="text-2xl font-bold text-gray-900">
          SafeNest, Data Integrity Specialist
        </h3>
        <p className="text-sm text-gray-600">
          Oct 2022 to Present, Las Vegas, NV
        </p>
      </div>

      <p className="text-base leading-relaxed text-gray-800">
        Safeguard data quality and design reporting systems for Nevada’s largest
        domestic violence services nonprofit. Develop specialized reporting,
        automate workflows, and strengthen data-driven decision making across
        departments and executive leadership.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
  <li>
    <strong>Quarterly Reports:</strong> Streamlined reporting by{" "}
    <em>tagging data in the CRM, defining standardized data categories,
    and building specialized reports</em>, enabling leadership to submit
    accurate grant data faster and with greater confidence.
  </li>
  <li>
    <strong>Data Governance:</strong> Partnered with staff and leadership
    to <em>streamline data collection, define shared terms, and establish
    consistent reporting standards</em>, improving clarity and reducing
    duplication across departments.
  </li>
  <li>
    <strong>Data Quality:</strong> Ensured data was entered accurately
    through routine checks, staff guidance, and corrective feedback,
    strengthening the reliability of organizational reporting.
  </li>
  <li>
    <strong>IT Asset Management:</strong> Built an{" "}
    <em>asset tracking system</em> in Microsoft Lists, SharePoint, and
    Power Apps, ensuring devices were traceable and compliant with
    security standards.
  </li>
  <li>
    <strong>ETL and Dashboards:</strong> Developed{" "}
    <em>SQL and Power BI dashboards</em> to monitor service delivery and
    contract KPIs, giving executives real-time visibility into performance.
  </li>
  <li>
    <strong>Data Literacy and Support:</strong> Provide staff training,
    technical support, and cross-department collaboration to enhance
    organizational data practices and resilience.
  </li>
  <li>
    <strong>User Support:</strong> Collaborated with a managed service
    provider (MSP) to deliver responsive IT support to staff, ensuring
    timely troubleshooting and smooth daily operations.
  </li>
</ul>

    </CardContent>
  </Card>
</Section>




      {/* ───────────── FOOTER ───────────── */}
      <footer className="max-w-6xl mx-auto px-4 md:px-8 py-12 opacity-70 text-sm">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
