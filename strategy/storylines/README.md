# Storyline library

Each storyline is **one person, one task, start to finish**, told so that every beat is a real, shipped Chatty feature. They're the raw material for:

- **the homepage** (three of them are the spine: S01, S04, S05, with S02/S03 as proof)
- **use-case pages** (one page per persona, built from two or three storylines)
- **videos** (15-second loops, 60-second social cuts, 3-minute walkthroughs)
- **launch posts, docs tutorials and talks**

If a feature doesn't appear in a storyline, it probably doesn't belong on the homepage either.

## Index

| ID | Title | Persona(s) | Pillar | Best formats | Priority |
|---|---|---|---|---|---|
| [S00](S00-a-day-with-chatty.md) | A day with Chatty | all | Roof | 90s brand film, homepage hero video | ★★★ |
| [S01](S01-why-did-that-fail.md) | "Why did that fail?" | P1 Daan, P5 Olu | See | Homepage, 60s video, 15s loop | ★★★ |
| [S02](S02-checked-not-trusted.md) | Checked, not trusted | P1 Daan, P6 Kenji | Checked | Homepage proof, 3-min video, `/for/developers` | ★★★ |
| [S03](S03-it-looked-at-its-own-work.md) | It looked at its own work | P4 Marta | Checked / See | Homepage proof, 60s video, `/for/frontend` | ★★★ |
| [S04](S04-spreadsheets-to-slides.md) | From three spreadsheets to Monday's deck | P3 Sam | Deliverables | Homepage, 60s + 3-min video, `/for/analysts` | ★★★ |
| [S05](S05-nothing-leaves-the-building.md) | Nothing leaves the building | P2 Priya, P5 Olu | Yours / Steer | Homepage, `/for/private-ai`, trust page | ★★★ |
| [S06](S06-bring-your-own-rules.md) | Bring your repo's rules | P1 Daan | Yours | `/for/developers`, 60s video | ★★ |
| [S07](S07-inside-your-editor.md) | Your agent, inside Zed | P1 Daan | Foundation | `/features/editor`, 30s video | ★★ |
| [S08](S08-the-night-shift.md) | The night shift | P5 Olu, P2 Priya | Yours | `/for/automation`, blog post | ★★ |
| [S09](S09-right-model-right-price.md) | The right model for each job | P1, P2, P6 | Yours / See | `/features/models`, 60s video | ★★ |
| [S10](S10-research-you-can-check.md) | Research you can check | P3 Sam, P7 Lena | Deliverables | `/for/research`, 60s video | ★★ |
| [S11](S11-meeting-notes-to-tickets.md) | From meeting notes to tickets | P3 Sam | Deliverables | `/features/extensions`, 60s video | ★ |
| [S12](S12-math-that-renders.md) | Math that renders | P7 Lena | Deliverables | `/for/research`, 15s loops | ★ |
| [S13](S13-talk-while-it-works.md) | Talk while it works | P1, P4 | Steer | 30s video, homepage micro-demo | ★★ |
| [S14](S14-every-run-is-training-data.md) | Every run is training data | P6 Kenji, P2 Priya | Yours | `/for/ai-builders`, blog post | ★ |
| [S15](S15-do-it-again-next-month.md) | Do it again next month | P3 Sam, P1 Daan | Deliverables | `/features/skills`, 30s video | ★★ |
| [S16](S16-teach-it-a-new-trick.md) | Teach it a new trick | P6 Kenji | Yours | `/for/ai-builders`, dev tutorial | ★ |
| [S17](S17-first-five-minutes.md) | The first five minutes | all | Steer | `/download`, onboarding video | ★★★ |

★★★ = produce first (Phase 1) · ★★ = Phase 2 · ★ = Phase 3.

## Coverage check: every major feature has a home

| Feature | Storylines |
|---|---|
| Terminal dock, Agent tab, shared keyboard | S01, S00, S13 |
| Share terminal tab (Read / Read + run), terminal context chip | S01 |
| tmux `terminal_read` | S01 (variant), S08 |
| Built-in browser, take control, hand back | S03, S00 |
| Artifacts: PDF / chart / table / PPTX / Markdown | S04, S10, S12, S00 |
| Excel / Word read-write, DuckDB SQL | S04, S15 |
| File explorer, Cmd/Ctrl+P, editable Source tab | S04, S03 |
| Sub-agents, worktrees, evidence, roles, teams | S02, S09, S14 |
| PR status bar | S01, S02 |
| AGENTS.md / CLAUDE.md, SKILL.md skills | S06, S15 |
| Memory | S06, S12, S15 |
| ACP (Zed / VS Code) | S07 |
| Headless / pipe / usage-file / max-duration / broker | S08, S02 |
| OpenRouter / Azure Entra / Ollama / OpenAI-compatible | S05, S09, S17 |
| Approval modes, sandbox, network isolation, secrets | S05, S17, S01 |
| Cost per message, context bar, delegated cost | S09, S00 |
| Web search, fetch, Wayback, reranker | S10 |
| MCP catalog (Notion, Atlassian, Google), custom MCP | S11 |
| Hive / WASM modules | S16 (build your own; marketplace later) |
| Message queue, /now, ask_user, plan card | S13, S03 |
| ATIF / SFT / DPO export, Regenerate | S14 |
| LaTeX, Mermaid, code highlighting | S12, S10 |
| Themes, font size | S17 (in passing) |

## Storyline template

Copy this for a new storyline. Keep every beat tied to a feature that has a docs link. If you can't link it, it isn't shipped.

```markdown
# SNN — Title

| | |
|---|---|
| **Persona** | … |
| **Pillar** | … |
| **Formats** | … |
| **Runtime** | 60s video ≈ N beats · 3-min ≈ N beats |

**Logline:** One sentence: who, what they want, what Chatty does, what they walk away with.

## Before
The situation and the frustration, in the persona's words.

## The story
| # | Beat (what happens) | On screen | Feature (docs) |
|---|---|---|---|
| 1 | … | … | … |

## The "aha"
The single moment the viewer should remember.

## After
What the persona has now that they didn't before (time, confidence, artifact).

## Script sketch (60s)
VO / on-screen text, beat by beat.

## Web copy
- Headline:
- Sub:
- 3 bullets:
- CTA:

## Production notes
Setup, model, repo/data to prepare, what to avoid.

## Claims check
What must be true on filming day; known limits to state or avoid.
```

## Rules for every storyline

1. **Real runs only.** Record an actual session. Cut for time, but never fake output. If it's sped up, say so on screen ("2× speed").
2. **Show the cost.** Leave the per-message cost visible. It's a feature, and it pre-empts the "how much does this cost?" question.
3. **Show a permission moment.** At least one approval card, take-control, or share-a-tab moment per video. Control is part of the story.
4. **Name the model.** Show which model ran. For local-model storylines, use a local model on screen.
5. **End on the artifact or the evidence**: the PDF, the green check, the merged branch. Never on a chat bubble.
