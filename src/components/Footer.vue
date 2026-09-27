<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Download } from "lucide-vue-next";
import GithubIcon from "@/icons/GithubIcon.vue";
import { links } from "@/data/product";

const base = import.meta.env.BASE_URL;

const columns = [
  {
    title: "Product",
    items: [
      { label: "What it does", href: "#work" },
      { label: "Privacy", href: "#privacy" },
      { label: "For developers", href: "#developers" },
      { label: "Download", href: links.releases },
    ],
  },
  {
    title: "Learn",
    items: [
      { label: "Getting started", href: links.gettingStarted },
      { label: "Documentation", href: links.docs },
      { label: "Security & approvals", href: links.security },
      { label: "Where your data lives", href: links.dataLocations },
    ],
  },
  {
    title: "Open source",
    items: [
      { label: "Source code", href: links.repo },
      { label: "Report an issue", href: links.issues },
      { label: "MIT licence", href: `${links.repo}/blob/main/LICENSE` },
    ],
  },
];
</script>

<template>
  <section class="container py-20 md:py-28">
    <div class="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 [background:radial-gradient(40%_60%_at_10%_0%,hsl(var(--sky)/0.45),transparent),radial-gradient(40%_60%_at_100%_100%,hsl(var(--sun)/0.45),transparent)]"></div>
      <div class="relative">
        <h2 class="text-3xl font-bold md:text-5xl">See what your AI is doing.</h2>
        <p class="mx-auto mt-4 max-w-xl text-lg opacity-90">
          Free, open source, and on your computer. macOS, Linux and Windows.
        </p>
        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button as-child size="lg" variant="secondary" class="rounded-full px-7">
            <a :href="links.releases" target="_blank"><Download class="mr-2 size-5" /> Download free</a>
          </Button>
          <Button as-child size="lg" variant="outline" class="rounded-full border-white/40 bg-transparent px-7 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
            <a :href="links.repo" target="_blank"><GithubIcon class="mr-2 size-5" /> Star on GitHub</a>
          </Button>
        </div>
      </div>
    </div>
  </section>

  <footer class="border-t">
    <div class="container grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
      <div>
        <a href="#" class="flex items-center gap-2 text-lg font-semibold">
          <img :src="`${base}app_icon.png`" alt="" class="size-8" /> Chatty
        </a>
        <p class="mt-3 max-w-xs text-sm text-muted-foreground">
          The AI coworker that works on your computer, not in someone else's cloud.
        </p>
      </div>
      <div v-for="c in columns" :key="c.title">
        <h3 class="text-sm font-semibold">{{ c.title }}</h3>
        <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
          <li v-for="i in c.items" :key="i.label">
            <a :href="i.href" :target="i.href.startsWith('#') ? undefined : '_blank'" class="hover:text-foreground">{{ i.label }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container border-t py-6 text-xs text-muted-foreground">
      © 2026 Marcel Boersma · MIT licence
    </div>
  </footer>
</template>
