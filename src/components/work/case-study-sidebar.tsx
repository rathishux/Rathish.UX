import { cn } from "@/lib/utils";
import {
  activeTopLevel,
  subheadingsOf,
  topLevelHeadings,
  type CaseStudyHeading,
} from "@/lib/case-study";

// Two shapes, depending on how many top-level sections there are:
//
// - Exactly one (a single tab of a split case study, e.g. one Sabre
//   project page): showing that one heading in the sidebar would just
//   repeat the page's own title, so this shows its sub-headings directly.
//
// - More than one (a full, un-split case study): a stable accordion —
//   every top-level section stays listed the whole time, nothing appears
//   or disappears as you scroll. Only the active section's own
//   sub-headings expand inline beneath it. Swapping the entire visible
//   list in and out at each section boundary (the previous approach) is
//   what read as the nav "jumping."
export function CaseStudySidebar({
  headings,
  activeSlug,
}: {
  headings: CaseStudyHeading[];
  activeSlug: string | null;
}) {
  const topLevel = topLevelHeadings(headings);
  const activeH2 = activeTopLevel(headings, activeSlug) ?? topLevel[0];

  if (topLevel.length <= 1) {
    const items = activeH2 ? subheadingsOf(headings, activeH2.slug) : [];
    if (items.length === 0) return null;
    return (
      <aside className="lg:sticky lg:top-40 lg:h-fit">
        <nav className="space-y-5">
          {items.map((h) => (
            <SidebarLink key={h.slug} slug={h.slug} title={h.title} active={activeSlug} />
          ))}
        </nav>
      </aside>
    );
  }

  return (
    <aside className="lg:sticky lg:top-40 lg:h-fit">
      <nav className="space-y-5">
        {topLevel.map((h2) => {
          const isActiveSection = activeH2?.slug === h2.slug;
          const children = isActiveSection ? subheadingsOf(headings, h2.slug) : [];
          return (
            <div key={h2.slug}>
              <SidebarLink slug={h2.slug} title={h2.title} active={activeSlug} />
              {children.length > 0 && (
                <div className="mt-4 space-y-4 border-l border-border pl-4">
                  {children.map((h3) => (
                    <SidebarLink key={h3.slug} slug={h3.slug} title={h3.title} active={activeSlug} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
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
