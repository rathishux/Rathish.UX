import { useState } from "react";
import { Button } from "@/components/ui/button";

type FieldKey = "element" | "adjective" | "reviewer" | "jargon" | "number";

const FIELDS: { key: FieldKey; label: string; placeholder: string }[] = [
  { key: "element", label: "UI element", placeholder: "e.g., modal, hero section, empty state" },
  { key: "adjective", label: "Adjective", placeholder: "e.g., delightful, snappy, human" },
  { key: "reviewer", label: "Who's asking", placeholder: "e.g., the CEO, a stakeholder, marketing" },
  { key: "jargon", label: "Industry jargon", placeholder: "e.g., design token, motion spec, a11y audit" },
  { key: "number", label: "A number", placeholder: "e.g., 5, 20, 90" },
];

const EMPTY: Record<FieldKey, string> = {
  element: "",
  adjective: "",
  reviewer: "",
  jargon: "",
  number: "",
};

export function CritGenerator() {
  const [values, setValues] = useState<Record<FieldKey, string>>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const filled = FIELDS.every((f) => values[f.key].trim().length > 0);

  function update(key: FieldKey, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    setSubmitted(false);
  }

  const output = `Have we considered making the ${values.element} more ${values.adjective}? — ${values.reviewer}, ${values.number} minutes before launch. Also, where's the ${values.jargon} for that?`;

  return (
    <section className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <p className="font-mono text-[11px] text-shell uppercase text-primary">
          &#9670; The back page &middot; The design crit mad libs
        </p>
        <h3 className="mt-2 font-serif text-3xl italic sm:text-4xl">
          Help me survive tomorrow&rsquo;s crit
        </h3>
        <p className="mt-3 max-w-xl text-muted-foreground">
          The review is short-staffed. Fill in the blanks below and
          I&rsquo;ll print whatever design feedback you write. (No fact-checking.
          No feelings spared.)
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
              Fill in the blanks
            </p>
            {FIELDS.map((field, i) => (
              <div key={field.key}>
                <label
                  htmlFor={`crit-${field.key}`}
                  className="flex items-baseline gap-3 font-serif text-lg italic"
                >
                  <span className="font-mono text-xs not-italic text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {field.label}
                </label>
                <input
                  id={`crit-${field.key}`}
                  type="text"
                  value={values[field.key]}
                  onChange={(e) => update(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                />
              </div>
            ))}
            <div className="flex flex-wrap items-center gap-3">
              <Button onClick={() => setSubmitted(true)} disabled={!filled}>
                Print the crit
              </Button>
              {submitted && (
                <Button variant="outline" onClick={() => setValues(EMPTY)}>
                  Clear
                </Button>
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-card lg:h-fit lg:self-start">
            {/* Browser-window chrome — traffic-light dots + a fake address
                bar, so the preview reads as "this is what gets published"
                rather than just another card on the page. */}
            <div className="flex items-center gap-3 border-b border-border bg-secondary/60 px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-border" />
              </div>
              <span className="flex-1 truncate rounded bg-background px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                ratzgazette.com/crit
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <p className="font-serif text-lg">The Ratz Gazette</p>
                <p className="font-mono text-[10px] text-shell uppercase text-muted-foreground">
                  {submitted ? "Printed · Live" : "Draft · Awaiting input"}
                </p>
              </div>
              <div className="py-6 text-center">
                {submitted ? (
                  <p className="font-serif text-xl italic leading-snug">
                    &ldquo;{output}&rdquo;
                  </p>
                ) : (
                  <>
                    <p className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
                      Awaiting submission&hellip;
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Fill in the {FIELDS.length} blanks and we&rsquo;ll set
                      the type, ink the press, and print whatever you give us.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
