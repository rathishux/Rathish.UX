import { Hero } from "@/components/home/hero";
import { FeaturedWork } from "@/components/home/featured-work";
import { Domains } from "@/components/home/domains";
import { Timeline } from "@/components/home/timeline";
import { BriefGenerator } from "@/components/home/brief-generator";
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
        <Domains />
      </Reveal>
      <Reveal>
        <Timeline />
      </Reveal>
      <Reveal>
        <BriefGenerator />
      </Reveal>
      <Reveal>
        <ContactCta />
      </Reveal>
    </>
  );
}
