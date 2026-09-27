# S02 — Checked, not trusted

| | |
|---|---|
| **Persona** | P1 Daan (developer, tech lead); P6 Kenji (agent builder) |
| **Pillar** | Checked, not trusted |
| **Formats** | Homepage proof block, 3-min walkthrough video, `/for/developers`, `/features/teams`, conference lightning talk |
| **Runtime** | 3-min ≈ 9 beats; 60s cut ≈ 5 beats (2, 4, 6, 7, 9) |

**Logline:** A tech lead gives a bug to a small team of agents (a leader who can only delegate, a coder on its own git branch, a reviewer who can't edit) and gets back a merged fix with proof: Chatty itself re-ran the tests, and the reviewer approved the diff.

## Before
> "The agent said 'all tests pass'. They didn't. It never ran them. Now I re-check everything it does, which is half the time I was supposed to save."

## The story

| # | Beat | On screen | Feature (docs) |
|---|---|---|---|
| 1 | Repo with a bug report: `withdraw` lets the balance go negative. Clean git tree. | Terminal: `git status` clean | — |
| 2 | One command: `chatty-tui --team coder-reviewer --ollama --model qwen3:14b -m "Fix Account.withdraw… Acceptance criteria… Verification: python3 -m unittest…"` (or the desktop app with named workers declared) | TUI transcript | Teams (`user/sub-agents.md#teams`) |
| 3 | The **leader** (role: `coordinator`) lists its team: cards show each worker's model and role. It *can't* edit. It has to delegate. | `list_agents` output; worker cards | Named workers and roles (`#named-workers-and-roles`) |
| 4 | The **coder** gets `sub-agent/local-coder-0`, its own git worktree. Progress streams into the leader's transcript. | Progress lines; branch name | Isolated file changes (`#isolated-file-changes`) |
| 5 | Coder finishes. **Chatty** (not the coder) commits the branch, then runs the verification command *in the worker's tree*. | — | `team.verification` |
| 6 | The **evidence block** arrives with the answer: branch, 1 commit, `bank.py +6 −1, tests/test_bank.py +18`, verification `exit 0`, last lines of the test run. | Fenced `evidence` block, highlighted | Evidence envelope |
| 7 | The **reviewer** (can run tests, can't write) reads the diff against `main`. First line: `APPROVE`. | Reviewer answer | Roles table |
| 8 | Leader merges the branch (`git_merge`). | Merge row | Git tools |
| 9 | Cost line: the conversation's cost includes both workers' spend as *delegated* lines. Local model → €0.00. | Cost column / usage | Delegated usage (`user/chatting.md#conversations-cost-and-search`) |

**Optional twist for the 3-min cut (and the most persuasive beat if it happens on camera):** the first attempt fails verification (`exit 1`) or the reviewer says `REQUEST CHANGES`, the leader sends it back, the second attempt passes. Only include it if it happens in a real run. Never stage it.

## The "aha"
Beat 5–6: the coder's claim is irrelevant. Chatty ran the tests itself and attached the exit code.

## After
A merged, reviewed, verified fix, a team definition (`team.json` + `SKILL.md`) checked into the repo, and a run you can repeat tomorrow on a different bug.

## Script sketch (60s)
1. "Agents say 'tests pass'. Sometimes they didn't run them."
2. "So Chatty doesn't ask. It checks." *(evidence block, `exit 0`)*
3. "Every worker gets its own branch." *(branch name)*
4. "A reviewer that can't edit, only judge." *(`APPROVE`)*
5. "Merged, with proof. On a model running on this laptop."
End card: *Checked, not trusted.*

## Web copy
- **Headline:** "Tests pass." Checked, not trusted.
- **Sub:** Give a task to a team of agents. Each worker gets its own git branch. When it's done, Chatty runs your verification command itself and attaches the result. A reviewer reads the diff before anything is merged.
- **Bullets:**
  - Roles that limit what each agent can do: coordinator, coder, reviewer.
  - A different model per worker, e.g. a local coder with a stronger reviewer.
  - Teams live in your repo as a small `team.json` and a playbook, so a run is reproducible.
- **CTA:** Build your first team in 20 minutes → (tutorial)

## Production notes
- Use the product's own tutorial project (`~/bank`, tutorial-named-worker → tutorial-team) so viewers can reproduce it exactly.
- Record the TUI (it's where `--team` lives) at a large font, plus a desktop version with `virtual_agents` declared for the homepage.
- `--auto-approve` is required for unattended workers; say so on screen ("runs unattended in a throwaway repo").

## Claims check
- Teams, roles, worktrees, evidence, verification: shipped Sep 12–15.
- Teams are **Unix only** (`--broker`/participants are `#[cfg(unix)]`). The page must say macOS & Linux.
- Local 14B models are slower and less reliable than frontier ones. Don't imply they always succeed first time. The honest framing is that the verification is what makes a weaker model usable.
- Named workers are configured by editing `module_settings.json` (no settings UI yet); the tutorial link covers it.
