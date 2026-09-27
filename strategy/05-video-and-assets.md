# 05 — Video and asset production

The storyline library becomes a **video library** in four formats. Nothing here needs a studio: screen recordings, captions and a clean edit.

## 1. Formats

| Format | Length | Where | Sound | Built from |
|---|---|---|---|---|
| **Loop** | 8–15 s, no cuts or 1–2 | Homepage blocks, feature pages, README | None | One beat, the storyline's "aha" |
| **Social cut** | 45–60 s | Homepage/use-case hero, X/Bluesky, LinkedIn, Reddit, YouTube Shorts | Captions burned in; optional VO | Storyline "Script sketch (60s)" |
| **Walkthrough** | 2–4 min | Use-case pages, YouTube, launch posts | VO + captions | Full storyline table |
| **Tutorial** | 10–25 min | Docs, YouTube | VO | The docs tutorials (named worker, team, WASM module) |
| **Brand film** | 90 s | Homepage hero, launch | Music + captions | S00 (an edit of other shoots) |

## 2. Production order

| Wave | Storylines | Output | Unblocks |
|---|---|---|---|
| **1** (Phase 1) | S01, S04, S02, S03, S05, S17 | 6 social cuts + 8 loops + S00 film edited from them | New homepage |
| **2** (Phase 2) | S06, S07, S08, S09, S10, S13, S15 | 7 social cuts + loops; 3 walkthroughs (S02, S04, S05) | Use-case & feature pages |
| **3** (Phase 3) | S11, S12, S14, S16 + tutorials | Remaining cuts; tutorial videos | Long tail, AI-builder audience |

## 3. Recording standards

- **Real sessions.** Record the actual run; cut dead time; label any speed-up ("2×"). Never re-type output or stage an error the model didn't make.
- **Resolution:** 2560×1600 capture, exported 1920×1080 (16:9) plus a 1080×1350 (4:5) crop for social. Window at a fixed size for the whole library.
- **Legibility:** app font size ≥ 16, terminal font ≥ 16; hide unrelated sidebar conversations (use a clean profile).
- **Theme:** one light and one dark theme chosen once for the whole library (e.g. a Catppuccin variant). Light for LinkedIn/homepage, dark for developer channels.
- **Always visible:** model name, per-reply cost, at least one control moment (approval, share, take-control).
- **Data:** synthetic but realistic repos/datasets, published in a `chatty-demos` repo so anyone can replay the storyline.
- **Captions:** every video; the site autoplays muted.
- **Clean profile:** no real API keys, emails, paths with names, or client data on screen. Blur the key field in S17.
- **OS:** Linux or macOS. Avoid Windows for terminal/sandbox storylines (no sandbox, no password-prompt detection).

## 4. Tooling we already have

- chatty2 has **animation recording infrastructure** for README/docs GIFs (PR #590, `assets/animations/`) and a **desktop-screenshot skill** (Xvfb + synthetic input). Use them for the loops, since they're scriptable and repeatable when the UI changes.
- Existing, still-accurate media in chatty2 to reuse right away (Phase 0 stop-gap): `artifact_pdf.gif`, `artifact_chart.gif`, `artifact_table.gif`, `artifact_markdown.gif`, `pr_status_bar.gif`, `hero.gif` (check it matches the current UI).
- The site's `public/*.gif` from March are **outdated UI**; retire them as soon as new loops exist.

## 5. Asset checklist (Wave 1)

| Asset | Storyline | Format | Status |
|---|---|---|---|
| Share tab → ask → Agent tab runs tests | S01 | Loop + social | ☐ |
| Evidence block `exit 0` → reviewer `APPROVE` | S02 | Loop + social + walkthrough | ☐ |
| Browser screenshot → critique → fix → re-check | S03 | Loop + social | ☐ |
| Table + SQL tab → chart → PDF → PPTX slides | S04 | Loop ×2 + social + walkthrough | ☐ |
| One-command local agent + sandbox + trust page | S05 | Social + walkthrough | ☐ |
| Download → key → first result → workspace | S17 | 2-min onboarding | ☐ |
| 90s brand film | S00 | Film | ☐ (after the above) |
| Poster frames + OG images for every page | all | Stills | ☐ |
| Founder photo + note | — | Still + text | ☐ (owner) |

## 6. Distribution plan per video

| Video | First channel | Then |
|---|---|---|
| S00 film | Homepage + launch post (Show HN / Product Hunt) | YouTube, pinned post |
| S01 | Show HN comment thread, r/programming, X/Bluesky | `/for/developers` |
| S02 | r/LocalLLaMA ("a 14B local model, but the tests are re-run by the harness"), Lobsters | `/features/teams`, talk |
| S03 | Frontend Twitter/Bluesky, dev.to | `/for/frontend` |
| S04 | LinkedIn | `/for/analysts` |
| S05 | r/LocalLLaMA, r/selfhosted, LinkedIn | `/for/private-ai`, `/security` |
| S07 | Zed community / Discord | `/features/editor` |
| S08 | r/devops, r/commandline, blog | `/for/automation` |
