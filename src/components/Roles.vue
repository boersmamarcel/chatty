<script setup lang="ts">
import { Briefcase, Calculator, Landmark, Megaphone, Store, ShieldCheck } from "lucide-vue-next";
import SectionHeading from "./SectionHeading.vue";

const roles = [
  {
    icon: Briefcase,
    who: "Consultants & freelancers",
    task: "Turn a client's interview notes and survey export into a findings report and a workshop deck.",
    why: "Client files stay on your laptop. For sensitive clients, use a local model and nothing leaves at all.",
  },
  {
    icon: Calculator,
    who: "Finance",
    task: "Reconcile the bank export against the ledger and explain the three largest variances.",
    why: "Every table shows the query that produced it, so every number can be traced.",
  },
  {
    icon: Landmark,
    who: "Policy, research & public sector",
    task: "Read 40 consultation responses and draft a briefing, citing document and page.",
    why: "Run it on your organisation's own EU-hosted model, or entirely on your computer.",
  },
  {
    icon: Megaphone,
    who: "Marketing",
    task: "Check competitors' pricing pages and build a comparison with screenshots.",
    why: "Watch it browse in a live window, then save it as a skill for next month.",
  },
  {
    icon: Store,
    who: "Small businesses",
    task: "Match this week's invoices to the payments sheet and flag what's unpaid.",
    why: "No monthly seat per person. It asks before it changes a single file.",
  },
  {
    icon: ShieldCheck,
    who: "IT & security",
    task: "Give your team an AI assistant that works with your company's approved models.",
    why: "Open source, no telemetry, a sandbox, per-action approval, and secrets the AI never sees.",
  },
];
</script>

<template>
  <section id="roles" class="bg-muted/50 py-20 md:py-28">
    <div class="container">
      <SectionHeading eyebrow="Use cases" title="What will you hand it first?" center>
        A few of the jobs people give Chatty, and why they pick it for them.
      </SectionHeading>

      <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="r in roles" :key="r.who" class="flex flex-col rounded-2xl border bg-card p-6">
          <div class="flex items-center gap-3">
            <component :is="r.icon" class="size-5 text-primary" />
            <h3 class="font-semibold">{{ r.who }}</h3>
          </div>
          <p class="mt-4 text-[15px] leading-relaxed">“{{ r.task }}”</p>
          <p class="mt-auto pt-4 text-sm text-muted-foreground leading-relaxed">{{ r.why }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
