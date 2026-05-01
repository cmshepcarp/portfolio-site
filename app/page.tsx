"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  Download,
  ExternalLink,
  Github,
  Headphones,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip } from "@/components/ui/tooltip";
import { highlights } from "./data/highlights";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { skills } from "./data/skills";

const strengths = [
  {
    title: "User-first IT support",
    copy: "Clear troubleshooting, calm communication, staff training, and practical escalation with remote service providers.",
    icon: Headphones,
  },
  {
    title: "Analyst-minded reporting",
    copy: "Trend analysis, grant compliance reporting, quality checks, and cleaner operational data for leadership decisions.",
    icon: ShieldCheck,
  },
  {
    title: "Automation that sticks",
    copy: "Microsoft Lists, SharePoint, Power Apps, Power Automate, Python, and SQL workflows built for repeat use.",
    icon: Workflow,
  },
];

const resumeExperience = [
  {
    role: "Data Integrity Analyst",
    organization: "SafeNest",
    dates: "Oct 2022 to Apr 2026",
    summary:
      "Owned reporting, data quality, systems support, and workflow improvements for Nevada's largest domestic violence services nonprofit.",
    bullets: [
      "Designed and implemented an IT asset tracking system using Microsoft Lists, SharePoint, and Power Apps.",
      "Reduced quarterly reporting time from 140 hours to 80 hours by optimizing workflows and automating data aggregation.",
      "Refactored incident reporting processes to support trend analysis and more informed decision-making.",
      "Developed grant reporting systems to meet compliance requirements and improve reporting efficiency.",
      "Provided staff and volunteer training on data management, operational tools, and reporting practices.",
      "Supported remote IT service providers with basic network troubleshooting and optimization.",
    ],
  },
  {
    role: "Pool Manager / Water Safety Instructor",
    organization: "City of Las Vegas Aquatics",
    dates: "Jun 2016 to Aug 2019",
    summary:
      "Built early leadership experience through scheduling, safety compliance, staff training, and public-facing instruction.",
    bullets: [
      "Managed scheduling and resource allocation for lifeguards and aquatic staff.",
      "Oversaw facility maintenance and safety compliance.",
      "Trained staff on lifesaving techniques and operational procedures.",
      "Taught swim lessons and water safety as a certified Red Cross instructor.",
    ],
  },
  {
    role: "Field Operations Assistant",
    organization: "A Bounce Above the Rest",
    dates: "Mar 2018 to Aug 2019",
    summary:
      "Supported event operations, equipment readiness, and customer service in a fast-moving field environment.",
    bullets: [
      "Coordinated delivery and setup of event equipment.",
      "Maintained vehicles and equipment to support reliable operations.",
      "Provided customer service focused on client satisfaction and repeat business.",
    ],
  },
];

const educationItems = [
  {
    name: "Associate of Arts in Computer Science",
    org: "College of Southern Nevada",
    detail: "Spring 2024 to December 2026 expected; includes C++ algorithms coursework.",
  },
  {
    name: "Data Science pathway",
    org: "Nevada State University",
    detail: "Planned next step after AA completion",
  },
  {
    name: "Emergency Medical Technician (EMT) Certification",
    org: "Training Center of Southern Nevada",
    detail: "May 2019",
  },
];

const technicalSkillGroups = [
  {
    label: "Data management",
    items: ["Microsoft Access", "Excel", "SharePoint", "Microsoft Lists"],
  },
  {
    label: "Application development",
    items: ["Power Apps", "Power Automate", "Power Automate Desktop"],
  },
  {
    label: "Visualization",
    items: ["Power BI", "Google Data Studio", "Excel dashboards"],
  },
  {
    label: "Programming and databases",
    items: ["C++", "Algorithms", "SQL", "Python", "pandas", "SQLite"],
  },
  {
    label: "IT support",
    items: ["Network troubleshooting", "Asset tracking", "Staff training"],
  },
  {
    label: "Leadership and communication",
    items: ["Team scheduling", "Safety oversight", "Customer service", "Training"],
  },
];

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase text-teal-700">
          {eyebrow}
        </p>
      )}
      <h2 className="mb-8 max-w-3xl text-2xl font-semibold text-slate-950 md:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-slate-200 pl-5">
      <div className="text-3xl font-semibold text-slate-950 md:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <Card className="h-full rounded-lg border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
        <CardContent className="flex h-full flex-col p-6">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-950">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{project.impact}</p>
            </div>
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                aria-label={`${project.title} case study`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-md bg-slate-100 text-slate-700">
                {tag}
              </Badge>
            ))}
          </div>

          <ul className="mt-auto space-y-2 text-sm leading-6 text-slate-700">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-teal-700" />
                <span>{bullet}</span>
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
    <main className="overflow-hidden bg-[#f7f8f4] text-slate-900">
      <header className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.96),rgba(19,78,74,0.82)_48%,rgba(15,23,42,0.26))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_35%,rgba(255,255,255,0.14),transparent_32%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f7f8f4] to-transparent" />

        <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-4 pb-20 pt-28 md:grid-cols-[1.05fr_0.95fr] md:px-8">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-md border border-emerald-300/30 bg-emerald-300/10 px-3 py-1.5 text-xs font-medium text-emerald-100">
                <Sparkles className="h-3.5 w-3.5" />
                {profile.status}
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white/85">
                <MapPin className="h-3.5 w-3.5" />
                {profile.location}
              </span>
            </div>

            <p className="mb-3 text-sm font-semibold uppercase text-amber-100">
              {profile.title}
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 md:text-xl">
              {profile.tagline}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild className="h-11 rounded-md bg-amber-300 px-5 text-slate-950 shadow-lg shadow-amber-950/20 hover:bg-amber-200">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact me
                </a>
              </Button>

              <Button
                asChild
                variant="secondary"
                className="h-11 rounded-md border border-white/20 bg-white px-5 text-slate-950 hover:bg-cyan-50"
              >
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Current resume
                </a>
              </Button>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-1.5 rounded-md px-3 text-sm text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-1.5 rounded-md px-3 text-sm text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-lg border border-white/15 bg-white/12 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur-xl"
          >
            <div className="rounded-md border border-white/10 bg-slate-950/50 p-4">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                <div>
                  <p className="text-sm font-medium text-white">Best fit roles</p>
                  <p className="text-xs text-slate-300">Immediate search focus</p>
                </div>
                <BriefcaseBusiness className="h-5 w-5 text-amber-200" />
              </div>
              <div className="space-y-3">
                {profile.targetRoles.map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.06] px-3 py-3 text-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 text-teal-200" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div>
                <div className="rounded-md border border-white/10 bg-white/[0.08] p-3">
                  <Database className="mb-3 h-4 w-4 text-cyan-200" />
                  <p className="text-xs leading-5 text-slate-200">SQL / CRM data</p>
                </div>
              </div>
              <div>
                <div className="rounded-md border border-white/10 bg-white/[0.08] p-3">
                  <Workflow className="mb-3 h-4 w-4 text-cyan-200" />
                  <p className="text-xs leading-5 text-slate-200">Workflow automation</p>
                </div>
              </div>
              <div>
                <div className="rounded-md border border-white/10 bg-white/[0.08] p-3">
                  <BarChart3 className="mb-3 h-4 w-4 text-cyan-200" />
                  <p className="text-xs leading-5 text-slate-200">Power BI reporting</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <Section eyebrow="Proof points" title="A practical operator who can support people and improve systems.">
        <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:grid-cols-3 md:grid-cols-1">
            {highlights.map((highlight) => (
              <Stat key={highlight.label} label={highlight.label} value={highlight.value} />
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {strengths.map((strength) => {
              const Icon = strength.icon;
              return (
                <Card key={strength.title} className="rounded-lg border-slate-200 shadow-sm">
                  <CardContent className="p-5">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-amber-100 text-amber-800">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-slate-950">{strength.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{strength.copy}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      <section className="border-y border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-teal-700">
              Recruiter quick read
            </p>
            <p className="mt-2 max-w-3xl text-lg leading-8 text-slate-700">
              Analyst experience across IT support, Microsoft Power Platform, incident reporting,
              grant compliance, data visualization, network troubleshooting, staff training,
              team leadership, and nonprofit operations data. {profile.education}
            </p>
          </div>
          <Button asChild className="h-11 w-fit rounded-md bg-slate-950 px-5 text-white hover:bg-teal-700">
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              View resume
            </a>
          </Button>
        </div>
      </section>

      <section className="bg-[#eef7f3]">
        <Section eyebrow="Core skills" title="Tools and habits I bring into support, reporting, and systems work.">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Tooltip key={skill.slug} content={skill.blurb}>
              <Link href={`/skills/${skill.slug}`} aria-label={`${skill.label}: ${skill.blurb}`}>
                <Badge
                  variant="outline"
                  className="rounded-md border-white bg-white/80 px-3 py-1.5 text-sm text-slate-700 shadow-sm transition hover:border-teal-500 hover:bg-white hover:text-teal-900"
                >
                  {skill.label}
                </Badge>
              </Link>
            </Tooltip>
          ))}
        </div>

        <Link
          href="/skills"
          className="mt-5 inline-flex items-center text-sm font-medium text-teal-800 hover:underline"
        >
          Browse all skills <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
        </Section>
      </section>

      <Section eyebrow="Education and technical toolkit" title="Building from hands-on office systems into computer science and data science.">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {educationItems.map((item) => (
              <Card key={item.name} className="rounded-lg border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.07)]">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-slate-950">{item.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.org}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {technicalSkillGroups.map((group) => (
              <div key={group.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-950">{group.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary" className="rounded-md bg-slate-100 text-slate-700">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="bg-white">
        <Section eyebrow="Selected work" title="Projects that show the shape of the work, not just the tools.">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-6 text-right">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-medium text-teal-800 hover:underline"
          >
            See all projects <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        </Section>
      </section>

      <Section eyebrow="Experience" title="Analyst, support, training, and operations experience.">
        <div className="space-y-5">
          {resumeExperience.map((experience) => (
            <div
              key={`${experience.organization}-${experience.role}`}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.07)]"
            >
              <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950">{experience.role}</h3>
                  <p className="mt-1 text-slate-600">{experience.organization}</p>
                </div>
                <Badge
                  variant="outline"
                  className="w-fit rounded-md border-slate-300 px-3 py-1 text-slate-700"
                >
                  {experience.dates}
                </Badge>
              </div>

              <p className="mt-5 max-w-4xl text-base leading-7 text-slate-700">
                {experience.summary}
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {experience.bullets.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-md border border-slate-200 bg-[#fafaf7] p-4 text-sm leading-6 text-slate-700"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-teal-700" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-4 md:px-8">
        <div className="rounded-lg border border-teal-200 bg-[linear-gradient(135deg,#0f172a,#0f766e_55%,#f59e0b)] p-6 text-white shadow-[0_28px_90px_rgba(15,23,42,0.24)] md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-teal-100">
                Open to interviews
              </p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                Need someone who can support users and make the data less painful?
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-11 rounded-md bg-white px-5 text-slate-950 hover:bg-cyan-50">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Email Caleb
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-md border-white/40 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white"
              >
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
