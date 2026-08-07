import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WorkCover } from "@/components/work/work-cover";
import { experience, projectDisplay } from "@/content/site-data";

export function FeaturedWork() {
  const featured = experience.slice(0, 4);

  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {featured.map((item) => {
            const display = projectDisplay(item);
            return (
              <Link
                key={item.id}
                to={`/work/${item.id}`}
                className="group flex flex-col justify-between rounded-lg border border-paper/15 bg-paper/[0.04] p-6 transition-colors hover:border-primary"
              >
                <div>
                  <WorkCover title={display.title} subtitle={display.subtitle} />
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <Badge
                      variant="outline"
                      className="border-paper/30 bg-transparent text-paper"
                    >
                      {item.domain}
                    </Badge>
                    <span className="font-mono text-[11px] text-shell text-paper/50">
                      {item.period.split("–")[1]?.trim() || item.period}
                    </span>
                  </div>
                  <h4 className="mt-4 font-serif text-2xl">{display.title}</h4>
                  <p className="mt-2 text-sm text-paper/70">{item.summary}</p>
                </div>
                <div className="mt-6 flex items-center gap-1 font-mono text-xs text-shell uppercase text-primary">
                  Take a peek
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
