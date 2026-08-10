import { domainStats, experience, projectDisplay, type Experience } from "@/content/site-data";

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
        {groups.map((group, i) => {
          const stats = domainStats[group.domain];
          return (
            <div key={group.domain} className="group border-b border-border py-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-shell text-muted-foreground">
                    / {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-serif text-6xl font-bold leading-none transition-colors group-hover:text-primary sm:text-7xl lg:text-8xl">
                    {group.domain}
                  </h4>
                </div>
                <div className="flex flex-col items-end gap-0.5 text-right text-sm text-muted-foreground">
                  {group.projects.map((project) => (
                    <span key={project}>{project}</span>
                  ))}
                </div>
              </div>

              {stats && (
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="grid gap-6 pt-8 sm:grid-cols-3">
                      {stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="font-serif text-4xl text-primary">{stat.value}</p>
                          <p className="mt-1 font-mono text-[10px] text-shell uppercase text-muted-foreground">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
