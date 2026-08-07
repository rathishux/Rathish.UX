import ericsson from "./case-studies/ericsson.md?raw";
import infogain from "./case-studies/infogain.md?raw";
import nfnLabs from "./case-studies/nfn-labs.md?raw";

// Maps an experience id (site-data.ts) to its full case study markdown.
// Ids with no entry here fall back to the short resume-bullet summary.
export const caseStudyContent: Record<string, string> = {
  ericsson,
  infogain,
  "nfn-labs": nfnLabs,
};
