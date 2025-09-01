"use client";

import Link from "next/link";
import { skills } from "../data/skills";
import { Badge } from "@/components/ui/badge";
import { Tooltip } from "@/components/ui/tooltip";

export default function SkillsIndexPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Browse Skills</h1>

      <p className="opacity-80 mb-6">
        Hover a pill for a quick summary. Click to see details and examples.
      </p>

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
    </main>
  );
}
