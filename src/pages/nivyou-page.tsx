import { ArrowUpRight } from "lucide-react";
import { sideProject } from "@/content/site-data";

// Screenshot slots — swap the placeholder blocks below for real
// screenshots (public/nivyou/images/*.png, referenced from here) once
// they're supplied.
const SCREENSHOT_PLACEHOLDERS = ["Dashboard", "Dose log", "Weight & food", "Progress over time"];

export function NivYouPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      <p className="font-mono text-[11px] text-shell uppercase text-primary">
        &#9670; Side project &middot; Vibe-coded with Claude Code
      </p>
      <h2 className="mt-2 font-serif text-4xl italic sm:text-5xl">
        {sideProject.name}
      </h2>
      <p className="mt-3 text-lg text-muted-foreground">{sideProject.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {sideProject.tracks.map((track) => (
          <span
            key={track}
            className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-shell uppercase text-muted-foreground"
          >
            {track}
          </span>
        ))}
      </div>

      <a
        href={sideProject.playStoreUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 font-mono text-xs text-shell uppercase text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Get it on Play Store
        <ArrowUpRight className="size-3.5" />
      </a>

      {/* Screenshot gallery — placeholder blocks until real screenshots
          are supplied. */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {SCREENSHOT_PLACEHOLDERS.map((label) => (
          <div
            key={label}
            className="flex aspect-[9/16] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-secondary/30 text-center"
          >
            <span className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
              Screenshot
            </span>
            <span className="text-sm text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>

      <h3 className="mt-14 font-serif text-2xl">Why I built it</h3>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        I started a GLP-1 program myself and found the tracking side of it
        scattered — dose reminders in one app, weight in another, food
        logged nowhere in particular, and no single place to see how any of
        it was trending together over weeks and months rather than one
        day at a time. NivYou started as a way to fix that for myself
        first: one place for dose, weight, food, and the shape of the trend
        over time.
      </p>

      <h3 className="mt-10 font-serif text-2xl">
        Learning to build with Claude Code
      </h3>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        I&rsquo;m a designer, not a formally trained engineer &mdash; this
        was my first real attempt at shipping a working app end to end
        rather than a prototype. I built almost all of it through Claude
        Code: describing the screens and flows I wanted, reviewing what
        came back, and iterating in short loops instead of writing every
        line by hand. It ended up being as much a crash course in how to
        direct an AI coding partner well as it was in building the app
        itself.
      </p>

      <h3 className="mt-10 font-serif text-2xl">Shipping it</h3>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        NivYou is live on the Play Store today, built and shipped by one
        person &mdash; design, build, and release &mdash; from a personal
        need to a working product.
      </p>
    </div>
  );
}
