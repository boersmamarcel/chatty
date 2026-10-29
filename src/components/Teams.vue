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

// The dev team: five agents, each a short config file, run unattended in the
// terminal. Every number below is from two real runs on one local model; keep
// them as measured (strategy/08-decisions-and-proof.md).
const devRoster = [
  { name: "dev-lead", role: "Only delegates and merges. Never writes code." },
  { name: "product-owner", role: "Writes the stories and their Gherkin scenarios." },
  { name: "developer", role: "Plans first, then codes." },
  { name: "tester", role: "Writes unit and BDD tests and runs the whole suite." },
  { name: "code-reviewer", role: "Returns APPROVE or REQUEST_CHANGES." },
];
const devSteps = ["story", "plan", "build", "tests", "review", "merge"];
const devRuns = [
  {
    when: "Run 1 · 26 Oct 2026",
    result: "6 of 7 stories done",
    detail: "131 tests passing, 51 commits",
  },
  {
    when: "Run 2 · 28–29 Oct 2026, 8 hours",
    result: "2 of 8 stories done",
    detail: "118 tests passing, 19 commits, main green at the end",
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

      <div class="mt-16 border-t pt-16">
        <p class="text-sm font-semibold uppercase tracking-wide text-primary">
          Experimental · measured on Chatty 0.7.6 and 0.7.8
        </p>
        <h3 class="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
          Or hand it a backlog: a dev team that runs unattended.
        </h3>
        <p class="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Five agents, each defined by a short config file, work through your stories one at a
          time in the terminal, on a local model on your own GPU. After every iteration an
          objective gate runs the test suite, and nothing moves on until it is green.
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
            Gate after every iteration: the suite must be green.
          </p>
        </div>

        <div class="mt-6 grid gap-4 md:grid-cols-2">
          <div v-for="r in devRuns" :key="r.when" class="rounded-xl border bg-card p-5">
            <p class="text-xs font-medium uppercase tracking-wide text-muted-foreground">{{ r.when }}</p>
            <p class="mt-2 text-xl font-semibold">{{ r.result }}</p>
            <p class="mt-1 text-sm text-muted-foreground">{{ r.detail }}</p>
          </div>
        </div>
        <p class="mt-4 text-sm leading-relaxed text-muted-foreground">
          What a single-GPU local model (Qwen3.8-27B-INT4 via vLLM) built over two unattended
          runs: a small CLI. It is slow, roughly 2.5 hours per story on that model. Run
          unattended teams in a container.
          <a :href="links.devTeamTutorial" target="_blank" class="font-medium text-primary hover:underline">Set up the dev team →</a>
        </p>
        <details class="mt-4 rounded-xl border bg-card p-4 text-sm text-muted-foreground">
          <summary class="cursor-pointer font-medium text-foreground">How we measured this</summary>
          <ul class="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed">
            <li>Task: build a small command-line tool from a written brief, story by story. Run 1 built a checker for <code>.env</code> files (Chatty 0.7.6, 26 Oct 2026). Run 2 built a filter for JSON-lines log files (Chatty 0.7.8, 28–29 Oct 2026, 8 hours).</li>
            <li>Model: RedHatAI/Qwen3.8-27B-INT4 served by vLLM on one local GPU. No cloud model, no API cost.</li>
            <li>One run each, so these are two data points, not an average. The commit counts include the snapshot commits that the driver script makes after each iteration.</li>
            <li>“Done” means the story is ticked in the backlog; the team’s rules require reviewer approval and a passing suite before it is ticked. A script outside the agents runs the whole suite after every iteration; the test counts and commits come from that script and from the repository.</li>
            <li>Run 1 lost its first hours to setup problems that have since been fixed, so its pace is not a fair guide. Run 2 had a red test suite for its first two iterations before the team repaired it.</li>
            <li>The raw logs are kept and not yet published.</li>
          </ul>
        </details>
      </div>

      <p class="mt-10 text-sm text-muted-foreground">
        Teams are experimental.
        <a :href="links.swarmTutorial" target="_blank" class="font-medium text-primary hover:underline">Try the tutorial →</a>
      </p>
    </div>
  </section>
</template>
