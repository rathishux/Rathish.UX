import { Link } from "react-router-dom";
import { ArrowRight, Lock } from "lucide-react";
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
  // Case study isn't public yet — render a lock overlay instead of the
  // usual hover CTA, and don't let the card navigate anywhere.
  locked?: boolean;
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
  locked = false,
}: WorkCardProps) {
  const dark = variant === "dark";
  const className = `group flex flex-col overflow-hidden rounded-lg border transition-colors ${
    locked ? "cursor-not-allowed" : "hover:border-primary"
  } ${dark ? "border-paper/15 bg-paper/[0.04]" : "border-border bg-card"}`;

  const inner = (
    <>
      <div className="relative">
        <WorkThumbnail index={index} src={thumbnail} alt={eyebrow} variant={variant} />
        {locked ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/70 backdrop-blur-[2px]">
            <Lock className="size-6 text-paper" aria-hidden="true" />
            <span className="font-mono text-[11px] text-paper uppercase tracking-wide">
              Private for now
            </span>
          </div>
        ) : (
          // The action rides the image on hover instead of taking a permanent
          // line under the copy. pointer-events-none so it never intercepts
          // the click meant for the card itself.
          <span className="pointer-events-none absolute bottom-3 right-3 inline-flex translate-y-1.5 items-center gap-2 rounded-full bg-ink/95 px-4 py-2 font-mono text-[11px] text-shell uppercase text-paper opacity-0 shadow-lg backdrop-blur-sm transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:translate-y-0">
            {cta}
            <ArrowRight className="size-3.5" />
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col px-5 py-5">
        <div>
          <p className="font-mono text-[11px] text-shell uppercase text-primary">
            {eyebrow}
          </p>
          {/* One line, always — card heights stay equal across the grid. */}
          <h4 className="mt-2 truncate font-serif text-xl sm:text-2xl" title={headline}>
            {headline}
          </h4>
          <p className={`mt-2 text-sm ${dark ? "text-paper/70" : "text-muted-foreground"}`}>
            {meta}
          </p>
        </div>
      </div>
    </>
  );

  if (locked) {
    return (
      <div className={className} aria-disabled="true">
        {inner}
      </div>
    );
  }

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
