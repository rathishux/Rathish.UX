import { Badge } from "@/components/ui/badge";
import { companyTimeline, education } from "@/content/site-data";

export function Timeline() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1800px] px-6 py-16 sm:px-8 lg:px-12">
        <p className="font-mono text-[11px] text-shell uppercase text-primary">
          &#9670; The journey
        </p>
        <h3 className="mt-2 font-serif text-3xl italic sm:text-4xl">
          Work &amp; education
        </h3>

        <ol className="mt-10 space-y-8 border-l border-paper/20 pl-6">
          {companyTimeline().map((item) => (
            <li key={item.company} className="relative">
              <span className="absolute -left-[29px] top-1.5 size-2.5 rounded-full bg-primary" />
              <p className="font-mono text-[11px] text-shell uppercase text-paper/50">
                {item.period}
              </p>
              <h4 className="mt-1 font-serif text-xl">
                {item.role} &middot; {item.company}
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.domains.map((domain) => (
                  <Badge
                    key={domain}
                    variant="outline"
                    className="border-paper/30 bg-transparent text-paper"
                  >
                    {domain}
                  </Badge>
                ))}
              </div>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-paper/70">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </li>
          ))}

          {education.map((edu) => (
            <li key={edu.school} className="relative">
              <span className="absolute -left-[29px] top-1.5 size-2.5 rounded-full bg-paper/40" />
              <p className="font-mono text-[11px] text-shell uppercase text-paper/50">
                Education
              </p>
              <h4 className="mt-1 font-serif text-xl">{edu.credential}</h4>
              <p className="mt-1 text-sm text-paper/70">{edu.school}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
