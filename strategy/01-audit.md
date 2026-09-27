# 01 — Audit: the marketing site vs. the product

**Snapshot date:** 2026-09-27
**Site audited:** `boersmamarcel/chatty` @ `6f05ee3` (last content change 2026-03-17), deployed to `boersmamarcel.github.io/chatty/`
**Product audited:** `boersmamarcel/chatty2` @ `v0.4.9` (2026-09-27), its user docs (`docs-site/src/user/*`) and its `CLAUDE.md`; plus `boersmamarcel/hive` for Hive and hosted chatty.

## TL;DR

The site describes a **March 2026 "desktop LLM client with tools"** (`v0.1.101`). The product is now a **v0.4.9 local-first agent workbench** — three front ends (desktop, terminal, editor via ACP), a real browser the agent drives, a shared terminal, a file explorer and artifact panel, sub-agent teams on isolated git branches with runner-verified evidence, skills in the cross-tool `SKILL.md` format, AGENTS.md support, and an extension marketplace (Hive).

Roughly **six months and ~180 release tags** of shipped work are invisible. Worse, several things the site *does* say are now **false**. And the site never tells a story: it is a feature grid inherited from a landing-page template, aimed at nobody in particular.

Three kinds of problem, in priority order:

1. **Wrong** — claims a visitor can check and find untrue (providers, storage format, version, platform formats). These cost trust. Fix first.
2. **Missing** — the features that make Chatty different today are not on the page at all.
3. **Shapeless** — no persona, no problem statement, no "before → after", no proof, no path from "interesting" to "I'll try it on *my* work".

---

## 1. What is on the page today

Rendered order (`src/App.vue`): `Navbar → Hero → Features → Demos → Benefits → HowItWorks → Pricing → FAQ → Community → Footer`.

| Section | What it says | Verdict |
|---|---|---|
| **Navbar** | Features · Benefits · How It Works · FAQ, GitHub link, theme toggle | Anchors only; no use cases, docs, download, or changelog link |
| **Hero** | "Your personal **AI agent** for the desktop". "GPU-accelerated and privacy-first… powered by Claude, GPT-5, Gemini 3, Mistral, and local models. Available as a desktop UI and a terminal interface." `v0.1.101`. `hero_high_quality.gif` | Headline is generic (could be any of 50 apps). Version is 180 releases stale. Leads with *how it's built* (GPU) rather than *what it does for you* |
| **Features** (12 cards) | Multi-provider · Rich rendering · Cost tracking · Tool use & MCP · 20+ themes · Privacy · Thinking & traces · Training export · Auto-updates · Memory · Terminal interface · Env secrets | Flat grid, equal weight: *themes* and *auto-updates* sit beside *agent memory*. Several claims outdated (see §2) |
| **Demos** (9 GIFs) | Mermaid · LaTeX · file tools · shell · token tracking · MCP · code highlighting · web fetch · internet settings | All GIFs date from ≤ March. Four of nine are *rendering* demos. No artifact, browser, terminal, sub-agent, or editor demo |
| **Benefits** (3) | GPU-accelerated UI · Open source & free · Two interfaces, one agent | "Why developers choose Chatty" — but only one of three is a user benefit |
| **HowItWorks** (3 steps) | Download · Add API keys · "Unleash your agent" | Step 2 is outdated (keys → providers & roster); step 3 is a slogan, not a step |
| **Pricing** | "Free. Forever. Open Source." Checklist incl. "All 6 AI providers", "100+ models" | Provider list wrong; a pricing section for a free product spends a full screen saying "free" |
| **FAQ** (6) | Agent vs chat · providers · free? · privacy · chatty-tui · platforms | Two answers contain factual errors (providers, "stored locally in JSON files") |
| **Community** | Star on GitHub · report issue | Fine, but it's the last thing before the footer and the only CTA besides download |
| **Footer** | Project · Platforms · **Providers: OpenAI, Anthropic, Google Gemini, Ollama** | Provider list wrong |

**Template leftovers** (imported nowhere, but shipped in the repo): `Team.vue`, `Testimonials.vue`, `Sponsors.vue`, `Services.vue`, `Contact.vue`, `pacheco.png`, `roboto.png`, `runner.png`, `gamestation.png`, `demo-img.jpg`. `package.json` still carries template keywords (`"template"`, `"landing-page"`, `"shadcn"`) and the description "native desktop LLM client".

**Structural limits:** single page, no router, no per-page `<title>`/OG tags, so use-case pages and shareable deep links are impossible today. No analytics, so we can't measure anything we change.

---

## 2. Claim-by-claim accuracy check

| # | Where | Site claim | Product reality (v0.4.9) | Severity |
|---|---|---|---|---|
| 1 | Hero, Pricing, FAQ, Features, Footer, README | **6 providers**: OpenAI, Anthropic, Google Gemini, Mistral, Azure OpenAI, Ollama — "switch… with a single click" | **3 provider types**: **OpenRouter** (one key → Claude, GPT, Gemini, Mistral, Llama, Qwen… with catalogue pricing), **Azure OpenAI** (key or Entra ID), **Ollama** (auto-discovered, per-model vision detection). Plus, in the terminal app, **any OpenAI-compatible server** (vLLM, llama.cpp, LM Studio) via `--openai-compat-url`. Direct OpenAI/Anthropic/Gemini/Mistral clients were removed. | 🔴 Wrong — first thing an evaluator tests |
| 2 | FAQ "providers" | Named model versions (GPT-5.2, Claude Opus 4.6, Gemini 3…) | Model list comes from the live OpenRouter catalogue; naming versions on the site guarantees it goes stale | 🟠 Drop version names |
| 3 | Hero | `v0.1.101` | `v0.4.9` | 🔴 Signals "abandoned" |
| 4 | FAQ "privacy" | "Conversations are stored locally in **JSON files**" | Local **SQLite** (`conversations.db`); memory in a local `memory.mv2`; settings as JSON | 🟠 Wrong detail |
| 5 | FAQ "privacy" | "MCP servers are disabled by default" | Still broadly true (catalog entries ship disabled), but the bigger story is now the **approval modes**, the **workspace boundary**, **per-tab terminal sharing**, browser **Lane A** default and **prompt-injection framing** | 🟡 Undersells |
| 6 | Features "Tool Use & MCP" | "Runs… custom MCP servers" | Chatty **connects to** MCP servers you run; it does not launch them. Also: a built-in catalog (Hugging Face, Notion, Atlassian, Google Calendar/Gmail/Drive) and the Hive marketplace | 🟡 Imprecise |
| 7 | Features, Benefits, FAQ | "**Two** interfaces" | **Three** ways in: desktop, `chatty-tui` (interactive/headless/pipe), and **your editor** via `chatty-tui acp` (Zed native; VS Code/Cursor/Windsurf via ACP extension) | 🟠 Undersells |
| 8 | FAQ "platforms" | Linux ships as binary / `.tar.gz`; "Both the desktop UI and the terminal interface are… built with the same GPU-accelerated GPUI framework" | Linux ships as **AppImage** (needs FUSE 2). The terminal app is **Ratatui**, not GPUI | 🟠 Wrong |
| 9 | HowItWorks step 1 | "No package manager required, just run the binary. chatty-tui ships in the same archive" | True-ish; the CLI is now installed **from the desktop app** (Install CLI…) | 🟡 Update |
| 10 | HowItWorks step 2 | "Open Settings and add API keys" | Settings → **Models & Providers**: Manage keys → Test → Add model from catalogue. Ollama needs no key | 🟡 Update |
| 11 | Features "Rich rendering" | Markdown, code, LaTeX, 23 Mermaid types, image & PDF previews | All still true, plus: **artifact panel** (PDF, charts, SQL tables, Markdown with Mermaid, **real PowerPoint slide rendering**), editable Source tab, file explorer, Cmd/Ctrl+P | 🟡 Undersells |
| 12 | Features "Agent memory" | "Semantic search surfaces the most relevant memories before each response" | Memory is on by default with **full-text** recall; **semantic** search needs an embedding provider | 🟡 Overstated |
| 13 | Features "Auto-updates" | "SHA-256 verification and automatic relaunch" | True | ✅ |
| 14 | Features "Training data export" | ATIF / JSONL (SFT & DPO) | True; ATIF follows the Harbor trajectory format | ✅ |
| 15 | Features "Env secrets" | Names visible, values never | True | ✅ |
| 16 | Features "Privacy first" | "No telemetry, no cloud storage" | True ("No telemetry, no relay"). Note: the optional **Take online** (hosted conversations) is developer-flagged and should not contradict this claim when it ships | ✅ keep, watch |
| 17 | Features "Thinking & traces" | Collapsible thinking, tool traces with duration/status | True, and now much richer: **diffs** for edits, a live **To-dos** plan card with pinned "Plan N of M" strip, folded activity lines, run progress indicator | 🟡 Undersells |
| 18 | Benefits | "Built with GPUI — the same framework powering Zed" | True; keep as a *supporting* proof point, not a headline benefit | ✅ demote |
| 19 | Meta description | "…browse the web, and execute code — powered by Claude, GPT-5, Gemini, Mistral" | Web browsing is now a **real Chrome** the agent drives and you can take over; model list should say "via OpenRouter, Azure or local models" | 🟠 Update |
| 20 | Pricing checklist | "100+ supported models" | OpenRouter alone lists hundreds; plus any local model. Say "hundreds via OpenRouter, any model via Ollama or an OpenAI-compatible server" | 🟡 |

---

## 3. What shipped and isn't on the site at all

Grouped by the *job* it does for a user, not by crate. "Since" is approximate from the changelog.

### A. The agent now works *with you*, in your environment
| Capability | Since | Why it matters for marketing |
|---|---|---|
| **Terminal dock** (Ctrl/Cmd+J) under the chat, tabs, cwd-aware | Sep 26 | Chatty is now a place you *work*, not a window you *ask* |
| **Pinned Agent tab** — the agent's own shell, *shared keyboard*, every command visible with full output, blue gutter marks, "Show in terminal" from any tool row | Sep 26 | Radical transparency: you watch — and can type into — the exact shell the agent uses |
| **Share a terminal tab** with the agent (Read only / Read + run), per tab; `terminal_run` always asks, even under auto-approve; password prompts never read | Sep 26 | "Why did that fail?" just works. Consent is per tab, not global |
| **Terminal context auto-attached** to your message when it changed | Sep 26 | Zero-friction debugging |
| `terminal_read` for your **tmux** panes | Sep 26 | For terminal-first people |
| **File explorer** in the sidebar, drag-to-move, multi-select, Cmd/Ctrl+P quick-open, editable & savable Source tab | Sep 20 | "Light IDE" — no need to alt-tab to look at what the agent changed |
| **GitHub PR status bar** above the composer (checks, +/−) — desktop and TUI | Sep 5 | The agent's work lands in *your* workflow |
| **AGENTS.md / CLAUDE.md** project instructions | Sep 26 | Your repo's existing agent instructions work on day one |
| **Skills** in the `SKILL.md` format shared with Claude Code, Codex, opencode, Cursor; `.claude/skills` read too | Sep 26 | No lock-in; bring the skills you already wrote |

### B. The agent can *see and check* its own work
| Capability | Since | Why it matters |
|---|---|---|
| **Built-in browser** — real Chrome, live screencast docked beside the chat, `browser_click`/`browser_type` verified by snapshot refs, **take control / hand back & continue**, multi-tab/popups with per-tab policy | Sep 3 → 21 | The self-review loop: render → screenshot → critique → fix. And you can grab the wheel any time |
| Safety model for the browser: localhost/workspace by default, open web only when Internet is on, SSRF guard, **never types into password or card fields**, off-localhost clicks always ask | Sep | A *trustworthy* browsing agent is a differentiator |
| **Artifact panel**: typeset **PDFs** (Typst), **charts** (bar/line/pie/donut/area/candlestick), **SQL result tables** over CSV/Parquet/JSON/Excel (DuckDB), Markdown with Mermaid, **real PowerPoint slide rendering**; Word/Excel read & write | Aug 31 → Sep 19 | Chatty produces *deliverables*, not just text |
| **Diffs** for every file edit; live **To-dos** plan card; run progress (elapsed, turn, tokens) | Aug 31 → Sep 25 | You can follow long runs without reading everything |
| Robustness: empty-turn retry, stuck-loop nudge, unknown-tool-name repair, context guard inside the tool loop, compaction, no default turn cap, login-profile-aware shell | Sep | "It finishes the job" — the hardest claim to make, and now partially earned |

### C. More than one agent
| Capability | Since | Why it matters |
|---|---|---|
| **Sub-agents** via `invoke_agent`, each in its own **git worktree/branch** | Sep 8 | Parallel work that doesn't collide |
| **Named workers with roles** (`coordinator` / `coder` / `reviewer`), own model per worker, own turn budget | Sep 12 → 15 | Mix a cheap local coder with a strong reviewer |
| **Evidence envelope** — Chatty itself commits, diffs, and runs your verification command, and reports exit code; the leader merges only on reviewer `APPROVE` | Sep 13 | *"A coder that says tests pass is checked, not trusted."* Best single line in the product docs |
| **Teams** (`--team coder-reviewer`), a team directory checked into the repo, reproducible | Sep 14 | Agentic workflows as code |
| Delegated cost rolls up into the parent's cost line | Sep 13 | Honest cost accounting for multi-agent |
| Worker questions routed up to the human's popover | Sep 9 | Humans stay in the loop through the tree |

### D. Everywhere you work
| Capability | Since | Why it matters |
|---|---|---|
| **`chatty-tui acp`** — Chatty as the agent inside **Zed**, VS Code/Cursor/Windsurf (ACP extension), JetBrains/Neovim in principle | Sep 26 | Meet developers inside their editor |
| **Zero-config** `chatty-tui --ollama` / `--openai-compat-url` | ≤ Sep | Try it in 30 seconds with a local model, no key, no desktop |
| Headless/pipe with `--max-duration` wall-clock budget, `--usage-file` JSON spend report, `--only`/`--enable`/`--disable` tool groups | Sep 25 → 27 | Scriptable, CI-friendly, measurable |
| **Message queue** — send while a reply streams; `/now` to interrupt; ↑ to send now | Sep 20 | Feels like working with a colleague, not a turnstile |
| **ask_user** — the agent pauses to ask up to 4 structured questions | Sep 4 | Fewer wrong guesses |

### E. Local-first, but connected
| Capability | Since | Why it matters |
|---|---|---|
| **Hive marketplace** — sign in, browse, install MCP servers / WASM agent modules / A2A agents; local vs cloud badges; publish your own module | ≤ Sep | An ecosystem story — **but not public yet**: the registry backend works (Ed25519-signed, SHA-256-hashed modules) and staging runs, yet there is no public registry URL (the app defaults to `localhost:8080`), no seeded catalogue, and the dashboard isn't deployed. Market as *"build your own WASM module"* now, *"marketplace"* later |
| **Built-in catalog**: Hugging Face, Notion, Atlassian (Jira+Confluence), Google Calendar/Gmail/Drive | ≤ Sep | "Works with the tools you already use", **with care**: Notion and Atlassian serve SSE, which Chatty's streamable-HTTP-only client can't connect to without a bridge; the Google trio is unverified end to end. Don't market as one-click yet |
| **Keyless web search** + optional local **reranker** (top-5 hit rate 48 % → 57 %, top-1 27 % → 49 % in our eval) | Sep 23 | A rare *measured* claim — use it |
| Wayback Machine fallback for dead/blocked pages | Sep 25 | Small, delightful |
| **Prompt-cache-friendly** append-only prompts; per-request cache hit tracking; cost uses cached rates | Sep 5 | "Long agent runs cost less than you'd think" — needs a number before we claim it |
| **Take online / Hosted conversations** (developer flag) | Sep 7 | *Not* marketable yet. `chatty-server` + `chatty-web` are built (auth, per-user spend caps, queued messages, web client) but not deployed; Firecracker per-task VMs are experimental. At most: an "early access" waitlist |

---

## 4. Storytelling gaps

- **No audience.** "Why developers choose Chatty" is the only persona cue on the page, yet half the value (artifacts, data→PDF, Office files, Notion/Jira) is for non-developers and analysts.
- **No problem.** The page never names a pain: context switching, agents you can't watch, agents that say "done" when they aren't, vendor lock-in, API bills you can't see, data you can't send to a cloud app.
- **No before/after.** Every modern agent claims "it acts". None of the page's copy shows *a task, start to finish*.
- **No proof.** No numbers (except "20+ themes"), no screenshots of real work, no quotes, no benchmarks, no "built with Chatty".
- **Wrong emphasis.** The two most distinctive ideas — *you can watch and take over everything the agent does* and *work is verified, not trusted* — don't appear.
- **One CTA.** "Download Free". No "try in 30 seconds with Ollama", no "use it in Zed", no "read the 20-minute tutorial".
- **Stale media.** All GIFs are pre-artifact, pre-browser, pre-terminal. The product repo already has newer ones (`artifact_*.gif`, `pr_status_bar.gif`) the site doesn't use.

## 5. Claims we can make vs. must not make (yet)

**Safe, verifiable today:** free & MIT; local storage (SQLite + local memory file); no telemetry; macOS/Linux/Windows; OpenRouter/Azure/Ollama/OpenAI-compatible; approval modes; sandbox on Linux (bubblewrap) and macOS (sandbox-exec) — *none on Windows*; workspace boundary; secrets never shown to the model; real Chrome browser with take-over; artifacts incl. PPTX slide rendering; terminal dock with shared Agent tab; sub-agents in git worktrees with runner-run verification; ACP in Zed; AGENTS.md; SKILL.md; reranker numbers (with "in our evaluation").

**Do not claim without new evidence:** benchmark scores ("beats X"); cost savings percentages; "works with every model" (small local models do struggle with tools — say "works best with…"); "fully offline" *agent* runs (true for chat with Ollama; web tools obviously need network); hosted/cloud features (built, not deployed); a *public* Hive marketplace or premium modules (no public registry yet); "every module is signed by its publisher" (the registry signs on the publisher's behalf — say "every module is signed and verifiable"); VS Code "built-in" support (it's via an extension); Windows sandboxing.

## 6. Open questions for the owner

1. **Name.** The site, repo and app say "Chatty"; the repo is `chatty2`. "Chatty" undersells an agent workbench and is hard to rank for in search. Keep, qualify ("Chatty — the local-first agent workbench"), or rename before a big push? (This plan assumes *keep + qualify*.)
2. **Domain.** Stay on `boersmamarcel.github.io/chatty/` or move to a custom domain before investing in SEO and use-case pages?
3. **Hive & hosted.** Neither is publicly reachable today (no public registry URL, `chatty-server`/`chatty-web` not deployed). This plan keeps both off the homepage and gives them an "early access" block on `/extensions` and a future `/cloud` page. When do you expect a public Hive, and do you want a waitlist now?
4. **Benchmarks.** Is the Harbor/`harbor-chatty` evaluation work something we want to publish as a proof point? A single honest number would be the strongest credibility asset we could add.
5. **Analytics.** OK to add privacy-respecting, cookieless analytics (e.g. Plausible/GoatCounter) on the *marketing* site? A privacy-first product with a tracking-heavy site would undercut the message.
