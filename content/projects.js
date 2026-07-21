/* ============================================================
   PROJECTS  —  every case study lives here (ONE place).
   This drives BOTH the case-study pages AND the three folders
   on the homepage.

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
     discipline   e.g. "UX · Visual · Build"
     year         e.g. "2025"
     role         your role, shown on the case-study page
     status       e.g. "Shipped" or "Prototype"
     thumbnail    homepage folder look: "a", "b", or "c"
     cover        case-study cover look: "cov-a", "cov-b", "cov-c"
     eyebrow      small label above the title, e.g. "Case Study 01"
     behance      link to the full project (or "#")
     summary      one or two lines under the title
     overviewHeading / overview1 / overview2   (legacy write-up, unused by the
                          stacked-image case study; safe to ignore)
     images       the case study, top to bottom: a list of
                  {src:"images/<project>/xx.jpg", alt:"..."}
     prototype    one embed placed inside the stack:
                    type  "figma" | "html" | "placeholder"
                    url   your figma share link, or a path like
                          "prototype/respectly/index.html"
                    at    show it AFTER this many images (middle by default)
                    label the little caption on the embed bar
   ============================================================ */
window.PROJECTS = [
  {
    slug: "respectly",
    title: "Respectly",
    tag: "Solo",
    discipline: "UX · Interaction · Visual · Build",
    year: "2025 · 2026",
    role: "Product Designer & UX Engineer",
    status: "Shipped",
    thumbnail: "a",
    cover: "cov-a",
    eyebrow: "Case Study 01",
    behance: "https://www.behance.net/aashikav2",
    summary: "A mobile learning platform that helps young men build empathy and respectful relationship skills through reflection and real-world practice. I designed, illustrated, and engineered it end to end, on the belief that the smallest everyday moments leave the biggest impact.",
    overviewHeading: "What Respectly was",
    overview1: "Placeholder overview paragraph. Describe the product, the users, and the problem it set out to solve, in your own voice.",
    overview2: "Placeholder second paragraph. Add the context, the constraints, and what made this one interesting to work on.",
    images: [
      {src:"images/respectly/01-cover-page.jpg", alt:"cover page"},
      {src:"images/respectly/02-metadata.jpg", alt:"metadata"},
      {src:"images/respectly/03-why-this-problem-matters.jpg", alt:"why this problem matters"},
      {src:"images/respectly/04-problem-space-explorations.jpg", alt:"problem space explorations"},
      {src:"images/respectly/05-initial-hypotheses.jpg", alt:"initial hypotheses"},
      {src:"images/respectly/06-secondary-research.jpg", alt:"secondary research"},
      {src:"images/respectly/07-primary-research.jpg", alt:"primary research"},
      {src:"images/respectly/08-research-wall.jpg", alt:"research wall"},
      {src:"images/respectly/09-affinity-map-synthesis.jpg", alt:"affinity map (synthesis)"},
      {src:"images/respectly/10-personas.jpg", alt:"personas"},
      {src:"images/respectly/11-empathy-maps.jpg", alt:"empathy maps"},
      {src:"images/respectly/12-insight-extraction-and-reframing-the-problem.jpg", alt:"insight extraction and reframing the problem"},
      {src:"images/respectly/13-hmw.jpg", alt:"HMW"},
      {src:"images/respectly/14-ideations.jpg", alt:"ideations"},
      {src:"images/respectly/15-final-concept-justification.jpg", alt:"final concept + justification"},
      {src:"images/respectly/16-competitor-ladscape.jpg", alt:"competitor ladscape"},
      {src:"images/respectly/17-product-strategy.jpg", alt:"product strategy"},
      {src:"images/respectly/18-concept-development.jpg", alt:"concept development"},
      {src:"images/respectly/19-ia.jpg", alt:"IA"},
      {src:"images/respectly/20-design-system.jpg", alt:"design system"},
      {src:"images/respectly/21-branding.jpg", alt:"branding"},
      {src:"images/respectly/22-code-and-technical-build.jpg", alt:"code and technical build"},
      {src:"images/respectly/23-usability-testing.jpg", alt:"usability testing"},
      {src:"images/respectly/24-design-and-prototype-qr.png", alt:"scan the QR code to open the Respectly live prototype"},
      {src:"images/respectly/25-reflection.jpg", alt:"reflection"}
    ],
    prototype: { type:"html", url:"https://aashikavinod.github.io/Respectly", label:"Respectly · live prototype", at:23 }
  },
  {
    slug: "mysociety",
    title: "MySociety",
    tag: "Admin lead",
    discipline: "Systems · IA",
    year: "2025",
    role: "Admin lead",
    status: "Shipped",
    thumbnail: "b",
    cover: "cov-b",
    eyebrow: "Case Study 02",
    behance: "https://www.behance.net/aashikav2",
    summary: "",
    overviewHeading: "",
    overview1: "",
    overview2: "",
    images: [],
    prototype: null
  },
  {
    slug: "unmapped",
    title: "Unmapped",
    tag: "XR lead",
    discipline: "UX Research · XR · Interaction",
    year: "2025",
    role: "XR lead · UX research",
    status: "Prototype",
    thumbnail: "c",
    cover: "cov-c",
    eyebrow: "Case Study 03",
    behance: "https://www.behance.net/aashikav2",
    summary: "A hybrid travel companion that pairs mobile trip planning with real-time XR guidance, so exploring a new city feels hands-free and alive. I led the XR interaction and ran the UX research behind it, turning cultural trails and quests into a way to find the places maps leave out.",
    overviewHeading: "What Unmapped was",
    overview1: "Placeholder overview paragraph for Unmapped. The spatial concept, the interaction model, the intent.",
    overview2: "Placeholder second paragraph. What made XR the right medium, and what you learned building it.",
    images: [
      {src:"images/unmapped/01.jpg", alt:"Unmapped, slide 1"},
      {src:"images/unmapped/02.jpg", alt:"Unmapped, slide 2"},
      {src:"images/unmapped/03.jpg", alt:"Unmapped, slide 3"},
      {src:"images/unmapped/04.jpg", alt:"Unmapped, slide 4"},
      {src:"images/unmapped/05.jpg", alt:"Unmapped, slide 5"},
      {src:"images/unmapped/06.jpg", alt:"Unmapped, slide 6"},
      {src:"images/unmapped/07.jpg", alt:"Unmapped, slide 7"},
      {src:"images/unmapped/08.jpg", alt:"Unmapped, slide 8"},
      {src:"images/unmapped/09.jpg", alt:"Unmapped, slide 9"},
      {src:"images/unmapped/10.jpg", alt:"Unmapped, slide 10"},
      {src:"images/unmapped/11.jpg", alt:"Unmapped, slide 11"},
      {src:"images/unmapped/12.jpg", alt:"Unmapped, slide 12"},
      {src:"images/unmapped/13.jpg", alt:"Unmapped, slide 13"},
      {src:"images/unmapped/14.jpg", alt:"Unmapped, slide 14"},
      {src:"images/unmapped/15.jpg", alt:"Unmapped, slide 15"},
      {src:"images/unmapped/16.jpg", alt:"Unmapped, slide 16"},
      {src:"images/unmapped/17.jpg", alt:"Unmapped, slide 17"}
    ],
    prototype: null
  },
  {
    slug: "project-04",
    title: "Coming soon",
    tag: "New",
    discipline: "To be added",
    year: "2026",
    role: "",
    status: "In progress",
    thumbnail: "d",
    cover: "cov-a",
    eyebrow: "Case Study 04",
    behance: "https://www.behance.net/aashikav2",
    summary: "",
    overviewHeading: "",
    overview1: "",
    overview2: "",
    images: [],
    prototype: null
  }
];

/* The four folders on the homepage, left to right.
   Use the "slug" of any project above. To swap a featured
   project, just change a slug here. Keep up to four. */
window.FEATURED = ["respectly", "mysociety", "unmapped", "project-04"];
