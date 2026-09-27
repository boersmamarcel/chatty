<script setup lang="ts">
import SectionHeading from "./SectionHeading.vue";

// Keep every "cloud" cell re-verified on publication; see strategy/07-broad-audience.md §9.
const rows = [
  { label: "Price", chatty: "Free app. Pay your AI provider per use, or nothing with a local model", cloud: "Monthly subscription" },
  { label: "Account needed", chatty: "No", cloud: "Yes" },
  { label: "Where your files are worked on", chatty: "On your computer", cloud: "In the vendor's cloud and apps" },
  { label: "Choice of AI model", chatty: "Any: hundreds of cloud models, your company's, or local", cloud: "The vendor's own" },
  { label: "Works offline", chatty: "Yes, with a local model", cloud: "No" },
  { label: "Open source", chatty: "Yes (MIT)", cloud: "No" },
  { label: "Email, calendar & chat integrations", chatty: "A few, growing", cloud: "Many, deeply integrated", them: true },
  { label: "Scheduled tasks", chatty: "Not built in yet", cloud: "Built in", them: true },
  { label: "On your phone", chatty: "Not yet", cloud: "Yes", them: true },
  { label: "Setup", chatty: "About 10 minutes", cloud: "One sign-in", them: true },
];
</script>

<template>
  <section id="compare" class="container py-20 md:py-28">
    <SectionHeading eyebrow="Honest comparison" title="Already using an AI coworker?">
      Cloud AI coworkers are excellent products. Here's where Chatty is different, and where they're the better choice.
    </SectionHeading>

    <div class="mt-10 overflow-x-auto rounded-2xl border bg-card">
      <table class="w-full min-w-[640px] text-left text-sm">
        <thead class="border-b bg-muted/60">
          <tr>
            <th class="px-5 py-4 font-medium text-muted-foreground"></th>
            <th class="px-5 py-4 font-semibold text-primary">Chatty</th>
            <th class="px-5 py-4 font-semibold">Cloud AI coworkers</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in rows" :key="r.label" class="border-b last:border-0">
            <td class="px-5 py-3.5 font-medium">{{ r.label }}</td>
            <td :class="['px-5 py-3.5', r.them ? 'text-muted-foreground' : '']">{{ r.chatty }}</td>
            <td :class="['px-5 py-3.5', r.them ? 'font-medium' : 'text-muted-foreground']">{{ r.cloud }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-6 grid gap-4 md:grid-cols-2">
      <div class="rounded-2xl border bg-primary/5 p-5 text-sm leading-relaxed">
        <strong>Pick Chatty</strong> if your files shouldn't go into someone else's cloud, you want to
        choose the model and see what it costs, or you'd rather not add another subscription.
      </div>
      <div class="rounded-2xl border p-5 text-sm leading-relaxed">
        <strong>Pick a cloud coworker</strong> if you live in Microsoft 365 or Google Workspace and want
        deep email and meeting integration, want it on your phone, or want zero setup.
      </div>
    </div>
    <p class="mt-4 text-xs text-muted-foreground">Compared with the major cloud AI coworker products as of September 2026.</p>
  </section>
</template>
