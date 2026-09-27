# Chatty marketing strategy

A full rework of how we position and tell the story of Chatty, based on an audit of this site against what the product (`boersmamarcel/chatty2`, v0.4.9) actually ships as of 2026-09-27.

## Executive summary

**Where we are.** The site was last changed on 2026-03-17 and says `v0.1.101`. The product is at `v0.4.9`, about 180 releases later. The site describes a desktop LLM client with tools. The product is now a local-first **agent workbench**: a terminal dock with the agent's own shared shell, a real Chrome the agent drives and you can take over, PDFs/charts/slides/SQL tables in an artifact panel, sub-agent teams on isolated git branches whose results Chatty verifies itself, AGENTS.md and SKILL.md support, and ACP so it runs inside Zed. None of that is on the site, and several things that *are* on the site are now false (six direct providers, JSON storage, the version, Linux packaging). → [`01-audit.md`](01-audit.md)

**The idea.** *Chatty is an AI agent that shows its work*: you can **see** every step, **steer** at any moment, results are **checked, not trusted**, it produces **real deliverables**, and it's **yours** (any model, your machine, open formats, MIT). → [`02-positioning.md`](02-positioning.md)

**Broader than engineers (update).** The market now has "AI coworkers" for everyone: Claude Cowork, Microsoft Copilot Cowork, ChatGPT Work. Chatty's broad position: *the AI coworker that works on your computer, not in someone else's cloud*, with no account, no subscription, any model, every step visible and finished files. Five new personas, seven new storylines, a broad homepage, an honest comparison page, and a list of product gaps that must close before targeting non-technical users. → [`07-broad-audience.md`](07-broad-audience.md)

**Who for (engineering lane).** Three primary personas: the developer who wants to watch the agent (Daan), the engineer whose code can't leave the building (Priya), and the analyst who needs the report, not the code (Sam). Four secondary: frontend, ops/terminal, AI builders, academics. → [`03-personas.md`](03-personas.md)

**How we tell it.** A library of 25 storylines (18 in the engineering lane, 7 for the broad audience), each one person and one task from start to finish, every beat tied to a shipped feature and its docs page. They feed the homepage, seven use-case pages, feature pages and a video library. → [`storylines/`](storylines/README.md)

**What we build.** A story-led homepage, `/for/*` persona pages, `/features/*` deep dives, a `/security` trust page and an auto-updating `/whats-new`, pre-rendered on the existing Vue stack, plus a system that stops the site going stale again. → [`04-website-plan.md`](04-website-plan.md), [`05-video-and-assets.md`](05-video-and-assets.md)

**When.** Phase 0 (1–2 days) fixes the false claims now. Phase 1 (2–3 weeks) ships the new homepage with six recorded storylines. Phase 2 adds depth. Phase 3 launches. Phase 4 waits for Hive and hosted Chatty to go public. → [`06-roadmap.md`](06-roadmap.md)

## Contents

| File | What's in it |
|---|---|
| [`01-audit.md`](01-audit.md) | Section-by-section review of the current site, a claim-by-claim accuracy check, everything shipped since March, storytelling gaps, safe vs. unsafe claims, open questions |
| [`02-positioning.md`](02-positioning.md) | Positioning statement, category, message house (5 pillars with proof points and docs links), competitive frame, voice, headline bank, proof still to create |
| [`03-personas.md`](03-personas.md) | 7 personas with triggers, jobs, pains, objections, what convinces them, entry points, channels |
| [`storylines/`](storylines/README.md) | 18 storylines (S00–S17), a coverage matrix and a template for new ones |
| [`04-website-plan.md`](04-website-plan.md) | Sitemap, homepage section by section with draft copy, page templates, trust page, SEO, tech approach, anti-staleness system, metrics |
| [`05-video-and-assets.md`](05-video-and-assets.md) | Video formats, production waves, recording standards, asset checklist, distribution |
| [`06-roadmap.md`](06-roadmap.md) | Phased plan with checklists, launch sequence, risks |
| [`07-broad-audience.md`](07-broad-audience.md) | **Broad audience**: AI-coworker market, where Chatty wins, capability check, product-readiness gaps G1–G8, audience rings, personas P8–P12, storylines S18–S24, broad homepage, comparison page, channels |
| [`08-decisions-and-proof.md`](08-decisions-and-proof.md) | Owner decisions (2026-09-27) and the proof program: which numbers to measure and how to publish them |
| [`founder-note-draft.md`](founder-note-draft.md) | Founder note, **draft awaiting approval** |

## Decisions

Taken 2026-09-27: keep the name · cookieless analytics yes · no waitlist, Hive/hosted stay off the homepage · publish real numbers (proof program) · founder note drafted for approval. Details: [`08-decisions-and-proof.md`](08-decisions-and-proof.md).

**Still open:** approve the [founder note draft](founder-note-draft.md) (fill in the bracketed specifics); custom domain before the launch push.

## Sources

- Product docs: `chatty2/docs-site/src/user/*.md` (published at `boersmamarcel.github.io/chatty2`)
- Product architecture notes: `chatty2/CLAUDE.md`
- Changelog: `chatty2` git history, v0.3.x–v0.4.9 (Aug–Sep 2026)
- Hive / hosted status: `hive/README.md`, `hive/services/chatty-server/README.md`, deploy workflows
