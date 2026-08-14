import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { DeskIllustration } from "@/components/home/desk-illustration";
import { BeyondByline } from "@/components/about/beyond-byline";
import {
  certifications,
  education,
  profile,
  sideProject,
} from "@/content/site-data";

export function AboutPage() {
  return (
    <div className="mx-auto max-w-[1800px] px-6 py-16 sm:px-8 lg:px-12">
      <p className="font-mono text-[11px] text-shell uppercase text-primary">
        &#9670; The byline
      </p>
      <h2 className="mt-2 font-serif text-4xl italic sm:text-5xl">
        About <span className="text-primary">{profile.name.split(" ")[0]}</span>
      </h2>

      <div className="mt-10 grid gap-10 lg:grid-cols-[340px_1fr] lg:gap-14">
        <div>
          <div className="aspect-[4/5] overflow-hidden rounded-md border border-border bg-secondary/40 p-6">
            <DeskIllustration />
          </div>
          <p className="mt-3 font-serif italic">{profile.name}</p>
          <p className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
            &#9670; {profile.title}
          </p>
        </div>

        {/* Prose is capped well short of the column so lines stay at a
            readable length now that the page container is much wider. */}
        <div className="max-w-[75ch]">
          <p className="text-lg leading-relaxed">
            I&rsquo;ve spent the last 9+ years designing for the gap between
            complex systems and the people who have to use them &mdash;
            aviation slot management, sourcing platforms for a global telecom,
            healthcare records, fintech and supply-chain workflows. The thread
            isn&rsquo;t the industry. It&rsquo;s the shape of the problem: a
            system built by and for domain experts, used every day by people
            who don&rsquo;t have time to think like one.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            I build my own things too, taking ideas from sketch to shipped
            interface myself with{" "}
            <strong className="text-foreground">Claude</strong>,{" "}
            <strong className="text-foreground">Claude Code</strong>, the{" "}
            <strong className="text-foreground">Figma MCP</strong>, and{" "}
            <strong className="text-foreground">Cursor</strong>. This site is
            one example. So is{" "}
            <strong className="text-foreground">{sideProject.name}</strong>,{" "}
            {sideProject.description}{" "}
            <Link
              to="/shipped"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              How I built it
              <ArrowUpRight className="size-3.5" />
            </Link>
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm">
              <span className="font-mono text-[10px] text-shell uppercase text-primary">
                Email
              </span>
              <a href={`mailto:${profile.email}`} className="hover:text-primary">
                {profile.email}
              </a>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm">
              <span className="font-mono text-[10px] text-shell uppercase text-primary">
                Based in
              </span>
              {profile.location} &middot; {profile.openToCities.join(", ")}
            </span>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
                Education
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {education.map((edu) => (
                  <li key={edu.school}>
                    {edu.credential} — {edu.school}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
                Certifications
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {certifications.map((cert) => (
                  <li key={cert.name}>
                    {cert.name}
                    {cert.issuer ? ` — ${cert.issuer}` : ""}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <p className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
              &#10033; Thanks for reading
            </p>
            <p className="mt-2 inline-block border-b-2 border-primary pb-1 font-signature text-3xl italic">
              {profile.name}
            </p>
          </div>
        </div>
      </div>

      <BeyondByline />
    </div>
  );
}
