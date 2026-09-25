/* ============================================================
   PROJECTS  -  every case study lives here (ONE place).
   This drives the homepage folders, the folder hover-notes,
   the native project intro/metadata block on each case-study
   page (shown ABOVE the Behance embed), and the per-page SEO.

   To ADD a project:      copy a whole { ... } block, paste it,
                          and change the values. Give it a new
                          "slug" (lowercase, no spaces).
   To REORDER:            move a { ... } block up or down. This
                          also changes the Previous/Next order.
   To CHANGE the homepage folders: edit the FEATURED list at the
                          bottom (three slugs, left to right).

   Fields:
     slug         short id, used in the web address (no spaces)
     title        project name
     tag          tiny label on the homepage folder (e.g. "Solo")
     discipline   compact visual label, e.g. "UX Research · Interaction · Visual · Build"
     year         timeline, e.g. "2025" or "2025 · 2026" (leave "" to hide)
     descriptor   one short line (5-6 words) used as the folder hover-note,
                  the line under the case-study title, and the SEO description seed
     overview     one paragraph: what the project is
     contribution one paragraph: what YOU did on it
     role         your role(s), shown on the case-study page
     status       e.g. "Shipped", "Prototype", "Shipped / Handed Off"
     team         (optional) e.g. "Solo" or "Collaborative". Omit/"" and the line hides
     methods      capabilities applied, "·"-separated (leave "" to hide)
     tools        tools used, "·"-separated (leave "" to hide; do NOT invent tools)
     thumbnail    homepage folder look: "a", "b", or "c"
     cover        case-study cover look: "cov-a", "cov-b", "cov-c"
     eyebrow      small label above the title, e.g. "Case Study 01"
     behance      link to the full project (or "#")
     summary      longer lead line under the title (legacy; overview is preferred)
     images       the case study, top to bottom: a list of
                  {src:"images/<project>/xx.jpg", alt:"accurate description"}
     prototype    one embed placed inside the stack:
                    type  "figma" | "html" | "placeholder"
                    url   your figma share link, or a path
                    at    show it AFTER this many images
                    label the little caption on the embed bar
   ============================================================ */
window.PROJECTS = [
  {
    slug: "respectly",
    title: "Respectly",
    tag: "Solo",
    discipline: "UX Research · Interaction · Visual · Build",
    year: "2025 · 2026",
    descriptor: "Building everyday awareness through respectful interactions",
    overview: "Respectly is a mobile learning platform that helps young men build empathy, awareness, and respectful relationship skills through reflection and real-world practice.",
    contribution: "I led the project end to end across UX research, product strategy, interaction design, visual design, branding, prototyping, usability testing, and front-end development.",
    role: "Product Designer · UX Researcher · UX Engineer",
    status: "Shipped",
    team: "Solo",
    methods: "UX Research · User Research · Accessibility · Information Architecture · Interaction Design · Usability Testing · Prototyping",
    tools: "Figma · Adobe Illustrator · HTML/CSS/JavaScript",
    thumbnail: "a",
    cover: "cov-a",
    eyebrow: "Case Study 01",
    behance: "https://www.behance.net/aashikav2",
    summary: "A mobile learning platform that helps young men build empathy and respectful relationship skills through reflection and real-world practice. I designed, illustrated, and engineered it end to end, on the belief that the smallest everyday moments leave the biggest impact.",
    images: [
      {src:"images/respectly/01-cover-page.jpg", alt:"Respectly cover, a mobile learning platform focused on empathy and respectful relationships"},
      {src:"images/respectly/02-metadata.jpg", alt:"Respectly project metadata and overview"},
      {src:"images/respectly/03-why-this-problem-matters.jpg", alt:"Why the problem Respectly addresses matters"},
      {src:"images/respectly/04-problem-space-explorations.jpg", alt:"Problem space explorations for Respectly"},
      {src:"images/respectly/05-initial-hypotheses.jpg", alt:"Initial hypotheses for Respectly"},
      {src:"images/respectly/06-secondary-research.jpg", alt:"Secondary research for Respectly"},
      {src:"images/respectly/07-primary-research.jpg", alt:"Primary research for Respectly"},
      {src:"images/respectly/08-research-wall.jpg", alt:"Research wall of findings for Respectly"},
      {src:"images/respectly/09-affinity-map-synthesis.jpg", alt:"Affinity map synthesis of Respectly research"},
      {src:"images/respectly/10-personas.jpg", alt:"User personas for Respectly"},
      {src:"images/respectly/11-empathy-maps.jpg", alt:"Empathy maps for Respectly users"},
      {src:"images/respectly/12-insight-extraction-and-reframing-the-problem.jpg", alt:"Insight extraction and problem reframing for Respectly"},
      {src:"images/respectly/13-hmw.jpg", alt:"How Might We questions framing the Respectly design direction"},
      {src:"images/respectly/14-ideations.jpg", alt:"Ideation sketches for Respectly"},
      {src:"images/respectly/15-final-concept-justification.jpg", alt:"Final concept and justification for Respectly"},
      {src:"images/respectly/16-competitor-ladscape.jpg", alt:"Competitor landscape for Respectly"},
      {src:"images/respectly/17-product-strategy.jpg", alt:"Product strategy for Respectly"},
      {src:"images/respectly/18-concept-development.jpg", alt:"Concept development for Respectly"},
      {src:"images/respectly/19-ia.jpg", alt:"Respectly information architecture showing the structure of the mobile learning experience"},
      {src:"images/respectly/20-design-system.jpg", alt:"Respectly design system showing typography, colour, components, and interface patterns"},
      {src:"images/respectly/21-branding.jpg", alt:"Respectly branding and visual identity"},
      {src:"images/respectly/22-code-and-technical-build.jpg", alt:"Respectly front-end code and technical build"},
      {src:"images/respectly/23-usability-testing.jpg", alt:"Usability testing of the Respectly prototype"},
      {src:"images/respectly/24-design-and-prototype-qr.png", alt:"Scan the QR code to open the Respectly live prototype"},
      {src:"images/respectly/25-reflection.jpg", alt:"Project reflection and outcomes for Respectly"}
    ],
    prototype: { type:"html", url:"https://aashikavinod.github.io/Respectly", label:"Respectly · live prototype", at:23 }
  },
  {
    /* 3BHUVAN  -  designed + handed off (NOT coded by Aashika).
       A real-world product taken from problem exploration through a
       developer-ready handoff. Keep this NDA-safe: no confidential
       detail, and do NOT claim it was built/developed by Aashika. */
    slug: "3bhuvan",
    title: "3Bhuvan",
    tag: "Shipped",
    discipline: "UX Research · Product · UI",
    year: "",
    descriptor: "Designing clearer experiences for real-world workflows",
    overview: "3Bhuvan is a real-world digital product focused on making complex workflows clearer and easier to navigate.",
    contribution: "I worked across UX research, product thinking, information architecture, interaction design, and UI design, taking the experience from problem exploration through a developer-ready handoff.",
    role: "UX Researcher · Product Designer",
    status: "Shipped / Handed Off",
    team: "Collaborative",
    methods: "UX Research · Information Architecture · User Flows · Interaction Design · UI Design · Prototyping",
    tools: "Figma",
    thumbnail: "b",
    cover: "cov-b",
    eyebrow: "Case Study 02",
    behance: "https://www.behance.net/aashikav2",
    summary: "3Bhuvan is a real-world product focused on making complex workflows clearer and easier to navigate. I took the experience from problem exploration through a developer-ready handoff.",
    images: [],
    prototype: null
  },
  {
    slug: "unmapped",
    title: "Unmapped",
    tag: "XR lead",
    discipline: "UX Research · Spatial UX · Interaction",
    year: "2025",
    descriptor: "Exploring travel through spatial interaction",
    overview: "Unmapped explores how spatial computing can make travel discovery more contextual, interactive, and connected to place.",
    contribution: "I led the XR interaction direction and UX research, developing the spatial interaction model and exploring how location-based experiences could support discovery.",
    role: "XR Lead · UX Researcher",
    status: "Prototype",
    team: "",
    methods: "UX Research · Spatial UX · Interaction Design · Prototyping",
    tools: "",
    thumbnail: "c",
    cover: "cov-c",
    eyebrow: "Case Study 03",
    behance: "https://www.behance.net/aashikav2",
    summary: "A hybrid travel companion that pairs mobile trip planning with real-time XR guidance, so exploring a new city feels hands-free and alive. I led the XR interaction and ran the UX research behind it, turning cultural trails and quests into a way to find the places maps leave out.",
    images: [
      {src:"images/unmapped/01.jpg", alt:"Unmapped case study, slide 1"},
      {src:"images/unmapped/02.jpg", alt:"Unmapped case study, slide 2"},
      {src:"images/unmapped/03.jpg", alt:"Unmapped case study, slide 3"},
      {src:"images/unmapped/04.jpg", alt:"Unmapped case study, slide 4"},
      {src:"images/unmapped/05.jpg", alt:"Unmapped case study, slide 5"},
      {src:"images/unmapped/06.jpg", alt:"Unmapped case study, slide 6"},
      {src:"images/unmapped/07.jpg", alt:"Unmapped case study, slide 7"},
      {src:"images/unmapped/08.jpg", alt:"Unmapped case study, slide 8"},
      {src:"images/unmapped/09.jpg", alt:"Unmapped case study, slide 9"},
      {src:"images/unmapped/10.jpg", alt:"Unmapped case study, slide 10"},
      {src:"images/unmapped/11.jpg", alt:"Unmapped case study, slide 11"},
      {src:"images/unmapped/12.jpg", alt:"Unmapped case study, slide 12"},
      {src:"images/unmapped/13.jpg", alt:"Unmapped case study, slide 13"},
      {src:"images/unmapped/14.jpg", alt:"Unmapped case study, slide 14"},
      {src:"images/unmapped/15.jpg", alt:"Unmapped case study, slide 15"},
      {src:"images/unmapped/16.jpg", alt:"Unmapped case study, slide 16"},
      {src:"images/unmapped/17.jpg", alt:"Unmapped case study, slide 17"}
    ],
    prototype: null
  }
];

/* The three folders on the homepage, left to right.
   Use the "slug" of any project above. To swap a featured
   project, just change a slug here. */
window.FEATURED = ["respectly", "3bhuvan", "unmapped"];
