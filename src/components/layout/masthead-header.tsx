import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/content/site-data";
import { useChat } from "@/lib/chat-context";
import { DoubleRule } from "@/components/layout/double-rule";
import { OrnamentDivider } from "@/components/layout/ornament-divider";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/shipped", label: "Shipped" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  return now;
}

export function MastheadHeader() {
  const now = useNow();
  const { toggle } = useChat();

  const day = now.toLocaleDateString(undefined, { weekday: "long" }).toUpperCase();
  const date = now.toLocaleDateString(undefined, { day: "numeric", month: "short" }).toUpperCase();
  const time = now.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex max-w-[1800px] flex-wrap items-center justify-between gap-3 px-6 py-2 sm:px-8 lg:px-12">
        <span className="font-mono text-[11px] text-shell uppercase text-muted-foreground">
          The {profile.nickname} Gazette
        </span>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[11px] text-shell">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "uppercase text-muted-foreground transition-colors hover:text-primary",
                  isActive && "text-primary",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <DoubleRule />

      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-3 px-6 py-3 sm:px-8 lg:px-12 md:grid-cols-3">
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-shell uppercase text-muted-foreground">
          <span>{day}</span>
          <span>&middot;</span>
          <span>{date}</span>
          <span>&middot;</span>
          <span>{time}</span>
        </div>

        <NavLink to="/" className="text-center">
          <h1 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
            The {profile.nickname} Gazette
          </h1>
        </NavLink>

        <div className="flex items-center justify-start gap-2 md:justify-end">
          <span className="hidden font-mono text-[10px] text-shell uppercase text-muted-foreground lg:inline">
            General edition
          </span>
          <a
            href={profile.resumeUrl}
            className="inline-flex items-center gap-1.5 rounded-full border border-primary px-3.5 py-2 font-mono text-[11px] text-shell uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Download className="size-3.5" />
            Download resume
          </a>
          <button
            type="button"
            onClick={toggle}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 font-mono text-[11px] text-shell uppercase text-paper transition-opacity hover:opacity-85"
          >
            <span className="text-primary">&#9670;</span>
            Ask {profile.nickname}
          </button>
        </div>
      </div>

      <DoubleRule />
      <OrnamentDivider />
    </header>
  );
}
