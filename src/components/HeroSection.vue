<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-vue-next";
import TaskCard from "./TaskCard.vue";
import { links, platforms } from "@/data/product";
import confetti from "canvas-confetti";

function onDownloadClick() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  confetti({ particleCount: 80, spread: 70, origin: { y: 0.7 } });
}
const promises = [
  "No account",
  "No subscription",
  "Files stay on your computer",
  "Any AI model",
];
</script>

<template>
  <section class="relative overflow-hidden">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(60%_50%_at_15%_10%,hsl(var(--primary)/0.14),transparent_70%),radial-gradient(40%_40%_at_90%_20%,hsl(var(--sky)/0.14),transparent_70%),radial-gradient(40%_40%_at_70%_90%,hsl(var(--sun)/0.12),transparent_70%)]"
    ></div>

    <div class="container grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <p
          class="inline-flex items-center gap-2 rounded-full border bg-card/70 px-3 py-1 text-xs text-muted-foreground"
        >
          <span class="size-2 rounded-full bg-leaf"></span>
          Free and open source · now with teams
        </p>

        <h1 class="mt-6 text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
          An AI coworker
          <span class="block bg-gradient-to-r from-primary via-sky to-sun bg-clip-text pb-2 text-transparent">you can trust.</span>
        </h1>

        <p class="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Give Chatty a folder and a task. It makes a plan, works through it step by step,
          and hands you finished files: reports, spreadsheets, slides. You see everything it
          does, and it asks before changing anything you haven't allowed.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button as-child size="lg" class="rounded-full px-7 text-base">
            <a :href="links.releases" target="_blank" @click="onDownloadClick">
              <Download class="mr-2 size-5" /> Get Chatty free
            </a>
          </Button>
          <Button as-child size="lg" variant="outline" class="rounded-full px-7 text-base">
            <a href="#start">
              Set up in 5 minutes <ArrowRight class="ml-2 size-5" />
            </a>
          </Button>
        </div>

        <ul class="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <li v-for="p in promises" :key="p" class="flex items-center gap-2">
            <span class="size-1.5 rounded-full bg-primary"></span>{{ p }}
          </li>
        </ul>
        <p class="mt-3 text-xs text-muted-foreground">{{ platforms.join(" · ") }}</p>
      </div>

      <TaskCard />
    </div>
  </section>
</template>
