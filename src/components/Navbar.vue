<script lang="ts" setup>
import { ref } from "vue";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Download } from "lucide-vue-next";
import GithubIcon from "@/icons/GithubIcon.vue";
import ToggleTheme from "./ToggleTheme.vue";
import { links } from "@/data/product";

const base = import.meta.env.BASE_URL;

const routeList = [
  { href: "#work", label: "What it does" },
  { href: "#control", label: "How it works" },
  { href: "#privacy", label: "Privacy" },
  { href: "#roles", label: "Use cases" },
  { href: "#developers", label: "Developers" },
];

const isOpen = ref(false);
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md"
  >
    <div class="container flex h-16 items-center justify-between gap-4">
      <a href="#" class="flex items-center gap-2 font-semibold text-lg">
        <img :src="`${base}app_icon.png`" alt="" class="size-8" />
        Chatty
      </a>

      <nav class="hidden lg:flex items-center gap-1">
        <a
          v-for="r in routeList"
          :key="r.href"
          :href="r.href"
          class="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >{{ r.label }}</a
        >
        <a
          :href="links.docs"
          target="_blank"
          class="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >Docs ↗</a
        >
      </nav>

      <div class="hidden lg:flex items-center gap-2">
        <ToggleTheme />
        <Button as-child size="sm" variant="ghost" aria-label="Chatty on GitHub">
          <a :href="links.repo" target="_blank"><GithubIcon class="size-5" /></a>
        </Button>
        <Button as-child size="sm" class="rounded-full px-4">
          <a :href="links.releases" target="_blank">
            <Download class="size-4 mr-2" /> Download free
          </a>
        </Button>
      </div>

      <div class="flex items-center lg:hidden">
        <Sheet v-model:open="isOpen">
          <SheetTrigger as-child>
            <button aria-label="Open menu" @click="isOpen = true">
              <Menu class="size-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" class="flex flex-col gap-2 bg-card">
            <SheetHeader class="mb-4">
              <SheetTitle class="flex items-center gap-2">
                <img :src="`${base}app_icon.png`" alt="" class="size-7" />
                Chatty
              </SheetTitle>
            </SheetHeader>
            <a
              v-for="r in routeList"
              :key="r.href"
              :href="r.href"
              class="py-2 text-base"
              @click="isOpen = false"
              >{{ r.label }}</a
            >
            <a :href="links.docs" target="_blank" class="py-2 text-base">Docs ↗</a>
            <Button as-child class="mt-4 rounded-full">
              <a :href="links.releases" target="_blank">Download free</a>
            </Button>
            <ToggleTheme />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>
