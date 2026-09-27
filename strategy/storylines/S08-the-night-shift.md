# S08 — The night shift

| | |
|---|---|
| **Persona** | P5 Olu (ops / platform), P2 Priya |
| **Pillar** | Yours (a Unix tool, not a chat window) |
| **Formats** | `/for/automation`, blog post with copy-paste recipes, 45s terminal-only video |
| **Runtime** | 45s ≈ 5 beats |

**Logline:** An ops engineer wires Chatty into a nightly job: stdin in, answer out, a hard time budget and a JSON receipt of every token spent. Tuesday morning there's a summary waiting and a cost line for the dashboard.

## Before
> "I want an agent in cron and CI, not a chat window. The ones I tried hang forever or give me no machine-readable idea of what they cost."

## The story

| # | Beat | On screen | Feature (docs) |
|---|---|---|---|
| 1 | `git log --since=yesterday -p \| chatty-tui --pipe --only fs-read,git --max-duration 10m --usage-file /var/log/chatty/usage.json > digest.md` | Terminal | Modes, flags (`user/terminal.md#modes`) |
| 2 | `--only` gives exactly the tool groups named: read-only here, no shell. | Flag | `--only` / `--enable` / `--disable` |
| 3 | The run ends within its wall-clock budget; past 85% the agent is told how long it has left, and past the deadline it has to wrap up. | stderr log | Unattended-run robustness |
| 4 | `cat usage.json`: tokens, cache reads, model calls, tool calls, `"exit":"completed"`. The file is written atomically after every call, even on SIGTERM. | JSON | Usage file (`user/terminal.md#usage-file`) |
| 5 | Chain: `chatty-tui --headless -m "List TODOs in src/" \| chatty-tui --pipe`. With `--broker`, a headless leader can fan out to sub-agents. | Two-stage pipe | Sub-agents from the terminal (`user/sub-agents.md#from-the-terminal`) |

## Web copy
- **Headline:** An agent that behaves like a Unix tool.
- **Sub:** Pipe text in, get an answer out. Set a time budget, pick exactly which tools it may use, and get a JSON receipt of what it spent, even if the job is killed.
- **CTA:** Recipes for cron and CI →

## Recipes to publish alongside (blog/`/for/automation`)
1. Nightly commit digest (above).
2. PR description drafter: `git diff main... | chatty-tui --pipe`.
3. Log triage: `journalctl -u app --since -1h | chatty-tui --pipe --only fetch`.
4. Local-only CI helper with `--ollama` (no key in CI secrets).

## Claims check
- `--broker` is Unix only. `--usage-file` applies to headless/pipe only.
- A failed/empty completion exits non-zero, so it's safe in `set -e` scripts. Test before claiming in copy.
- `--auto-approve` is needed for write tools in unattended runs; recommend `--only` read-only groups for CI.
