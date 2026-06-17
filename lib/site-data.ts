/**
 * ─────────────────────────────────────────────────────────────────────────
 *  STONEWARD OUTDOOR LIVING  ·  single source of truth
 * ─────────────────────────────────────────────────────────────────────────
 *  Everything editable lives here. Re-skin or re-content the whole site by
 *  editing these values — every page and component reads from this file.
 *
 *  DEMO / PORTFOLIO NOTICE: Stoneward Outdoor Living is a fictional sample
 *  contractor. All projects, prices, ratings, and testimonials below are
 *  illustrative sample content for demonstration. Replace with real project
 *  photography and copy before going live.
 * ─────────────────────────────────────────────────────────────────────────
 */

/** Build a width-optimized Unsplash URL from a photo id. Swap these for real
 *  project photos in /public/images and reference them with leading-slash paths. */
const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/** A muted, lower-contrast variant used for the "before" frame of the demo
 *  before/after sliders so a stock photo reads as a tired, pre-renovation yard.
 *  Replace with your genuine "before" jobsite photo before going live. */
const imgBefore = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80&sat=-58&con=-12&bri=-10`;

export const SITE = {
  name: "Stoneward",
  studioName: "Stoneward Outdoor Living",
  legalName: "Stoneward Outdoor Living, LLC",
  tagline: "Backyards built to live in.",
  positioning:
    "Award-winning design-build firm for high-end outdoor spaces across Dallas–Fort Worth — patios, outdoor kitchens, custom pools, pergolas, landscape design & lighting. Free on-site estimates, financing available.",
  url: "https://www.stonewardoutdoor.example",
  phoneDisplay: "(214) 555-0182",
  phoneHref: "+12145550182",
  email: "build@stonewardoutdoor.example",
  market: "Dallas–Fort Worth, TX",
  serviceArea: "Plano · Frisco · Southlake · McKinney · Allen · Prosper",
  yearsInBusiness: "15 years",
  warranty: "2-year workmanship warranty",
  license: "TX Licensed & Insured · #TX-OBL-0492",
  address: {
    line1: "6850 Dallas Pkwy, Suite 210",
    city: "Plano",
    region: "TX",
    postal: "75024",
    country: "US",
  },
  geo: { lat: 33.0844, lng: -96.8025 },
  hours: [
    { day: "Mon – Fri", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 3:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
  formEndpoint: "https://formspree.io/f/your-form-id",
  financingApply: "https://www.hearth.com/",
  mapEmbed:
    "https://maps.google.com/maps?q=Plano%2C%20TX&t=&z=10&ie=UTF8&iwloc=&output=embed",
  social: {
    instagram: "https://instagram.com/",
    houzz: "https://www.houzz.com/",
    google: "https://www.google.com/maps",
    facebook: "https://www.facebook.com/",
  },
  builtBy: "Design & build by [Your Studio].",
} as const;

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Financing", href: "/financing" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Free Estimate", href: "/contact" },
];

export const CTA = {
  estimate: { label: "Get a Free Estimate", href: "/contact" },
  call: { label: "Call", href: `tel:${SITE.phoneHref}` },
  quote: { label: "Request a Quote", href: "/contact" },
  portfolio: { label: "View the Portfolio", href: "/portfolio" },
  services: { label: "Explore Services", href: "/services" },
  financing: { label: "See Financing", href: "/financing" },
  process: { label: "Our Process", href: "/process" },
};

export const HERO = {
  eyebrow: "Dallas–Fort Worth · Design-Build",
  title: "Your backyard, reimagined.",
  subtitle:
    "Stoneward designs and builds award-winning outdoor spaces across DFW — patios, outdoor kitchens, custom pools, pergolas, and landscape lighting. One in-house team, from 3D design to the final plant.",
  image: img("1600585154340-be6161a56a0c", 2400),
  imageAlt:
    "Modern Dallas home at dusk with a lit, landscaped backyard and mature shade tree",
};

export type TrustBadge = { value: string; label: string };

export const TRUST: TrustBadge[] = [
  { value: "Licensed & insured", label: "TX design-build firm" },
  { value: "500+", label: "Backyards built" },
  { value: "15 yrs", label: "Serving DFW" },
  { value: "5.0★", label: "Houzz & Google" },
];

export type Stat = { value: string; label: string };

export const STATS: Stat[] = [
  { value: "500+", label: "Backyards built in DFW" },
  { value: "15", label: "Years in business" },
  { value: "5.0★", label: "On Houzz & Google" },
  { value: "2-yr", label: "Workmanship warranty" },
];

export type Service = {
  key: string;
  name: string;
  priceFrom: string;
  tagline: string;
  blurb: string;
  includes: string[];
  materials: string;
  image: string;
  imageAlt: string;
};

export const SERVICES: Service[] = [
  {
    key: "landscape-design",
    name: "Landscape Design & Install",
    priceFrom: "from $8K",
    tagline: "A planted, living backyard — designed to thrive in North Texas.",
    blurb:
      "A complete landscape plan and installation: grading, beds, trees, native and adapted plantings, sod, and edging — designed around how you actually use the yard and built to flourish in the DFW climate.",
    includes: [
      "On-site consultation & site analysis",
      "Full planting plan with 3D rendering",
      "Trees, shrubs, perennials & seasonal color",
      "Soil prep, grading & drainage corrections",
      "Sod, mulch, steel edging & bed definition",
    ],
    materials:
      "Native & Texas-adapted plant palette, hardwood mulch, steel edging, amended planting soil.",
    image: img("1598902108854-10e335adac99", 1400),
    imageAlt: "Lush layered garden planting with mixed greenery and groundcover",
  },
  {
    key: "patios-hardscaping",
    name: "Paver Patios & Hardscaping",
    priceFrom: "from $15K",
    tagline: "The foundation of every great backyard.",
    blurb:
      "Paver patios, walkways, seat walls, fire features, and steps built on a proper compacted base so they stay flat and crack-free for decades. The hardscape that ties the whole space together.",
    includes: [
      "Paver & natural-stone patios",
      "Walkways, steps & seat walls",
      "Built-in fire pits & fireplaces",
      "Retaining walls & grade transitions",
      "Engineered base & polymeric joint sand",
    ],
    materials:
      "Belgard & Pavestone pavers, Oklahoma flagstone, modular block retaining systems.",
    image: img("1600047509807-ba8f99d2cdde", 1400),
    imageAlt: "Modern home exterior with a clean paver walkway and lawn",
  },
  {
    key: "outdoor-kitchens",
    name: "Outdoor Kitchens",
    priceFrom: "from $20K",
    tagline: "The room everyone ends up in.",
    blurb:
      "Full outdoor kitchens with built-in grills, counters, storage, and bar seating — finished in stone or stucco to match your home. Built for Texas summers and year-round entertaining.",
    includes: [
      "Built-in grill, side burner & vent hood",
      "Stone or stucco counter & bar seating",
      "Storage drawers, sink & fridge rough-ins",
      "Gas, water & electrical coordination",
      "Optional pizza oven & smoker integration",
    ],
    materials:
      "Stainless built-ins, granite & porcelain counters, stone or stucco veneer.",
    image: img("1582268611958-ebfd161ef9cf", 1400),
    imageAlt:
      "Outdoor kitchen and dining area beside a pool in a finished backyard",
  },
  {
    key: "pools-spas",
    name: "Custom Pools & Spas",
    priceFrom: "from $65K",
    tagline: "A resort, twenty steps from your back door.",
    blurb:
      "Gunite pools and spas designed as the centerpiece of the whole backyard — tanning ledges, spillover spas, water and fire features, automation, and decking that all comes from one coordinated plan.",
    includes: [
      "Engineered gunite pool & spa",
      "Tanning ledge, benches & water features",
      "Pool automation & LED lighting",
      "Decking, coping & waterline tile",
      "Equipment, plumbing & permits managed",
    ],
    materials:
      "Gunite shell, pebble & quartz finishes, glass & porcelain tile, smart automation.",
    image: img("1600596542815-ffad4c1539a9", 1400),
    imageAlt: "Modern infinity-edge pool beside a contemporary white home",
  },
  {
    key: "pergolas-shade",
    name: "Pergolas & Shade Structures",
    priceFrom: "from $12K",
    tagline: "Make the patio usable in August.",
    blurb:
      "Custom pergolas, cabanas, and louvered patio covers that extend your living space and tame the Texas sun — from cedar classics to motorized aluminum louvers with integrated lighting and fans.",
    includes: [
      "Cedar & aluminum pergolas",
      "Motorized louvered roof systems",
      "Attached patio covers & cabanas",
      "Integrated lighting, fans & heaters",
      "Engineered footings & permits",
    ],
    materials:
      "Rough-sawn cedar, powder-coated aluminum louvers, composite & steel framing.",
    image: img("1600573472592-401b489a3cdc", 1400),
    imageAlt: "Contemporary covered patio and courtyard with wood-clad structure",
  },
  {
    key: "landscape-lighting",
    name: "Landscape Lighting",
    priceFrom: "from $3.5K",
    tagline: "The backyard does not have to end at sunset.",
    blurb:
      "Low-voltage LED lighting that makes the yard glow after dark — path lights, uplit trees, washed walls, and step lighting on a timer and app control, all designed for safety and drama.",
    includes: [
      "Low-voltage LED path & spot lighting",
      "Tree uplighting & architectural washing",
      "Step, deck & hardscape lighting",
      "Transformer, timers & app control",
      "Warm-white, color-correct fixtures",
    ],
    materials:
      "Cast-brass fixtures, low-voltage LED, smart transformers with app control.",
    image: img("1568605114967-8130f3a36994", 1400),
    imageAlt: "Home and garden glowing with warm landscape lighting at dusk",
  },
  {
    key: "irrigation-turf",
    name: "Irrigation & Turf",
    priceFrom: "from $4K",
    tagline: "A green lawn that survives the Texas heat.",
    blurb:
      "Efficient drip and spray irrigation with smart controllers, plus premium sod or low-maintenance artificial turf — so the landscape we install actually thrives through a DFW summer.",
    includes: [
      "Smart Wi-Fi irrigation controllers",
      "Drip zones & efficient spray heads",
      "Premium sod installation",
      "Low-maintenance artificial turf",
      "Seasonal tune-ups & freeze protection",
    ],
    materials:
      "Hunter & Rain Bird components, smart controllers, premium sod & turf systems.",
    image: img("1558904541-efa843a96f01", 1400),
    imageAlt: "Close-up of healthy, freshly installed green turf lawn",
  },
];

export type WhyPoint = { icon: string; title: string; body: string };

export const WHY: WhyPoint[] = [
  {
    icon: "PencilRuler",
    title: "In-house design + build",
    body:
      "One team owns it end to end — the designer who draws your 3D plan works with the crew who builds it. No subcontractor finger-pointing, no surprises.",
  },
  {
    icon: "ShieldCheck",
    title: "2-year workmanship warranty",
    body:
      "Every Stoneward project is backed by a written 2-year workmanship warranty on top of manufacturer warranties. We stand behind what we build.",
  },
  {
    icon: "CalendarCheck",
    title: "On-time & on-budget",
    body:
      "A fixed scope, a clear schedule, and weekly updates. 9 of 10 Stoneward projects finish on or ahead of the date we promise at signing.",
  },
  {
    icon: "Wallet",
    title: "Financing available",
    body:
      "Approved financing and flexible payment plans let you build the whole backyard now and pay over time — without draining the savings account.",
  },
];

export const WHY_INTRO =
  "A backyard is one of the biggest projects you will take on at home. Here is why DFW homeowners trust Stoneward to design and build theirs.";

export type ProcessStep = {
  step: string;
  title: string;
  body: string;
  detail: string[];
};

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    body:
      "We meet at your home, walk the yard, and listen to how you want to live outside. Then we talk honestly about scope, timeline, and budget — no pressure, no hard sell.",
    detail: [
      "Free on-site visit & measurements",
      "Wish-list, priorities & budget range",
      "Same-week scheduling across DFW",
    ],
  },
  {
    step: "02",
    title: "3D Design",
    body:
      "Our in-house designer turns your wish list into a photorealistic 3D plan you can walk through before a shovel hits the ground — with materials, plantings, and a fixed proposal.",
    detail: [
      "Photorealistic 3D rendering",
      "Material & plant selections",
      "Fixed-price proposal & schedule",
    ],
  },
  {
    step: "03",
    title: "Build",
    body:
      "One Stoneward crew builds it all — hardscape, kitchen, pool, planting, and lighting — with a dedicated project manager, weekly updates, and a clean jobsite from start to finish.",
    detail: [
      "Dedicated project manager",
      "Weekly progress updates",
      "Permits, inspections & cleanup handled",
    ],
  },
  {
    step: "04",
    title: "Enjoy",
    body:
      "We walk the finished space with you, hand over care guides and warranties, and stay on call. Optional maintenance keeps the landscape, lighting, and irrigation looking new.",
    detail: [
      "Final walkthrough & care guide",
      "2-year workmanship warranty",
      "Optional seasonal maintenance plans",
    ],
  },
];

export const PROCESS_INTRO =
  "Hiring a design-build firm should feel calm and clear. Here is exactly what working with Stoneward looks like — four steps from first handshake to first cookout.";

export type Project = {
  src: string;
  alt: string;
  title: string;
  location: string;
  shape: "portrait" | "landscape" | "square";
};

export type PortfolioCategory = {
  key: string;
  label: string;
  blurb: string;
  projects: Project[];
};

export const PORTFOLIO: PortfolioCategory[] = [
  {
    key: "full-backyard",
    label: "Full Backyard",
    blurb:
      "Complete design-build transformations — pool, kitchen, hardscape, planting, and lighting from a single coordinated plan.",
    projects: [
      { src: img("1582268611958-ebfd161ef9cf", 1300), alt: "Full backyard with pool, outdoor kitchen, and dining area", title: "The Entertainer", location: "Frisco, TX", shape: "landscape" },
      { src: img("1600585153490-76fb20a32601", 1300), alt: "Modern home at dusk with landscaped lawn and lighting", title: "Dusk on Windhaven", location: "Plano, TX", shape: "landscape" },
      { src: img("1567496898669-ee935f5f647a", 1100), alt: "Contemporary home with layered outdoor living spaces", title: "Stonebriar Retreat", location: "Frisco, TX", shape: "portrait" },
      { src: img("1512917774080-9991f1c4c750", 1300), alt: "Modern backyard with patio and pool surrounded by greenery", title: "The Courtyard House", location: "Prosper, TX", shape: "landscape" },
    ],
  },
  {
    key: "patios",
    label: "Patios & Hardscaping",
    blurb:
      "Paver patios, seat walls, walkways, and fire features built on engineered bases that stay flat and beautiful for decades.",
    projects: [
      { src: img("1600047509807-ba8f99d2cdde", 1300), alt: "Clean paver walkway leading to a modern home", title: "Linear Paver Patio", location: "Allen, TX", shape: "landscape" },
      { src: img("1600573472592-401b489a3cdc", 1100), alt: "Covered patio courtyard with wood-clad structure", title: "Shaded Courtyard", location: "Southlake, TX", shape: "portrait" },
      { src: img("1523217582562-09d0def993a6", 1300), alt: "Minimalist modern home with landscaped front walk", title: "Modern Approach", location: "McKinney, TX", shape: "landscape" },
      { src: img("1416879595882-3373a0480b5b", 1000), alt: "Garden bed preparation with rich planting soil", title: "Garden Beds & Edging", location: "Plano, TX", shape: "square" },
    ],
  },
  {
    key: "kitchens",
    label: "Outdoor Kitchens",
    blurb:
      "Built-in grills, stone counters, and bar seating finished to match the home — the backyard room everyone gravitates to.",
    projects: [
      { src: img("1582268611958-ebfd161ef9cf", 1300), alt: "Outdoor kitchen and dining area beside a pool", title: "Poolside Kitchen", location: "Southlake, TX", shape: "landscape" },
      { src: img("1567496898669-ee935f5f647a", 1100), alt: "Covered outdoor living and kitchen space", title: "Covered Cook & Lounge", location: "Frisco, TX", shape: "portrait" },
      { src: img("1597211833712-5e41faa202ea", 1300), alt: "Modern poolside lounge and entertaining terrace", title: "The Terrace Bar", location: "Prosper, TX", shape: "landscape" },
    ],
  },
  {
    key: "pools",
    label: "Custom Pools & Spas",
    blurb:
      "Gunite pools and spillover spas with tanning ledges, water features, and automation — designed as the centerpiece of the yard.",
    projects: [
      { src: img("1600596542815-ffad4c1539a9", 1300), alt: "Modern infinity-edge pool beside a white contemporary home", title: "Infinity Edge", location: "Southlake, TX", shape: "landscape" },
      { src: img("1597211833712-5e41faa202ea", 1100), alt: "Sleek lap pool with wood-soffit patio cover", title: "The Lap Pool", location: "Plano, TX", shape: "portrait" },
      { src: img("1564013799919-ab600027ffc6", 1300), alt: "Resort-style pool with palms and lounge deck", title: "Resort at Home", location: "Frisco, TX", shape: "landscape" },
      { src: img("1416331108676-a22ccb276e35", 1100), alt: "Courtyard pool glowing at twilight", title: "Twilight Spa & Pool", location: "McKinney, TX", shape: "portrait" },
    ],
  },
];

export type BeforeAfter = {
  title: string;
  location: string;
  before: string;
  beforeAlt: string;
  after: string;
  afterAlt: string;
};

export const BEFORE_AFTER: BeforeAfter[] = [
  {
    title: "Full Backyard Transformation",
    location: "Frisco, TX",
    before: imgBefore("1505691938895-1758d7feb511", 1600),
    beforeAlt: "Plain, undeveloped backyard before the Stoneward renovation",
    after: img("1582268611958-ebfd161ef9cf", 1600),
    afterAlt: "Finished backyard with pool, outdoor kitchen, and dining area",
  },
  {
    title: "Paver Patio & Pergola",
    location: "Plano, TX",
    before: imgBefore("1620626011761-996317b8d101", 1600),
    beforeAlt: "Bare side yard before paver patio and pergola installation",
    after: img("1600573472592-401b489a3cdc", 1600),
    afterAlt: "Completed paver courtyard with a shade structure and seating",
  },
  {
    title: "Custom Pool & Spa",
    location: "Southlake, TX",
    before: imgBefore("1523217582562-09d0def993a6", 1600),
    beforeAlt: "Empty lawn before the custom pool build",
    after: img("1600596542815-ffad4c1539a9", 1600),
    afterAlt: "Finished modern infinity-edge pool and deck",
  },
];

export const PROJECT_STRIP = {
  handle: "Recent Stoneward builds",
  href: CTA.portfolio.href,
  images: [
    { src: img("1600585153490-76fb20a32601", 800), alt: "Modern home and landscaped yard at dusk" },
    { src: img("1600596542815-ffad4c1539a9", 800), alt: "Infinity-edge pool beside a modern home" },
    { src: img("1600047509807-ba8f99d2cdde", 800), alt: "Clean paver walkway and lawn" },
    { src: img("1582268611958-ebfd161ef9cf", 800), alt: "Outdoor kitchen and pool" },
    { src: img("1568605114967-8130f3a36994", 800), alt: "Garden glowing with landscape lighting at dusk" },
    { src: img("1564013799919-ab600027ffc6", 800), alt: "Resort-style pool with palms" },
    { src: img("1558904541-efa843a96f01", 800), alt: "Freshly installed green turf lawn" },
    { src: img("1600573472592-401b489a3cdc", 800), alt: "Covered patio courtyard" },
  ],
};

export type Area = { city: string; blurb: string };

export const SERVICE_AREAS: Area[] = [
  { city: "Plano", blurb: "Our home base — from Willow Bend to Legacy West." },
  { city: "Frisco", blurb: "Stonebriar, Starwood, and the booming north corridor." },
  { city: "Southlake", blurb: "Estate backyards, pools, and outdoor kitchens." },
  { city: "McKinney", blurb: "Historic and new-build outdoor living, done right." },
  { city: "Allen", blurb: "Family backyards, patios, and shade structures." },
  { city: "Prosper", blurb: "Acreage landscapes and full design-build retreats." },
];

export const SERVICE_AREAS_NOTE =
  "Also serving Celina, Fairview, Lucas, Murphy, Wylie, Carrollton, and the greater North Dallas suburbs. Not sure if you are in our area? Just ask.";

export const FINANCING = {
  intro:
    "A backyard you will use every day should not wait on a lump sum. Stoneward partners with leading home-improvement lenders so you can build the whole project now and pay over time.",
  partner:
    "Through our financing partners, qualified homeowners can finance their full outdoor-living project with fixed monthly payments — often with same-day approval and no impact to your credit score to check your rate.",
  plans: [
    {
      name: "Pay over time",
      detail:
        "Fixed monthly payments over 3–12 years on approved credit, with competitive rates for outdoor-living projects.",
    },
    {
      name: "Same-as-cash periods",
      detail:
        "Promotional deferred-interest options on select project sizes — pay it off inside the window and skip the interest.",
    },
    {
      name: "Phased build plans",
      detail:
        "Build in stages — patio now, kitchen and pool next season — on one master design so it all fits together.",
    },
  ],
  points: [
    "Check your rate with no impact to your credit score",
    "Loan amounts that fit full outdoor-living projects",
    "Fast, often same-day decisions",
    "No prepayment penalties",
  ],
  applyLabel: "Check My Rate",
  disclaimer:
    "Financing is provided by third-party lenders and subject to credit approval; terms vary. Stoneward Outdoor Living is not a lender. Rates and terms shown are illustrative sample content for this demo.",
};

export type Testimonial = {
  quote: string;
  author: string;
  context: string;
  rating: number;
};

export const RATING = { value: 5.0, count: 187 };

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They handed us a 3D design on day one and built it exactly as promised. Our backyard is now the best room in the house.",
    author: "Brian & Megan T.",
    context: "Full backyard · Frisco",
    rating: 5,
  },
  {
    quote:
      "Outdoor kitchen + pool combo came in on time and on budget. The crews were spotless and the project manager texted us updates every week.",
    author: "Carlos M.",
    context: "Pool & outdoor kitchen · Southlake",
    rating: 5,
  },
  {
    quote:
      "Every neighbor has asked who did our patio. Worth every penny — and the financing made it easy to do the whole thing at once.",
    author: "Dana P.",
    context: "Paver patio & pergola · Plano",
    rating: 5,
  },
  {
    quote:
      "We interviewed four design-build firms. Stoneward was the only one that showed up on time, listened, and put a real plan and number in front of us.",
    author: "Priya & Sanjay R.",
    context: "Landscape design · McKinney",
    rating: 5,
  },
  {
    quote:
      "The lighting design completely changed how we use the yard at night. It feels like a resort. Two years in and everything still looks brand new.",
    author: "Greg H.",
    context: "Landscape lighting · Allen",
    rating: 5,
  },
  {
    quote:
      "From permits to the final walkthrough, they handled everything. The warranty gave us real peace of mind on a project this size.",
    author: "The Whitfields",
    context: "Custom pool & spa · Prosper",
    rating: 5,
  },
];

export const TESTIMONIALS_ARE_SAMPLE = true;

export type Faq = { q: string; a: string };

export const FAQ: Faq[] = [
  {
    q: "Is the estimate really free?",
    a: "Yes. We come to your home, measure the space, talk through what you want, and follow up with pricing — at no cost and no obligation. Most consultations across DFW can be scheduled the same week.",
  },
  {
    q: "Do you design and build, or just one?",
    a: "Both, under one roof. Our in-house designer creates a photorealistic 3D plan, and our own crews build it — hardscape, kitchen, pool, planting, and lighting. One team is accountable from first sketch to final walkthrough.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on scope. A patio or lighting package may take 1–2 weeks; a full backyard with a pool and outdoor kitchen typically runs 6–12 weeks. You get a firm schedule with your proposal and weekly updates throughout.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes — Stoneward is a licensed and fully insured Texas design-build firm, and we pull all required permits and handle inspections for your project. Every build is backed by our written 2-year workmanship warranty.",
  },
  {
    q: "Do you offer financing?",
    a: "We do. Through our home-improvement lending partners, qualified homeowners can finance the full project with fixed monthly payments — and checking your rate will not affect your credit score.",
  },
  {
    q: "What does a project cost?",
    a: "As a guide: landscape design from $8K, paver patios from $15K, outdoor kitchens from $20K, pergolas from $12K, lighting from $3.5K, irrigation & turf from $4K, and custom pools & spas from $65K. Your 3D proposal gives an exact, fixed number.",
  },
  {
    q: "Which areas do you serve?",
    a: "We are based in Plano and serve the North Dallas suburbs — Frisco, Southlake, McKinney, Allen, Prosper, and surrounding communities. If you are nearby and not sure, just ask.",
  },
  {
    q: "Can we build in phases?",
    a: "Absolutely. We design the entire backyard as one master plan, then build it in stages that fit your budget and timeline — so the patio you do now lines up perfectly with the pool you add next season.",
  },
];

export const ABOUT = {
  lead:
    "Stoneward is a Dallas–Fort Worth design-build firm for homeowners who want their backyard handled by one accountable team — beautifully, and without the runaround.",
  image: img("1600585153490-76fb20a32601", 1400),
  imageAlt: "Modern home with a professionally landscaped and lit backyard at dusk",
  story: [
    "Stoneward started in 2011 with one belief: the best backyards come from one team that designs and builds the whole thing. No handing your plan to a stranger. No subcontractors pointing fingers when something goes wrong.",
    "Fifteen years and 500+ backyards later, that is still how we work. An in-house designer draws your space in 3D; our own crews build it — hardscape, kitchen, pool, planting, and lighting — with a project manager who actually answers the phone.",
    "We are licensed, insured, and a little obsessive about base prep, drainage, and the details nobody sees. That is why a Stoneward backyard still looks new years later — and why most of our work now comes from neighbors of people we have built for.",
  ],
  values: [
    {
      title: "One accountable team",
      body:
        "Design and build under one roof means one point of contact and nobody to blame but us. We like it that way.",
    },
    {
      title: "Built right, underneath",
      body:
        "Compacted bases, proper drainage, engineered footings. We obsess over the parts you will never see so the parts you do see last.",
    },
    {
      title: "Honest from the first visit",
      body:
        "A clear scope, a fixed price, and a real schedule at signing — then weekly updates so you are never wondering what is next.",
    },
  ],
  badges: [
    "Licensed & insured in Texas",
    "2-year workmanship warranty",
    "Houzz-rated 5.0★",
    "500+ DFW backyards built",
  ],
};

export const PROJECT_TYPES = [
  "Landscape Design & Install",
  "Paver Patio & Hardscaping",
  "Outdoor Kitchen",
  "Custom Pool & Spa",
  "Pergola / Shade Structure",
  "Landscape Lighting",
  "Irrigation & Turf",
  "Full Backyard (multiple)",
  "Not sure yet",
];

export const BUDGET_RANGES = [
  "Under $15K",
  "$15K – $30K",
  "$30K – $60K",
  "$60K – $100K",
  "$100K+",
  "Not sure yet",
];

export const TIMELINES = [
  "As soon as possible",
  "1–3 months",
  "3–6 months",
  "Just planning / exploring",
];

export const CLOSING = {
  eyebrow: "Free on-site estimate",
  title: "Let's design the backyard you'll never want to leave.",
  body:
    "Tell us about your space and how you want to use it. We will come out, measure, and follow up with a 3D plan and a fixed price — free, with no obligation.",
  image: img("1600585154340-be6161a56a0c", 2400),
  imageAlt: "Modern landscaped backyard glowing at dusk",
};
