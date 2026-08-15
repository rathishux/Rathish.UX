import { cn } from "@/lib/utils";

// Renders a project's cover image when it has one. Entries without a
// thumbnail fall back to a flat colour block that bleeds edge-to-edge
// inside the card, same as before — the parent card's overflow-hidden
// and rounded corners do the clipping either way.
const LIGHT_PALETTE = ["bg-ink", "bg-secondary", "bg-accent", "bg-muted", "bg-primary/15"];
const DARK_PALETTE = ["bg-paper/10", "bg-primary/25", "bg-paper/15", "bg-accent/50", "bg-paper/20"];

export function WorkThumbnail({
  index,
  src,
  alt,
  variant = "light",
}: {
  index: number;
  src?: string;
  alt?: string;
  variant?: "light" | "dark";
}) {
  if (src) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}work-thumbs/${src}`}
        alt={alt ?? ""}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover"
      />
    );
  }

  const palette = variant === "dark" ? DARK_PALETTE : LIGHT_PALETTE;
  return <div className={cn("aspect-[16/10] w-full", palette[index % palette.length])} />;
}
