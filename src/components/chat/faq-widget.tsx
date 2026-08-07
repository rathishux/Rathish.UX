import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { faq, fallbackFaqAnswer, profile } from "@/content/site-data";

type ChatMessage = {
  id: string;
  from: "bot" | "user";
  text: string;
};

const GREETING: ChatMessage = {
  id: "greeting",
  from: "bot",
  text: `Hi, I'm a scripted assistant — ask me about ${profile.name}'s experience, skills, or how to get in touch. Pick a question below or type your own.`,
};

function findAnswer(input: string): string {
  const normalized = input.toLowerCase();
  let best: { score: number; answer: string } | null = null;

  for (const entry of faq) {
    const score = entry.keywords.reduce(
      (acc, kw) => acc + (normalized.includes(kw) ? 1 : 0),
      0,
    );
    if (score > 0 && (!best || score > best.score)) {
      best = { score, answer: entry.answer };
    }
  }

  return best?.answer ?? fallbackFaqAnswer;
}

export function FaqWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = { id: crypto.randomUUID(), from: "user", text: trimmed };
    const botMsg: ChatMessage = {
      id: crypto.randomUUID(),
      from: "bot",
      text: findAnswer(trimmed),
    };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 flex h-[28rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-lg border border-border bg-card shadow-xl">
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

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "max-w-[85%] rounded-lg px-3 py-2 text-sm",
                  m.from === "bot"
                    ? "bg-secondary text-secondary-foreground"
                    : "ml-auto bg-primary text-primary-foreground",
                )}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 border-t border-border px-3 py-2">
            {faq.slice(0, 4).map((entry) => (
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
      )}

      <Button
        size="icon"
        className="size-12 rounded-full shadow-lg"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
      </Button>
    </div>
  );
}
