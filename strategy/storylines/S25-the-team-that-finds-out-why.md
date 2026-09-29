# S25 — The team that finds out why

| | |
|---|---|
| **Persona** | P3 Sam (analyst); secondary P2 Priya, P6 Kenji |
| **Pillar** | See everything + Checked, not trusted (+ Yours: the models you choose) |
| **Formats** | Homepage teams section (v0.5.0), `/features/teams`, 60s video, 3-min walkthrough |
| **Runtime** | 60s ≈ 6 beats · 3-min ≈ 9 beats |

**Logline:** Revenue fell in August and Sam's manager wants to know why. Sam hands the question to a lead agent, which brings in an analyst and a reviewer. Sam watches the small team work it out live, opens any of them to see the queries behind the numbers, approves the one file it wants to write, and gets a reviewed report with who spent what.

## Before
> "I can pull the numbers, but 'why did it drop?' is three questions in one: which segments, how much, and was it volume or price? When a chatbot answers, I can't see how it got there, so I can't defend it on Monday."

## The story

| # | Beat | On screen | Feature (docs) |
|---|---|---|---|
| 1 | Sam's folder has `orders.csv`, July and August. In a new chat: `/agent data-lead Revenue in orders.csv fell in August. Find out why.` | Composer with the `/agent` command | `/agent`, team presets (`user/tutorial-swarm.md#3-ask-the-team`) |
| 2 | The turn opens into a live **team tree**: the lead, then `data-analyst-0`, `reviewer-0`, `data-analyst-1`, each with its model or current step, status, tool count and tokens. | Swarm tree, rows ticking from Running to Done | Swarm tree (`user/tutorial-swarm.md#4-watch-the-team-work`) |
| 3 | Sam clicks the analyst's line. A side sheet shows its model, turns, spend by model, and every tool call: the data profile, then the SQL queries and the tables they returned. | Agent transcript sheet | Drill-in (`user/tutorial-swarm.md#4-watch-the-team-work`) |
| 4 | The reviewer works out key numbers again from the file itself and answers `APPROVE`, or asks for changes, and the lead fixes the report. | Reviewer row Done; the verdict in the report | Reviewer role (`user/tutorial-swarm.md#2-meet-the-agents`) |
| 5 | The analyst, two levels down, asks to write `report.md`. The approval card names the agent and the chain (`root › data-lead › data-analyst`). Sam clicks **Approve**. | Relayed approval card | Approvals up the chain (`user/tutorial-swarm.md#5-approve-the-report`) |
| 6 | The reviewed report: the size of the drop, the biggest driver, the second driver, and what the data can't say. | Report in the chat; `report.md` in the folder | — |
| 7 *(3-min)* | The finished tree shows each agent's tokens and the team total. The side sheet splits spend by model: dollars for priced models, tokens for local ones. | Finished tree; spend by model | Spend (`user/tutorial-swarm.md#6-read-the-result-and-the-bill`) |
| 8 *(3-min)* | Kenji's beat: each agent is a short TOML file. Copy `reviewer` into the workspace and add one `model` line to put it on a small local model. The tree now shows two models. | Spec file; tree with a mixed model | Mix models (`user/tutorial-swarm.md#7-mix-models`) |
| 9 *(3-min)* | Priya's beat: the team runs where her policy allows. Each agent picks its model: the company's approved models, a local GPU server, or a cloud model, mixed in one team. | Settings → Models; tree showing each agent's model | Providers & models (`user/providers-and-models.md`) |

## The "aha"
Beat 3: the answer isn't a black box. Click any agent and you see the queries it ran and what came back.

## After
A reviewed report that Sam can defend line by line, a file Sam approved, and a bill split by agent and model, with each agent on the model Sam chose for it.

## Script sketch (60s)
1. "Revenue fell in August. Why?"
2. "Ask a lead agent." *(`/agent data-lead …`)*
3. "It brings in an analyst and a reviewer. Watch them work." *(live tree)*
4. "Open any of them: the queries behind every number." *(side sheet)*
5. "Nothing is written until you say so." *(approval card, Approve)*
6. "A reviewed answer, and who spent what." *(report, finished tree)*
End card: *Watch your AI team work.*

## Web copy
- **Headline:** Watch your AI team work.
- **Sub:** Revenue fell in August, and you want to know why. Hand the question to a lead agent and watch it work it out with an analyst and a reviewer.
- **3 points** (the persona promises, persona names never on the site):
  - *See the work behind every number* (P3): open any agent to read the queries it ran and what they returned.
  - *You choose where each agent runs* (P2: runs where your policy allows): your own GPU, your company's approved models or a cloud model, per agent. Mix them in one team.
  - *A team is a config file* (P6): each agent is a short file you can read, copy and share.
- **Quiet line:** Teams are experimental.
- **CTA:** Try the tutorial →

## Production notes
- The data is the tutorial's sample, `orders.csv` (793 orders, July and August), published with the docs, so anyone can replay the storyline.
- The site's screenshots come from a real run of the tutorial on a local model served by vLLM. The run takes minutes on one local GPU, so cut for time and label it.
- Set the approval mode to **Always ask** before recording. Under the default (auto-approve sandboxed), the write in beat 5 goes through without a card.

## Claims check
- Teams are **experimental**. Never say or imply that a team answers better or more accurately than a single agent; that research hasn't been done. No numbers.
- Teams need the local agent broker, which runs in the desktop app on macOS and Linux (not Windows yet), and for now the module runtime is switched on by hand. That belongs on the tutorial and feature page, not the homepage.
- Frame where the team runs as a choice, never as an absolute: no "nothing leaves" claims. Chatty sends traffic to the providers, MCP servers, agents and sites you configure, plus GitHub for update checks; web access is on by default.
- Hosted compute is a planned future option for running teams. Mention it only as planned, with no dates, and keep it off the site until it is publicly usable (`08-decisions-and-proof.md`, decision 3).
- Reports differ from run to run in how they slice the numbers. Show the one you recorded; don't quote its figures as typical.
