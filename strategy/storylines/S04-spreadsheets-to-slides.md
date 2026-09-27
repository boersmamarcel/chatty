# S04 — From three spreadsheets to Monday's deck

| | |
|---|---|
| **Persona** | P3 Sam (analyst / consultant) |
| **Pillar** | Real deliverables (+ See: the SQL behind every number) |
| **Formats** | Homepage section 2, 60s video, 3-min walkthrough, `/for/analysts` hero, LinkedIn cut |
| **Runtime** | 60s ≈ 6 beats; 3-min ≈ 9 beats |

**Logline:** On Friday afternoon an analyst drops three exports into a folder and asks for a Monday summary; Chatty queries them, charts them, writes a two-page PDF and a short slide deck, all rendered beside the chat with the SQL behind every number one tab away.

## Before
> "I paste a sample into ChatGPT because I can't upload the client file, get a chart as an image I can't edit, rebuild it in Excel, then rebuild the slides. And I still can't tell my manager exactly how a number was computed."

## The story

| # | Beat | On screen | Feature (docs) |
|---|---|---|---|
| 1 | Sam sets the conversation's working folder to `Q3-exports/` (folder icon). The sidebar's **Files** view shows `sales_eu.xlsx`, `sales_us.csv`, `targets.parquet`. | File explorer in sidebar | Per-chat working directory, file explorer (`user/chatting.md#file-explorer`) |
| 2 | *"Combine these, show revenue by region for the last four quarters against target."* | Composer | — |
| 3 | A **table** artifact opens, with a **SQL** tab beside it. Sam clicks it: the query, readable. | Table artifact + SQL tab | Data and documents (`user/agents-and-tools.md#data-and-documents`) |
| 4 | *"Chart it."* A bar chart renders natively, theme-aware; **Copy as PNG**. | Chart artifact | Charts (`user/chatting.md#artifacts`) |
| 5 | *"Write a two-page PDF summary for the board, and a 4-slide deck."* A typeset **PDF** pages in the panel; then the **.pptx renders as real slides**, Prev/Next. | PDF artifact; PPTX slides | PDF (Typst), PowerPoint |
| 6 | Sam opens the Markdown draft in the explorer, fixes one sentence in the Source tab, saves. The files are in the folder, ready to send. | Source tab, Cmd/Ctrl+S | Editable Source tab |
| 7 *(3-min)* | The model **asks** before guessing: *"EU figures are in EUR, US in USD. Convert at which rate?"* (`ask_user` card with options) | Clarifying-question card | `ask_user` |
| 8 *(3-min)* | Cost of the whole run visible in the sidebar. | Cost | Cost tracking |
| 9 *(3-min)* | *"Save what you just did as a skill called monthly-board-pack."* → leads into S15. | Skill saved | Skills |

## The "aha"
Beat 3: every number has its query one click away. Beat 5: the deck is real slides, not a text outline.

## After
A PDF and a deck in the folder, numbers Sam can defend, and a skill to repeat it next month. The client data never went into a web app.

## Script sketch (60s)
1. "Three spreadsheets. One Friday afternoon."
2. "Ask for the numbers…" *(table)* "…and see the query behind them." *(SQL tab)*
3. "Ask for the chart." *(chart)*
4. "Ask for the report." *(PDF)* "And the deck." *(slides)*
5. "It's all in your folder. Nothing went anywhere else."
End card: *Ask for the report. Get the PDF.*

## Web copy
- **Headline:** Ask for the report. Get the PDF.
- **Sub:** Point Chatty at a folder of spreadsheets. It queries them, charts them and writes the PDF and the slides, right beside the chat, with the SQL behind every number one tab away.
- **Bullets:**
  - Excel, CSV, Parquet and JSON, queried in place; no Python to install.
  - Charts, typeset PDFs and real PowerPoint slides you can open, edit and send.
  - Your files stay on your laptop.
- **CTA:** See it for analysts →

## Production notes
- Use a realistic but synthetic dataset (publish it in the repo so viewers can replay it).
- A frontier model via OpenRouter reads best for this one; show the model name.
- Light theme for the LinkedIn cut.

## Claims check
- "Files stay on your laptop": true for Chatty's storage, but **the rows the agent reads are sent to the model provider you chose**. The accurate line is "nothing goes to us; only what the model reads goes to the model provider you chose, or nowhere at all with a local model." Put this in the `/for/analysts` FAQ.
- Writing spreadsheets and files follows the approval mode (Auto-approve Sandboxed applies them inside the workspace).
- Don't promise pixel-perfect PowerPoint fidelity; the preview is a rendering of the deck.
