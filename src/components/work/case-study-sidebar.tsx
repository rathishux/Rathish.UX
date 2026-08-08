import { cn } from "@/lib/utils";
import {
  activeTopLevel,
  subheadingsOf,
  topLevelHeadings,
  type CaseStudyHeading,
} from "@/lib/case-study";

export function CaseStudySidebar({
  headings,
  activeSlug,
  meta,
}: {
  headings: CaseStudyHeading[];
  activeSlug: string | null;
  meta: string[];
}) {
  const activeH2 = activeTopLevel(headings, activeSlug);
  const subheadings = activeH2 ? subheadingsOf(headings, activeH2.slug) : [];
  // Nothing to drill into for the current section (some don't have
  // sub-headings) — fall back to the full top-level list so there's
  // always something to navigate by.
  const showTopLevel = subheadings.length === 0;
  const topLevel = topLevelHeadings(headings);

  return (
    <aside className="lg:sticky lg:top-40 lg:h-fit">
      <nav className="space-y-4">
        <SidebarLink slug="at-a-glance" title="At a glance" active={activeSlug} />

        {showTopLevel ? (
          topLevel.map((h) => (
            <SidebarLink
              key={h.slug}
              slug={h.slug}
              title={h.title}
              subtitle={h.subtitle}
              active={activeSlug}
            />
          ))
        ) : (
          <>
            {activeH2 && (
              <SidebarLink
                slug={activeH2.slug}
                title={activeH2.title}
                subtitle={activeH2.subtitle}
                active={activeSlug}
                emphasized
              />
            )}
            <div className="space-y-3 border-l border-border pl-4">
              {subheadings.map((h) => (
                <SidebarLink key={h.slug} slug={h.slug} title={h.title} active={activeSlug} />
              ))}
            </div>
          </>
        )}
      </nav>
      {meta.length > 0 && (
        <div className="mt-10 space-y-1 border-t border-border pt-6 font-mono text-[10px] text-shell uppercase text-muted-foreground">
          {meta.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      )}
    </aside>
  );
}

function SidebarLink({
  slug,
  title,
  subtitle,
  active,
  emphasized,
}: {
  slug: string;
  title: string;
  subtitle?: string;
  active: string | null;
  emphasized?: boolean;
}) {
  const isActive = active === slug;
  return (
    <a
      href={`#${slug}`}
      className={cn(
        "flex items-start gap-2 leading-snug transition-colors",
        emphasized ? "text-base font-medium" : "text-sm",
        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
      )}
    >
      <span
        className={cn(
          "mt-1.5 size-1.5 shrink-0 rounded-full",
          isActive ? "bg-primary" : "bg-transparent",
        )}
      />
      <span>
        {title}
        {subtitle && (
          <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
            {subtitle}
          </span>
        )}
      </span>
    </a>
  );
}
