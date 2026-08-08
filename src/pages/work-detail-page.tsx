import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CaseStudyBody } from "@/components/work/case-study-body";
import { CaseStudySidebar } from "@/components/work/case-study-sidebar";
import { AtAGlance } from "@/components/work/at-a-glance";
import { CategoryTabs } from "@/components/work/category-tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { experience, projectDisplay } from "@/content/site-data";
import { caseStudyContent } from "@/content/case-study-content";
import { caseStudyCategories, subtitleOverrides } from "@/content/case-study-nav";
import { extractSections, parseCaseStudy } from "@/lib/case-study";

export function WorkDetailPage() {
  const { id } = useParams<{ id: string }>();
  const item = experience.find((e) => e.id === id);
  const [view, setView] = useState<"design" | "recruiter">("design");

  if (!item) {
    return <Navigate to="/work" replace />;
  }

  const idx = experience.findIndex((e) => e.id === id);
  const next = experience[(idx + 1) % experience.length];
  const raw = caseStudyContent[item.id];
  const caseStudy = raw ? parseCaseStudy(raw) : null;
  const overrides = subtitleOverrides[item.id];
  const sections = caseStudy
    ? extractSections(caseStudy.body).map((s) =>
        !s.subtitle && s.number !== undefined && overrides?.[s.number]
          ? { ...s, subtitle: overrides[s.number] }
          : s,
      )
    : [];
  const categories = caseStudyCategories[item.id];
  const display = projectDisplay(item);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
      <Link
        to="/work"
        className="inline-flex items-center gap-1 font-mono text-xs text-shell uppercase text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-3.5" />
        Back to work
      </Link>

      <p className="mt-8 font-mono text-[11px] text-shell uppercase text-primary">
        {display.title} &middot; {item.company} &middot; {item.period}
      </p>
      <h2 className="mt-2 font-serif text-4xl italic sm:text-5xl">
        {caseStudy?.title || display.title}
      </h2>
      <p className="mt-2 text-lg text-muted-foreground">
        {caseStudy?.meta || item.role}
      </p>

      {caseStudy ? (
        <>
          <div className="mt-6 flex flex-wrap gap-2">
            <ViewTab
              active={view === "design"}
              onClick={() => setView("design")}
              label="Design lead view"
              detail="Full deep-dive"
            />
            <ViewTab
              active={view === "recruiter"}
              onClick={() => setView("recruiter")}
              label="Recruiter view"
              detail="30-second skim"
            />
          </div>

          <div id="at-a-glance" className="scroll-mt-40">
            <AtAGlance
              rows={[
                { label: "Role", value: item.role },
                { label: "Timeline", value: item.period },
                { label: "Company", value: item.company },
                { label: "Domain", value: item.domain },
              ]}
            />
          </div>

          {view === "recruiter" ? (
            <div className="mt-10 max-w-2xl">
              <p className="text-lg leading-relaxed">{item.summary}</p>
              <h3 className="mt-10 font-serif text-2xl">What shipped</h3>
              <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              {categories && (
                <CategoryTabs categories={categories} sections={sections} />
              )}
              <div className="mt-10 grid gap-10 lg:grid-cols-[220px_1fr]">
                <CaseStudySidebar
                  sections={sections}
                  meta={[item.role, item.domain]}
                />
                <CaseStudyBody markdown={caseStudy.body} id={item.id} />
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <Badge variant="secondary" className="mt-4">
            {item.domain}
          </Badge>
          <p className="mt-8 text-lg leading-relaxed">{item.summary}</p>

          <h3 className="mt-10 font-serif text-2xl">What shipped</h3>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
            {item.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </>
      )}

      <div className="mt-16 border-t border-border pt-8">
        <p className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
          Read next
        </p>
        <Link
          to={`/work/${next.id}`}
          className="mt-2 block font-serif text-2xl italic text-primary hover:underline"
        >
          {projectDisplay(next).title} &rarr;
        </Link>
      </div>
    </div>
  );
}

function ViewTab({
  active,
  onClick,
  label,
  detail,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  detail: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-left text-xs transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground hover:border-primary/50",
      )}
    >
      <span className="font-semibold uppercase text-shell">{label}</span>
      <span className={cn("ml-1.5", active ? "text-primary-foreground/70" : "text-muted-foreground")}>
        &middot; {detail}
      </span>
    </button>
  );
}
