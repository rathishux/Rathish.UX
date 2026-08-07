export type ParsedCaseStudy = {
  title: string;
  meta: string;
  body: string;
};

// The source .md files start with "# Title", a meta line, then a "---"
// divider before the real body. Split on only the FIRST "---" — the body
// itself uses "---" again as a section divider, which should stay intact
// and render as an <hr>.
export function parseCaseStudy(raw: string): ParsedCaseStudy {
  const dividerIndex = raw.indexOf("\n---\n");

  if (dividerIndex !== -1) {
    const header = raw.slice(0, dividerIndex);
    const body = raw.slice(dividerIndex + 5).trim();
    const lines = header
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    const title = (lines[0] ?? "").replace(/^#\s*/, "");
    const meta = lines[1] ?? "";
    return { title, meta, body };
  }

  // No "---" divider (not every source doc uses one) — just strip the
  // leading "# Title" line and treat the rest, intro paragraphs included,
  // as the body.
  const lines = raw.split("\n");
  const titleLineIndex = lines.findIndex((l) => l.trim().startsWith("# "));
  const title =
    titleLineIndex === -1
      ? ""
      : lines[titleLineIndex].trim().replace(/^#\s*/, "");
  const body = lines
    .slice(titleLineIndex + 1)
    .join("\n")
    .trim();

  return { title, meta: "", body };
}

// Rewrites the source docs' relative "images/..." paths to the real
// public asset path for that case study.
export function resolveImagePaths(markdown: string, id: string): string {
  const basePath = `${import.meta.env.BASE_URL}case-studies/${id}/images/`;
  return markdown.split("](images/").join(`](${basePath}`);
}
