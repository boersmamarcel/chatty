# Chatty marketing site

The marketing site for [Chatty](https://github.com/boersmamarcel/chatty2), the AI coworker that works on your computer. It's deployed to GitHub Pages at <https://boersmamarcel.github.io/chatty/>.

- **Stack:** Vue 3, Vite, Tailwind, shadcn-vue components.
- **Facts the site states** (providers, platforms, links) live in `src/data/product.ts`. The release version is fetched from GitHub at page load, so it's never stale.
- **Recordings** in `public/media/` are made with chatty2's recorder (`scripts/animations/record.sh`, real app, scripted model) in the app's **light** theme so they sit well on the light page. To regenerate: in a copy of `scripts/animations`, set `profile/general_settings.json` to `{"font_size":14.0,"theme_name":null,"dark_mode":false}`, record `hero artifact_pdf artifact_chart artifact_table artifact_markdown pr_status_bar` against a release AppImage, then trim the opening stills and the 12 px dark strip at the bottom and hold the last frame for 3 s:
  `ffmpeg -ss <start> -i in.gif -vf "crop=iw:ih-14:0:0,tpad=stop_mode=clone:stop_duration=3,split[a][b];[a]palettegen=stats_mode=diff[p];[b][p]paletteuse=dither=none:diff_mode=rectangle" -loop 0 out.gif`
  (start ≈ 2.6 s for the artifact clips, 3.0 s for `pr_status_bar`, 4.8 s for `hero`).
- **Strategy, personas and storylines** behind the copy are in [`strategy/`](strategy/README.md).

```bash
npm ci
npm run dev      # http://localhost:5173/chatty/
npm run build
```
