<script setup lang="ts">
import { UserX, HardDrive, Cpu, Box, KeyRound, Code2 } from "lucide-vue-next";
import { links } from "@/data/product";

const items = [
  { icon: UserX, title: "No account, no tracking", text: "There's nothing to sign up for, and the app sends us nothing. No telemetry." },
  { icon: HardDrive, title: "Kept on your computer", text: "Conversations, memory and settings are ordinary files on your own machine." },
  { icon: Cpu, title: "You choose where the AI runs", text: "A cloud AI service, your company's own Azure OpenAI, or a model running entirely on your laptop, even offline." },
  { icon: Box, title: "Works inside a safe space", text: "Commands run in a sandbox that can't see your private folders like SSH keys. On macOS and Linux." },
  { icon: KeyRound, title: "Secrets stay secret", text: "Passwords and keys you add in Settings can be used by its commands, but the AI never sees their values." },
  { icon: Code2, title: "Open source", text: "Every line is public (MIT licence), so you or your IT team can check what it does." },
];
</script>

<template>
  <section id="privacy" class="bg-ink py-20 text-white md:py-28">
    <div class="container">
      <div class="max-w-3xl">
        <p class="text-sm font-semibold uppercase tracking-wider text-sky">Privacy</p>
        <h2 class="mt-2 text-3xl font-bold leading-tight md:text-5xl">Your files stay on your computer.</h2>
        <p class="mt-4 text-lg leading-relaxed text-white/70">
          Chatty is an app on your computer, not a website. It works on your files where they are,
          and nothing goes to us.
        </p>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="i in items" :key="i.title" class="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <component :is="i.icon" class="size-6 text-sky" />
          <h3 class="mt-4 text-lg font-semibold">{{ i.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-white/70">{{ i.text }}</p>
        </div>
      </div>

      <div class="mt-8 rounded-2xl border border-sun/30 bg-sun/10 p-5 text-sm leading-relaxed text-white/80">
        <strong class="text-white">To be precise:</strong> the parts of your files the AI reads are sent
        to the AI provider you picked, under their terms. With a local model, they go nowhere at all.
        Windows doesn't have Chatty's command sandbox yet, so there Chatty asks before running commands.
        <a :href="links.security" target="_blank" class="ml-1 font-medium text-sky hover:underline">Full security details →</a>
      </div>
    </div>
  </section>
</template>
