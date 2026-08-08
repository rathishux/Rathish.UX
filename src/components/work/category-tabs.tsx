import { useState } from "react";
import { cn } from "@/lib/utils";
import type { CaseStudySection } from "@/lib/case-study";
import type { CategoryGroup } from "@/content/case-study-nav";

function sectionsForCategory(
  sections: CaseStudySection[],
  numbers: number[],
): CaseStudySection[] {
  return sections.filter((s) => s.number !== undefined && numbers.includes(s.number));
}

export function CategoryTabs({
  categories,
  sections,
}: {
  categories: CategoryGroup[];
  sections: CaseStudySection[];
}) {
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {categories.map((cat) => {
        const items = sectionsForCategory(sections, cat.numbers);

        // A single-section category is just a direct jump link — a
        // dropdown with one option is a click and a half for no reason.
        if (items.length <= 1) {
          return (
            <a
              key={cat.label}
              href={items[0] ? `#${items[0].slug}` : undefined}
              className="rounded-full border border-border px-4 py-2 font-mono text-xs uppercase text-shell text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {cat.label}
            </a>
          );
        }

        const isOpen = openLabel === cat.label;
        return (
          <div
            key={cat.label}
            className="relative"
            onMouseEnter={() => setOpenLabel(cat.label)}
            onMouseLeave={() => setOpenLabel((l) => (l === cat.label ? null : l))}
          >
            <button
              type="button"
              onClick={() => setOpenLabel((l) => (l === cat.label ? null : cat.label))}
              aria-expanded={isOpen}
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-xs uppercase text-shell transition-colors",
                isOpen
                  ? "border-primary text-primary"
                  : "border-border text-foreground hover:border-primary hover:text-primary",
              )}
            >
              {cat.label}
            </button>
            <div
              className={cn(
                "absolute left-0 top-full z-10 mt-2 w-64 rounded-lg border border-border bg-card py-2 shadow-lg transition-opacity",
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
