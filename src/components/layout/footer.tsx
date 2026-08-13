import { profile } from "@/content/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-serif italic">
          {profile.name} — next edition already in the works.
        </p>
        <p className="font-mono text-[11px] text-shell uppercase">
          Colophon: built by {profile.nickname} &middot; &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
