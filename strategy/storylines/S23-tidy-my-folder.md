# S23 — Tidy my folder

| | |
|---|---|
| **Persona** | Everyone; P12 Joris as the face |
| **Pillar** | You stay in charge + See every step |
| **Formats** | **Broad homepage hero opener**, 15s loop, 45s social video, YouTube how-to |
| **Gates** | G2 for Ring 3 (plain folder setup) |

**Logline:** Someone points Chatty at a chaotic Downloads folder; it proposes a plan, asks before touching anything, sorts and renames 200 files into sensible folders while the file tree updates live, and writes a short summary of what went where.

## Before
> "My Downloads folder has 600 files called `scan0023.pdf` and `final_v3_REAL.docx`."

## The story

| # | Beat | On screen | Feature |
|---|---|---|---|
| 1 | Approval mode: **Always Ask**. Folder: `Downloads`. | Settings chip / start screen | Approval modes |
| 2 | *"Organise this folder: group by type and topic, give files clear names with dates. Don't delete anything."* | Composer | — |
| 3 | It reads names and contents, then proposes a plan: folders *Invoices / Contracts / Travel / Photos / Manuals / Unsorted* and a naming pattern. Asks: *"OK to proceed?"* | Plan card; question card | Plan, clarifying question |
| 4 | Approve the batch. The sidebar's file tree reorganises itself live. | File explorer updating | File tools, live tree |
| 5 | `WHAT-WENT-WHERE.md` opens: old name → new location, and the 12 files it wasn't sure about in *Unsorted*. | Markdown artifact | Artifacts |

## The "aha"
Beat 4: you watch the folder tidy itself, and it waited for your OK.

## Web copy
- **Headline:** Hand it the mess. Watch it tidy up.
- **Sub:** Chatty proposes a plan, asks before it moves anything, and shows you every change as it happens.
- **CTA:** Download free →

## Production notes
- Use a synthetic messy folder (publish it in `chatty-demos`).
- Show "Don't delete anything" in the prompt: moves and renames are recoverable, deletes aren't (the product docs say deletion can't be undone).

## Claims check
- Chatty has no undo. Never imply it; the `WHAT-WENT-WHERE.md` log is the recovery path, so make the prompt ask for it.
- Under Auto-approve Sandboxed, workspace file writes apply without asking; the demo must use Always Ask to match the copy.
