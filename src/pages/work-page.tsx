import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WorkCover } from "@/components/work/work-cover";
import { experience } from "@/content/site-data";

export function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="font-mono text-[11px] text-shell uppercase text-primary">
        &#9670; The back catalogue
      </p>
      <h2 className="mt-2 font-serif text-4xl italic sm:text-5xl">Work</h2>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Every stop, in order, with what actually shipped.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {experience.map((item) => (
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
                  {item.period}
                </span>
              </div>
              <h4 className="mt-4 font-serif text-2xl">{item.company}</h4>
              <p className="mt-1 font-mono text-[11px] text-shell uppercase text-muted-foreground">
                {item.role}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {item.summary}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 font-mono text-xs text-shell uppercase text-primary">
              Read the case
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
