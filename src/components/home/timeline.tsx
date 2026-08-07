import { Badge } from "@/components/ui/badge";
import { education, experience } from "@/content/site-data";

export function Timeline() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="font-mono text-[11px] text-shell uppercase text-primary">
        &#9670; The journey
      </p>
      <h3 className="mt-2 font-serif text-3xl italic sm:text-4xl">
        Work &amp; education
      </h3>

      <ol className="mt-10 space-y-8 border-l border-border pl-6">
        {experience.map((item) => (
          <li key={item.id} className="relative">
            <span className="absolute -left-[29px] top-1.5 size-2.5 rounded-full bg-primary" />
            <p className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
              {item.period}
            </p>
            <h4 className="mt-1 font-serif text-xl">
              {item.role} &middot; {item.company}
            </h4>
            <Badge variant="secondary" className="mt-2">
              {item.domain}
            </Badge>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              {item.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </li>
        ))}

        {education.map((edu) => (
          <li key={edu.school} className="relative">
            <span className="absolute -left-[29px] top-1.5 size-2.5 rounded-full bg-muted-foreground" />
            <p className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
              Education
            </p>
            <h4 className="mt-1 font-serif text-xl">{edu.credential}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{edu.school}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
