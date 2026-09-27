# S13 — Talk while it works

| | |
|---|---|
| **Persona** | P1 Daan, P4 Marta |
| **Pillar** | Steer anytime |
| **Formats** | 30s video, homepage micro-demo (looping clip in the "Steer" block), `/features/control` |
| **Runtime** | 30s ≈ 5 beats |

**Logline:** Working with Chatty feels like working with a colleague, not a turnstile: you can add to the task while it runs, redirect it, answer its questions, and approve the one command that runs in your own shell.

## The story

| # | Beat | On screen | Feature (docs) |
|---|---|---|---|
| 1 | A long task is running: **To-dos** card, *Plan 2 of 5* strip, run indicator *· 84s · turn 11 · 11,254 tok*. | Plan card; progress suffix | Plan, run progress (`user/agents-and-tools.md#how-the-loop-works`) |
| 2 | Daan remembers something and just sends it: *"also update the changelog"*. It queues as its own bubble. | Queued bubble with × and ↑ | Queue (`user/chatting.md#sending-while-a-reply-streams`) |
| 3 | Changes his mind about the approach: clicks **↑** on a new message; the current reply stops and that one runs next. | ↑ send-now | Interrupt |
| 4 | The agent asks: *"Keep the old endpoint as a deprecated alias?"* with options. He clicks one. | `ask_user` card | Clarifying questions |
| 5 | *"Restart the dev server in my terminal."* The tab is shared **Read + run**: an approval card with the exact command and *Runs in your shell, not the sandbox.* → Approve. The command appears in his tab with the blue agent mark. | Approval card; human tab with agent gutter | `terminal_run` (`user/terminal-dock.md#letting-the-agent-run-a-command-in-your-terminal`) |

## Web copy
- **Headline:** Talk to it while it works.
- **Sub:** Add to the task mid-run, redirect it, answer its questions. And anything it wants to run in *your* terminal waits for your OK, every time.
- **CTA:** See how control works →

## Claims check
- Queue max 5; Stop holds the queue until you send again.
- `terminal_run` needs bash/zsh shell integration, single-line commands, and the tab idle at a prompt.
