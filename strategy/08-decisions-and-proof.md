# 08 — Decisions and proof program

## Decisions (owner, 2026-09-27)

| # | Question | Decision | What it changes |
|---|---|---|---|
| 1 | Name | **Keep "Chatty."** For a broad audience the name is an asset: friendly, not technical. For search we target intent keywords rather than the brand (`04-website-plan.md` §5), and use a descriptor where context needs it: *"Chatty, the AI coworker on your computer"*. Hosting stays on GitHub Pages for now; revisit a custom domain before the paid/launch push (trust signal for Ring 2–3). | Nothing to rename |
| 2 | Analytics | **Yes, cookieless.** Use a privacy-friendly, no-cookie tool (Plausible, GoatCounter or similar), with no banner needed, and say on the privacy page which one and what it counts. It must not contradict "no telemetry": that claim is about the **app**; the site states its own analytics openly. | Phase 0 task; enables the metrics in `04-website-plan.md` §8 |
| 3 | Hive / hosted Chatty | **No waitlist yet.** Both stay off the homepage and out of CTAs until publicly usable. The broad audience also gets **no waitlist**: CTAs go to download + `/start` guided setup. | `07-broad-audience.md` §5, §8 updated |
| 4 | Proof points | **Yes, publish real numbers.** No publishable set exists yet beyond the reranker figures, so run the proof program below first. | New section below; Phase 1–2 tasks |
| 5 | Founder note | **Generate a draft for approval.** | `founder-note-draft.md`; **needs the owner's approval and personal details before publishing** |

## Proof program

The rule stays: **no number on the site that we didn't measure, and every number is published with how it was measured** (a short "How we measured" page, linked from each figure).

### What exists today (publishable now)
| Number | Source | How to phrase it |
|---|---|---|
| Keyless search reranker: right page in the top 5 **48% → 57%**, at the top **27% → 49%**, ~+1 s/search | chatty2 user docs, retrieval eval (AGE-515–517, AGE-521) | "In our evaluation…" with a link |
| Team smoke test: coder + reviewer team on a 14B local model fixes and merges a bug in **~3 minutes**; **2 of 3** consecutive runs passed | `docs/team-smoke-test.md` (chatty2), 2026-09-14 | Only in a technical context (`/features/teams`), with the pass rate; it's a smoke test, not a benchmark. Don't headline it |

### What to measure (ranked by value for the broad audience)

| # | Proof | Method | Output on the site | Serves |
|---|---|---|---|---|
| 1 | **"What real tasks cost"** | Run each broad storyline (S04, S18, S19, S21, S22, S23) 5× on 2–3 models (a frontier model via OpenRouter, a budget model, a local model). Record cost from the sidebar / `--usage-file`, time, and success (a human checks the output) | A table: *task → typical cost per run → time*, e.g. "turn 3 spreadsheets into a report and deck: €0.0X–0.X". This backs "pay per task, not per month" | Broad pillar "pay per task"; P8, P10, P12 |
| 2 | **A day of real work** | Owner logs one normal working day (sidebar cost + usage files) | "A full working day with Chatty cost me €X on model Y" in the founder note / blog | S09, founder credibility |
| 3 | **Team verification catches bad work** | Extend the team smoke test to ~20 small tasks × 3 runs; count reviewer `REQUEST CHANGES` / failed verification that led to a correct second attempt | "In N tasks, the reviewer or the verification step caught K fixes that would have shipped broken" | Pillar "checked, not trusted"; P1, P6 |
| 4 | **Coding benchmark** (optional) | Harbor harness (`harbor-chatty`) on a public benchmark, reported with model, date and full config | A dated results page; no "beats X" headline | Engineers (Ring 1) |
| 5 | **Local-model recommendations** | The storyline tasks above on 3–5 popular Ollama models | "Works best with…" list for `/for/private-ai` and `/start` | P2, P9, S05, S19 |

**Publishing checklist for every number:** date, Chatty version, model(s) and provider, task definition (in `chatty-demos`), number of runs, how success was judged, raw data link. Re-run on major releases; stale numbers are removed, not left up.
