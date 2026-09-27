<script setup lang="ts">
import {
  CheckCircle2,
  Circle,
  Loader2,
  FileText,
  FileSpreadsheet,
  Presentation,
  MessageCircleQuestion,
  FolderOpen,
} from "lucide-vue-next";

// An illustration of a task, drawn in the site's own style. It is not a
// screenshot of the app; real recordings sit further down the page.
const steps = [
  { label: "Read the three spreadsheets", state: "done" },
  { label: "Combine them and check the totals", state: "done" },
  { label: "Chart revenue by region", state: "done" },
  { label: "Write the two-page report", state: "active" },
  { label: "Build four slides", state: "todo" },
];
</script>

<template>
  <figure class="relative">
    <div
      class="rounded-2xl border bg-card shadow-xl shadow-primary/5 overflow-hidden"
    >
      <div class="flex items-center gap-2 border-b px-4 py-3 text-xs text-muted-foreground">
        <FolderOpen class="size-4 text-sun" />
        <span class="font-medium text-foreground">Q3 exports</span>
        <span class="ml-auto hidden sm:inline">sales_eu.xlsx · sales_us.csv · targets.xlsx</span>
      </div>

      <div class="space-y-4 p-5">
        <p
          class="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary text-primary-foreground px-4 py-3 text-sm leading-relaxed"
        >
          Turn these three exports into Monday's report and a short deck.
        </p>

        <div class="rounded-xl border bg-background/60 p-4">
          <div class="mb-3 flex items-center justify-between text-xs font-medium">
            <span>Plan</span>
            <span class="text-muted-foreground">3 of 5 done</span>
          </div>
          <ul class="space-y-2 text-sm">
            <li v-for="s in steps" :key="s.label" class="flex items-center gap-2">
              <CheckCircle2 v-if="s.state === 'done'" class="size-4 text-leaf shrink-0" />
              <Loader2 v-else-if="s.state === 'active'" class="size-4 text-primary animate-spin shrink-0" />
              <Circle v-else class="size-4 text-muted-foreground/60 shrink-0" />
              <span :class="s.state === 'todo' ? 'text-muted-foreground' : ''">{{ s.label }}</span>
            </li>
          </ul>
        </div>

        <div class="rounded-xl border border-sun/40 bg-sun/5 p-4 text-sm">
          <div class="mb-2 flex items-center gap-2 font-medium">
            <MessageCircleQuestion class="size-4 text-sun" /> Quick question
          </div>
          <p class="text-muted-foreground">
            EU figures are in euros, US in dollars. Which exchange rate should I use?
          </p>
          <div class="mt-3 flex flex-wrap gap-2">
            <span class="rounded-full border bg-card px-3 py-1 text-xs">End-of-quarter rate</span>
            <span class="rounded-full border bg-card px-3 py-1 text-xs">Monthly average</span>
            <span class="rounded-full border border-dashed px-3 py-1 text-xs text-muted-foreground">Type my own…</span>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 pt-1">
          <span class="inline-flex items-center gap-1.5 rounded-lg border bg-background px-3 py-2 text-xs">
            <FileText class="size-4 text-destructive" /> report.pdf
          </span>
          <span class="inline-flex items-center gap-1.5 rounded-lg border bg-background px-3 py-2 text-xs">
            <Presentation class="size-4 text-sun" /> board-deck.pptx
          </span>
          <span class="inline-flex items-center gap-1.5 rounded-lg border bg-background px-3 py-2 text-xs">
            <FileSpreadsheet class="size-4 text-leaf" /> summary.xlsx
          </span>
        </div>
      </div>
    </div>
    <figcaption class="mt-3 text-center text-xs text-muted-foreground">
      Illustration. The real app is further down.
    </figcaption>
  </figure>
</template>
