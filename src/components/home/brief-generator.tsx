import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const INDUSTRIES = ["Aviation", "FinTech", "Healthcare", "Telecom", "SaaS"];
const PROBLEMS = [
  "onboarding drop-off",
  "data overload",
  "manual scheduling",
  "a broken handoff",
  "decision fatigue",
];
const TIMELINES = ["2 weeks", "1 sprint", "1 quarter", "6 months"];

function pick<T>(arr: T[], i: number) {
  return arr[i % arr.length];
}

export function BriefGenerator() {
  const [industryIdx, setIndustryIdx] = useState(0);
  const [problemIdx, setProblemIdx] = useState(0);
  const [timelineIdx, setTimelineIdx] = useState(0);
  const [generated, setGenerated] = useState<string | null>(null);

  const industry = pick(INDUSTRIES, industryIdx);
  const problem = pick(PROBLEMS, problemIdx);
  const timeline = pick(TIMELINES, timelineIdx);

  function generate() {
    setGenerated(
      `${industry} team fixes ${problem} in ${timeline} — the redesign nobody asked for, everybody needed.`,
    );
  }

  return (
    <section className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <p className="font-mono text-[11px] text-shell uppercase text-primary">
          &#9670; The back page
        </p>
        <h3 className="mt-2 font-serif text-3xl italic sm:text-4xl">
          Draft your own brief
        </h3>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Pick an industry, a problem, and a timeline. See what kind of
          project headline falls out. (No fact-checking — this one's just
          for fun.)
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <PillGroup
            label="Industry"
            options={INDUSTRIES}
            selected={industryIdx}
            onSelect={setIndustryIdx}
          />
          <PillGroup
            label="Problem"
            options={PROBLEMS}
            selected={problemIdx}
            onSelect={setProblemIdx}
          />
          <PillGroup
            label="Timeline"
            options={TIMELINES}
            selected={timelineIdx}
            onSelect={setTimelineIdx}
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button onClick={generate}>Print the headline</Button>
          {generated && (
            <Button variant="outline" onClick={() => setGenerated(null)}>
              Clear
            </Button>
          )}
        </div>

        {generated && (
          <div className="mt-8 max-w-2xl rounded-lg border border-primary/40 bg-card p-6">
            <p className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
              Draft headline
            </p>
            <p className="mt-2 font-serif text-2xl italic leading-snug">
              &ldquo;{generated}&rdquo;
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-block font-mono text-xs text-shell uppercase text-primary hover:underline"
            >
              Got a real brief like this? Let&rsquo;s talk &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function PillGroup({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: string[];
  selected: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div>
      <p className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
        {label}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option, i) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(i)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm capitalize transition-colors",
              i === selected
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground hover:border-primary/50",
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
