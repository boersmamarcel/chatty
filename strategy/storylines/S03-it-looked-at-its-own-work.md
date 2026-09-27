# S03 — It looked at its own work

| | |
|---|---|
| **Persona** | P4 Marta (frontend / design engineer) |
| **Pillar** | Checked, not trusted + See everything |
| **Formats** | Homepage proof block, 60s video, `/for/frontend`, `/features/browser` |
| **Runtime** | 60s ≈ 7 beats |

**Logline:** A frontend developer asks Chatty to fix the checkout page on mobile; Chatty opens it in a real Chrome, screenshots it at 375px, sees the overflow, fixes the CSS and checks again, while the developer watches live and takes over the browser to sign in when needed.

## Before
> "I'm the agent's eyes. It writes CSS it has never seen rendered, I screenshot, paste, explain, repeat. Ten rounds for a button."

## The story

| # | Beat | On screen | Feature (docs) |
|---|---|---|---|
| 1 | Dev server on `localhost:3000`. *"Open the checkout page, screenshot it at 375px wide, and fix anything that overflows."* | Composer | Browser tools (`user/agents-and-tools.md#web-and-the-built-in-browser`) |
| 2 | A **live Chrome view** docks beside the chat; the page loads. | Browser artifact panel, streaming | Live screencast |
| 3 | The page is behind a login. Marta clicks **take control**, signs in herself (the agent never types into password fields), then **Hand back & continue**. | Take-control state; hand-back button | Take control / hand back |
| 4 | Agent resizes to 375px, takes a screenshot, and on its next turn describes what it sees: the promo-code row overflows, the pay button wraps. | Screenshot; model's critique | Self-review loop |
| 5 | Edits `checkout.css`: **diff card**. | Diff card | File tools, diffs |
| 6 | Reloads, re-screenshots: fixed. Clicks **Apply code** by snapshot reference to check the row still works. | Before/after; click row | `browser_click` (verified by reference) |
| 7 | Marta opens the file in the **file explorer**, tweaks a colour in the editable Source tab, Cmd/Ctrl+S. | Explorer, Source tab | File explorer (`user/chatting.md#file-explorer`) |

## The "aha"
Beat 4: the agent describes a visual bug *it found itself*, in a screenshot *it took*.

## After
The fix is verified visually, not just syntactically, and Marta spent her time on the one judgement call (the colour), not on being a screenshot relay.

## Script sketch (60s)
1. "Most AI agents write CSS they've never seen."
2. "Chatty opens the page in a real browser." *(live view)*
3. "You can take over any time." *(take control, sign in)*
4. "It looks." *(screenshot at 375px)* "It spots the problem." *(critique)*
5. "It fixes it, and checks again." *(before/after)*
End card: *It looked at its own work.*

## Web copy
- **Headline:** Finally, an agent that looks at what it built.
- **Sub:** Chatty drives a real Chrome beside the chat: it renders your page, screenshots it, spots what's off, fixes it and checks again. You watch live, and take the wheel whenever you want.
- **Bullets:**
  - Clicks and types by verified element reference, not by guessing coordinates.
  - Never types into password or card fields; you sign in yourself.
  - Local by default: `localhost` and your workspace files. The open web only when you allow it.
- **CTA:** See the browser →

## Production notes
- A small real app (Vite/Next) with a genuine mobile overflow bug.
- Chrome already installed, to avoid the ~190 MB first-run download on camera, or show the download progress honestly once.
- The screenshot is reviewed on the **next** turn. If the agent stops after capturing, say *keep going*; cut that for time, but don't hide it in the 3-min version.

## Claims check
- Browser tools need **Enable Browser Tools** + a workspace. Clicks/typing off-localhost always ask for approval, so keep this on localhost.
- Don't claim "works on any website" without the Internet toggle and its limits (private network blocked by default; cloud metadata always blocked).
