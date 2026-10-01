export type Project = {
  name: string;
  category: string;
  summary: string;
  role: string;
  stack: string;
  result: string;
  images: [string, string, string];
  liveUrl: string;
  sourceUrl: string;
  caseStudy: {
    problem: string;
    approach: string;
    decisions: string[];
    responsive: string;
    outcome: string;
  };
};

export const projects: Project[] = [
  {
    name: "FlowPilot",
    category: "SaaS Product Concept",
    summary: "A conversion-focused AI productivity website that turns scattered tasks, meetings, and priorities into a calm daily plan.",
    role: "Brand direction, UX/UI design, and frontend development",
    stack: "React · TypeScript · Vite · Responsive CSS",
    result: "A fast, accessible marketing experience with an interactive product demo, flexible pricing, FAQs, and a complete trial-signup flow.",
    images: ["/projects/flowpilot-preview-dashboard.svg", "/projects/flowpilot-preview-pricing.svg", "/projects/flowpilot-preview-mobile.svg"],
    liveUrl: "https://flowpilot-ai-planner.netlify.app/",
    sourceUrl: "https://github.com/vineetsaini007/flowpilot-ai-planner",
    caseStudy: {
      problem: "A new productivity concept needed to explain its value quickly without making artificial intelligence feel complicated or vague.",
      approach: "Lead with a concrete daily-planning benefit, then let visitors inspect the product, compare plans, and resolve questions before signup.",
      decisions: ["Used a calm visual hierarchy to make the core promise easy to scan.", "Made pricing comparison and FAQs interactive so the page supports evaluation, not just promotion."],
      responsive: "The product story, plan cards, and navigation reorganize for small screens while keeping signup actions within easy reach.",
      outcome: "A complete fictional SaaS launch experience with a clear path from first impression to simulated trial registration.",
    },
  },
  {
    name: "Sage & Stone",
    category: "Local Wellness Studio",
    summary: "A contemporary wellness-studio website that helps visitors understand treatments, meet practitioners, find the studio, and request an appointment.",
    role: "Brand direction, UX/UI design, and frontend development",
    stack: "React · TypeScript · Vite · Responsive CSS",
    result: "A warm, accessible booking journey with clear treatment comparison, practitioner profiles, location details, and a polished multi-step request flow.",
    images: ["/projects/sage-studio-hero.png", "/projects/sage-warm-stones.png", "/projects/sage-studio-lounge.png"],
    liveUrl: "https://sage-and-stone-wellness.netlify.app/",
    sourceUrl: "https://github.com/vineetsaini007/sage-and-stone-wellness",
    caseStudy: {
      problem: "A local studio needs to build trust and help a visitor choose a service before they feel ready to request a visit.",
      approach: "Organize the experience around services, people, social proof, practical location details, and a simple appointment request.",
      decisions: ["Kept treatment information close to booking actions.", "Used original studio imagery and practitioner context to make the fictional brand feel coherent."],
      responsive: "Service comparison and booking steps stay readable and touch friendly on narrow screens.",
      outcome: "A complete demonstration of a local service website, from discovery to a frontend-only appointment request.",
    },
  },
  {
    name: "Noura",
    category: "Skincare E-commerce",
    summary: "A product-led skincare storefront with collection filtering, detailed formula views, bag management, and a simulated checkout.",
    role: "Brand direction, UX/UI design, and frontend development",
    stack: "React · TypeScript · Vite · Responsive CSS",
    result: "A responsive shopping experience with clear product discovery, functional cart controls, and a complete demonstration checkout flow.",
    images: ["/projects/noura-hero-products.png", "/projects/noura-serum.png", "/projects/noura-collection.png"],
    liveUrl: "https://noura-skincare-store.netlify.app/",
    sourceUrl: "https://github.com/vineetsaini007/noura-skincare-store",
    caseStudy: {
      problem: "A skincare brand has to make a small catalog easy to understand while giving buyers confidence about each formula.",
      approach: "Pair a distinctive visual identity with category filtering, concise product details, a usable bag, and a clear checkout demonstration.",
      decisions: ["Grouped products by routine purpose rather than a broad catalog hierarchy.", "Made cart quantities and totals respond immediately to user input."],
      responsive: "Product cards, detail views, and bag controls adapt to one-handed mobile browsing.",
      outcome: "A complete fictional storefront that demonstrates discovery, selection, cart management, and a frontend-only checkout.",
    },
  },
  {
    name: "PulseBoard",
    category: "Analytics Dashboard",
    summary: "A focused growth analytics workspace that turns campaign, revenue, acquisition, and conversion data into fast operational decisions.",
    role: "Product strategy, UX/UI design, and frontend development",
    stack: "React · TypeScript · Vite · SVG data visualization",
    result: "A responsive decision surface with date filtering, searchable and sortable campaign data, accessible charts, and complete loading, empty, and error states.",
    images: ["/projects/pulseboard-overview.svg", "/projects/pulseboard-table.svg", "/projects/pulseboard-states.svg"],
    liveUrl: "https://pulseboard-growth-analytics.netlify.app/",
    sourceUrl: "https://github.com/vineetsaini007/pulseboard-analytics-dashboard",
    caseStudy: {
      problem: "Campaign data often arrives as disconnected metrics, making it hard to see whether growth is efficient or which work deserves attention.",
      approach: "Put decision-making controls and key results in the first viewport, then connect trends, channel mix, and campaign detail below.",
      decisions: ["Used lightweight SVG and CSS charts tied to the selected period.", "Designed loading, empty, error, and no-match states as part of the core workflow."],
      responsive: "KPI grids collapse progressively and the campaign table remains usable with horizontal scrolling on phones.",
      outcome: "A fictional analytics workspace that demonstrates filtering, search, sorting, state handling, and a clear information hierarchy.",
    },
  },
  {
    name: "LaunchCraft",
    category: "Course Launch Campaign",
    summary: "A bold editorial launch page for a live course, designed to explain the transformation, build instructor trust, and move visitors into registration.",
    role: "Campaign strategy, brand direction, UX/UI design, and development",
    stack: "React · TypeScript · Vite · Responsive CSS",
    result: "A conversion-focused campaign with interactive curriculum, live countdown, social proof, pricing, and a validated two-step registration demonstration.",
    images: ["/projects/launchcraft-hero.svg", "/projects/launchcraft-curriculum.svg", "/projects/launchcraft-instructor.jpg"],
    liveUrl: "https://launchcraft-live-course.netlify.app/",
    sourceUrl: "https://github.com/vineetsaini007/launchcraft-course-studio",
    caseStudy: {
      problem: "A course launch must turn an intangible learning promise into a concrete outcome, while answering what students will make and who will guide them.",
      approach: "Build an editorial campaign around the course transformation, a four-week curriculum, instructor credibility, and a visible enrollment path.",
      decisions: ["Used an expandable curriculum so visitors can inspect each week.", "Kept the registration flow short and clearly labeled as a frontend demonstration."],
      responsive: "The two-column campaign layout becomes a focused reading flow with accessible tap targets on mobile.",
      outcome: "A complete fictional course campaign with a live countdown, pricing, testimonials, and a validated registration preview.",
    },
  },
  {
    name: "Northstar Realty",
    category: "Real Estate Redesign",
    summary: "A fictional brokerage redesign that makes home discovery clearer through purposeful search, useful listing detail, and a more personal path to enquiry.",
    role: "UX strategy, visual redesign, and frontend development",
    stack: "React · TypeScript · Vite · Responsive CSS",
    result: "An interactive before-and-after story with property filtering, six demo listings, agent profiles, saved homes, and an enquiry preview flow.",
    images: ["/projects/northstar-coastal.jpg", "/projects/northstar-penthouse.jpg", "/projects/northstar-garden.jpg"],
    liveUrl: "https://northstar-realty-redesign.netlify.app/",
    sourceUrl: "https://github.com/vineetsaini007/northstar-realty-redesign",
    caseStudy: {
      problem: "A conventional brokerage page can bury useful search and make listings feel interchangeable before a buyer is ready to enquire.",
      approach: "Bring search to the top, show essential facts on every card, and connect property details directly to the right enquiry context.",
      decisions: ["Added a before-and-after comparison to explain the redesign rationale.", "Separated listing data, search, cards, agents, details, and form behavior into maintainable components."],
      responsive: "Search controls stack by available width, listings move from three columns to one, and dialogs remain scrollable on small devices.",
      outcome: "A fictional brokerage experience with six listings, working filters, saved homes, agent profiles, and a simulated enquiry flow.",
    },
  },
  {
    name: "Velocity Audit",
    category: "Performance & SEO Case Study",
    summary: "A transparent optimization case study that turns performance, accessibility, and technical SEO findings into an actionable implementation story.",
    role: "Audit strategy, UX/UI design, technical content, and frontend development",
    stack: "React · TypeScript · Vite · Responsive CSS",
    result: "An interactive case study with mobile and desktop comparisons, filterable findings, documented improvements, and a privacy-conscious simulated audit flow.",
    images: ["/projects/velocity-results.svg", "/projects/velocity-findings.svg", "/projects/velocity-method.svg"],
    liveUrl: "https://velocity-audit-case-study.netlify.app/",
    sourceUrl: "https://github.com/vineetsaini007/velocity-audit-case-study",
    caseStudy: {
      problem: "Performance reports often overwhelm clients with scores and technical warnings without explaining what should be fixed first or how the work affects real users.",
      approach: "Frame the audit as an evidence-to-outcome narrative: establish comparable baselines, prioritize user-facing friction, document each implementation, and verify the same journeys afterward.",
      decisions: ["Made before-and-after results switchable by device profile so the comparison remains concrete.", "Connected every finding to evidence, implementation detail, and outcome instead of presenting a generic checklist.", "Kept the URL audit explicitly simulated and local to the browser so the demonstration makes no false analysis or privacy claims."],
      responsive: "Metric cards, audit findings, process phases, and the demo report progressively collapse into readable single-column flows, with a compact mobile navigation and full keyboard support.",
      outcome: "A fictional but rigorously documented optimization case study demonstrating performance strategy, accessibility thinking, technical SEO, and transparent measurement.",
    },
  },
];
