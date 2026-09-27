# S09 — The right model for each job

| | |
|---|---|
| **Persona** | P1 Daan (cost-aware developer), P2 Priya, P6 Kenji |
| **Pillar** | Yours + See everything (cost you can see) |
| **Formats** | `/features/models`, 60s video, blog post "What a day of agent work cost me" |
| **Runtime** | 60s ≈ 6 beats |

**Logline:** A developer mixes models the way they'd staff a project: a cheap or local model for the legwork, a strong one for review. Chatty shows exactly what each reply, each conversation and each sub-agent cost.

## Before
> "One vendor, one model, one opaque monthly bill. I have no idea which tasks are expensive."

## The story

| # | Beat | On screen | Feature (docs) |
|---|---|---|---|
| 1 | Settings → Models & Providers: one OpenRouter key, then **Add model** from the catalogue; prices fill themselves in. Ollama models appear automatically. | Roster with price column | Providers & models (`user/providers-and-models.md`) |
| 2 | Each reply shows its input/output tokens and cost; the sidebar shows the running cost per conversation. | Reply footer; sidebar cost | Cost (`user/chatting.md#conversations-cost-and-search`) |
| 3 | Context fill bar, split into system / tools / history / latest; hover for per-segment numbers. | Fill bar + popover | Context window (`user/chatting.md#context-window`) |
| 4 | Switch model mid-conversation for the hard step. | Model selector | Composer |
| 5 | Named workers: a local `qwen2.5-coder` coder and an OpenRouter reviewer, each with its own model and turn budget. The parent's cost line includes each worker's spend as a delegated line. | `module_settings.json`; cost with delegated lines | Named workers (`user/sub-agents.md#named-workers-and-roles`) |
| 6 | Prompts are append-only, so the provider's prompt cache keeps hitting; cached input is priced at the cached rate. | Cost detail showing cache reads | Prompt caching note |

## Web copy
- **Headline:** Every model. Every cost, visible.
- **Sub:** One OpenRouter key for hundreds of models, your Azure deployments, or free local models via Ollama. Switch per message, give each sub-agent its own model, and see the cost of every reply.
- **CTA:** Connect a model →

## Proof to create
Log one real working day (`--usage-file` + the sidebar) and publish the number, e.g. "a full day of agent work: €X on model Y". Until then, no savings claims.

## Claims check
- Prices come from the OpenRouter catalogue or per-model settings; Azure/Ollama prices are what you enter. Cost is an estimate from those rates.
- Don't state a "% cheaper with caching" figure without measurement.
