<script setup lang="ts">
import { Eye, Hand, BadgeCheck } from "lucide-vue-next";
import SectionHeading from "./SectionHeading.vue";

const base = import.meta.env.BASE_URL;

const pillars = [
  {
    icon: Eye,
    title: "See every step",
    points: [
      "A plan that ticks itself off as it works",
      "Every change to your files, shown as it happens",
      "What each answer cost, right under it",
    ],
  },
  {
    icon: Hand,
    title: "You stay in charge",
    points: [
      "It asks when it isn't sure, instead of guessing",
      "Add to the task, redirect it, or stop it at any moment",
      "Take over the browser whenever you like",
    ],
  },
  {
    icon: BadgeCheck,
    title: "Checked before it's done",
    points: [
      "It opens what it built in a real browser and looks at it",
      "Every table comes with the calculation behind it",
      "Its plan ends with a check, not a guess",
    ],
  },
];

const modes = [
  { name: "Ask me every time", note: "Safest start" },
  { name: "Allow safe actions", note: "Default" },
  { name: "Allow everything", note: "For throwaway folders" },
];
</script>

<template>
  <section id="control" class="bg-muted/50 py-20 md:py-28">
    <div class="container">
      <SectionHeading eyebrow="How it works" title="Watch it work. Stop it any time.">
        Most AI assistants disappear into the cloud and come back with an answer. Chatty works in
        the open, on your computer, where you can see and steer every step.
      </SectionHeading>

      <div class="mt-12 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <div class="space-y-8">
          <div v-for="p in pillars" :key="p.title" class="flex gap-4">
            <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <component :is="p.icon" class="size-5" />
            </span>
            <div>
              <h3 class="text-xl font-semibold">{{ p.title }}</h3>
              <ul class="mt-2 space-y-1 text-muted-foreground">
                <li v-for="pt in p.points" :key="pt">{{ pt }}</li>
              </ul>
            </div>
          </div>

          <div class="rounded-2xl border bg-card p-5">
            <p class="text-sm font-medium">You choose how much it may do on its own</p>
            <div class="mt-3 grid gap-2 sm:grid-cols-3">
              <div
                v-for="(m, i) in modes"
                :key="m.name"
                :class="[
                  'rounded-xl border px-3 py-2 text-sm',
                  i === 0 ? 'border-primary bg-primary/5' : '',
                ]"
              >
                <div class="font-medium">{{ m.name }}</div>
                <div class="text-xs text-muted-foreground">{{ m.note }}</div>
              </div>
            </div>
          </div>
        </div>

        <figure>
          <div class="overflow-hidden rounded-2xl border bg-card shadow-2xl shadow-primary/10">
            <div class="flex items-center gap-1.5 border-b bg-muted/60 px-4 py-2.5">
              <span class="size-3 rounded-full bg-destructive/80"></span>
              <span class="size-3 rounded-full bg-sun/80"></span>
              <span class="size-3 rounded-full bg-leaf/80"></span>
            </div>
            <img :src="`${base}media/hero.gif`" alt="Chatty working through a task" class="w-full" loading="lazy" />
          </div>
          <figcaption class="mt-3 text-center text-xs text-muted-foreground">
            Recording of the Chatty desktop app.
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
