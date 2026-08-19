import { WorkCard } from "@/components/work/work-card";
import { externalProjects, projectDisplay, projectEntries } from "@/content/site-data";

export function WorkPage() {
  return (
    <div className="mx-auto max-w-[1800px] px-6 py-16 sm:px-8 lg:px-12">
      <p className="font-mono text-[11px] text-shell uppercase text-primary">
        &#9670; The back catalogue
      </p>
      <h2 className="mt-2 font-serif text-4xl italic sm:text-5xl">Work</h2>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Every stop, in order, with what actually shipped.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projectEntries().map((item, index) => {
          const display = projectDisplay(item);
          return (
            <WorkCard
              key={item.id}
              index={index}
              thumbnail={item.thumbnail}
              eyebrow={
                display.title +
                (item.shippedYear ? ` · Shipped ${item.shippedYear}` : "")
              }
              headline={item.oneLiner}
              meta={`${item.domain} · ${item.role}`}
              cta={item.externalUrl ? "Visit the site" : "Read the case"}
              to={item.externalUrl ? undefined : `/work/${item.id}`}
              href={item.externalUrl}
              locked={item.locked}
            />
          );
        })}
        {externalProjects.map((item, index) => (
          <WorkCard
            key={item.id}
            index={projectEntries().length + index}
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
    </div>
  );
}
