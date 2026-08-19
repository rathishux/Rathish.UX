import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CaseStudyBody } from "@/components/work/case-study-body";
import { CaseStudySidebar } from "@/components/work/case-study-sidebar";
import { AtAGlance } from "@/components/work/at-a-glance";
import { SectionTabs } from "@/components/work/section-tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { articles, experience, projectDisplay, projectEntries } from "@/content/site-data";
import { caseStudyContent } from "@/content/case-study-content";
import { caseStudyImageFolder, caseStudySections } from "@/content/case-study-nav";
import { extractHeadings, parseCaseStudy, sliceSection } from "@/lib/case-study";
import { useActiveSection } from "@/hooks/use-active-section";

export function WorkDetailPage() {
  const { id } = useParams<{ id: string }>();
  const item = experience.find((e) => e.id === id);
  const sectionNumbers = item ? caseStudySections[item.id] : undefined;

  const [view, setView] = useState<"design" | "recruiter">("design");
  const [activeNumber, setActiveNumber] = useState<number | undefined>(sectionNumbers?.[0]);

  // Reset local UI state on navigating between work items — otherwise a
  // leftover tab/view selection from the previous item's page can persist
  // into one it doesn't apply to (React Router reuses this component
  // instance across /work/:id routes, it doesn't remount).
  useEffect(() => {
    setView("design");
    setActiveNumber(sectionNumbers?.[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // Hooks run unconditionally on every render, so all of this is computed
  // with safe fallbacks before the early return below for a missing item.
  const raw = item ? caseStudyContent[item.id] : undefined;
  const fullCaseStudy = raw ? parseCaseStudy(raw) : null;
  // Several work items share one source doc, each rendering only its own
  // numbered section(s) — sliced here, and (when there's more than one)
  // switched between via the tabs below instead of scrolling one long page.
  const caseStudy = fullCaseStudy
    ? {
        ...fullCaseStudy,
        body: sectionNumbers
          ? sliceSection(fullCaseStudy.body, activeNumber ?? sectionNumbers[0])
          : fullCaseStudy.body,
      }
    : null;
  const headings = caseStudy ? extractHeadings(caseStudy.body) : [];
  const sectionTabs = sectionNumbers
    ? extractHeadings(fullCaseStudy?.body ?? "").filter(
        (h) => h.level === 2 && h.number !== undefined && sectionNumbers.includes(h.number),
      )
    : [];
  const activeSlug = useActiveSection(["at-a-glance", ...headings.map((h) => h.slug)]);

  if (!item || item.locked) {
    return <Navigate to="/work" replace />;
  }

  // Cycle only through unlocked items that have a card, so "Read next" never
  // lands on an employer-only entry or a locked case study.
  const cards = projectEntries().filter((e) => !e.locked);
  const idx = Math.max(cards.findIndex((e) => e.id === id), 0);
  const next = cards[(idx + 1) % cards.length];
  const display = projectDisplay(item);
  const relatedArticles = articles.filter((a) => a.relatedWorkIds?.includes(item.id));
  // A split-out item (sectionNumbers set) always uses its own project
  // title/role — the shared doc's own H1 describes the whole original
  // project, not this one slice of it.
  const titleText = sectionNumbers ? display.title : caseStudy?.title || display.title;
  const metaText = sectionNumbers ? item.role : caseStudy?.meta || item.role;

  return (
    <div className="mx-auto max-w-[1800px] px-6 py-16 sm:px-8 lg:px-12">
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
      <h2 className="mt-2 font-serif text-4xl italic sm:text-5xl">{titleText}</h2>
      <p className="mt-2 text-lg text-muted-foreground">{metaText}</p>

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
              <SectionTabs
                sections={sectionTabs}
                activeNumber={activeNumber}
                onSelect={setActiveNumber}
              />
              <div className="mt-10 grid gap-10 lg:grid-cols-[220px_1fr]">
                <CaseStudySidebar headings={headings} activeSlug={activeSlug} />
                <CaseStudyBody
                  markdown={caseStudy.body}
                  id={caseStudyImageFolder[item.id] ?? item.id}
                />
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

      {relatedArticles.length > 0 && (
        <div className="mt-16 border-t border-border pt-8">
          <p className="font-mono text-[11px] text-shell uppercase text-primary">
            &#9670; Related reading
          </p>
          {relatedArticles.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="group mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1"
            >
              <span className="font-serif text-2xl italic transition-colors group-hover:text-primary">
                {article.title}
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-[11px] text-shell uppercase text-muted-foreground">
                {article.category} &middot; {article.date}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
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
      {detail && (
        <span className={cn("ml-1.5", active ? "text-primary-foreground/70" : "text-muted-foreground")}>
          &middot; {detail}
        </span>
      )}
    </button>
  );
}
