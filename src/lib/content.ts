/**
 * Single source of truth for every piece of copy on the site.
 *
 * Content is derived from the Aqua Astra product docs (D:\Astra\docs and
 * D:\Astra\CLAUDE.md). Edit here rather than inside components.
 */

export type NavLink = { label: string; href: string };

export const site = {
  name: "Aqua Astra",
  tagline: "AI-powered shrimp aquaculture assistant",
  description:
    "Aqua Astra turns shrimp pond laboratory reports into clear health scores, plain-language explanations and actionable recommendations — in English and Telugu.",
  email: "hello@aquaastra.com",
  phone: "+91 00000 00000",
  location: "Andhra Pradesh, India",
  androidPackage: "com.aquaastra.aqua_astra",
} as const;

export const navLinks: NavLink[] = [
  { label: "Problem", href: "#problem" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Who it is for", href: "#audience" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Built for shrimp farmers · English & తెలుగు",
  title: "Lab reports in. Clear decisions out.",
  subtitle:
    "Aqua Astra reads your pond's laboratory report, scores its health against scientific thresholds, and explains what to do next — in language you actually use.",
  primaryCta: { label: "Get the app", href: "#get-app" },
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
};

/** Capability highlights shown in the band under the hero. */
export const highlights = [
  { value: "2", label: "Languages", detail: "English and Telugu throughout" },
  { value: "1 photo", label: "To get started", detail: "Snap or upload your report" },
  { value: "0", label: "Training needed", detail: "No lab background required" },
  { value: "Every report", label: "Kept in history", detail: "Track a pond over time" },
];

export const problem = {
  title: "A report you cannot read is a decision you cannot make",
  intro:
    "Water and soil analysis arrives as a page of numbers. Acting on it means holding several parameters in your head at once and knowing the safe range for each — under time pressure, cycle after cycle.",
  points: [
    {
      title: "Reports are hard to interpret",
      body: "Raw parameter tables assume a laboratory background most farmers were never given.",
    },
    {
      title: "Parameters interact",
      body: "No single value tells the story. Ammonia, pH, alkalinity and the rest have to be read together.",
    },
    {
      title: "Advice is inconsistent",
      body: "Ask three consultants, get three answers — and no record of why any of them said it.",
    },
    {
      title: "Manual reading is slow",
      body: "By the time a report is understood, the pond has already moved on.",
    },
    {
      title: "Warning signs get missed",
      body: "The early indicator of a disease event is easy to overlook in a dense table.",
    },
    {
      title: "Language is a barrier",
      body: "Technical English stands between a farmer and their own data.",
    },
  ],
};

export const steps = [
  {
    step: "01",
    title: "Upload the report",
    body: "Photograph a printed lab report or attach a PDF from your phone. No re-typing, no data entry.",
  },
  {
    step: "02",
    title: "OCR extraction",
    body: "Aqua Astra reads the parameters and their values straight off the page and structures them.",
  },
  {
    step: "03",
    title: "Scientific rule engine",
    body: "Every value is evaluated against species-appropriate thresholds — a documented rule set, not a guess.",
  },
  {
    step: "04",
    title: "AI explanation",
    body: "The findings are written up in plain English or Telugu, saying what is off and why it matters.",
  },
  {
    step: "05",
    title: "Health score",
    body: "One number and a colour tell you at a glance whether this pond needs attention today.",
  },
  {
    step: "06",
    title: "Recommendations & history",
    body: "You get concrete next actions, and the report is filed so you can see the pond's trend over the cycle.",
  },
];

export type IconName =
  | "scan"
  | "gauge"
  | "language"
  | "checklist"
  | "history"
  | "bell"
  | "pond"
  | "weather";

export type Feature = {
  title: string;
  body: string;
  icon: IconName;
  status: "Available" | "In progress" | "Planned";
};

export const features: Feature[] = [
  {
    title: "Lab report analysis",
    body: "Upload a water or soil analysis and get a structured, parameter-by-parameter reading of it in seconds.",
    icon: "scan",
    status: "Available",
  },
  {
    title: "Pond health score",
    body: "A single score with a clear colour band, so a glance tells you which ponds are fine and which are not.",
    icon: "gauge",
    status: "Available",
  },
  {
    title: "English & Telugu",
    body: "The whole app — not just a label here and there — speaks both languages, switchable at any time.",
    icon: "language",
    status: "Available",
  },
  {
    title: "Actionable recommendations",
    body: "Specific corrective steps tied to the parameters that triggered them, instead of generic advice.",
    icon: "checklist",
    status: "Available",
  },
  {
    title: "Report history",
    body: "Every analysis is stored against the pond, so you can follow a trend across the whole cycle.",
    icon: "history",
    status: "Available",
  },
  {
    title: "Alerts",
    body: "Push notifications when a reading crosses a threshold that needs a response today.",
    icon: "bell",
    status: "In progress",
  },
  {
    title: "Farms & ponds",
    body: "Organise multiple farms and ponds under one account, each with its own history and score.",
    icon: "pond",
    status: "In progress",
  },
  {
    title: "Weather context",
    body: "Local conditions alongside your readings, because water chemistry does not move in isolation.",
    icon: "weather",
    status: "Planned",
  },
];

export const audience = [
  {
    title: "Shrimp farmers",
    body: "The primary user. Understand a report without scientific training, in your own language, on the device already in your pocket.",
  },
  {
    title: "Consultants",
    body: "Monitor many farms from one place and keep a documented, consistent basis for the advice you give.",
  },
  {
    title: "Laboratories",
    body: "Give clients an interpretation layer on top of the numbers you already produce for them.",
  },
  {
    title: "Managers & researchers",
    body: "A clean, queryable record of every report across every pond, ready for review and analysis.",
  },
];

export const roadmap = [
  "Disease detection",
  "Continuous pond monitoring",
  "Feed tracking",
  "IoT sensor integration",
  "AI chat assistant",
  "Growth & harvest prediction",
  "Video consultation",
  "Financial reporting",
];

export const faqs = [
  {
    q: "What exactly does Aqua Astra analyse?",
    a: "Laboratory reports for shrimp ponds — water and soil analyses. You upload the report you already receive from your lab; Aqua Astra extracts the parameters, evaluates them, and explains the result.",
  },
  {
    q: "Do I need to type in the values myself?",
    a: "No. OCR reads the values off a photo or PDF of the report. You review what was extracted before the analysis runs.",
  },
  {
    q: "Is it available in Telugu?",
    a: "Yes. English and Telugu are both first-class throughout the app, including the AI-written explanations, and you can switch language at any time.",
  },
  {
    q: "Does it replace my consultant?",
    a: "No, and it is not meant to. Aqua Astra gives you a fast, consistent first reading and a written record. Decisions with real money behind them still deserve an expert's eye.",
  },
  {
    q: "Where is my data stored?",
    a: "Reports are stored against your account so you can see a pond's history over time. Sessions are held in your device's secure storage.",
  },
  {
    q: "What does it cost?",
    a: "Pricing is being finalised ahead of launch. Get in touch and we will let you know before the app goes live.",
  },
];

export const footerLinks = {
  product: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "FAQ", href: "#faq" },
  ],
  resources: [
    { label: "CAA", href: "https://www.caa.gov.in/" },
    { label: "MPEDA", href: "https://mpeda.gov.in/" },
    { label: "CIBA", href: "https://ciba.icar.gov.in/" },
    { label: "NACSA", href: "https://nacsa.mpeda.gov.in/" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Refund & Cancellation", href: "#" },
  ],
};
