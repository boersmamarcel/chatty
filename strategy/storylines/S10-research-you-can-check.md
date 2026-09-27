# S10 — Research you can check

| | |
|---|---|
| **Persona** | P3 Sam (analyst), P7 Lena (academic) |
| **Pillar** | Real deliverables (+ Checked) |
| **Formats** | `/for/research`, 60s video, blog post on the reranker evaluation |
| **Runtime** | 60s ≈ 6 beats |

**Logline:** A researcher asks for a sourced briefing on a topic; Chatty searches, reads the pages (falling back to the Internet Archive when a page is gone), and writes a Markdown brief with a diagram and a PDF, with every claim linked to where it came from.

## The story

| # | Beat | On screen | Feature (docs) |
|---|---|---|---|
| 1 | *"Brief me on EU AI Act obligations for general-purpose model providers: sources, timeline, what's still unclear."* | Composer | — |
| 2 | Search runs keyless out of the box (or via Tavily/Brave with a key); pages are fetched as readable text, paged when long. | Tool rows: search, fetch | Web (`user/agents-and-tools.md#web-and-the-built-in-browser`) |
| 3 | One cited page is gone. Chatty serves the **Wayback Machine** copy, labelled with its capture date. | Fetch row with archive label | Wayback fallback |
| 4 | A page contains text written to look like instructions to the agent. It's reported as page content, not obeyed. | Answer noting it | Prompt-injection framing (`user/security.md#browser-and-web`) |
| 5 | A **Markdown** brief opens in the panel, with a Mermaid timeline drawn inline; every claim has a link. | Markdown artifact with Mermaid | Artifacts |
| 6 | *"Typeset it as a PDF."* | PDF artifact | Typst PDF |

## Web copy
- **Headline:** Research with receipts.
- **Sub:** Chatty searches, reads the actual pages (even ones that have since disappeared, via the Internet Archive) and writes a brief where every claim links to its source.
- **Bullet with a number:** Optional local reranker: in our evaluation, the right page reached the top five results 57% of the time, up from 48%.
- **CTA:** See research use cases →

## Claims check
- Keyless search is "basic"; Tavily/Brave keys give better results. The reranker numbers are **"in our evaluation"** and apply only to keyless search.
- Link every claim to its source; don't say "fact-checked".
