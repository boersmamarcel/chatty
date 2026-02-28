<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Cpu,
  Shield,
  Palette,
  DollarSign,
  Wrench,
  Globe,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "globe",
    title: "Multi-Provider Support",
    description:
      "Connect to OpenAI, Anthropic, Google Gemini, Mistral, Azure OpenAI, and Ollama. Switch models mid-conversation with a single click.",
  },
  {
    icon: "cpu",
    title: "Rich Content Rendering",
    description:
      "Full Markdown support with syntax-highlighted code blocks, LaTeX math rendered as crisp SVGs, and inline image & PDF previews.",
  },
  {
    icon: "dollarSign",
    title: "Cost Tracking",
    description:
      "See per-message token usage and cost estimates in real time. Track spending per conversation so you always know what you're paying for.",
  },
  {
    icon: "wrench",
    title: "Tool Use & MCP",
    description:
      "First-class Model Context Protocol support. Run file operations, bash commands, and custom MCP servers — all sandboxed for safety.",
  },
  {
    icon: "palette",
    title: "20+ Themes",
    description:
      "Light and dark variants for Catppuccin, TokyoNight, Gruvbox, Solarized, and more. Your workflow, your aesthetic.",
  },
  {
    icon: "shield",
    title: "Privacy First",
    description:
      "No telemetry, no cloud storage. API keys stay local. Shell execution is sandboxed. Workspace file access is scoped.",
  },
];

const iconMap: Record<
  string,
  | typeof Cpu
  | typeof Shield
  | typeof Palette
  | typeof DollarSign
  | typeof Wrench
  | typeof Globe
> = {
  cpu: Cpu,
  shield: Shield,
  palette: Palette,
  dollarSign: DollarSign,
  wrench: Wrench,
  globe: Globe,
};
</script>

<template>
  <section
    id="features"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Features
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Everything you need, nothing you don't
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Built with Rust and GPUI for a native, GPU-accelerated experience that
      feels instant — because it is.
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="{ icon, title, description } in featureList"
        :key="title"
      >
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-primary"
              />
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped></style>
