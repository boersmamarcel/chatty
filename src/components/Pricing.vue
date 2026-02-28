<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Check } from "lucide-vue-next";

const benefitList: string[] = [
  "All 6 LLM providers (OpenAI, Anthropic, Google, Mistral, Azure, Ollama)",
  "100+ supported models",
  "Rich Markdown, code, and LaTeX rendering",
  "Tool use & MCP server support",
  "Cost and token tracking",
  "20+ built-in themes",
  "Auto-updates with integrity verification",
  "macOS, Linux, and Windows",
];
</script>

<template>
  <section id="pricing" class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Pricing
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Free. Forever. Open Source.
    </h2>

    <h3
      class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14"
    >
      Chatty is MIT licensed. No subscriptions, no paywalls, no feature tiers.
      Bring your own API keys and you're good to go.
    </h3>

    <div class="flex justify-center">
      <Card
        class="w-full max-w-lg drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary"
      >
        <CardHeader class="text-center">
          <CardTitle class="pb-2 text-3xl">
            Chatty
          </CardTitle>

          <CardDescription class="pb-4 text-base">Everything included, always free</CardDescription>

          <div>
            <span class="text-5xl font-bold">$0</span>
            <span class="text-muted-foreground"> / forever</span>
          </div>
        </CardHeader>

        <CardContent class="flex">
          <div class="space-y-4 w-full">
            <span
              v-for="benefit in benefitList"
              :key="benefit"
              class="flex"
            >
              <Check class="text-primary mr-2 shrink-0" />
              <h3>{{ benefit }}</h3>
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            as-child
            class="w-full"
          >
            <a
              href="https://github.com/boersmamarcel/chatty2/releases"
              target="_blank"
            >
              Download on GitHub
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
