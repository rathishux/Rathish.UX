import { experience, projectDisplay, type Experience } from "@/content/site-data";

type DomainGroup = { domain: string; projects: string[] };

// Groups experience entries by their top-level domain (the bit before the
// first "·") — e.g. "Aviation · Enterprise SaaS" and "Aviation · Admin
// tooling" both group under "Aviation" — in first-appearance order.
function groupByDomain(items: Experience[]): DomainGroup[] {
  const order: string[] = [];
  const projectsByDomain = new Map<string, string[]>();
  for (const item of items) {
    const domain = item.domain.split(" · ")[0];
    if (!projectsByDomain.has(domain)) {
      projectsByDomain.set(domain, []);
      order.push(domain);
    }
    projectsByDomain.get(domain)!.push(projectDisplay(item).title);
  }
  return order.map((domain) => ({ domain, projects: projectsByDomain.get(domain)! }));
}

export function Domains() {
  const groups = groupByDomain(experience);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
      <p className="font-mono text-[11px] text-shell uppercase text-primary">
        &#9670; Domains I&rsquo;ve worked in &middot; Hover for the receipts
      </p>
      <h3 className="mt-2 font-serif text-3xl italic sm:text-4xl">
        Across industries
      </h3>

      <div className="mt-10 border-t border-border">
        {groups.map((group, i) => (
          <div
            key={group.domain}
            className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-border py-6"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-shell text-muted-foreground">
                / {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="font-serif text-4xl transition-colors group-hover:text-primary sm:text-5xl">
                {group.domain}
              </h4>
            </div>
            <div className="flex flex-col items-end gap-0.5 text-right font-mono text-xs text-shell uppercase text-muted-foreground opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
              {group.projects.map((project) => (
                <span key={project}>{project}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
