"use client";

import { profile } from "./data/profile";
import { highlights } from "./data/highlights";
import { skills } from "./data/skills";
import { projects } from "./data/projects";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Download,
  Github,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Database,
  BarChart,
  Workflow,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ─────────────────────────────────────────────────────────────────────────────
// Small UI helpers
// ─────────────────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────
export default function CalebPortfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* HERO */}
      <header className="max-w-6xl mx-auto px-4 md:px-8 pt-16 pb-10">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs mb-4">
            <span className="inline-flex items-center gap-1">
              <Database className="w-3.5 h-3.5" />
              Pipelines
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Workflow className="w-3.5 h-3.5" />
              Automation
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <BarChart className="w-3.5 h-3.5" />
              Dashboards
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            {profile.name}
          </h1>
          <p className="text-lg md:text-xl mt-2 opacity-80">{profile.title}</p>
          <p className="max-w-2xl mt-3 md:mt-4 opacity-90">{profile.tagline}</p>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <Button asChild className="rounded-2xl">
              <a href={`mailto:${profile.email}`}>
                <Mail className="w-4 h-4 mr-2" />
                Email me
              </a>
            </Button>

            <Button asChild variant="secondary" className="rounded-2xl">
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download résumé
              </a>
            </Button>

            <a
              href={profile.github}
              className="inline-flex items-center text-sm opacity-80 hover:opacity-100"
            >
              <Github className="w-4 h-4 mr-1" />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              className="inline-flex items-center text-sm opacity-80 hover:opacity-100"
            >
              <Linkedin className="w-4 h-4 mr-1" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </header>

      {/* STATS */}
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

      {/* SKILLS */}
      <Section title="Core Skills">
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <Badge key={s} variant="outline" className="rounded-full px-3 py-1 text-sm">
              {s}
            </Badge>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
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

      {/* EXPERIENCE */}
      <Section title="Experience">
        <Card className="rounded-2xl">
          <CardContent className="p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">SafeNest — Data Integrity Specialist</h3>
              <p className="opacity-80 text-sm">Oct 2022 – Present, Las Vegas, NV</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  Developed IT asset tracking system using Microsoft Lists, SharePoint, and Power Apps.
                </li>
                <li>
                  Reduced quarterly reporting time from 140 to 80 hours by refactoring incident reports.
                </li>
                <li>Built automated ticketing for finance with notifications and oversight.</li>
                <li>Created ETL dashboards integrating SQL pipelines with Power BI.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-4 md:px-8 py-12 opacity-70 text-sm">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </footer>
    </main>
  );
}
