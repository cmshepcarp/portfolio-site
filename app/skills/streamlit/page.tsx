// app/skills/streamlit/page.tsx
"use client";

import Link from "next/link";

export default function StreamlitPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-8">
      <div>
        <Link href="/skills" className="text-sm opacity-80 hover:opacity-100">&larr; Back to Skills</Link>
      </div>

      <section>
        <h1 className="text-3xl font-bold mb-3">Streamlit</h1>
        <p className="text-slate-700">
          I ship Python data apps quickly with Streamlit: clean UI, Altair charts,
          CSV/Parquet export, and robust back-end patterns (secrets via env / <code>st.secrets</code>,
          pagination & retries, SQLite caching, and small feature flags through query params).
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-700">
          <li>pandas transforms, input validation, and data quality checks.</li>
          <li>Altair v5 interactive charts; responsive layouts.</li>
          <li>Export buttons & friendly error handling.</li>
          <li>Lightweight deploys with clear configuration.</li>
        </ul>
      </section>
    </main>
  );
}
