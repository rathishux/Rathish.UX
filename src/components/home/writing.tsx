import { ArrowUpRight } from "lucide-react";
import { articles, profile } from "@/content/site-data";

export function Writing() {
  // Nothing published yet — render nothing rather than an empty shelf.
  if (articles.length === 0) return null;

  return (
    <section className="mx-auto max-w-[1800px] px-6 py-16 sm:px-8 lg:px-12">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] text-shell uppercase text-primary">
            &#9670; Articles published
          </p>
          <h3 className="mt-2 font-serif text-3xl italic sm:text-4xl">
            Things I&rsquo;ve <span className="text-primary">written</span>
          </h3>
        </div>
        <a
          href={profile.social.medium}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs text-shell uppercase text-primary hover:underline"
        >
          All on Medium
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>

      <div className="mt-10 border-t border-border">
        {articles.map((article, i) => (
          <a
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="group grid gap-2 border-b border-border py-6 transition-colors hover:bg-secondary/40 sm:grid-cols-[5rem_1fr_9rem] sm:items-baseline sm:gap-6"
          >
            <span className="font-mono text-xs text-shell text-muted-foreground">
              / {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h4 className="font-serif text-xl transition-colors group-hover:text-primary sm:text-2xl">
                {article.title}
              </h4>
              <p className="mt-1 font-mono text-[10px] text-shell uppercase text-muted-foreground">
                {article.category}
              </p>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                {article.excerpt}
              </p>
            </div>
            <span className="flex items-center gap-1 font-mono text-[11px] text-shell uppercase text-muted-foreground sm:justify-end">
              {article.date}
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
