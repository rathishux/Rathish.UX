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

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export type CaseStudySection = { title: string; slug: string };

// Some source docs bundle several distinct sub-projects into one file as
// numbered top-level headings ("## 1. Discrepancy Resolution ..."). Surface
// those as a contents list so each one is visible and jumpable, instead of
// disappearing into one long scroll.
export function extractSections(body: string): CaseStudySection[] {
  const sections: CaseStudySection[] = [];
  for (const line of body.split("\n")) {
    const match = line.match(/^##\s+(\d+)\.\s+(.+)$/);
    if (match) {
      const title = `${match[1]}. ${match[2]}`;
      sections.push({ title, slug: slugify(title) });
    }
  }
  return sections;
}
