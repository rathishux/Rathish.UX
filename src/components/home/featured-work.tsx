import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { WorkCard } from "@/components/work/work-card";
import { externalProjects, projectDisplay, projectEntries } from "@/content/site-data";

export function FeaturedWork() {
  // Explicit running order for the homepage — the array in site-data stays in
  // employment order for the resume timeline, which is a different job.
  const order = [
    "infogain-desktop-web",
    "ericsson",
    "infogain-redesign",
    "kipi-bi",
    "infosys",
  ];
  const featured = projectEntries()
    .filter((item) => item.featured)
    .sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  const featuredExternal = externalProjects.filter((item) => item.featured);

  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1800px] px-6 py-16 sm:px-8 lg:px-12">
        <p className="font-mono text-[11px] text-shell uppercase text-primary">
          &#9670; Featured work
        </p>
        <h3 className="mt-2 font-serif text-3xl italic sm:text-4xl">
          Handpicked highlights
        </h3>
        <p className="mt-3 max-w-xl text-paper/70">
          A selection of shipped work from the last several years, by
          project.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featured.map((item, index) => {
            const display = projectDisplay(item);
            return (
              <WorkCard
                key={item.id}
                index={index}
                variant="dark"
                thumbnail={item.thumbnail}
                eyebrow={
                  display.title +
                  (item.shippedYear ? ` · Shipped ${item.shippedYear}` : "")
                }
                headline={item.oneLiner}
                meta={`${item.domain} · ${item.role}`}
                cta={item.externalUrl ? "Visit the site" : "Take a peek"}
                to={item.externalUrl ? undefined : `/work/${item.id}`}
                href={item.externalUrl}
                locked={item.locked}
              />
            );
          })}
          {featuredExternal.map((item, index) => (
            <WorkCard
              key={item.id}
              index={featured.length + index}
              variant="dark"
              thumbnail={item.thumbnail}
              eyebrow={item.name}
              headline={item.headline}
              meta={`${item.domain} · ${item.subhead}`}
              cta="Visit the site"
              href={item.url}
              locked={item.locked}
            />
          ))}
        </div>

        <Link
          to="/work"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-mono text-xs text-shell uppercase text-ink transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          See every project
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </section>
  );
}
