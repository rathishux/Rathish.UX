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

export type CaseStudyHeading = {
  level: 2 | 3;
  title: string;
  // h2 only, from a trailing "(parenthetical)" on the heading.
  subtitle?: string;
  slug: string;
  // h2 only — the leading "N." on a numbered heading, if any. Lets a case
  // study group its top-level sections into higher-level category tabs
  // without hardcoding slugs anywhere else.
  number?: number;
};

// Every "##" and "###" heading in document order, tagged with its level.
// A trailing "(parenthetical)" on an h2 becomes its subtitle, e.g.
// "1. Discrepancy Resolution (main case study)" splits into title
// "1. Discrepancy Resolution" and subtitle "Main case study" — the slug is
// still generated from the full original heading so it matches the id
// CaseStudyBody assigns to the rendered element.
export function extractHeadings(body: string): CaseStudyHeading[] {
  const headings: CaseStudyHeading[] = [];
  for (const line of body.split("\n")) {
    const h2 = line.match(/^##\s+(.+)$/);
    if (h2) {
      const fullTitle = h2[1].trim();
      const slug = slugify(fullTitle);
      const numberMatch = fullTitle.match(/^(\d+)\./);
      const number = numberMatch ? Number(numberMatch[1]) : undefined;

      const parenMatch = fullTitle.match(/^(.+?)\s*\(([^)]+)\)$/);
      const title = parenMatch ? parenMatch[1].trim() : fullTitle;
      const subtitle = parenMatch
        ? parenMatch[2].charAt(0).toUpperCase() + parenMatch[2].slice(1)
        : undefined;

      headings.push({ level: 2, title, subtitle, slug, number });
      continue;
    }

    const h3 = line.match(/^###\s+(.+)$/);
    if (h3) {
      const title = h3[1].trim();
      headings.push({ level: 3, title, slug: slugify(title) });
    }
  }
  return headings;
}

export function topLevelHeadings(headings: CaseStudyHeading[]): CaseStudyHeading[] {
  return headings.filter((h) => h.level === 2);
}

// The nearest h2 at or before the given slug in document order — so an
// active h3 (or the h2 itself) resolves back to "which top-level section
// is this reader currently in."
export function activeTopLevel(
  headings: CaseStudyHeading[],
  activeSlug: string | null,
): CaseStudyHeading | null {
  const index = headings.findIndex((h) => h.slug === activeSlug);
  if (index === -1) return null;
  for (let i = index; i >= 0; i--) {
    if (headings[i].level === 2) return headings[i];
  }
  return null;
}

// The h3s belonging to one h2 — everything after it in document order,
// up to (not including) the next h2.
export function subheadingsOf(
  headings: CaseStudyHeading[],
  h2Slug: string,
): CaseStudyHeading[] {
  const index = headings.findIndex((h) => h.level === 2 && h.slug === h2Slug);
  if (index === -1) return [];
  const result: CaseStudyHeading[] = [];
  for (let i = index + 1; i < headings.length; i++) {
    if (headings[i].level === 2) break;
    result.push(headings[i]);
  }
  return result;
}

// Pulls out one numbered top-level section (its "## N. Title" line through
// its own h3 children) from a shared source doc — lets several work items
// each render their own slice of one markdown file rather than duplicating
// it. The h2 line is kept (not stripped) so the existing heading/sidebar
// logic above needs no special-casing for a doc with no h2 at all.
export function sliceSection(body: string, number: number): string {
  const lines = body.split("\n");
  let start = -1;
  let end = lines.length;
  for (let i = 0; i < lines.length; i++) {
    const h2 = lines[i].match(/^##\s+(\d+)\./);
    if (h2 && Number(h2[1]) === number) {
      start = i;
      continue;
    }
    if (start !== -1 && i > start && /^##\s+/.test(lines[i])) {
      end = i;
      break;
    }
  }
  if (start === -1) return "";
  return lines.slice(start, end).join("\n").trim();
}
