# S21 — Briefing by nine

| | |
|---|---|
| **Persona** | P9 Anouk (policy analyst, public sector) |
| **Pillar** | Your data stays yours + Checked (sources) |
| **Formats** | `/for/public-sector`, 60s + 3-min video, sovereignty/open-government channels |
| **Gates** | None for Ring 2; the IT-facing claims need `/security` live |

**Logline:** At 17:00 a policy analyst gets 40 consultation responses as PDFs and a request for a briefing by 9:00; Chatty, on the organisation's EU-hosted or local model, reads them all and drafts a briefing note in the house Word template, every point referenced to the response and page it came from.

## The story

| # | Beat | On screen | Feature |
|---|---|---|---|
| 1 | Folder with 40 PDFs and `briefing-template.docx`. Model: the organisation's Azure OpenAI (EU region, Entra ID sign-in) or a local model. | Model selector | Azure Entra ID / Ollama |
| 2 | *"Read all responses. Group positions by stakeholder type. Draft a 2-page briefing in the template, citing response and page for every point."* | Plan card | Plan |
| 3 | Progress: "Read 40 files", turn counter, elapsed time; she queues a follow-up: *"also note anything about costs to municipalities"*. | Progress; queued message | Run progress, message queue |
| 4 | Briefing in the Word template, with footnoted sources (response #, page). | Word document | Word write |
| 5 | She spot-checks two citations against the PDFs in the panel. | PDF viewer | Artifact panel |
| 6 | IT's question "where did the data go?" is answered by the trust page and the source code. | `/security` | Trust page |

## Web copy
- **Headline:** AI help with your documents that respects your data rules.
- **Sub:** Run Chatty on your organisation's own EU-hosted model or fully on your computer. It reads the stack, writes the briefing in your template, and cites every point.
- **CTA:** Chatty for the public sector →

## Claims check
- Don't say "GDPR compliant" (a product can't be compliant by itself). Say "designed so you can keep data where your rules require".
- 40 long PDFs can exceed a model's context; Chatty's context management handles long runs, but test the exact scenario and state the tested volume.
