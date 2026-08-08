import ericsson from "./case-studies/ericsson.md?raw";
import infogain from "./case-studies/infogain.md?raw";
import nfnLabs from "./case-studies/nfn-labs.md?raw";

// Maps an experience id (site-data.ts) to its full case study markdown.
// Ids with no entry here fall back to the short resume-bullet summary.
// The three infogain-* ids share one source doc — case-study-nav.ts's
// caseStudySections slices out which numbered section(s) each gets.
export const caseStudyContent: Record<string, string> = {
  ericsson,
  "infogain-redesign": infogain,
  "infogain-admin": infogain,
  "infogain-desktop-web": infogain,
  "nfn-labs": nfnLabs,
};
