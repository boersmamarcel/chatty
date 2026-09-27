<script setup lang="ts">
import { FolderTree, BarChart3, FileStack, Globe } from "lucide-vue-next";
import SectionHeading from "./SectionHeading.vue";

const tasks = [
  {
    icon: FolderTree,
    color: "text-sun bg-sun/10",
    title: "Tidy a folder",
    say: "Organise my Downloads by type and topic, give the files clear names, and don't delete anything.",
    get: ["Sorted folders with sensible names", "A list of what went where", "Nothing moved until you say yes"],
  },
  {
    icon: BarChart3,
    color: "text-primary bg-primary/10",
    title: "Turn spreadsheets into a report",
    say: "Combine these three exports and write Monday's report with a chart and four slides.",
    get: ["A PDF report and a slide deck", "Charts you can copy", "The calculation behind every number"],
  },
  {
    icon: FileStack,
    color: "text-leaf bg-leaf/10",
    title: "Brief me on a pile of PDFs",
    say: "Read these 40 responses and write a two-page briefing. Cite the document and page for every point.",
    get: ["A briefing in Word", "Every claim with its source", "PDFs open alongside to check"],
  },
  {
    icon: Globe,
    color: "text-sky bg-sky/10",
    title: "Research the web for you",
    say: "Check these five competitors' pricing pages and build a comparison.",
    get: ["A live browser you can watch", "A comparison table and screenshots", "A one-page brief"],
  },
];
</script>

<template>
  <section id="work" class="container py-20 md:py-28">
    <SectionHeading eyebrow="Hand it the work" title="Ask for the result, not just an answer.">
      Chatty works in a folder on your computer, with the files you already have. Tell it what you
      need in plain words. It plans the job, does it, and puts the finished files in your folder.
    </SectionHeading>

    <div class="mt-12 grid gap-5 md:grid-cols-2">
      <article
        v-for="t in tasks"
        :key="t.title"
        class="group rounded-2xl border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
      >
        <div class="flex items-center gap-3">
          <span :class="['grid size-10 place-items-center rounded-xl', t.color]">
            <component :is="t.icon" class="size-5" />
          </span>
          <h3 class="text-xl font-semibold">{{ t.title }}</h3>
        </div>
        <p class="mt-5 rounded-xl bg-muted px-4 py-3 text-sm leading-relaxed">
          <span class="font-medium text-muted-foreground">You say: </span>“{{ t.say }}”
        </p>
        <ul class="mt-4 space-y-1.5 text-sm">
          <li v-for="g in t.get" :key="g" class="flex gap-2">
            <span class="text-primary">→</span>{{ g }}
          </li>
        </ul>
      </article>
    </div>

    <p class="mt-8 text-center text-sm text-muted-foreground">
      It writes and fixes code too.
      <a href="#developers" class="font-medium text-primary hover:underline">See Chatty for developers →</a>
    </p>
  </section>
</template>
