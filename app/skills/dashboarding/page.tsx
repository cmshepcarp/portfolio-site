// app/skills/dashboarding/page.tsx
"use client";

import Link from "next/link";

export default function DashboardingPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-8">
      <div>
        <Link href="/skills" className="text-sm opacity-80 hover:opacity-100">&larr; Back to Skills</Link>
      </div>

      <section>
        <h1 className="text-3xl font-bold mb-3">Dashboarding</h1>
        <p className="text-slate-700">
          I build audience-first dashboards: clear KPIs up front, quick trend context,
          then focused drill-downs. I align visuals with a reliable semantic layer,
          keep performance snappy, and provide analyst-friendly exports.
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-700">
          <li>Requirements → wireframes → feedback loops with stakeholders.</li>
          <li>Star schema/semantic modeling for consistent metrics.</li>
          <li>Usability: minimal clutter, sensible defaults, tooltips for depth.</li>
          <li>Operations: refresh schedules, QA checks, versioned logic.</li>
        </ul>
      </section>
    </main>
  );
}
