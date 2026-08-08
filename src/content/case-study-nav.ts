// Bespoke navigation metadata for individual case studies — which numbered
// top-level sections of a shared source markdown file belong to a given
// work item's page. Ids not listed here just render their full doc as-is.
//
// Sabre's source doc (case-studies/infogain.md) covers five numbered
// sections; three separate work items each pull their own slice of it:
// "Redesigning the legacy application" (1–2), "Admin" (3–4), and
// "Desktop application to web app" (5).
export const caseStudySections: Record<string, number[]> = {
  "infogain-redesign": [1, 2],
  "infogain-admin": [3, 4],
  "infogain-desktop-web": [5],
};

// Route ids whose images live under a different id's images/ folder — the
// three split-out Sabre pages above all pull from case-studies/infogain/
// images/, since they share that one source doc and its screenshots.
export const caseStudyImageFolder: Record<string, string> = {
  "infogain-redesign": "infogain",
  "infogain-admin": "infogain",
  "infogain-desktop-web": "infogain",
};
