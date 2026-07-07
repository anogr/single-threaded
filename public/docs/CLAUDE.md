# Single Threaded Docs — Conventions

This file is read by Claude before authoring or editing any document in this folder.

## What this site is

Learning-focused technical articles for IT architects and frontend developers working with modern web stacks.
Published as static HTML. No build step. Tone is educational and precise, not personal.
Each article teaches a topic, explains all concepts, and includes code samples.

The intended audience is IT architects and frontend developers, but articles must never explicitly state who they are written for.

Topics span frontend, backend, and architecture — whatever level of detail helps the reader understand the subject. Backend and database discussions are welcome when they serve conceptual understanding for IT architects.

---

## File inventory

| File | Purpose |
|---|---|
| `docs.css` | Shared design system — all tokens, layout, components |
| `docs.js` | Shared JS — mobile nav toggle, active sidebar link |
| `TEMPLATE.html` | Canonical starter for new articles — copy this, don't write from scratch |
| `index.html` | Article index page — add a card here for every new article |
| `https-certificates.html` | Custom browser-chrome layout — see note below |

---

## Design system

Warm dark theme, not the GitHub-dark palette. Background is a warm near-black
(`--bg: #15130f`), text is a warm ivory (`--text: #f3ead6`), never the cool
blue-black-and-blue-white combination that most generated dark UIs default to.

One brand accent, amber (`--accent: #e2963c`). It carries the links, the eyebrow,
the active sidebar state, code keywords, and doubles as the "warning" semantic
colour. Resist adding more accent colours. The site should read as mostly
background, text, and that one amber, with colour elsewhere reserved for when
it actually means something.

Three semantic colours for do / warn / don't, used consistently for callouts,
advantage/tradeoff cards, and similar judgment calls:

| Meaning | Variable | Use for |
|---|---|---|
| Do / success | `--green` | `callout.ok`, advantages, correct examples |
| Warn / caution | `--orange` (same family as `--accent`, intentionally) | `callout.warn`, tradeoffs |
| Don't / danger | `--red` | `callout.danger`, vulnerable examples, DELETE method |

`--teal`, `--accent2`, and `--gold` exist for non-semantic variety only: index
cards, HTTP method pills, JSON/code syntax highlighting. Don't reach for a new
colour when one of the existing tokens already fits, the point of this palette
is restraint, not coverage. All colours are muted, not neon. If a colour looks
like it belongs on a SaaS status badge, desaturate it.

Typography is two families total: `--font-disp` / `--font-sans` (both point to
Newsreader, a serif, used for everything that reads as prose, headings included)
and `--font-mono` (IBM Plex Mono, used for labels, eyebrows, and code). Do not
introduce a third family. Inline SVG diagrams may fall back to a plain sans
(e.g. `Inter, system-ui, sans-serif`) for small diagram labels where a serif
would blur at 9–11px, that's a legibility exception, not a branding choice.

---

## Starting a new article

1. Copy `TEMPLATE.html` to a new kebab-case filename (e.g. `web-workers.html`).
2. Fill in the article header, sidebar nav, and content sections.
3. Add a card to `index.html` (pick an unused accent color).
4. That's it — `docs.css` and `docs.js` are already linked in the template.

---

## Article structure (required, in this order)

```html
<header class="mobile-header">…</header>
<div class="nav-overlay" id="nav-overlay"></div>

<div class="shell">
  <nav class="sidebar" id="sidebar">…</nav>
  <main>
    <div class="eyebrow">Category · Subcategory</div>
    <h1>Title: <em>Italic accent</em></h1>
    <p class="subtitle">One or two sentences describing the article.</p>
    <div class="byline">
      <strong>Article type</strong>
      <div class="dot"></div><span>~N min read</span>
      <div class="dot"></div><span>Topic scope</span>
      <div class="dot"></div><span>Month YYYY</span>
    </div>
    <!-- sections … -->
  </main>
</div>

<footer>© Single Threaded AB</footer>
<script src="docs.js"></script>
<!-- optional article-specific <script> block -->
```

---

## Sidebar nav markup

Use **flat anchors** directly inside `<nav>`. Do **not** use `<ul>/<li>`.

```html
<nav class="sidebar" id="sidebar">
  <a class="sidebar-logo" href="index.html">Article<br><span>Short Title</span></a>
  <div class="sidebar-section">Group Name</div>
  <a href="#section-id">Link text</a>
  <a href="#another-id">Link text</a>
</nav>
```

`docs.js` handles scroll-based active highlighting automatically.

---

## Article header elements

All four are required on every article:

| Element | Class | Notes |
|---|---|---|
| Eyebrow | `div.eyebrow` | Category · Subcategory in mono caps |
| Title | `h1` | Use `<em>` for italic accent word |
| Subtitle | `p.subtitle` | ≤ 160 chars, describes the article |
| Byline | `div.byline` | Type · read time · topic scope · date. Do not name the intended audience explicitly. |

The `post-eyebrow` and `post-meta` class aliases exist in `docs.css` but prefer the canonical names above for new work.

---

## Shared CSS components (from docs.css — no custom CSS needed)

| Component | Usage |
|---|---|
| Callout | `<div class="callout info/ok/warn/danger/new/gold">` — add `aside` for left-border variant. `ok`/`warn`/`danger` are the do/warn/don't triad, use them with actual meaning, not decoratively |
| Card | `<div class="card blue/green/orange/red/teal/purple/gold">` — class names are historical, `blue` renders the amber accent, `purple` renders a muted tan. Don't rotate colours across cards just for visual variety |
| Badge | `<span class="badge badge-green/blue/orange/red/teal/muted">` |
| Code block | `<div class="code-block"><div class="code-header">…</div><pre><code>…</code></pre></div>` |
| Lede | `<p class="lede">` — italic pull-quote under an h2 |
| Divider | `<div class="divider">` |
| Table | Standard `<table>` inside `<div class="table-wrap">` |

Syntax highlight spans: `.kw` `.k` `.fn` `.t` `.s` `.cm` `.cn` `.m` `.p` `.n`

---

## Per-article `<style>` blocks

Only put **article-specific** rules here — custom grids, interactive widget styles,
component overrides that are local to one article. Do not re-define anything already
in `docs.css` (callouts, cards, sidebar layout, etc.).

Never write a literal colour value (hex or rgba) that matches an existing token in
`docs.css`, in a `<style>` block or inline SVG. Reference the token instead:
`fill="var(--accent)"`, `color: var(--text-dim)`. This applies inside inline SVG
presentation attributes too, browsers resolve `var()` there the same as in CSS.
For a tint or wash of a token (a translucent version for a background or border),
use `color-mix(in srgb, var(--token) X%, transparent)` rather than hand-converting
the token to an `rgba()` triplet. A literal colour value is only acceptable when it's
genuinely one-off and doesn't correspond to any shared token (for example a
decorative syntax-highlight hue with no semantic meaning).

---

## JavaScript

`docs.js` is automatically linked by the template and handles:
- Mobile nav open/close
- Scroll-based active sidebar link

For article-specific interactivity (tabs, accordions, animations), add a second
`<script>` block after `<script src="docs.js"></script>`.

---

## The https-certificates.html exception

This article has a custom sticky browser-address-bar chrome element that mirrors
the topic (HTTPS). Its local `:root` override does **not** redeclare shared tokens
like `--bg`, `--text`, or `--accent`, those are inherited straight from `docs.css`.
It only adds what's genuinely unique to the chrome component: `--bg-soft` and
`--border-soft` for the layered chrome background, `--accent-soft` for one
decorative underline, and stronger 12% washes for the chrome's state indicators
(the shared washes are 8%, this component needed more contrast). If you're
tempted to add a local `:root` override to a new article, this is the pattern:
only the delta from the shared palette, never a full copy of it.

---

## index.html cards

Each article gets one card in `index.html`. Use an accent color not already taken.

```html
<article class="card COLOR">
  <div class="card-label">Category · Subcategory</div>
  <div class="card-title">Article Title</div>
  <p>One-sentence description matching the article subtitle.</p>
  <a class="card-link" href="FILENAME.html">Read →</a>
</article>
```

---

## Content standards

- Articles are **learning material, not reference documentation**. The goal is understanding, not completeness.
- Do not include exhaustive lists. A reader who needs a complete list can consult a spec.
- Standards and RFCs may be referenced by name or number when relevant, but should normally not be mentioned.
- Explain every concept before using it at least shortly. Assume the reader is technically capable but does not know the specific topic being taught.
- Code samples must be accurate for **2026 best practices**. Include examples where they aid understanding; not every section requires one. Examples should be short and focused - not complete working programs except in at the like an appendix.
- Prefer prose over bullet lists for explanations.
- Read time in the byline should be a realistic estimate (~200 wpm).

---

## Writing style: do not sound AI-generated

Articles must read as written by a knowledgeable human author, not generated text. Readers recognize AI writing by specific patterns; avoid all of them.

**Do not use em dashes.** The em dash (—) is the single most recognizable AI writing signal. Use a comma, colon, parenthesis, or rewrite the sentence instead.

- Instead of: "The server validates the token — checking the signature, expiry, and issuer."
- Write: "The server validates the token by checking the signature, expiry, and issuer."

**Avoid semi colons** Divide into separate sentences or use a regular comma instead.

**Don't overuse AI transition words and openers.** These appear constantly in generated text and immediately signal it: "Furthermore," "Moreover," "Additionally," "Notably," "Importantly," "It is worth noting that," "It's important to understand," "At its core," "In essence," "Fundamentally." Cut them or restructure the sentence. Some are OK, but not too often.

**Avoid filler adjectives.** Words like "comprehensive," "robust," "seamless," "powerful," and "straightforward" rarely add meaning. Cut them.

**Avoid AI idioms.** "Delve into," "leverage" (as a verb), "navigate" (used metaphorically), "unlock," "harness," "it's no secret that." These phrases appear in almost every AI-generated article.

**Vary sentence structure.** AI text tends toward uniformly medium-length sentences with parallel structure. Mix short punchy sentences with longer ones. Start sentences in different ways.

**Do not over-hedge.** Constructions like "While X is true, it is also important to consider Y" are characteristic of AI trying to appear balanced. Make a clear point instead.

