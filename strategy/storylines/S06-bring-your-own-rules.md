# S06 — Bring your repo's rules

| | |
|---|---|
| **Persona** | P1 Daan: already uses Claude Code / Codex / Cursor and has invested in instructions and skills |
| **Pillar** | Yours (no lock-in) |
| **Formats** | `/for/developers` section, 60s video, "Switching from Claude Code" guide/blog post |
| **Runtime** | 60s ≈ 6 beats |

**Logline:** A developer who has spent months tuning `CLAUDE.md` and a folder of skills for another agent opens the same repo in Chatty, and everything already works: the rules, the skills, even the slash commands, on whichever model they choose.

## Before
> "My `CLAUDE.md` is 300 lines of hard-won rules, and I have eight skills. Trying another agent means starting over, so I never do."

## The story

| # | Beat | On screen | Feature (docs) |
|---|---|---|---|
| 1 | Open the repo as the conversation's working folder. It has `CLAUDE.md` at the root and `.claude/skills/release/SKILL.md`. | File explorer | Project instructions (`user/agents-and-tools.md#project-instructions-agentsmd--claudemd`) |
| 2 | *"Add a /health endpoint."* The agent follows the repo's conventions (test layout, error style) because it read `CLAUDE.md`. | Answer and diff follow house style | AGENTS.md / CLAUDE.md |
| 3 | Type `/`: the picker lists **release** with a skill badge. It's the same `SKILL.md`, not copied. | Slash picker | Skills (`user/memory-and-skills.md#skills`) |
| 4 | Pick a different model mid-conversation from the selector (e.g. a cheaper one for the next step). Same rules, same skills. | Model selector | Model selector (`user/chatting.md#the-composer`) |
| 5 | *"Remember that we deploy from the release branch."* A week later, in a new conversation: *"how do we ship?"* | Memory recall | Memory (`user/memory-and-skills.md#memory`) |
| 6 | New skills go in `.agents/skills/`, the cross-tool location Claude Code, Codex, opencode and Cursor also read. Your investment is portable in both directions. | Folder tree | Agent Skills format |

## The "aha"
Beat 3: your existing skill shows up in the picker without any import step.

## Web copy
- **Headline:** Keep your AGENTS.md. Keep your skills. Change your agent.
- **Sub:** Chatty reads the `AGENTS.md` and `CLAUDE.md` files and the `SKILL.md` skills you already have for other agents, and writes new ones in the same open format. Nothing to migrate, nothing to lock you in.
- **CTA:** Coming from another agent? Start here →

## Claims check
- Precedence: AGENTS.md over CLAUDE.md in the same folder; nearest file wins; chat overrides. Files over 32 KB are cut off.
- Only name tools as "also read this format" if the Agent Skills site lists them at publication time.
- Don't claim compatibility with other tools' *hooks*, *settings* or *commands*; only instructions and skills.
