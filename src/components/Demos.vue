<script setup lang="ts">
import { ref } from "vue";

interface DemoProps {
  title: string;
  description: string;
  gif: string;
}

const base = import.meta.env.BASE_URL;

const demos: DemoProps[] = [
  {
    title: "Mermaid Diagrams",
    description: "Render flowcharts, sequence diagrams, ER diagrams, and 20+ more diagram types inline — pure Rust, no browser required.",
    gif: `${base}mermaid.gif`,
  },
  {
    title: "LaTeX Math",
    description: "Inline and block math rendered to crisp SVGs via Typst. Theme-aware dark and light rendering, instantly.",
    gif: `${base}advanced_math_rendering.gif`,
  },
  {
    title: "Tool Use",
    description: "Read, write, and delete files within your sandboxed workspace. The LLM asks for approval before any destructive action.",
    gif: `${base}file_add_edit_delete.gif`,
  },
  {
    title: "Shell Commands",
    description: "Execute bash commands in a sandboxed shell. Streaming output, per-command approval, and network isolation built in.",
    gif: `${base}shell_command.gif`,
  },
  {
    title: "Token Tracking",
    description: "Per-message token counts and cost breakdowns. A context window fill bar shows exactly how much budget remains.",
    gif: `${base}advanced_token_tracking.gif`,
  },
  {
    title: "MCP Servers",
    description: "Add, edit, and remove MCP servers on the fly — even from within the chat itself.",
    gif: `${base}mcp_add_edit_delete2.gif`,
  },
  {
    title: "Code Highlighting",
    description: "Syntax-highlighted code blocks for 30+ languages via tree-sitter. One-click copy included.",
    gif: `${base}codehighlighting.gif`,
  },
  {
    title: "Web Fetch",
    description: "Let the LLM fetch and read live web pages — converted to clean markdown, ready for analysis.",
    gif: `${base}webfetch.gif`,
  },
  {
    title: "Internet Access",
    description: "Fine-grained network controls for shell commands — allow all, block all, or allow specific domains.",
    gif: `${base}advanced_internet_access_settings.gif`,
  },
];

const active = ref(0);
</script>

<template>
  <section
    id="demos"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      See It In Action
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Real capabilities, no mockups
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-10">
      Short recordings straight from the app.
    </h3>

    <!-- Tab buttons -->
    <div class="flex flex-wrap justify-center gap-2 mb-8">
      <button
        v-for="(demo, i) in demos"
        :key="demo.title"
        @click="active = i"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium transition-colors',
          active === i
            ? 'bg-primary text-primary-foreground'
            : 'bg-muted text-muted-foreground hover:bg-muted/80',
        ]"
      >
        {{ demo.title }}
      </button>
    </div>

    <!-- Active demo -->
    <div class="max-w-4xl mx-auto">
      <div class="rounded-xl overflow-hidden border border-primary/10 shadow-lg">
        <img
          :src="demos[active].gif"
          :alt="demos[active].title"
          class="w-full h-auto"
        />
      </div>
      <div class="mt-4 text-center">
        <h4 class="font-semibold text-lg">{{ demos[active].title }}</h4>
        <p class="text-muted-foreground mt-1">{{ demos[active].description }}</p>
      </div>
    </div>
  </section>
</template>
