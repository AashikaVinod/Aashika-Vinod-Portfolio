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
  discipline: "UX · Visual · Build",
  year: "2025",
  role: "Solo · design + build",
  status: "Shipped",
  thumbnail: "a",
  cover: "cov-a",
  eyebrow: "Case Study 01",
  behance: "https://www.behance.net/aashikav2",
  summary: "One or two lines under the title.",
  overviewHeading: "What Respectly was",
  overview1: "First paragraph of the write-up.",
  overview2: "Second paragraph of the write-up."
},
```

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
window.FEATURED = ["respectly", "mysociety", "unmapped", "project-04"];
```

These are the homepage folders, **left to right**. To swap or
reorder them, change the slugs here (use any project's `slug`). You can
have up to **four**.

> A project can exist in `PROJECTS` without being featured — it just
> won't appear as a homepage folder, but it still has its own case-study
> page and shows in Previous/Next.

---

## Building Aashika  (`content/building-aashika.js`)

Each achievement is one line:

```
{ic:'cert', t:'Google UX Design', type:'Professional Certificate', org:'Google / Coursera', yr:'2023', dur:'6 months', h:'h-med', d:"One sentence about it."},
```

### Add an award / certificate / course
1. Copy one whole line (from `{` to `},`).
2. Paste it into the list.
3. Edit the values.

The page automatically shows the **newest at the top**, so you don't have
to worry about ordering it perfectly.

- `ic` = the little icon. Pick one of:
  `nib, chess, grid, lens, motion, heart, fork, cert, trophy, bolt,
  cube, mic, flag, star, board, feed, mentor, brush`
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
