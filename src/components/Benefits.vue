<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Zap,
  Heart,
  Monitor,
} from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "zap",
    title: "GPU-Accelerated UI",
    description:
      "Built with GPUI — the same framework powering Zed editor. Every frame is rendered on the GPU, giving you a silky-smooth agent interface even during long-running autonomous tasks.",
  },
  {
    icon: "heart",
    title: "Open Source & Free",
    description:
      "MIT licensed and completely free. Bring your own API keys. No vendor lock-in, no subscription tiers, no feature gates. Your agent, your rules.",
  },
  {
    icon: "monitor",
    title: "Two Interfaces, One Agent",
    description:
      "Use the native desktop UI for rich visual output, or switch to the terminal interface (chatty-tui) for scripting, automation, and headless runs — same agent, same memory, everywhere you work.",
  },
];

const iconMap: Record<
  string,
  | typeof Zap
  | typeof Heart
  | typeof Monitor
> = {
  zap: Zap,
  heart: Heart,
  monitor: Monitor,
};
</script>

<template>
  <section
    id="benefits"
    class="container py-24 sm:py-32"
  >
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <div>
        <h2 class="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Why developers choose Chatty
        </h2>
        <p class="text-xl text-muted-foreground mb-8">
          Chatty was built by a developer who needed a fast, private, and
          genuinely capable AI agent — one that could act, not just answer.
          Available as a desktop UI and a terminal interface.
        </p>
      </div>

      <div class="grid lg:grid-cols-1 gap-4 w-full">
        <Card
          v-for="({ icon, title, description }, index) in benefitList"
          :key="title"
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number"
        >
          <CardHeader>
            <div class="flex justify-between">
              <component
                class="size-8 mb-6 text-primary"
                :is="iconMap[icon]"
              />

              <span
                class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30"
                >0{{ index + 1 }}</span
              >
            </div>

            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
