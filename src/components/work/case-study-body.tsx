import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { resolveImagePaths, slugify } from "@/lib/case-study";
import { caseStudyImageSizes } from "@/content/case-study-images";

// resolveImagePaths has already turned "images/foo.webp" into a full
// "<base>/case-studies/<folder>/images/foo.webp" — the manifest is keyed by
// everything after "case-studies/".
function intrinsicSize(src: string): [number, number] | undefined {
  const key = src.split("case-studies/")[1];
  return key ? caseStudyImageSizes[key] : undefined;
}

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

function textOf(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) {
    return textOf((node as { props: { children?: React.ReactNode } }).props.children);
  }
  return "";
}

// Every "##" and "###" gets an anchor id matching lib/case-study.ts's
// extractHeadings slug, since the sidebar TOC and category tabs jump to
// these directly.
const components: Components = {
  h2: ({ children }) => (
    <h2
      id={slugify(textOf(children))}
      className="mt-16 scroll-mt-40 font-serif text-2xl italic sm:text-3xl"
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      id={slugify(textOf(children))}
      className="mt-8 scroll-mt-40 font-serif text-xl"
    >
      {children}
    </h3>
  ),
  p: ({ children }) =>
    isCaptionParagraph(children) ? (
      <p className="mt-2 text-center font-mono text-[11px] text-shell text-muted-foreground">
        {children}
      </p>
    ) : (
      <p className="mt-4 leading-relaxed">{children}</p>
    ),
  img: ({ src, alt }) => {
    // Lazy-loading is only safe here because of the width/height below: a
    // lazy image with no intrinsic size collapses to zero height until it
    // scrolls into view, which shifts every heading below it downward as
    // later images load in — an anchor jump (sidebar link, category tab)
    // computed before that settles lands short of its target. With the
    // dimensions declared the browser reserves the full box up front, so
    // the layout never moves and the bytes still arrive on demand.
    const size = typeof src === "string" ? intrinsicSize(src) : undefined;
    return (
      <img
        src={src}
        alt={alt}
        loading={size ? "lazy" : undefined}
        width={size?.[0]}
        height={size?.[1]}
        className="mt-6 h-auto w-full rounded-md border border-border"
      />
    );
  },
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
    // Explicitly pinned to the content column: the sidebar renders nothing
    // (returns null) for a section with no sub-headings, and without this,
    // CSS grid auto-placement slides this element into the sidebar's own
    // 220px track instead, crushing the entire case study into it.
    <div className="max-w-3xl text-[17px] text-muted-foreground lg:col-start-2 [&_h2]:text-foreground [&_h3]:text-foreground [&_strong]:text-foreground">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {resolveImagePaths(markdown, id)}
      </ReactMarkdown>
    </div>
  );
}
