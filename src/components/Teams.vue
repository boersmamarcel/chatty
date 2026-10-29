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

// A second team in the same section: a dev team as an example of what a team is
// (a handful of agents, each a short config file). No run numbers here: the
// site's proof rules (strategy/08-decisions-and-proof.md) ask that every
// published figure ships with how it was measured, and this block is about the
// feature, not a result.
const devRoster = [
  { name: "dev-lead", role: "Only delegates and merges. Never writes code." },
  { name: "product-owner", role: "Writes the stories and their Gherkin scenarios." },
  { name: "developer", role: "Plans first, then codes." },
  { name: "tester", role: "Writes unit and BDD tests and runs the whole suite." },
  { name: "code-reviewer", role: "Returns APPROVE or REQUEST_CHANGES." },
];
const devSteps = ["story", "plan", "build", "tests", "review", "merge"];
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

      <div class="mt-16 border-t pt-16">
        <h3 class="text-2xl font-semibold tracking-tight md:text-3xl">
          Build your own team, for example a dev team.
        </h3>
        <p class="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          A team is a handful of agents, each defined by a short config file: who leads, who does
          what, which tools each may use, which model each runs on. A dev team splits a software
          task the way a human team would, and you can point it at a backlog and let it work
          through it in the terminal.
        </p>

        <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <li v-for="a in devRoster" :key="a.name" class="rounded-xl border bg-card p-4">
            <p class="font-mono text-sm font-semibold text-primary">{{ a.name }}</p>
            <p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">{{ a.role }}</p>
          </li>
        </ul>

        <div class="mt-6 rounded-xl border bg-card p-4">
          <ol class="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm">
            <template v-for="(s, i) in devSteps" :key="s">
              <li class="rounded-full bg-muted px-3 py-1 font-medium">{{ s }}</li>
              <li v-if="i < devSteps.length - 1" aria-hidden="true" class="text-muted-foreground">→</li>
            </template>
            <li aria-hidden="true" class="text-muted-foreground">↻ next story</li>
          </ol>
          <p class="mt-3 text-sm text-muted-foreground">
            Chatty can run your own check, such as the test suite, after each worker's task, so a
            claim that the tests pass is verified, not trusted.
          </p>
        </div>

        <p class="mt-4 text-sm leading-relaxed text-muted-foreground">
          Teams are experimental, and a team that runs unattended should run in a container.
          <a :href="links.devTeamTutorial" target="_blank" class="font-medium text-primary hover:underline">Set up the dev team →</a>
        </p>
      </div>

      <p class="mt-10 text-sm text-muted-foreground">
        Teams are experimental.
        <a :href="links.swarmTutorial" target="_blank" class="font-medium text-primary hover:underline">Try the tutorial →</a>
      </p>
    </div>
  </section>
</template>
