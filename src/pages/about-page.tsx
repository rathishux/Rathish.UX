import { Badge } from "@/components/ui/badge";
import {
  certifications,
  education,
  interests,
  profile,
  sideProject,
  skills,
} from "@/content/site-data";

export function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      <p className="font-mono text-[11px] text-shell uppercase text-primary">
        &#9670; The byline
      </p>
      <h2 className="mt-2 font-serif text-4xl italic sm:text-5xl">
        About <span className="text-primary">{profile.name.split(" ")[0]}</span>
      </h2>

      <p className="mt-8 text-lg leading-relaxed">
        I&rsquo;ve spent the last 9+ years designing for the gap between
        complex systems and the people who have to use them &mdash; aviation
        slot management, sourcing platforms for a global telecom, healthcare
        records, fintech and supply-chain workflows. The thread connecting
        all of it isn&rsquo;t the industry. It&rsquo;s the shape of the
        problem: a system built by and for domain experts, used every day by
        people who don&rsquo;t have time to think like one.
      </p>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        I like the unglamorous parts of the job &mdash; sitting with the
        person who actually uses the tool, watching where they hesitate,
        finding the workaround they&rsquo;ve quietly built for themselves
        because the product never asked. Most of the case studies on this
        site started from exactly that: not a feature request, but a few
        minutes of watching someone work that reframed the whole problem.
      </p>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Outside client work, I build my own things. I&rsquo;m interested in
        closing the gap between design and shipped code myself rather than
        handing a spec across a wall &mdash; this site is one example, built
        with Claude, Claude Code, the Figma MCP, and Cursor. I recently
        built <strong className="text-foreground">{sideProject.name}</strong>:{" "}
        {sideProject.description}
      </p>

      <p className="mt-4 text-muted-foreground">
        Based in {profile.location}. Reachable at{" "}
        <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
          {profile.email}
        </a>
        .
      </p>

      <h3 className="mt-14 font-serif text-2xl">Core skills</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline">
            {skill}
          </Badge>
        ))}
      </div>

      <h3 className="mt-14 font-serif text-2xl">Education</h3>
      <ul className="mt-4 space-y-2 text-muted-foreground">
        {education.map((edu) => (
          <li key={edu.school}>
            {edu.credential} — {edu.school}
          </li>
        ))}
      </ul>

      <h3 className="mt-14 font-serif text-2xl">Certifications</h3>
      <ul className="mt-4 space-y-2 text-muted-foreground">
        {certifications.map((cert) => (
          <li key={cert.name}>
            {cert.name}
            {cert.issuer ? ` — ${cert.issuer}` : ""}
          </li>
        ))}
      </ul>

      <h3 className="mt-14 font-serif text-2xl">Off the clock</h3>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        When I&rsquo;m not at a screen: cycling, keeping up a fitness
        routine, working through a long watchlist of movies and series, and
        reading more about space science than is probably useful for my day
        job.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {interests.map((interest) => (
          <Badge key={interest} variant="outline">
            {interest}
          </Badge>
        ))}
      </div>
    </div>
  );
}
