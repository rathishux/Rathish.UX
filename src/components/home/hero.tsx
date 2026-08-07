import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { profile, stats } from "@/content/site-data";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="font-mono text-[11px] text-shell uppercase text-primary">
        &#9670; On the front page
      </p>
      <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.1] tracking-tight sm:text-6xl">
        {profile.title} with a focus on{" "}
        <span className="italic text-primary">the quiet, unglamorous UX</span>{" "}
        problems.
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
