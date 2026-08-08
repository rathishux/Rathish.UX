import { cn } from "@/lib/utils";

// A typographic "nameplate" cover — no fabricated product screenshots.
// Real employer UI isn't something we have the rights or assets to show,
// so each project gets a masthead-style plate with its name instead.

export function WorkCover({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex aspect-[16/10] flex-col justify-between overflow-hidden rounded-md bg-ink px-5 py-4",
        className,
      )}
    >
      <span className="font-mono text-[10px] text-shell uppercase text-paper/60">
        {subtitle}
      </span>
      <div>
        <span className="mb-2 block h-px w-8 bg-primary" />
        <span className="block pb-1 font-serif text-2xl italic leading-snug text-paper sm:text-3xl">
          {title}
        </span>
      </div>
    </div>
  );
}
