# S19 — Client work stays client work

| | |
|---|---|
| **Persona** | P8 Femke (independent consultant) |
| **Pillar** | Your files stay on your computer + Finished files |
| **Formats** | Broad homepage hero montage, `/for/consultants` hero, 60s + 3-min video, LinkedIn |
| **Gates** | None for Ring 2 (needs the `/start` guided setup) |

**Logline:** A consultant turns a client's confidential interview notes and survey export into a findings report and a workshop deck, on her own laptop, with the model she chose for this client, and can tell the client exactly where their data went.

## Before
> "My client contract says no client data in AI tools without approval. ChatGPT's terms are a conversation I don't want to have with every client. So I do it by hand, at night."

## The story

| # | Beat | On screen | Feature |
|---|---|---|---|
| 1 | Folder `Clients/Acme-reorg` with 12 interview notes (Word) and `survey.xlsx`. | File explorer | Per-chat folder |
| 2 | Model selector: for this client she picks a local model (or her EU Azure deployment). Cost column: €0.00. | Model selector | Ollama / Azure |
| 3 | *"Summarise the main themes across the interviews, with quotes, and cross-check them against the survey."* Plan checklist. | Plan card | Plan |
| 4 | Themes table with quote counts; a chart of survey results by department. | Table, chart artifacts | Data query, charts |
| 5 | *"Write the findings report in Word, and a 6-slide workshop deck."* Report opens; slides render in the panel. | Word, PPTX preview | Word/PowerPoint write |
| 6 | She edits one slide title in PowerPoint itself. The files are simply in her folder. | PowerPoint | — |
| 7 | *"Save this as a skill: client-findings-pack."* Next client, one command. | Skill saved | Skills |
| 8 | She forwards the one-page privacy explainer to the client. | `/security` summary PDF | Trust page |

## The "aha"
Beat 2: the model is a choice per client, and a local one means the data never leaves the laptop at all.

## Web copy
- **Headline:** Client work stays client work.
- **Sub:** Chatty works on the files on your laptop and hands you the report and the deck. Choose a local model and nothing leaves your computer at all. No account, no subscription.
- **CTA:** Chatty for consultants →

## Claims check
- With a cloud model, the content the model reads goes to that provider under its terms; say this plainly next to the claim.
- Local-model quality for long synthesis varies; film with the model you'd actually recommend, and name it.
