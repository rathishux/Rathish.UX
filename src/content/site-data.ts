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
  resumeUrl: `${import.meta.env.BASE_URL}resume.docx`,
  social: {
    linkedin: "https://www.linkedin.com/in/rathish-gandhi/",
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
};

export const experience: Experience[] = [
  {
    id: "infogain",
    company: "Infogain",
    role: "Senior UX Designer",
    period: "Mar 2025 – Dec 2025",
    domain: "Aviation · Enterprise SaaS",
    summary:
      "Redesigned an aviation scheduling workflow, simplifying complex slot-allocation processes and improving operational efficiency.",
    highlights: [
      "Redesigned aviation scheduling workflow, simplifying complex slot allocation processes and improving efficiency.",
      "Introduced bulk-edit and filtering features, reducing manual errors and improving operational accuracy.",
      "Collaborated with cross-functional teams to accelerate product adoption.",
    ],
  },
  {
    id: "kipi-bi",
    company: "Kipi.bi",
    role: "UX Designer",
    period: "Jan 2024 – Oct 2024",
    domain: "Data & Analytics · SaaS",
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
    summary:
      "Designed intuitive interfaces across healthcare and SaaS products early in a 9-year design practice.",
    highlights: [
      "Designed intuitive interfaces across multiple domains including healthcare and SaaS.",
      "Improved user engagement through clean and consistent UI design.",
    ],
  },
];

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
