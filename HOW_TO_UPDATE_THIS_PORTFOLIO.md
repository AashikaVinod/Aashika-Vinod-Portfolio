# How to update this portfolio

You do **not** need to know how to code to keep this site up to date.

## The one golden rule

**Only edit files inside the `content` folder.**
Everything you'll normally change lives there. If you only ever open the
`content` folder, you can't break the design.

Open a file in the `content` folder with any plain text editor
(TextEdit, Notepad, VS Code, or even the GitHub website). Change the
words between the quotation marks `"like this"`. Keep the quotes, the
commas, and the curly braces `{ }` exactly where they are.

After saving, refresh the site in your browser to see the change. If it
doesn't update, do a "hard refresh" (Cmd/Ctrl + Shift + R) — the browser
sometimes shows an old copy.

---

## What's in the `content` folder

| File | What it controls |
|------|------------------|
| `content/projects.js` | All your case studies **and** the 3 folders on the homepage |
| `content/building-aashika.js` | Every entry on the "Building Aashika" page (courses, awards, certificates…) |
| `images/` | All your pictures: `images/respectly/`, `images/unmapped/`, `images/building/`, `images/after-hours/` |
| `content/site.js` | Your name, email, and social links (used on every page) |
| `content/navigation.js` | The five cards in the footer of every page |

That's it. Four files.

---

## Projects  (`content/projects.js`)

Each project is one block that looks like this:

```
{
  slug: "respectly",
  title: "Respectly",
  tag: "Solo",
  discipline: "UX Research · Interaction · Visual · Build",
  descriptor: "Building everyday awareness through respectful interactions",
  year: "2025 · 2026",
  role: "Product Designer · UX Researcher · UX Engineer",
  status: "Shipped",
  team: "Solo",
  methods: "UX Research · Accessibility · Information Architecture · Prototyping",
  tools: "Figma · Adobe Illustrator · HTML/CSS/JavaScript",
  thumbnail: "a",
  cover: "cov-a",
  eyebrow: "Case Study 01",
  behance: "https://www.behance.net/aashikav2",
  summary: "One or two lines under the title.",
  overview: "One short paragraph: what the project is.",
  contribution: "One short paragraph: what you did on it."
},
```

What each field is for:
- `descriptor` — the short tagline under the title, and the note that fades in
  when you hover the folder on the homepage. Keep it to one line.
- `overview` — the "Overview" paragraph near the top of the case study.
- `contribution` — the "My contribution" paragraph, right below Overview.
- `role`, `status`, `team`, `year` — the small labelled facts (Role / Status /
  Team / Timeline) in the project sidebar.
- `methods` and `tools` — the two full-width rows under those facts. Separate
  items with ` · ` (a middle dot), never a dash.

Any of `overview`, `contribution`, `team`, `methods`, `tools` can be left as
`""` and that row simply disappears. (The old `overviewHeading` / `overview1` /
`overview2` fields are no longer used; you can ignore them.)

### Add a new project
1. Copy one whole block, from `{` to `},` (include the comma).
2. Paste it right below an existing block.
3. Change the values. Give it a **new `slug`** (lowercase, no spaces).

### Replace a project
Change the values inside its block. To change its web link, change the `slug`.

### Reorder projects
Move a whole `{ ... },` block up or down in the list. This also sets the
order of the **Previous / Next** buttons on the case-study pages.

### Update metadata (role, year, discipline, status)
Change `role`, `year`, `discipline`, or `status` inside the block.

### The case study itself: stacked images + one prototype
Each case study page is simply your images stacked top to bottom, with one
interactive prototype embedded somewhere in the middle. Everything is set on
the project's block in `content/projects.js`.

**Header text** at the top of the page comes from `eyebrow`, `title`,
`summary`, `role`, `discipline`, `year`, and `status`.

**The images** are the `images` list, shown in the exact order you write them:

```
images: [
  {src:"images/respectly/01-cover-page.jpg", alt:"cover"},
  {src:"images/respectly/02-metadata.jpg",   alt:"project metadata"},
  ...more...
],
```

* Put the image files in `images/<project>/` (for example `images/respectly/`).
* To reorder, add, or remove a section: move, add, or delete a line here.
* `alt` is a short description for screen readers. Keep it brief.
* Keep images roughly 1600px wide so the page stays fast (the ones already
  loaded were resized for you). Very large exports make the site slow.

**The prototype embed** is the `prototype` block:

```
prototype: { type:"placeholder", url:"", label:"Interactive prototype", at:12 }
```

* `type`: `"figma"` (paste a Figma share link into `url`), `"html"` (point
  `url` at a local prototype such as `"prototype/respectly/index.html"`),
  or `"placeholder"` (shows a "prototype goes here" box until you are ready).
* `url`: your Figma link, or the path to your HTML prototype.
* `at`: the embed appears after this many images. `12` is about the middle;
  set it wherever you want the interactive break.
* `label`: the little caption on the embed's title bar.

A project with an empty `images: []` list just shows "Case study images
coming soon", so unfinished projects never break. (The old `overviewHeading`
/ `overview1` / `overview2` fields are no longer shown; you can ignore them.)

### Change a thumbnail
`thumbnail` picks the homepage folder's look: `"a"`, `"b"`, or `"c"`.
`cover` picks the case-study cover: `"cov-a"`, `"cov-b"`, or `"cov-c"`.

### Change which projects are "featured" on the homepage
At the **bottom** of `content/projects.js`:

```
window.FEATURED = ["respectly", "3bhuvan", "unmapped"];
```

These are the homepage folders, **left to right** (currently three:
Respectly, 3Bhuvan, Unmapped). To swap or reorder them, change the slugs
here (use any project's `slug`). Add or remove a slug to change how many
folders show; the homepage deck is currently tuned for three.

> A project can exist in `PROJECTS` without being featured — it just
> won't appear as a homepage folder, but it still has its own case-study
> page and shows in Previous/Next.

---

## Placeholders you'll want to fill (V2)

Two spots on the site are intentionally left as placeholders — they are
safe to ship as-is, but here is how to complete them.

**Homepage metrics.** The homepage has an evidence section with four
tiles (Products shipped, Companies & clients, Years designing, Research &
academic). The numbers currently read `--`. In `index.html`, find the
`stmt-metrics` block and replace the `--` inside each `<span class="sm-val
is-pending">--</span>` with the real figure (and you can drop the
`is-pending` class once a real number is in). Add or remove a
`.stmt-metric` block to change how many tiles show.

**3Bhuvan (NDA-safe).** In `content/projects.js`, the `3bhuvan` entry is a
real, shipped product whose specifics are under NDA. Its fields are filled with
non-confidential summaries only (role, discipline, methods, a general
descriptor), `year` is blank, and `images` is empty. It was **designed and
handed off** to a build team, so nothing should ever say she coded it. When a
fuller NDA-safe case study is ready, add image paths and expand the copy, but
never add anything confidential.

---

## Building Aashika  (`content/building-aashika.js`)

Each achievement is one line:

```
{ic:'cert', t:'Google UX Design', cat:'credentials', type:'Professional Certificate', org:'Google / Coursera', yr:'2023', dur:'6 months', h:'h-med', d:"One sentence about it."},
```

### Add an award / certificate / course
1. Copy one whole line (from `{` to `},`).
2. Paste it into the list.
3. Edit the values.

The page groups modules into **five labelled shelves**. Each module carries a
`cat:` field that decides which shelf it sits on. Within a shelf, modules show
in the order they appear in the list, so move a `{ ... },` block up or down to
reorder inside its shelf.

The five shelves, in order, and the `cat:` value each uses:

| Shelf | `cat:` value |
|---|---|
| Professional Practice | `'practice'` |
| Research & Human Behaviour | `'research'` |
| Design for Impact | `'impact'` |
| Credentials & Continuous Learning | `'credentials'` |
| Recognition & Achievement | `'recognition'` |

- `ic` = the little icon. Pick one of:
  `nib, chess, grid, lens, motion, heart, fork, cert, trophy, bolt,
  cube, mic, flag, star, board, feed, mentor, brush`
- `cat` = which shelf it lands on (see the table above). If you leave it off
  or misspell it, the module simply won't appear on any shelf.
- `h` = the card size: `'h-short'`, `'h-med'`, or `'h-tall'`.
- Add `live:true,` for an ongoing item (shows a small dot).
- Add `link:'https://...',` to make the card clickable.
- Add `img:'images/building/your-file.jpg',` to show a real picture in the
  card and its pop-up (otherwise a placeholder graphic appears). Put the
  files in `images/building/`.

---

## After Hours  (`after-hours.html`)

After Hours is edited directly in `after-hours.html` (the `MEM` list in the
script near the bottom). Each scene is built from small pieces:

* `no('your note', ...)` is a handwritten note (text).
* `ph('kind', palette, x, y, width, ratio, rotation, depth, z, 'style', 'images/after-hours/your-photo.jpg')`
  is a photo. The **last value is the image path**: add it to show a real
  photo, leave it off to keep the placeholder plate. Put photo files in
  `images/after-hours/`.

Leave the numbers as they are unless you want to move a piece around.

---

## Resume  (`content/site.js` for contacts, `resume.html` for the rest)

- Your **email** and **social links** come from `content/site.js`.
- The résumé's actual sections (experience, education, skills) live in
  **`resume.html`**. That file is only your résumé, so it's safe to edit
  the words there directly. Change the text between the tags; don't touch
  anything that looks like `<div ...>` or `class="..."`.

---

## Email & social links  (`content/site.js`)

```
name: "Aashika Vinod",
email: "aashikav42@gmail.com",
social: [
  { label: "LinkedIn",  url: "#" },
  { label: "Behance",   url: "https://www.behance.net/aashikav2" },
  { label: "Instagram", url: "#" },
  { label: "Resume ↓",  url: "resume.html" }
],
```

- Change `email` once here — it updates on every page.
- Change a social `url` to update where a link goes. Use `"#"` if you
  don't have the link yet.
- You can add or remove social lines (keep each one's `{ }` shape).

---

## Footer navigation labels  (`content/navigation.js`)

Change a card's `name` to rename it, or `desc` for the small line under
it. There are always five cards; you're only changing their words.

---

## Files you should NEVER edit (unless you want to redesign)

Leave these alone — they are the "engine" and the design. Editing them can
break the look or the animations:

- `apply-content.js`  (the engine that fills your content into the pages)
- `index.html`, `project.html`, `building-aashika.html`,
  `after-hours.html`, `playground.html`  (the pages themselves)
- `resume.html`  (safe to edit **your résumé words** only — see above)
- Anything ending in `.css` or inside `sources/`

If you ever want to actually redesign something (colours, layout,
animations), that's a bigger job — start a new conversation and share this
folder.

---

## Quick checklist when something looks wrong

1. Did you keep all the quotes `"` and commas `,`?
2. Did you keep the curly braces `{ }` and square brackets `[ ]`?
3. Did you save the file?
4. Hard-refresh the browser (Cmd/Ctrl + Shift + R).

If it still looks off, undo your last change and try again one small step
at a time.

---

## V2 production upgrades (performance, architecture, accessibility)

The site was hardened to a production-grade standard. What changed and how to keep it working:

### Images are served as WebP with a JPG fallback
Every photo now loads as a smaller `.webp` (about 40% lighter) while keeping the original
`.jpg` as a fallback for old browsers. You do **not** change how you reference images — the
data files (`content/projects.js`, `content/building-aashika.js`, playground/after-hours data)
still point at the `.jpg`. A small helper builds the `<picture>` tag automatically.

- `content/media.js` holds two things: `window.MEDIA` (each image's width/height, used to stop
  layout jumping while images load) and `window.picHTML(...)` (the helper that outputs the
  `<picture>` tag with WebP source, responsive `srcset`, `width`/`height`, lazy-loading, and alt text).

**When you add or replace an image:**
1. Put the new `.jpg` (or `.png`) in the right `images/<folder>/`.
2. Regenerate the WebP files and the dimensions map. From the project folder, with Python + Pillow installed, run a small script that walks the live image folders, saves a `.webp` next to each
   `.jpg` (quality 82), makes a `-900.webp` for large images, and rewrites `content/media.js`.
   (The exact script that generated the current set is kept with the delivery notes.)
3. If you can't run the script, at minimum: save a `.webp` copy next to the new `.jpg`, and add
   an entry to `window.MEDIA` in `content/media.js` like `"images/folder/new.jpg":{"w":1600,"h":1200}`.
   Without a `.webp`, the page still works — it just serves the `.jpg`.

The first case-study image on each project loads eagerly (for speed); the rest lazy-load as you scroll.

### Design tokens
All brand colours live as CSS variables in each page's `:root` (`--red`, `--navy`, `--cream`,
`--green`, `--purple`, plus `--red-rgb` etc. for translucent versions). Change a colour once in
`:root` and it updates everywhere on that page. The canvas/JS animations still use raw hex on
purpose (a `<canvas>` cannot read CSS variables) — leave those as they are.

### Accessibility
- Muted micro-copy was darkened/brightened to meet the WCAG AA 4.5:1 contrast minimum.
- Small text links (footer social, case-study prev/next) have an invisible 44x44px tap area so
  they're easy to hit on touch screens — the visible design is unchanged.
- Every image has descriptive `alt` text; each page has proper `<main>`, `<nav>`, `<footer>` landmarks.

### Loading speed
The `<head>` of each page preconnects to the font and script servers, and the fonts load via a
`<link>` instead of a slower CSS `@import`. Nothing to maintain here — just don't remove those
`<link rel="preconnect">` / `<link rel="dns-prefetch">` lines.

> Note on AVIF: AVIF is an even smaller next-gen format, but it needs a build tool this
> hand-coded setup doesn't run. WebP already covers ~97% of browsers. If you later add a build
> step, generating AVIF alongside WebP and adding a second `<source type="image/avif">` is the
> next optimisation.
