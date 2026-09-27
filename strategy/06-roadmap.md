# 06 — Roadmap

Four phases. Phase 0 is urgent because the live site currently says untrue things.

## Phase 0: Stop the bleeding (1–2 days)
Goal: nothing on the live site is false. No redesign yet.

- [ ] Replace the 6-provider claims everywhere (hero, features, pricing, FAQ, footer, meta tags, README) with **OpenRouter · Azure OpenAI · Ollama · any OpenAI-compatible server**. Drop model version names.
- [ ] Remove the hard-coded `v0.1.101`; fetch the latest release at build time or remove the version.
- [ ] Fix FAQ: SQLite (not JSON); Linux = AppImage; `chatty-tui` is a terminal app (not GPUI); three ways in (desktop, terminal, editor).
- [ ] Soften "semantic search surfaces…" to match memory's real default (full-text; semantic optional).
- [ ] Swap stale GIFs for chatty2's current `artifact_*.gif` and `pr_status_bar.gif` where they fit.
- [ ] Add one "New since spring" strip under the hero: terminal dock with a shared Agent tab · real browser the agent drives · PDFs, charts & slides · agent teams with verified results · runs in Zed.
- [ ] Delete unused template components and images; fix `package.json` metadata.
- [x] Owner decisions: taken 2026-09-27, see `08-decisions-and-proof.md`.
- [ ] Add cookieless analytics (approved) and a one-line note about it on the privacy page.

**Done when:** every row in the audit's §2 table marked 🔴/🟠 is fixed.

## Phase 1: The new homepage (2–3 weeks)
Goal: the homepage tells the story in `04-website-plan.md` §3.

- [ ] Add `vue-router` + `vite-ssg`; `src/data/product.ts`; build-time release fetch; daily rebuild + `repository_dispatch` from chatty2 releases.
- [ ] Record Wave 1 (S01, S02, S03, S04, S05, S17) → loops + social cuts; edit S00.
- [ ] Build homepage sections 3.1–3.13.
- [ ] `/download` page (OS detection, CLI quickstart, FUSE note, onboarding video).
- [ ] `/security` trust page (P2 needs it before anything else).
- [ ] Founder note: draft in `founder-note-draft.md`; owner fills in the placeholders and approves.
- [ ] Baseline week of analytics.

**Done when:** the homepage ships, every section has a real clip, and there's a week of baseline metrics.

### Broad-audience additions to Phase 1 (from `07-broad-audience.md`)
- [ ] Homepage built in the broad order (§8), with the developer band.
- [ ] `/start` guided setup page + 3-minute non-technical setup video.
- [ ] Record S23, S19, S21 (broad Wave 1) alongside S01/S04/S05.
- [ ] Proof program item 1 ("what real tasks cost") → cost table for the "pay per task" section.

## Product readiness track (runs in parallel; owned by chatty2, not this site)
Gaps G1–G8 in `07-broad-audience.md` §4. Ring-3-targeted campaigns (small business, general office workers) start only after **G1 (no-key setup)** and **G2 (plain folder setup)** ship; connector storylines (S11, S24) wait for **G3**.

## Phase 2: Depth (3–4 weeks)
Goal: every persona has a page and every major feature has a home.

- [ ] Use-case pages: `/for/consultants`, `/for/developers`, `/for/public-sector` (+ private-ai angle), `/for/analysts`, `/for/finance` first; then `/for/marketing`, `/for/frontend`, `/for/automation`; `/for/small-business` when G1/G2 ship.
- [ ] `/compare/ai-coworkers` (moved up from Phase 3).
- [ ] Proof program items 2, 3, 5 (`08-decisions-and-proof.md`).
- [ ] Feature pages: terminal, browser, artifacts, teams, models, editor, terminal-app.
- [ ] Record Wave 2 (S06–S10, S13, S15) + walkthroughs for S02/S04/S05.
- [ ] `/whats-new` from GitHub Releases with `highlight`-labelled PRs.
- [ ] Claims ledger (`strategy/claims.md`) + `marketing-drift.yml` in chatty2.
- [ ] `chatty-demos` repo with the storyline datasets/repos.

## Phase 3: Launch and long tail (ongoing)
- [ ] Launch sequence (below).
- [ ] `/for/ai-builders`, `/for/research`, `/features/skills-and-memory`, `/features/extensions`.
- [ ] Wave 3 videos + tutorial videos.
- [ ] `/compare/*` pages, only those we can keep accurate.
- [ ] Publish one "checked" number (team smoke test results) and one "cost" number (a real day of work).
- [ ] Collect first user quotes; add them (real ones only).

## Phase 4: When the platform is public
- [ ] Hive marketplace page (when there's a public registry URL and a seeded catalogue).
- [ ] Hosted Chatty / "take it online" page and waitlist (when `chatty-server`/`chatty-web` are deployed).
- [ ] Revisit positioning: "local-first" stays the foundation; "and in the cloud when you want" becomes a pillar extension, not a replacement.

## Launch sequence (after Phase 1, ideally with Phase 2's first three use-case pages)

| Day | Channel | Lead asset | Angle |
|---|---|---|---|
| D0 | Show HN | S00 film + S01 | "An open-source agent you can watch: a shared terminal, a real browser, verified sub-agents, any model" |
| D0 | r/LocalLLaMA | S02 + S05 | "Agent teams on a 14B local model, where the harness re-runs the tests" |
| D1 | Zed community | S07 | "Chatty as an ACP agent in Zed" |
| D2 | LinkedIn | S04 | "Spreadsheets → PDF + slides, locally" |
| D3 | Product Hunt | S00 | General |
| D7 | Blog | S09 "What a day of agent work cost me" | Transparency |
| D14 | Blog | S08 recipes | Automation |

Each post links to the matching `/for/*` page, not just the homepage.

## Risks

| Risk | Mitigation |
|---|---|
| Product ships faster than the site (again) | §7 anti-staleness system; facts file; drift workflow |
| Local-model demos fail on camera | Pick tested models; the verification story makes failure part of the pitch (S02) |
| Over-claiming safety | Every safety claim links to `/security` with its limits (Windows, bubblewrap dependency) |
| "Chatty" is hard to search for | Target intent keywords (§5 of the website plan); consider a descriptor ("Chatty Agent") or a rename (owner decision) |
| Comparisons go stale or read as attacks | Dated, sourced, "when to pick them instead"; Phase 3 only |
