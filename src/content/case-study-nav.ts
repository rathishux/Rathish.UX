// Bespoke navigation metadata for individual case studies — grouping their
// numbered sub-projects into higher-level category tabs, and filling in a
// subtitle for sections whose heading has no "(parenthetical)" to derive
// one from. Purely a navigation aid; every section still renders in full,
// in document order, regardless of what's defined here.

export type CategoryGroup = { label: string; numbers: number[] };

export const caseStudyCategories: Record<string, CategoryGroup[]> = {
  infogain: [
    { label: "Redesigning the legacy application", numbers: [1, 2] },
    { label: "Desktop application to web app", numbers: [5] },
    { label: "Admin", numbers: [3, 4] },
  ],
};

export const subtitleOverrides: Record<string, Record<number, string>> = {
  infogain: {
    3: "Admin tooling",
    4: "Admin tooling",
  },
};
