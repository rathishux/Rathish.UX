import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { profile } from "@/content/site-data";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
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

function Ticker() {
  const now = useNow();
  const day = now.toLocaleDateString(undefined, { weekday: "long" }).toUpperCase();
  const date = now.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  const time = now.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });

  return (
    <div className="hidden items-center gap-1 font-mono text-[11px] text-shell text-muted-foreground sm:flex">
      <span>{day}</span>
      <span>·</span>
      <span>{date}</span>
      <span>·</span>
      <span>{time}</span>
    </div>
  );
}

export function MastheadHeader() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2 sm:px-8">
        <Ticker />
        <div className="flex items-center gap-2 font-mono text-[11px] text-shell text-muted-foreground">
          <span className="text-primary">◆</span>
          <span>UX / UI Portfolio</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-border px-5 py-5 sm:px-8">
        <NavLink to="/" className="group">
          <p className="font-mono text-[11px] text-shell text-muted-foreground">
            Vol. I &middot; Design &amp; Product
          </p>
          <h1 className="font-serif text-3xl italic tracking-tight text-ink sm:text-4xl">
            The {profile.nickname} Gazette
          </h1>
        </NavLink>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-shell">
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
          <a
            href={profile.resumeUrl}
            className="uppercase text-muted-foreground transition-colors hover:text-primary"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
