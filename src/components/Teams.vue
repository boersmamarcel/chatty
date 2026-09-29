<script setup lang="ts">
import SectionHeading from "./SectionHeading.vue";
import { links } from "@/data/product";

const base = import.meta.env.BASE_URL;

// Storyline S25 (strategy/storylines/): one question, a small team, you watching.
// The screenshot is a real-model capture of the desktop app, from the chatty2
// tutorial "From one agent to a team" (light theme).
const points = [
  {
    title: "See the work behind every number",
    text: "Open any agent to read the queries it ran and what they returned.",
  },
  {
    title: "Nothing leaves the building",
    text: "Point every agent at your own GPU server or your company's approved models.",
  },
  {
    title: "A team is a config file",
    text: "Each agent is a short file you can read, copy and share.",
  },
];
</script>

<template>
  <section id="teams" class="bg-muted/50 py-24 md:py-36">
    <div class="container">
      <SectionHeading eyebrow="New in v0.5.0" title="Watch your AI team work." center>
        Revenue fell in August, and you want to know why. Hand the question to a lead agent and
        watch it work it out with an analyst and a reviewer.
      </SectionHeading>

      <figure class="mx-auto mt-16 max-w-6xl md:mt-20">
        <div class="overflow-hidden rounded-2xl border bg-[#fcfcfc] shadow-2xl shadow-primary/10">
          <!-- On phones the screenshot keeps a legible size and scrolls sideways. -->
          <div class="overflow-x-auto">
            <img
              :src="`${base}media/teams/live-tree.webp`"
              alt="A live team tree: data-lead is running, two workers are done and a third is writing a file"
              width="1190"
              height="300"
              class="w-[820px] max-w-none md:w-full"
              loading="lazy"
            />
          </div>
        </div>
        <figcaption class="mt-5 text-center text-sm text-muted-foreground">
          Set it to ask first, and any agent's command or file change waits for your OK.
        </figcaption>
      </figure>

      <div class="mx-auto mt-16 grid max-w-5xl gap-10 text-center md:mt-20 md:grid-cols-3 md:gap-12">
        <div v-for="p in points" :key="p.title">
          <h3 class="font-semibold">{{ p.title }}</h3>
          <p class="mt-2 leading-relaxed text-muted-foreground">{{ p.text }}</p>
        </div>
      </div>

      <div class="mt-16 text-center md:mt-20">
        <a :href="links.swarmTutorial" target="_blank" class="font-medium text-primary hover:underline">
          Try the tutorial →
        </a>
        <p class="mt-3 text-xs text-muted-foreground">Teams are experimental.</p>
      </div>
    </div>
  </section>
</template>
