import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WorkThumbnail } from "@/components/work/work-thumbnail";

export type WorkCardProps = {
  index: number;
  eyebrow: string;
  headline: string;
  meta: string;
  cta: string;
  thumbnail?: string;
  variant?: "light" | "dark";
  // Internal case study route, or an external site. Exactly one is set —
  // an entry with no case study of its own links out instead.
  to?: string;
  href?: string;
};

export function WorkCard({
  index,
  eyebrow,
  headline,
  meta,
  cta,
  thumbnail,
  variant = "light",
  to,
  href,
}: WorkCardProps) {
  const dark = variant === "dark";
  const className = `group flex flex-col overflow-hidden rounded-lg border transition-colors hover:border-primary ${
    dark ? "border-paper/15 bg-paper/[0.04]" : "border-border bg-card"
  }`;

  const inner = (
    <>
      <WorkThumbnail index={index} src={thumbnail} alt={eyebrow} variant={variant} />
      <div className="flex flex-1 flex-col justify-between px-5 py-5">
        <div>
          <p className="font-mono text-[11px] text-shell uppercase text-primary">
            {eyebrow}
          </p>
          <h4 className="mt-2 font-serif text-2xl sm:text-3xl">{headline}</h4>
          <p className={`mt-2 text-sm ${dark ? "text-paper/70" : "text-muted-foreground"}`}>
            {meta}
          </p>
        </div>
        <div className="mt-6 flex items-center gap-1 font-mono text-xs text-shell uppercase text-primary">
          {cta}
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link to={to ?? "/work"} className={className}>
      {inner}
    </Link>
  );
}
