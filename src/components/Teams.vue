<script setup lang="ts">
import { FlaskConical, Hand, Receipt, PanelRightOpen, Shuffle, Blocks } from "lucide-vue-next";
import SectionHeading from "./SectionHeading.vue";
import { links } from "@/data/product";

const base = import.meta.env.BASE_URL;

// Screenshots of the desktop app from the chatty2 tutorial "From one agent to a
// team" (real model, light theme). Cropped only; nothing redrawn. The frames
// behind them use the app's own background colour (#fcfcfc) so they blend.
const media = (name: string) => `${base}media/teams/${name}.webp`;

const strips = [
  {
    icon: Hand,
    title: "Changes come to you, and name the agent asking.",
    text: "Set Chatty to ask every time, and a worker's file write or command comes to you, however deep in the team it runs. The card names the agent and the chain above it. Deny, and nothing is written.",
    img: "approval",
    alt: "An approval card: data-analyst-1 asks to write report.md, via data-lead, with Approve and Deny buttons",
    width: 1190,
    height: 120,
  },
  {
    icon: Receipt,
    title: "See who spent what.",
    text: "Each agent's line shows what it used, and the header shows the team's total. Open an agent to see its spend split by model: in dollars for models with a price, in tokens for local ones. The conversation's cost includes everything its agents spent.",
    img: "bill",
    alt: "The finished team tree: four agents, each with its model, tool count and tokens, and the team total",
    width: 1176,
    height: 177,
  },
];

const spec = [
  { text: "# .chatty/agents/reviewer.toml", kind: "comment" },
  { text: "[agent]", kind: "plain" },
  { text: 'name = "reviewer"', kind: "plain" },
  { text: "# the one line you add:", kind: "comment" },
  { text: 'model = "qwen3:4b"', kind: "added" },
  { text: "# …the rest of the spec as is", kind: "comment" },
];
</script>

<template>
  <section id="teams" class="bg-muted/50 py-20 md:py-28">
    <div class="container">
      <SectionHeading eyebrow="New in v0.5.0" title="Watch your AI team work.">
        Chatty now supports agent teams. Hand a question to a lead agent: it splits the work,
        hands the parts to other agents, and puts their answers together. You see every agent
        as it works, open any of them, and decide what they may change.
      </SectionHeading>

      <p
        class="mt-6 inline-flex items-start gap-2 rounded-2xl border border-sun/40 bg-sun/5 px-4 py-2.5 text-sm leading-relaxed"
      >
        <FlaskConical class="mt-0.5 size-4 shrink-0 text-sun" />
        <span>
          <span class="font-medium">Experimental.</span>
          <span class="text-muted-foreground">
            Teams are new. Try one next to a single agent on your own tasks, and keep whichever
            suits the job.
          </span>
        </span>
      </p>

      <figure class="mt-10">
        <div class="overflow-hidden rounded-2xl border bg-[#fcfcfc] shadow-2xl shadow-primary/10">
          <div class="flex items-center gap-1.5 border-b bg-muted/60 px-4 py-2.5">
            <span class="size-3 rounded-full bg-destructive/80"></span>
            <span class="size-3 rounded-full bg-sun/80"></span>
            <span class="size-3 rounded-full bg-leaf/80"></span>
          </div>
          <!-- On phones the wide screenshots keep a legible size and scroll sideways. -->
          <div class="overflow-x-auto">
            <img
              :src="media('live-tree')"
              alt="A live team tree: data-lead is running, two workers are done and a third is writing a file"
              width="1190"
              height="300"
              class="mx-auto w-[820px] max-w-none md:w-full md:max-w-[1190px]"
              loading="lazy"
            />
          </div>
        </div>
        <figcaption class="mt-3 text-center text-xs text-muted-foreground">
          A lead delegates, workers run live: each line shows the agent's model or current step,
          its status and what it has used so far. Screenshot of the desktop app.
          <span class="md:hidden">Swipe to see the whole row.</span>
        </figcaption>
      </figure>

      <div class="mt-6 space-y-6">
        <article v-for="s in strips" :key="s.img" class="rounded-2xl border bg-card p-6">
          <div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <component :is="s.icon" class="size-5" />
            </span>
            <div class="max-w-3xl">
              <h3 class="text-xl font-semibold">{{ s.title }}</h3>
              <p class="mt-1 leading-relaxed text-muted-foreground">{{ s.text }}</p>
            </div>
          </div>
          <div class="mt-5 overflow-x-auto rounded-xl border bg-[#fcfcfc]">
            <img
              :src="media(s.img)"
              :alt="s.alt"
              :width="s.width"
              :height="s.height"
              class="mx-auto w-[820px] max-w-none md:w-full md:max-w-[var(--w)]"
              :style="{ '--w': `${s.width}px` }"
              loading="lazy"
            />
          </div>
        </article>
      </div>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
        <article class="flex min-w-0 flex-col rounded-2xl border bg-card p-6">
          <div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <PanelRightOpen class="size-5" />
            </span>
            <div>
              <h3 class="text-xl font-semibold">Open any agent.</h3>
              <p class="mt-1 leading-relaxed text-muted-foreground">
                Click a line to read that agent's work: its model, turns and spend, and every
                tool call with what went in and what came back. The breadcrumb takes you back up
                the tree.
              </p>
            </div>
          </div>
          <div class="mt-5 flex flex-1 items-start justify-center">
            <img
              :src="media('drill-in')"
              alt="The agent transcript for data-analyst-0: model, status, turns, spend by model and its tool calls"
              width="520"
              height="556"
              class="w-full max-w-[520px] rounded-xl border"
              loading="lazy"
            />
          </div>
        </article>

        <div class="flex min-w-0 flex-col gap-6">
          <article class="min-w-0 rounded-2xl border bg-card p-6">
            <div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Shuffle class="size-5" />
              </span>
              <div>
                <h3 class="text-xl font-semibold">Mix models by editing one line.</h3>
                <p class="mt-1 leading-relaxed text-muted-foreground">
                  Every agent is a short, readable file. Copy one into your folder and add a
                  model line: a small local model for the narrow job of reviewing, say, or a
                  strong hosted model for the lead. The tree shows the mix.
                </p>
              </div>
            </div>
            <pre
              class="mt-5 overflow-x-auto rounded-xl border bg-muted/60 p-4 text-sm leading-relaxed"
            ><code><template v-for="(l, n) in spec" :key="n"><span :class="l.kind === 'comment' ? 'text-muted-foreground' : l.kind === 'added' ? 'font-semibold text-primary' : ''">{{ l.text }}</span>
</template></code></pre>
          </article>

          <article class="flex flex-1 flex-col rounded-2xl border bg-gradient-to-br from-primary/10 via-card to-sky/10 p-6">
            <div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Blocks class="size-5" />
              </span>
              <div>
                <h3 class="text-xl font-semibold">Start from an example, then build your own.</h3>
                <p class="mt-1 leading-relaxed text-muted-foreground">
                  A team is just agents that are allowed to call each other. Each file says what
                  the agent does, which tools it has, whom it may call and how many turns it gets.
                  Chatty ships example teams to start from. Because they're plain files, you can
                  share yours and try the ones others build.
                </p>
              </div>
            </div>
            <div class="mt-auto flex flex-col gap-2 pt-5 text-sm font-medium sm:flex-row sm:gap-6">
              <a :href="links.swarmTutorial" target="_blank" class="text-primary hover:underline">
                Tutorial: from one agent to a team →
              </a>
              <a :href="links.release050" target="_blank" class="text-primary hover:underline">
                What's in v0.5.0 →
              </a>
            </div>
          </article>
        </div>
      </div>

      <p class="mt-6 text-center text-xs text-muted-foreground">
        Teams run in the desktop app on macOS and Linux, and for now need one setting switched
        on by hand. The tutorial shows how.
      </p>
    </div>
  </section>
</template>
