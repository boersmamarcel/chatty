# Chatty marketing site

The marketing site for [Chatty](https://github.com/boersmamarcel/chatty2), the AI coworker that works on your computer. It's deployed to GitHub Pages at <https://boersmamarcel.github.io/chatty/>.

- **Stack:** Vue 3, Vite, Tailwind, shadcn-vue components.
- **Facts the site states** (providers, platforms, links) live in `src/data/product.ts`. The release version is fetched from GitHub at page load, so it's never stale.
- **Recordings** in `public/media/` are copied from `chatty2/assets/animations/`.
- **Strategy, personas and storylines** behind the copy are in [`strategy/`](strategy/README.md).

```bash
npm ci
npm run dev      # http://localhost:5173/chatty/
npm run build
```
