import { useEffect, useState } from "react";

export function RotatingWord({
  words,
  intervalMs = 2600,
  className,
}: {
  words: string[];
  intervalMs?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <span className="inline-grid overflow-hidden align-bottom">
      <span
        key={index}
        className={className}
        style={{ gridArea: "1 / 1", animation: "slide-up-in 0.5s ease" }}
      >
        {words[index]}
      </span>
      {/* Reserves width for the longest word so layout doesn't jump */}
      <span aria-hidden="true" className="invisible" style={{ gridArea: "1 / 1" }}>
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
    </span>
  );
}
