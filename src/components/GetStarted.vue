<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Download } from "lucide-vue-next";
import { links } from "@/data/product";

const steps = [
  {
    title: "Download and open Chatty",
    text: "For macOS, Linux or Windows. It updates itself and checks every update before installing.",
  },
  {
    title: "Connect an AI model",
    text: "Settings → Models & Providers. Paste an OpenRouter key and press Test, or install Ollama to run a free model on your own computer (no key needed). Then pick a model from the list.",
  },
  {
    title: "Give it a folder to work in",
    text: "Settings → Code Execution: choose the folder and switch on “Enable Code Execution”. That's what lets it work with files, and only inside that folder.",
  },
  {
    title: "Choose how careful it should be",
    text: "Start with “Always Ask”: it shows you each change and waits for your OK. Loosen it once you trust it.",
  },
  {
    title: "Hand it a first task",
    text: "“Tidy this folder and don't delete anything.” “Summarise these PDFs in a one-page Word document.” Watch it work.",
  },
];
</script>

<template>
  <section id="start" class="bg-muted/50 py-20 md:py-28">
    <div class="container grid gap-12 lg:grid-cols-[1fr_1.3fr]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-primary">Get started</p>
        <h2 class="mt-2 text-3xl font-bold leading-tight md:text-5xl">Set up in about ten minutes.</h2>
        <p class="mt-4 text-lg text-muted-foreground leading-relaxed">
          No account to create. The only thing you need is an AI model: a key from OpenRouter
          (pay as you go), your company's Azure OpenAI, or a free local model with Ollama.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button as-child size="lg" class="rounded-full px-7">
            <a :href="links.releases" target="_blank"><Download class="mr-2 size-5" /> Download free</a>
          </Button>
          <Button as-child size="lg" variant="outline" class="rounded-full px-7">
            <a :href="links.gettingStarted" target="_blank">Step-by-step guide</a>
          </Button>
        </div>
        <p class="mt-8 text-sm text-muted-foreground">Prefer the terminal?</p>
        <pre class="mt-2 rounded-xl border bg-card px-4 py-3 text-sm"><code>chatty-tui --ollama</code></pre>
      </div>

      <ol class="space-y-4">
        <li v-for="(s, i) in steps" :key="s.title" class="flex gap-4 rounded-2xl border bg-card p-5">
          <span class="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{{ i + 1 }}</span>
          <div>
            <h3 class="font-semibold">{{ s.title }}</h3>
            <p class="mt-1 text-sm leading-relaxed text-muted-foreground">{{ s.text }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
