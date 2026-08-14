import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { profile } from "@/content/site-data";
import { DeskIllustration } from "@/components/home/desk-illustration";

export function AboutTeaser() {
  const [firstName] = profile.name.split(" ");

  return (
    <section className="mx-auto max-w-[1800px] px-6 py-16 sm:px-8 lg:px-12">
      <p className="font-mono text-[11px] text-shell uppercase text-primary">
        &#9670; The byline
      </p>
      <h3 className="mt-2 font-serif text-4xl italic sm:text-5xl">
        About <span className="text-primary">{firstName}</span>
      </h3>

      <div className="mt-10 grid gap-10 lg:grid-cols-[240px_1fr]">
        <div>
          {/* An illustration instead of a photo — no personal photos on
              this site. */}
          <div className="aspect-[4/5] overflow-hidden rounded-md border border-border bg-secondary/40 p-4">
            <DeskIllustration />
          </div>
          <p className="mt-3 font-serif italic">{profile.name}</p>
          <p className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
            &#9670; {profile.title}
          </p>
        </div>

        <div>
          <p className="font-serif text-2xl italic leading-snug">
            {profile.tagline}
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            {profile.summary}
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I call myself a designer who builds &mdash; I take ideas from
            sketch to a working interface myself, using{" "}
            <strong className="text-foreground">Claude</strong>,{" "}
            <strong className="text-foreground">Claude Code</strong>, the{" "}
            <strong className="text-foreground">Figma MCP</strong>, and{" "}
            <strong className="text-foreground">Cursor</strong> to close the
            gap between design and shipped product. This site is one
            example.
          </p>

          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 font-mono text-xs text-shell uppercase text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Read the full story
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
