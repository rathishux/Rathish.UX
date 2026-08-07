import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { resolveImagePaths } from "@/lib/case-study";

// A paragraph whose only content is an <em> is one of the source docs'
// "*Fig. 01 — ...*" captions — style it like a figure caption regardless
// of whether it directly follows an image.
function isCaptionParagraph(children: React.ReactNode): boolean {
  const items = Array.isArray(children) ? children : [children];
  return (
    items.length === 1 &&
    typeof items[0] === "object" &&
    items[0] !== null &&
    "type" in items[0] &&
    (items[0] as { type?: unknown }).type === "em"
  );
}

const components: Components = {
  h2: ({ children }) => (
    <h2 className="mt-12 font-serif text-2xl italic sm:text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 font-serif text-xl">{children}</h3>
  ),
  p: ({ children }) =>
    isCaptionParagraph(children) ? (
      <p className="mt-2 text-center font-mono text-[11px] text-shell text-muted-foreground">
        {children}
      </p>
    ) : (
      <p className="mt-4 leading-relaxed">{children}</p>
    ),
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="mt-6 w-full rounded-md border border-border"
    />
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-2 border-primary pl-5 font-serif text-xl italic leading-snug">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 list-outside list-disc space-y-1.5 pl-5">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-outside list-decimal space-y-1.5 pl-5">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  hr: () => <hr className="my-12 border-border" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-primary hover:underline"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mt-6 overflow-x-auto rounded-md bg-ink p-4 font-mono text-sm text-paper [&_code]:bg-transparent [&_code]:p-0">
      {children}
    </pre>
  ),
};

export function CaseStudyBody({
  markdown,
  id,
}: {
  markdown: string;
  id: string;
}) {
  return (
    <div className="text-muted-foreground [&_h2]:text-foreground [&_h3]:text-foreground [&_strong]:text-foreground">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {resolveImagePaths(markdown, id)}
      </ReactMarkdown>
    </div>
  );
}
