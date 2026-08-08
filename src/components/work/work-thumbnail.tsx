import { cn } from "@/lib/utils";

// Placeholder plate for a Work card's thumbnail — a flat color block until
// a real project screenshot is dropped in. No overlay text on purpose: once
// swapped for an image, the info below the thumbnail carries all of it.
const PALETTE = ["bg-ink", "bg-secondary", "bg-accent", "bg-muted", "bg-primary/15"];

export function WorkThumbnail({ index }: { index: number }) {
  return (
    <div
      className={cn(
        "aspect-[16/10] w-full overflow-hidden rounded-md",
        PALETTE[index % PALETTE.length],
      )}
    />
  );
}
