# 03 — Personas

> **Update 2026-09-27:** five broad-audience personas (P8 consultant, P9 public-sector analyst, P10 finance, P11 marketing, P12 small-business owner) are in [`07-broad-audience.md`](07-broad-audience.md) §6. Homepage primaries are now **P8 Femke, P3 Sam and P2 Priya**; P1 Daan leads the developer lane.

Seven personas: three **primary** (the homepage speaks to them) and four **secondary** (they get use-case pages and targeted videos). Each is a composite built from what the product already does well, not from market research. Treat them as hypotheses and replace the details with real user interviews once there are users to interview.

Every persona has:
- **Trigger**: the moment they go looking for something like Chatty
- **Jobs**: what they need done
- **Pains** with what they use now
- **Objections**: why they *won't* switch
- **What convinces them**: the specific proof, feature or demo
- **Message**: one line in their language
- **Entry point**: the first thing they should try
- **Storylines**: which entries in `storylines/` are written for them

Personas are named so the team can say "would Daan care?" in a review. The names aren't used on the site.

---

## Primary personas

### P1 · Daan, the hands-on developer who wants to watch the agent
**Who:** Senior full-stack or backend developer, 8+ years. Uses a terminal coding agent (Claude Code, Codex, opencode) and/or Cursor daily. Works in git, runs tests, reviews PRs. Could be at a company or indie.

**Trigger:** An agent said "all tests pass" and they didn't. Or the monthly bill for one vendor jumped. Or they want to use a different model for part of the work and their tool won't let them.

**Jobs**
- Fix bugs and ship small features faster, without losing understanding of the code.
- Debug failures ("why did the build break?") without copy-pasting logs into a chat.
- Hand off well-defined chunks (tests, refactors, migrations) and review the result as a PR.

**Pains**
- Terminal agents scroll past; hard to see what actually ran and what it cost.
- "Done" isn't done: claimed test runs that never happened, edits to the wrong file.
- Locked into one vendor's model; can't mix a cheap model for grunt work with a strong one for review.
- Context switching between terminal, browser, editor and chat.

**Objections**
- "I already have Claude Code / Cursor. Why another tool?"
- "Desktop app? I live in the terminal and my editor."
- "Is it actually good at coding, or a chat app with a shell tool bolted on?"

**What convinces them**
- The **Agent tab**: the agent's real shell, with a shared keyboard. They can see and interrupt everything.
- **"Why did that fail?"** with a shared terminal tab, zero copy-paste.
- **Evidence blocks** and the coder→reviewer team: verification run by Chatty, not claimed by the model.
- **Their existing `AGENTS.md`/`CLAUDE.md` and skills just work**, and so does their editor (ACP in Zed).
- **Model freedom** plus per-message cost.
- Honest docs that state limits.

**Message:** *"Keep your terminal, your editor and your AGENTS.md. Get an agent you can watch, steer and verify, on any model."*

**Entry point:** `chatty-tui --ollama` or the desktop app → open the repo as workspace → Ctrl/Cmd+J → "Why did that fail?"

**Storylines:** S01, S02, S06, S07, S09, S13

---

### P2 · Priya, the engineer whose code can't leave the building
**Who:** Engineer or tech lead in a regulated or IP-sensitive setting: healthcare, finance, government, defence supplier, a research lab, or a company with a strict "no code to third-party AI" policy. Has either an **Azure OpenAI tenant** approved by IT, or a **GPU box running Ollama/vLLM**.

**Trigger:** The company approved Azure OpenAI or bought a GPU server, and now needs an *agent* that works against it. Cloud agents are either banned or vendor-locked.

**Jobs**
- Use AI on real internal code and documents within policy.
- Show security/IT exactly what the tool does and doesn't send anywhere.
- Keep secrets (DB passwords, tokens) away from the model.

**Pains**
- Most agents are tied to one cloud vendor, or phone home.
- Local chat apps can talk but can't *do* anything.
- Hard to explain an agent's blast radius to a security reviewer.

**Objections**
- "Does it have telemetry? Where does data go?"
- "Can it run with our Entra ID, no API keys on laptops?"
- "Will a local model actually be able to use tools?"
- "What stops it from reading `~/.ssh`?"

**What convinces them**
- A **trust page**: no telemetry, no relay, local SQLite, exact file locations, the list of every network destination (providers, MCP servers, sites you ask for, GitHub for updates).
- **Azure OpenAI with Entra ID sign-in**; **Ollama/vLLM/llama.cpp** via one flag.
- **Sandbox** (bubblewrap/sandbox-exec) hides `.ssh`, `.aws`, `.gnupg`; **network isolation**; **workspace boundary**; **approval modes**; **secrets never shown to the model**; **MIT source** they can audit.
- **Browser defaults to localhost only**, SSRF guard, never types passwords.
- Honest note: no shell sandbox on Windows.

**Message:** *"An agent that works where your policy says it can: your Azure tenant or your own GPUs, on your machine, with nothing sent to us."*

**Entry point:** `chatty-tui --openai-compat-url http://gpu-box:8000` or Settings → Azure OpenAI → "Use Entra ID".

**Storylines:** S05, S08, S09, S14

---

### P3 · Sam, the analyst who needs the report, not the code
**Who:** Data/business analyst, consultant, finance or ops person, researcher in the social sciences. Comfortable in Excel and maybe some SQL or Python, but not a terminal person. Lives in spreadsheets, slides and PDFs.

**Trigger:** Friday: "Can you turn these three exports into a summary deck for Monday?" Uses ChatGPT for this today but hits upload limits, can't send client data to it, or gets a chart as a picture they can't reuse.

**Jobs**
- Combine CSV/Excel/Parquet exports, query them, chart them.
- Produce a PDF report or a slide deck they can send.
- Re-run the same analysis next month.

**Pains**
- Cloud chat tools and client-confidential data.
- Copy-paste between ChatGPT, Excel and PowerPoint.
- Can't see how a number was computed.

**Objections**
- "I'm not a developer; is this for me?"
- "Do I have to set up Python?"
- "Can I trust the numbers?"

**What convinces them**
- **The SQL is one tab away** from every table: every number shows where it came from.
- **Artifacts**: charts, PDFs, **real PowerPoint slides** and Excel files in a panel beside the chat.
- **No setup beyond a key**: DuckDB and Typst are built in; no Python needed for queries, charts or PDFs.
- **Skills**: "save what you just did as a skill called monthly-report", then next month type `/monthly-report`.
- Data stays on their laptop.

**Message:** *"Drop in your spreadsheets, ask for the report, get the PDF and the deck, and see the query behind every number."*

**Entry point:** Desktop app → OpenRouter key → set workspace to the folder with the exports → "Load sales.xlsx and…"

**Storylines:** S04, S10, S11, S15 (skill reuse)

---

## Secondary personas

### P4 · Marta, the frontend / product engineer
**Who:** Frontend developer or design engineer. Builds UIs and cares about how they look at 375px and in dark mode.

**Trigger:** Tired of agents that write CSS they've never looked at.

**Pains:** Agents can't see; you're the agent's eyes. Screenshot → paste → explain → repeat.

**What convinces them:** The **self-review loop in a real Chrome**: the agent screenshots at a given width, spots the overflow, fixes it and re-checks. Plus **take control** to log in, **Hand back & continue**, **click/type by verified reference** (no coordinate guessing), and tabs/popups followed.

**Message:** *"Finally, an agent that looks at what it built."*

**Entry point:** Enable Browser Tools → "Open localhost:3000, screenshot the checkout at 375px and fix anything that overflows."

**Storylines:** S03, S13

---

### P5 · Olu, the terminal-first ops / platform engineer
**Who:** SRE, DevOps or platform engineer. tmux, ssh, CI pipelines, cron. Suspicious of GUIs.

**Trigger:** Wants an agent in scripts and pipelines with predictable cost and a hard time limit, not a chat window.

**Pains:** Agents that hang forever in CI; no machine-readable cost; interactive-only tools.

**What convinces them:** `chatty-tui --headless` / `--pipe`; `--max-duration 30m`; **`--usage-file` JSON** (tokens, calls, exit status) even on SIGTERM; `--only` tool allow-lists; `terminal_read` over **tmux** panes; `--broker` for sub-agents from a script; zero-config `--ollama`.

**Message:** *"An agent that behaves like a Unix tool: stdin in, answer out, a time budget, and a JSON receipt."*

**Entry point:** `git diff HEAD~3 | chatty-tui --pipe --usage-file usage.json`

**Storylines:** S08, S01 (tmux variant), S05

---

### P6 · Kenji, the AI engineer / agent builder
**Who:** ML/AI engineer, researcher, or hobbyist building with agents: fine-tunes models, runs local LLMs, experiments with multi-agent setups, maybe writes MCP servers.

**Trigger:** Wants a harness where they can compose agents with roles and models, observe them, and collect trajectories.

**Pains:** Multi-agent frameworks are code-heavy and opaque; there's no clean trajectory data from real use; local models struggle in tools built for frontier models.

**What convinces them:** **Named workers** with per-worker model, role and turn budget; **team directories** checked into the repo; **evidence envelopes**; **ATIF / SFT / DPO export** (Regenerate = preference pair); **roles trim tool schemas for small models**; endpoint queuing so a local GPU isn't thrashed; **WASM modules** and **MCP**; ACP.

**Message:** *"Agent teams as a config file. Every run is a trajectory you can train on."*

**Entry point:** Tutorial "your first named worker" (20 min) → `--team coder-reviewer`.

**Storylines:** S02, S14, S16, S09

---

### P7 · Lena, the academic, teacher or student
**Who:** PhD student, lecturer, researcher in a STEM field; writes LaTeX, reads papers, makes diagrams. Often on a budget.

**Trigger:** Wants AI help with math-heavy writing and literature, for free or on a university-provided/local model.

**Pains:** Chat apps mangle LaTeX; no way to produce a clean PDF; cost; data policies at the university.

**What convinces them:** **LaTeX rendered crisply** with Copy LaTeX; **Mermaid**; **Typst PDFs**; **web search + fetch with Wayback fallback**; **local models via Ollama at zero cost**; **memory** of their project's conventions; free & open source.

**Message:** *"Math that renders, sources you can check, PDFs you can hand in, even on a free local model."*

**Entry point:** Desktop app + Ollama → "Explain this derivation step by step and typeset it as a two-page PDF."

**Storylines:** S12, S10

---

## Persona × pillar heat map

Which pillar leads for whom. ● = lead message, ○ = supporting.

| | See | Steer | Checked | Deliverables | Yours |
|---|---|---|---|---|---|
| P1 Daan (developer) | ● | ○ | ● | | ○ |
| P2 Priya (private AI) | ○ | ● | | | ● |
| P3 Sam (analyst) | | ○ | ○ | ● | ○ |
| P4 Marta (frontend) | ● | ○ | ● | | |
| P5 Olu (ops) | | ○ | | | ● |
| P6 Kenji (AI builder) | ○ | | ● | | ● |
| P7 Lena (academic) | | | | ● | ● |

**Homepage order follows the primaries:** See & Checked (Daan) → Deliverables (Sam) → Yours & Steer (Priya).

## Where to find each persona

| Persona | Channels |
|---|---|
| Daan | Hacker News (Show HN), r/programming, r/rust, Lobsters, X/Bluesky dev circles, Zed community (ACP), dev YouTube |
| Priya | r/LocalLLaMA, r/selfhosted, Azure/enterprise AI communities, internal-tools Slack groups, LinkedIn |
| Sam | LinkedIn, analyst/consultant newsletters, YouTube "AI for Excel" audience, r/dataanalysis |
| Marta | Frontend Twitter/Bluesky, CSS/Frontend newsletters, dev.to |
| Olu | r/devops, r/commandline, Lobsters, terminal-tool newsletters |
| Kenji | r/LocalLLaMA, Hugging Face community, ML Twitter, agent-framework Discords |
| Lena | r/PhD, r/LaTeX, university mailing lists, academic Mastodon |
