# S01 — "Why did that fail?"

| | |
|---|---|
| **Persona** | P1 Daan (developer); variant for P5 Olu (tmux) |
| **Pillar** | See everything (+ Steer) |
| **Formats** | Homepage section 1, 60s video, 15s loop GIF, `/for/developers` hero, `/features/terminal` |
| **Runtime** | 60s ≈ 7 beats |

**Logline:** A developer's build fails; instead of copy-pasting logs into a chat, they share the terminal tab, ask "why did that fail?", and watch Chatty diagnose it, fix it and re-run the tests in a shell they can see and type into, ending with a green PR.

## Before
> "Every AI debugging session starts the same way: select 200 lines of terminal output, paste it into a chat, explain which repo, paste the file, paste the other file… and then I run whatever it suggests myself anyway."

## The story

| # | Beat | On screen | Feature (docs) |
|---|---|---|---|
| 1 | Daan opens the dock (Ctrl/Cmd+J) in the repo's conversation and runs `npm test`. Red. | Terminal dock under the chat, tab named `npm — shop-api` | Terminal dock (`user/terminal-dock.md#open-and-close-it`) |
| 2 | Clicks the **eye** on the tab → **Read only**. | Share dialog | Sharing a terminal (`#sharing-a-terminal-with-the-agent`) |
| 3 | Types *"why did that fail?"*. A chip above the composer: *Terminal: npm — shop-api · 38 lines*. | Terminal-context chip | The terminal goes with your message (`#the-terminal-goes-with-your-message`) |
| 4 | Chatty answers with the cause (a date-parsing test with a timezone assumption), reads the two relevant files, proposes the fix. | Tool rows: *Read terminal*, *Read src/…*; answer | `terminal_read`, file tools (`user/agents-and-tools.md#files-and-code`) |
| 5 | *"Fix it and run the tests."* The edit appears as a **diff card**. The **Agent tab** shows `npm test` running, blue bar in the margin, status *agent running `npm test`*. | Diff card; Agent tab | Agent tab (`#the-agent-tab`), diffs (`user/chatting.md#tool-call-traces`) |
| 6 | Daan types `git status` into the **same** Agent tab while it's idle: one shell, shared keyboard. | Agent tab with a human-typed command (no gutter bar) | Sharing the keyboard (`#the-agent-tab`) |
| 7 | Push; the **PR status bar** above the composer: `#214 · ✓ 6 checks`. | PR bar | PR status (`user/chatting.md#pull-request-status`) |

## The "aha"
Beat 5→6: the terminal at the bottom is the agent's actual shell, and you can type into it. Nothing is hidden.

## After
No copy-paste, no context re-explaining, full visibility of what ran. The fix is on a branch with green CI.

## Script sketch (60s, captions)
1. "Build failed." *(red test output)*
2. "Share the tab." *(eye icon)*
3. "Ask." *("why did that fail?", with the chip visible)*
4. "It reads your terminal and your code…"
5. "…fixes it, and runs the tests in its own shell…"
6. "…a shell you can see, and type into."
7. "Green." *(PR bar ✓)*
End card: *The AI agent that shows its work.*

## Web copy
- **Headline:** Why did that fail? Just ask.
- **Sub:** Share a terminal tab with Chatty. It reads the error, fixes the code and re-runs your tests in its own terminal, right under the chat, where you can watch every line and type into it too.
- **Bullets:**
  - Shared per tab, Read only or Read + run. Tabs you don't share are never read.
  - Every command the agent runs, in full, in the pinned Agent tab.
  - Password prompts are never read.
- **CTA:** See the terminal dock →

## Variant: the tmux version (P5 Olu)
Olu lives in tmux, not the desktop dock. Settings → **Enable Terminal Access**; in `chatty-tui`, `--enable terminal`. Beat 2 becomes "the pane you were just in is read by default". Same question, same answer, no GUI. (`user/agents-and-tools.md#shell-and-running-code`)

## Production notes
- Use a small real repo with one genuinely failing test (timezone or off-by-one; relatable, and fixed in 1–2 edits).
- bash or zsh (shell integration marks). Font size ≥ 16 for legibility in video.
- Approval mode: Auto-approve Sandboxed. Show the *sandboxed* label on the Agent tab.
- Keep the per-reply cost visible.

## Claims check
- Terminal dock, tab sharing, context chip, Agent tab: shipped v0.4.x (Sep 26). Linux shows program + cwd in tab titles; macOS/Windows show shell + starting folder, so pick Linux for the recording or don't point at the tab title.
- `terminal_run` (Read + run) is **not** used here, deliberately: keep it for S13/S05 to show the approval card.
- Windows: no password-prompt detection. Don't film on Windows.
