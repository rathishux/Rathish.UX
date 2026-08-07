import { cn } from "@/lib/utils";

export function WaxSeal({
  label,
  className,
  rotate = 0,
}: {
  label: string;
  className?: string;
  rotate?: number;
}) {
  return (
    <div
      className={cn(
        "absolute hidden size-16 items-center justify-center rounded-full border-2 border-dashed border-primary/50 text-primary md:flex",
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <div className="flex size-12 items-center justify-center rounded-full border border-primary/70">
        <span className="font-mono text-[10px] font-bold text-shell">
          {label}
        </span>
      </div>
    </div>
  );
}
