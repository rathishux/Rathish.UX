import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CaseStudyHeading } from "@/lib/case-study";
import type { CategoryGroup } from "@/content/case-study-nav";

function sectionsForCategory(
  sections: CaseStudyHeading[],
  numbers: number[],
): CaseStudyHeading[] {
  return sections.filter((s) => s.number !== undefined && numbers.includes(s.number));
}

export function CategoryTabs({
  categories,
  sections,
  activeNumber,
}: {
  categories: CategoryGroup[];
  sections: CaseStudyHeading[];
  activeNumber?: number;
}) {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  // Before the reader has scrolled into any section, default to the
  // first tab reading as selected rather than showing nothing active.
  const effectiveActive = activeNumber ?? categories[0]?.numbers[0];

  return (
    <div className="mt-6 flex w-full border-b border-border">
      {categories.map((cat) => {
        const items = sectionsForCategory(sections, cat.numbers);
        const isActive = effectiveActive !== undefined && cat.numbers.includes(effectiveActive);

        const tabClass = cn(
          "flex flex-1 items-center justify-center gap-1.5 border-b-2 -mb-px px-2 py-3 text-center font-mono text-xs uppercase text-shell transition-colors",
          isActive
            ? "border-primary font-semibold text-primary"
            : "border-transparent text-muted-foreground hover:text-foreground",
        );

        // A single-section category is just a direct jump link — a
        // dropdown with one option is a click and a half for no reason.
        if (items.length <= 1) {
          return (
            <a key={cat.label} href={items[0] ? `#${items[0].slug}` : undefined} className={tabClass}>
              {cat.label}
            </a>
          );
        }

        const isOpen = openLabel === cat.label;
        return (
          <div
            key={cat.label}
            className="relative flex flex-1"
            onMouseEnter={() => setOpenLabel(cat.label)}
            onMouseLeave={() => setOpenLabel((l) => (l === cat.label ? null : l))}
          >
            <button
              type="button"
              onClick={() => setOpenLabel((l) => (l === cat.label ? null : cat.label))}
              aria-expanded={isOpen}
              aria-haspopup="true"
              className={cn(tabClass, "w-full")}
            >
              {cat.label}
              <ChevronDown
                className={cn("size-3 shrink-0 transition-transform", isOpen && "rotate-180")}
              />
            </button>
            <div
              className={cn(
                "absolute left-1/2 top-full z-10 mt-2 w-64 -translate-x-1/2 rounded-lg border border-border bg-card py-2 shadow-lg transition-opacity",
                isOpen ? "visible opacity-100" : "invisible opacity-0",
              )}
            >
              {items.map((item) => (
                <a
                  key={item.slug}
                  href={`#${item.slug}`}
                  onClick={() => setOpenLabel(null)}
                  className="block px-4 py-2 text-sm normal-case text-foreground hover:bg-secondary hover:text-primary"
                >
                  {item.title.replace(/^\d+\.\s*/, "")}
                  {item.subtitle && (
                    <span className="block text-xs text-muted-foreground">
                      {item.subtitle}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
