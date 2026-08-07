import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { profile, stats } from "@/content/site-data";
import { WaxSeal } from "@/components/home/wax-seal";
import { RotatingWord } from "@/components/home/rotating-word";
import { FrontPageCard } from "@/components/home/front-page-card";

const FOCUS_WORDS = [
  "0-to-1 workflows",
  "the quiet UX",
  "enterprise SaaS",
  "data-driven design",
  "complex systems",
];

export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
      <WaxSeal label="UX" className="left-[40%] top-0" rotate={-8} />
      <WaxSeal label="AI" className="right-4 top-2" rotate={10} />
      <WaxSeal label="9Y" className="-left-2 top-1/2" rotate={-6} />

      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div>
          <p className="font-mono text-[11px] text-shell uppercase text-primary">
            &#9670; On the front page
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.title}
            <br />
            with a focus on
            <br />
            <RotatingWord
              words={FOCUS_WORDS}
              className="italic text-primary"
            />
          </h2>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/work">See the work</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>

        <FrontPageCard />
      </div>

      <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="font-serif text-3xl text-primary sm:text-4xl">
              {stat.value}
            </dt>
            <dd className="mt-1 font-mono text-[11px] text-shell uppercase text-muted-foreground">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
