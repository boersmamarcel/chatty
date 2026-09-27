# S11 — From meeting notes to tickets

| | |
|---|---|
| **Persona** | P3 Sam (consultant / ops / PM-ish analyst); team leads |
| **Pillar** | Real deliverables (in the tools you already use) |
| **Formats** | `/features/extensions`, 60s video |
| **Gates** | **Blocked today**: Chatty's MCP client speaks streamable HTTP only, while Notion and Atlassian serve SSE, so both need a local bridge (e.g. `mcp-proxy`). Produce only after SSE support ships (G3 in `07-broad-audience.md`), or film for a technical audience with the bridge shown. |
| **Runtime** | 60s ≈ 5 beats |

**Logline:** After a planning call, a team lead drops the notes into Chatty; it creates the Jira issues, writes the Confluence summary and drafts the follow-up email, using the built-in Atlassian and Google connections that sign in once and keep their tokens on the laptop.

## The story

| # | Beat | On screen | Feature (docs) |
|---|---|---|---|
| 1 | Settings → Extensions → Installed: **Enable** Atlassian, then sign in in the browser (today this requires an SSE bridge, see Gates). Same for Gmail. | Extensions page | Built-in catalog (`user/extensions.md#built-in-catalog`) |
| 2 | Paste the notes (long paste becomes a compact reference). *"Create Jira issues for each action item in project OPS, assign as discussed."* | Paste reference chip | Long pastes |
| 3 | The agent asks one clarifying question (*"Two items have no owner. Assign to you?"*) via a question card. | `ask_user` card | Clarifying questions |
| 4 | Issues created; a Confluence page with the summary; links in the reply. | Tool rows; links | MCP tools |
| 5 | *"Draft the follow-up email to the attendees"* → Gmail draft. | Tool row | Gmail |

## Web copy
- **Headline:** Works with the tools your team already uses.
- **Sub:** Connect Google Calendar, Gmail, Drive and Hugging Face from a built-in list, and plug in any MCP server you run. Sign-in tokens stay on your machine. *(Add Notion and Jira/Confluence to this line only once they connect without a bridge.)*
- **CTA:** See extensions →

## Claims check
- Notion/Atlassian: SSE-only upstream; Chatty's client is streamable-HTTP-only (`docs/curated-mcp-catalog.md` in chatty2, "Transport caveat").
- **Verify each connector end to end before filming**; they're third-party MCP servers with their own sign-in flows.
- Check whether MCP tool calls go through approval and describe that accurately.
- Don't mention the Hive marketplace as live (no public registry yet).
