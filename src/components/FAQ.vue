<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading.vue";
import { links } from "@/data/product";

const faq = [
  {
    q: "Do I need to be technical?",
    a: "No. You describe tasks in plain words. Setup takes about ten minutes today and the one technical step is connecting an AI model: pasting a key from OpenRouter, or installing Ollama for a free local model. The step-by-step guide walks you through it.",
  },
  {
    q: "Is it really free? What does it cost to use?",
    a: "Chatty itself is free and open source (MIT). You pay the AI provider you connect, per use, and Chatty shows the cost of every answer. With a local model through Ollama, it costs nothing.",
  },
  {
    q: "Where does my data go?",
    a: "Your conversations, memory and settings are stored on your computer, and the app sends nothing to us. The parts of your files the AI reads go to the AI provider you picked, or nowhere at all with a local model. It also checks GitHub for updates.",
  },
  {
    q: "Can it mess up my files?",
    a: "It can only work inside the folder you give it, and you choose how much it may do on its own. With “Always Ask” it shows every change and waits for your OK. On macOS and Linux its commands run in a sandbox. Deleting files can't be undone, so ask it not to delete when you're trying it out.",
  },
  {
    q: "Which AI models can I use?",
    a: "Hundreds of models through one OpenRouter key (including Claude, GPT, Gemini, Mistral and open models), your company's Azure OpenAI deployments, local models through Ollama, and, in the terminal app, any OpenAI-compatible server such as vLLM or LM Studio.",
  },
  {
    q: "Does it work with Outlook, Teams or Slack?",
    a: "Not yet. Chatty's extension list includes Google Calendar, Gmail, Google Drive and Hugging Face, and it can connect to any MCP server you run. More are on the way.",
  },
  {
    q: "I already use another AI assistant. Can I use both?",
    a: "Yes. Chatty reads the instruction files (AGENTS.md, CLAUDE.md) and skills other AI tools use, so what you've already set up carries over.",
  },
  {
    q: "What's the difference between the desktop app and the terminal app?",
    a: "Same AI, same settings and memory. The desktop app is for everyday work with files, documents and the browser; the terminal app (chatty-tui) is for the command line, scripts and automation, and can run inside the Zed editor.",
  },
];
</script>

<template>
  <section id="faq" class="container max-w-3xl py-20 md:py-28">
    <SectionHeading eyebrow="Questions" title="Good to know." center />
    <Accordion type="single" collapsible class="mt-10">
      <AccordionItem v-for="(f, i) in faq" :key="f.q" :value="`q${i}`">
        <AccordionTrigger class="text-left text-base">{{ f.q }}</AccordionTrigger>
        <AccordionContent class="text-[15px] leading-relaxed text-muted-foreground">{{ f.a }}</AccordionContent>
      </AccordionItem>
    </Accordion>
    <p class="mt-8 text-center text-sm text-muted-foreground">
      Something else? <a :href="links.issues" target="_blank" class="text-primary hover:underline">Ask on GitHub</a>
      or read the <a :href="links.docs" target="_blank" class="text-primary hover:underline">docs</a>.
    </p>
  </section>
</template>
