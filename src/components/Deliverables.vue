<script setup lang="ts">
import { ref } from "vue";
import SectionHeading from "./SectionHeading.vue";

const base = import.meta.env.BASE_URL;

const tabs = [
  { key: "pdf", label: "PDF report", gif: "artifact_pdf.gif", text: "Typeset documents, paged right beside the chat." },
  { key: "chart", label: "Chart", gif: "artifact_chart.gif", text: "Bar, line, pie, area and more. Copy as an image." },
  { key: "table", label: "Data table", gif: "artifact_table.gif", text: "Results from your spreadsheets, with the query one tab away." },
  { key: "doc", label: "Document", gif: "artifact_markdown.gif", text: "Written documents, including diagrams, ready to edit." },
];
const active = ref(tabs[0]);

const formats = [
  "Word documents",
  "Excel spreadsheets",
  "PowerPoint decks, previewed as real slides",
  "PDF reports",
  "Charts",
  "Diagrams and math",
];
</script>

<template>
  <section id="files" class="container py-20 md:py-28">
    <div class="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
      <div>
        <SectionHeading eyebrow="Finished files" title="Real files, not just answers.">
          What you ask for opens in a panel next to the conversation and lands in your folder,
          ready to send. Open it, tweak it, save it.
        </SectionHeading>
        <ul class="mt-6 grid gap-2 sm:grid-cols-2">
          <li v-for="f in formats" :key="f" class="flex items-center gap-2 text-sm">
            <span class="size-1.5 rounded-full bg-primary"></span>{{ f }}
          </li>
        </ul>
      </div>

      <div>
        <div class="flex flex-wrap gap-2" role="tablist">
          <button
            v-for="t in tabs"
            :key="t.key"
            role="tab"
            :aria-selected="active.key === t.key"
            :class="[
              'rounded-full border px-4 py-1.5 text-sm transition-colors',
              active.key === t.key ? 'border-primary bg-primary text-primary-foreground' : 'bg-card hover:bg-muted',
            ]"
            @click="active = t"
          >
            {{ t.label }}
          </button>
        </div>
        <figure class="mt-4">
          <div class="overflow-hidden rounded-2xl border bg-card shadow-xl shadow-primary/5">
            <img :key="active.key" :src="`${base}media/${active.gif}`" :alt="active.text" class="w-full" loading="lazy" />
          </div>
          <figcaption class="mt-3 text-sm text-muted-foreground">
            {{ active.text }} <span class="text-xs">(Recording of the desktop app.)</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
