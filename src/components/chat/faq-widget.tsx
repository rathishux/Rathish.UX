import { useEffect, useMemo, useRef, useState } from "react";
import { Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { faq, fallbackFaqAnswer, profile, type FaqEntry } from "@/content/site-data";
import { useChat } from "@/lib/chat-context";

type ChatMessage = {
  id: string;
  from: "bot" | "user";
  text: string;
};

const GREETING: ChatMessage = {
  id: "greeting",
  from: "bot",
  text: `Hi — I'm a scripted assistant answering on ${profile.name}'s behalf. Ask about experience, location, or how he works. Pick a question below or type your own.`,
};

// Longer keywords are more specific, so a match on one is worth more than a
// match on a short common word. Without this, "experience" alone pulls the
// generic entry ahead of "relevant ux experience".
function score(entry: FaqEntry, normalized: string): number {
  return entry.keywords.reduce(
    (acc, kw) => (normalized.includes(kw) ? acc + kw.length : acc),
    0,
  );
}

function findEntry(input: string): FaqEntry | undefined {
  const normalized = input.toLowerCase();
  let best: { score: number; entry: FaqEntry } | undefined;

  for (const entry of faq) {
    const s = score(entry, normalized);
    if (s > 0 && (!best || s > best.score)) best = { score: s, entry };
  }

  return best?.entry;
}

const CHIP_COUNT = 4;

export function FaqWidget() {
  const { open, setOpen } = useChat();
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [answered, setAnswered] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Priority questions lead, and anything already answered drops out so the
  // suggestions keep moving rather than repeating what's on screen.
  const suggestions = useMemo(() => {
    const remaining = faq.filter((entry) => !answered.includes(entry.id));
    return [
      ...remaining.filter((e) => e.priority),
      ...remaining.filter((e) => !e.priority),
    ].slice(0, CHIP_COUNT);
  }, [answered]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const entry = findEntry(trimmed);
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), from: "user", text: trimmed },
      { id: crypto.randomUUID(), from: "bot", text: entry?.answer ?? fallbackFaqAnswer },
    ]);
    if (entry) setAnswered((prev) => (prev.includes(entry.id) ? prev : [...prev, entry.id]));
    setInput("");
  }

  if (!open) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="flex h-[32rem] max-h-[calc(100vh-2.5rem)] w-[23rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-lg border border-border bg-card shadow-xl">
        <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-3">
          <div>
            <p className="font-serif text-lg italic">Ask {profile.nickname}</p>
            <p className="font-mono text-[10px] text-shell uppercase text-muted-foreground">
              Scripted &middot; not a live AI
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          aria-live="polite"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn(
                "max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed",
                m.from === "bot"
                  ? "bg-secondary text-secondary-foreground"
                  : "ml-auto bg-primary text-primary-foreground",
              )}
            >
              {m.text}
            </div>
          ))}
        </div>

        {suggestions.length > 0 && (
          <div className="flex flex-wrap gap-1.5 border-t border-border px-3 py-2">
            {suggestions.map((entry) => (
              <button
                key={entry.id}
                type="button"
                onClick={() => send(entry.question)}
                className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {entry.question}
              </button>
            ))}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 border-t border-border p-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question…"
            className="h-9 flex-1 rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          />
          <Button type="submit" size="icon" aria-label="Send">
            <Send className="size-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
