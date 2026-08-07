import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/site-data";

export function ContactCta() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:px-8 sm:py-20">
        <p className="font-mono text-[11px] text-shell uppercase text-primary">
          &#9670; Letters to the editor
        </p>
        <h3 className="mt-2 font-serif text-3xl italic sm:text-4xl">
          Let&rsquo;s talk.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-paper/70">
          Roles, projects, or a quick chat about design — {profile.email} is
          the fastest way to reach {profile.nickname}.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link to="/contact">Get in touch</Link>
        </Button>
      </div>
    </section>
  );
}
