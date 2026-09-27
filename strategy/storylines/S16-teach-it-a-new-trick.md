# S16 — Teach it a new trick

| | |
|---|---|
| **Persona** | P6 Kenji (agent builder / tinkerer) |
| **Pillar** | Yours (extensible, open) |
| **Formats** | `/for/ai-builders`, dev tutorial page, 3-min coding video |
| **Runtime** | 3-min ≈ 5 beats |

**Logline:** A developer wants Chatty to do something domain-specific: detect fraud with Benford's law. They either point it at an MCP server they already run, or build a small sandboxed WASM agent module in an afternoon.

## The story

| # | Beat | On screen | Feature (docs) |
|---|---|---|---|
| 1 | Fastest path: Settings → Extensions → **Add MCP Server** with a URL. Tools appear on the next message; keys are masked from the model. | Add server form | Custom MCP (`user/extensions.md#add-a-custom-mcp-server`) |
| 2 | Deeper path: follow the **benford-agent** tutorial to build a WASM module. | Code editor | Build a WASM module (dev guide) |
| 3 | Install it locally; the agent calls it like any other agent (`/agent benford …`, or the model decides). | Transcript | Modules, `invoke_agent` |
| 4 | It runs sandboxed (WebAssembly). | — | WASM runtime |
| 5 | *(later, when public)* Publish to Hive, where every module is signed and verifiable. | — | Hive (not yet public) |

## Web copy
- **Headline:** Give it new skills in any language that compiles to WebAssembly, or any MCP server.
- **CTA:** Build your first module →

## Claims check
- Hive marketplace publishing: **not public yet**; mark as "coming".
- Verify which languages the module SDK supports before naming any.
