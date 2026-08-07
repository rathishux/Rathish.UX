import { Hero } from "@/components/home/hero";
import { FeaturedWork } from "@/components/home/featured-work";
import { Domains } from "@/components/home/domains";
import { Timeline } from "@/components/home/timeline";
import { BriefGenerator } from "@/components/home/brief-generator";
import { ContactCta } from "@/components/home/contact-cta";

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Domains />
      <Timeline />
      <BriefGenerator />
      <ContactCta />
    </>
  );
}
