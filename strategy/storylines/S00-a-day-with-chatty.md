# S00 — A day with Chatty

| | |
|---|---|
| **Persona** | Composite: one developer's working day, touching Daan, Sam and Priya moments |
| **Pillar** | Roof: *an AI agent that shows its work* |
| **Formats** | 90-second brand film (homepage hero video, launch post, README), 6 × 10s cutdowns for social |
| **Runtime** | 90s ≈ 6 scenes of ~15s |

**Logline:** A single working day in which one person hands Chatty a bug, a UI fix, a report and an overnight job, and every time they can see what it did, step in when they want, and get back something finished and checked.

## Why this exists
The homepage needs one film that shows the *range* in a way no feature grid can. Each scene is a 15-second compression of a full storyline, so every scene has a longer version to link to.

## The story

| # | Time of day | Beat | On screen | Links to |
|---|---|---|---|---|
| 1 | 09:10 | Build fails in a terminal tab. User clicks the eye, shares it, types *"why did that fail?"* | Terminal dock, eye icon, terminal-context chip on the message | S01 |
| 2 | 09:12 | Agent explains, fixes it; the **Agent tab** shows `cargo test` running with the blue gutter mark; PR bar above the composer flips to ✓ | Agent tab, diff card, PR status bar | S01 |
| 3 | 11:30 | *"Make the pricing page work on mobile."* A live Chrome view docks; agent screenshots at 375px, spots overflow, fixes, re-checks | Browser artifact panel, screenshot, diff | S03 |
| 4 | 14:00 | Three Excel exports in the file explorer. *"Monday deck: revenue by region, last four quarters."* Table (SQL tab visible) → chart → slides render in the panel | Artifact panel: table, chart, PPTX slides | S04 |
| 5 | 17:45 | *"Coder, fix the overdraft bug; reviewer, check it."* Two workers on their own branches; evidence block shows `exit 0`; reviewer: `APPROVE`; merged | Sub-agent progress, evidence block | S02 |
| 6 | 17:50 | Close-up of the model selector (a local model), sidebar cost per conversation, *No telemetry* line | Model selector, cost column | S05, S09 |

**End card:** *Chatty. The AI agent that shows its work.* · Free & open source · macOS · Linux · Windows · **Download** / **Try it in your terminal: `chatty-tui --ollama`**

## The "aha"
Scene 2: the viewer realises the terminal at the bottom *is* the agent's terminal, and they could type into it.

## Script sketch (VO, optional; works as captions alone)
1. "Nine a.m. The build's broken."
2. "Share the tab. Ask. Watch it fix it, in a shell you can see."
3. "Before lunch: it opens the page, looks at it, and fixes what's wrong."
4. "After lunch: three spreadsheets in, one deck out. Every number shows its query."
5. "End of day: one agent writes the fix, another checks it. Chatty runs the tests itself."
6. "Your model. Your machine. Every step on screen."

## Web copy
Used directly as the homepage hero (see `04-website-plan.md` §3).

## Production notes
- Record each scene as part of its full storyline session; this film is an *edit*, not a separate shoot.
- One theme throughout (a light theme for the hero; the dark cut for social).
- Clock overlay in the corner (09:10, 11:30…) to carry the "day" frame.
- No music with lyrics; captions burned in (most autoplay is muted).

## Claims check
- Scenes 1–2 need bash or zsh (shell integration) for the Agent tab status and "Read + run".
- Scene 5 needs a git repo and `--team coder-reviewer` or named workers; desktop leader works with `virtual_agents` declared, or record the TUI for this scene.
- Don't imply scene 6's local model ran scenes 3–5 unless it did.
