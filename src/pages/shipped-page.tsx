import { ArrowUpRight } from "lucide-react";
import { sideProject, shippedTools } from "@/content/site-data";

const SCREENSHOTS = [
  { file: "nivyou-dashboard.webp", label: "Dashboard" },
  { file: "nivyou-log-dose.webp", label: "Dose log" },
  { file: "nivyou-log-weight.webp", label: "Weight & glucose" },
  { file: "nivyou-progress.webp", label: "Progress over time" },
];

export function ShippedPage() {
  return (
    <div className="mx-auto max-w-[1800px] px-6 py-16 sm:px-8 lg:px-12">
      <p className="font-mono text-[11px] text-shell uppercase text-primary">
        &#9670; Shipped &middot; Built with AI tools
      </p>
      <h2 className="mt-2 font-serif text-4xl italic sm:text-5xl">
        Built it. Then <span className="text-primary">shipped it.</span>
      </h2>
      <div className="mt-5 max-w-2xl space-y-4 text-lg text-muted-foreground">
        <p>
          This is where I keep the things I&rsquo;ve built and actually put
          in front of real users &mdash; not prototypes, not concept work.
          Real apps, on a real store, with real people using them.
        </p>
        <p>
          Getting there meant learning a new set of tools properly rather
          than dabbling: <strong className="text-foreground">Claude Code</strong>{" "}
          for writing and refactoring the actual application,{" "}
          <strong className="text-foreground">the Figma MCP</strong> for
          pulling designs straight into code,{" "}
          <strong className="text-foreground">Cursor</strong> for the
          day-to-day editing, and{" "}
          <strong className="text-foreground">GitHub</strong> for version
          control and deploys.
        </p>
        <p>
          Honestly, I never expected to be working on a backend, wiring up
          third-party integrations, or sitting inside the Play Store console
          figuring out release tracks and store listings &mdash; that&rsquo;s
          all developer territory, and it was the steepest part of the
          learning curve. It also turned out to be the most useful.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {shippedTools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-shell uppercase text-muted-foreground"
          >
            {tool}
          </span>
        ))}
      </div>

      <hr className="mt-14 border-border" />

      <section className="mt-14">
        <p className="font-mono text-[11px] text-shell uppercase text-primary">
          &#9670; Shipped &middot; Play Store
        </p>
        <h3 className="mt-2 font-serif text-3xl italic sm:text-4xl">
          {sideProject.name}
        </h3>
        <p className="mt-3 text-lg text-muted-foreground">{sideProject.tagline}</p>

        {/* Banner — replace with a real app banner image. */}
        <div className="mt-8 flex aspect-[21/9] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-secondary/30 text-center">
          <span className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
            Banner
          </span>
          <span className="text-sm text-muted-foreground">
            App banner image goes here
          </span>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
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

        <div className="mt-12 max-w-3xl">
          <h4 className="font-serif text-2xl">Why I built it</h4>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A friend of mine was seriously considering going on Wegovy. He
            spent weeks reading about it, weighing it up &mdash; and then
            decided to give a paleo diet one honest attempt first, as a last
            try before starting the drug. Watching him go back and forth,
            what struck me wasn&rsquo;t the decision itself. It was how
            little there was to help him actually see what was happening:
            weight in one place, food in another, no sense of the trend over
            weeks, nothing that would tell him whether the last try was
            working.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I already had some context here &mdash; I&rsquo;d worked on a
            Wegovy pilot during my time with Novo Nordisk, so I&rsquo;d seen
            the clinical side of how these programs get structured. NivYou
            came out of putting those two things together: one place to log
            dose, weight, and food, and see how they move together over
            time &mdash; whether you&rsquo;re on a GLP-1 or still deciding.
          </p>

          <h4 className="mt-10 font-serif text-2xl">
            Learning to build with Claude Code
          </h4>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I&rsquo;m a designer, not a formally trained engineer &mdash;
            this was my first real attempt at shipping a working app end to
            end rather than a prototype. I built almost all of it through
            Claude Code: describing the screens and flows I wanted,
            reviewing what came back, and iterating in short loops instead
            of writing every line by hand. It ended up being as much a crash
            course in how to direct an AI coding partner well as it was in
            building the app itself &mdash; being specific, reviewing
            properly, and knowing when to push back on what it gave me.
          </p>

          <h4 className="mt-10 font-serif text-2xl">Shipping it</h4>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            NivYou is live on the Play Store today, built and shipped by one
            person &mdash; design, build, and release &mdash; from a
            friend&rsquo;s dilemma to a working product.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SCREENSHOTS.map((shot) => (
            <figure key={shot.file}>
              <img
                src={`${import.meta.env.BASE_URL}nivyou/${shot.file}`}
                alt={`NivYou — ${shot.label}`}
                loading="lazy"
                className="aspect-[9/16] w-full rounded-lg border border-border object-cover"
              />
              <figcaption className="mt-2 font-mono text-[11px] text-shell uppercase text-muted-foreground">
                {shot.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
