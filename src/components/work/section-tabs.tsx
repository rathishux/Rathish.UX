import { cn } from "@/lib/utils";
import type { CaseStudyHeading } from "@/lib/case-study";

// Which sub-project of a shared case study is on screen. Deliberately a
// different shape from the design-lead / recruiter pills above it: those pick
// how much detail you see, these pick which project you're reading. Rendered
// as the same underlined tab row as "Beyond the byline" on the About page, so
// the two controls don't read as one undifferentiated row of four pills.
export function SectionTabs({
  sections,
  activeNumber,
  onSelect,
}: {
  sections: CaseStudyHeading[];
  activeNumber: number | undefined;
  onSelect: (n: number | undefined) => void;
}) {
  if (sections.length < 2) return null;

  return (
    <div className="mt-10">
      <p className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
        &#9670; Two projects under this brief &middot; Pick one
      </p>
      <div
        className="mt-3 grid border-y border-border sm:grid-cols-2"
        role="tablist"
      >
        {sections.map((section) => {
          const isActive = section.number === activeNumber;
          return (
            <button
              key={section.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelect(section.number)}
              className={cn(
                "border-t-2 px-4 py-4 text-left transition-colors",
                isActive ? "border-primary" : "border-transparent hover:bg-secondary/40",
              )}
            >
              <span
                className={cn(
                  "block font-serif text-lg",
                  isActive ? "italic text-primary" : "text-foreground",
                )}
              >
                {section.title}
              </span>
              {section.subtitle && (
                <span className="mt-0.5 block font-mono text-[10px] text-shell uppercase text-muted-foreground">
                  {section.subtitle}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
