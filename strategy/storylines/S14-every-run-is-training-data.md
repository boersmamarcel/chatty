# S14 — Every run is training data

| | |
|---|---|
| **Persona** | P6 Kenji (AI engineer), P2 Priya (wants a model tuned on internal work) |
| **Pillar** | Yours (your data, open formats) |
| **Formats** | `/for/ai-builders`, technical blog post, conference talk |
| **Runtime** | Blog-first; 60s video optional |

**Logline:** An AI engineer uses Chatty for daily work with auto-export on; every conversation becomes an agent trajectory (ATIF) and every Regenerate a preference pair. A month later they fine-tune a small local model on it elsewhere, serve it with Ollama, and point Chatty at it.

## The story

| # | Beat | On screen | Feature (docs) |
|---|---|---|---|
| 1 | Settings → Training Data → **Auto-export ATIF** and **Auto-export JSONL**. | Settings | Training-data export (`user/advanced.md#training-data-export`) |
| 2 | Normal work. When an answer is bad, **Regenerate**: the original becomes *rejected*, the new one *chosen*. Thumbs up/down recorded. | Regenerate | DPO pairs |
| 3 | `exports/`: one ATIF file per conversation (messages, tool calls, reasoning, token counts, following the Harbor trajectory format), plus `sft.jsonl` (ChatML, tool calls included) and `dpo.jsonl`. | File listing | Export formats |
| 4 | *(outside Chatty)* Fine-tune with your usual stack. | — | — |
| 5 | `ollama create my-agent …` → the model appears in Chatty's roster automatically. Use it as the coder in a team (S02) and let verification tell you if it's good enough. | Roster; team run | Ollama discovery, named workers |

## Web copy
- **Headline:** Your work, your dataset.
- **Sub:** Every conversation can export as an agent trajectory or as SFT and DPO data, in open formats, to a folder on your machine.
- **CTA:** Export formats →

## Claims check
- Chatty exports; it does **not** fine-tune. Say so.
- ATIF follows the Harbor trajectory format; link it.
- Remind users their data may include secrets or client data; the export is local, and what they do with it is their responsibility.
