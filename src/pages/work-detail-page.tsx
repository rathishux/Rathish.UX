import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WorkCover } from "@/components/work/work-cover";
import { CaseStudyBody } from "@/components/work/case-study-body";
import { experience, projectDisplay } from "@/content/site-data";
import { caseStudyContent } from "@/content/case-study-content";
import { extractSections, parseCaseStudy } from "@/lib/case-study";

export function WorkDetailPage() {
  const { id } = useParams<{ id: string }>();
  const item = experience.find((e) => e.id === id);

  if (!item) {
    return <Navigate to="/work" replace />;
  }

  const idx = experience.findIndex((e) => e.id === id);
  const next = experience[(idx + 1) % experience.length];
  const raw = caseStudyContent[item.id];
  const caseStudy = raw ? parseCaseStudy(raw) : null;
  const sections = caseStudy ? extractSections(caseStudy.body) : [];
  const display = projectDisplay(item);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      <Link
        to="/work"
        className="inline-flex items-center gap-1 font-mono text-xs text-shell uppercase text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-3.5" />
        Back to work
      </Link>

      <WorkCover
        title={display.title}
        subtitle={display.subtitle}
        className="mt-8 aspect-[21/9]"
      />

      <p className="mt-6 font-mono text-[11px] text-shell uppercase text-primary">
        {item.company} &middot; {item.period}
      </p>
      <h2 className="mt-2 font-serif text-4xl italic sm:text-5xl">
        {display.title}
      </h2>
      <p className="mt-2 text-lg text-muted-foreground">
        {caseStudy?.meta || item.role}
      </p>
      <Badge variant="secondary" className="mt-4">
        {item.domain}
      </Badge>

      {caseStudy ? (
        <>
          <h3 className="mt-10 font-serif text-3xl italic leading-snug sm:text-4xl">
            {caseStudy.title}
          </h3>

          {sections.length > 1 && (
            <nav className="mt-8 rounded-lg border border-border bg-secondary/30 p-5">
              <p className="font-mono text-[11px] text-shell uppercase text-primary">
                &#9670; In this case study
              </p>
              <ol className="mt-3 space-y-2">
                {sections.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={`#${s.slug}`}
                      className="text-sm text-foreground hover:text-primary hover:underline"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <CaseStudyBody markdown={caseStudy.body} id={item.id} />
        </>
      ) : (
        <>
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
