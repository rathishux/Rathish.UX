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
  location: "Bangalore, India",
  // Cities open to full-time roles in — edit freely.
  openToCities: ["Bangalore", "Chennai", "Hyderabad"],
  // Named for the download, not for the repo — this filename is what lands in
  // a recruiter's downloads folder.
  resumeUrl: `${import.meta.env.BASE_URL}Rathish-Gandhi-Resume.pdf`,
  // Replace with a real scheduling link (Calendly, Cal.com, etc.) once set up.
  schedulingUrl: "https://calendly.com/rathish3/coffee-chat",
  social: {
    linkedin: "https://www.linkedin.com/in/rathish-gandhi/",
    medium: "https://medium.com/@rathishuid",
    github: "https://github.com/rathishux",
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
  // Filename inside public/work-thumbs/ used as the card thumbnail.
  // Entries without one fall back to a flat colour block.
  thumbnail?: string;
  // Set when the work has no case study here and the card should open the
  // live product instead of a detail page.
  externalUrl?: string;
};

// Shipped products that aren't tied to an employment entry and have no case
// study of their own — they sit alongside the work cards and link straight
// out to the live site. Kept separate from `experience` so they don't turn up
// in the résumé timeline, which is specifically employment history.
export type ExternalProject = {
  id: string;
  name: string;
  headline: string;
  subhead: string;
  domain: string;
  url: string;
  thumbnail?: string;
  featured?: boolean;
};

export const externalProjects: ExternalProject[] = [
  {
    id: "slashdr",
    name: "SlashDR",
    headline: "Unified health interface apps for India",
    subhead: "Your one place for digital health records",
    domain: "Healthcare",
    url: "https://www.slashdr.com/",
    thumbnail: "slashdr.webp",
    featured: true,
  },
];

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
    thumbnail: "sabre.webp",
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
    thumbnail: "sabre.webp",
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
    thumbnail: "sabre.webp",
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
    thumbnail: "kipi.webp",
    company: "Kipi.bi",
    role: "UX Designer",
    period: "Jan 2024 – Oct 2024",
    domain: "Data & Analytics · SaaS",
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
    thumbnail: "ericsson.webp",
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
    thumbnail: "finlocker.webp",
    company: "Infosys Limited",
    role: "UX Designer",
    period: "May 2019 – Aug 2021",
    domain: "FinTech · Supply Chain",
    project: { name: "FinLocker", subtitle: "Financial fitness app" },
    externalUrl: "https://finlocker.com/",
    featured: true,
    oneLiner: "Helping consumers build credit and get mortgage-ready",
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
    thumbnail: "tac-healthcare.webp",
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

// Metrics revealed when a Domains row is hovered, keyed by the top-level
// domain string Domains groups on (the bit before the first "·" in an
// entry's domain). A domain with no entry here simply shows no stats
// block on hover — only list one where there are real numbers to stand
// behind, since these read as impact claims to anyone scanning the page.
// Projects that belong to a domain on the homepage Domains list but don't
// have their own Work entry or case study — listed so a domain's stats
// have visible attribution without creating an empty Work card for them.
export const extraDomainProjects: Record<string, string[]> = {
  Healthcare: ["SlashDR"],
};

export type DomainStat = { value: string; label: string };
export const domainStats: Record<string, DomainStat[]> = {
  Aviation: [
    { value: "06+", label: "Flows redesigned" },
    { value: "90%", label: "Redesigned for web" },
    { value: "2 versions", label: "Released for clients" },
  ],
  Telecom: [
    { value: "$20K+", label: "Subscription saved" },
    { value: "60%", label: "Time saved" },
    { value: "2", label: "Workshops conducted" },
  ],
  Healthcare: [
    { value: "10%", label: "Engagement lift" },
    { value: "100+", label: "New clinics onboarded" },
    { value: "1st version", label: "Patient flow shipped" },
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
    sublabel: "Training",
    intro: "Cycling and gym — where things stand right now.",
    items: [
      { title: "42 km", note: "Ridden this week — mostly the shopping commute" },
      { title: "4 sessions", note: "Strength, gym" },
      { title: "Under 22% body fat", note: "Current goal", tag: "In progress" },
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
  {
    // Distinct employers, not entries — the three Sabre projects all sit
    // under Infogain, so experience.length counts it three times.
    value: String(new Set(experience.map((e) => e.company)).size),
    label: "Companies shipped at",
  },
  {
    value: String(new Set(experience.map((e) => e.domain.split(" · ")[0])).size),
    label: "Industries",
  },
];

export type FaqEntry = {
  id: string;
  // Chip label. Keep it short — these render as pills in a 22rem panel.
  question: string;
  keywords: string[];
  answer: string;
  // Surfaced first when the widget opens. These are the questions a hiring
  // manager opens with, so they shouldn't be buried under the general ones.
  priority?: boolean;
};

// Answers are written in Rathish's own voice — the widget is "Ask Ratz", so
// a visitor is addressing him directly.
//
// Every figure here traces back to the dates in `experience` above. Nothing
// is estimated: the totals are 42 + 27 + 26 + 9 + 9 = 113 months.
export const faq: FaqEntry[] = [
  {
    id: "total-experience",
    question: "Total years of experience?",
    // Deliberately narrow: a broad "experience" keyword here outscores the
    // relevant-experience entry on "how many years of relevant UX experience".
    keywords: ["total experience", "total years", "how many years", "how long have you", "yoe"],
    priority: true,
    answer:
      "Just over nine and a half years, all of it in design. Happy to walk through any part of it.",
  },
  {
    id: "relevant-experience",
    question: "Relevant UX/UI experience?",
    keywords: [
      "relevant",
      "relevant experience",
      "relevant ux experience",
      "ux experience",
      "ui experience",
      "design experience",
    ],
    priority: true,
    answer:
      "All of it. Every role I've held has been a UX/UI design role — none of the total is padded with unrelated work. I've been at Senior UX Designer level since November 2021, so roughly four and a half years of that is senior.",
  },
  {
    id: "preferred-location",
    question: "Preferred location?",
    keywords: ["preferred location", "prefer", "which city", "where do you want"],
    priority: true,
    answer: `I'm actively looking in ${profile.openToCities.join(", ")} — happy with any of the three.`,
  },
  {
    id: "location",
    question: "Current location?",
    keywords: ["current location", "based", "live", "where are you", "which city"],
    priority: true,
    answer: `I'm in ${profile.location}, and open to full-time roles in ${profile.openToCities.join(", ")}.`,
  },
  {
    id: "last-ctc",
    question: "Current / last CTC?",
    keywords: ["current ctc", "last ctc", "current salary", "last salary", "drawing", "current package"],
    priority: true,
    answer: "My last drawn CTC was ₹24 LPA.",
  },
  {
    id: "expected-ctc",
    question: "Expected CTC?",
    keywords: ["expected", "expectation", "expectations", "expected ctc", "looking for", "budget"],
    priority: true,
    answer:
      "I'm looking at ₹25 LPA, and I'm happy to discuss it for the right role and team.",
  },
  {
    id: "negotiable",
    question: "Is that negotiable?",
    keywords: ["negotiable", "negotiate", "flexible on", "room on the"],
    answer:
      "Yes. The scope of the role and the team I'd be joining matter more to me than the last decimal — happy to talk it through.",
  },
  {
    id: "employment-status",
    question: "Current employment status?",
    keywords: ["employment status", "currently working", "are you working", "employed", "still working"],
    answer:
      "I'm between roles at the moment — my last was Senior UX Designer at Infogain, through December 2025. Since then I've been building NivYou, a GLP-1 tracking app I designed and developed end to end, now in closed testing ahead of its Play Store release.",
  },
  {
    id: "last-working-day",
    question: "When did you leave your last role?",
    keywords: ["leave", "left", "last working day", "lwd", "when did you leave"],
    answer: "December 2025, at the end of my engagement with Infogain.",
  },
  {
    id: "notice-period",
    question: "Notice period?",
    keywords: ["notice", "notice period", "serving notice"],
    answer:
      "None to serve — I'm not currently employed, so there's nothing holding up a start date.",
  },
  {
    id: "joining",
    question: "How soon can you join?",
    keywords: ["join", "joining", "how soon", "immediately", "available from", "onboard", "start date"],
    answer:
      "Immediately. With no notice period to work through, I can start as soon as it suits you.",
  },
  {
    id: "offers",
    question: "Holding any offers?",
    keywords: ["offer", "offers", "offer in hand"],
    answer: "No — I'm not holding any offers at the moment.",
  },
  {
    id: "interviewing",
    question: "Interviewing elsewhere?",
    keywords: ["interviewing", "other companies", "elsewhere", "other processes", "in process"],
    answer: "No, there are no other processes running right now.",
  },
  {
    id: "data-driven",
    question: "Experience with data-driven UX?",
    keywords: ["data", "analytics", "data-driven", "metrics", "dashboard", "insight"],
    answer:
      "Yes. At Ericsson I led UX for the Lighthouse Sourcing Pricebook, where the whole point was letting buyers read the data instead of guessing — suppliers compared side by side, and price history over time rather than a single quoted number. It saved $20K+ in subscription costs and cut 60% off the time to complete a sourcing task.",
  },
  {
    id: "relocation",
    question: "Open to relocation?",
    keywords: ["relocate", "relocation", "move", "shift"],
    answer: `Yes. I'm open to relocating for the right role — ${profile.openToCities.join(", ")} are the three I'm targeting.`,
  },
  {
    id: "hybrid",
    question: "Comfortable with office/hybrid?",
    keywords: ["hybrid", "office", "wfo", "onsite", "on-site", "work from office", "remote"],
    answer:
      "Yes, completely. I'm looking for full-time roles on-site or hybrid and I'll work to whatever rhythm the team already has — I'd rather be in the room for the messy early parts of a project anyway.",
  },
  {
    id: "agile",
    question: "Comfortable with Agile/Scrum?",
    keywords: ["agile", "scrum", "sprint", "ceremonies", "standup"],
    answer:
      "Yes — Agile/Scrum is one of my core skills and it's how I've worked throughout. At Infosys I collaborated in Agile teams delivering enterprise SaaS workflows, and the enterprise work since has run on the same cadence, with design staying a step ahead of development.",
  },
  {
    id: "stakeholders",
    question: "Client-facing / stakeholder work?",
    keywords: ["client", "stakeholder", "facing", "workshop", "presentation", "communication"],
    answer:
      "Yes, and it's some of the work I like most. At Ericsson I ran the workshops that decided the scope of the Sourcing Pricebook rebuild — two of them — and built personas and journey maps specifically to get stakeholders aligned before a single screen was designed. The Ericsson case study walks through how those sessions went.",
  },
  {
    id: "domains",
    question: "Open to different domains?",
    keywords: ["domain", "domains", "industry", "industries", "different project", "vertical"],
    answer:
      "Yes — I've moved across them deliberately: aviation at Infogain, telecom at Ericsson, healthcare at NFN Labs and SlashDR, fintech at Infosys, and data & analytics at Kipi.bi. Getting productive in an unfamiliar domain quickly is a large part of what I actually do.",
  },
  {
    id: "assessment",
    question: "Open to a design assessment?",
    keywords: ["assessment", "assignment", "test", "task", "take home", "interview process", "portfolio review"],
    answer:
      "Yes, happy to. Whatever your process looks like — portfolio walkthrough, design exercise, or a take-home — I'm glad to go through it.",
  },
  {
    id: "who",
    question: "Who are you?",
    keywords: ["who", "about", "yourself", "bio", "introduce"],
    answer: `I'm ${profile.name}, a ${profile.title}. ${profile.summary}`,
  },
  {
    id: "experience",
    question: "Where have you worked?",
    keywords: ["where have you worked", "company", "companies", "career", "history", "employer"],
    answer: `Five companies over nine and a half years: ${Array.from(
      new Map(experience.map((e) => [e.company, e])).values(),
    )
      .map((e) => `${e.company} (${e.role}, ${e.period})`)
      .join("; ")}.`,
  },
  {
    id: "current",
    question: "What was your last company?",
    keywords: [
      "recent",
      "latest",
      "lately",
      "last role",
      "most recent",
      "last company",
      "previous company",
      "which company",
      "last organisation",
      "last organization",
    ],
    answer: `Most recently ${experience[0].company} as ${experience[0].role} (${experience[0].period}) — ${experience[0].summary}`,
  },
  {
    id: "projects",
    question: "What have you shipped?",
    keywords: ["project", "projects", "shipped", "portfolio", "case study", "work on", "built"],
    answer:
      "Sabre's scheduling and admin tools in aviation, Ericsson's Sourcing Pricebook in telecom, Kipi 360 in data analytics, FinLocker in fintech, and TAC Healthcare's EHR. I also built and shipped NivYou, a GLP-1 tracker, to the Play Store myself — the Shipped page covers that one.",
  },
  {
    id: "skills",
    question: "What are your skills?",
    keywords: ["skill", "skills", "good at", "expertise", "tools", "software"],
    answer: `Core skills: ${skills.join(", ")}.`,
  },
  {
    id: "education",
    question: "What's your education?",
    keywords: ["education", "degree", "study", "school", "college", "university", "qualification"],
    answer: `${education.map((e) => `${e.credential} — ${e.school}`).join(", ")}. Certifications: ${certifications
      .map((c) => (c.issuer ? `${c.name} (${c.issuer})` : c.name))
      .join(", ")}.`,
  },
  {
    id: "contact",
    question: "How can I reach you?",
    keywords: ["contact", "email", "reach", "hire", "talk", "connect", "call", "schedule"],
    answer: `Email me at ${profile.email}, or book a 30-minute coffee chat — both are on the Contact page, along with LinkedIn.`,
  },
];

// Availability, notice period, and compensation are deliberately not scripted
// here — they change month to month, and a stale answer on a public page is
// worse than no answer. The widget points those to a direct conversation.
export const fallbackFaqAnswer =
  "I don't have a scripted answer for that one. For anything on availability, notice period, or compensation — or anything else not covered here — email me at " +
  profile.email +
  " and I'll answer properly. You can also pick one of the suggested questions below.";
