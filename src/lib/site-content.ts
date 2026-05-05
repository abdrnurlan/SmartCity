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
      "A dedicated page for the homepage image sequence, the AI video piece, and visual evidence that supports the narrative.",
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
    title: "Homepage evening frame",
    format: "16:9 still image",
    description:
      "The transition frame between daylight and night, used to make the homepage cover feel cinematic and controlled.",
  },
  {
    title: "Homepage day frame",
    format: "16:9 still image",
    description:
      "The main daylight frame for the homepage cover, with mountains, clean skyline, and calm editorial light.",
  },
  {
    title: "Homepage night frame",
    format: "16:9 still image",
    description:
      "The matching evening frame for the homepage auto-transition, with city lights and the same camera angle.",
  },
  {
    title: "Mobility still",
    format: "Portrait or landscape image",
    description:
      "A realistic AI-generated scene showing cleaner transport and calmer public movement.",
  },
  {
    title: "Environment still",
    format: "Editorial image",
    description:
      "A premium architectural image that shows solar integration, greenery, and controlled urban density.",
  },
  {
    title: "Almaty mountains panorama",
    format: "16:9 concept image",
    description:
      "Panoramic view of Almaty 2050 at blue hour with the Zailiysky Alatau mountains as a backdrop, futuristic skyline, and a lit elevated transit corridor in the foreground.",
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
    title: "Hero evening frame",
    tool: "ChatGPT Imagen",
    prompt:
      "The same panoramic Almaty 2050 composition as the approved daylight frame, identical camera angle and skyline layout, sunset light behind the mountains, the city beginning to glow, warm reflections on glass, subtle road lights emerging, premium architectural realism, sharp detail, 16:9.",
  },
  {
    title: "Hero day frame",
    tool: "ChatGPT Imagen",
    prompt:
      "Editorial panoramic photograph of Almaty in 2050, elevated overlook, centered skyline, snow-covered mountains spanning the full background, warm late-afternoon sunlight, premium glass-and-stone architecture, realistic road network, calm city atmosphere, photoreal, architecture magazine style, no neon, no sci-fi cliches, no exaggerated perspective, 16:9.",
  },
  {
    title: "Hero night frame",
    tool: "ChatGPT Imagen",
    prompt:
      "The same panoramic Almaty 2050 composition as the approved daylight frame, identical camera angle and skyline layout, blue-hour sky, building lights glowing on, streetlights and traffic light trails subtle and elegant, mountains still visible, sharp architectural detail, photoreal, premium city photography, 16:9.",
  },
  {
    title: "Mobility still",
    tool: "ChatGPT Imagen",
    prompt:
      "Street-level view of Almaty 2050, wide tree-lined boulevard, electric light rail tram passing on dedicated track, pedestrian zone with people walking and cycling, no private cars visible, warm afternoon light, clean modern architecture, ultra-realistic architectural photography, 16:9.",
  },
  {
    title: "Environment still",
    tool: "ChatGPT Imagen",
    prompt:
      "Rooftop terrace of a modern Almaty 2050 building, integrated solar panel arrays, planted green rooftop garden, Zailiysky Alatau mountains visible in background, blue sky, warm afternoon light, premium real-estate architectural photography, sharp detail, 16:9.",
  },
  {
    title: "AI video piece",
    tool: "Kling or Veo",
    prompt:
      "Create a calm premium AI video for the Almaty 2050 project using the same skyline composition. No aggressive camera movement, no drone fly-through. Preserve the framing and animate the shift from warm daylight through sunset into blue hour, with subtle lights turning on and very soft cloud motion. Keep the result sharp, realistic, and presentation-friendly.",
  },
  {
    title: "Almaty mountains panorama",
    tool: "ChatGPT Imagen",
    prompt:
      "Panoramic concept image of Almaty 2050 at blue hour, elevated viewpoint, snow-capped Zailiysky Alatau mountains spanning the full background, futuristic glass-and-steel skyline with glowing tower facades and horizontal light bands, elevated electric light-rail crossing the mid-ground, wide green boulevard with intelligent street lighting, no neon, no sci-fi excess, premium architectural realism, 16:9.",
  },
];