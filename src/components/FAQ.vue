<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What makes Chatty an AI agent and not just a chat client?",
    answer:
      "Chatty's agent can take autonomous actions: execute shell commands, read and write files, fetch web pages, run MCP servers, and chain tool calls across a conversation — all with persistent memory across sessions. It acts on your behalf rather than just generating text, which is the defining characteristic of an AI agent.",
    value: "item-1",
  },
  {
    question: "Which AI providers and models are supported?",
    answer:
      "Chatty supports OpenAI (GPT-4.1, GPT-5, GPT-5.1, GPT-5.2), Anthropic (Claude Opus 4.6, Sonnet 4.6, Haiku 4.5), Google Gemini (3 Pro/Flash), Mistral (Large 3, Small 3.2), Azure OpenAI (with Entra ID auth), and Ollama for fully local models. That's 100+ models across 6 providers — your agent picks the best one for each job.",
    value: "item-2",
  },
  {
    question: "Is it really free? What do I need?",
    answer:
      "Yes, completely free and open source (MIT license). You supply your own API keys for the cloud providers you want to use — there are no subscription fees from Chatty itself. For fully local inference, use Ollama and pay nothing at all.",
    value: "item-3",
  },
  {
    question: "Is my data private? Can the agent access my files safely?",
    answer:
      "Your conversations are stored locally in JSON files on your machine. Chatty has zero telemetry and zero cloud storage. API keys are masked and never logged. Shell execution is sandboxed using bubblewrap on Linux and sandbox-exec on macOS. File access is scoped to your workspace, and MCP servers are disabled by default — you control exactly what the agent can touch.",
    value: "item-4",
  },
  {
    question: "What is the terminal interface (chatty-tui)?",
    answer:
      "chatty-tui is a full-featured terminal UI for Chatty. Run it interactively in your terminal, fire off headless one-liners, or pipe stdin directly to your agent in shell scripts and CI pipelines. It shares the same memory, providers, and tools as the desktop UI — same agent, different interface.",
    value: "item-5",
  },
  {
    question: "What platforms does Chatty support?",
    answer:
      "Chatty ships native binaries for macOS (Intel and Apple Silicon), Linux (x86_64), and Windows (x86_64). Both the desktop UI and the terminal interface are included in every release, built with the same GPU-accelerated GPUI framework.",
    value: "item-6",
  },
];
</script>

<template>
  <section
    id="faq"
    class="container md:w-[700px] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">FAQ</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Common Questions
      </h2>
    </div>

    <Accordion
      type="single"
      collapsible
      class="AccordionRoot"
    >
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
      >
        <AccordionTrigger class="text-left"> {{ question }} </AccordionTrigger>

        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 class="font-medium mt-4">
      Still have questions?
      <a
        href="https://github.com/boersmamarcel/chatty2/issues"
        target="_blank"
        class="underline text-primary"
      >
        Open an issue on GitHub
      </a>
    </h3>
  </section>
</template>
