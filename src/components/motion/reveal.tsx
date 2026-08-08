import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

// Fades a section up into place the first time it crosses the viewport.
// prefers-reduced-motion is handled globally in index.css, so this only
// needs the enter transition itself.
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
