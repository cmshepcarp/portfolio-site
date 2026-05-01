"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Tooltip } from "@/components/ui/tooltip";
import { skills } from "../data/skills";

export default function SkillsIndexPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:px-8">
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-8">
        <p className="mb-3 text-xs font-semibold uppercase text-teal-700">Skill library</p>
        <h1 className="mb-4 text-3xl font-semibold text-slate-950 md:text-5xl">Browse Skills</h1>

        <p className="mb-7 max-w-2xl leading-7 text-slate-600">
          Each skill page connects the tool to office workflows, analyst work, and practical
          examples from my current learning and experience.
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Tooltip key={skill.slug} content={skill.blurb}>
              <Link href={`/skills/${skill.slug}`} aria-label={`${skill.label}: ${skill.blurb}`}>
                <Badge
                  variant="outline"
                  className="rounded-md border-slate-300 bg-[#f7f8f4] px-3 py-1.5 text-sm text-slate-700 transition hover:border-teal-600 hover:bg-teal-50 hover:text-teal-900"
                >
                  {skill.label}
                </Badge>
              </Link>
            </Tooltip>
          ))}
        </div>
      </section>
    </main>
  );
}
