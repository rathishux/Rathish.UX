import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WorkThumbnail } from "@/components/work/work-thumbnail";
import { experience, projectDisplay } from "@/content/site-data";

export function FeaturedWork() {
  const featured = experience.filter((item) => item.featured);

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
              <Link
                key={item.id}
                to={`/work/${item.id}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-paper/15 bg-paper/[0.04] transition-colors hover:border-primary"
              >
                <WorkThumbnail index={index} variant="dark" />
                <div className="flex flex-1 flex-col justify-between px-5 py-5">
                  <div>
                    <p className="font-mono text-[11px] text-shell uppercase text-primary">
                      {display.title}
                      {item.shippedYear && ` · Shipped ${item.shippedYear}`}
                    </p>
                    <h4 className="mt-2 font-serif text-2xl sm:text-3xl">{item.oneLiner}</h4>
                    <p className="mt-2 text-sm text-paper/70">
                      {item.domain} &middot; {item.role}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1 font-mono text-xs text-shell uppercase text-primary">
                    Take a peek
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <Link
          to="/work"
          className="mt-8 inline-flex items-center gap-1 font-mono text-xs text-shell uppercase text-primary hover:underline"
        >
          Explore the full archive
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </section>
  );
}
