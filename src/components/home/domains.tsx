import { experience, projectDisplay } from "@/content/site-data";

export function Domains() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
      <p className="font-mono text-[11px] text-shell uppercase text-primary">
        &#9670; Domains worked in
      </p>
      <h3 className="mt-2 font-serif text-3xl italic sm:text-4xl">
        Across industries
      </h3>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experience.map((item, i) => (
          <div key={item.id} className="border-t border-border pt-4">
            <p className="font-mono text-[11px] text-shell text-muted-foreground">
              / {String(i + 1).padStart(2, "0")}
            </p>
            <h4 className="mt-1 font-serif text-xl">{item.domain}</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              {projectDisplay(item).title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
