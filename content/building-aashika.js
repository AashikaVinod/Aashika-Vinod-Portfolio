/* ============================================================
   BUILDING AASHIKA  —  the achievements on the "Building
   Aashika" page (work, awards, research, certificates, more).

   Ordered MOST to LEAST impressive: the first entry shows
   first and it flows on from there. To reorder, just move a
   { ... } block up or down. To add one, copy a whole block.

   Fields:
     ic    icon name (see list below)
     t     title
     sub   short tagline (shows above the title in the popup)
     type  kind of thing, e.g. "Award", "Professional Certificate"
     org   organisation (or "" if none)
     h     card size: "h-short", "h-med", or "h-tall"
     d     one or two sentence description
     img   (optional) image path, e.g. "images/building/name.jpg"
     link  (optional) a URL / file the card links to ("View credential")

   Available icon names (ic):
     nib, chess, grid, lens, motion, heart, fork, cert, trophy,
     bolt, cube, mic, flag, star, board, feed, mentor, brush
   ============================================================ */
window.MODULES = [
  {ic:'grid',   t:'Shipping SaaS Products at AgroZone', sub:"Designing products that solve real problems", type:'Product Design', org:'AgroZone Technology', h:'h-tall', img:'images/building/saas-agrozone.jpg', d:"Designed and shipped enterprise SaaS dashboards, internal tools, and digital platforms used in real operational workflows. My first time designing products at scale, on systems used well beyond the classroom."},
  {ic:'feed',   t:'BuzzFeed Community Creator', sub:"Creating for millions", type:'Content Creator', org:'BuzzFeed', h:'h-tall', img:'images/building/buzzfeed-creator.jpg', d:"A paid BuzzFeed content creator whose interactive quizzes and editorial pieces have reached millions of readers, built on audience engagement, storytelling, and data-driven content."},
  {ic:'lens',   t:'Google User Research', sub:"Researching products at Google", type:'UX Research', org:'Google', h:'h-med', img:'images/building/google-user-research.jpg', d:"Took part in moderated Google user research studies, giving structured feedback that fed into improving real product experiences."},
  {ic:'trophy', t:'Best Research Paper', sub:"Award-winning research", type:'Award', org:'FLAME University', h:'h-med', img:'images/building/best-research-paper.jpg', d:"Received the Best Research Paper award at FLAME University's Undergraduate Research Day, recognising original undergraduate research."},
  {ic:'mentor', t:'Teaching AI in Kannada', sub:"Making AI accessible", type:'Teaching', org:'', h:'h-tall', img:'images/building/teaching-ai-kannada.jpg', d:"Built and taught an introductory AI course in Kannada, making emerging technology more accessible to regional-language learners."},
  {ic:'heart',  t:'Rotary Mobile Health Clinic', sub:"Designing for community impact", type:'Design for Impact', org:'Rotary', h:'h-med', img:'images/building/rotary-health-clinic.jpg', d:"Created the visual design for a Rotary mobile health clinic bus, turning a vehicle into a recognisable healthcare service that brings medical support directly to underserved communities."},
  {ic:'brush',  t:'Chess Club Design Lead', sub:"Leading the club\u2019s design", type:'Leadership', org:'RV University', h:'h-med', img:'images/building/chess-design-lead.jpg', d:"Design lead for the college chess club, owning its visual identity and creating the posters, socials, and event branding that give the club its presence on campus."},
  {ic:'cert',   t:'Google UX Design', sub:"Google\u2019s UX design track", type:'Professional Certificate', org:'Google', h:'h-tall', img:'images/building/cert-google-ux.jpg', link:'images/building/certs/google-ux-design.pdf', d:"Completed Google's seven-course UX Design Professional Certificate: research, wireframing, prototyping, and high-fidelity design in Figma, from empathising with users to testing solutions."},
  {ic:'cube',   t:'Microsoft UX Design', sub:"Microsoft\u2019s UI/UX track", type:'Professional Certificate', org:'Microsoft', h:'h-med', img:'images/building/cert-microsoft-ux.jpg', link:'images/building/certs/microsoft-ux-design.pdf', d:"Completed Microsoft's UI/UX Design Professional Certificate, covering user research, information architecture, wireframing, prototyping, visual design, and accessibility."},
  {ic:'chess',  t:'Best Female Chess Player', sub:"Representing RV University", type:'Recognition', org:'RV University', h:'h-short', img:'images/building/best-female-chess-player.jpg', d:"Recognised as Best Female Chess Player at RV University, representing the university in competitive chess."},
  {ic:'board',  t:'Accessibility & Inclusive Design', sub:"Designing for everyone", type:'Certificate', org:'University of Illinois', h:'h-med', img:'images/building/cert-accessibility.jpg', link:'images/building/certs/accessibility-inclusive-design.pdf', d:"A University of Illinois course on accessibility and inclusive design, building the habits that make interfaces usable by as many people as possible."},
  {ic:'nib',    t:'Immerse Essay Scholarship', sub:"International essay scholarship", type:'Scholarship', org:'Immerse Education', h:'h-med', img:'images/building/immerse-scholarship.jpg', d:"Awarded a scholarship through the Immerse Education Essay Competition, for academic writing and critical thinking."},
  {ic:'lens',   t:'Introduction to Psychology', sub:"How people think", type:'Certificate', org:'Yale University', h:'h-short', img:'images/building/cert-psychology.jpg', link:'images/building/certs/introduction-to-psychology.pdf', d:"Yale's introductory psychology course, grounding my design work in how people perceive, decide, and behave."},
  {ic:'star',   t:'Merit Scholarship', sub:"Academic merit", type:'Scholarship', org:'RV University', h:'h-short', img:'images/building/merit-scholarship.jpg', d:"Received a merit scholarship at RV University in recognition of consistent academic performance."},
  {ic:'mic',    t:'Successful Presentation', sub:"Presenting with impact", type:'Certificate', org:'University of Colorado Boulder', h:'h-med', img:'images/building/cert-presentation.jpg', link:'images/building/certs/successful-presentation.pdf', d:"Completed with honors: a University of Colorado Boulder course on structuring and delivering presentations that land, from narrative to stage presence."},
  {ic:'bolt',   t:'Futures Thinking', sub:"Designing for what\u2019s next", type:'Certificate', org:'Institute for the Future', h:'h-short', img:'images/building/cert-futures.jpg', link:'images/building/certs/futures-thinking.pdf', d:"An Institute for the Future course on futures thinking: reading signals, imagining scenarios, and designing for what might come next."},
  {ic:'fork',   t:'Design Thinking for Social Good', sub:"Design thinking for impact", type:'Certificate', org:'University of Virginia', h:'h-med', img:'images/building/cert-social-good.jpg', link:'images/building/certs/design-thinking-social-good.pdf', d:"A University of Virginia course on applying design thinking to the social sector, using innovation to create public good."}
];
