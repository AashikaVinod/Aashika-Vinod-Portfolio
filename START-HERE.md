# START HERE — Aashika Vinod Portfolio (handoff for the next chat)

Paste this whole file into a new chat as the first message, attach the zip, and say
"continue from here." It contains everything needed to keep building without re-explaining.

--------------------------------------------------------------------------
## 1. WHAT THIS IS
A hand-coded, self-contained portfolio for **Aashika Vinod** (UX/UI designer),
themed as a fictional operating system called the **"Modular Intelligence System."**
Every page is a subsystem of that OS. All files are standalone HTML (CSS + JS inline,
no build step, no frameworks). Aashika is non-technical with Git and wants **whole files
to copy-paste**, not diffs/patches.

## 2. HARD RULES (do not break)
- Real email everywhere: **aashikav42@gmail.com**
- Real external URLs (in content/site.js): **behance.net/aashikav2**,
  **linkedin.com/in/aashika-vinod-391161302**, **github.com/AashikaVinod**.
  (resume PDF download is still a placeholder — see §6.)
- **No em dashes (—) in VISIBLE copy.** They're fine inside HTML/CSS/JS comments.
  Use periods, commas, middot (·), arrows (→ ↑ ↗), or colons instead.
- Deliver whole files. Keep tone concise, warm, non-defensive. After delivering a file,
  keep the summary short.
- Always remind Aashika to **re-extract to a fresh folder** after changes (browser cache
  is the usual reason "changes don't show up").

## 3. FILE INVENTORY  (folder: aashika-portfolio/)
- index.html            — homepage: boot → hero → node-map (#work) → folders → terminal → footer
- project.html          — case-study template, reads ?p=respectly | mysociety | unmapped
- building-aashika.html — "Knowledge Repository": logo chips on 3 era rails + 60%-dialog browser (DONE, v4)
- after-hours.html      — "Browser History": 6 pinned memory scenes
- resume.html           — calm résumé page
- playground.html       — skeuomorphic "drawer" of experiments
- sources/after-hours-source.html — backup
- HANDOFF.md            — full chronological build log (sections 1–24)
- START-HERE.md         — this file

## 4. DESIGN SYSTEM (canonical tokens, shared by every page)
Colors: cream/bg #F5F2ED · navy/ink #1E2A3A · gray/ink-soft #5A6470 · red #E85D5D ·
hairline #D9D5CE · blue-line #7FA5B5 · blue #B4D0DC · white #FFF · live-green #8CC6A9.
Fonts: Space Grotesk (titles) · Roboto (body) · JetBrains Mono (labels/eyebrows) ·
Caveat (after-hours only).
Eases (identical on all pages):
  --ease-out cubic-bezier(.22,1,.32,1)  --ease-io cubic-bezier(.65,0,.35,1)
  --ease-spring cubic-bezier(.34,1.4,.5,1)
Shared chrome on every page: render-bar (2px red scroll progress), logo-nav (top-left,
home link, inline base64 "AV" logo), section-tag (top-center), hud (top-right), and a
footer with one row of NODE_00–04 cards. Eyebrows are all letter-spacing:.14em.
Custom reticle cursor on every page (22px, .big 44px on hover, 0.2 lerp) — **being
redesigned, see §7.** Reduced-motion + touch (hover:none) guards are present everywhere.

## 5. HOW TO VERIFY ANY CHANGE (do this before declaring done)
Aashika's browser is modern, but screenshots here render in old QtWebKit which CANNOT do
var()/grid/aspect-ratio/clamp()/inset/reveal-JS — so verify by reasoning + the checks below,
and only screenshot with substitutions if asked. (This session: do NOT produce screenshots.)
1. JS syntax: extract the biggest <script> and run `node --check`.
2. CSS balance: count `{` == `}` inside <style>.
3. Visible em-dashes: must be 0 ->
   `re.findall(r'>[^<]*—[^<]*<', re.sub(r'<(style|script).*?</\1>|<!--.*?-->','',s,flags=re.S))`
4. jsdom render for interactive JS: stub requestAnimationFrame, matchMedia(matches:false),
   IntersectionObserver, scrollIntoView, getBoundingClientRect; dispatch DOMContentLoaded;
   assert 0 runtime errors + expected DOM.
Package: `cd /home/claude/portfolio && rm -f /mnt/user-data/outputs/aashika-portfolio.zip &&
zip -rq /mnt/user-data/outputs/aashika-portfolio.zip aashika-portfolio -x '*/node_modules/*' -x '*/.DS_Store'`

## 6. CONTENT TO ADD  (this is the next chat's main job — exact locations)
Everything below is currently PLACEHOLDER. Do not invent facts; ask Aashika or wait for
her content, then paste it in.

**index.html**
- Hero name: lines ~417–418 (`Aashika` / `Vinod.`). Tagline/eyebrow nearby.
- Three project folders: lines ~534–536. Each has title (`fi-name`), meta (`fi-meta`,
  discipline + year), and links to project.html?p=SLUG. Slugs: unmapped, mysociety, respectly.
- Node map (#work) node labels and the terminal directory list live in index.html's JS.

**project.html** (case studies)
- `var DATA={...}` at lines ~192–208. Three keys: respectly, mysociety, unmapped.
  Fields per case: title, eyebrow, role, disc, year, status, cover (cov-a/b/c gradient),
  beh (Behance), summary, ovH, ov1, ov2. Replace the placeholder summary/overview text.
- Case-study IMAGES are gradient placeholders (cov-a/b/c) — real images need adding.

**building-aashika.html** (DONE structurally; needs real assets)
- `var MODULES=[...]` at lines ~328–347 (18 entries). Each: ic (icon key), t (title),
  type, org, yr, dur, h (h-short/med/tall = how sustained), d (description), optional
  live:true, optional link. Icons already mapped (ICONS object ~line 304).
- Add real images: set an `img:'...'` on any module -> it appears in BOTH the hover
  preview and the 60% dialog automatically. Currently every img is empty (placeholders).
- Only Portfolio Feature has a real link (Behance). Descriptions are editable one-liners.

**after-hours.html**
- `var MEM=[...]` at lines ~306+. Six scenes: crochet, travel, binge-watch, music,
  drawing, family-friends. Photos are placeholders — add real images + captions.
  Each scene has a `mood` (calm/lively/playful) that drives its doodle motion — keep those.

**resume.html**
- Real experience / education / skills / awards content throughout.
- Social links: lines ~569, ~573 (contact rows, href="#") and ~605 (footer LINKEDIN /
  INSTAGRAM href="#"). Add real URLs.
- Resume PDF: line ~579 links `Aashika_Vinod_Resume.pdf` (download) — add the real file.

**playground.html**
- Experiment tiles/content inside the "drawer" — replace demo experiments with real ones.

## 7. THE CURSOR - DONE ("Acquire", full replacement, multi-state)
The old red dot+ring reticle is retired (hidden via `.cursor{display:none}`). A new
self-contained, always-animated cursor is built on all six pages (identical `<script>`
before </body>; guard `__acqCursor`). It creates its own `#acqCur` SVG cursor + a bracket
frame + a label, and drives everything from one rAF loop. States:
- idle: a dashed reticle RING (crosshair + centre dot) that slowly spins.
- moving: reticle scales up + spins faster with pointer velocity.
- lock (over interactive): the reticle dissolves and four corner brackets clamp onto the
  element's box + a mono verb label appears (EMAIL / LAUNCH / TRACE / OPEN / VIEW / CLOSE).
- text (over p/headings/list/desc): reticle becomes a blinking I-beam.
- tap (mousedown): shutter pulse on the dot + an expanding ripple ring.
Touch: module returns early (system cursor). Reduced-motion: spin/ripple/blink off, states
still switch via opacity.
CUSTOMISE: per-element label via `data-cursor="..."`; interactive set = the `ISEL` string;
text set = `TSEL`; all visuals live in the module's injected `css.textContent`; colours use
var(--red) with a hex fallback. To retune feel: ring `animation` speed, `.moving` threshold
(2.2), follow lerp (0.28), bracket spring, label offset.

## 8. CURRENT STATE / RECENT WORK (so you don't redo it)
- Portfolio is ~9.3/10 and polished. Two design reviews done; polish pass applied
  (see HANDOFF §22): folder emoji→SVG, folder click now "launches" like the terminal,
  resume compressed ~11–14% (spacing only, calm preserved), After Hours per-scene motion
  personalities, hero reveal lightened/halved, eyebrows standardized .14em, case-study
  reveal stagger.
- building-aashika is fully v4 (HANDOFF §23–24): relevant logo per cover, hover preview,
  ~72% animated dialog (springs up, staggered content) with a browse strip of all 18
  modules along the bottom (active thumb clearly separated), Escape + scrim close,
  newest-first order.
- Cursor replaced with the OS-native "Acquire" cursor (see §7).
- Known intentional skips: homepage boot auto-advance timing, playground blur, chrome-
  entrance consistency (resume stays calm on purpose).

## 9. THE BIGGER OPEN QUESTION (worth a pass eventually)
Micro-polish is largely done. The remaining leap from 9.3 to 9.8 is systemic cohesion:
one consistent interaction grammar (hover = inspect, click = launch, everywhere), one
terminology voice, and a cross-page narrative that builds momentum Home → Work → case
study → After Hours. Offer Aashika a systems-level pass once content is in.
