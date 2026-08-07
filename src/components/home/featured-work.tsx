import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WorkCover } from "@/components/work/work-cover";
import { experience } from "@/content/site-data";

export function FeaturedWork() {
  const featured = experience.slice(0, 4);

  return (
    <section className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <p className="font-mono text-[11px] text-shell uppercase text-primary">
          &#9670; Featured work
        </p>
        <h3 className="mt-2 font-serif text-3xl italic sm:text-4xl">
          Handpicked highlights
        </h3>
        <p className="mt-3 max-w-xl text-muted-foreground">
          A selection of shipped work from the last several years, by
          company.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {featured.map((item) => (
            <Link
              key={item.id}
              to={`/work/${item.id}`}
              className="group flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <div>
                <WorkCover company={item.company} domain={item.domain} />
                <div className="mt-4 flex items-center justify-between gap-2">
                  <Badge variant="outline">{item.domain}</Badge>
                  <span className="font-mono text-[11px] text-shell text-muted-foreground">
                    {item.period.split("–")[1]?.trim() || item.period}
                  </span>
                </div>
                <h4 className="mt-4 font-serif text-2xl">{item.company}</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.summary}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1 font-mono text-xs text-shell uppercase text-primary">
                Take a peek
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
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
