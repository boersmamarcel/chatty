<script setup lang="ts">
import SectionHeading from "./SectionHeading.vue";
import { links } from "@/data/product";

const base = import.meta.env.BASE_URL;

// Storyline S25 (strategy/storylines/): one question, a small team, you watching.
// The screenshot is a real-model capture of the desktop app, from the chatty2
// tutorial "From one agent to a team" (light theme), cropped to the team tree;
// the question typed above it in the app is quoted in the caption instead.
// Layout and framing follow WatchIt.vue, the neighbouring feature section.
const points = [
  {
    title: "See the work behind every number",
    text: "Open any agent to read the queries it ran and what they returned.",
  },
  {
    title: "You choose where each agent runs",
    text: "Your own GPU, your company's approved models or a cloud model, per agent. Mix them in one team.",
  },
  {
    title: "A team is a config file",
    text: "Each agent is a short file you can read, copy and share.",
  },
];
</script>

<template>
  <section id="teams" class="bg-muted/50 py-20 md:py-28">
    <div class="container">
      <SectionHeading eyebrow="New in v0.5.0" title="Watch your AI team work.">
        Revenue fell in August, and you want to know why. Hand the question to a lead agent and
        watch it work it out with an analyst and a reviewer.
      </SectionHeading>

      <figure class="mt-12">
        <div class="overflow-hidden rounded-2xl border bg-card shadow-2xl shadow-primary/10">
          <div class="flex items-center gap-1.5 border-b bg-muted/60 px-4 py-2.5">
            <span class="size-3 rounded-full bg-destructive/80"></span>
            <span class="size-3 rounded-full bg-sun/80"></span>
            <span class="size-3 rounded-full bg-leaf/80"></span>
          </div>
          <!-- On phones the screenshot keeps a legible size and scrolls sideways. -->
          <div class="overflow-x-auto">
            <img
              :src="`${base}media/teams/live-tree.webp`"
              alt="A live team tree: data-lead is running, two workers are done and a third is writing a file"
              width="1188"
              height="178"
              class="w-[820px] max-w-none md:w-full"
              loading="lazy"
            />
          </div>
        </div>
        <figcaption class="mt-3 text-center text-xs text-muted-foreground">
          Screenshot of the Chatty desktop app, working on “Revenue in orders.csv fell in August.
          Find out why.” Set it to ask first, and any agent's command or file change waits for
          your OK.
        </figcaption>
      </figure>

      <div class="mt-12 grid gap-8 md:grid-cols-3">
        <div v-for="p in points" :key="p.title">
          <h3 class="text-xl font-semibold">{{ p.title }}</h3>
          <p class="mt-2 leading-relaxed text-muted-foreground">{{ p.text }}</p>
        </div>
      </div>

      <p class="mt-10 text-sm text-muted-foreground">
        Teams are experimental.
        <a :href="links.swarmTutorial" target="_blank" class="font-medium text-primary hover:underline">Try the tutorial →</a>
      </p>
    </div>
  </section>
</template>
