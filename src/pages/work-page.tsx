import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WorkThumbnail } from "@/components/work/work-thumbnail";
import { experience, projectDisplay } from "@/content/site-data";

export function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
      <p className="font-mono text-[11px] text-shell uppercase text-primary">
        &#9670; The back catalogue
      </p>
      <h2 className="mt-2 font-serif text-4xl italic sm:text-5xl">Work</h2>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Every stop, in order, with what actually shipped.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {experience.map((item, index) => {
          const display = projectDisplay(item);
          return (
            <Link
              key={item.id}
              to={`/work/${item.id}`}
              className="group flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <div>
                <WorkThumbnail index={index} />
                <div className="mt-4">
                  {item.shippedYear && (
                    <p className="font-mono text-[11px] text-shell uppercase text-primary">
                      Shipped {item.shippedYear}
                    </p>
                  )}
                  <h4 className="mt-1 font-serif text-3xl">{display.title}</h4>
                  <p className="mt-2 font-mono text-[11px] text-shell uppercase text-muted-foreground">
                    {item.domain}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-shell uppercase text-muted-foreground">
                    {item.role} &middot; {item.company}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-1 font-mono text-xs text-shell uppercase text-primary">
                Read the case
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
