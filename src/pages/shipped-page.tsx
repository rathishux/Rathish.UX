import { sideProject, shippedTools } from "@/content/site-data";

const SCREENSHOTS = [
  { file: "nivyou-dashboard.webp", label: "Dashboard" },
  { file: "nivyou-log-dose.webp", label: "Dose log" },
  { file: "nivyou-log-weight.webp", label: "Weight & glucose" },
  { file: "nivyou-progress.webp", label: "Progress over time" },
];

function PlayStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={sideProject.playStoreUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-2.5 font-mono text-xs text-shell uppercase text-primary-foreground transition-colors hover:bg-primary/90 ${className}`}
    >
      {/* Play triangle, drawn rather than Google's official badge — that
          artwork is trademarked and has its own usage rules. */}
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 shrink-0">
        <path fill="currentColor" d="M4 2.5v19a1 1 0 0 0 1.52.85l15.2-9.5a1 1 0 0 0 0-1.7L5.52 1.65A1 1 0 0 0 4 2.5Z" />
      </svg>
      Get it on Google Play
    </a>
  );
}

export function ShippedPage() {
  return (
    <div className="mx-auto max-w-[1800px] px-6 py-16 sm:px-8 lg:px-12">
      {/* Heading holds the left rail, prose sits beside it — a single centred
          column left most of this page's width empty. */}
      <div className="grid gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
        <div>
          <p className="font-mono text-[11px] text-shell uppercase text-primary">
            &#9670; Side builds &middot; Made with AI tools
          </p>
          <h2 className="mt-2 font-serif text-4xl italic sm:text-5xl">
            Built it. Then <span className="text-primary">shipped it.</span>
          </h2>
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
        </div>

        <div className="max-w-[68ch] space-y-4 text-lg text-muted-foreground">
          <p>
            This is where I keep the things I&rsquo;ve built and actually put
            in front of real users &mdash; not prototypes, not concept work.
            Real apps, on a real store, with real people using them.
          </p>
          <p>
            Getting there meant learning a new set of tools properly rather
            than dabbling:{" "}
            <strong className="text-foreground">Claude Code</strong> for
            writing and refactoring the actual application,{" "}
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
      </div>

      <hr className="mt-14 border-border" />

      <section className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] text-shell uppercase text-primary">
              &#9670; Shipped &middot; Play Store
            </p>
            <h3 className="mt-2 font-serif text-3xl italic sm:text-4xl">
              {sideProject.name}
            </h3>
            <p className="mt-2 text-lg text-muted-foreground">
              {sideProject.tagline}
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <PlayStoreButton />
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {sideProject.tracks.map((track) => (
                <span
                  key={track}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-shell uppercase text-muted-foreground"
                >
                  {track}
                </span>
              ))}
            </div>
          </div>
        </div>

        <img
          src={`${import.meta.env.BASE_URL}nivyou/nivyou-banner.webp`}
          alt={`${sideProject.name} — ${sideProject.tagline}`}
          className="mt-8 aspect-[21/9] w-full rounded-lg border border-border object-cover"
        />

        {/* Write-up and screens side by side: the story reads at a comfortable
            measure while the screens fill the width that was empty before. */}
        <div className="mt-14 grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)]">
          <div className="max-w-[70ch]">
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

            <PlayStoreButton className="mt-8" />
          </div>

          <div className="grid grid-cols-2 gap-5">
            {SCREENSHOTS.map((shot) => (
              <figure key={shot.file}>
                <img
                  src={`${import.meta.env.BASE_URL}nivyou/${shot.file}`}
                  alt={`NivYou — ${shot.label}`}
                  loading="lazy"
                  className="aspect-[9/16] w-full rounded-lg border border-border object-cover"
                />
                <figcaption className="mt-2 font-mono text-[10px] text-shell uppercase text-muted-foreground">
                  {shot.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
