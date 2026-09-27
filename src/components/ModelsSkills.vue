<script setup lang="ts">
import { Wallet, Repeat } from "lucide-vue-next";
import { providers, links } from "@/data/product";
</script>

<template>
  <section id="models" class="container py-20 md:py-28">
    <div class="grid gap-6 lg:grid-cols-2">
      <div class="rounded-3xl border bg-card p-8 md:p-10">
        <Wallet class="size-7 text-primary" />
        <h2 class="mt-4 text-3xl font-bold md:text-4xl">Pay per task, not per month.</h2>
        <p class="mt-4 text-muted-foreground leading-relaxed">
          Chatty is free. You connect the AI model you want and pay that provider only for what
          you use, with the cost of every answer shown under it. Pick a cheaper model for simple
          jobs and a stronger one for hard ones, or run a local model for free.
        </p>
        <ul class="mt-6 divide-y rounded-2xl border">
          <li v-for="p in providers" :key="p.name" class="flex items-baseline justify-between gap-4 px-4 py-3">
            <span class="font-medium">{{ p.name }}</span>
            <span class="text-right text-sm text-muted-foreground">{{ p.note }}</span>
          </li>
        </ul>
        <a :href="links.providers" target="_blank" class="mt-4 inline-block text-sm font-medium text-primary hover:underline">
          Connecting a model →
        </a>
      </div>

      <div class="rounded-3xl border bg-gradient-to-br from-primary/10 via-card to-sky/10 p-8 md:p-10">
        <Repeat class="size-7 text-primary" />
        <h2 class="mt-4 text-3xl font-bold md:text-4xl">Teach it once.</h2>
        <p class="mt-4 text-muted-foreground leading-relaxed">
          Did it just do something you'll need again next month? Ask it to save the steps as a
          skill. Next time, type a slash and the skill's name.
        </p>
        <div class="mt-6 space-y-3 font-mono text-sm">
          <div class="rounded-xl border bg-card px-4 py-3">Save what you just did as a skill called monthly-report</div>
          <div class="rounded-xl border bg-card px-4 py-3">
            <span class="text-primary">/monthly-report</span>
            <span class="ml-2 rounded-full bg-primary/10 px-2 py-0.5 font-sans text-xs text-primary">skill</span>
          </div>
        </div>
        <p class="mt-6 text-sm text-muted-foreground leading-relaxed">
          Skills are plain, readable files in the open format other AI assistants use too, so
          what you teach Chatty is never locked in. It also remembers your preferences between
          conversations, on your computer.
        </p>
        <a :href="links.skills" target="_blank" class="mt-4 inline-block text-sm font-medium text-primary hover:underline">
          About skills and memory →
        </a>
      </div>
    </div>
  </section>
</template>
