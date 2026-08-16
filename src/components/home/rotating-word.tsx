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
    // Deliberately not overflow-hidden: the incoming word starts 60% below
    // the line, and a mask here clips the descender off "quiet" for the
    // length of the slide, which reads as a misspelling. slide-up-in fades
    // from opacity 0, so the word is still invisible while it sits low
    // enough to overlap what's beneath it.
    <span className="inline-grid align-bottom">
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
