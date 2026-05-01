import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:px-8">
      <section className="mb-8 rounded-lg border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-8">
        <p className="mb-3 text-xs font-semibold uppercase text-teal-700">Selected work</p>
        <h1 className="text-3xl font-semibold text-slate-950 md:text-5xl">Projects</h1>
        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          Practical systems, reporting, and coursework projects that show how I think through
          operations problems.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.slug} className="rounded-lg border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-slate-700 mb-4">{project.impact}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-md bg-slate-100 text-slate-700">
                    {tag}
                  </Badge>
                ))}
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
