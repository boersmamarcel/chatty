# S07 — Your agent, inside Zed

| | |
|---|---|
| **Persona** | P1 Daan (editor-first developer) |
| **Pillar** | Foundation: everywhere you work (+ Yours) |
| **Formats** | `/features/editor`, 30s video, Zed community post, docs tutorial |
| **Runtime** | 30s ≈ 4 beats |

**Logline:** A developer who never leaves Zed adds Chatty as an external agent with a few lines of JSON and gets Chatty's tools, models and approvals in the editor's own agent panel.

## The story

| # | Beat | On screen | Feature (docs) |
|---|---|---|---|
| 1 | Zed → Agent Settings → Add Custom Agent: `"command": ".../chatty-tui", "args": ["acp"]`. | Zed settings JSON | ACP (`user/terminal.md#use-chatty-as-an-agent-in-zed-or-vs-code`) |
| 2 | Pick **Chatty** in the Agent Panel; ask for a refactor. Tool calls, touched files and the to-do plan appear natively in Zed. | Zed agent panel | ACP mapping |
| 3 | A write needs approval: Zed shows **Allow / Deny**, and it's Chatty's approval mode working through the editor. | Zed permission prompt | Approvals over ACP |
| 4 | Same memory, models and MCP servers as the desktop app. Close Zed, open the desktop app, and the memory is still there. | Split: Zed / Chatty desktop | Shared configuration |

## Web copy
- **Headline:** Chatty, in your editor.
- **Sub:** Run Chatty as the agent inside Zed, or VS Code, Cursor and Windsurf through an ACP extension. Same models, tools, memory and approvals as the desktop app.
- **CTA:** Set it up in Zed →

## Claims check
- Zed: native. VS Code/Cursor/Windsurf: **via a third-party ACP extension**; Chatty doesn't appear in Copilot Chat. JetBrains/Neovim: "should work", not tested. Say exactly that.
- Not over ACP yet: clarifying questions, editor-provided MCP servers, images in prompt, reopening threads, `--team`.
- Each editor thread is its own chatty conversation; say "same memory", not "same conversation".
