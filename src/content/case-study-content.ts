import ericsson from "./case-studies/ericsson.md?raw";
import infogain from "./case-studies/infogain.md?raw";
// Filename is historical: this doc is the TAC Healthcare EHR case study,
// which was Kipi.bi work, not NFN Labs. Its own 2024 ship date sits inside
// the Kipi.bi window (Jan–Oct 2024), not the 2015–19 NFN Labs one.
import tacHealthcare from "./case-studies/nfn-labs.md?raw";

// Maps an experience id (site-data.ts) to its full case study markdown.
// Ids with no entry here fall back to the short resume-bullet summary.
// The three infogain-* ids share one source doc — case-study-nav.ts's
// caseStudySections slices out which numbered section(s) each gets.
export const caseStudyContent: Record<string, string> = {
  ericsson,
  "infogain-redesign": infogain,
  "infogain-admin": infogain,
  "infogain-desktop-web": infogain,
  "kipi-bi": tacHealthcare,
};
