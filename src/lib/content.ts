/**
 * Single source of truth for every piece of copy on the site.
 *
 * Content is derived from the Aqua Astra product docs (D:\Astra\docs and
 * D:\Astra\CLAUDE.md). Edit here rather than inside components.
 */

export type NavLink = { label: string; href: string };

const addressLines = [
  "6-137, 1st Floor, Arthamuru, Bantumilli",
  "Krishna, Andhra Pradesh 521369",
  "India",
] as const;

export const site = {
  name: "Aqua Astra",
  /** Registered entity operating the Aqua Astra app and this website — must match Meta Business Manager. */
  legalName: "Aqua Astra Enterprises LLP",
  tagline: "AI-powered shrimp aquaculture assistant",
  description:
    "Aqua Astra turns shrimp pond laboratory reports into clear health scores, plain-language explanations and actionable recommendations — in English and Telugu.",
  email: "aquaastraenterprises@gmail.com",
  phone: "+91 79894 67777",
  location: "Andhra Pradesh, India",
  addressLines,
  registeredAddress: addressLines.join(", "),
  androidPackage: "com.aquaastra.aqua_astra",
  url: "https://aquaastra.in",
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "#top" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Who it is for", href: "#audience" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
  { label: "About Us", href: "/about/" },
];

export const hero = {
  eyebrow: "Built for shrimp farmers · English & తెలుగు",
  title: "Lab reports in. Clear decisions out.",
  subtitle:
    "Aqua Astra reads your pond's laboratory report, scores its health against scientific thresholds, and explains what to do next — in language you actually use.",
  primaryCta: { label: "Get the app", href: "#get-app" },
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
};

/**
 * The two picture slides in the hero carousel. Each is shown whole; on phones
 * and tablets a caption drawn from the picture itself sits beneath it.
 */
export const heroPosters = {
  artwork: {
    src: "/hero-grow-together.webp",
    width: 1670,
    height: 942,
    alt: "Aqua Astra — Grow Together, ringed by its four promises: good seed, good feed, good medicine and good price, over an aerated shrimp pond at sunset.",
    title: "Grow Together",
    tags: ["Good Seed", "Good Feed", "Good Medicine", "Good Price"],
  },
  harvest: {
    src: "/hero-farm-harvest-good-feed.webp",
    width: 1672,
    height: 941,
    alt: "A shrimp farmer holding a handful of fresh vannamei in front of aerated ponds, beside blue crates of the day’s harvest and an Aqua Astra farm sign.",
    title: "Healthy shrimp, better returns",
    tags: ["Proper management", "Regular monitoring"],
  },
} as const;

/** The app walkthrough slide in the hero carousel: share, see it in the app, get it on WhatsApp. */
export const appWalkthrough = {
  eyebrow: "How the app works",
  title: "Share the report. We do the reading.",
  subtitle:
    "Send your lab report to Aqua Astra once. The results are ready in the app, and the same report card reaches your WhatsApp.",
  steps: [
    {
      title: "Share your report",
      body: "Share or upload your lab report PDF in the app, in English or తెలుగు.",
    },
    {
      title: "See it in the app",
      body: "A health score for every pond, checked against safe ranges, with plain advice.",
    },
    {
      title: "Get it on WhatsApp",
      body: "The report card also arrives in your chat from Aqua Astra, so you can read it anywhere.",
    },
  ],
  whatsappFrom: site.phone,
  /** Shown under the steps on phones and tablets, where they scroll sideways. */
  swipeHint: "Swipe to see all 3 steps",
  screens: {
    upload: {
      src: "/app-upload-report.webp",
      alt: "Aqua Astra home screen for a new farm: Analyze Your Water Lab Report, with an Upload Report button and an English and Telugu language switch.",
    },
    home: {
      src: "/app-home-health-score.webp",
      alt: "Aqua Astra home screen: pond T1's water analysis report with a health score of 91, Healthy, and a recent report summary of temperature, salinity and pH.",
    },
    reports: {
      src: "/app-reports-pond-summary.webp",
      alt: "Aqua Astra reports screen: a lab report scored 78%, Good, with a ponds summary rating T1 at 91%, T2 at 74% and T3 at 88%.",
    },
    cards: [
      {
        src: "/app-whatsapp-report-card.webp",
        alt: "Aqua Astra report card: average farm health of 63, Needs Attention, with each pond's score and the parameters out of range.",
      },
      {
        src: "/app-whatsapp-report-card-2.webp",
        alt: "Aqua Astra pond report card for pond A1: a Critical rating, with each water parameter shown as Good, Warning or Critical in English and Telugu.",
      },
    ],
  },
} as const;

/** The About page: the app first, then Aqua Astra as a software partner for the aqua industry. */
export const about = {
  title: "About Aqua Astra Mobile App",
  lead: "Aqua Astra Mobile App is an AI-powered shrimp aquaculture assistant that turns a laboratory report into a decision a farmer can act on.",
  app: {
    eyebrow: "The app",
    title: "Your pond's lab report, finally readable",
    body: [
      "Water analysis arrives as a page of numbers. Aqua Astra Mobile App reads that report for you, checks every parameter against scientific thresholds, and gives each pond a clear health score with advice in plain language.",
      "Share or upload a report once and the results are ready in the app. The same report card is also sent to your WhatsApp, so you can read it in the field without opening anything else.",
    ],
    points: [
      {
        icon: "scan",
        title: "Reads the report",
        body: "Upload a lab report and get a parameter-by-parameter reading in seconds.",
      },
      {
        icon: "gauge",
        title: "Scores every pond",
        body: "A health score per pond, with each value marked healthy, warning or critical.",
      },
      {
        icon: "language",
        title: "English and తెలుగు",
        body: "Explanations in the language you use on the farm.",
      },
      {
        icon: "history",
        title: "Keeps the history",
        body: "Every report is saved, so you can watch a pond change from cycle to cycle.",
      },
    ],
  },
  industry: {
    eyebrow: "Beyond the Mobile App",
    title: "Building Intelligent Software for the Aqua Industry",
    lead: "The same team that built Aqua Astra Mobile App can build software for your aquaculture business: farms, hatcheries, labs, feed and input suppliers, and processors.",
    audiences: [
      { label: "Farms", icon: "pond" },
      { label: "Hatcheries", icon: "hatchery" },
      { label: "Labs", icon: "lab" },
      { label: "Processors", icon: "factory" },
    ],
    journeyTitle: "Everything Possible",
    steps: [
      {
        name: "Idea",
        tag: "Listen",
        icon: "idea",
        body: "We listen to the problem on your farm or in your business and shape it into something buildable.",
      },
      {
        name: "Prototype",
        tag: "Build fast",
        icon: "prototype",
        body: "A working first version, quickly, so you can see and touch the idea instead of imagining it.",
      },
      {
        name: "Review",
        tag: "Refine together",
        icon: "review",
        body: "You use it, we listen, and we refine it together until it fits the way your team works.",
      },
      {
        name: "Achieve",
        tag: "Launch & grow",
        icon: "achieve",
        body: "A finished product that delivers the result you set out for, and that we keep improving.",
      },
    ],
    offers: [
      { title: "Dashboards and analytics on your own data", icon: "dashboard" },
      { title: "Lab and water-quality reporting tools", icon: "lab" },
      { title: "Farm and pond management", icon: "pond" },
      { title: "Mobile apps for farmers and field teams", icon: "mobile" },
    ],
    prompt: "Have an idea for your aqua business? Let's build it together.",
    cta: { label: "Talk to us", href: "/contact-us/" },
  },
} as const;

/** Capability highlights shown in the band under the hero. */
export const highlights = [
  { value: "2", label: "Languages", detail: "English and Telugu throughout" },
  { value: "1 photo", label: "To get started", detail: "Share or upload your report" },
  { label: "No Lab background required", detail: "No Training needed" },
  { value: "Every report", label: "Kept in history", detail: "Track a pond over time" },
];

export const problem = {
  /** Centred statement in the gap between the hero and this section. */
  banner: "Built for Vannamei Aquaculture",
  title: "A report you cannot read is a decision you cannot make",
  intro:
    "Water analysis arrives as a page of numbers. Acting on it means holding several parameters in your head at once and knowing the safe range for each — under time pressure, cycle after cycle.",
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
    body: "Share a lab report or attach a PDF from your phone. No re-typing, no data entry.",
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
    title: "Analysis & history",
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
  | "weather"
  | "idea"
  | "prototype"
  | "review"
  | "cycle"
  | "achieve"
  | "dashboard"
  | "lab"
  | "mobile"
  | "hatchery"
  | "factory"
  | "more";

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
    title: "Weather context",
    body: "Local conditions alongside your readings, because water chemistry does not move in isolation.",
    icon: "weather",
    status: "Available",
  },
];

export const audience = [
  {
    title: "Vannamei shrimp farmers",
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

export const roadmap = ["Disease Detection"];

export const faqs = [
  {
    q: "What exactly does Aqua Astra analyse?",
    a: "Laboratory reports for shrimp ponds — water analyses. You upload the report you already receive from your lab; Aqua Astra extracts the parameters, evaluates them, and explains the result.",
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
    { label: "About Us", href: "/about/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms & Conditions", href: "/terms-and-conditions/" },
    { label: "Refund & Cancellation", href: "/refund-and-cancellation/" },
    { label: "Contact Us", href: "/contact-us/" },
  ],
};
