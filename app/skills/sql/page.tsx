// app/skills/sql/page.tsx
"use client";

import Link from "next/link";

export default function SqlDetailPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-10">
      <div>
        <Link href="/skills" className="text-sm opacity-80 hover:opacity-100">&larr; Back to Skills</Link>
      </div>

      <section>
        <h1 className="text-3xl font-bold mb-4">SQL</h1>
        <p className="text-slate-700">
          I’ve built my SQL experience through a combination of professional practice and formal coursework.
          At <strong>SafeNest</strong>, I apply SQL weekly to clean and transform data for grant reporting,
          automate ETL pipelines, and support dashboards. This hands-on work taught me how to design practical
          queries, optimize performance, and troubleshoot real-world issues.
        </p>
        <p className="text-slate-700 mt-3">
          At the <strong>College of Southern Nevada (CIT 180: Introduction to Databases)</strong>, I learned
          relational modeling, normalization, and structured query writing (SELECT, JOIN, GROUP BY, subqueries, indexes).
          That foundation complements the applied problem-solving I do at work.
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-4 text-slate-700">
          <li>Practical SQL at SafeNest: ETL, reporting pipelines, QA queries, and optimizations.</li>
          <li>Formal instruction at CSN: relational theory, schema design, and advanced SQL queries.</li>
          <li>Experience with Azure SQL, SQLite, and integration into Python workflows.</li>
        </ul>
      </section>

      {/* simple SVG flow to show where SQL fits in */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">How SQL fits my data workflow</h2>

        <div className="rounded-xl border bg-white p-4 overflow-x-auto">
          <svg viewBox="0 0 1100 270" className="w-full h-auto">
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
              </marker>
            </defs>

            {/* boxes */}
            <rect x="20"  y="100" width="180" height="60" rx="12" fill="#dbeafe" stroke="#93c5fd"/>
            <text x="110" y="130" textAnchor="middle" fontWeight="600">APIs / Files</text>
            <text x="110" y="150" textAnchor="middle" className="fill-slate-600 text-xs">CSV • JSON • REST</text>

            <rect x="240" y="90" width="210" height="80" rx="12" fill="#e2e8f0" stroke="#94a3b8"/>
            <text x="345" y="130" textAnchor="middle" fontWeight="600">Python (pandas)</text>
            <text x="345" y="150" textAnchor="middle" className="fill-slate-600 text-xs">Clean • reshape • validate</text>

            <rect x="480" y="70" width="220" height="120" rx="12" fill="#dcfce7" stroke="#86efac"/>
            <text x="590" y="120" textAnchor="middle" fontWeight="700">SQL</text>
            <text x="590" y="140" textAnchor="middle" className="fill-slate-600 text-xs">
              staging → relational model → queries
            </text>

            <rect x="730" y="90" width="160" height="80" rx="12" fill="#ffe4e6" stroke="#fecdd3"/>
            <text x="810" y="130" textAnchor="middle" fontWeight="600">BI Tools</text>
            <text x="810" y="150" textAnchor="middle" className="fill-slate-600 text-xs">Power BI / Excel</text>

            <rect x="920" y="100" width="160" height="60" rx="12" fill="#fef9c3" stroke="#fde68a"/>
            <text x="1000" y="130" textAnchor="middle" fontWeight="600">Stakeholders</text>

            {/* arrows */}
            <line x1="200" y1="130" x2="240" y2="130" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
            <line x1="450" y1="130" x2="480" y2="130" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
            <line x1="700" y1="130" x2="730" y2="130" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
            <line x1="890" y1="130" x2="920" y2="130" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>

            {/* captions below */}
            <text x="590" y="210" textAnchor="middle" className="fill-slate-600">
              SQL is the core: persistent storage & relational logic powering clean views to BI
            </text>
          </svg>
        </div>
      </section>
    </main>
  );
}
