# 02 — Positioning and messaging

This is the source for every headline, video voice-over and use-case page. If a line of copy doesn't trace back to a pillar and proof point here, it doesn't ship.

## 1. The one idea

> **Chatty is an AI agent that shows its work.**

"Shows its work" does three jobs at once, and each one is true:

1. **You can see it.** Every command runs in a terminal tab you can watch and type into. Every page it browses is a live Chrome view you can take over. Every edit is a diff, every plan a checklist, every message has a cost.
2. **It proves it.** It screenshots the page it built and checks it. Its sub-agents' "tests pass" is re-run by Chatty itself, and the result is attached as evidence. A reviewer agent reads the diff before anything is merged.
3. **It hands you the work.** It produces PDFs, charts, slide decks, spreadsheets and query tables in a panel next to the chat. You get deliverables, not paragraphs.

Everything else we say (local-first, any model, open source, desktop/terminal/editor) supports this idea. It is not the idea.

## 2. Positioning statement

> **For** people who want an AI agent to do real work on their own machine (code, data, documents, the web) but won't hand it a blank cheque,
> **Chatty is** an open-source agent workbench
> **that** lets you watch every step, take the wheel at any moment, and check the work before it's called done,
> **with** the model you choose, whether cloud, your company's Azure tenant, or fully local.
> **Unlike** cloud AI apps, your conversations, memory and files stay on your machine and nothing is sent to us.
> **Unlike** terminal-only coding agents, it gives you a real browser, a shared terminal, documents and a team of agents in one window. And when you do want the terminal or your editor, the same agent is there too.

## 3. Category

We are **not** "an LLM client" (the March framing), and **not** "an AI IDE".

**Category: local-first agent workbench.** "Workbench" says three things: it's a place where work happens, you're at the bench too, and the tools lie in the open.

Short form for meta tags and social: *"The open-source AI agent that shows its work. Desktop, terminal and your editor. Any model, including local."*

## 4. Message house

```
                     ┌──────────────────────────────────────────────┐
  ROOF               │     An AI agent that shows its work.          │
                     └──────────────────────────────────────────────┘
  PILLARS   ┌────────────┬────────────┬────────────┬────────────┬────────────┐
            │ SEE        │ STEER      │ CHECKED,   │ REAL       │ YOURS      │
            │ everything │ anytime    │ NOT TRUSTED│ DELIVERABLES│           │
            └────────────┴────────────┴────────────┴────────────┴────────────┘
  FOUNDATION   Free & MIT · local storage · no telemetry · macOS/Linux/Windows ·
               desktop + terminal + editor · built in Rust on GPUI (Zed's UI engine)
```

### Pillar 1: See everything
*You never have to guess what the agent is doing.*

| Proof point | Where it lives (product docs) |
|---|---|
| **Agent tab**: the agent's own shell, pinned in the terminal dock, full output, blue gutter marks on its commands, "Show in terminal" from any tool row | `user/terminal-dock.md#the-agent-tab` |
| **Live browser view**: a real Chrome screencast docked beside the chat | `user/agents-and-tools.md#web-and-the-built-in-browser` |
| **Diffs** for every file edit; **To-dos** plan card with a pinned "Plan N of M" strip | `user/chatting.md#tool-call-traces`, `user/agents-and-tools.md#how-the-loop-works` |
| **Run progress**: elapsed, turn count and tokens while it works | `user/chatting.md#sending-while-a-reply-streams` |
| **Cost** per reply and per conversation, including what sub-agents spent; context fill bar | `user/chatting.md#conversations-cost-and-search` |
| Collapsible **reasoning** and tool traces | `user/chatting.md#rich-rendering` |

### Pillar 2: Steer anytime
*You decide what it can touch, and you can change your mind mid-run.*

| Proof point | Where |
|---|---|
| Tools **off by default**; start screen shows what's switched on | `user/getting-started.md` |
| **Approval modes**: Always Ask / Auto-approve Sandboxed / Auto-approve All | `user/security.md#approval-modes` |
| **Workspace boundary** and **shell sandbox** (bubblewrap on Linux, sandbox-exec on macOS; optional network isolation) | `user/security.md` |
| **Take control** of the browser at any moment; **Hand back & continue** | `user/agents-and-tools.md` |
| **Share a terminal per tab** (Read only / Read + run); commands in your shell *always* ask, even under auto-approve | `user/terminal-dock.md#sharing-a-terminal-with-the-agent` |
| **Talk while it works**: queue messages, ↑ send-now to interrupt, Stop keeps the queue | `user/chatting.md#sending-while-a-reply-streams` |
| **It asks you** when unsure: structured clarifying questions (`ask_user`) | `user/agents-and-tools.md` |
| Secrets as env vars whose **values the model never sees** | `user/security.md#secrets` |

### Pillar 3: Checked, not trusted
*"Done" means verified.*

| Proof point | Where |
|---|---|
| **Self-review loop** in the browser: render → screenshot → critique → fix → re-check | `user/agents-and-tools.md` |
| Plans end with a **verification step** before the final reply | `user/agents-and-tools.md#how-the-loop-works` |
| **Evidence block** on every sub-agent result: branch, commits, diff stat, and *your* verification command run by Chatty (not by the agent) with its exit code | `user/sub-agents.md#named-workers-and-roles` |
| **Reviewer role** that can run tests but can't edit; leader merges only on `APPROVE` | `user/tutorial-team.md` |
| Each worker on its **own git branch/worktree**, so parallel edits never collide | `user/sub-agents.md#isolated-file-changes` |
| **PR status bar** with CI checks above the composer | `user/chatting.md#pull-request-status` |
| Failures are reported as failures: empty replies retried, stuck loops nudged, tool errors kept intact | `user/agents-and-tools.md#how-the-loop-works` |

Signature line (from the product docs, use verbatim): **"A coder that says 'tests pass' is checked, not trusted."**

### Pillar 4: Real deliverables
*Ask for the thing, get the thing.*

| Proof point | Where |
|---|---|
| **PDFs** typeset by the agent (Typst), paged in the panel | `user/chatting.md#artifacts` |
| **Charts**: bar, line, pie, donut, area, candlestick; Copy as PNG | same |
| **SQL over your files** (CSV, Parquet, JSON, Excel, ODS) → result tables with the SQL one tab away | same |
| **PowerPoint** decks rendered as real slides; Word and Excel read & write | same |
| Markdown documents with Mermaid diagrams; LaTeX math | same |
| **File explorer** + Cmd/Ctrl+P + editable Source tab: open, tweak and save the result in place | `user/chatting.md#file-explorer` |

### Pillar 5: Yours
*Your model, your machine, your formats. Leave any time.*

| Proof point | Where |
|---|---|
| **Any model**: OpenRouter (hundreds of models, one key, live pricing), Azure OpenAI (key or Entra ID), Ollama (auto-discovered), any OpenAI-compatible server (vLLM, llama.cpp, LM Studio) from the terminal app | `user/providers-and-models.md`, `user/terminal.md` |
| **Local storage**: SQLite conversations, local memory file, plain settings files; **no telemetry, no relay** | `user/advanced.md`, `user/security.md#secrets` |
| **Open formats in and out**: reads `AGENTS.md`/`CLAUDE.md`; skills in the `SKILL.md` format Claude Code, Codex, opencode and Cursor read; MCP for tools; ACP for editors; ATIF/JSONL (SFT & DPO) export | `user/agents-and-tools.md`, `user/memory-and-skills.md`, `user/advanced.md` |
| **Free & MIT**; bring your own keys; no tiers | repo |
| **Memory** that stays on your machine and is shared by desktop and terminal | `user/memory-and-skills.md` |

### Foundation (supporting, never the headline)
- **Everywhere you work**: desktop app, `chatty-tui` (interactive, headless, pipe), and your editor via ACP (Zed natively; VS Code, Cursor and Windsurf through an ACP extension).
- **Native and fast**: Rust, GPUI (the GPU-accelerated UI framework from Zed).
- **Auto-updates**, checksum-verified.

## 5. Competitive frame

We don't name competitors on the homepage. The `/compare` pages (see `04-website-plan.md`) do, and only with claims re-verified on publication day. Internally, this is the map:

| Alternative | What they're great at | Where Chatty wins | Where Chatty doesn't (be honest) |
|---|---|---|---|
| **Cloud chat apps with agents** (ChatGPT, Claude desktop) | Polished UX, best-in-class models, zero setup | Runs on *your* files and shell; any model incl. local; no data to a third party beyond the model provider you pick; deliverables + terminal + browser in one window | Setup (keys, workspace); no mobile; no hosted sync (yet) |
| **Terminal coding agents** (Claude Code, Codex CLI, opencode, Aider) | Deep coding loops, mature, huge communities | Model freedom (vs vendor-tied ones); visual layer: live browser, artifacts, diff cards, cost per message; shared terminal you can watch; teams with runner-verified evidence; still has a CLI & headless mode | Maturity and community size; raw coding benchmark results unpublished |
| **AI IDEs / editor agents** (Cursor, Windsurf, Cline, Copilot agent) | Inline editing inside the editor | Not tied to one editor (ACP), works on non-code tasks (data, docs, web), local-first, free | In-editor inline completion/editing isn't Chatty's job |
| **Local LLM chat apps** (LM Studio, Jan, Open WebUI, Msty) | Easy local model management and chat | A real *agent*: tools, sandbox, browser, files, teams; runs on those same local models | Model download/management UX (Chatty relies on Ollama for that) |
| **Open-source general agents** (e.g. Goose) | Similar spirit: open, extensible, desktop + CLI | Transparency layer (Agent tab, live browser, evidence), artifacts, teams with verification, ACP | Needs a feature-by-feature check before any public comparison |

**Our wedge, in one line:** *the power of a coding agent and the visibility of a desktop app, on any model, on your machine.*

## 6. Voice and tone

- **Concrete over clever.** "It re-runs your tests itself" beats "Next-gen verification".
- **Show the task.** Every section starts from something a person wants done ("Why did my build fail?"), not a feature name.
- **Honest limits, stated plainly.** The product docs already do this well ("the screenshot reaches the model on its next turn"; "Windows has no shell sandbox"). Keep that voice; it builds more trust than superlatives.
- **Calm about safety.** No fear-mongering about other tools; just what Chatty does.
- **No hype words:** revolutionary, unleash, supercharge, magic, 10x, next-gen, seamless. (The current site's "Unleash your agent" goes.)
- **Second person, present tense.** "You watch it run the tests." Not "Users can observe…"
- **Name:** "Chatty" in prose (capitalised); `chatty-tui` in code style.

## 7. Headline bank

Use these for A/B tests, video title cards and use-case heroes. Each is tagged with its pillar.

| Headline | Sub | Pillar |
|---|---|---|
| **The AI agent that shows its work.** | Watch every command, take the wheel any time, and get work that's checked before it's called done. On your machine, with any model. | Roof |
| **Hand it the task. Keep the wheel.** | Chatty works in a terminal you can see and a browser you can take over. | Steer |
| **"Tests pass." Checked, not trusted.** | Chatty re-runs your verification itself and attaches the evidence. | Checked |
| **Ask for the report. Get the PDF.** | Data in, charts, tables, slides and documents out, right beside the chat. | Deliverables |
| **Your model. Your machine. Your rules.** | OpenRouter, Azure, Ollama or any OpenAI-compatible server. Nothing leaves except what you send to the model you chose. | Yours |
| **Why did that fail? Just ask.** | Share a terminal tab and Chatty reads it, fixes it in its own shell, and shows you every line. | See |
| **It looked at its own work.** | A real browser, a real screenshot, a real fix. | Checked |
| **One agent. Desktop, terminal, and your editor.** | Same memory, same models, same tools, wherever you are. | Foundation |

## 8. Proof we still need to create

Ranked by credibility gained per hour spent:

1. **Real-task recordings** (not staged prompts) for the hero storylines: S01, S02, S03, S04. See `05-video-and-assets.md`.
2. **One honest number** per pillar:
   - *See*: n/a (visual proof is enough).
   - *Checked*: e.g. "coder-reviewer team fixed N of M tasks in our smoke test; the reviewer caught K bad fixes". The team smoke test (`docs/team-smoke-test.md` in chatty2) is the natural source.
   - *Yours*: "a full day of agent work cost €X on model Y" (from `--usage-file` and the cost column; needs a real day logged).
   - Already have: keyless-search reranker, top-5 48 % → 57 %, top-1 27 % → 49 %.
3. **Founder note**: a short, first-person "why I built this and how I use it every day". Authentic dogfooding is the strongest proof an open-source tool has before it has users to quote.
4. **User quotes**: none exist yet. Don't use placeholder testimonials (the unused `Testimonials.vue` is a template; delete it).
