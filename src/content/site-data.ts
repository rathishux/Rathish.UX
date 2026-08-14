// Single source of truth for the site's content. Sourced from Rathish's resume.
// Edit here — nothing else in src/ should hardcode copy.

export const profile = {
  name: "Rathish Gandhi",
  nickname: "Ratz",
  title: "Senior UX/UI Designer",
  tagline: "9+ years designing for the gap between complex systems and the people who have to use them.",
  summary:
    "Senior UX/UI Designer with 9+ years of experience crafting scalable, data-driven digital products across SaaS, fintech, and enterprise platforms. Known for simplifying complex workflows, improving usability, and driving measurable business impact.",
  email: "rathishuid@gmail.com",
  location: "India",
  // Cities open to full-time roles in — edit freely.
  openToCities: ["Bangalore", "Chennai", "Hyderabad"],
  resumeUrl: `${import.meta.env.BASE_URL}resume.docx`,
  // Replace with a real scheduling link (Calendly, Cal.com, etc.) once set up.
  schedulingUrl: "https://calendly.com/rathish3/coffee-chat",
  social: {
    linkedin: "https://www.linkedin.com/in/rathish-gandhi/",
    // Placeholders — replace with real profile URLs.
    medium: "#",
    github: "#",
  },
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  domain: string;
  summary: string;
  highlights: string[];
  // The actual product/project worked on — shown as the headline on
  // Work cards and case study pages instead of the employer's name,
  // since the work belongs to the project, not any one company.
  project?: { name: string; subtitle: string };
  // The year the project actually shipped — not derived from `period`
  // (that's the employment window, not the release date). Shown as the
  // "SHIPPED <year>" tag on Work cards; omitted until supplied.
  shippedYear?: number;
  // A one-line description of what the work was, used as the bold
  // headline on Work cards — distinct from `summary`, which is longer
  // and lives on the case study page.
  oneLiner: string;
  // Shown in the homepage "Handpicked highlights" section. Explicit
  // rather than "first N in the array" so adding new entries below
  // doesn't silently change what the homepage features.
  featured?: boolean;
};

// Falls back to the employer name for entries with no named project yet.
export function projectDisplay(item: Experience): {
  title: string;
  subtitle: string;
} {
  return {
    title: item.project?.name ?? item.company,
    subtitle: item.project?.subtitle ?? item.domain,
  };
}

export const experience: Experience[] = [
  {
    id: "infogain-redesign",
    company: "Infogain",
    role: "Senior UX Designer",
    period: "Mar 2025 – Dec 2025",
    domain: "Aviation · Enterprise SaaS",
    project: { name: "Redesigning the legacy application", subtitle: "Sabre" },
    shippedYear: 2025,
    featured: true,
    oneLiner: "Turning reactive scheduling alerts into resolvable workflows",
    summary:
      "Redesigned the legacy discrepancy-resolution flow and built a change generator, replacing a manual reactive alert loop with a fast, guided modal.",
    highlights: [
      "Replaced a six-step manual discrepancy loop (alert, inbox, cancel, recreate) with an in-context modal resolution flow.",
      "Built the Send SCR & Change Generator tooling for schedule change requests.",
      "Reduced reliance on tribal knowledge by surfacing risk directly in the interface.",
    ],
  },
  {
    id: "infogain-admin",
    company: "Infogain",
    role: "Senior UX Designer",
    period: "Mar 2025 – Dec 2025",
    domain: "Aviation · Enterprise SaaS",
    project: { name: "Admin", subtitle: "Sabre" },
    shippedYear: 2025,
    oneLiner: "Configurable booking rules and market-driven demand insights",
    summary:
      "Designed the admin tooling behind slot booking rules and market demand analysis, giving ops teams configurable rules and clearer demand signals.",
    highlights: [
      "Designed the Booking Rules Engine for configuring slot allocation policy.",
      "Built Market Analysis & Management views for reading and calibrating demand.",
      "Reduced manual configuration errors through structured, guided admin flows.",
    ],
  },
  {
    id: "infogain-desktop-web",
    company: "Infogain",
    role: "Senior UX Designer",
    period: "Mar 2025 – Dec 2025",
    domain: "Aviation · Enterprise SaaS",
    project: { name: "Desktop application to web app", subtitle: "Sabre" },
    shippedYear: 2025,
    featured: true,
    oneLiner: "Bringing a legacy desktop scheduler into the browser",
    summary:
      "Migrated a legacy desktop scheduling tool to the browser, preserving power-user speed while modernizing the underlying experience.",
    highlights: [
      "Modernized schedule comparison — standard and three-way compare with conflict detection.",
      "Rebuilt Merge Express for fast desktop-to-web schedule merging.",
      "Preserved desktop power-user workflows while moving the tool to the web.",
    ],
  },
  {
    id: "kipi-bi",
    company: "Kipi.bi",
    role: "UX Designer",
    period: "Jan 2024 – Oct 2024",
    domain: "Data & Analytics · SaaS",
    featured: true,
    oneLiner: "Turning scattered metrics into same-day decisions",
    summary:
      "Designed data-driven dashboards that turned scattered metrics into decisions teams could act on same-day.",
    highlights: [
      "Designed data-driven dashboards, improving decision-making speed and clarity.",
      "Simplified complex data workflows into intuitive UI patterns, reducing cognitive load.",
      "Worked closely with product and engineering teams to deliver scalable solutions.",
    ],
  },
  {
    id: "ericsson",
    company: "Ericsson Global",
    role: "Senior UX Designer",
    period: "Nov 2021 – Jan 2024",
    domain: "Telecom · Sourcing & Sales",
    project: { name: "Lighthouse", subtitle: "Sourcing platform" },
    shippedYear: 2024,
    featured: true,
    oneLiner: "Reshaping sourcing and sales for a global telecom",
    summary:
      "Led UX for the Light-House platform, reshaping user journeys across sourcing and sales for a global telecom.",
    highlights: [
      "Led UX for Light-House platform, improving user journeys across sourcing and sales.",
      "Conducted research and usability testing to identify pain points and improve task success.",
      "Created personas and journey maps to align stakeholders.",
    ],
  },
  {
    id: "infosys",
    company: "Infosys Limited",
    role: "UX Designer",
    period: "May 2019 – Aug 2021",
    domain: "FinTech · Supply Chain",
    featured: true,
    oneLiner: "Streamlined enterprise workflows for fintech and supply chain",
    summary:
      "Designed enterprise SaaS workflows spanning fintech and supply-chain systems, cutting rework at the handoff.",
    highlights: [
      "Designed enterprise SaaS workflows for fintech and supply chain systems.",
      "Created high-fidelity prototypes, reducing development rework.",
      "Collaborated in Agile teams to deliver user-centric solutions.",
    ],
  },
  {
    id: "nfn-labs",
    company: "NFN Labs",
    role: "UX Designer",
    period: "Aug 2015 – Feb 2019",
    domain: "Healthcare · SaaS",
    project: { name: "TAC Healthcare", subtitle: "EHR application" },
    shippedYear: 2024,
    oneLiner: "An intuitive EHR built for everyday clinical work",
    summary:
      "Designed intuitive interfaces across healthcare and SaaS products early in a 9-year design practice.",
    highlights: [
      "Designed intuitive interfaces across multiple domains including healthcare and SaaS.",
      "Improved user engagement through clean and consistent UI design.",
    ],
  },
];

// Placeholder metrics shown when a Domains row is hovered — replace with
// real numbers per domain. Keyed by the same top-level domain string
// Domains groups on (the bit before the first "·" in an entry's domain).
export type DomainStat = { value: string; label: string };
export const domainStats: Record<string, DomainStat[]> = {
  Aviation: [
    { value: "XX+", label: "Replace — e.g. slots managed" },
    { value: "X.X → X.X", label: "Replace — e.g. rating before → after" },
    { value: "XX%", label: "Replace — e.g. error reduction" },
  ],
  "Data & Analytics": [
    { value: "XX+", label: "Replace — e.g. dashboards shipped" },
    { value: "XXx", label: "Replace — e.g. faster decisions" },
    { value: "XX%", label: "Replace — e.g. adoption rate" },
  ],
  Telecom: [
    { value: "XX+", label: "Replace — e.g. suppliers onboarded" },
    { value: "XX%", label: "Replace — e.g. time saved" },
    { value: "$XXK+", label: "Replace — e.g. savings identified" },
  ],
  FinTech: [
    { value: "XX+", label: "Replace — e.g. workflows redesigned" },
    { value: "XXx", label: "Replace — e.g. rework reduced" },
    { value: "XX%", label: "Replace — e.g. task success rate" },
  ],
  Healthcare: [
    { value: "XX+", label: "Replace — e.g. clinics onboarded" },
    { value: "XX+", label: "Replace — e.g. screens shipped" },
    { value: "XX%", label: "Replace — e.g. engagement lift" },
  ],
};

export const education = [
  { school: "College of Engineering", credential: "M.Sc, Electronic Media" },
];

export const certifications = [
  { name: "Design System Bootcamp", issuer: "Molly Hellmuth" },
  { name: "Adobe XD Essentials", issuer: undefined },
  { name: "Design for Complex Problems", issuer: "RISD" },
];

export const skills = [
  "UX Research",
  "Interaction Design",
  "Information Architecture",
  "Wireframing",
  "Prototyping",
  "Usability Testing",
  "Design Systems",
  "Data-Driven Design",
  "SaaS",
  "Agile / Scrum",
];

export const interests = ["Cycling", "Fitness", "Movies & series", "Space science"];

// "Beyond the byline" tabs on the About page. Placeholder entries — swap
// in real ones freely; each tab just renders whatever list it's given.
export type BeyondTab = {
  id: string;
  label: string;
  sublabel: string;
  intro: string;
  items: {
    title: string;
    note: string;
    // Optional small badge above the title, e.g. "Currently watching".
    tag?: string;
    // Outbound links — each renders its own labelled link on the card.
    spotifyUrl?: string;
    imdbUrl?: string;
  }[];
};

export const beyondTheByline: BeyondTab[] = [
  {
    id: "listening",
    label: "On Repeat",
    sublabel: "Currently listening",
    intro: "What's been playing while I work.",
    items: [
      {
        title: "Time",
        note: "Hans Zimmer",
        spotifyUrl: "https://open.spotify.com/track/6ZFbXIJkuI1dVNWvzJzown",
      },
      {
        title: "Wonderwall",
        note: "Oasis",
        spotifyUrl: "https://open.spotify.com/track/35EfXlRKogBr1RvrkFBMHr",
      },
      {
        title: "The Rose — Instrumental",
        note: "Anirudh Ravichander",
        spotifyUrl: "https://open.spotify.com/track/7FDcB7pALXFWow9RZul1DP",
      },
    ],
  },
  {
    id: "watching",
    label: "The Reel",
    sublabel: "Movies & series",
    intro:
      "Slow-burn character work, tense thrillers, and something mindless for when the day's been long.",
    items: [
      {
        title: "Better Call Saul",
        note: "Vince Gilligan · 2015–2022",
        imdbUrl: "https://www.imdb.com/title/tt3032476/",
      },
      {
        title: "Sicario",
        note: "Denis Villeneuve · 2015",
        imdbUrl: "https://www.imdb.com/title/tt3397884/",
      },
      {
        title: "Family Guy",
        note: "Seth MacFarlane · 1999",
        tag: "Currently watching",
        imdbUrl: "https://www.imdb.com/title/tt0182576/",
      },
    ],
  },
  {
    id: "training",
    label: "The Log",
    sublabel: "This week's training",
    intro: "Cycling and gym, logged weekly.",
    items: [
      { title: "Replace me", note: "e.g. distance ridden this week" },
      { title: "Replace me", note: "e.g. gym sessions this week" },
      { title: "Replace me", note: "e.g. what I'm working toward" },
    ],
  },
  {
    id: "hacks",
    label: "The Hacks",
    sublabel: "Small wins",
    intro: "Small things that saved me more time than they should have.",
    items: [
      {
        title: "Check it in the browser early",
        note: "A Figma frame a real device will contradict in five minutes isn't worth polishing first.",
      },
      {
        title: "Sunday batch cook",
        note: "Three days of lunches done before Monday, so the 8pm what-do-I-eat decision never happens.",
      },
      {
        title: "Name the file properly the first time",
        note: "Ten seconds now beats twenty minutes hunting for final-v3-actual-FINAL later.",
      },
    ],
  },
];

export const sideProject = {
  name: "NivYou",
  tagline: "A GLP-1 tracker for dose, weight, food, and progress over time.",
  description:
    "a semaglutide tracker for dose, weight, food, and progress over time.",
  tracks: ["Dose & schedule", "Weight", "Food", "Progress over time"],
  // Replace with the real Play Store listing URL once ready to link out.
  playStoreUrl: "#",
};

// The toolkit listed on the Shipped page.
export const shippedTools = [
  "Claude",
  "Claude Code",
  "Figma MCP",
  "Cursor",
  "GitHub",
  "Vercel",
  "Higgsfield",
];

export const stats = [
  { value: "9+", label: "Years in practice" },
  { value: String(experience.length), label: "Companies shipped at" },
  {
    value: String(new Set(experience.map((e) => e.domain.split(" · ")[0])).size),
    label: "Industries",
  },
];

export type FaqEntry = {
  id: string;
  question: string;
  keywords: string[];
  answer: string;
};

export const faq: FaqEntry[] = [
  {
    id: "who",
    question: "Who is Rathish?",
    keywords: ["who", "about", "yourself", "bio"],
    answer: `${profile.name} — ${profile.title}. ${profile.summary}`,
  },
  {
    id: "experience",
    question: "Where has he worked?",
    keywords: ["experience", "work", "company", "companies", "career", "history"],
    answer: `Across ${experience.length} companies over 9+ years: ${experience
      .map((e) => `${e.company} (${e.role}, ${e.period})`)
      .join("; ")}.`,
  },
  {
    id: "current",
    question: "What's he doing right now?",
    keywords: ["current", "now", "recent", "latest", "today"],
    answer: `Most recently at ${experience[0].company} as ${experience[0].role} (${experience[0].period}): ${experience[0].summary}`,
  },
  {
    id: "projects",
    question: "What kind of projects has he shipped?",
    keywords: ["project", "projects", "shipped", "portfolio", "case study", "work on"],
    answer: `Product design work spanning ${Array.from(new Set(experience.map((e) => e.domain))).join(", ")} — see the Work section for details on each.`,
  },
  {
    id: "skills",
    question: "What are his skills?",
    keywords: ["skill", "skills", "good at", "expertise", "tools"],
    answer: `Core skills: ${skills.join(", ")}.`,
  },
  {
    id: "education",
    question: "What's his education?",
    keywords: ["education", "degree", "study", "school", "college", "university"],
    answer: `${education.map((e) => `${e.credential} — ${e.school}`).join(", ")}. Certifications: ${certifications
      .map((c) => (c.issuer ? `${c.name} (${c.issuer})` : c.name))
      .join(", ")}.`,
  },
  {
    id: "contact",
    question: "How can I get in touch?",
    keywords: ["contact", "email", "reach", "hire", "talk", "connect"],
    answer: `Email ${profile.email}, or connect on LinkedIn — links are on the Contact page.`,
  },
  {
    id: "location",
    question: "Where is he based?",
    keywords: ["location", "based", "where", "live", "remote"],
    answer: `Based in ${profile.location}.`,
  },
];

export const fallbackFaqAnswer =
  "That's not something I've got a scripted answer for yet — try one of the questions below, or email " +
  profile.email +
  " directly.";
