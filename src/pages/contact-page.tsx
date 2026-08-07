import { useState } from "react";
import { Copy, Check } from "lucide-react";
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
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8">
      <p className="font-mono text-[11px] text-shell uppercase text-primary">
        &#9670; Letters to the editor
      </p>
      <h2 className="mt-2 font-serif text-4xl italic sm:text-5xl">
        Let&rsquo;s talk.
      </h2>
      <p className="mt-4 max-w-md text-muted-foreground">
        Roles, projects, or just a question about the work — {profile.nickname}{" "}
        reads every email.
      </p>

      <div className="mt-10 space-y-4">
        <button
          type="button"
          onClick={copyEmail}
          className="flex w-full items-center justify-between rounded-lg border border-border bg-card px-5 py-4 text-left transition-colors hover:border-primary"
        >
          <span>
            <span className="block font-mono text-[11px] text-shell uppercase text-muted-foreground">
              Email
            </span>
            <span className="font-serif text-xl">{profile.email}</span>
          </span>
          {copied ? (
            <Check className="size-4 text-primary" />
          ) : (
            <Copy className="size-4 text-muted-foreground" />
          )}
        </button>

        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-between rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-primary"
        >
          <span>
            <span className="block font-mono text-[11px] text-shell uppercase text-muted-foreground">
              LinkedIn
            </span>
            <span className="font-serif text-xl">in/rathish-gandhi</span>
          </span>
        </a>
      </div>

      <Button asChild size="lg" className="mt-8">
        <a href={profile.resumeUrl} download>
          Download résumé
        </a>
      </Button>
    </div>
  );
}
