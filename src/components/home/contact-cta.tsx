import { useState } from "react";
import { ArrowUpRight, Calendar, Check, Copy } from "lucide-react";
import { profile } from "@/content/site-data";

export function ContactCta() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1800px] px-6 py-16 sm:px-8 lg:px-12 sm:py-20">
        <p className="font-mono text-[11px] text-shell uppercase text-primary">
          &#9670; Letters to the editor &middot; Get in touch
        </p>
        <h3 className="mt-2 font-serif text-4xl italic sm:text-5xl">
          Let&rsquo;s talk.
        </h3>
        <p className="mt-3 max-w-md text-paper/70">
          Roles, projects, or a quick chat about design &mdash; {profile.nickname}{" "}
          reads every email.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-3">
            <button
              type="button"
              onClick={copyEmail}
              className="flex w-full items-center justify-between rounded-lg border border-primary/60 bg-paper/[0.04] px-5 py-3 text-left transition-colors hover:border-primary"
            >
              <span>
                <span className="block font-mono text-[11px] text-shell uppercase text-paper/50">
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
              className="flex w-full items-center justify-between gap-3 rounded-lg border border-paper/15 px-5 py-3 transition-colors hover:border-primary"
            >
              <span className="flex items-center gap-3">
                <Calendar className="size-4 shrink-0 text-paper/50" />
                <span>
                  <span className="block font-mono text-[11px] text-shell uppercase text-paper/50">
                    Schedule
                  </span>
                  <span className="text-sm">Book a 30-minute coffee on Calendly</span>
                </span>
              </span>
              <ArrowUpRight className="size-4 shrink-0 text-paper/50" />
            </a>
          </div>

          <div>
            <p className="font-mono text-[11px] text-shell uppercase text-paper/50">
              Currently in
            </p>
            <p className="mt-1">{profile.location}</p>

            <div className="my-4 border-t border-paper/15" />

            <p className="font-mono text-[11px] text-shell uppercase text-paper/50">
              Open for full-time roles
            </p>
            <p className="mt-1">
              {profile.openToCities.join(", ")}
            </p>

            <div className="my-4 border-t border-paper/15" />

            <p className="font-mono text-[11px] text-shell uppercase text-paper/50">
              Find me also at
            </p>
            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-shell uppercase text-paper transition-colors hover:text-primary"
              >
                LinkedIn
                <ArrowUpRight className="size-3" />
              </a>
              <a
                href={profile.social.medium}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-shell uppercase text-paper transition-colors hover:text-primary"
              >
                Medium
                <ArrowUpRight className="size-3" />
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-shell uppercase text-paper transition-colors hover:text-primary"
              >
                GitHub
                <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
