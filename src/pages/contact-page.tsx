import { useState } from "react";
import { ArrowUpRight, Calendar, Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/site-data";

export function ContactPage() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
      <p className="font-mono text-[11px] text-shell uppercase text-primary">
        &#9670; Letters to the editor &middot; Get in touch
      </p>
      <h2 className="mt-2 font-serif text-4xl italic sm:text-5xl">
        Let&rsquo;s talk.
      </h2>
      <p className="mt-4 max-w-md text-muted-foreground">
        Roles, projects, or a quick chat about design &mdash; {profile.nickname}{" "}
        reads every email.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-3">
          <button
            type="button"
            onClick={copyEmail}
            className="flex w-full items-center justify-between rounded-lg border border-primary/60 bg-card px-5 py-3 text-left transition-colors hover:border-primary"
          >
            <span>
              <span className="block font-mono text-[11px] text-shell uppercase text-muted-foreground">
                Email
              </span>
              <span className="font-serif text-xl italic">{profile.email}</span>
            </span>
            <span className="flex shrink-0 items-center gap-1.5 pl-4 font-mono text-xs text-shell uppercase text-primary">
              {copied ? "Copied" : "Click to copy"}
              {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
            </span>
          </button>

          <a
            href={profile.schedulingUrl}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-between gap-3 rounded-lg border border-border bg-card px-5 py-3 transition-colors hover:border-primary"
          >
            <span className="flex items-center gap-3">
              <Calendar className="size-4 shrink-0 text-muted-foreground" />
              <span>
                <span className="block font-mono text-[11px] text-shell uppercase text-muted-foreground">
                  Schedule
                </span>
                <span className="text-sm">Book a 30-minute coffee on Calendly</span>
              </span>
            </span>
            <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
          </a>

          <Button asChild size="lg" className="mt-4">
            <a href={profile.resumeUrl} download>
              Download résumé
            </a>
          </Button>
        </div>

        <div>
          <p className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
            Currently in
          </p>
          <p className="mt-1">{profile.location}</p>

          <div className="my-4 border-t border-border" />

          <p className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
            Open for full-time roles
          </p>
          <p className="mt-1">
            {profile.location} &middot; {profile.openToCities.join(", ")}
          </p>

          <div className="my-4 border-t border-border" />

          <p className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
            Find me also at
          </p>
          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-shell uppercase text-foreground transition-colors hover:text-primary"
            >
              LinkedIn
              <ArrowUpRight className="size-3" />
            </a>
            <a
              href={profile.social.medium}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-shell uppercase text-foreground transition-colors hover:text-primary"
            >
              Medium
              <ArrowUpRight className="size-3" />
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-shell uppercase text-foreground transition-colors hover:text-primary"
            >
              GitHub
              <ArrowUpRight className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
