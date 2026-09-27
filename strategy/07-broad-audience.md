# 07 — Beyond engineers: Chatty as an AI coworker for everyone

**Why this document exists:** the first pass (01–06) aimed mainly at engineers. The owner wants a broader audience: the people Claude Cowork, Microsoft Copilot Cowork and ChatGPT Work are built for. This document sets out that shift: the market, where Chatty can honestly win, what has to change in the product before a broad push works, new personas and storylines, and how the homepage changes. Where it conflicts with 02–04, **this document wins**.

## 1. The market moved: "AI coworkers" are the category

In 2026 the big three turned coding agents into office agents:

| Product | What it is | Status (Sep 2026) |
|---|---|---|
| **Claude Cowork** (Anthropic) | Agent inside the Claude desktop app: works in your folders, builds decks and spreadsheets with working formulas, runs scheduled tasks, uses connectors, plugins/skills, and a built-in browser | Desktop since Jan; web & mobile since Jul; merged with chat in Sep. Included in paid Claude plans (Pro $20/mo and up) |
| **Microsoft Copilot Cowork** | The same technology inside Microsoft 365: sends emails, schedules meetings, creates documents, posts in Teams, grounded in your M365 mail, meetings and files; approve each action | Generally available since Jun 2026; Microsoft says more than half the Fortune 500 use it |
| **ChatGPT Work** (OpenAI) | Agent across apps and files that makes sheets, slides, docs and web apps and stays on a project for hours; ChatGPT and Codex desktop apps merged | Launched Jul 9, 2026 |

**What this means for Chatty:**
- **Good news:** the market has been educated. People now understand "give an AI a task and a folder and get a finished file back". We don't have to explain the category; we have to explain *why this one*.
- **Hard news:** they have enormous distribution, one-click sign-in, mobile, deep M365/Google/Slack integration and scheduled tasks. Competing on breadth or convenience loses.
- **The opening:** all three are **closed, cloud-account, single-vendor, subscription** products. Your work goes through their cloud under their terms, on their models. A large and growing group can't or won't accept that.

## 2. Where Chatty wins for a broad audience

Plain-language versions of the pillars, and why each matters to a non-engineer:

| Pillar (engineer wording) | Broad wording | Why a knowledge worker cares | Proof in the product |
|---|---|---|---|
| Yours | **Your files stay on your computer. No account. No subscription.** | Client confidentiality, GDPR, employer policy, "I don't want my contracts in someone's training data" | Local storage; no telemetry; no sign-up; free & open source; bring your own key, or a local model |
| Yours | **Pay for what you use, with any AI model.** | A $20–30/month seat per person vs. cents per task; pick a cheaper model for simple work | OpenRouter (hundreds of models, live prices), Azure, local models at €0; cost shown per answer and per conversation |
| See everything | **See every step, and what it cost.** | "What did it just do to my files?" | Plan checklist, every change shown, live browser view, cost per answer |
| Steer anytime | **You stay in charge.** | Nobody wants an AI sending emails or deleting files unasked | Asks before acting (Always Ask), clarifying questions, stop or redirect mid-task, take over the browser |
| Checked | **It checks its own work.** | Wrong numbers in a board deck are worse than no deck | Looks at the page it built; the query behind every number one tab away; verification step before "done" |
| Deliverables | **Finished files, not just answers.** | That's the whole reason to use a coworker | Word, Excel, PowerPoint, PDF, charts, tables, in your folder |
| Yours | **Works offline, even with no cloud AI at all.** | Travel, air-gapped work, zero cost | Ollama local models |
| Yours | **Your skills are portable.** | Work you teach it isn't locked in | Skills use the same `SKILL.md` format as Claude's |

**One-line position for the broad audience:**

> **Chatty is the AI coworker that works on your computer, not in someone else's cloud.** Hand it a folder and a task; watch every step; get finished files. Any AI model, no account, no subscription, free and open source.

Keep the roof idea from 02 ("shows its work"); for the broad audience it becomes: **"An AI coworker you can watch."**

**Who this lands with first (the broad audience's early adopters):**
1. **Independent professionals**: consultants, freelancers, accountants, lawyers, therapists, translators. They hold client data, have no enterprise IT to approve a Copilot licence, and are cost-sensitive.
2. **Privacy- and sovereignty-bound organisations**: public sector, healthcare, education, NGOs, EU companies wary of US clouds. They can use an EU Azure tenant or a local model.
3. **Small businesses**: no M365 Copilot budget (Copilot Cowork requires M365 Copilot), a handful of people, lots of spreadsheets and PDFs.
4. **Cost-conscious power users** who already pay for one AI subscription and resent a second.
5. **Students and educators**: free, local, private.

## 3. Honest capability check against the category

✅ ready to market · ⚠️ works but needs care or setup · ❌ missing

| What Cowork-class products offer | Chatty today | Status |
|---|---|---|
| Work in a folder on your computer: read, create, organise files | Per-conversation working folder, file tools, file explorer | ✅ (but setup is technical, see §4) |
| Create Word, Excel (with formulas), PowerPoint, PDF | Word/Excel/PowerPoint read & write, Typst PDF, real slide preview, charts | ✅ (verify Excel *formulas*, not just values, before claiming) |
| Analyse data, charts | SQL over Excel/CSV/Parquet, native charts, query visible | ✅ (stronger than most: the query is shown) |
| Read PDFs, scans | PDF text + page images | ✅ text PDFs · ⚠️ scans depend on model vision |
| Web research | Search, fetch, Wayback fallback | ✅ |
| Browser that fills forms / does web tasks | Real Chrome, click & type, take control | ⚠️ off-localhost clicks ask every time; needs "Enable Browser Tools" + a workspace |
| Plan → execute → deliver long tasks | Plan checklist, no default turn cap, progress indicator | ✅ |
| Asks before risky actions | Approval modes, clarifying questions | ✅ |
| Skills / plugins | Skills (`SKILL.md`), save a skill from a conversation | ✅ skills · ❌ no plugin gallery (Hive not public) |
| Memory across conversations | Local memory | ✅ |
| Email, calendar, drive | Gmail, Google Calendar, Google Drive in the built-in catalog | ⚠️ **unverified end to end**; test before marketing |
| Notion, Jira/Confluence | In the catalog, but Chatty's client speaks streamable HTTP only and these serve SSE, so they need a bridge | ❌ for non-technical users |
| Microsoft 365 (Outlook, Teams, OneDrive, SharePoint), Slack | Not in the catalog | ❌ |
| Scheduled / recurring tasks | Only via cron + `chatty-tui --headless` | ❌ for non-technical users |
| Continue on phone / after closing laptop | Hosted conversations built, not deployed | ❌ |
| Sign in with an account, no keys | Paste an OpenRouter key, or run Ollama | ❌ biggest single barrier |
| Safe execution on every OS | Sandbox on macOS & Linux; **none on Windows** | ⚠️ Windows is where most office workers are |

## 4. Product readiness: marketing can't outrun onboarding

We're not changing the app now, but a broad campaign that lands people in today's onboarding will leak most of them. These are the prerequisites, ranked by how much each blocks a non-engineer. The marketing plan below is phased around them.

| # | Gap | Why it blocks | Suggested direction (for the product roadmap) |
|---|---|---|---|
| G1 | **Getting a model requires an API key** | "Paste an sk-or- key" loses most non-technical users at step 2 | A "Connect with OpenRouter" button (OpenRouter offers an OAuth PKCE flow that issues a key after sign-in; verify), with credit top-up explained in plain words; or a guided Ollama install for the free/local path |
| G2 | **"Code Execution" and an absolute workspace path** | Non-engineers won't enable something called code execution, and won't type a path | First-run "Let Chatty work in a folder" picker; rename the settings in plain language; sensible default approval mode shown as a friendly choice |
| G3 | **Connectors** | Office work lives in email, calendar, docs, chat | Verify Google trio end to end; add an SSE transport (unblocks Notion, Atlassian); add Microsoft 365 and Slack |
| G4 | **Windows has no sandbox** | Most office PCs run Windows; safety is a pillar | A Windows isolation story, or clear Windows-specific defaults (Always Ask) |
| G5 | **Scheduled tasks in the desktop app** | "Every Monday, update my status doc" is a flagship Cowork use case | A simple schedule UI over the existing headless engine |
| G6 | **Starter tasks / skills gallery** | A blank box doesn't tell a non-engineer what's possible | Start-screen suggestions per role ("Tidy a folder", "Turn a spreadsheet into slides"), and a small set of bundled skills |
| G7 | **Jargon in the UI** | Tool rows say `shell_execute`, "tokens", "MCP" | Plain labels by default, technical details on expand (the desktop already has tense verbs like "Read README.md", so extend that) |
| G8 | **Name and trust signals** | Signed/notarised builds exist for macOS (release workflow notarises); Windows signing, SmartScreen warnings and a real domain matter more for this audience | Verify Windows signing; custom domain; human-readable privacy page |

**Rule:** a storyline or page aimed at a Ring-3 audience (below) ships only when the gaps it depends on are closed. Each new storyline lists its gates.

## 5. Audience rings: widen in step with the product

| Ring | Who | Message | When |
|---|---|---|---|
| **1. Technical early adopters** | P1–P7 from `03-personas.md` | 02's message house | Now (Phase 1) |
| **2. Tech-comfortable knowledge workers** | Analysts, consultants, researchers, finance, ops: comfortable getting an API key with a guide | This document's broad message; storylines S18–S22 | Now, with a **guided setup page** that walks through the key and the folder in plain language (Phase 1–2) |
| **3. Everyone else at work** | Office managers, marketers, HR, small-business owners, educators, legal | Same message, simpler onboarding | After G1, G2, G6 (and ideally G3, G4) ship |

The homepage speaks to **Rings 2–3 from day one** (the owner's direction). What changes with each ring is *where CTAs lead*: every CTA goes to download plus the `/start` guided setup, which carries Ring 3 visitors through today's setup in plain language until G1/G2 ship. **No waitlist** (owner decision, 2026-09-27); paid campaigns aimed specifically at Ring 3 wait for G1/G2.

## 6. New personas (broad audience)

These add to P1–P7. Same format as `03-personas.md`, compressed.

### P8 · Femke, the independent consultant (Ring 2) ★ lead broad persona
- **Context:** Solo or 3-person firm. Strategy/HR/finance consulting. Holds confidential client data. No enterprise IT.
- **Trigger:** Client contract says "no client data in AI tools without approval", or she's paying for two AI subscriptions and still copy-pasting into PowerPoint.
- **Jobs:** Proposals, client reports, workshop decks, analysis of client exports.
- **Pains:** Confidentiality, subscription stacking, outputs she has to rebuild in Office.
- **Objections:** "Is it hard to set up?" "Is it as good as ChatGPT?" "Can I show a client it's safe?"
- **Convinces her:** Files stay on her laptop; she can choose an EU/Azure or local model for sensitive clients; finished Word/PowerPoint files; cost per task in euros; one-page privacy explainer she can forward to clients.
- **Message:** *"Your AI coworker for client work. Files stay on your laptop, and you pay per task, not per month."*
- **Storylines:** S19, S18, S04

### P9 · Anouk, the policy analyst in a public organisation (Ring 2)
- **Context:** Government agency, municipality, NGO or university. GDPR and digital-sovereignty rules; US cloud AI is restricted. IT may have an EU Azure OpenAI tenant, or nothing.
- **Jobs:** Briefing notes from stacks of PDFs, consultation summaries, memos in the house Word template.
- **Convinces her:** Local or EU-tenant model; nothing sent to us; sources and page references in every briefing; open source her IT can audit.
- **Message:** *"AI help with your documents that respects your data rules."*
- **Storylines:** S21, S05

### P10 · Eva, the finance controller (Ring 2)
- **Context:** Finance at a mid-size company or accounting practice. Excel all day. Month-end close.
- **Jobs:** Reconciliations, variance analysis, commentary for management.
- **Pains:** AI that "makes up numbers"; can't show the auditor how a figure was derived.
- **Convinces her:** The query behind every table, Excel output she can open, and a skill that repeats the close each month.
- **Message:** *"Month-end, with every number traceable."*
- **Storylines:** S22, S15

### P11 · Ruben, the marketing and communications lead (Ring 2→3)
- **Context:** Marketing in a small or mid-size company. Competitor research, campaign reports from platform exports, content, decks.
- **Jobs:** Competitive scans, monthly campaign report, first drafts.
- **Convinces him:** The browser visiting sites while he watches; screenshots and tables in one report; slides; skills to rerun it monthly.
- **Message:** *"Your research assistant and report builder, one prompt away."*
- **Storylines:** S20, S04

### P12 · Joris, the small-business owner / office manager (Ring 3, gated on G1, G2, G6)
- **Context:** Runs a 5–20 person business (a practice, a shop, an installer). Invoices, supplier emails, schedules, a messy shared drive. Not technical at all.
- **Jobs:** Organise files, chase invoices, draft letters and emails, simple reports.
- **Convinces him:** It just works on his own computer, doesn't cost a monthly seat per employee, asks before doing anything.
- **Message:** *"An extra pair of hands for the paperwork, on your own computer."*
- **Storylines:** S23, S18

## 7. New storylines (broad audience)

Same template as `storylines/README.md`. Full files are in `storylines/`. Each lists its **gates** (readiness gaps from §4 that must close before it's aimed at Ring 3).

| ID | Title | Persona | Gates | Priority |
|---|---|---|---|---|
| [S18](storylines/S18-the-monday-pile.md) | The Monday pile | P12 Joris, P8 Femke | G1, G2 for Ring 3; Gmail drafting needs G3 verification | ★★★ |
| [S19](storylines/S19-client-work-stays-client-work.md) | Client work stays client work | P8 Femke | none for Ring 2 | ★★★ |
| [S20](storylines/S20-competitor-watch.md) | Competitor watch | P11 Ruben | Monthly rerun needs G5 to be one-click | ★★ |
| [S21](storylines/S21-briefing-by-nine.md) | Briefing by nine | P9 Anouk | none for Ring 2 | ★★★ |
| [S22](storylines/S22-month-end-without-mystery-numbers.md) | Month-end without mystery numbers | P10 Eva | verify Excel formula output | ★★ |
| [S23](storylines/S23-tidy-my-folder.md) | Tidy my folder | P12 Joris, everyone | G2 for Ring 3 | ★★★ (best broad 15-second demo) |
| [S24](storylines/S24-plan-the-offsite.md) | Plan the team day | P11, P12 | G3 (Google connectors verified) | ★ (gated) |

## 8. Homepage for the broad audience (replaces `04-website-plan.md` §3.1–3.9 order)

Principle: **no jargon above the fold, no terminal in the first three screens.** Engineers still find their lane one click away.

| # | Section | Copy direction | Storyline / media |
|---|---|---|---|
| 1 | **Hero** | **H1:** *An AI coworker you can watch.* **Sub:** *Give Chatty a folder and a task. It plans, works through it step by step, and hands you finished files (documents, spreadsheets, slides, reports) while you see everything it does. It runs on your computer, works with any AI model, and needs no account or subscription.* **CTA:** Download free · *See it work (90s)* | S23 → S04 → S19 montage (new broad cut of S00) |
| 2 | **"Hand it the work"** | Four task tiles in plain words: *Tidy a folder · Turn spreadsheets into a report · Write a briefing from a pile of PDFs · Research competitors and build the deck* | S23, S04/S22, S21, S20 loops |
| 3 | **"Watch it work. Stop it any time."** | Plan checklist, every change shown, asks before acting, take over the browser | S13, S03 (non-technical framing) |
| 4 | **"Finished files, not just answers."** | Word, Excel, PowerPoint, PDF, charts, all in your folder | S04 artifact carousel |
| 5 | **"Your files stay on your computer."** | No account, no telemetry, nothing sent to us; only what the model reads goes to the AI provider you picked, or nowhere with a local model | S19, S05 (plain version) |
| 6 | **"Pay per task, not per month."** | Any model; cost of every answer shown; free local option; example task costs (once measured) | S09 (plain version) |
| 7 | **"Teach it once."** | Skills: save a way of working, rerun it next month | S15 |
| 8 | **Role chooser** | *For consultants · finance · policy & research · marketing · small business · developers · IT & security* | → `/for/*` |
| 9 | **"For developers"** band | One strip: terminal, teams with verified results, your editor (Zed), CLI → `/for/developers` | S01, S02, S07 |
| 10 | **Honest comparison teaser** | *"Already using an AI coworker? Here's how Chatty differs."* → `/compare/ai-coworkers` | §9 |
| 11 | FAQ (plain) | Is it safe? Is it free? What do I need? Do I need to be technical? *(honest: today you need an API key or Ollama; the setup guide takes ~10 minutes)* Does it work with Outlook/Teams? *(not yet)* | — |
| 12 | Final CTA | *Download free* / *Guided setup (10 minutes)* / *Star on GitHub* | — |

**New `/for/*` pages:** `/for/consultants` (P8), `/for/finance` (P10), `/for/public-sector` (P9, merges with `/for/private-ai` for the IT angle), `/for/marketing` (P11), `/for/small-business` (P12, Ring 3 gated). Existing developer/analyst/research pages stay.

**New `/start` guided-setup page (Ring 2 critical):** screenshots of every click, plain words, no terms without explanation: (1) download, (2) get an OpenRouter key *or* install Ollama for free, (3) pick a folder for Chatty to work in, (4) choose "ask me before every change", (5) try one of four starter tasks. Includes a 3-minute video (S17 redone for non-engineers).

## 9. Comparison: `/compare/ai-coworkers`

Honest, dated, sourced, with a *"when to pick them instead"* section. Draft rows (re-verify every competitor cell on publication day):

| | Chatty | Cloud AI coworkers (Claude Cowork, Copilot Cowork, ChatGPT Work) |
|---|---|---|
| Price | Free app; pay the AI provider per use, or €0 with a local model | Monthly subscription (Copilot Cowork requires Microsoft 365 Copilot) |
| Account needed | No | Yes |
| Where your files are processed | On your computer; only what the model reads goes to the model provider you picked | Vendor's cloud and/or app |
| Choice of AI model | Any: hundreds via OpenRouter, Azure, local | Vendor's own models |
| Works offline | Yes, with a local model | No |
| Open source | Yes (MIT) | No |
| See every step and its cost | Yes, per answer | Partly, varies |
| Connectors (email, calendar, Teams, Slack…) | Few; growing | **Many; deeply integrated** |
| Scheduled tasks | Technical only today | **Yes** |
| Phone / continue in the cloud | Not yet | **Yes** |
| Setup | ~10 min, needs a key or Ollama | **One sign-in** |

**When to pick them instead** (say it on the page): *you live in Microsoft 365 or Google Workspace and want deep integration with email and meetings; you want it on your phone; you want zero setup.* Saying this builds the trust the rest of the page depends on.

Naming note: "Cowork" is Anthropic's and Microsoft's product name. Use it only on the comparison page, descriptively, never in our own headlines or as a category label we claim.

## 10. Channels for the broad audience

| Audience | Channels | Lead asset |
|---|---|---|
| Consultants, freelancers | LinkedIn, freelancer communities and newsletters, professional associations | S19 |
| Public sector, NGOs, education | Digital-sovereignty and open-source-in-government communities, EU tech press, university IT | S21 + privacy page |
| Finance | LinkedIn, accounting communities, "Excel + AI" YouTube | S22 |
| Marketing | LinkedIn, marketing newsletters | S20 |
| Small business | YouTube how-tos ("AI that sorts your invoices"), local business networks (Ring 3, after G1/G2) | S23, S18 |
| Privacy-conscious generalists | r/privacy, r/selfhosted, privacy newsletters and podcasts | S23 + "no account, no telemetry" |

**Video style shift for these audiences:** faces and voice-over explaining the *why*, a real person's desk context, zero terminal on screen, captions, and the finished file shown opened in Word/PowerPoint at the end.

## 11. What changes in 01–06

- **02 positioning:** add the broad one-liner (§2) as the primary homepage line; the engineer message house stays for `/for/developers` and the developer band.
- **03 personas:** primaries are now **P8 Femke, P3 Sam, P2 Priya** for the homepage, with P1 Daan leading the developer lane. P8–P12 added (this document).
- **04 website plan:** homepage order per §8; new `/for/*` pages and `/start`; `/compare/ai-coworkers` moves from Phase 3 to Phase 2 (it's the question every broad visitor has).
- **06 roadmap:** a product-readiness track (G1–G8) runs alongside marketing; Ring-3 campaigns wait for it.
- **Storyline S11 corrected:** Notion and Atlassian need a bridge today; it no longer claims one-click.
