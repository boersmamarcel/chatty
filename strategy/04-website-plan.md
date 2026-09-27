# 04 — Website plan

From a single template landing page to a small, story-led site: **one homepage that tells the story, persona pages that prove it for a specific reader, feature pages that go deep, and a trust page.** All built from the storyline library.

## 1. Principles

1. **Story before features.** Every page opens with a person and a task (a storyline), then shows the features that made it work.
2. **Every claim links to proof**: a clip, a docs page, or the source. The docs site (`boersmamarcel.github.io/chatty2`) is our strongest asset; link into it constantly.
3. **Real recordings only.** No mock-ups of the UI.
4. **Never stale again.** Version, providers, platforms and the "what's new" feed come from one data file and the GitHub API at build time (see §7).
5. **Practise what we preach**: no third-party trackers, no cookie banner, fast static pages.

## 2. Information architecture

```
/                               Home: the story (S00 → S01/S04/S05 → proof → CTA)
/download                       OS-detected download, CLI quickstart, FUSE note, S17 onboarding video
/for/                           Use-case hub (cards per persona)
  /for/developers               P1: S01, S02, S06, S07, S13
  /for/private-ai               P2: S05, S08, S09 (+ link to /security)
  /for/analysts                 P3: S04, S15, S11
  /for/frontend                 P4: S03, S13
  /for/automation               P5: S08, S01 (tmux variant), recipes
  /for/ai-builders              P6: S02, S14, S16, S09
  /for/research                 P7: S10, S12
/features/                      Feature hub (grid, grouped by pillar)
  /features/terminal            dock, Agent tab, sharing, terminal_run, context chip, tmux
  /features/browser             live Chrome, self-review, take control, safety model
  /features/artifacts           PDF, charts, tables/SQL, PPTX, Markdown, file explorer
  /features/teams               sub-agents, worktrees, roles, evidence, teams
  /features/models              OpenRouter, Azure/Entra, Ollama, OpenAI-compatible, cost
  /features/editor              ACP: Zed, VS Code/Cursor/Windsurf
  /features/terminal-app        chatty-tui: interactive, headless, pipe, usage file
  /features/skills-and-memory   AGENTS.md, SKILL.md, memory
  /features/extensions          MCP catalog, custom MCP, WASM modules (Hive: "coming")
/security                       Trust page: data locations, network destinations, sandbox, approvals, secrets, limits
/compare/                       (Phase 3) honest comparison pages
/whats-new                      Auto-generated from GitHub Releases, grouped by month, with highlights
/stories/                       (optional) the storyline videos as a gallery
→ Docs                          external link to the mdBook docs site
→ GitHub                        external
```

**Top nav (5 items max):** Use cases ▾ · Features ▾ · Security · Docs ↗ · **Download** (button). GitHub star count on the right.

## 3. Homepage, section by section

> **Superseded for section order and hero copy by [`07-broad-audience.md`](07-broad-audience.md) §8** (broad audience first, developers as a lane). The section specs below still apply to the developer band and `/for/developers`, and their media and copy are reused there.

Each block lists its **job**, **copy draft**, **media** and the **storyline** it comes from. The copy is a first draft; the tone rules are in `02-positioning.md` §6.

### 3.1 Hero
- **Job:** Say what Chatty is, for whom, and why it's different, in five seconds.
- **Eyebrow:** `Free & open source · v{latest}` (version fetched at build)
- **H1:** **The AI agent that shows its work.**
- **Sub:** Chatty does real work on your machine (code, data, documents, the web) in a terminal you can watch, a browser you can take over, and with results it checks before calling them done. Use any model, including local ones.
- **CTAs:** `Download for {detected OS}` (primary) · `Try it in your terminal` (copies `chatty-tui --ollama`; shows install note) · small link: *Watch the 90-second film*
- **Media:** S00 film, autoplay muted, captions, poster frame = the Agent tab mid-command.
- **Under the fold line:** `macOS · Linux · Windows | Works with OpenRouter, Azure OpenAI, Ollama and any OpenAI-compatible server`

### 3.2 "See everything": S01
- **H2:** Why did that fail? Just ask.
- **Body:** S01 web copy.
- **Media:** 15s loop: share tab → ask → Agent tab running tests.
- **Link:** `/features/terminal`

### 3.3 "Checked, not trusted": S02 + S03 (two-up)
- **H2:** "Tests pass." Checked, not trusted.
- Left card: **Agent teams with evidence** (S02 loop: evidence block `exit 0`, `APPROVE`).
- Right card: **It looks at what it built** (S03 loop: screenshot → fix → re-check).
- **Link:** `/features/teams`, `/features/browser`

### 3.4 "Real deliverables": S04
- **H2:** Ask for the report. Get the PDF.
- **Media:** Carousel of real artifacts: table + SQL tab, chart, PDF, PPTX slides, Markdown + Mermaid. The existing `artifact_*.gif`s from chatty2 work as a stop-gap.
- **Link:** `/for/analysts`, `/features/artifacts`

### 3.5 "Steer anytime": S13 + approvals
- **H2:** Hand it the task. Keep the wheel.
- Three small tiles: **Approval modes** (Always Ask / Sandboxed / All) · **Take over the browser** · **Talk while it works** (queue, interrupt, it asks you).
- **Link:** `/security`

### 3.6 "Yours": S05 + S09
- **H2:** Your model. Your machine. Your rules.
- **Body:** Local storage, no telemetry, sandbox, secrets, MIT.
- **Provider strip:** OpenRouter · Azure OpenAI · Ollama · vLLM · llama.cpp · LM Studio (text logos or wordmarks, only where brand guidelines allow; otherwise plain text).
- **Link:** `/for/private-ai`, `/security`

### 3.7 "Everywhere you work"
- **H2:** One agent. Desktop, terminal, and your editor.
- Three columns with a small screenshot each: **Desktop app** · **`chatty-tui`** (interactive / headless / pipe) · **Your editor** (Zed via ACP).
- Code snippet: `git diff | chatty-tui --pipe`.
- **Link:** `/features/terminal-app`, `/features/editor`

### 3.8 "Bring what you have"
- **H2:** Your AGENTS.md, your skills, your tools.
- Logos/text: AGENTS.md · CLAUDE.md · SKILL.md · MCP · Google (once verified) · Hugging Face. Add Notion and Jira/Confluence only after they connect without a bridge (see `07-broad-audience.md` G3).
- **Link:** `/features/skills-and-memory`, `/features/extensions`

### 3.9 Use-case chooser
- **H2:** What will you hand it first?
- Seven cards → `/for/*` (persona-free titles: *Fix and ship code*, *Keep AI inside your company*, *Turn data into reports*, *Build UIs it can see*, *Automate in scripts & CI*, *Build agent teams*, *Research & write*).

### 3.10 Founder note
- **H2:** Why Chatty exists
- 80–120 words, first person, signed, with a photo optional: what problem you had, how you use Chatty every day, what "shows its work" means to you. (Needs the owner's own words; do not ghostwrite beyond a draft.)

### 3.11 What's new
- Last 3 highlights from `/whats-new` (auto). Shows the project is alive; this replaces the stale version badge problem permanently.

### 3.12 FAQ (rewritten, 8 questions)
1. What makes Chatty an agent and not a chat app?
2. Which models can I use? *(OpenRouter / Azure / Ollama / OpenAI-compatible; no version lists)*
3. Is it free? What does it cost to run? *(free & MIT; you pay your model provider; per-message cost shown; local = €0)*
4. Where does my data go? *(link /security; precise sentence from S05 claims check)*
5. Can it mess up my computer? *(workspace boundary, sandbox, approval modes, Windows caveat)*
6. Does it work with my editor / terminal / CI? *(ACP, chatty-tui, headless)*
7. I already use Claude Code / Cursor. Why would I switch, or can I use both? *(S06: your AGENTS.md and skills carry over; use both)*
8. How good is it with local models? *(honest: depends on the model; roles and verification help; tested list)*

### 3.13 Final CTA
- **H2:** See what your agent is doing.
- `Download` · `Read the docs` · `Star on GitHub`

**Removed from today's page:** the 12-card feature grid (moves to `/features`), the Pricing section (free fits in one line in the hero and the FAQ), "GPU-accelerated" as a headline benefit (becomes a footnote in 3.7), "20+ themes" and "auto-updates" as top-level features (they move to `/features`).

## 4. Page templates

### 4.1 Use-case page (`/for/*`)
1. **Hero:** persona-language headline + sub (from the storyline's web copy) + the storyline's 60s video.
2. **"Sound familiar?"**: the *Before* quote(s), 2–3 pains.
3. **Walkthrough:** the storyline's beats as a vertical scroll-story: short caption + clip/screenshot per beat, each linked to its docs page.
4. **Also for you:** 2 more storylines as cards.
5. **Objections, answered:** from the persona's *Objections* list, 3–5 Q&As.
6. **Get started for this use case:** the persona's *Entry point*, as copyable steps.
7. CTA.

### 4.2 Feature page (`/features/*`)
1. What it is (one line) + hero clip.
2. How it works (3–5 steps with screenshots).
3. **Control & safety** for this feature (every feature page has one; it reinforces the Steer pillar).
4. Limits, stated plainly (lifted from the docs' own honest notes).
5. Storylines that use it.
6. Docs link.

### 4.3 `/security` (trust page)
- **What stays on your machine** (table from `user/advanced.md#where-chatty-stores-data`).
- **Every network destination** (providers you configure, MCP servers/agents you add, sites you ask for, GitHub for update checks, optional Chrome for Testing download). "No telemetry, no relay."
- **What the agent can touch**: workspace boundary, sandbox per OS (**incl. Windows: none**), network isolation, approval modes table.
- **Secrets, provider keys, MCP keys**: never shown to the model.
- **Browser & web**: localhost default, SSRF guard, no password/card typing, off-localhost clicks always ask, prompt-injection framing.
- **Your terminals**: per-tab sharing, `terminal_run` always asks, password prompts not read.
- **Updates**: SHA-256 verified.
- **Open source**: MIT, link to the code and to how to report a vulnerability (add a `SECURITY.md` to chatty2 if missing).
- Printable/PDF version for security reviewers (P2).

### 4.4 `/compare/*` (Phase 3)
Honest, dated ("Checked on …"), with a *"When to pick them instead"* section on every page. Candidates: Claude Code, Cursor, ChatGPT desktop, LM Studio / Open WebUI, Goose. Every competitor claim needs a source link and a re-check date. Skip any page we can't keep accurate.

## 5. SEO and sharing

- Per-page `<title>`, description and Open Graph image (auto-generated card: page headline + a frame from its clip).
- Target search intents (not brand terms, since "Chatty" is too generic to rank for):
  - "open source AI agent desktop", "local AI agent", "AI agent Ollama", "Azure OpenAI agent desktop", "Claude Code alternative open source", "ACP agent Zed", "AI agent that can use a browser", "AI for Excel to PowerPoint", "run AI agent in CI"
- `llms.txt` on the marketing site pointing at the docs' `llms-full.txt` (the docs already publish one), so AI search answers describe Chatty correctly.
- Structured data: `SoftwareApplication` with `offers.price = 0`, OS list, version.
- Clips as MP4/WebM with poster frames, not multi-MB GIFs (current hero GIF is heavy and hurts LCP). Keep GIFs only for README/GitHub.

## 6. Technical approach

**Today:** Vue 3 + Vite SPA, shadcn-vue, one page, deployed to GitHub Pages under `/chatty/`.

**Recommendation: keep Vue + the shadcn-vue components, add `vue-router` + `vite-ssg`** so every route is pre-rendered to static HTML (SEO, fast first paint, still GitHub Pages).
- Storylines and use-case/feature pages as **content files** (Markdown with frontmatter, or typed TS data) rendered by 3–4 templates, so adding a page is writing content, not code.
- Single `src/data/product.ts` for facts that change: providers, platforms, formats, headline numbers.
- Build-time fetch of the latest GitHub release (version, date, notes) for the hero badge and `/whats-new`; scheduled rebuild daily and on every chatty2 release (`repository_dispatch` from chatty2's release workflow).

*Alternative considered:* Astro (content collections, islands; very good for this). It's better in the abstract, but it means rewriting the existing components, and "don't rewrite what works" applies to the site too. Revisit if the Vue approach gets in the way.

**Cleanup (Phase 0):**
- Delete unused template components (`Team`, `Testimonials`, `Sponsors`, `Services`, `Contact`) and template images (`pacheco.png`, `roboto.png`, `runner.png`, `gamestation.png`, `demo-img.jpg`, `vite.svg`, `vue.svg`).
- Fix `package.json` description/keywords.
- Replace heavy GIFs with MP4/WebM.
- Add cookieless analytics (Plausible, GoatCounter or similar), pending owner approval, to measure §8.

## 7. Keeping the site true (the anti-staleness system)

The site went stale because nothing connected it to the product. Four mechanisms:

1. **Facts file + build-time version**: covered above. The version can never be stale again.
2. **Claims ledger** (`strategy/claims.md`, a later step): every factual claim on the site, the docs page that backs it, and the date last verified. Reviewed monthly.
3. **Marketing-drift workflow**: chatty2 already runs Claude workflows that update user docs and `CLAUDE.md` on every merged PR (`update-readme.yml`, `update-agent-docs.yml`). Add a third, `marketing-drift.yml`, that on each merged PR checks the diff against the claims ledger and opens an issue on `boersmamarcel/chatty` when a claim may be affected, or when a user-facing feature lands with no storyline or feature page.
4. **Release-note highlights**: tag PRs with `highlight` in chatty2; `/whats-new` shows those prominently and everything else collapsed.

## 8. Success metrics

| Metric | Why | Target (first 90 days after relaunch) |
|---|---|---|
| Download clicks / unique visitors | Primary conversion | Establish baseline in week 1, then +50% |
| `chatty-tui --ollama` copy clicks | Low-friction trial | Track |
| Use-case page → download rate | Do stories convert? | Higher than homepage average |
| Video completion (60s cuts) | Are storylines landing? | > 40% |
| GitHub stars/week, release download counts (GitHub API) | Outcome proxy | Track trend |
| Docs "Getting started" visits from site | Intent | Track |
| Qualitative: issues/discussions mentioning a storyline | Resonance | Collect quotes for the site |
