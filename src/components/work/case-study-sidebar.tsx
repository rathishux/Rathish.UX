import { cn } from "@/lib/utils";
import {
  activeTopLevel,
  subheadingsOf,
  topLevelHeadings,
  type CaseStudyHeading,
} from "@/lib/case-study";

// Shows the active section's own sub-headings when it has any. Not every
// case study breaks its sections down that far, though — some are a flat
// list of numbered sections with no sub-headings at all — so this falls
// back to the full top-level list rather than going blank, which is what
// happened before: a doc with zero sub-headings anywhere (NFN Labs) had no
// sidebar nav at all, and a doc with a mix (Ericsson) had its nav vanish
// specifically on the sections that lacked them.
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
  const items = subheadings.length > 0 ? subheadings : topLevel;

  if (items.length === 0) return null;

  return (
    <aside className="lg:sticky lg:top-40 lg:h-fit">
      <nav className="space-y-3">
        {items.map((h) => (
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
