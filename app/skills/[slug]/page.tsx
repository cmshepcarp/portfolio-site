import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Laptop, Lightbulb, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { skills } from "../../data/skills";

type SkillDetail = {
  overview: string;
  officeUse: string;
  examples: string[];
  strengths: string[];
  tools: string[];
};

const skillDetails: Record<string, SkillDetail> = {
  python: {
    overview:
      "Python is where I reach when a manual reporting task, file cleanup, API pull, or repeatable data job needs to become reliable instead of tedious.",
    officeUse:
      "In an office setting, Python can turn recurring spreadsheet work into repeatable scripts: validating CSV exports, cleaning CRM data, combining files, checking missing values, and preparing clean inputs for Power BI or Excel.",
    examples: [
      "Automate recurring exports and file transformations.",
      "Call APIs with pagination, retries, and basic logging.",
      "Create data quality checks before reports reach leadership.",
      "Package small utilities so nontechnical staff can use cleaner outputs.",
    ],
    strengths: ["pandas", "API requests", "CSV/Excel cleanup", "repeatable scripts"],
    tools: ["Python", "pandas", "requests", "SQLite", "Power BI inputs"],
  },
  cpp: {
    overview:
      "C++ is part of my computer science coursework and a skill I am actively turning into portfolio projects that show fundamentals, not just tool familiarity.",
    officeUse:
      "While C++ is less common for everyday office automation than Python or Power Automate, learning it strengthens problem solving, memory awareness, debugging discipline, and the ability to reason through how programs actually work.",
    examples: [
      "Build small command-line utilities that read, process, and write files.",
      "Practice sorting, searching, arrays, linked structures, and other core concepts.",
      "Use GitHub to document project goals, source code, and lessons learned.",
      "Connect algorithm practice to data validation, reporting utilities, and systems thinking.",
    ],
    strengths: ["algorithms", "debugging", "data structures", "command-line programs"],
    tools: ["C++", "Git", "VS Code", "PowerShell", "GitHub"],
  },
  algorithms: {
    overview:
      "Algorithms coursework has helped me build stronger problem-solving habits: breaking problems down, choosing data structures, and thinking about efficiency.",
    officeUse:
      "In analyst and support roles, algorithmic thinking helps with troubleshooting, data cleanup logic, process design, and writing scripts that are easier to reason about and maintain.",
    examples: [
      "Compare different ways to search, sort, group, and validate data.",
      "Design step-by-step logic before writing code.",
      "Recognize when a slow manual process can be made more efficient.",
      "Explain technical tradeoffs in plain language.",
    ],
    strengths: ["problem decomposition", "efficiency", "data structures", "clear logic"],
    tools: ["C++", "Python", "pseudocode", "GitHub", "course projects"],
  },
  "power-bi": {
    overview:
      "Power BI helps turn scattered operational data into dashboards that leaders can scan quickly and trust.",
    officeUse:
      "In business teams, Power BI is useful for tracking KPIs, service delivery, grant or contract metrics, monthly trends, and exceptions that need follow-up.",
    examples: [
      "Build KPI cards, trend views, and drill-through pages.",
      "Model shared definitions so teams use the same numbers.",
      "Create filtered views for leadership, managers, and analysts.",
      "Add QA flags so bad source data is visible before decisions are made.",
    ],
    strengths: ["dashboard design", "semantic modeling", "KPI tracking", "stakeholder reporting"],
    tools: ["Power BI", "DAX", "Power Query", "Excel", "SQL"],
  },
  pandas: {
    overview:
      "pandas is a practical tool for reshaping, checking, joining, and preparing messy datasets before they become reports or dashboards.",
    officeUse:
      "For office reporting, pandas is especially useful when exports arrive with inconsistent columns, duplicate records, missing values, or multiple files that need to become one clean dataset.",
    examples: [
      "Combine monthly exports into one clean reporting table.",
      "Standardize categories and date fields.",
      "Flag duplicates, missing values, and outliers.",
      "Prepare repeatable datasets for SQL, Power BI, or Excel.",
    ],
    strengths: ["data cleaning", "joins", "reshaping", "quality control"],
    tools: ["pandas", "Python", "CSV", "Excel", "Parquet"],
  },
  sharepoint: {
    overview:
      "SharePoint is useful as a lightweight business system when teams need structured lists, controlled access, files, forms, and workflow integration.",
    officeUse:
      "In Microsoft 365 offices, SharePoint can support request intake, asset tracking, document storage, approvals, and department-level processes without immediately needing a custom application.",
    examples: [
      "Build structured lists for tickets, assets, and process tracking.",
      "Use permissions to separate staff, manager, and admin views.",
      "Connect SharePoint lists to Power Automate and Power Apps.",
      "Create auditable records instead of relying on scattered email chains.",
    ],
    strengths: ["lists", "permissions", "document libraries", "Power Platform integration"],
    tools: ["SharePoint", "Microsoft Lists", "Power Apps", "Power Automate", "Excel"],
  },
  "power-automate": {
    overview:
      "Power Automate is one of the most useful office automation tools in a Microsoft-heavy workplace because it connects email, SharePoint, Teams, Excel, approvals, and notifications without requiring a full custom app.",
    officeUse:
      "For Windows and Microsoft 365 office environments, Power Automate can act as a Microsoft-native solution for everyday workflow problems: routing requests, sending reminders, collecting approvals, updating SharePoint lists, moving attachments, and reducing repetitive staff follow-up.",
    examples: [
      "Route intake requests from forms or SharePoint lists to the right staff member.",
      "Send automatic status updates, reminders, and escalation notices.",
      "Create approval flows for finance, HR, operations, or equipment requests.",
      "Use Power Automate Desktop on Windows for legacy tasks that still require local desktop steps.",
      "Log actions to SharePoint so teams have an audit trail instead of a buried email thread.",
    ],
    strengths: ["Microsoft 365 automation", "approval flows", "notifications", "Power Automate Desktop"],
    tools: ["Power Automate", "Power Automate Desktop", "Outlook", "Teams", "SharePoint", "Microsoft Forms"],
  },
  etl: {
    overview:
      "ETL is the habit of moving data through a clean path: extract it, transform it, validate it, and load it somewhere useful.",
    officeUse:
      "For reporting teams, ETL prevents last-minute spreadsheet chaos by creating a repeatable process for pulling exports, cleaning fields, checking quality, and refreshing dashboards.",
    examples: [
      "Extract data from CRMs, APIs, spreadsheets, or databases.",
      "Transform inconsistent categories and dates into reporting-ready fields.",
      "Add quality gates before data reaches a dashboard.",
      "Document each step so reports can be maintained later.",
    ],
    strengths: ["repeatable pipelines", "quality checks", "data staging", "documentation"],
    tools: ["Python", "SQL", "Power Query", "APIs", "Power BI"],
  },
  "data-modeling": {
    overview:
      "Data modeling is how raw tables become understandable reporting structures with clear relationships and consistent metrics.",
    officeUse:
      "In an office setting, good models help teams avoid conflicting numbers by defining shared entities, clean relationships, and reusable measures.",
    examples: [
      "Shape reporting tables around facts, dimensions, and business questions.",
      "Document metric definitions and edge cases.",
      "Reduce duplicated logic across dashboards.",
      "Make reports easier to audit, maintain, and explain.",
    ],
    strengths: ["star schemas", "metric definitions", "relationships", "semantic layers"],
    tools: ["SQL", "Power BI", "DAX", "Power Query", "Excel"],
  },
  apis: {
    overview:
      "API integrations make it possible to pull data directly from systems instead of depending only on manual exports.",
    officeUse:
      "For operations and reporting teams, APIs can reduce copy/paste work by bringing data from CRMs, ticketing systems, forms, and other platforms into a repeatable workflow.",
    examples: [
      "Pull paginated records from a system endpoint.",
      "Handle authentication, retries, and date filters.",
      "Transform JSON responses into reporting tables.",
      "Schedule or document repeatable API-based refreshes.",
    ],
    strengths: ["REST APIs", "pagination", "auth", "error handling"],
    tools: ["Python", "requests", "JSON", "Power Query", "SQL"],
  },
  excel: {
    overview:
      "Excel remains one of the most important office tools because it is where many teams review, reconcile, and share data.",
    officeUse:
      "In a job setting, Excel is useful for analysis, quick QA, Power Query transformations, handoff files, ad hoc reporting, and translating technical data into something staff can inspect.",
    examples: [
      "Clean exports with Power Query before dashboarding.",
      "Build review files for staff validation.",
      "Use formulas, pivots, and tables for fast analysis.",
      "Prepare controlled handoff files for nontechnical users.",
    ],
    strengths: ["Power Query", "pivot tables", "formulas", "data review"],
    tools: ["Excel", "Power Query", "CSV", "Power BI", "SharePoint"],
  },
  "microsoft-access": {
    overview:
      "Microsoft Access is a practical office database tool for small teams that need structured records, forms, and reports without a full custom application.",
    officeUse:
      "In office environments, Access can support lightweight database management for tracking records, maintaining lookup tables, and creating reports when spreadsheets start becoming too fragile.",
    examples: [
      "Organize records into tables instead of disconnected spreadsheets.",
      "Create simple forms for safer data entry.",
      "Build queries that support recurring reports.",
      "Help teams understand when an Access workflow should move into SharePoint, SQL, or another system.",
    ],
    strengths: ["office databases", "queries", "forms", "structured records"],
    tools: ["Microsoft Access", "Excel", "SharePoint", "SQL basics"],
  },
  snowflake: {
    overview:
      "Snowflake is a cloud data warehouse used to centralize, query, and manage larger reporting datasets.",
    officeUse:
      "For organizations growing beyond spreadsheet-based reporting, Snowflake can provide a governed place for structured data, role-based access, scheduled transforms, and reliable analytics.",
    examples: [
      "Organize raw and cleaned data into warehouse layers.",
      "Use roles and permissions to protect sensitive information.",
      "Write performant SQL for reporting tables.",
      "Support downstream dashboards and analytics tools.",
    ],
    strengths: ["warehousing", "SQL", "permissions", "performance awareness"],
    tools: ["Snowflake", "SQL", "Power BI", "ETL patterns", "cloud storage"],
  },
  "google-data-studio": {
    overview:
      "Google Data Studio, now Looker Studio, is useful for lightweight dashboards and shareable reporting views.",
    officeUse:
      "In an office setting, it can help teams publish quick visual reports, track trends, and share data views with stakeholders who need a browser-based dashboard.",
    examples: [
      "Create shareable dashboard views for recurring metrics.",
      "Connect spreadsheet-based data to visual summaries.",
      "Use filters and date ranges to make reports easier to explore.",
      "Translate raw tables into cleaner stakeholder-facing charts.",
    ],
    strengths: ["lightweight dashboards", "trend views", "shared reports", "visual communication"],
    tools: ["Google Data Studio", "Looker Studio", "Google Sheets", "Power BI", "Excel"],
  },
  "data-visualization": {
    overview:
      "Data visualization is about helping people understand what changed, what matters, and what needs attention.",
    officeUse:
      "In an office setting, strong visuals help managers and executives quickly scan KPIs, compare trends, spot outliers, and ask better follow-up questions.",
    examples: [
      "Design KPI views that answer the first question fast.",
      "Use trends and comparisons instead of decorative charts.",
      "Keep labels, filters, and drilldowns understandable.",
      "Match visual detail to the audience using the report.",
    ],
    strengths: ["KPI design", "trend analysis", "audience-first reporting", "clear labels"],
    tools: ["Power BI", "Excel", "Altair", "Streamlit", "PowerPoint"],
  },
  "data-cleaning": {
    overview:
      "Data cleaning is the work that makes reporting trustworthy: fixing inconsistent values, missing fields, duplicates, and formatting problems.",
    officeUse:
      "Most office data starts messy. Cleaning helps teams avoid bad counts, duplicate follow-up, wrong categories, and reports that leadership cannot trust.",
    examples: [
      "Standardize names, dates, categories, and statuses.",
      "Flag duplicates and missing required fields.",
      "Create repeatable QA checks for recurring reports.",
      "Give staff clear feedback on data entry issues.",
    ],
    strengths: ["quality checks", "standardization", "deduping", "validation"],
    tools: ["Python", "pandas", "SQL", "Excel", "Power Query"],
  },
  "version-control": {
    overview:
      "Version control keeps code, scripts, documentation, and project changes organized so work can be reviewed and safely improved.",
    officeUse:
      "Even in non-software roles, Git helps track reporting scripts, SQL changes, documentation, and portfolio projects without losing previous versions.",
    examples: [
      "Track changes to scripts and SQL files.",
      "Use branches for experimental updates.",
      "Keep a readable history of project decisions.",
      "Collaborate without overwriting someone else's work.",
    ],
    strengths: ["Git basics", "branching", "commit history", "collaboration"],
    tools: ["Git", "GitHub", "VS Code", "PowerShell", "Markdown"],
  },
  "cloud-platforms": {
    overview:
      "Cloud platforms provide the infrastructure behind modern data storage, automation, apps, and analytics.",
    officeUse:
      "For data and systems roles, cloud basics help with understanding where files, databases, apps, permissions, and scheduled jobs live and how they connect.",
    examples: [
      "Understand storage, compute, and database building blocks.",
      "Connect cloud-hosted data to reporting tools.",
      "Work with permissions and environment configuration.",
      "Communicate more clearly with infrastructure or vendor teams.",
    ],
    strengths: ["cloud fundamentals", "permissions", "hosted data", "deployment awareness"],
    tools: ["Azure", "AWS", "Vercel", "SharePoint", "cloud databases"],
  },
  leadership: {
    overview:
      "Leadership is part of how I work: keeping people organized, making expectations clear, and staying calm when operations are busy.",
    officeUse:
      "In analyst and support roles, leadership shows up in scheduling, training, escalation, safety-minded decision-making, and helping teams adopt cleaner processes without losing momentum.",
    examples: [
      "Managed scheduling and resource allocation for City of Las Vegas aquatic staff.",
      "Oversaw facility maintenance and safety compliance as a pool manager.",
      "Trained staff on lifesaving techniques, operating procedures, and readiness expectations.",
      "Coordinated delivery, setup, equipment readiness, and customer-facing event work at A Bounce Above the Rest.",
    ],
    strengths: ["team scheduling", "training", "operations coordination", "calm decision-making"],
    tools: ["Staff training", "Scheduling", "Safety procedures", "Customer service", "Operations checklists"],
  },
  communication: {
    overview:
      "Communication is a practical skill I have built through public-facing work, staff training, customer service, and cross-functional support.",
    officeUse:
      "In technical and operations work, clear communication helps users understand next steps, gives leaders reliable updates, and makes process changes easier for staff to adopt.",
    examples: [
      "Taught swim lessons and water safety as a certified Red Cross instructor.",
      "Explained safety procedures and expectations clearly to staff and the public.",
      "Provided customer service during field operations and event setup work.",
      "Translated technical or process issues into clear next steps for staff, volunteers, and service providers.",
    ],
    strengths: ["staff training", "plain-language updates", "customer service", "cross-team coordination"],
    tools: ["Training", "Documentation", "Email updates", "Customer support", "Team handoffs"],
  },
};

export function generateStaticParams() {
  const dedicatedPages = new Set(["dashboarding", "sql", "streamlit"]);
  return skills
    .filter((skill) => !dedicatedPages.has(skill.slug))
    .map((skill) => ({ slug: skill.slug }));
}

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = skills.find((item) => item.slug === slug);

  if (!skill) {
    notFound();
  }

  const detail = skillDetails[skill.slug] ?? {
    overview: skill.blurb,
    officeUse:
      "This skill helps turn day-to-day business work into cleaner systems, better reporting, and more reliable team processes.",
    examples: [
      "Clarify the business problem before choosing a tool.",
      "Document the workflow so it can be repeated.",
      "Build outputs that staff and supervisors can actually use.",
    ],
    strengths: ["problem solving", "documentation", "process improvement"],
    tools: [skill.label],
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:px-8">
      <Link
        href="/skills"
        className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-slate-950"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Skills
      </Link>

      <section className="mt-8 grid gap-8 rounded-lg border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[0.9fr_1.1fr] md:p-8">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase text-teal-700">
            Skill focus
          </p>
          <h1 className="text-4xl font-semibold text-slate-950 md:text-6xl">
            {skill.label}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">{detail.overview}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {detail.tools.map((tool) => (
              <Badge key={tool} variant="outline" className="rounded-md border-slate-300 px-3 py-1">
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        <Card className="rounded-lg border-slate-200 bg-[#eef7f3] shadow-none">
          <CardContent className="p-6">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-teal-100 text-teal-800">
              <Laptop className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold text-slate-950">How it helps in an office</h2>
            <p className="mt-3 leading-7 text-slate-700">{detail.officeUse}</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card className="rounded-lg border-slate-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <Workflow className="h-5 w-5 text-teal-700" />
              <h2 className="text-xl font-semibold text-slate-950">Practical examples</h2>
            </div>
            <ul className="space-y-3">
              {detail.examples.map((example) => (
                <li key={example} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-teal-700" />
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-lg border-slate-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <Lightbulb className="h-5 w-5 text-teal-700" />
              <h2 className="text-xl font-semibold text-slate-950">What I focus on</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {detail.strengths.map((strength) => (
                <div key={strength} className="rounded-md bg-slate-50 px-3 py-3 text-sm text-slate-700">
                  {strength}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
