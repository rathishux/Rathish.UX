import { useState } from "react";
import { cn } from "@/lib/utils";
import { beyondTheByline } from "@/content/site-data";

export function BeyondByline() {
  const [activeId, setActiveId] = useState(beyondTheByline[0].id);
  const active = beyondTheByline.find((t) => t.id === activeId) ?? beyondTheByline[0];

  return (
    <section className="mt-20">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-serif text-4xl italic sm:text-5xl">
          Beyond the <span className="text-primary">byline</span>
        </h3>
        <p className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
          Updated often &middot; Pick a section
        </p>
      </div>

      <div className="mt-8 grid border-y border-border sm:grid-cols-3 lg:grid-cols-5">
        {beyondTheByline.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveId(tab.id)}
              className={cn(
                "border-t-2 px-4 py-4 text-left transition-colors",
                isActive
                  ? "border-primary"
                  : "border-transparent hover:bg-secondary/40",
              )}
            >
              <span
                className={cn(
                  "block font-serif text-lg",
                  isActive ? "italic text-primary" : "text-foreground",
                )}
              >
                {tab.label}
              </span>
              <span className="mt-0.5 block font-mono text-[10px] text-shell uppercase text-muted-foreground">
                {tab.sublabel}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-8 font-serif text-lg italic text-muted-foreground">
        {active.intro}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {active.items.map((item, i) => (
          <div
            key={`${active.id}-${i}`}
            className="rounded-lg border border-border bg-card p-5"
          >
            <span className="font-mono text-[10px] text-shell uppercase text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 font-serif text-xl">{item.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
