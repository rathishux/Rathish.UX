import { cn } from "@/lib/utils";
import {
  activeTopLevel,
  subheadingsOf,
  topLevelHeadings,
  type CaseStudyHeading,
} from "@/lib/case-study";

// Top-level navigation between a case study's numbered sections lives in
// the category tabs above the content — this sidebar's only job is to
// show where the reader is within whichever section is active, so it's
// just that section's sub-headings, nothing else.
export function CaseStudySidebar({
  headings,
  activeSlug,
}: {
  headings: CaseStudyHeading[];
  activeSlug: string | null;
}) {
  const topLevel = topLevelHeadings(headings);
  const activeH2 = activeTopLevel(headings, activeSlug) ?? topLevel[0];
  const subheadings = activeH2 ? subheadingsOf(headings, activeH2.slug) : [];

  if (subheadings.length === 0) return null;

  return (
    <aside className="lg:sticky lg:top-40 lg:h-fit">
      <nav className="space-y-3">
        {subheadings.map((h) => (
          <SidebarLink key={h.slug} slug={h.slug} title={h.title} active={activeSlug} />
        ))}
      </nav>
    </aside>
  );
}

function SidebarLink({
  slug,
  title,
  active,
}: {
  slug: string;
  title: string;
  active: string | null;
}) {
  const isActive = active === slug;
  return (
    <a
      href={`#${slug}`}
      className={cn(
        "flex items-start gap-2 text-sm leading-snug transition-colors",
        isActive ? "font-semibold text-primary" : "text-muted-foreground hover:text-foreground",
      )}
    >
      <span
        className={cn(
          "mt-1.5 size-1.5 shrink-0",
          isActive ? "bg-primary" : "bg-transparent",
        )}
      />
      <span>{title}</span>
    </a>
  );
}
