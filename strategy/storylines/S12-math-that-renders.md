# S12 — Math that renders

| | |
|---|---|
| **Persona** | P7 Lena (PhD student, lecturer, STEM researcher) |
| **Pillar** | Real deliverables + Yours (free, local) |
| **Formats** | `/for/research` section, three 15s loops (math, diagram, PDF), r/LaTeX-friendly post |
| **Runtime** | 45s ≈ 5 beats |

**Logline:** A PhD student works through a derivation with Chatty on a free local model; the equations render crisply in the chat, a diagram draws itself, and the result becomes a clean two-page PDF for the supervisor meeting.

## The story

| # | Beat | On screen | Feature (docs) |
|---|---|---|---|
| 1 | Ollama model, no API key, no cost. | Model selector showing local model; cost €0.00 | Ollama (`user/providers-and-models.md#ollama`) |
| 2 | *"Derive the closed form of the posterior for a Beta-Binomial model, step by step."* Inline and block math render in the theme colour; **Copy LaTeX**. | Math rendering | Math (`user/chatting.md#rich-rendering`) |
| 3 | *"Draw the model as a diagram."* A Mermaid diagram renders inline; **Copy as PNG**. | Mermaid | Mermaid |
| 4 | *"Typeset this as a two-page handout."* PDF opens in the panel. | PDF artifact | Typst PDF |
| 5 | *"Remember I use the notation from Gelman et al."* Memory applies next time. | Memory | Memory |

## Web copy
- **Headline:** Math that renders. PDFs you can hand in.
- **Sub:** Crisp LaTeX, diagrams and typeset PDFs, on a free local model if you like.
- **CTA:** Try it with Ollama →

## Claims check
- Local models vary a lot in math quality; show a model that does this well, and say which.
