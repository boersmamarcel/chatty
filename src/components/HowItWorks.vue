<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
  gif?: string;
}

const base = import.meta.env.BASE_URL;

const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: "Step 1",
    title: "Download & Install",
    description:
      "Grab the latest release for your OS from GitHub — macOS (Intel or Apple Silicon), Linux, or Windows. No package manager required, just run the binary.",
  },
  {
    badgeTitle: "Step 2",
    title: "Add Your API Keys",
    description:
      "Open Settings and add API keys for the providers you want to use. Keys are stored locally and never leave your machine. Prefer local models? Point Chatty at your Ollama instance.",
    gif: `${base}add_provider_and_model.gif`,
  },
  {
    badgeTitle: "Step 3",
    title: "Start Chatting",
    description:
      "Pick a model and start a conversation. Switch providers on the fly, use built-in tools, or connect MCP servers for extended capabilities. Chatty gets out of your way.",
    gif: `${base}shell_command.gif`,
  },
];
</script>

<template>
  <section
    id="howitworks"
    class="container py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        How It Works
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Up and running in minutes
      </h2>
    </div>

    <div class="lg:w-[80%] mx-auto relative">
      <div
        v-for="(
          { badgeTitle, title, description }, index
        ) in HowItWorksList"
        :key="title"
        :class="[
          'flex mb-8 items-center gap-8',
          { 'flex-row-reverse': index % 2 !== 0 },
        ]"
      >
        <Card class="h-full bg-transparent border-0 shadow-none flex-1">
          <CardHeader>
            <div class="pb-4">
              <Badge>{{ badgeTitle }}</Badge>
            </div>

            <CardTitle class="text-2xl">
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-lg">
            {{ description }}
          </CardContent>
        </Card>

        <div
          class="hidden md:flex size-20 rounded-full bg-primary/20 ring-8 ring-primary/10 items-center justify-center shrink-0"
        >
          <span class="text-3xl font-bold text-primary">{{ index + 1 }}</span>
        </div>

        <div class="flex-1 hidden md:block">
          <img
            v-if="gif"
            :src="gif"
            :alt="title"
            class="rounded-lg w-full shadow-lg border border-primary/10"
          />
        </div>

        <div
          :class="[
            '-z-10 absolute right-0 w-44 h-72 lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl',
            {
              'left-0': index % 2 !== 0,
            },
          ]"
        ></div>
      </div>
    </div>
  </section>
</template>
