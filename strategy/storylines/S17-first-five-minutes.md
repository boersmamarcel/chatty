# S17 — The first five minutes

| | |
|---|---|
| **Persona** | Everyone; tuned for P3 Sam (least technical) |
| **Pillar** | Steer anytime (a trust ladder) |
| **Formats** | `/download` page, 2-min onboarding video, docs "Getting started" embed, homepage "How it works" |
| **Runtime** | 2 min ≈ 6 beats |

**Logline:** From download to a first useful result in five minutes, climbing a *trust ladder*: chat first, then files, then commands, with the agent never able to do more than you've switched on.

## The ladder

| Rung | What you do | What the agent can do | Docs |
|---|---|---|---|
| 0. Install | Download (`.dmg` / AppImage / `.exe`) | — | `user/getting-started.md#1-install` |
| 1. Connect a model | Paste an OpenRouter key → **Test** → *Key verified*, or just run Ollama (found automatically) → **Add model** from the catalogue | Chat, web search & fetch (Internet is on by default) | `#2-connect-a-provider-and-add-a-model` |
| 2. First message | The start screen shows what's switched on. Ask something; see the cost. | Answer, render math/code/diagrams | `#3-send-a-message` |
| 3. Give it a folder | Settings → Code Execution → Workspace + **Enable Code Execution** | Read, write, run commands **inside that folder**, sandboxed | `user/agents-and-tools.md#enable-tools` |
| 4. Choose how much to trust | Approval mode: Always Ask → Auto-approve Sandboxed (default) → Auto-approve All | Exactly what the mode allows | `user/security.md#approval-modes` |
| 5. Go further | Terminal dock (Ctrl/Cmd+J), browser tools, Install CLI…, extensions | … | — |

## Web copy ("How it works", replaces the current three steps)
1. **Download.** macOS, Linux or Windows. Free, open source.
2. **Pick your model.** One OpenRouter key for hundreds of models, your Azure OpenAI deployments, or a local model with Ollama, no key at all.
3. **Hand it a folder.** Chatty works in the folder you choose, in a sandbox, and asks before anything you haven't pre-approved. You see every step.

**Terminal person?** `chatty-tui --ollama`: a full agent in your terminal, no setup.

## Claims check
- Linux AppImage needs FUSE 2 (document it on `/download`).
- Default approval mode is **Auto-approve Sandboxed**; on Windows (no sandbox) commands therefore ask. Say so.
