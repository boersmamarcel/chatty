# S18 — The Monday pile

| | |
|---|---|
| **Persona** | P12 Joris (small-business owner / office manager); P8 Femke |
| **Pillar** | Real deliverables + You stay in charge |
| **Formats** | `/for/small-business`, `/for/consultants`, 60s video, LinkedIn/YouTube how-to |
| **Gates** | Ring 3: G1 (no-key setup), G2 (plain folder setup). Email drafting: G3 (Gmail connector verified) |

**Logline:** On Monday morning an office manager points Chatty at a folder of last week's supplier invoices (PDFs) and the payments spreadsheet; Chatty matches them, flags what's unpaid or wrong, updates the sheet and drafts the reminder emails, asking before it changes anything.

## Before
> "Every Monday I open 30 PDFs and tick them off against the spreadsheet by hand. It takes the whole morning and I still miss one."

## The story

| # | Beat | On screen | Feature |
|---|---|---|---|
| 1 | Folder `Invoices/week-38` with 30 PDFs and `payments.xlsx`, chosen as the conversation's folder. | File explorer | Per-chat folder, file explorer |
| 2 | *"Match every invoice to a payment in payments.xlsx. Tell me what's unpaid, paid twice, or has a different amount."* | Plan checklist appears: read invoices → read sheet → match → report | Plan card |
| 3 | Chatty reads each PDF (supplier, number, amount, due date). | Activity line: "Read 30 files" | PDF text extraction |
| 4 | It asks: *"Two invoices from Bakkerij Jansen have the same number. Treat as duplicate?"* Options + own answer. | Question card | Clarifying questions |
| 5 | Result table: 3 unpaid, 1 paid twice, 1 amount mismatch, with the SQL one tab away for the curious. | Table artifact | Data query |
| 6 | *"Add a status column to payments.xlsx."* Approval card: *write payments.xlsx*. Approve. | Approval card; updated sheet | Excel write, approvals |
| 7 | *"Draft reminder emails for the unpaid ones."* Three drafts in Gmail, not sent. *(gated on G3)* | Drafts | Gmail connector |

## The "aha"
Beat 4: it noticed the duplicate and asked, instead of guessing.

## After
The morning back, a spreadsheet that's up to date, and nothing sent or changed without a yes.

## Web copy
- **Headline:** The Monday paperwork, done before your coffee's cold.
- **Sub:** Point Chatty at a folder of invoices and your payments sheet. It matches them, flags what's off, and updates the sheet, asking before it changes anything.
- **CTA:** See Chatty for small businesses →

## Claims check
- Scanned (image-only) invoices need a vision-capable model; text PDFs work with any model.
- Invoice contents go to the chosen model provider (or nowhere with a local model); say so on the page.
- Use synthetic invoices with fictional suppliers in the recording.
