# Aashika Vinod — Portfolio Handoff

A complete brief so this work can be picked up in a fresh chat without losing context. Read this top to bottom before changing anything.

---

## 0. How to brief a new assistant (paste this first)

> I'm Aashika Vinod, a UX/UI designer. This is my portfolio, concept **"OS of a mind"** (locked, do not redesign the concept). I hand-code single self-contained HTML files. I'm non-technical with Git, so give me whole files to copy-paste. Talk to me simply and be brutally honest — push back like a world-class creative director (Awwwards / Google design bar). My priority order is **Originality > Storytelling > Information Architecture > Interaction > Motion > Visual**.
>
> **Hard rule: no em dashes (—) anywhere in copy.** Use periods, commas, a middot (·), or arrows instead. This applies to visible text only, not code comments.
>
> My real email is **aashikav42@gmail.com**.
>
> **Verify changes with grep + headless DOM checks (Playwright), never screenshots.** Screenshots burn context; I've asked for them to be avoided.

---

## 1. Files (what's what)

Everything is a single self-contained `.html` file. The built pages already have the logo embedded as base64, so they are **hostable as-is** and are the **source of truth** (they replace whatever is currently hosted).

| File | Role | Notes |
|---|---|---|
| `index.html` | **Homepage** | The reference for tone/scale/restraint. System-map, statement, skill web, work, footer. Uses Lenis smooth-scroll (external CDN). |
| `playground.html` | Playground | Experiments/builds/research. Footer uses a `.p-footer` container (not `#footer`). |
| `resume.html` | About / Resume | Overview cards, experience timeline, skills, recognition, CV download. |
| `after-hours.html` | **After Hours** | Scroll-driven "off the clock" piece. Self-contained (logo embedded). |
| `sources/after-hours-source.html` | Editable source for After Hours | Identical to `after-hours.html` **except** the logo `src` is the literal placeholder `LOGOFULL`. Edit this, then rebuild (see §5). |
| `sources/logo_full_b64.txt` | The logo (with the red dot) as base64 | Needed only to rebuild After Hours from source. |

`index.html`, `playground.html`, `resume.html` are their own source (no separate source file) — edit them directly.

---

## 2. Design system (shared across all pages)

**Colours**
- Field/cream `#F5F2ED` (`--bg` / `--cream`)
- Ink/navy `#1E2A3A` (`--ink` / `--navy`)
- Ink soft `#5A6470` (`--ink-soft` / `--gray`)
- Red accent `#E85D5D` (`--red`) — used sparingly
- Hairline `#D9D5CE` (`--hair` / `--line`)
- White `#FFFFFF`
- Mode colours: design `#E85D5D`, dev `#7FA5B5`, research `#8CC6A9`, creative `#C9A0DC`

**Type**
- Titles: **Space Grotesk** 500, tight letter-spacing (`-.02` to `-.045em`)
- Body: **Roboto**
- OS / mono labels: **JetBrains Mono**
- Handwritten scraps (After Hours only): **Caveat**

**Eases**
- `--ease-out: cubic-bezier(.16,1,.3,1)` (calm reveals)
- `--ease-io: cubic-bezier(.5,0,.2,1)`
- `--ease-spring: cubic-bezier(.34,1.4,.4,1)`

**Layout**: `--gutter: 40px` (20px on mobile).

**Shared OS chrome (every page)** — keep these consistent:
- `.logo-nav` top-left: full logo (img height 22px, red dot) + name "Aashika Vinod". **Do not restyle this.**
- `.section-tag` top-center: e.g. "Directory / After Hours"
- `.hud` top-right: pulsing red dot + "RENDERING NNN%" → "RENDER COMPLETE"
- `.render-bar` top: thin red scroll-progress bar
- `.cursor`: custom 9px red dot (grows on links); native cursor on touch
- Progress is driven by `globalT = scrollY / (scrollHeight - innerHeight)`

**Homepage traits to mirror** (this is the bar for "does it belong"):
- Huge, confident Space Grotesk (hero up to `clamp(56px,12vw,168px)`, `-.04em`)
- Generous whitespace; `max-width` caps so text never sprawls
- Sparse red accent
- Calm reveals: `translateY(16–18px)` + opacity, ~`.7s`, `--ease-out`, small staggered delays

---

## 3. Footer spec (corrected — this is current)

One footer pattern, one difference between home and the rest.

**All pages share:** eyebrow `SECTION 04 / EXPLORE THE SYSTEM`, then the 3 nodes, the email button, the social row, and the meta row.

- Nodes: `Playground → playground.html`, `Building Aashika → #` (page not built yet), `After Hours → after-hours.html`
- Email button → `mailto:aashikav42@gmail.com`
- Social: `LINKEDIN / BEHANCE / INSTAGRAM → #` (placeholders), `RESUME ↓ → resume.html`
- Meta: `AASHIKA VINOD © 2026` · `RENDER COMPLETE · 100%`

**Homepage only (`index.html`):**
- Keeps the line **"The homepage is just the surface. The good stuff is underneath, go poke around."** (the `.fe-title`)
- Keeps the big CTA `Let's build something worth rendering.`

**Sub-pages (`playground`, `resume`, `after-hours`):**
- **No** `.fe-title` sentence, **no** big CTA. Just the SECTION 04 eyebrow → nodes → email → social → meta.

On After Hours the footer is a dark panel (`.site-footer`, navy, `z-index:5`, `min-height:100vh`) that rises up over the fixed stage at the very end while the last memory stays frozen behind it, and the top chrome fades out.

---

## 4. After Hours — architecture (the complex one)

**Concept (LOCKED — do not redesign the interaction):** a single 100%-scroll-driven page whose interface is a *vertical browser history*. Scrolling expands one entry while the others compress; each entry unfolds into a full-screen editorial photo collage. No clicks. The browser history (URL + a quiet on-screen index) is the only metaphor. This is "who I am off the clock."

**Content:** 6 hobby "memories," each a **different** magazine-style composition:
1. `crochet` — cosy cluster (3 photos + note + doodle)
2. `travel` — one giant landscape bleeding off-frame (dark caption)
3. `binge watch` — dark screen-glow bleed (dark caption)
4. `music` — two frames + equalizer doodle + note
5. `drawing` — one strong frame + doodles + whitespace
6. `family & friends` — five scattered polaroids

**Data model** (`MEM[]` in the script): each memory has `label` (right-side scroller), `eyebrow` (caption sub-label), `title`, `slug`, optional `dark:true` (light caption on dark photos), and `pieces[]`. Pieces are built with helpers:
- `ph(kind, palette, x, y, w, ar, rot, depth, z, style)` — a photo. `x,y` are the centre as a fraction of the viewport (bleed allowed, e.g. `w=112` vw). `ar` = height/width. `style` = `plate` (bordered print), `bleed` (borderless full-bleed), `po` (polaroid).
- `no(text, x, y, rot, depth, z, fontSize)` — handwritten note (Caveat)
- `tk(stub, body, x, y, rot, depth, z)` — ticket stub
- `dd(kind, colour, x, y, rot, depth, z)` — doodle (star/wave/spiral/arrow/sun/bloom/heart)
- `cap(x, y, z)` — the caption block (mono eyebrow → big Space Grotesk title → voice line → URL)

`depth` (≈0.85–1.35) is a parallax factor: big photos move less (anchors), scraps move more. This produces the organic, non-uniform motion.

**Photos** are illustrated SVG placeholders (`scene(kind, palette)`): `school, road, window, desk, room, coast, city, portrait, craft, screen, music`, plus a grain data-URI overlay and a vignette. **These are stand-ins — swap for real photographs when ready (no copyrighted images).**

**Render model** (`frame()`):
- `sp = scrollY/vh`, smoothed each frame (`sp += (target-sp)*0.10`); reduced-motion snaps instantly.
- For each memory, `d = sp - i`, `ad = |d|`. Two presence curves:
  - `pPhoto = smooth(1 - ad/0.94)` — photos linger through the handover (this `0.94` is the "overlap toned down ~10%" value; was `1.0`).
  - `pText  = smooth(1 - ad/0.8)` — text stays tight.
- Whole spread drifts vertically: `driftPx = d * DRIFT(1.16) * vh * depth` (compositions pass through the frame; the next assembles as the current collapses).
- Opacity: photos = `pPhoto`; captions = `clamp((pText-0.45)/0.45, 0, 1)` (only the dominant caption is legible — the `0.45` lets it appear slightly earlier); scraps = `pText^1.1`.
- Out-of-range memories (`ad>1.06`) are hidden and set to opacity 0 (no stale state).
- **Invariants that must always hold:** at a settled memory, exactly **1** caption is legible and only that spread's photos show; at a handover (half-integer scroll) **both** neighbours' photos are visible and **0** captions are legible; at any scroll stop there is never more than 1 legible caption and never an empty frame.

**Intro overlay** ("The history nobody clears.") fades on first scroll via `clamp(1 - sp/0.18, 0, 1)` — fast, so the first memory's caption is caught before it fades (this was a bug: the old `0.55` let the intro outlast the first caption).

**Navigation / routing:**
- Active memory → `pushState('#/<slug>')`; address line shows `aashika://after-hours/<slug>`.
- `popstate` (browser back/forward) scrolls to the matching memory; deep-links resolve on load.
- Right-side `.hist` index lists the hobby labels (faint; active one inked with a red tick). Hidden on mobile.

**Responsive / a11y:** respects `prefers-reduced-motion`; on `<760px` the history index is hidden and captions widen. No horizontal overflow.

---

## 5. Rebuilding After Hours from source

The built `after-hours.html` is self-contained. To edit via the source and re-embed the logo:

```python
c = open('sources/after-hours-source.html').read()
b64 = open('sources/logo_full_b64.txt').read().strip()
logo = b64 if b64.startswith('data:') else 'data:image/png;base64,' + b64
open('after-hours.html', 'w').write(c.replace('LOGOFULL', logo))
```

(If you're just tweaking copy or numbers, you can also edit `after-hours.html` directly — the logo is already embedded there.)

---

## 6. Verification protocol (no screenshots)

Use grep + headless Playwright DOM reads. Key checks:

- **Em dashes in copy:** `grep -c '—' *.html` should be 0 for visible copy. Some pages have em dashes **inside CSS/JS/HTML comments** — those are fine, ignore them.
- **After Hours invariants** (Playwright): compute *effective* opacity = `pieceOpacity × memContainerOpacity` (and treat `visibility:hidden` as 0), and let smoothing settle (~900ms) before reading:
  - settled at each memory → 1 legible caption, only that spread's photos
  - handover at `x.5` → both neighbours' photos visible, 0 legible captions
  - no `pageerror`s; logo `img.naturalWidth > 0`
- **Footer:** homepage has `.fe-title`; sub-pages do not; all have `.fe-eyebrow`, 3 `.footer-nav a`, and `.footer-mail`.

---

## 7. Status — done vs open

**Done this project**
- Footer restored to the richer v16 layout across all pages, then corrected so only the homepage carries the "just the surface" line.
- After Hours execution fully rebuilt (concept untouched): bespoke bleeding compositions, photography-led continuous drift, quiet reduced interface, homepage-level restraint.
- Re-themed After Hours from a year timeline to **6 hobbies**; right-side scroller shows hobby names; routing switched to slugs.
- Fixed captions not appearing at the start; toned the photo overlap down ~10%; refreshed the voice copy.
- Consistency pass: zero em dashes in visible copy; email consistent; links resolve; DOB comment corrected (clock already used the right date).

**Done in the "connect every page" pass**
- Added a shared, restrained global nav (`.os-nav`, id `osNav`) to all four pages: Index · Playground · After Hours · Resume, with the current page marked active. It sits just under the top-left logo, matches the OS chrome (JetBrains Mono, sparse red), and on After Hours it's wired into `chromeEls` + the reveal list so it fades with the rest of the chrome.
- Homepage sitemap "front door" now actually opens: the `playground` and `after-hours` directory rows are real links; `building-aashika` is shown but marked `soon` (non-navigating) since the page doesn't exist yet.
- Homepage terminal: `open playground` / `open after-hours` now navigate to those pages; `open building-aashika` reports it's still rendering. `cd` still scrolls within the OS.
- Homepage WORK folders (Respectly / MySociety / Unmapped) now open the Behance profile in a new tab (they were dead before); microcopy updated to say "view the case study on Behance."
- Footer "Building Aashika" node is no longer a dead `#` link on any page: it's a non-link marked `soon`. Footer BEHANCE now points to the real `behance.net/aashikav2`.
- After Hours source (`sources/after-hours-source.html`) was updated in lockstep so a rebuild won't lose these changes.

**Still open (needs your input, not fabricated)**
- The **Building Aashika** page still needs to be built. Every reference to it is now honestly "soon" rather than broken.
- **Project case-study pages** don't exist; the WORK folders point at your Behance profile. If you have per-project URLs (or want real case-study pages), those can replace the shared link.
- **LinkedIn / Instagram** footer links are still `#` placeholders (no real URLs were available). The CV file `Aashika_Vinod_Resume.pdf` is referenced by the resume download but isn't in the bundle; host it alongside the pages.

**Open items / ideas (not started)**
- **"Building Aashika"** page doesn't exist yet — that footer node points to `#`. Building it is the obvious next piece.
- After Hours photos are **illustrated placeholders** — swap in real photos.
- The **voice lines** in After Hours are drafts meant to sound like you; read them aloud and adjust to your actual voice.
- **Social links** (LinkedIn / Behance / Instagram) are `#` placeholders — add real URLs.
- Want more hobbies (reading, cooking, gaming…)? Each is just another entry in `MEM[]` with its own composition.
- `index.html` / `playground.html` / `resume.html` load **Lenis** smooth-scroll from `unpkg.com`. It degrades gracefully to native scroll if unavailable; consider self-hosting the file if you want zero external dependencies.

---

## 7b. Homepage art-direction pass (refinement, not redesign)
The homepage was treated as ~95% done and *art-directed* rather than rebuilt. Concept, structure, hero, sections, and copy are untouched. Four coordinated moves, all built from the existing render/OS language:

- **System spine (new connective thread).** A single hairline "wire" runs down the left gutter (`.spine`, aligned to the 40px / 20px-mobile chrome gutter, sits behind content). It's the vertical companion to the top render-bar: the *same* `globalT` scroll progress fills it, and one node **pip** per section (statement · system · site map · case files · footer) lights as the fill reaches it. This makes the sections read as nodes on one wire instead of consecutive blocks — the strongest "one interconnected system" cue, and it adds a quiet background layer of depth. Pips are positioned by each section's scroll fraction (`layoutSpine()`, recomputed on resize/load), so lighting stays honest.
- **Reveal rhythm tightened.** `.reveal` travel reduced 40px → 22px so section entrances match the homepage's own restraint (hero reveals ~16–18px) instead of arriving with a heavier lurch.
- **Blueprint-grid parallax.** The fixed lattice now drifts a touch slower than scroll (`backgroundPositionY`, seamless 40px cycle) so content floats above a deeper plane — depth via layering, no new content.
- **Removed one impressive-only interaction.** The 40px hover **crosshair** (`.cursor-cross`) is gone. It sat redundantly under the *meaningful* pieces — the red dot and the contextual OS verb label ("cd" / "open" / "trace") — which both stay. Fully removed from CSS, DOM, and JS; contextual labels re-verified intact.

Verified via grep + headless DOM (jsdom): spine builds its 5 pips, fill/track present, zero `cursorCross` references remain, no non-environmental runtime errors, no em dashes in visible copy. Backup at `/tmp/index.phase2.bak.html`.

---

## 7c. Playground cohesion pass (refinement, not redesign)
Playground was the biggest IA risk: five folders (Development · Visual · Art · Concepts · Research) that were each excellent but read as separate galleries. The concept, the drawer, the light-table, and the per-category motion personalities are all untouched. Four moves, aimed squarely at making it feel like one place:

- **Category index in the rail (the main move).** The five folders now appear as one family of accent pips in the drawer rail, with the current one lit and the rest dimmed. They're clickable, so you can jump straight between categories. Because the set is visible at all times and shows where you are, opening or switching now reads as moving within one indexed drawer rather than entering a different gallery. Built from the `CATS` data, so it stays in sync automatically.
- **The persistent frame adopts the active category.** The always-visible top render-bar and the HUD status dot now take on the open category's colour (and return to neutral when the drawer is closed). Combined with the existing ambient-light tint, the whole page reads as one environment shifting its attention, not five separate rooms.
- **Cleaner category switching.** Switching straight from one open category to another now retires any open carousel first, so the move is one deliberate transition instead of two overlapping states.
- **Less noise, better dense/quiet pacing.** The five per-photo status dots no longer pulse (five simultaneous pulses was busy in the dense open state); they're now calm and static. The redundant hover crosshair was removed (keeping the red dot and the contextual OS-verb label), matching the homepage pass.

Verified via grep + headless DOM: the five pips build, a pip click opens the matching category and re-tints the environment (`data-cat`) and lights the correct pip, zero `cursorCross` references remain, no non-environmental runtime errors, no em dashes in visible copy. Backup at `/tmp/playground.phase2.bak.html`.

---

## 8. Non-negotiables recap
- Concept "OS of a mind" is locked. Improve execution, don't redesign the idea.
- No em dashes in copy.
- After Hours: keep the browser-history-scroll interaction; keep the invariants in §4.
- Match the Homepage's restraint and scale on every page.
- Verify with grep/DOM, not screenshots.

---

## 9. Building Aashika page (new build) — the emotional centrepiece
This page never existed before: every reference site-wide was a "soon" placeholder (terminal said "still rendering", footer NODE_02 greyed out, no file). It has now been built from scratch as a warm, first-person narrative, and wired live everywhere.

**Concept — systems thinking through structure, not metaphor.** One continuous throughline: a vertical spine that draws as you scroll, with a node per chapter that "connects" (lights red) when you reach it. Milestones are never isolated — each chapter pairs a *moment* with *what it changed in how I think*, then bridges explicitly to the next ("→ which led me to..."). The single navy background turn lands at the philosophy beat, so the page moves from the bright external years into the reflective interior. Reflective interludes (Caveat hand) sit between chapters for pacing. No glitch, no crosshair, no scroll-jacking.

**Consistency.** Reuses the exact shared system verbatim (tokens, eases, chrome, `SECTION_BG` scroll-colour transition, restrained reveals, footer, logo). Adds Caveat for the reflective register (already used on After Hours). Removed the crosshair from the start (matches the homepage/playground passes).

**Copy is a warm, personalizable template.** Chapters (01 Curiosity · 02 Foundations · 03 The turn · 04 With others · 05 The throughline · Now) are written in first person, focused on universal shifts-in-thinking rather than fabricated facts/dates, so nothing reads as a false factual claim. Aashika should thread in her real milestones; the structure holds regardless.

**Integration (all verified via grep + headless DOM).**
- os-nav: added `Building` (after Playground) on all 5 pages; marked active on building-aashika.html.
- Footer NODE_02: flipped soon → live link on index/playground/after-hours/resume (+ sources copy); desc tidied to "The story so far."
- Homepage front door: sitemap row soon-span → live `<a href>`; `DIR_PAGE` now includes building-aashika (so `open building-aashika` navigates); removed the obsolete "still rendering" terminal branch.
- Verified: page has 6 chapters, 2 interludes, 6 nodes, 5 reflections, 5 bridges, drawing spine, all 8 SECTION_BG ids, no crosshair, no em dashes in visible copy, zero runtime errors; homepage terminal/sitemap/nav/footer all live and error-free. Backups in /tmp/ba_integration_bak/.

**Still open (needs Aashika):** real milestones/dates/story to replace the template copy; LinkedIn/Instagram footer links still `#`; résumé PDF still not bundled.

---

## 10. Resume editorial refinement (treatment only, layout unchanged)
Goal: make the Resume feel less "dashboard-like" and more like a calm editorial page, without redesigning. Every change is CSS-only; sections, grids, columns, content, and JS are untouched.

- **De-tiled the two tiled grids.** Overview and Contact were filled tiles on a hairline background (the most dashboard-like element). They're now open cells separated by thin top rules and generous whitespace, keeping the same 3-col / 2-col layouts.
- **Unified three repeated card sections.** Education, Skills, and Recognition each used the same bordered-rounded-card-with-hover treatment. They now share one quiet ruled-block treatment: no fill, no border box, no shadow, no hover lift, just a top hairline and space. Removes the repetition and adds air.
- **More breathing room + consistent spacing.** Section headers 52→60px; unified grid gaps (~56px column, 40–44px row across overview/education/skills/recognition/contact); experience entries 56→66px apart.
- **Typography hierarchy.** Company anchor 24→26px; achievement titles 18→21px; overview value 22→23px. Reduced competing red accents (dropped the six repeated red stat-dots; softened award year labels from red to muted).
- **Calmer, more premium hero.** The floating hero doodles are now static and lower-opacity (less motion, less clutter) rather than drifting.

Verified: JS parses, headless render clean (6 overview / 6 experience / 2 education / 4 skills / 5 recognition / 4 contact, all 7 sections intact), no runtime errors, no em dashes in visible copy, no residual filled-tile treatments (the one remaining hairline background is the experience spine). Backup at /tmp/resume.phase2.bak.html.

---

## 11. After Hours polish (concept preserved, engine untouched)
The scroll-driven scrapbook (six hobby spreads) was already good; this is a light polish pass on the engine, not a redesign.

- **Tactile + handcrafted (pointer parallax).** The whole spread now responds to the cursor by depth: foreground doodles lead, photos trail, captions barely move so they stay readable. It reads like a physical surface you're leaning over rather than a flat slideshow. Eased and subtle (max ~15px x depth), inert on touch and under reduced-motion.
- **Pacing + animation timing.** Calmed the drift (DRIFT 1.16 to 1.0) so each composition holds its in-focus moment and reads as composed rather than constantly sliding; photos arrive with a slightly richer scale (0.94 to 1.0).
- **Removed a repetitive interaction.** The engine pushed a new browser-history entry per scene while scrolling (six entries, hijacking the back button). Switched to replaceState: the URL still deep-links to each hobby, but the back button leaves the page normally and history no longer floods.

Verified: JS parses, headless run of the frame loop with a simulated pointer applies the parallax cleanly (sample transform confirmed), history stays at a single entry, zero runtime errors, no new em dashes. Backup at /tmp/after-hours.phase2.bak.html.

Note: "storytelling between sections" was addressed lightly (through calmer pacing that lets each spread land). Going further would mean giving the finale ("family & friends") more scroll presence than the other scenes, which needs a non-uniform scroll-length model, a slightly larger change I'd treat as its own pass if wanted.

---

## 12. After Hours polish, pass 2 (deeper: storytelling + delight)
Building on pass 1 (parallax / timing / history fix). This pass targets the two asks pass 1 only touched lightly: storytelling between sections, and per-section delight. Still no redesign, engine intact.

- **Narrated caption beat (storytelling between sections).** Each spread's caption now reveals as a sequence rather than all at once: the index, eyebrow, title, and voice line settle into place in turn as the spread comes into focus (staggered rise eased per line). Reads like narration landing, not a label appearing.
- **Chapter index.** A quiet "01 / 06 ... 06 / 06" sits above each caption, giving a felt sense of moving through a collection toward the finale, so the sequence has an arc instead of feeling like six interchangeable scenes.
- **Handcrafted delight.** The hand-drawn doodles now get "placed" with a gentle spring pop as their spread becomes active (one-shot, per scene), instead of simply being present. Reduced-motion disables it.

Verified: JS parses; headless frame-loop run confirms indices 01/06 to 06/06, staggered caption transforms apply to in-range spreads, .act isolates the active scene, zero runtime errors, no em dashes. The pre-polish backup (/tmp/after-hours.phase2.bak.html) predates both passes.

Still open if wanted: a true non-uniform scroll-length model to give the finale ("family & friends") more dwell than the other spreads. That's a larger structural change, deliberately left as its own pass.

---

## 13. Global production-polish pass (cross-page consistency, no redesign)
Evidence-based sweep to make all five pages read as one design system. Audited tokens/chrome/type first, then reconciled. Backups in /tmp/global_bak/.

**Easing standardized (the big one).** The site was using ~11 distinct easing curves for what should be three roles. index had no ease tokens at all (16 hardcoded curves); after-hours had diverged (.16/.5/.34,1.4,.4 instead of the canonical set). Now every page defines the identical canonical trio and references it by token: --ease-out cubic-bezier(.22,1,.32,1), --ease-io cubic-bezier(.65,0,.35,1), --ease-spring cubic-bezier(.34,1.4,.5,1). All 34 hardcoded usages across the site were collapsed to var(--ease-*). Result: the same motion signature everywhere.
- Caught + fixed a regression this introduced: index is the only page using the Web Animations API (.animate()), which does NOT resolve CSS var() in its easing string. The 7 WAAPI easings were reverted to the canonical cubic-bezier literals (same curves, valid for the API). jsdom's stub hid this; real browsers would have thrown.

**Cross-page cohesion + small inconsistencies removed.**
- Shared page entrance: identical subtle body fade-in (.45s var(--ease-out), reduced-motion-guarded) on all five pages, so moving between pages feels like one system rather than hard document swaps.
- Caveat font request unified (building was 400;600, after-hours 500;600 -> both 400;600, the weights actually used).
- Mobile gutter aligned (after-hours was 20px at the breakpoint; system uses 24px).
- index logo-nav name now brightens on hover with transition:color .3s ease + a :hover rule, matching every other page (it was the only page missing it).
- index gained the system's reduced-motion block (*{animation:none;transition-duration:.001ms}); it was the only page without one. Verified safe: index's keyframe animations are all decorative infinite loops, no content depends on them to become visible.

Left intentionally (would need JS changes / higher risk, low visible payoff): index's logo entrance uses a .visible class and .6s opacity vs the others' .in class and .8s opacity+slide; index/playground hardcode the 40px gutter rather than tokenizing it. Palette needed no work: zero color drift found (every core hex canonical). os-nav, cursor, render-bar, and footer were already byte-identical across pages.

Verified: all 5 pages parse, render headless with zero runtime errors, every cubic-bezier on every page is now one of the canonical three, zero broken WAAPI easings, no em dashes added.

---

## 14. Building Aashika — rebuilt from the node-graph concept (item #10, highest priority)
Rebuilt from the uploaded node-graph design, keeping its concept and style (interactive graph of glyph nodes, connecting edges, the "query" HUD narrating the system's attention, click-a-node overlay, systems/OS aesthetic) but fixing what made it read as buggy and replacing the scattered cloud with a deliberate journey.

Root causes of the "unstable / rendering-bug" feel, and the fixes:
- Random force-directed layout (nodes landed in arbitrary spots) -> replaced with a deterministic serpentine path computed from the viewport. Stable across resizes, no randomness.
- Perpetual idle drift (every node floated sin/cos * 6px every frame, so nothing ever settled) -> removed entirely. Nodes are still and deliberate.
- Cursor-proximity scaling that bulged the whole cloud -> reduced from 0.13 to 0.05; focus scale kept.
- Ambient link-flashes felt random/glitchy -> made rarer and calmer.

Narrative (the "isolated achievements" problem):
- Nodes are now ordered chronologically by year (2021 -> 2022 -> 2023 -> ongoing) and laid along the path in that order, so the graph reads as one journey from "then" to "now".
- The edges are a SPINE: each milestone links to the next (the journey line), plus four faint thematic cross-threads. Edges draw themselves in as the journey assembles, then hold at a soft baseline so the connective tissue is always visible.
- Added a prologue (kicker / "Building Aashika" / one line of framing) that lifts to reveal the graph, and two faint era anchors ("2021 - where it began" top-left, "now - still building" bottom-left) that give the graph a readable direction.

Also aligned to the design system: canonical eases, shared page-fade entrance, reduced-motion block, the global os-nav (Building marked current), and a footer that's a full navigational conclusion (Home + Playground + Building[here] + After Hours + Résumé, real Behance URL). Softened the overlay blur (7px/.32 -> 5px/.42).

Content note: node copy and the overlay visual are warm PLACEHOLDERS (some milestones may be real, some generic) for the user to personalise; the overlay image is a generated placeholder scene. The scroll-timeline version that previously occupied this file is backed up at /tmp/building-scroll-timeline.bak.html.

Verified headless: scripts run with zero errors, 16 nodes land at deterministic positions and stay perfectly still (no drift) after the reveal, all 19 edges draw in to baseline, both era anchors position correctly, the prologue lifts, os-nav has 5 links, eases all canonical, no em dashes in visible copy.

## STILL OPEN — the other 15 audit items (not started)
Only #10 was executed this turn (flagged highest priority + had an upload). The rest are a mix of large features and polish, grouped below for a sensible next pass.

---

## 15. Full 16-item audit pass (everything else)
Executed the remaining brief across all pages. Summary of what changed:

- **#1 Nav declutter / #14 hero focus** — dropped the hero coordinate/system labels to opacity .3 so the name dominates on first load; the left column reads calmer.
- **#2 Header theming** — the logo name and the os-nav links now use the page's dynamic tokens (`--muted-dyn` / `--title-dyn`), so the nav re-contrasts as the homepage scrolls between light and dark sections instead of washing out. (Index diverges from the other pages' fixed-grey nav on purpose — it's the only multi-theme page.)
- **#3 Hero overlap** — added a short-viewport guard that shrinks the hero name and pads the hero so it can't collide with the fixed nav/coords.
- **#5 Entry choice** — added a second, equal path in the hero ("or skip straight to the work") that smooth-scrolls to the case studies, for recruiters who want the work first.
- **#6 Loading once per session** — the full boot now plays only on the first visit of a session (sessionStorage `av_booted`). Return visits skip the loader/boot and reveal the page immediately via `fastReveal()`.
- **#7 Cursor** — replaced the filled red dot on every page with a precise reticle (thin ring + centre dot) that grows on interactive hover. Consistent across index, playground, building-aashika, after-hours, resume, and project.
- **#8 Projects + #16 Behance** — created `project.html`, an in-portfolio case-study template that reads `?p=respectly|mysociety|unmapped` and renders overview / approach / selected-screens with a footer that continues the journey; Behance is now a single secondary "View full case study on Behance" link. The homepage folders open these pages in the same tab, and the "on Behance" line was removed from the work section.
- **#9 Playground** — added a named, colour-coded, clickable category index into the sealed drawer so each of the five domains (Development, Visual Design, Art, Concepts, Research) names itself before you open anything; clicking a chip jumps straight into that domain. (Each domain already carried its own colour + motion signature on open.)
- **#11 After Hours fade** — softened the vignettes (`.vig` .4 -> .24, `.bleed .vig` .62 -> .4) and the grain (.5 -> .32) so the page reads lighter without losing atmosphere.
- **#13 Footer** — every footer is now a navigational conclusion: Home · The Work · Playground · Building · After Hours · Résumé, current page marked, real Behance in the social row. Applied to index, playground, after-hours, resume, building, and project.
- **#15 Skills network** — tool (non-primary) nodes now recede to .6 opacity until the map is engaged (progressive disclosure), and the active node gets stronger contrast (red label, deeper shadow, larger scale).

### Not fully done / needs the user
- **#4 Interconnectedness** — treated as largely satisfied by the existing SYSTEM SPINE (the vertical wire whose pips light per section and share the scroll-progress fill). Left as-is rather than adding competing connective devices.
- **#12 After Hours composition** — the piece layout is JS-driven and tuned by eye; rebalancing empty space reliably needs visual iteration, which can't be done headlessly. Softened the fades (#11) to reduce the "heavy/unfinished" feel, but the spatial rebalance is left for a visual pass.
- **Placeholder content remains**: project.html case-study copy + images (per project), Building Aashika node copy + overlay images, resume LinkedIn/GitHub/Instagram links (`#`), and the résumé PDF are all still placeholders for the user to fill.

Verified headless: all 6 pages parse and run with zero errors; os-nav (5) and expanded footers present everywhere; reticle cursor everywhere; both boot paths (first visit + once-per-session skip) work; project.html populates per `?p=`; all eases canonical; index WAAPI easings still literal; no em dashes in visible copy.

---

## 16. Correction pass (addressing direct feedback)
Removed things that were added but unwanted, and fixed the reported bugs:

- **Removed the os-nav** (the page-link navbar under the logo) from every page. Navigation is now the logo (home) + the footer. Fixed the fallout this caused (an orphaned click-handler in playground, an unguarded reveal array in after-hours).
- **Removed the left "spine" rail** from the homepage entirely (CSS, markup, and all JS: build, boot reveal, fastReveal, scroll handler).
- **Footer rebuilt** as a single clean row of text links (Home · The Work · Playground · Building Aashika · After Hours), current page omitted, no more wrapping wall of cards. **Résumé is no longer a footer node** (it stays in the social row). Applied to all six pages.
- **"The Work" now lands on the fanned-out folders**: on the homepage it smooth-scrolls (via Lenis) to ~55% through the pinned work section where the folders are spread; from other pages it goes to `index.html#work`, which skips the boot and scrolls to that same spread position.
- **Homepage return visit**: removed the `max-height:760px` guard that was shrinking the name, so the name renders full size on every visit.
- **Playground "gross gradient"**: removed the `.footer-fade` (the transparent→navy band between the drawer and footer).
- **Top fade on dark**: replaced the playground/resume `.top-scrim` (which used a fragile color-mix + backdrop-filter + mask stack that read as a white haze) with a simple `linear-gradient(var(--bg))` fade that follows the dark state via the token.
- **After Hours right-side category**: added a `body.scene-dark` toggle driven by the active memory's `dark` flag; all fixed chrome (the `.hist` category index, `.addr`, logo name, section tag, HUD) now lightens on dark scenes instead of vanishing.
- **Contrast bumps**: skill-node type labels (#8A929C → #5A6470 on white), the After Hours live address (.55 → .72), and the sealed-drawer labels (.3/.34 → .5/.52).

Verified: all six pages parse (JS `--check`), CSS braces balanced, render with zero runtime errors, os-nav 0 / spine 0, footers single-row, eases canonical, no em dashes in visible copy.

---

## 17. Top-bar smudge + footer node cards (with real rendering)
Set up wkhtmltoimage (QtWebKit) to actually render isolated components, since jsdom can't show layout. Two fixes, both eyeballed:

- **Top-bar dark band (resume + playground)**: root cause was fading a color to the `transparent` keyword, which is transparent *black* — so the gradient midpoint became a semi-opaque gray smudge over the cream page. Fixed by fading to the same colour at zero alpha instead (`rgba(245,242,237,0)` on light, `rgba(30,42,58,0)` for playground's dark `body.deep` state). Also fixed the two drawer highlight/sweep gradients in playground for the same reason. Rendered resume + playground tops to confirm the band is gone. index/building/after-hours/project have no top-scrim, so nothing to fix there.
- **Footer**: restored the node cards (NODE_00…NODE_04 with name + description) but as a **flexbox one-row** layout (`flex:1 1 0; flex-wrap:nowrap`), **identical on every page** (Home · The Work · Playground · Building Aashika · After Hours; Résumé stays in the social row; The Work carries `data-work` → spread-folder scroll). Used flexbox rather than grid specifically because the QtWebKit renderer can verify flex but not grid. Rendered the footer to confirm five cards on one line.

Verified: all six pages parse (JS + CSS balanced), render with zero errors, footer = 5 nodes on every page, no remaining bare light→transparent smudge gradients.

---

## 18. Resume top band — removed the scrim outright
The dark band was the top-scrim's fade-to-transparent smudge. The rgba(same-colour,0) fix rendered clean in QtWebKit and the delivered zip contained it, but to remove all doubt I deleted the `.top-scrim` element entirely (markup + CSS) from resume and playground. Rendered the resume top again to confirm: cream, chrome only, no band. If the band still appears for the user it is a cached copy of the old file (nothing in the current file can draw it). Both pages parse clean.

---

## 19. Building Aashika — central section redesigned into the "Knowledge Repository"
Replaced ONLY the central experience (old #graphWrap node-graph + overlay). Kept chrome, tokens, type, footer, intro, cursor, query-HUD, transitions.
Concept: 18 upright machined "knowledge modules" seated on 3 precision aluminium rails (repo://shelf-01..03). Modules vary in height (short/med/tall), width (thin/med/thick) and material (matte/metal/paper/engraved); each carries an abstract glyph (reused 18-glyph family), title, type and a metric line. Default face communicates what it is with no hover.
Interactions: hover = inspect (module lifts out of the rail, deeper shadow, glyph+dot go red, 2 engraved metadata rows reveal, neighbours part via JS shiftRail) growing UPWARD inside a fixed-height rail so nothing else reflows. Click = pull out + expand-from-origin into a full-screen editorial dossier (grid: text left, enlarged object right); slot stays (.mod-cell.pulled shows empty socket); Esc/close reverses via transitionend + 820ms fallback; RM-guarded. Search (#repoQuery) filters in place: non-matches .recede into their seats (no grid switch); #repoCount shows "N / 18 match".
All module copy is EDITABLE placeholder. Verified: JS node --check OK, CSS 180/180, jsdom 0 errors (3 rails/18 modules, dossier opens, search "1/18"), wkhtmltoimage visual render confirmed default + inspect states. Zero em-dashes in visible copy.

## 20. building-aashika.html — UX-review implementation (central section rebuilt)
Acted on the brutal self-review. Concept kept (Knowledge Repository); central data model,
module face, dossier, motion and search rebuilt. Chrome/tokens/type/footer/cursor unchanged.
- TIME: 18 modules in chronological order; 3 rails are era bands "2021 → 2022",
  "2022 → 2023", "2023 → Ongoing" (arrows, no em-dash). Top→bottom & left→right = time.
- SIZE = sustained-ness (legible): ongoing/years→tall+thick, months→med, one-off→short+thin.
  Any 6-per-rail width combo fits within max-width 1320.
- GLYPH demoted to a small 20px maker's seal in the cap; TITLE is the anchor; spec "TYPE · YEAR".
- INSPECT (hover/focus): lift + reveal a one-line descriptor (+ issuer), absorbed by a flex
  fill so no reflow; neighbour nudge reduced to immediate ±4px.
- DOSSIER right half = real content slot: framed credential/image (placeholder + invite caption
  until supplied) + "View credential ↗" (only when a link exists; Portfolio Feature → real Behance).
  Left half is description-led with a meta grid. Opens via gentle scale-from-origin (not uncanny
  tiny-morph); leaves an empty slot in the rail; focus moves to close, returns to module on close.
- SEARCH: matches gather left, non-matches collapse & leave (.gone); "N / 18 shown" count +
  0-results state. Cells reveal via staggered .in class.
- INTRO SPLASH REMOVED: page opens straight into the repository; stagger is now actually seen.
- A11y: :focus-visible rings on modules/close/link, focus mirrors hover, labels bumped to ≥10px,
  modules are <button> with descriptive aria-labels.
- Verified: node --check OK; CSS 184/184; 0 em-dashes; 0 stale intro/era/graph refs; jsdom 0
  runtime errors (3 rails/18 modules, era tags correct, dossier link vs placeholder branches,
  gather search 2/18 + empty state); wkhtmltoimage render confirms layout/hierarchy/eras/skyline.
- Placeholders the user edits: module copy + one-liners; img (all empty); link (only Portfolio
  Feature set, to Behance).

## 21. building-aashika.html — v3 aesthetic/interaction pass (dark, editorial, calmer)
Concept kept (Knowledge Repository, chronological era rails, title-leads/glyph-as-seal).
Reworked for cohesion with the homepage terminal + Projects editorial style.
- DARKER THEME: modules are now dark "console" chips (navy gradient #28333F->#18212D,
  light hairline border, cream text) echoing the homepage terminal. Ongoing items carry a
  small green status dot (#8CC6A9, the terminal "ok" green) = "still running".
- REDUCED ENGINEERING: dropped screws, seams, notches, the chunky grooved rail bar and the
  persistent open-arrow. ONE signature detail kept: a thin rail line each row draws in on entry.
- WHITESPACE: section padding 150/128, 60px between rails, uniform module width (176px), only
  height varies (sustained-ness skyline). Left-aligned shared spine.
- MICRO-UI CUT: removed search (field/count/empty state), the bottom-left query HUD (+its CSS),
  and hover metadata reveal. Kept subtle era labels + one quiet hint that fades on first open.
- EDITORIAL DOSSIER: click opens a large DARK preview = big framed image (placeholder+caption)
  on the left, short text on the right (red eyebrow, big title, 1-2 line desc, meta row, optional
  "View credential"). No meta-grid/points list. Echoes Projects .cs-cover / .cs-summary language.
- UNIFIED MOTION: hover = single gentle lift; open = single fade+rise (matches homepage .reveal);
  removed neighbour-nudge, seal-recolor, scale-morph. RM-guarded throughout.
- UNIQUE ENTRY: no splash. The OS "loads" the repository rail by rail: each rail LINE draws in
  (scaleX from left), then its modules settle onto it (rise+fade), one rail at a time (~1.9s).
- Verified: node --check OK; CSS 128/128; 0 em-dashes; 0 stale refs (search/query/screws/seams/
  arrows); jsdom 0 errors (3 rails/18 modules, 3 live dots, dossier eyebrow/title/desc/meta,
  placeholder vs real Behance link, entry classes firing); wkhtmltoimage renders confirm the dark
  airy repository + the dark editorial dossier (clamp()/grid/inset are render-only QtWebKit gaps).
- Placeholders the user edits: module copy; img (all empty -> framed placeholder); link (only
  Portfolio Feature -> Behance).

## 22. Polish pass (approved review items) — index/project/resume/playground/after-hours
Building Aashika untouched. All verified: CSS balanced, JS node --check OK, 0 visible em-dashes.
1. FOLDER EMOJI -> SVG: replaced the three "📁" folder-tab emojis with an inline currentColor
   folder glyph (.folder-ico) so the directory reads as one custom OS on every device.
2. FOLDER LAUNCH = APP LAUNCH: folder click now adds the existing .traced state (red tab + chip)
   for 240ms, then navigates (RM->0ms) — mirroring the terminal's "opening [ok]" so both entry
   points feel like launching an installed app. (index line ~1175)
3. RESUME COMPRESSED (spacing/padding only, no font-size/line-height changes to keep it calm):
   --sec-gap 150->104, sec-head mb 60->32, wrap pad 150/40->112/36, breadcrumb mb 64->34,
   tl-item pb 66->38, edu/sk/aw grid row-gaps 40/44/44->28/32/32, ov/edu/sk/aw card paddings
   trimmed, hero-desc/hero-status/sec-note margins trimmed. Measured height reduction ~11.5% in
   the QtWebKit render (clamp() inflates fonts there, so real-browser figure ~13-14%). Did NOT
   chase a literal 20% — that needs line-height/type cuts that break the "calm pause".
4. AFTER HOURS MOTION PERSONALITIES: added 3 doodle-entrance moods (ddcalm=ease-out no-rotation,
   ddpop=lively spring, ddplay=bigger overshoot) mapped per scene (calm/lively/calm/playful/calm/
   playful) + per-doodle stagger via --dd (step .09/.05/.07s by mood). RM guard expanded to cover
   all mood selectors. Scenes without doodles keep their composition; doodle-bearing scenes now
   open with distinct character.
5. HERO TIMING: name reveal lightened + ~halved: blur 14->6px, scale 1.14->1.06, stagger
   180->95ms, duration 1100->900ms, tag/scroll-hint trailing 650->520ms. (index revealHero)
6. EYEBROW SPACING standardised to .14em everywhere (index sc-/work-/hero-eyebrow, resume .eyebrow,
   playground .vw-eyebrow); others were already .14em.
7. CASE-STUDY REVEAL STAGGER: project.html IntersectionObserver now applies transitionDelay
   =(i*80)ms within each intersecting batch, so a cluster assembles top-down; singles stay 0.
Skipped per user: auto-advance 7000ms, playground blur reduction, chrome-entrance consistency.

## 23. Building Aashika v4 (logos + hover preview + 60% dialog + browse strip + newest-first)
Full rewrite of the repository CSS/markup/script (kept v3's dark chips, rails, era bands,
whitespace, live dots, RM guards). Verified: CSS 156/156 braces, JS node --check OK, 0 visible
em-dashes, 0 stale refs (GLYPHS / dsr-inner / openDossier gone), jsdom 0 errors.
1. RELEVANT LOGOS on covers: replaced abstract GLYPHS with an ICONS set (18 clean 24-box line
   icons, currentColor). Per-module 'ic' field. Item-specific where it helps (chess piece for
   ChessArena, trophy for Award, git-branch for Open Source, rosette for Certificate, mic for
   speaking, two-people for Mentor, brush for Illustration, etc.). User can swap any for a real
   brand SVG later by editing ICONS.
2. HOVER PREVIEW: each chip has a .mod-preview layer (image if m.img set, else a picture-icon
   placeholder) that fades in on hover/focus, with a bottom scrim so the title stays legible.
   .mod-cap/.mod-plate raised to z-index:1 above it.
3. CLICK -> DIALOG (~60%, NOT fullscreen): .dossier is now a centered modal over a blurred scrim;
   .dsr-dialog is 62vw/max1040 x 66vh/max660, rounded, dark. Body = media (image/placeholder) +
   text (eyebrow/title/desc/meta/link). Mobile (<=860px): 92vw/88vh, column body.
4. BROWSE STRIP: .dsr-strip along the dialog bottom lists ALL 18 modules (icon+title+year, live
   dot), horizontally scrollable; clicking a thumb swaps dialog content in place with a .22s
   cross-fade, marks it active (red), and scrolls it into view. Chip click and thumb click both
   route through openDialog(m).
5. ESCAPE + SCRIM close (plus the × button). Close finalises on transitionend with a 600ms
   fallback; RM path closes instantly.
6. DESCENDING ORDER: MODULES.reverse() then rail=floor(i/6), id=i, so newest is top-left and
   oldest (Type & Lettering 2021) is bottom-right. RAILTAGS = ['Ongoing · 2023','2023 · 2022',
   '2022 · 2021'] (middot, no directional arrows). Repo-head copy updated to the descending
   narrative + hover/click hint.
STILL PLACEHOLDER: every module 'img' is empty (covers + dialog show the picture-icon placeholder
until real images are added); only Portfolio Feature has a real link (Behance).

## 24. Building Aashika dialog polish (entrance + strip spacing + size)
1. ENTRANCE ANIMATION: dialog now springs up (translateY(30px) scale(.93) -> none, .55s var(--ease-spring))
   and the inside settles in a stagger: media fades+zooms (scale 1.05->1), the five text lines rise in
   sequence (nth-child delays .18->.42s), and the browse strip slides up (.14s). Global RM guard already
   neutralises it for reduced-motion.
2. ACTIVE-THUMB SEPARATION: strip base gap 9->14px, padding 12/14->16/16; the active (clicked) thumb now
   detaches with margin:0 10px + translateY(-4px) + red shadow, so it clearly reads as "current".
3. BIGGER DIALOG (~+18%): 62vw/1040/66vh/660 -> 73vw/1220px/78vh/780px. Mobile (<=860px) stays 92vw/88vh.
   Comments updated "~60%" -> "~72%".
Verified: CSS balanced, 0 visible em-dashes, JS OK, jsdom open/switch/Escape all pass, QtWebKit render confirms size + active spacing.

## 25. Cursor replaced -> "Acquire" (OS-native, all pages)
Swapped the generic reticle for a self-contained "Acquire" cursor module (identical
<script> appended before </body> on all six pages; guard var __acqCursor).
- Base #cursor kept but restyled via injected <style>: red dot + hairline ring that
  breathes (acqBreathe 3.2s); old .big hover-grow neutralised.
- Interactive targets (SEL list: a[href],button,[role=button],inputs,[data-cursor],
  .footer-mail,.folder,.node,.mod,.dsr-thumb,.dsr-close,.dsr-link) get an .acq-frame of
  four corner brackets that clamp to the element's rect (springs in, tracks scroll via
  rAF re-measure) + an .acq-label mono tag naming the action (verbFor(): EMAIL/LAUNCH/
  TRACE/OPEN/VIEW/CLOSE). Click adds .tap (shutter pulse). Per-element override via
  data-cursor="...". Touch: module returns early. Reduced-motion: transitions/anim off.
- Verified: all <script> blocks node --check OK on every page; 0 visible em-dashes;
  jsdom confirms mount + acquire/release + correct verbs (folder=LAUNCH, external=VIEW,
  .mod=OPEN) with 0 runtime errors.

## 26. Cursor rebuilt as full multi-state replacement (supersedes the layered v in §25)
The §25 version kept the old dot+ring at rest, so it looked unchanged. Replaced entirely:
- Old .cursor hidden (`display:none !important`). New #acqCur is an SVG reticle created by
  the module (dashed spinning ring + crosshair ticks + centre dot + ripple + I-beam).
- STATES driven from one rAF loop: idle (spin), moving (velocity -> scale+faster spin),
  lock (reticle dissolves, corner brackets clamp target rect + verb label), text
  (I-beam over TSEL: p/h1-6/li/blockquote/.rh-t/.dsr-desc/.dsr-title/.sec-note/.hero-desc),
  tap (dot pulse + ripple on mousedown). verbFor(): EMAIL/CLOSE/LAUNCH/TRACE/OPEN/VIEW.
- Follow lerp 0.28; moving threshold 2.2px/frame; per-element override via data-cursor.
- Verified all pages: every <script> node --check OK, 0 visible em-dashes, old cursor hidden,
  jsdom confirms mount + idle/lock/text/tap transitions + correct verbs, 0 runtime errors.

## 27. Fixes: node-map hidden nodes + cursor smoothness
1. NODE MAP (index.html): "AI Systems" and "Notion" (and other panel-hugging nodes) could
   slide under the fixed-width centre panel on any screen not exactly 1240px wide, because
   nodes are %-placed on a 1240x560 grid while the panel is a fixed 428px. Fix: wrapped the
   stage contents in a new `.nm-scale` div (1240x560) and scale it uniformly to the wrap
   width via fitMap() on load + resize, so the panel and nodes stay locked together at any
   size. Nodes now append to nmScale; edgeSvg + systemCore moved inside it. Verified: 23
   nodes, all inside nm-scale, 0 runtime errors.
2. CURSOR: removed the "moving" state (it swapped the ring's animation-duration mid-spin ->
   visible jump, and toggled a scale at a speed threshold -> flicker). Cursor is now smooth;
   remaining states: idle (constant spin), lock, text, tap. Applied on all six pages.

## 28. Cursor reveal gated to boot + review cycle 1: keyboard focus states
FIX: Cursor no longer appears before/over the loader. <html> now carries class "acq-gate";
the module reveals the cursor only once the gate opens (documentElement gets "acq-on") AND
the mouse has moved. index.html adds "acq-on" inside revealHero(), so the cursor emerges as
the boot finishes (first visit) or immediately for returning visitors (who skip to revealHero).
Non-index pages have no acq-gate, so the cursor reveals on first mousemove as before.

REVIEW CYCLE 1 (accessibility / focus states) - HIGH IMPACT:
Only building-aashika had any focus styling; the other 5 pages had none. Because the whole
site uses cursor:none, keyboard/AT users rely entirely on focus rings. Added one shared rule
to every page: a/button/[tabindex]/input/select/textarea :focus-visible -> 2px red outline,
3px offset (matches building-aashika's existing style). No layout/interaction/concept changes.

## 29. Refinement pass 1 - accessibility blockers (keyboard + reduced-motion)
HOMEPAGE:
- Project folders (.folder divs) are now real keyboard controls: role=link, tabindex=0,
  descriptive aria-label, Enter/Space launch (same as click). fi-open cue now also shows on
  focus-visible and persists on touch (hover:none).
- Node map: roving-tabindex pattern - one tab-stop, arrow keys (+Home/End) move between the
  23 nodes, focus mirrors hover (traceNode) and blur untraces, role=button + per-node
  aria-label, map wrapper role=group + aria-label. No more 23 tab stops or zero.
- Reduced-motion: RM users now skip the loader + boot entirely via fastReveal() (instant,
  like returning visitors); hero name WAAPI animation is guarded (instant final state) and
  tag/hint appear immediately. (WAAPI wasn't covered by the CSS RM guard before.)
BUILDING AASHIKA:
- Dialog focus trap added (Tab/Shift+Tab cycle within .dsr-dialog); Escape close and
  return-focus-to-module were already present. aria-modal already set.
Verified: all pages parse, braces balanced, 0 visible em-dashes; jsdom confirms folder
Enter-launch, node roving + focus-trace, and dialog Tab/Escape with 0 runtime errors.

## 30. Originality pass - de-AI subtractions (glassmorphism + floating shadows)
Removed the clearest "AI/template" tells by SUBTRACTION only (no new decoration):
- Homepage system-core panel: was glassmorphism (translucent gradient + backdrop-blur(10px)
  + inset highlight + 16px radius + big black shadow). Now a SOLID navy OS console matching
  the terminal (radius 14, hairline border, tighter navy-tinted shadow, no blur/gradient/inset).
- Homepage nodes: floating black drop shadows -> tight navy-tinted (nodes read as part of the
  wiring diagram, not floating pill-tags).
- Building Aashika: dialog scrim backdrop-blur removed (solid scrim); dialog gradient flattened
  to solid navy, radius 16->14, oversized black shadow -> tighter navy.
- Playground: de-frosted the vw-nav buttons, vw-counter, and sound-toggle (removed backdrop-blur;
  solid/opaque fills).
Net: 0 backdrop-filter left anywhere; all dark surfaces now share one solid-navy OS material.
Verified: braces balanced, all scripts parse, no visible em-dashes affected.

## 31. FINAL structural architecture pass (locked)
Implemented only the three approved structural refinements:
1. Homepage Time-to-Work: the existing hero "skip" affordance is promoted to a first-class
   action - full opacity, bordered button in the site's existing mono/hairline language,
   label "View the work ->". Still targets #work via scrollToWorkSpread(); position and the
   normal scroll narrative are unchanged.
2. Differentiate Resume vs Building Aashika: footer node-card description for Building Aashika
   changed from "The story so far" -> "How I grew as a designer" on ALL 6 pages. Resume stays
   the conventional quick professional overview (its footer-social entry already reads that way);
   the homepage terminal directory desc already framed BA as a growth throughline, so it was
   left untouched (unrelated to the approved footer change).
3. Project navigation: added an in-page prev / All Projects / next nav at the end of every
   case study (project.html), before the footer. Reuses the .cs-back mono/hairline language
   (new .cs-nav wrapper only); prev/next cycle through the existing DATA order via JS; "All
   Projects" -> index.html#work. No new nav system.
VERIFIED (jsdom + static): all pages parse, braces balanced, 0 visible em-dashes; hero-skip
still scrolls to work; footer desc updated on 6/6 pages; project prev/all/next resolve
correctly for all three keys with 0 runtime errors. No existing interactions broken.
ARCHITECTURE IS NOW LOCKED - remaining work is content only.

## 32. Refinement batch (targeted fixes)
1. Hero "skip to the work": relabeled (was "View the work"), raised to bottom:112px with
   11x20 padding so it clears the description above and the scroll cue below; full opacity.
2. Removed the "threads: design / code / research" line from the hero bottom-left diagnostics.
3. Statement caption max-width 480->640px so it sets in 2 lines instead of 3.
4. System-map centre panel simplified: dropped the 4-cell nodes/links/modes/state readout
   (JS was already guarded via if(sdNodes), so no logic change). Idle panel = eyebrow + title
   + instruction.
5. Sitemap terminal ~5% smaller: width min(920,94vw) -> min(874,89vw).
6. Folders: removed the odd per-folder "traced ^" tag AND the node->folder echo (line ~1078);
   all folders now behave identically with a consistent hover state = red border + red glow +
   translateY(-6) scale(1.02), hovered folder raised via z-index. Click feedback (.traced)
   retained.
7. Footer active state: current page's node-card gets .active (red border + tinted bg + red id).
   Added on all 6 pages via a tiny script matching filename+hash to the card href.
8. Building Aashika header crisped: big <h1 class="rh-title">Building Aashika</h1> + short desc
   "How I grew as a designer. Newest first; scroll back to go earlier." (dropped the long copy;
   the standalone hint element still says "hover to preview, click to open").
9. After Hours captions: replaced the blurred radial-gradient backdrop with a clear solid box
   (rgba(15,21,30,.78), radius 12) so all caption text is legible; scenes/notes unchanged.
10. Navbar overlap: homepage's vertically-centred sticky sections (.venn-sticky, .work-sticky)
    given a 72px top safe-zone so content never tucks under the fixed logo/HUD on short laptops.
    Sub-pages already clear (112-190px top). .deck is position:relative so folder spread/map
    are unaffected.
11. Scramble-on-hover: self-contained, reduced-motion-guarded module on all 6 pages; binds to
    .footer-mail (email), .fe-eyebrow, and any [data-scramble]. Stores original text and
    restores it exactly after the cycle.
VERIFIED: all pages parse, braces balanced, 0 visible em-dashes; jsdom confirms footer active
per page, folders(3)/nodes(23) intact, scramble scrambles+restores, 0 runtime errors.

## 33. Maintainability refactor (content/ + engine) — for the designer
Goal: single source of truth, edit-once, no build step, pixel-perfect + animation-safe.
Approach: content lives in plain-JS files in /content (loaded via <script src> in <head>,
defining window globals). Root engine apply-content.js (loaded before the footer-active
script at end of body on every page) fills that content into the EXISTING markup at load,
so no delicate structure/animation is restructured.

Files added:
- content/site.js        -> window.SITE {name,email,copyrightYear,social[]}
- content/navigation.js  -> window.NAV (5 footer cards)
- content/projects.js    -> window.PROJECTS [] + window.FEATURED [3 slugs, homepage folders]
- content/building-aashika.js -> window.MODULES [] + window.RAILTAGS
- apply-content.js (ENGINE, do not edit): hydrates mailto links, footer copyright/name,
  footer-social (rendered from SITE.social), footer-nav card labels/desc/href, and the 3
  homepage folders (tab/name/meta/preview/href/aria-label from FEATURED->PROJECTS).
- HOW_TO_UPDATE_THIS_PORTFOLIO.md (non-developer README).

Wiring:
- Every page: <script src="content/site.js"> + navigation.js in <head>; index/project also
  projects.js; building-aashika also building-aashika.js. <script src="apply-content.js">
  added before the footer-active script at end of body.
- project.html: inline `var DATA={...}` replaced with an adapter that builds DATA from
  window.PROJECTS (friendly names -> internal keys). Object.keys order = array order =
  prev/next order.
- building-aashika.html: inline MODULES array -> `(window.MODULES||[]).slice()`; RAILTAGS ->
  `window.RAILTAGS||[...]`. ICONS/IMGGLYPH kept in the page (rendering internals).

Edit-in-place (documented, already single-source, NOT extracted):
- resume.html (the résumé sections), homepage skills-map NODES (index.html), homepage
  terminal section dirs (index.html). These aren't duplicated anywhere.

Pixel-perfect note: folder tab/meta use CSS text-transform:uppercase, so storing natural-case
values in projects.js renders identically to the original uppercase markup.

VERIFIED (jsdom, content inlined to simulate load order): all pages 0 runtime errors; index
folders filled (Respectly / "PROJECT_01 · Solo" -> CSS uppercases / meta / preview a / href /
aria-label), footer nav labels + descs, email, social, copyright all correct; project.html
?p=mysociety -> title/role/status + prev respectly / next unmapped; building-aashika -> 18
modules, 3 rails, "18 MODULES" hud. All content/*.js + engine node --check OK; all pages parse,
braces balanced, 0 visible em-dashes.

## 33. Layout + interaction follow-ups
1. Hero "skip to the work" was overlapping the tagline (absolute button landed on centred
   content). Fix: button moved into normal flow (display:inline-block, margin-top:36px) so it
   sits directly under the tagline; markup reordered (skip before the scroll hint); hero name
   trimmed clamp(56,12vw,168)->clamp(52,10.5vw,146) with line-height .9 to give the block room.
   No more collision, and it scales down cleanly on shorter screens.
2. Replaced the scramble-on-hover with a RETYPE effect: on hover the text clears and types back
   in char-by-char with a "_" caret, then restores exactly. Same targets (.footer-mail,
   .fe-eyebrow, [data-scramble]|[data-retype]); reduced-motion still skips. Guard __retypeFX.
3. Playground drawer is now a scroll-pinned reveal so it can't be scrolled past before the
   folders appear: drawer wrapped in .drawer-stage (position:relative, JS-sized min-height =
   drawerH + 96 + folders*150 + 40). Drawer stays sticky top:96 through the stage; a scroll
   handler maps pin progress -> number of folders revealed (>=1 always), each folder floats up
   via the existing .dealing transition. When all are revealed it hands off to the existing
   light-table rAF loop exactly as the old timed dealFolders did. reduceMotion path unchanged
   (deals all immediately, stage left natural). VERIFIED in jsdom: predeal(5)->dealing(5,
   revealed)->handoff(0), 0 runtime errors.

## 34. Case studies -> stacked images + prototype embed; image-ready other pages
- project.html rebuilt: was a structured template (overview/approach/screens); now it is a
  slim header (eyebrow/title/summary/role/discipline/year/status) + a vertical STACK of the
  project's images, with ONE prototype embed inserted mid-stack. Rendered by project.html's
  own script from window.PROJECTS[slug]. Reveal-on-scroll per figure. Projects with images:[]
  show a "coming soon" panel. Reuses existing chrome/footer/nav/cursor/retype unchanged.
- content/projects.js: each project now has `images:[{src,alt}...]` and
  `prototype:{type,url,label,at}`. type = figma|html|placeholder; figma builds
  https://www.figma.com/embed?embed_host=aashika&url=<encoded>; html embeds a local path;
  placeholder shows an instructional box. `at` = insert embed after N images (default middle).
  Respectly at:12, Unmapped at:8, MySociety images:[] (placeholder).
- Assets: user uploaded Respectly (25 png) + Unmapped (17 png), 5966px/3840px wide, ~150MB
  total. Resized to 1600px wide, JPEG q88 progressive -> images/respectly (25) + images/unmapped
  (17), 9.2MB total. Ordered by the leading/trailing number in each source filename; clean
  web-safe names (respectly: NN-slug.jpg; unmapped: NN.jpg). Originals untouched in uploads.
- building-aashika.js already supported per-module `img:` (renders real <img> in card + dialog,
  placeholder fallback) - no code change, just documented.
- after-hours.html: ph() now takes an optional last arg = image path; photo render uses a real
  <img> (object-fit:cover, keeps grain+vignette) when provided, else the procedural plate.
  Documented (After Hours is edited in-file via the MEM list).
- HOW_TO updated: stacked-image case study + prototype config; building img; after-hours photos;
  images/ folder map.
VERIFIED: all pages + content JS valid; jsdom 0 errors on every page; project.html renders
25/17/0 figures + prototype for respectly/unmapped/mysociety; all image paths resolve.

## Pending for the user (needs their input/assets)
- Prototype: set prototype.type + url in content/projects.js (Figma link or HTML path). Currently
  a placeholder box in the middle of each stack.
- MySociety case study images (drop into images/mysociety/ + add to its images:[] list).
- Building Aashika module images (add img: to entries) and After Hours photos (add path to ph()).
