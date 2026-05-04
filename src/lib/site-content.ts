export type NavItem = {
  href: string;
  label: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type SourceLink = {
  title: string;
  url: string;
  note: string;
};

export type PromptItem = {
  title: string;
  tool: string;
  prompt: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/vision", label: "Vision" },
  { href: "/urban-systems", label: "Urban Systems" },
  { href: "/media", label: "Media" },
  { href: "/sources-prompts", label: "Sources and Prompts" },
];

export const heroMetrics: Metric[] = [
  { value: "2050", label: "Target horizon" },
  { value: "5", label: "Project pages" },
  { value: "AI", label: "Media workflow" },
  { value: "10 min", label: "Presentation window" },
];

export const visionPillars = [
  {
    eyebrow: "Urban quality",
    title: "Cleaner air and calmer streets",
    description:
      "The proposal focuses on a city that is easier to breathe in, easier to move through, and more comfortable in everyday life.",
  },
  {
    eyebrow: "Economic logic",
    title: "Investment aligned with public value",
    description:
      "The concept treats energy, mobility, and public space as linked systems that can improve efficiency while raising quality of life.",
  },
  {
    eyebrow: "Visual story",
    title: "Presentation ready from the first glance",
    description:
      "The site is structured as a polished concept piece, so the same material can be reused naturally in a short defense presentation.",
  },
];

export const homePreviewCards = [
  {
    href: "/vision",
    title: "Vision",
    description:
      "The big idea, the rationale behind it, and the priorities that shape the city concept.",
  },
  {
    href: "/urban-systems",
    title: "Urban Systems",
    description:
      "Mobility, environment, energy, and smart infrastructure explained as a coherent set of systems.",
  },
  {
    href: "/media",
    title: "Media",
    description:
      "A dedicated page for the loopable hero video, AI images, and visual evidence that supports the narrative.",
  },
  {
    href: "/sources-prompts",
    title: "Sources and Prompts",
    description:
      "A presentation-friendly record of supporting sources, prompt wording, and tool choices.",
  },
];

export const systemHighlights = [
  {
    metric: "Mobility",
    title: "Low-friction transit",
    description:
      "Smart routing, clean electric transport, and fewer private car bottlenecks create a city that moves with less stress.",
  },
  {
    metric: "Energy",
    title: "Distributed clean power",
    description:
      "Solar roofs, adaptive lighting, and efficient building envelopes make urban growth less resource heavy.",
  },
  {
    metric: "Environment",
    title: "Better urban comfort",
    description:
      "More shade, more planting, and smarter public-space design improve daily life while reducing environmental pressure.",
  },
];

export const visionSignals = [
  {
    title: "Air quality as a public priority",
    description:
      "A future city is only convincing if it addresses clean air, lower congestion, and healthier public space before anything decorative.",
  },
  {
    title: "Infrastructure that earns trust",
    description:
      "The concept balances visible innovation with realistic urban systems such as better transit, resilient energy, and more shaded pedestrian space.",
  },
  {
    title: "A strong narrative for defense",
    description:
      "The structure helps explain not just what the city looks like, but why these decisions matter socially, environmentally, and economically.",
  },
];

export const urbanSystemDetails = [
  {
    title: "Mobility",
    intro:
      "Movement through the city should be easier, cleaner, and more predictable.",
    points: [
      "Electric public transit as the main urban backbone",
      "Walkable mixed-use districts with fewer car-first spaces",
      "Smarter routing that reduces wasted time and traffic pressure",
    ],
  },
  {
    title: "Energy",
    intro:
      "Buildings and public infrastructure can be more efficient without looking experimental.",
    points: [
      "Solar integration on roofs and public facilities",
      "Adaptive lighting and lower energy waste in streets and buildings",
      "Better insulation and material choices for long-term efficiency",
    ],
  },
  {
    title: "Public realm",
    intro:
      "Daily comfort is shaped by streets, shade, access, and greenery.",
    points: [
      "More trees and shaded routes across busy districts",
      "Public spaces designed for people instead of leftover traffic zones",
      "Cleaner visual language and more coherent civic identity",
    ],
  },
];

export const mediaPlan = [
  {
    title: "Hero video",
    format: "Loopable 16:9 video",
    description:
      "An aerial scene of Almaty 2050 that sets the visual tone for the homepage and the media page.",
  },
  {
    title: "Mobility still",
    format: "Portrait or landscape image",
    description:
      "A realistic AI-generated scene showing cleaner transport and calmer public movement.",
  },
  {
    title: "Energy and environment still",
    format: "Editorial image",
    description:
      "A premium architectural image that shows solar integration, greenery, and controlled urban density.",
  },
];

export const presentationOutline = [
  "Project title and concept",
  "Why Almaty needs a smarter urban future",
  "The main pillars of the vision",
  "Website walkthrough",
  "AI tools, prompts, and media process",
  "Sources and additional materials",
  "Short conclusion and questions",
];

export const sourceLinks: SourceLink[] = [
  {
    title: "UN Habitat",
    url: "https://unhabitat.org/",
    note: "Urban development, inclusive planning, and sustainable city frameworks.",
  },
  {
    title: "World Bank Urban Development",
    url: "https://www.worldbank.org/en/topic/urbandevelopment",
    note: "City infrastructure, transport, resilience, and public investment context.",
  },
  {
    title: "OECD Sustainable Cities",
    url: "https://www.oecd.org/cfe/cities/",
    note: "Data and policy perspective on productivity, livability, and long-term urban transition.",
  },
  {
    title: "C40 Cities",
    url: "https://www.c40.org/",
    note: "Practical city climate strategies relevant to air quality and energy decisions.",
  },
];

export const promptLibrary: PromptItem[] = [
  {
    title: "Hero aerial still",
    tool: "ChatGPT Imagen",
    prompt:
      "Editorial aerial photograph of Almaty in 2050 at golden hour, warm sunlight, clean skyline, modern low-emission transport corridors, subtle vertical gardens, snow-covered mountains in the distance, photoreal, premium architecture magazine style, no neon, no sci-fi cliches, 16:9.",
  },
  {
    title: "Mobility concept image",
    tool: "ChatGPT Imagen",
    prompt:
      "Street-level editorial photograph of a future Almaty mobility hub, electric transit, calm pedestrian zone, warm natural light, realistic materials, clean premium urban design, photoreal, 4:5.",
  },
  {
    title: "Loop video prompt",
    tool: "Video model",
    prompt:
      "8-second cinematic aerial shot over Almaty in 2050, golden hour, clear atmosphere, modern sustainable skyline, mountain backdrop, subtle traffic light trails, slow smooth camera motion, photoreal, loopable start and end frames, 16:9, no text overlays.",
  },
];