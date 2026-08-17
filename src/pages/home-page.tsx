import { Hero } from "@/components/home/hero";
import { AboutTeaser } from "@/components/home/about-teaser";
import { FeaturedWork } from "@/components/home/featured-work";
import { Domains } from "@/components/home/domains";
import { Timeline } from "@/components/home/timeline";
import { CritGenerator } from "@/components/home/crit-generator";
import { Writing } from "@/components/home/writing";
import { ContactCta } from "@/components/home/contact-cta";
import { Reveal } from "@/components/motion/reveal";

export function HomePage() {
  return (
    <>
      {/* Hero renders immediately — it's the first thing on screen, not
          something a reader scrolls to discover. */}
      <Hero />
      <Reveal>
        <FeaturedWork />
      </Reveal>
      <Reveal>
        <AboutTeaser />
      </Reveal>
      <Reveal>
        <Domains />
      </Reveal>
      <Reveal>
        <Timeline />
      </Reveal>
      <Reveal>
        <CritGenerator />
      </Reveal>
      {/* Renders nothing while `articles` is empty. */}
      <Reveal>
        <Writing />
      </Reveal>
      <Reveal>
        <ContactCta />
      </Reveal>
    </>
  );
}
