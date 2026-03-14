<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Cpu,
  Shield,
  Palette,
  DollarSign,
  Wrench,
  Globe,
  Database,
  Brain,
  RefreshCw,
  BookMarked,
  Terminal,
  KeyRound,
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
      "Full Markdown support with syntax-highlighted code blocks, LaTeX math rendered as crisp SVGs, Mermaid diagram rendering (23 diagram types, pure Rust — no browser needed), and inline image & PDF previews.",
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
  {
    icon: "brain",
    title: "Thinking & Traces",
    description:
      "Collapsible extended thinking blocks let you inspect a model's reasoning step by step. Tool call traces show duration and status at a glance.",
  },
  {
    icon: "database",
    title: "Training Data Export",
    description:
      "Export conversations as ATIF or JSONL (SFT & DPO pairs) for fine-tuning. Thumbs up/down feedback and regeneration pairs are tracked automatically.",
  },
  {
    icon: "refreshCw",
    title: "Auto-Updates",
    description:
      "Background update checks against GitHub releases. One-click install with SHA-256 verification and automatic relaunch — always on the latest version.",
  },
  {
    icon: "bookMarked",
    title: "Agent Memory",
    description:
      "Built-in persistent memory lets the agent remember facts across conversations. Semantic search surfaces the most relevant memories automatically before each response.",
  },
  {
    icon: "terminal",
    title: "Terminal Interface",
    description:
      "chatty-tui brings Chatty to the command line. Use it interactively, fire off headless one-liners, or pipe stdin straight to your LLM.",
  },
  {
    icon: "keyRound",
    title: "Environment Secrets",
    description:
      "Manage per-session environment variables from Settings → Secrets. The AI knows which variable names are available but never sees the actual values.",
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
  | typeof Database
  | typeof Brain
  | typeof RefreshCw
  | typeof BookMarked
  | typeof Terminal
  | typeof KeyRound
> = {
  cpu: Cpu,
  shield: Shield,
  palette: Palette,
  dollarSign: DollarSign,
  wrench: Wrench,
  globe: Globe,
  database: Database,
  brain: Brain,
  refreshCw: RefreshCw,
  bookMarked: BookMarked,
  terminal: Terminal,
  keyRound: KeyRound,
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
