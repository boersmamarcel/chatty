# S05 — Nothing leaves the building

| | |
|---|---|
| **Persona** | P2 Priya (regulated / IP-sensitive engineer); P5 Olu |
| **Pillar** | Yours + Steer anytime |
| **Formats** | Homepage section 3, `/for/private-ai` hero, `/security` trust page, 60s video, whitepaper-style blog post for IT/security reviewers |
| **Runtime** | 60s ≈ 7 beats |

**Logline:** An engineer whose code may not touch a public AI service runs a full agent (files, shell, sub-agents) against her company's own model endpoint, and can show her security team exactly what it can touch and where every byte goes.

## Before
> "Legal approved our Azure OpenAI tenant and we have a GPU box running vLLM. But every agent I find either talks to its own cloud or phones home. The chat UIs that don't can't actually do anything."

## The story

| # | Beat | On screen | Feature (docs) |
|---|---|---|---|
| 1 | In a terminal: `chatty-tui --openai-compat-url http://gpu-box:8000 --model qwen3-coder`. No key stored, no desktop app needed. | TUI welcome screen listing model, workspace, tool groups | Zero-config quick start (`user/terminal.md#zero-config-quick-start`) |
| 2 | *(alt. desktop)* Settings → Models & Providers → **Azure OpenAI** → **Use Entra ID instead of a key** → Connect & fetch models. | Azure sheet | Azure OpenAI (`user/providers-and-models.md#azure-openai`) |
| 3 | The start screen shows exactly what's on: file access, shell, memory, MCP, modules. Tools are **off by default**. | Start screen | Getting started (`user/getting-started.md#3-send-a-message`) |
| 4 | Workspace set; **Approval Mode: Always Ask**; **Network Isolation** on. The Agent tab says *sandboxed · no network*. | Settings → Code Execution; Agent tab label | Security & sandboxing (`user/security.md`) |
| 5 | *"Find where we build the DB connection string and make it read from env."* The agent uses `$DB_URL` from **Secrets**; the tool output shows the value masked. | Tool row with masked value | Secrets (`user/security.md#secrets`) |
| 6 | To show security, Priya asks it outright: *"List ~/.ssh."* In the sandbox there's nothing to list. Meanwhile every write waits on an approval card showing the exact command. | Approval card; empty/missing `~/.ssh` in the sandboxed shell | Shell sandbox, approval modes |
| 7 | Priya opens the **trust page** she'll forward to security: no telemetry, no relay, where every file lives, the full list of network destinations, MIT source. | `/security` page | Advanced (`user/advanced.md#where-chatty-stores-data`) |

## The "aha"
Beat 1: a full agent in one command, pointed at *your* endpoint. Beat 6: even when asked directly, the agent can't see the SSH keys.

## After
An approved, auditable agent workflow. Security can read the source and the trust page; IT keeps the model inside the tenant.

## Script sketch (60s)
1. "Your code can't go to a public AI service."
2. "So point Chatty at your own model." *(one command)*
3. "Tools are off until you turn them on." *(start screen)*
4. "Commands run in a sandbox. Your SSH keys aren't in it." *(sandbox)*
5. "Secrets are used, never shown." *(masked)*
6. "No telemetry. No relay. Open source." *(trust page)*
End card: *Your model. Your machine. Your rules.*

## Web copy
- **Headline:** An agent that works where your policy says it can.
- **Sub:** Run Chatty against your Azure OpenAI tenant, your own vLLM or llama.cpp server, or Ollama on your laptop. Conversations and memory stay on your machine, nothing is sent to us, and every side effect goes through rules you set.
- **Bullets:**
  - Azure OpenAI with Entra ID sign-in, or any OpenAI-compatible server in one flag.
  - Sandboxed shell (Linux & macOS) that can't see `~/.ssh`, `~/.aws` or `~/.gnupg`; optional no-network mode.
  - Secrets passed as environment variables whose values the model never sees.
- **CTA:** Read the security model →

## Production notes
- Film against a real local server (vLLM or Ollama) to be honest about "local".
- Keep the task simple enough for the local model to do reliably; a mid-size coder model.
- The trust page (beat 7) must exist first; see `04-website-plan.md`.

## Claims check
- **Windows has no shell sandbox**: say so on the page, near the claim.
- On Linux the sandbox needs `bubblewrap` installed; without it commands run unsandboxed and count as such (they then ask under Auto-approve Sandboxed).
- "Nothing leaves": precise version is "Chatty sends traffic only to the providers, MCP servers, agents and sites you configure, plus GitHub for update checks." Mention update checks explicitly; security reviewers will find them.
- Web access (Settings → Internet) is **on by default**. For this persona, the guide should say to switch it off.
- Smaller local models are weaker at multi-step tool use; say "works best with…", with a tested list.
