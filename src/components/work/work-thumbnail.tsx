import { cn } from "@/lib/utils";

// Placeholder plate for a Work card's thumbnail — a flat color block until
// a real project screenshot is dropped in. No overlay text, no rounding or
// inset of its own: it bleeds edge-to-edge inside the card, and the parent
// card's own `overflow-hidden` + rounded corners handle the clipping.
const LIGHT_PALETTE = ["bg-ink", "bg-secondary", "bg-accent", "bg-muted", "bg-primary/15"];
const DARK_PALETTE = ["bg-paper/10", "bg-primary/25", "bg-paper/15", "bg-accent/50", "bg-paper/20"];

export function WorkThumbnail({
  index,
  variant = "light",
}: {
  index: number;
  variant?: "light" | "dark";
}) {
  const palette = variant === "dark" ? DARK_PALETTE : LIGHT_PALETTE;
  return <div className={cn("aspect-[16/10] w-full", palette[index % palette.length])} />;
}
