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

export type CaseStudySection = {
  title: string;
  subtitle?: string;
  slug: string;
  // The leading "N." on a numbered heading, if any — lets a case study
  // group its sections into higher-level category tabs without hardcoding
  // slugs anywhere else.
  number?: number;
};

// Every top-level ("##") heading becomes a sidebar-navigable section —
// whether the doc bundles several numbered sub-projects (Sabre, TAC
// Healthcare) or reads as one continuous narrative (Ericsson). Sub-headings
// ("###") stay out of the sidebar so it doesn't get cluttered. A trailing
// "(parenthetical)" on the heading becomes the section's subtitle, e.g.
// "1. Discrepancy Resolution (main case study)" splits into title
// "1. Discrepancy Resolution" and subtitle "Main case study" — the slug is
// still generated from the full original heading so it matches the id
// CaseStudyBody assigns to the rendered element.
export function extractSections(body: string): CaseStudySection[] {
  const sections: CaseStudySection[] = [];
  for (const line of body.split("\n")) {
    const match = line.match(/^##\s+(.+)$/);
    if (!match) continue;

    const fullTitle = match[1].trim();
    const slug = slugify(fullTitle);
    const numberMatch = fullTitle.match(/^(\d+)\./);
    const number = numberMatch ? Number(numberMatch[1]) : undefined;

    const parenMatch = fullTitle.match(/^(.+?)\s*\(([^)]+)\)$/);
    const title = parenMatch ? parenMatch[1].trim() : fullTitle;
    const subtitle = parenMatch
      ? parenMatch[2].charAt(0).toUpperCase() + parenMatch[2].slice(1)
      : undefined;

    sections.push({ title, subtitle, slug, number });
  }
  return sections;
}
