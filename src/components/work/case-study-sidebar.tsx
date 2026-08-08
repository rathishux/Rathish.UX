import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import type { CaseStudySection } from "@/lib/case-study";

export function CaseStudySidebar({
  sections,
  meta,
}: {
  sections: CaseStudySection[];
  meta: string[];
}) {
  const slugs = ["at-a-glance", ...sections.map((s) => s.slug)];
  const active = useActiveSection(slugs);

  return (
    <aside className="lg:sticky lg:top-40 lg:h-fit">
      <nav className="space-y-3">
        <SidebarLink slug="at-a-glance" label="At a glance" active={active} />
        {sections.map((s) => (
          <SidebarLink key={s.slug} slug={s.slug} label={s.title} active={active} />
        ))}
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
  label,
  active,
}: {
  slug: string;
  label: string;
  active: string | null;
}) {
  const isActive = active === slug;
  return (
    <a
      href={`#${slug}`}
      className={cn(
        "flex items-start gap-2 text-sm leading-snug transition-colors",
        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
      )}
    >
      <span
        className={cn(
          "mt-1.5 size-1.5 shrink-0 rounded-full",
          isActive ? "bg-primary" : "bg-transparent",
        )}
      />
      {label}
    </a>
  );
}
