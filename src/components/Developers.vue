<script setup lang="ts">
import { SquareTerminal, GitBranch, Code2 } from "lucide-vue-next";
import { links } from "@/data/product";

const base = import.meta.env.BASE_URL;

const items = [
  {
    icon: SquareTerminal,
    title: "A terminal you share",
    text: "A terminal dock under the chat. The agent's own shell is a pinned tab: every command in full, and you can type into it too. Share your own tabs per tab, read-only or read + run. Commands in your shell always ask first.",
    href: links.terminalDock,
  },
  {
    icon: GitBranch,
    title: "Checked, not trusted",
    text: "Hand work to a team of agents: each worker on its own git branch, a reviewer that can't edit, and your test command run by Chatty itself, not the agent, with the result attached.",
    href: links.teamTutorial,
  },
  {
    icon: Code2,
    title: "In your terminal and your editor",
    text: "The same agent as a terminal app (interactive, headless or piped) and inside Zed through the Agent Client Protocol. It reads your AGENTS.md / CLAUDE.md and the skills you already have.",
    href: links.terminal,
  },
];

const snippet = [
  "# a full agent against a local model, no setup",
  "$ chatty-tui --ollama",
  "",
  "# pipe anything in, get the answer on stdout",
  "$ git diff main | chatty-tui --pipe",
  "",
  "# a coder and a reviewer, verified before merge",
  '$ chatty-tui --team coder-reviewer -m "Fix the overdraft bug"',
];
</script>

<template>
  <section id="developers" class="bg-ink py-20 text-white md:py-28">
    <div class="container">
      <div class="max-w-3xl">
        <p class="text-sm font-semibold uppercase tracking-wider text-sun">For developers</p>
        <h2 class="mt-2 text-3xl font-bold leading-tight md:text-5xl">
          The power of a coding agent. The visibility of a desktop app.
        </h2>
        <p class="mt-4 text-lg text-white/70">
          On any model: hundreds via OpenRouter, Azure OpenAI, Ollama, or any OpenAI-compatible server.
        </p>
      </div>

      <div class="mt-12 grid gap-10 lg:grid-cols-2">
        <div class="space-y-8">
          <a v-for="i in items" :key="i.title" :href="i.href" target="_blank" class="group flex gap-4">
            <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-sun">
              <component :is="i.icon" class="size-5" />
            </span>
            <span>
              <span class="block text-lg font-semibold group-hover:underline">{{ i.title }}</span>
              <span class="mt-1 block text-sm leading-relaxed text-white/70">{{ i.text }}</span>
            </span>
          </a>
        </div>

        <div class="space-y-5">
          <pre class="overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-5 text-sm leading-relaxed"><code><template v-for="(l, n) in snippet" :key="n"><span :class="l.startsWith('#') ? 'text-white/40' : 'text-white'">{{ l }}</span>
</template></code></pre>
          <figure>
            <img :src="`${base}media/pr_status_bar.gif`" alt="Pull request status bar above the composer" class="w-full rounded-2xl border border-white/10" loading="lazy" />
            <figcaption class="mt-2 text-xs text-white/50">Your branch's pull request and CI checks, above the message box.</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
