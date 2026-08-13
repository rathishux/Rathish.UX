import { useEffect, useState } from "react";
import { Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { experience, profile, projectDisplay } from "@/content/site-data";

const SLIDES = [
  {
    eyebrow: "Most recent",
    title: projectDisplay(experience[0]).title,
    detail: `${experience[0].role} · ${experience[0].company}`,
  },
  {
    eyebrow: "In practice",
    title: "9+ Years",
    detail: "Shipping product design",
  },
  {
    eyebrow: "Reach",
    title: `${experience.length} Industries`,
    detail: Array.from(new Set(experience.map((e) => e.domain.split(" · ")[0]))).join(
      ", ",
    ),
  },
  {
    eyebrow: "Based in",
    title: profile.location,
    detail: "Available for remote collaboration",
  },
];

export function FrontPageCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5500);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[index];

  return (
    <div className="flex aspect-[4/3] w-full max-w-md flex-col justify-between rounded-lg bg-ink p-6 text-paper shadow-xl sm:aspect-square md:aspect-[4/3]">
      <div className="flex items-center justify-between border-b border-paper/15 pb-3 font-mono text-[10px] text-shell uppercase text-paper/60">
        <span>Front page today</span>
        <span className="flex items-center gap-1.5 text-primary">
          <span
            className="size-1.5 rounded-full bg-primary"
            style={{ animation: "pulse-dot 1.6s ease-in-out infinite" }}
          />
          Live {String(index + 1).padStart(2, "0")}/{String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>

      <div key={index} style={{ animation: "slide-up-in 0.5s ease" }}>
        <Compass className="size-6 text-paper/70" strokeWidth={1.5} />
        <p className="mt-6 font-mono text-[10px] text-shell uppercase text-paper/50">
          {slide.eyebrow}
        </p>
        <h3 className="mt-1 pb-1 font-serif text-3xl italic leading-snug">
          {slide.title}
        </h3>
        <p className="mt-2 text-sm text-paper/70">{slide.detail}</p>
      </div>

      <div className="flex items-center justify-between border-t border-paper/15 pt-3">
        <span className="font-mono text-[10px] text-shell uppercase text-paper/50">
          {profile.title}
        </span>
        <div className="flex gap-1.5">
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              className={cn(
                "size-1.5 rounded-full transition-colors",
                i === index ? "bg-primary" : "bg-paper/25",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
